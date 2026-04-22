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
│           ├── tokens.md          Design tokend with usage rules
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
│           ├── patterns.md        Modules, page templates, core fows
│           ├── responsive.md      Breakpoints, grid, container rules
│           ├── motion.md          Easing, durations, overlay rules
│           ├── assets.md          Bynder CDN integration, imagery rules, media container ratios
│           ├── lessons.md         Gotchas and decisions from prod
│           ├── examples.md        Copy-ready composition snippets (React/HTML with tokens)
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
│           │   ├── faq/           help.seed.com (gorias skin - flagged in frontmatter)
│           │   └── flows/
│           │       ├── biotics-quiz/    pre-purchase funnel
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

🟡 **Components:** Finishing in Figma. See `references/components.md` for current inventory and status flags.

🟡 **Patterns:** v1 covers top-of-funnel landers, DS-01 PDP, member experience flows. More surfaces pending.

🟡 **Live references:** `references/pages/` captures raw site templates (markdown + desktop/mobile screenshots + `.h2d` html.to.design exports). `references/products/` captures per-product identity (subcategory color, claims, imagery direction) keyed to a template. Currently 2/14 page templates captured, 0/6 products populated.

## Install as a Claude Code skill

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

You should see `seed` under installed plugins. The skill auto-activates on UI/design tasks — no manual invocation needed. To force-load it, reference it directly:

```
Use the seed skill to build a pricing section.
```

**4. Update or remove**

```
/plugin update seed@seed-ds
/plugin uninstall seed@seed-ds
```

Once installed, any UI task in Claude Code reads `SKILL.md` and emits code against Seed's rules in your target stack.

## Use with other agents

Plain markdown, no lock-in. Clone and point any agent (Cursor, Windsurf, Aider, Claude Design) at `skills/seed/SKILL.md`.

```
git clone https://github.com/bengrove/seed-ds.git .seed-skill
# Then: "Read .seed-skill/skills/seed/SKILL.md and generate a top-of-funnel lander."
```

## Use with Claude Design

During Claude Design onboarding, point it at:
- This repo (tokens, components, voice, patterns, `pages/`, `products/`)
- The component library repo
- Figma files (design system + key components)
- TOV / copy style guide (DOCX upload)

The `pages/` captures are particularly useful — they give Claude Design real seed.com examples of how templates compose, not just abstract rules.

See [docs/claude-design-setup.md](docs/claude-design-setup.md) for the full rollout playbook (admin access, usage budgeting, export workflows, Figma workarounds).

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
