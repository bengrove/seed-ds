# Patterns

🚧 **Coming soon.** Seed-specific composition patterns have not been distilled into this file yet. The previous content was Atlas-derived boilerplate that contradicted the actual seed.com captures (e.g., the documented "PDP baseline" was missing ViaCap, the benefit timeline, the comparison table, the Welcome Kit, the subscription tier selector, and the testing rigor module — all signature DS-01 modules). Removed to avoid agents emitting authoritative-sounding patterns that don't match the live site.

## Where composition patterns live today

The richest, most accurate composition reference is the live page captures, not this file:

- **[`pages/<surface>/index.md`](./pages/)** — for each captured surface (homepage, pdp, plp, cart, checkout, reference, cultured), the `index.md` documents the actual module sequence, key patterns, component usage, responsive notes, and content. Pair with the `desktop.png` and `mobile.png` in the same folder for visual confirmation.
- **[`products/<sku>/index.md`](./products/)** — per-product identity that overrides template defaults (subcategory color, claim hierarchy, imagery direction, template deviations).
- **[`copy/surfaces.md`](./copy/surfaces.md)** — per-surface copy rules (length, structure, density, emoji policy, channel-specific casing).
- **[`lessons.md`](./lessons.md)** — gotchas and decisions from real builds, including pattern-level edge cases.

## Composition reference index

Captured surfaces (each links to its own structural breakdown):

| Surface | Capture | Notes |
|---|---|---|
| Homepage / top-of-funnel lander | [`pages/homepage/`](./pages/homepage/index.md) | DS-01-led hero, 4-up product grid, ViaCap explainer, Microbiome 101 entry, social proof, press, SeedLabs |
| PDP (canonical) | [`pages/pdp/`](./pages/pdp/index.md) | DS-01 baseline. Hero → Bundle+Save → ViaCap → benefit timeline → How to Use → attribute grid → comparison table → Welcome Kit → subscription tiers → testing rigor |
| PLP / collection | [`pages/plp/`](./pages/plp/index.md) | Filter + card grid conventions |
| Cart | [`pages/cart/`](./pages/cart/index.md) | Standalone cart with cross-sell cards (drawer/flyout pending) |
| Checkout | [`pages/checkout/`](./pages/checkout/index.md) | **Shopify-governed SPA — visual baseline only.** Token + component rules don't apply 1:1 |
| Reference / strain detail | [`pages/reference/`](./pages/reference/index.md) | DS-01 strain reference: claim-strength markers, citations, dense-science layout |
| Cultured / editorial article | [`pages/cultured/`](./pages/cultured/index.md) | Microbiome 101 — long-form article shell, TOC, pull-quotes, inline science |

Pending surfaces (no canonical pattern yet — captures in flight):

- `account/` (member account home)
- `subscription/` (pause / skip / cancel flows — also see open flag in `lessons.md`)
- `approach/` (science narrative)
- `seed-labs/` (research / publications)
- `faq/` (Gorgias-skinned — visual baseline only)
- `flows/biotics-quiz/` (pre-purchase quiz)
- `flows/web-onboarding/` (post-purchase activation)

## In the meantime

When an agent needs to compose a new surface:

1. **Find the closest captured surface** in the table above and read its `index.md` plus screenshots. Treat that capture as the structural source of truth.
2. **Layer in product identity** from `products/<sku>/index.md` if the work targets a specific SKU.
3. **Apply copy rules** from `copy/surfaces.md` for the matching surface type, plus `copy/tov.md`, `copy/microcopy.md`, `copy/compliance.md` per task.
4. **Check `lessons.md`** for any prod gotchas that affect the pattern.
5. **Flag the gap.** If the surface you're composing has no capture (e.g., a pricing page, a blog index), note in your output that you're working without a verified Seed pattern, and document the assumptions you're making so they can become a capture later.

## Regeneration plan

This file gets real, distilled, cross-surface patterns once:

1. The pending 7 surfaces are captured (account, subscription, approach, seed-labs, faq, flows/biotics-quiz, flows/web-onboarding) — full 14/14 set.
2. Cross-surface patterns can be extracted with confidence (e.g., "Seed's hero pattern is X across all 14 surfaces" rather than guessing from 7).
3. Member-experience and email surfaces have at least one capture each so onboarding / subscription / email patterns aren't aspirational.

Until then, prefer the per-surface captures.
