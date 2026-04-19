# Seed Design System Skill

Agent-first design system for Seed. A Claude Code skill that teaches any coding agent Seed's tokens, components, voice, and patterns so generated work stays on-brand across surfaces.

This repo is the source of truth for agents. It is **not** a replacement for Figma or the production component library. It is the translation layer that keeps AI output consistent with both.

## What's in here

```
seed-ds/
├── .claude-plugin/
│   └── plugin.json              Plugin manifest (install via /plugin marketplace add)
├── skills/
│   └── seed/
│       ├── SKILL.md             Entry point, agent activation rules
│       └── references/
│           ├── tokens.md        Every design token with usage rules
│           ├── components.md    Component inventory, anatomy, states
│           ├── voice.md         TOV, copy patterns, microcopy library
│           ├── patterns.md      Landers, PDP, member experience flows
│           ├── theming.md       Light/dark, stack translation (shadcn, Tailwind)
│           ├── responsive.md    Breakpoints, grid, container rules
│           ├── motion.md        Easing, durations, overlay rules
│           ├── assets.md        Bynder CDN, naming, imagery rules
│           ├── lessons.md       Gotchas and decisions from real builds
│           └── examples.md      Copy-ready composition snippets
├── README.md                    You are here
└── LICENSE
```

## Install as a Claude Code skill

Prerequisite: [Claude Code CLI](https://docs.claude.com/en/docs/claude-code) installed and authenticated (`claude` on your PATH).

**1. Start Claude Code in your project**

```bash
cd path/to/your/project
claude
```

**2. Add the marketplace and install the plugin**

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

During Claude Design onboarding, point it at this repo plus the component library and Figma files. Claude Design reads this skill and applies Seed tokens, voice, and patterns automatically to every project.

## Current state

**Components:** in progress. Finishing in Figma. See `references/components.md` for current inventory and status flags.

**Tokens:** stable. Source of truth is the tokens repo (Style Dictionary / Tokens Studio). This skill mirrors them for agent context.

**Voice:** documented from brand TOV and copy style guide.

**Patterns:** v1 covers top-of-funnel landers, DS-01 PDP, member experience flows.

## Contributing

When you add or change a token, component, voice rule, or pattern:
1. Update the relevant `references/*.md` file
2. Add a gotcha to `lessons.md` if the change came from a real build
3. Keep this repo in sync with the tokens repo and Figma

## License

Internal to Seed. Do not distribute.
