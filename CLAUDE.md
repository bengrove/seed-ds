# CLAUDE.md — Project memory for seed-ds

Fresh-session orientation. Read this first when you land on this repo.

---

## What this is

**seed-ds** is Seed Health's agent-first design system, packaged as a Claude Code plugin. It teaches coding agents (Claude Code, Claude Design, Cursor, Windsurf, etc.) Seed's tokens, components, voice, patterns, and live page references so generated output stays on-brand.

- Repo: https://github.com/bengrove/seed-ds
- Primary branch: `main` — push directly, no PRs yet
- Owner/user: Ben Grove (ben@seed.com)

Read [ARCHITECTURE.md](ARCHITECTURE.md) for the 13 architecture decisions that explain every structural choice.

---

## External sources of truth

| Source | What it owns | How we consume it |
|---|---|---|
| [seed-health/tokens](https://github.com/seed-health/tokens) | Design tokens (Style Dictionary) | Auto-synced via `scripts/sync-tokens.mjs` into `skills/seed/references/tokens.md` |
| [seed-health/my-seed-live/components](https://github.com/seed-health/my-seed-live/tree/main/components) | Real component code (canonical) | Agents read directly; components ship with an entry in `components.md` → Shipped registry |
| [Chromatic Storybook](https://www.chromatic.com/library?appId=63b5c3a4b545db5441de378b) | Component visual catalog | Agents cross-reference for props/states; Chromatic can lag the code |
| Cloudinary `dljz0lko8` | Headless CDN (homepage, PLP, editorial, lifestyle) | Open URLs, `f_auto,q_auto` standard transforms |
| Shopify CDN | PDP product imagery + checkout | Shopify handles optimization |
| Bynder (`seed.getbynder.com`) | DAM — master files, approvals | Not a web CDN; do not hotlink in production |

---

## Repo structure

```
seed-ds/
├── .claude-plugin/plugin.json        Plugin manifest
├── ARCHITECTURE.md                   13 architecture decisions (why the repo is shaped this way)
├── CLAUDE.md                         You are here
├── README.md                         Install + setup flow, current state, contributing
├── LICENSE
├── docs/
│   └── claude-design-setup.md        Rollout playbook for Anthropic's Claude Design
├── scripts/
│   └── sync-tokens.mjs               Regenerates tokens.md from seed-health/tokens
└── skills/seed/
    ├── SKILL.md                      Agent entry point, activation rules, read order
    └── references/
        ├── tokens.md                 🟢 Auto-generated from @seed-health/tokens
        ├── components.md             🟡 Placeholder + Shipped registry (Badge is first entry)
        ├── voice.md                  🟢 Index into copy/*.md
        ├── copy/
        │   ├── tov.md                Three pillars, formulas, funnel-stage mix
        │   ├── mechanics.md          Grammar, punctuation, citations, casing, emoji
        │   ├── vocabulary.md         Terms, product naming, Elevated vs. Simple
        │   ├── surfaces.md           Per-surface copy rules
        │   ├── microcopy.md          CTAs, errors, empty states (verbatim strings)
        │   ├── compliance.md         FDA / structure-function / strain claims
        │   └── examples.md           Approved copy by funnel stage and pillar
        ├── patterns.md               🚧 Placeholder (Atlas boilerplate removed; routes to pages/<surface>/ for real composition)
        ├── responsive.md             Breakpoints, grid, container rules
        ├── motion.md                 🚧 Placeholder (Atlas boilerplate removed; Seed motion guidance pending)
        ├── assets.md                 🟢 Bynder / Cloudinary / Shopify CDN + Media Container ratios
        ├── lessons.md                Gotchas, decisions, open questions
        ├── examples.md               🚧 Placeholder (regenerated post-refactor)
        ├── pages/                    🟡 Live seed.com captures (7/14 complete)
        │   ├── _template/
        │   ├── homepage/             ✅
        │   ├── pdp/                  ✅ DS-01 canonical
        │   ├── plp/                  ✅
        │   ├── cart/                 ✅
        │   ├── checkout/             ✅ Shopify-hosted, SPA, screenshots only
        │   ├── reference/            ✅ DS-01 reference page
        │   ├── cultured/             ✅ Microbiome 101 canonical
        │   ├── account/              ⏳ in progress
        │   ├── subscription/         ⏳
        │   ├── approach/             ⏳
        │   ├── seed-labs/            ⏳
        │   ├── faq/                  ⏳ help.seed.com, Gorgias skin
        │   └── flows/
        │       ├── biotics-quiz/     ⏳
        │       └── web-onboarding/   ⏳
        └── products/                 🟢 7/7 captured (per-product identity within templates)
            ├── _template/                    Updated to 6-step ramp + screenshot fields
            ├── ds-01/                ✅ Daily Synbiotic (brand-primary, canonical)
            ├── dm-02/                ✅ Daily Multivitamin (own ramp, sage)
            ├── am-02/                ✅ Energy + Focus (own ramp, citrine)
            ├── pm-02/                ✅ Sleep + Restore (own ramp, mint)
            ├── pds-08/               ✅ Pediatric Daily Synbiotic (brand-primary, legacy template)
            ├── vs-01/                ✅ Vaginal Synbiotic (brand-primary, waitlist, strict compliance)
            └── daily-essentials-duo/ ✅ DS-01 + DM-02 bundle (brand-primary)
```

Legend: 🟢 stable · 🟡 in progress · 🔴 not started · 🚧 placeholder · ✅ done · ⏳ pending

---

## Current state (snapshot)

From [README.md](README.md) Current state section:

- 🟢 **Tokens:** Source of truth is seed-health/tokens. `tokens.md` is auto-generated — run `node scripts/sync-tokens.mjs` to refresh.
- 🟢 **Voice:** Seven files under `copy/` cover tone, mechanics, vocabulary, surfaces, microcopy, compliance, examples. Source: Brand TOV 2025 + Seed Copy Style Guide 2026 + Seed UX Best Practices.
- 🟡 **Components:** Finishing in Figma + dev refactor underway. `components.md` is a placeholder with a "Shipped components" registry (Badge shipped 2026-04-22). Full inventory will be regenerated from `my-seed-live/components` + Storybook post-refactor.
- 🟡 **Patterns:** v1 covers top-of-funnel landers, DS-01 PDP, member flows. More surfaces pending.
- 🟡 **Live references:** 7/14 page templates captured. 🟢 7/7 product files populated with index.md + desktop/mobile screenshots (DS-01, DM-02, AM-02, PM-02, PDS-08, VS-01, Daily Essentials Duo).
- 🟢 **README "Why read what" table:** Capability map keyed by path with Path / Load when / Payoff / Example columns. Tells agents which references to load for which task.
- 🟢 **SKILL.md read order:** Aligned with the README table — covers tokens, components, voice/copy, conditional reads (responsive / motion / assets), surface + product captures, lessons.md before shipping.

---

## Page capture workflow

For each pending template:

1. Open the surface in Dia at 1440px wide
2. Hit `Alt+M` (MD-This-Page extension) → copy the content markdown
3. Full-page screenshot → save as `desktop.png`
4. Resize to 390px → repeat screenshot → save as `mobile.png`
5. Compress PNGs (user's compress script)
6. Paste the markdown into chat with "this is the X" (where X = template name)
7. Claude files it into `skills/seed/references/pages/<template>/index.md` with proper frontmatter and structural analysis
8. User drops `desktop.png` + `mobile.png` into the folder
9. Claude commits when user confirms

**Dropped from workflow:** `.h2d` html.to.design files. Agents can't read binary Figma files and the size-to-value ratio didn't justify it. A designer who needs a Figma version can re-export on demand.

**Shopify checkout caveat:** the .MD this page extension can't extract SPA content. Checkout capture is screenshots-only. Note in the checkout frontmatter: this surface is platform-governed (Shopify Branding API), not headless-governed — token + component rules don't apply the same way.

---

## Product capture workflow

Products use the same folder shape as pages (`<sku>/index.md` + `desktop.png` + `mobile.png`). Different content focus: each product file captures *identity inside the template* (subcategory color ramp, hero imagery URLs, claim hierarchy, compliance scope, imagery direction, template deviations) rather than the structural layout.

When seed.com is reachable via Claude in Chrome, fetch directly:
1. User loads the product PDP in the MCP tab group (`seed.com` requires manual nav — Cloudflare blocks the navigate tool's permission flow).
2. Claude pulls page text via `get_page_text` and runs JS via `javascript_tool` to extract: per-product CSS color vars, dominant background-color tally, Shopify CDN imagery URLs.
3. User shares the design system color panel (6-step ramp screenshot) when one exists.
4. Claude drafts `products/<sku>/index.md` with frontmatter (color ramp, hero imagery, key claims, compliance notes, surfaces) + body (visual identity, content specifics, imagery direction, template deviations, related links).
5. User captures full-page desktop (1440px) + mobile (390px) screenshots, runs the compress script, drops them into the product folder.
6. Claude commits when user confirms.

**Color ramp pattern (verified across DM-02, AM-02, PM-02):** The design system defines a 6-step ramp per product (`primary`, `secondary`, `light`, `medium`, `dark`, `highlight`). The live my-seed-live CSS exposes only `medium` as `--color--<sku>` and `secondary` as `--color--<sku>-redemption`. None of the 6 steps are in `seed-health/tokens` yet — flagged in `lessons.md` as a token gap. DS-01, PDS-08, VS-01, and Daily Essentials Duo (synbiotic-category) all use `color.primary.seed-green` directly without their own ramp.

**PDS-08 Cloudinary exception:** PDS-08's PDP imagery sits on Cloudinary, not Shopify CDN (legacy PDP, predates the convention). Don't treat as a model — flagged in its product file and `lessons.md`.

---

## Current todo list (session handoff)

Completed:
- Scaffolds (pages/_template, products/_template — products updated to 6-step ramp standard)
- 14-template list confirmed
- 7 page captures done: homepage, plp, pdp, cart, checkout, cultured, reference
- All 7 product files captured: DS-01, DM-02, AM-02, PM-02, PDS-08, VS-01, Daily Essentials Duo (each with index.md + desktop.png + mobile.png)
- README "Why read what" capability table (Path / Load when / Payoff / Example) covering all references
- SKILL.md read order aligned with the table — main read order, copy-specific, surface + product, trigger keywords for each
- lessons.md updated with per-product token gap, PDS-08 Cloudinary legacy exception
- ARCHITECTURE Decision 04 rewritten to reflect code-first sourcing (my-seed-live → Storybook target state)
- tokens.md sync flow: scripts/sync-tokens.mjs pulls from seed-health/tokens; PR open at seed-health/tokens#25 to regenerate stale build outputs after the mobile-display reorder

In progress:
- `account` page capture (up next)

Pending page captures (6):
- subscription, approach, seed-labs, faq, flows/biotics-quiz, flows/web-onboarding

Pending:
- Cross-link pages/ and products/ from patterns.md / tokens.md / voice.md
- Follow-up PR to seed-health/tokens publishing the per-product 6-step ramps as `subcategory.<sku>.*` tokens (so `tokens.md` carries them and agents can reference by name)
- Smoke test the SKILL.md ↔ README table alignment in a Claude Code session ("For a DS-01 promo email, which references should you read?")

---

## Active unresolved flags (don't lose these)

1. **CTA casing contradiction.** `microcopy.md` principle #1 says CTAs are Sentence Case. But the CTA table in `microcopy.md` and `mechanics.md` channel table still mark CTA as Title Case. Only one CTA got lowercased (`Start my DS-01® Journey`). Three places need to agree — not touched yet.

2. **Footnote symbol system.** `reference/index.md` (DS-01 reference page) has `‡`, `††`, `†††` footnotes in the Strain-Specific Benefit Studies table without inline definitions. These are claim-strength markers that tie back to `copy/compliance.md` — needs reconciliation.

3. **Shipped component enforcement.** User asked how to force agents to use shipped components (Badge) vs inventing one. Was about to edit SKILL.md with stronger enforcement language (new principle, read-order step, output rule) + add a "How to use shipped components" section to `components.md`. Paused before implementing. Pick up here when fresh session resumes.

4. **Per-product subcategory color tokens.** DM-02, AM-02, PM-02 each have a 6-step design-system ramp, but only the `medium` and `secondary` shades are exposed in live my-seed-live CSS as `--color--<sku>` / `--color--<sku>-redemption`. None of the six steps are in `seed-health/tokens`. Each product file documents the full ramp inline. Durable fix: PR to `seed-health/tokens` publishing `subcategory.<sku>.*` tokens. See `lessons.md`.

---

## Working patterns Claude Code should follow

- **Only commit when explicitly asked.** Never proactively `git commit`.
- **Only use emojis when explicitly requested.** Check the system prompt for this guardrail.
- **Verify before committing.** Read the diff, check file sizes for LFS candidates.
- **Honest about uncertainty.** When something's DRAFT or speculative, say so. The user caught multiple cases of fabricated scaffolding (old components.md, old examples.md) — don't invent when you can link to source.
- **Commit message style:**
  - Short imperative title (one line)
  - Detailed body explaining the why
  - Trailer: `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`
- **Push to main directly** when asked — user has no PR workflow yet.

---

## Key files to re-read when resuming

1. [README.md](README.md) — current state, setup flow
2. [ARCHITECTURE.md](ARCHITECTURE.md) — all 13 decisions
3. [skills/seed/SKILL.md](skills/seed/SKILL.md) — agent activation + read order
4. [skills/seed/references/pages/_template/index.md](skills/seed/references/pages/_template/index.md) — capture scaffold
5. Most recent captures (homepage, pdp, reference) for format reference
6. [docs/claude-design-setup.md](docs/claude-design-setup.md) — Claude Design rollout context

---

## Recent commit history (top 10)

Run `git log --oneline -10` for the live list. As of 2026-04-29:

- `b080584` Capture all 7 product files with full visual identity
- `6cc19da` Align SKILL.md read order with the new "Why read what" table
- `a55d968` Add Example column to "Why read what" table
- `3e89050` Add "Why read what" value map to README
- `a25fc9d` Sync tokens.md from seed-health/tokens@c3369cb
- `7c9691c` Merge branch 'main' of https://github.com/bengrove/seed-ds
- `fc1bf52` Update Decision 04 to reflect code-first component sourcing
- `a4bb683` Refine architecture documentation for clarity and structure
- `bc9c2bf` Add CLAUDE.md project memory file
- `715c562` Link Badge to real code and stories paths in my-seed-live
