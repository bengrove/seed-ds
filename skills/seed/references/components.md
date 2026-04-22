# Components

🚧 **Coming soon.** A verified component inventory will be regenerated from [seed-health/my-seed-live → components](https://github.com/seed-health/my-seed-live/tree/main/components) and the [hosted Storybook](https://www.chromatic.com/library?appId=63b5c3a4b545db5441de378b) once the dev refactor settles.

## In the meantime

When an agent needs a component:

1. Read the code directly at `my-seed-live/components/`.
2. Cross-reference [Storybook](https://www.chromatic.com/library?appId=63b5c3a4b545db5441de378b) for visual, props, and states.
3. Use [`tokens.md`](./tokens.md) for real token names. Do not invent token references.
4. If a Seed-specific pattern you need isn't in the code yet (e.g., ViaCap explainer, benefit timeline, comparison table, welcome kit, subscription tier selector, attribute badge grid), check the page captures in [`pages/`](./pages/) for composition reference and flag the gap in your output.

See the regeneration plan in [ARCHITECTURE.md](../../../ARCHITECTURE.md) → Open architectural questions.
