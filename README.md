# Seed Design System Skill

Agent-first design system for Seed. A Claude Code skill that teaches any coding agent Seed's tokens, components, voice, and patterns so generated work stays on-brand across surfaces.

This repo is the source of truth for agents. It is **not** a replacement for Figma or the MSL component library. It is the translation layer that keeps AI output consistent with both.

## What's in here

```
seed-ds/
├── .claude-plugin/              
│   └── plugin.json                Plugin manifest
├── skills/
│   └── seed/
│       ├── SKILL.md               Ingress point, agent activation rules
│       └── references/
│           ├── tokens.md          Design tokens with usage rules
│           ├── components.md      Component inventory, anatomy, states
│           ├── voice.md           Index pointing to copy/*.md
│           ├── copy/
│           │   ├── tov.md         Three pillars, formulas, funnel-stage voice mix
│           │   ├── mechanics.md   Grammar, punctuation, citations, casing, emoji
│           │   ├── vocabulary.md  Defined terms, product naming, Elevated vs. Simple
│           │   ├── surfaces.md    Per-surface rules (homepage, PLP, PDP, cart, email, ads, social)
│           │   ├── microcopy.md   CTAs, errors, empty states, subscription controls (verbatim strings)
│           │   ├── compliance.md  Structure/function vs. disease, FDA disclaimer, strain claims
│           │   └── examples.md    Approved copy by funnel stage and pillar
│           ├── patterns.md        Modules, page templates, core flows
│           ├── responsive.md      Breakpoints, grid, container rules
│           ├── motion.md          Easing, durations, overlay rules
│           ├── assets.md          Bynder CDN integration, imagery rules, media container ratios
│           ├── lessons.md         Gotchas and decisions from prod
│           ├── examples.md        Code snippets (placeholder — regenerated post-refactor)
│           ├── pages/             Raw captures of core live seed.com pages
│           │   ├── _template/     Starter frontmatter + structure for new captures
│           │   ├── homepage/      index.md + desktop/mobile .png + .h2d
│           │   ├── pdp/           DS-01 as canonical example
│           │   ├── plp/
│           │   ├── cart/          Current standalone cart (flyout coming soon)
│           │   ├── checkout/      Shopify checkout
│           │   ├── account/       Account home
│           │   ├── subscription/  Subscription management
│           │   ├── reference/     DS-01 reference page as canonical example
│           │   ├── cultured/      Microbiome 101 article as canonical example
│           │   ├── approach/      Science page as canonical example
│           │   ├── seed-labs/     Research page canonical example
│           │   ├── faq/           help.seed.com (gorgias skin - flagged in frontmatter)
│           │   └── flows/
│           │       ├── biotics-quiz/    Pre-purchase funnel
│           │       └── web-onboarding/  DS-01 web onboarding as canonical example
│           └── products/          Per-product visual/content identity within templates
│               ├── _template.md
│               ├── ds-01.md             Daily Synbiotic
│               ├── dm-02.md             Daily Multivitamin
│               ├── am-02.md             Focus + Energy
│               ├── pm-02.md             Sleep + Restore
│               ├── pds-08.md            Pediatric Synbiotic
│               └── vs-01.md             Vaginal Synbiotic
├── README.md                      You are here
└── LICENSE
```

## Current state

🟢 **Tokens:** Source of truth is [seed-health/tokens](https://github.com/seed-health/tokens) (`@seed-health/tokens` on npm). `references/tokens.md` is auto-generated — run `node scripts/sync-tokens.mjs` to refresh from the latest commit.

🟢 **Voice:** Documented in `references/copy/` from Brand TOV 2025 (Figma deck), Seed Copy Style Guide 2026, and Seed UX and Microcopy Best Practices. Seven focused files cover tone, mechanics, vocabulary, surfaces, microcopy, compliance, and examples.

🟡 **Components:** Finishing in Figma + dev refactor underway. See `references/components.md` for current inventory and status flags.

🟡 **Patterns:** v1 covers top-of-funnel landers, DS-01 PDP, member experience flows. More surfaces pending.

🟡 **Live references:** `references/pages/` captures raw site templates (markdown + desktop/mobile screenshots + `.h2d` html.to.design exports). `references/products/` captures per-product identity (subcategory color, claims, imagery direction) keyed to a template. Currently 3/14 page templates captured, 0/6 products populated.

## Setup

### 1. Claude Code (primary)

Prerequisite: [Claude Code CLI](https://docs.claude.com/en/docs/claude-code) installed and authenticated (`claude` on your PATH).

**1. Start Claude Code in your project**

```bash
cd path/to/your/project
claude
```

**2. Install the plugin**

Inside the Claude Code session, run:

```
/plugin marketplace add bengrove/seed-ds
/plugin install seed@seed-ds
```

**3. Verify it's installed**

```
/plugin list
```

You should see `seed` under installed plugins.

**4. Smoke-test the skill**

Confirm the skill is actually loading, not just listed. Ask something on-brand:

```
Using the seed skill, what's our primary brand color and how should I use it?
```

Claude should reference `color.primary.seed-green` and pull the usage rule from `tokens.md`. If it hedges or invents a value, the skill didn't load — re-check step 2.

**5. Update or remove**

After any commit to this repo (new captures, token sync, voice changes), refresh:

```
/plugin update seed@seed-ds
```

To uninstall:

```
/plugin uninstall seed@seed-ds
```

**How activation works:** the skill auto-activates on UI, design, copy, and Seed-specific tasks. For unrelated work it stays dormant. To force-load, reference the skill by name:

```
Use the seed skill to build a pricing section.
```

### 2. Claude Design

During Claude Design onboarding, point it at:
- This repo (tokens, components, voice, patterns, `pages/`, `products/`)
- Component library repo on GitHub: [seed-health/my-seed-live → components](https://github.com/seed-health/my-seed-live/tree/main/components)
- Hosted Storybook: [Chromatic library](https://www.chromatic.com/library?appId=63b5c3a4b545db5441de378b)

The `pages/` captures are particularly useful — they give Claude Design real seed.com examples of how templates compose, not just abstract rules.

**Optional:** add specific Figma files when you need `figma-only` components or early-stage exploration. Claude Design reads code better than Figma, so the skill + component repo + Storybook covers production-ready primitives without it.

See [docs/claude-design-setup.md](docs/claude-design-setup.md) for the full rollout playbook (admin access, usage budgeting, export workflows, Figma workarounds).

### 3. Other LLMs and IDEs

seed-ds is plain markdown — any agent that can read files in a workspace can use it. No lock-in, no proprietary format.

**Clone the repo into your project:**

```bash
git clone https://github.com/bengrove/seed-ds.git .seed-skill
```

Then point your agent at `skills/seed/SKILL.md` as its entry point. A reusable system prompt:

> Read `.seed-skill/skills/seed/SKILL.md` before any UI, design, or copy task for Seed. Follow the read order and non-negotiable principles defined there.

**Known-working setups:**

| Tool | Category | How to load |
|---|---|---|
| Cursor | IDE | `@file` the SKILL.md, or add the path to `.cursorrules` / project rules |
| Windsurf | IDE | Add SKILL.md to workspace or global rules |
| VS Code + Copilot | IDE | Add SKILL.md to Copilot's custom instructions for the workspace |
| Gemini Antigravity | IDE | Include the repo as workspace context |
| OpenAI Codex CLI | CLI | Attach SKILL.md to the session or include in prompt |
| Aider | CLI | `/add skills/seed/SKILL.md` at startup |
| Claude Desktop / web LLMs | Chat | Paste SKILL.md contents or attach the file as the first message |

If your tool supports workspace-level rule files (`.cursorrules`, `.windsurfrules`, etc.), symlink SKILL.md into that location so the rules load without an explicit prompt.

## Contributing

When you add or change a token, component, voice rule, or pattern:
1. Update the relevant `references/*.md` file
2. Add a gotcha to `lessons.md` if the change came from a real build
3. Keep this repo in sync with the tokens repo and Figma

When adding a new page or product capture:
1. Copy `references/pages/_template/` (or `products/_template.md`) as a starting point
2. Capture desktop (1440px) + mobile (390px) as both `.png` and `.h2d` (html.to.design)
3. Fill in frontmatter: `captured:` date, `source:` URL, compress screenshots before commit
4. Link related templates/products in the `## Related` section

## License

Internal to Seed. Do not distribute.
