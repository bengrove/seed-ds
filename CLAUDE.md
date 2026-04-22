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
        ├── patterns.md               🟡 Modules, landers, PDP, member flows (v1)
        ├── responsive.md             Breakpoints, grid, container rules
        ├── motion.md                 Easing, durations, overlay rules
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
        └── products/                 🔴 0/6 populated (per-product identity within templates)
            ├── _template.md
            └── (ds-01, dm-02, am-02, pm-02, pds-08, vs-01 — pending)
```

Legend: 🟢 stable · 🟡 in progress · 🔴 not started · 🚧 placeholder · ✅ done · ⏳ pending

---

## Current state (snapshot)

From [README.md](README.md) Current state section:

- 🟢 **Tokens:** Source of truth is seed-health/tokens. `tokens.md` is auto-generated — run `node scripts/sync-tokens.mjs` to refresh.
- 🟢 **Voice:** Seven files under `copy/` cover tone, mechanics, vocabulary, surfaces, microcopy, compliance, examples. Source: Brand TOV 2025 + Seed Copy Style Guide 2026 + Seed UX Best Practices.
- 🟡 **Components:** Finishing in Figma + dev refactor underway. `components.md` is a placeholder with a "Shipped components" registry (Badge shipped 2026-04-22). Full inventory will be regenerated from `my-seed-live/components` + Storybook post-refactor.
- 🟡 **Patterns:** v1 covers top-of-funnel landers, DS-01 PDP, member flows. More surfaces pending.
- 🟡 **Live references:** 7/14 page templates captured, 0/6 products populated.

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

## Current todo list (session handoff)

Completed:
- Scaffolds (pages/_template, products/_template)
- 14-template list confirmed
- 7 captures done: homepage, plp, pdp, cart, checkout, cultured, reference

In progress:
- `account` capture (up next)

Pending captures (7):
- subscription, approach, seed-labs, faq, flows/biotics-quiz, flows/web-onboarding

Pending product files (7):
- DS-01, DM-02, AM-02, PM-02, PDS-08, VS-01, Daily Essentials Duo

Pending:
- Cross-link pages/ and products/ from patterns.md / tokens.md / voice.md

---

## Active unresolved flags (don't lose these)

1. **CTA casing contradiction.** `microcopy.md` principle #1 says CTAs are Sentence Case. But the CTA table in `microcopy.md` and `mechanics.md` channel table still mark CTA as Title Case. Only one CTA got lowercased (`Start my DS-01® Journey`). Three places need to agree — not touched yet.

2. **Footnote symbol system.** `reference/index.md` (DS-01 reference page) has `‡`, `††`, `†††` footnotes in the Strain-Specific Benefit Studies table without inline definitions. These are claim-strength markers that tie back to `copy/compliance.md` — needs reconciliation.

3. **Shipped component enforcement.** User asked how to force agents to use shipped components (Badge) vs inventing one. Was about to edit SKILL.md with stronger enforcement language (new principle, read-order step, output rule) + add a "How to use shipped components" section to `components.md`. Paused before implementing. Pick up here when fresh session resumes.

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

Run `git log --oneline -10` for the live list. As of 2026-04-22:

- `715c562` Link Badge to real code and stories paths in my-seed-live
- `bac70c9` Add Shipped components registry to components.md; first entry: Badge
- `08c7007` Add cultured (Microbiome 101) and reference (DS-01) captures; bump count to 7/14
- `5573138` Add cart and checkout captures
- `5fe02f0` Remove .h2d historical note from Decision 11
- `97216a3` Drop .h2d captures from workflow and retroactively remove existing ones
- `1e742e1` Replace examples.md boilerplate with coming-soon placeholder
- `9080dad` Restructure assets.md for headless Shopify: Bynder/Cloudinary/Shopify CDN
- `399f7fa` Replace components.md boilerplate with a coming-soon placeholder
- `86fc651` Mark components.md as DRAFT; track future regeneration in ARCHITECTURE
