# Components

🚧 **Coming soon.** A verified component inventory will be regenerated from [seed-health/my-seed-live → components](https://github.com/seed-health/my-seed-live/tree/main/components) and the [hosted Storybook](https://www.chromatic.com/library?appId=63b5c3a4b545db5441de378b) once the dev refactor settles.

## Shipped components

Verified, shipped to `my-seed-live`, and ready for agents to reference by name. Minimal info only — full anatomy, variants, and states will arrive when this file is regenerated from source.

Add a row when a component ships. Storybook links can lag the code link; the Chromatic catalog is updated on its own cadence.

| Component | Code | Storybook | Shipped |
|---|---|---|---|
| Badge | [my-seed-live/components](https://github.com/seed-health/my-seed-live/tree/main/components) | *pending* | 2026-04-22 |

## In the meantime

When an agent needs a component:

1. Read the code directly at `my-seed-live/components/`.
2. Cross-reference [Storybook](https://www.chromatic.com/library?appId=63b5c3a4b545db5441de378b) for visual, props, and states.
3. Use [`tokens.md`](./tokens.md) for real token names. Do not invent token references.
4. If a Seed-specific pattern you need isn't in the code yet (e.g., ViaCap explainer, benefit timeline, comparison table, welcome kit, subscription tier selector, attribute badge grid), check the page captures in [`pages/`](./pages/) for composition reference and flag the gap in your output.

See the regeneration plan in [ARCHITECTURE.md](../../../ARCHITECTURE.md) → Open architectural questions.
