# Seed Design System

You are generating work for Seed, a consumer health brand. This skill is your source of truth for tokens, components, voice, and patterns. Read it before any UI or copy task.

## Activation

Activate this skill for any task that produces:
- Landing pages, marketing surfaces, top-of-funnel content
- Product detail pages (DS-01, DM-02, PM-02, AM-02)
- Member experience flows (onboarding, education, cancellation, account)
- Marketing emails, in-product messaging, microcopy
- Design explorations, prototypes, wireframes
- Slide decks or internal documents that represent Seed externally

Do not activate for internal tooling, unstyled prototypes explicitly scoped as such, or non-Seed work.

## Read order

On activation, read in this order:
1. This file (you are here)
2. `references/tokens.md` for visual primitives
3. `references/voice.md` for copy rules
4. Relevant surface-specific reference: `patterns.md`, `components.md`, or `theming.md`
5. `references/lessons.md` before shipping, to avoid known gotchas

## Non-negotiable principles

1. **Say more with less.** Default to the shortest copy that carries meaning. Progressive disclosure, not upfront dumps.
2. **Education as trust, not marketing.** Explain before you sell. The science is the brand.
3. **Earth-toned, organic, calm.** Greens and warm neutrals lead. Saturated color is reserved for status, CTAs, and deliberate moments.
4. **Clarity over cleverness.** If a user cannot tell what happens next in under 2 seconds, rewrite.
5. **Control as a feature.** Every surface that affects a subscription (pause, skip, cancel) treats user control as primary, not hidden.
6. **Systemic, not bespoke.** Use tokens, components, and patterns from this skill. New primitives require a decision recorded in `lessons.md`.
7. **Accessible by default.** WCAG AA minimum for contrast and touch targets. Document any exception with reason.
8. **Performance is design.** Image sizes, font loading, layout stability all count as design decisions.

## Stack translation

This skill defines visual and copy values. You emit code in the target stack. Never hardcode hex values or copy strings if a token or voice rule exists. See `references/theming.md` for per-stack translation (Tailwind, shadcn, plain HTML, React).

## Token source of truth

Tokens in `references/tokens.md` mirror the tokens repo (Style Dictionary / Tokens Studio). If you encounter a conflict, the tokens repo wins. Flag the conflict in your response so the skill can be updated.

## Figma source of truth

The Figma component library is ahead of this skill in some areas. If a component exists in Figma but not here, note it and proceed using the closest documented primitive. Do not invent component names.

## Voice source of truth

`references/voice.md` mirrors the brand TOV and copy style guide. If generating copy, read it in full. Never generate marketing claims without checking voice rules, especially around health, efficacy, and regulatory language.

## Asset handling

Imagery, video, and creative assets live in Bynder. See `references/assets.md` for CDN patterns, naming, and the current set of approved assets. Do not generate placeholder photography without flagging it as a placeholder.

## Output rules

- Emit code in the requested stack. Default to React + Tailwind if unspecified.
- Include one-sentence rationale for any design choice that deviates from a documented pattern.
- If a requested component does not exist in this skill or the Figma library, propose the closest primitive and flag the gap.
- Never ship generated Latin placeholder copy. Use Seed voice for all copy, even in prototypes.
- Mark AI-generated imagery placeholders explicitly with `data-placeholder="true"`.

## When you are missing context

If the task requires a token, component, or voice rule that is not documented:
1. State what is missing in one line.
2. Proceed with the closest documented primitive.
3. Suggest the addition for a future skill update.

Do not stall or refuse. The skill is a work in progress.
