#!/usr/bin/env node
// Sync design tokens from github.com/seed-health/tokens into references/tokens.md.
// Replaces content between <!-- SYNC:BEGIN --> and <!-- SYNC:END --> markers.
//
// Usage: node scripts/sync-tokens.mjs
// Requires: git CLI, node 18+.

import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const TOKENS_REPO = "https://github.com/seed-health/tokens.git";
const CACHE_DIR = "/tmp/seed-tokens-cache";
const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const TOKENS_MD = join(SCRIPT_DIR, "..", "skills", "seed", "references", "tokens.md");
const MARKER_BEGIN = "<!-- SYNC:BEGIN -->";
const MARKER_END = "<!-- SYNC:END -->";

function sh(cmd, opts = {}) {
  return execSync(cmd, { stdio: "pipe", encoding: "utf8", ...opts }).trim();
}

function fetchTokens() {
  if (existsSync(CACHE_DIR)) rmSync(CACHE_DIR, { recursive: true, force: true });
  console.log(`Cloning ${TOKENS_REPO}...`);
  sh(`git clone --depth 1 ${TOKENS_REPO} ${CACHE_DIR}`);
  const sha = sh(`git -C ${CACHE_DIR} rev-parse --short HEAD`);
  const tokensPath = join(CACHE_DIR, "build", "json", "tokens.json");
  if (!existsSync(tokensPath)) throw new Error(`Missing ${tokensPath}`);
  const json = JSON.parse(readFileSync(tokensPath, "utf8"));
  return { json, sha };
}

function isPlainObject(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

// Object shapes that should be rendered as a single composite leaf instead of walked deeper.
// Anything else is treated as a group of nested tokens and walked.
const TYPOGRAPHY_KEYS = ["fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing"];
const SHADOW_KEYS = ["offsetX", "offsetY", "blur", "spread", "color"];

function isCompositeLeaf(v) {
  if (!isPlainObject(v)) return false;
  const keys = Object.keys(v);
  // Typography: any of the typography keys present.
  if (TYPOGRAPHY_KEYS.some(k => keys.includes(k))) return true;
  // Shadow: all shadow keys present.
  if (SHADOW_KEYS.every(k => keys.includes(k))) return true;
  return false;
}

function isLeaf(v) {
  if (v === null || typeof v !== "object") return true;
  if (Array.isArray(v)) return true;
  return isCompositeLeaf(v);
}

// Walk a nested object; yield { path: [...], value } for every leaf.
function* walk(obj, path = []) {
  for (const [k, v] of Object.entries(obj)) {
    const next = [...path, k];
    if (isLeaf(v)) {
      yield { path: next, value: v };
    } else {
      yield* walk(v, next);
    }
  }
}

function formatValue(v) {
  if (v === null) return "`null`";
  if (typeof v === "string") return `\`${v}\``;
  if (typeof v === "number") return `\`${v}\``;
  if (typeof v === "boolean") return `\`${v}\``;
  if (Array.isArray(v)) {
    // Render arrays as inline JSON so the table row stays on one line.
    return "`" + JSON.stringify(v) + "`";
  }
  if (isPlainObject(v)) {
    // Composite leaf (typography, shadow): flatten to `k: v, k: v`.
    return Object.entries(v)
      .map(([k, val]) => `${k}: \`${typeof val === "string" ? val : JSON.stringify(val)}\``)
      .join("<br>");
  }
  return "`" + String(v) + "`";
}

function categoryHeading(name) {
  // kebab-case -> Title Case
  return name
    .split("-")
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

function renderCategory(categoryName, value) {
  const rows = [];
  if (isLeaf(value)) {
    // Top-level scalar or composite (e.g. `active: 0.7`, `subtle-shadow: {...}`).
    rows.push({ token: categoryName, value });
  } else {
    for (const leaf of walk(value)) {
      rows.push({ token: [categoryName, ...leaf.path].join("."), value: leaf.value });
    }
  }
  const lines = [];
  lines.push(`### ${categoryHeading(categoryName)}`);
  lines.push("");
  lines.push("| Token | Value |");
  lines.push("|---|---|");
  for (const r of rows) lines.push(`| \`${r.token}\` | ${formatValue(r.value)} |`);
  lines.push("");
  return lines.join("\n");
}

function buildGeneratedBlock(json, sha) {
  const now = new Date().toISOString().split("T")[0];
  const sections = [];
  sections.push(`_Auto-generated from [seed-health/tokens@${sha}](https://github.com/seed-health/tokens/tree/${sha}) on ${now}. Do not edit by hand — run \`node scripts/sync-tokens.mjs\`._`);
  sections.push("");
  for (const [category, value] of Object.entries(json)) {
    sections.push(renderCategory(category, value));
  }
  return sections.join("\n");
}

function replaceBetweenMarkers(md, generated) {
  const begin = md.indexOf(MARKER_BEGIN);
  const end = md.indexOf(MARKER_END);
  if (begin === -1 || end === -1) {
    throw new Error(`Missing sync markers in ${TOKENS_MD}. Add ${MARKER_BEGIN} and ${MARKER_END}.`);
  }
  if (end < begin) throw new Error(`SYNC:END appears before SYNC:BEGIN in ${TOKENS_MD}`);
  const before = md.slice(0, begin + MARKER_BEGIN.length);
  const after = md.slice(end);
  return `${before}\n\n${generated}\n${after}`;
}

function main() {
  const { json, sha } = fetchTokens();
  const generated = buildGeneratedBlock(json, sha);
  const current = readFileSync(TOKENS_MD, "utf8");
  const updated = replaceBetweenMarkers(current, generated);
  writeFileSync(TOKENS_MD, updated);
  const categoryCount = Object.keys(json).length;
  console.log(`Synced ${categoryCount} categories from seed-health/tokens@${sha}`);
  console.log(`Wrote ${TOKENS_MD}`);
}

main();
