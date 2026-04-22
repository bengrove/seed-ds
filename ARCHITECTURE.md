# Architecture Decisions

This file documents the why behind how seed-ds is structured. If you're reading this to understand a decision, check here first. If you're making a new decision, add it here.

Every section records: what was decided, what was rejected, why, and what would change this decision.

---

### 01: Agent-first documentation, not human-first

**Decided:** seed-ds is primarily a Claude Code skill consumed by AI agents. Human readability is a secondary benefit, not the primary goal.

**Rejected:** A Notion wiki, a Storybook docs site, or a static site like Backstage/Zeroheight as the v1 source of truth.

**Why:** Three reasons.
1. Agents are the most frequent consumer of design system docs now. Landers, prototypes, Claude Design projects, Claude Code sessions all need machine-readable rules.
2. Human docs get stale because they're optimized for first-time reading, not for reference lookups. Agent-first docs get tested on every prompt.
3. Markdown files are portable. Notion and Zeroheight lock you in. A flat repo of .md files works with any agent (Claude, Cursor, Windsurf), any human editor, and any future tool.

**Would reconsider if:** The skill becomes so large that agent context limits start dropping sections. At that point, split into a lookup index with deep-dive sub-skills.

---

### 02: Markdown + plugin manifest, not a custom format

**Decided:** Every reference file is plain markdown. The only non-markdown file is `.claude-plugin/plugin.json` which is required by the Claude Code plugin format.

**Rejected:** YAML, TOML, or JSON-based specifications like Design Tokens Community Group format for the reference files.

**Why:** Agents read markdown better than structured formats because they process natural language instructions better than schemas. The tokens themselves still come from the Style Dictionary output (JSON/CSS); the markdown is the layer that explains how to use them.

**Would reconsider if:** We need programmatic validation (linting for "does this token exist"). At that point, add a CI step that parses the markdown but keep the markdown as the source.

---

### 03: Structure inspired by Atlas (pacifio/ui), customized for Seed

**Decided:** Folder structure mirrors Atlas: `.claude-plugin/` for install, `skills/seed/` for the skill content, `references/` for the reference files.

**Rejected:** Flat structure (all .md files in root), deeply nested structure (subfolders per component category), or a src/ + dist/ build split.

**Why:** Atlas's structure is proven in the wild, simple enough to hold in your head, and survives scaling from one skill to many. The `skills/[name]/` nesting means we can add a second skill (e.g., `skills/seed-marketing/`) later without restructuring.

**Would reconsider if:** We need to ship skills to multiple agents that expect different folder shapes. For now, Claude Code is the primary target.

---

### 04: Storybook is the component source of truth, not Figma

**Decided:** When a component exists in both Figma and Storybook, Storybook wins for agent input. Figma is the design tool; Storybook is the contract.

**Rejected:** Figma as source of truth (what most design teams assume). Figma MCP + Code Connect as the primary handoff.

**Why:** Three reasons specific to Seed's situation.
1. Figma component library is half-built. Storybook is further along.
2. Storybook contains real code with real states. Figma shows visual intent but doesn't render browser-accurate.
3. Claude Design and Claude Code both read code better than they read Figma files. Storybook being the truth means less translation loss.

**Would reconsider if:** Figma reaches parity or leads. At that point, Code Connect mappings become the bridge and we can treat them as equivalent sources.

---

### 05: Tokens synced from Style Dictionary, not duplicated

**Decided:** `references/tokens.md` is auto-generated from [seed-health/tokens](https://github.com/seed-health/tokens) via `scripts/sync-tokens.mjs`. The tokens repo remains the source of truth. When they conflict, the tokens repo wins — rerun the sync.

**Rejected:** Hand-writing tokens in markdown, or skipping the markdown entirely and pointing agents directly at the JSON output.

**Why:** Agents need context around tokens ("use `space.medium` for card padding, never `space.small`") that pure JSON doesn't provide. But hand-writing tokens creates drift. The compromise: token values come from the repo via the sync script, usage rules live in the hand-maintained header of `tokens.md` above the sync markers.

**Would reconsider if:** The sync script goes stale faster than the tokens repo changes, or if we need CI to guarantee freshness. CI is the next iteration; the script is the interim.

---

### 06: Voice lives in the skill, not a separate TOV document

**Decided:** `references/voice.md` is part of seed-ds. It mirrors the brand TOV and copy style guide but lives inside the skill because agents generate copy as often as they generate UI.

**Rejected:** Keeping voice in a separate Notion doc that agents would have to load separately. Asking agents to "use Seed voice" without documenting what that means.

**Why:** If the skill doesn't contain voice rules, agents default to generic product copy. Every generated headline, button label, empty state, and error message becomes a voice violation to clean up. Cheaper to give agents the rules once than to edit every output.

**Would reconsider if:** Voice diverges enough by surface that marketing and product voice are meaningfully different. At that point, split into `voice.md` and `voice-marketing.md`.

---

### 07: Component status flags over a separate "what's ready" doc

**Decided:** Every component in `components.md` has a status flag: `stable`, `beta`, `figma-only`, `planned`, `deprecated`. Mixed state is the default, not the exception.

**Rejected:** Only documenting components that are fully stable (too restrictive for our half-built state), or maintaining a separate "component roadmap" file (more to keep in sync).

**Why:** Agents need to know what exists today, not what's idealized. A `figma-only` flag tells an agent "design matches this, but no code yet, so emit the closest stable primitive and note the gap." That's more useful than pretending the component doesn't exist.

**Would reconsider if:** The library stabilizes and most components are `stable`. At that point the flags become noise and we can remove them.

---

### 08: Examples file with working snippets, not just descriptions

**Decided:** `references/examples.md` contains copy-ready code snippets, not just "here's what a hero section looks like" descriptions.

**Rejected:** Keeping examples only in Storybook, or describing patterns abstractly without code.

**Why:** Agents produce significantly better output when shown a working example than when given a prose description. The snippets serve as few-shot examples that constrain output style. Ten good examples teaches voice and structure better than ten pages of rules.

**Would reconsider if:** Examples drift from reality faster than they can be maintained. At that point, auto-generate examples from Storybook stories.

---

### 09: Lessons.md as a living document, not a wiki

**Decided:** `references/lessons.md` captures gotchas, decisions, and hard-earned knowledge in a flat, append-mostly format. Template included at bottom for consistency.

**Rejected:** A full ADR folder with numbered files, a Confluence page with categories, or just putting everything in commit messages.

**Why:** Friction kills knowledge capture. The faster someone can add a lesson after hitting a bug, the more likely they do it. A single file with a simple template is the minimum viable knowledge system.

**Would reconsider if:** The file exceeds 5000 lines. At that point split by topic.

---

### 10: Plain-text, no fancy diagrams

**Decided:** No Mermaid diagrams, no inline SVG, no Excalidraw embeds in the reference files. Tables and code blocks only.

**Rejected:** Rich formatting that renders beautifully on GitHub but confuses agents or breaks when loaded into other tools.

**Why:** The skill needs to work in Claude Code, Claude Design, Cursor, plain markdown viewers, and terminal cat commands. The lowest common denominator wins. Tables and code blocks render everywhere.

**Would reconsider if:** The target renderer supports Mermaid natively and a diagram would genuinely replace 100 lines of prose.

---

### 11: Live page captures live alongside the rules

**Decided:** `references/pages/` and `references/products/` hold real captures of seed.com — markdown (via `.MD this page`), desktop and mobile screenshots, and `.h2d` files from html.to.design. Each page template gets a folder with an `index.md` + assets.

**Rejected:** Keeping live site references in an external system (Figma file, Notion page) and linking out. Or relying only on abstract pattern descriptions in `patterns.md`.

**Why:** Agents generate better output when grounded in real examples. A prose description of "the PDP has a hero, a benefit timeline, a comparison table" is weaker than an agent that can read the actual content, see the composition in a screenshot, and inspect layout via the `.h2d`. Three file types cover three different agent needs: markdown for content structure, PNG for visual composition, `.h2d` for layout inspection.

**Would reconsider if:** Storage gets unmanageable (git LFS becomes mandatory) or captures drift so fast they're worse than no reference. At that point, script automated captures instead of manual.

---

### 12: External playbooks live in `docs/`, not the README

**Decided:** Rollout playbooks for external tools (first example: `docs/claude-design-setup.md`) live in a top-level `docs/` folder. The README references them with a short actionable summary.

**Rejected:** Folding all operational content into the README. Or keeping playbooks in a personal Notion that doesn't survive team handoff.

**Why:** The README is a reference card — what the skill is, how to install it, what's in the repo. Operational playbooks (admin access steps, usage limits, tool-specific onboarding checklists) are a different genre of content and a different audience. Mixing them bloats the README and hides the playbook from anyone who'd actually use it.

**Would reconsider if:** `docs/` grows beyond ~5 files, at which point it needs its own index and structure.

---

### 13: Automation scripts live in `scripts/`

**Decided:** One-off automation (first example: `scripts/sync-tokens.mjs`) lives in a top-level `scripts/` folder. Scripts are Node ESM, zero external dependencies where possible, and self-document via a usage comment at the top.

**Rejected:** Putting scripts inside `skills/seed/` (they aren't skill content). Using a package manager with `package.json` + scripts field (overkill for a handful of utilities).

**Why:** Separating automation from skill content keeps the skill directory clean for agents reading it. Node ESM with no deps means any contributor with Node 18+ can run them immediately — no install step, no lockfile drift. A script's usage comment is its documentation; anything longer goes in `docs/`.

**Would reconsider if:** Scripts start needing shared utilities, at which point a proper `package.json` with a small internal lib makes sense.

---

## File tree explanation

```
seed-ds/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   └── seed/
│       ├── SKILL.md
│       └── references/
│           ├── tokens.md         auto-generated by scripts/sync-tokens.mjs
│           ├── components.md
│           ├── voice.md          index into copy/*.md
│           ├── copy/             tov, mechanics, vocabulary, surfaces,
│           │                     microcopy, compliance, examples
│           ├── patterns.md
│           ├── responsive.md
│           ├── motion.md
│           ├── assets.md
│           ├── lessons.md
│           ├── examples.md
│           ├── pages/            live captures of seed.com templates
│           │                     (markdown + desktop/mobile .png + .h2d)
│           └── products/         per-product identity within templates
├── scripts/
│   └── sync-tokens.mjs           regenerates tokens.md from seed-health/tokens
├── docs/
│   └── claude-design-setup.md    rollout playbook for Anthropic's Claude Design
├── README.md
├── LICENSE
└── ARCHITECTURE.md  (you are here)
```

### Why `.claude-plugin/plugin.json` exists

Required for Claude Code plugin install via `/plugin marketplace add`. Not optional. The `plugin.json` manifest tells Claude Code what to load and where SKILL.md lives.

### Why `skills/seed/` is nested instead of flat

A plugin can contain multiple skills. The folder name becomes the skill name during install. `skills/seed/` means the skill is called `seed`. If we add a second skill (like a dedicated marketing voice skill), it becomes `skills/seed-marketing/`.

### Why `SKILL.md` is the entry point

Claude Code plugin convention. The file must be named `SKILL.md` (not `README.md` or `index.md`) for the plugin system to recognize it as a skill entry point.

### Why `references/` contains 10 files, not 1 mega-file

Three reasons.
1. Agents load references on demand. One mega-file puts everything in context at once, burning tokens on stuff not relevant to the current task.
2. Separate files let humans edit in parallel without merge conflicts.
3. Each file has a clear owner (tokens → design systems lead, voice → brand lead, etc.), so updates happen at the right place.

### Why `README.md` and `ARCHITECTURE.md` are separate

- `README.md` is for someone landing on the repo cold. "What is this, how do I install, what do I do first."
- `ARCHITECTURE.md` is for someone wanting to understand or change the architecture. "Why is the structure like this, and what would I change."

Different audiences, different jobs.

### Why `LICENSE` is internal-only

This documents Seed brand, tokens, voice, and product patterns. Not for external distribution. The license text is minimal because the enforcement mechanism is organizational, not legal.

---

## File responsibilities

Each reference file has a single job. If content doesn't fit the job, it belongs elsewhere.

| File | Job | Owner |
|---|---|---|
| `SKILL.md` | Agent activation rules, read order, non-negotiable principles | DS lead |
| `tokens.md` | Token values + usage rules, auto-generated from tokens repo | DS lead |
| `components.md` | Component inventory with status flags and anatomy | DS lead |
| `voice.md` | Index into `copy/` — TOV, microcopy, compliance, examples | Brand lead |
| `patterns.md` | Composition patterns per surface (modules, landers, PDP, member) | DS lead + PM |
| `responsive.md` | Breakpoints, grid, mobile rules | DS lead |
| `motion.md` | Duration, easing, overlay rules | DS lead |
| `assets.md` | Bynder URL patterns, Media Container ratios, imagery, video, alt text | Creative lead |
| `lessons.md` | Gotchas, decision log, open questions | Everyone |
| `examples.md` | Copy-ready snippets for common surfaces | DS lead |
| `pages/` | Live seed.com page template captures (markdown + screenshots + `.h2d`) | DS lead |
| `products/` | Per-product identity (color, claims, imagery direction) keyed to a template | DS lead + Brand lead |
| `scripts/sync-tokens.mjs` | Regenerates tokens.md from seed-health/tokens | Eng lead |
| `docs/claude-design-setup.md` | Rollout playbook for Anthropic's Claude Design tool | DS lead |

---

## Sync protocol

Things that must stay in sync with sources outside this repo.

### Tokens

- Source: [seed-health/tokens](https://github.com/seed-health/tokens) (`@seed-health/tokens` on npm; Style Dictionary output)
- Mirrored in: `references/tokens.md` (between `<!-- SYNC:BEGIN -->` and `<!-- SYNC:END -->`)
- Sync when: tokens repo publishes a new version
- How: run `node scripts/sync-tokens.mjs`. The script clones the latest tokens repo, reads `build/json/tokens.json`, and overwrites the sync region with a fresh commit-pinned snapshot.
- Future: CI job that runs the script on a schedule and opens a PR on drift.

### Voice

- Source: Brand team's TOV document
- Mirrored in: `references/voice.md`
- Sync when: brand team publishes an update
- How: brand lead edits voice.md directly, commits to the repo
- Conflicts: voice.md is the authoritative source for agents. If the brand team's doc says something different, the repo wins until voice.md is updated.

### Components

- Source: Storybook repo (component code) + Figma component library (designs)
- Mirrored in: `references/components.md`
- Sync when: a component moves status (e.g., `figma-only` → `beta`)
- How: update the status flag in components.md, add a note to lessons.md if the decision had rationale

### Bynder patterns

- Source: Bynder CSM and portal configuration
- Mirrored in: `references/assets.md`
- Sync when: portal configuration changes (new derivatives, custom domain, DAT enablement)
- How: update assets.md, note the change in lessons.md

---

## What this repo is not

Anti-patterns to watch for. If the repo starts drifting into these, it's broken.

**Not a design system documentation site.** That's Storybook's job. This repo teaches agents and documents rules; Storybook shows live components with interactive props.

**Not a source of truth for tokens.** That's the tokens repo. This repo mirrors for agent context.

**Not a source of truth for Figma components.** That's Figma. This repo documents status and rules around them.

**Not a replacement for design reviews.** Agents produce first drafts; humans review. This repo reduces review burden but doesn't eliminate it.

**Not a place for marketing copy.** Voice rules, yes. Final published copy, no. Marketing copy lives in the CMS or in production.

**Not a brand book.** A brand book is for humans. This is for agents.

---

## Adding a new section or file

When adding something to seed-ds:

1. Check if it fits in an existing file. Default to adding, not creating new files.
2. If it doesn't fit, propose the new file in a PR description with justification.
3. Add a decision record to this file documenting the decision.
4. Update the file responsibilities table above.
5. Update the read order in SKILL.md if agents should load it.

---

## Open architectural questions

Things still unresolved as of the current commit.

- **Version strategy.** Do we version seed-ds with semver? Tag releases? Pin skill versions per project? Unresolved.
- **CI for token sync.** Script exists (`scripts/sync-tokens.mjs`); scheduled CI that opens a PR on drift is still open.
- **Cross-project voice variation.** Does marketing voice differ enough from product voice to warrant separate files? Currently one file.
- **Figma Code Connect integration.** Should seed-ds contain Code Connect mappings, or do those live in the Storybook repo? Currently assumed to live with Storybook.
- **Multi-brand future.** If Seed acquires or launches a sub-brand, does it get its own skill or share this one with a theme variable? Deferred until the situation exists.
- **Regenerate `components.md` from source.** Currently DRAFT — speculative scaffolding with fabricated token references. Once the dev refactor settles, build a script (mirror of `scripts/sync-tokens.mjs`) that reads `my-seed-live/components` + Storybook and produces a real inventory with verified status flags.

Resolve these with decision records as answers become clear.

---

## Decision template

When adding a new decision, copy this format:

```
### NN: [One-line decision]

**Decided:** [What was decided, in plain language.]

**Rejected:** [What alternatives were considered and rejected.]

**Why:** [The reasoning. Short paragraphs or bullet points.]

**Would reconsider if:** [What would cause this decision to change.]
```

Keep decisions short. One screen, not an essay. The decision matters more than the explanation.
