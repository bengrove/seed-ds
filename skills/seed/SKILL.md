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
3. `references/voice.md` as the index to copy rules (points you to `copy/*.md`)
4. `references/components.md` for the Shipped registry. For module / page composition, prefer the captured surfaces in `references/pages/<surface>/index.md` directly — `references/patterns.md` is currently a placeholder that routes you there. For inventory beyond the Shipped registry, read `my-seed-live/components` and the Chromatic Storybook directly.
5. Conditional visual reads (load when relevant):
   - `references/responsive.md` for any responsive output (breakpoints, grid, container rules)
   - `references/motion.md` for animation, transition, or overlay timing — currently a placeholder; routes you to shipped component code in `my-seed-live` for real values until Seed formalizes motion guidance
   - `references/assets.md` for imagery refs or CDN URLs (Bynder vs. Cloudinary vs. Shopify routing)
6. `references/lessons.md` before shipping, to avoid known gotchas

### Copy-specific read order

Any task that produces user-facing copy (marketing, UX, microcopy, claims, promos) additionally reads from `references/copy/`:

1. `references/voice.md` (index, always first for copy work)
2. `references/copy/tov.md` (three pillars, formulas, funnel-stage voice mix) — **always read for copy tasks**
3. `references/copy/microcopy.md` — read when writing CTAs, form labels, errors, empty states, loading, subscription controls, toasts, tooltips
4. `references/copy/surfaces.md` — read when the task specifies a surface (homepage, PLP, PDP, cart, checkout, email, ad, social, TV, promo)
5. `references/copy/vocabulary.md` — read when choosing between two phrasings, naming a product, or deciding Elevated vs. Simple register
6. `references/copy/mechanics.md` — read for punctuation, citations, capitalization, emoji, numbers, casing by channel
7. `references/copy/compliance.md` — **required read** for any health, efficacy, or outcome claim; covers FDA disclaimer and structure/function vs. disease language
8. `references/copy/examples.md` — read for approved copy patterns by funnel stage and pillar

### Copy task trigger keywords

If the task mentions any of these, apply the copy read order:
- Headline, subhead, hero, module copy
- CTA, button, microcopy, label, error, tooltip, empty state, toast
- Promo, banner, subject line, ad, email
- Claim, benefit, RTB (reason to believe), BDQ (buyer decision question)
- Pause, cancel, resume, skip, subscription flow
- Tone, voice, on-brand, brand voice

### Surface and product read order

When the task targets a named surface (PDP, homepage, cart, article, etc.) or a specific SKU (DS-01, DM-02, etc.), additionally read:

1. `references/pages/<surface>/index.md` — captured module sequence, component usage, responsive notes, key patterns. Pair with the `desktop.png` and `mobile.png` in the same folder.
2. `references/products/<sku>.md` — per-product identity (subcategory color, claim hierarchy, imagery voice, compliance flags) that overrides template defaults. Required for any product-specific output. If the file is missing, flag it and proceed using the closest documented product identity.

Platform-governed surfaces (`pages/checkout/`, `pages/faq/`) are **visual baseline only** — do not direct-emit from them. Token + component rules don't apply 1:1 because Shopify (checkout) and Gorgias (faq) own the rendering.

#### Surface trigger keywords

- Page templates: homepage, PDP, PLP, cart, checkout, account, subscription, reference, cultured / article, approach / science, seed-labs / research, faq, biotics-quiz, web-onboarding
- Per-product work: DS-01, DM-02, AM-02, PM-02, PDS-08, VS-01, Daily Synbiotic, Daily Multivitamin, Focus + Energy, Sleep + Restore, Pediatric Synbiotic, Vaginal Synbiotic

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

This skill defines visual and copy values. You emit code in the target stack. Never hardcode hex values or copy strings if a token or voice rule exists. Tokens are consumed directly from `@seed-health/tokens` (see `references/tokens.md` for import patterns).

## Token source of truth

Tokens in `references/tokens.md` are auto-generated from [seed-health/tokens](https://github.com/seed-health/tokens). Regenerate with `node scripts/sync-tokens.mjs`. If you encounter a conflict between this file and the tokens repo, the tokens repo wins — flag it in your response and rerun the sync.

## Figma source of truth

The Figma component library is ahead of this skill in some areas. If a component exists in Figma but not here, note it and proceed using the closest documented primitive. Do not invent component names.

## Voice source of truth

`references/voice.md` is the index. The actual rules live in seven files under `references/copy/`:
- `tov.md` (tone of voice: three pillars, formulas, funnel-stage mix)
- `mechanics.md` (grammar, punctuation, citations, casing, emoji)
- `vocabulary.md` (defined terms, product naming, Elevated vs. Simple)
- `surfaces.md` (per-surface length, structure, performance benchmarks)
- `microcopy.md` (CTAs, errors, empty states, subscription controls, verbatim strings)
- `compliance.md` (structure/function vs. disease, FDA disclaimer, strain claims)
- `examples.md` (approved copy by funnel stage and pillar)

These files mirror the Brand TOV 2025 deck, Seed Copy Style Guide 2026, and Seed UX and Microcopy Best Practices. If the sources update, update these files and flag the change. Never generate marketing claims without checking `compliance.md`.

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
