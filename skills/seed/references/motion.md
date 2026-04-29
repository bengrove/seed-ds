# Motion

🚧 **Coming soon.** Seed's motion guidance has not been formalized yet. The previous content of this file was Atlas-derived boilerplate — duration tokens, easing curves, and component-specific rules that did not reflect Seed's actual motion design. Removed to avoid agents emitting authoritative-sounding values that aren't sourced from Seed.

## Where motion lives today

- **Tokens:** No motion tokens are currently published in [seed-health/tokens](https://github.com/seed-health/tokens). When durations / easings are added there, `tokens.md` will pick them up via `scripts/sync-tokens.mjs`.
- **Component code:** Real transition values live in [seed-health/my-seed-live → components](https://github.com/seed-health/my-seed-live/tree/main/components). Read the actual CSS / styled-components implementation for any shipped component before guessing values.
- **Storybook:** Visual confirmation of how shipped components animate is in the [Chromatic Storybook](https://www.chromatic.com/library?appId=63b5c3a4b545db5441de378b).

## In the meantime

When an agent needs motion guidance:

1. **Check the shipped component first.** If you're animating something that already exists in `my-seed-live/components`, copy the existing transition values verbatim. Don't invent new durations / easings.
2. **Default to calm and fast.** Until Seed formalizes motion tokens, lean toward short durations (under 200ms for most transitions) and standard easing (`cubic-bezier(0.4, 0, 0.2, 1)` is a safe default). Avoid bouncy springs on utility surfaces — they read off-brand for a science / health product.
3. **Always respect `prefers-reduced-motion: reduce`.** This is a non-negotiable accessibility requirement regardless of token state. Disable transforms, keep opacity, skip scroll-triggered animations.
4. **Animate `transform` and `opacity` only** for high-frequency interactions. Avoid layout-affecting properties (`width`, `height`, `padding`, `margin`).
5. **Flag the gap in your output.** If you emit motion values, note in your response that they're placeholders pending Seed's motion guidance.

## Regeneration plan

This file gets real content once Seed:

1. Documents motion principles in the design system (Figma motion specs, written guidelines, or both).
2. Publishes duration / easing tokens to `seed-health/tokens` so they sync into `tokens.md`.
3. Reconciles those tokens against actual transitions in shipped `my-seed-live` components.

Open this gap in [`lessons.md`](./lessons.md) when an agent hits it during a real build, so we accumulate a list of motion decisions worth canonizing.
