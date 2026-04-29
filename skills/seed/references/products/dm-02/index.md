---
product: Daily Multivitamin (DM-02™)
sku: DM-02
category: multivitamin
template: pdp
captured: 2026-04-29
source: https://seed.com/daily-multivitamin
subcategory_color:
  ramp:
    primary: "#B7C194"        # lead branding / hero accent (sage)
    secondary: "#DEE3CA"      # supporting surfaces (also = `--color--dm-redemption`)
    light: "#ECF2D7"          # softest wash
    medium: "#757C5D"         # muted olive — the live site's `--color--dm`
    dark: "#6E7951"           # deeper olive / contrast
    highlight: "#DCF194"      # bright chartreuse accent
  live_var: "--color--dm"
  live_var_role: medium
  redemption_hex: "#DEE3CA"   # = ramp.secondary
  note: |
    Full 6-step palette per the DM-02 design system. The live
    my-seed-live CSS exposes the `medium` shade (`#757c5d`) as
    `--color--dm` and the `secondary` shade (`#dee3ca`) as
    `--color--dm-redemption`. The other 4 steps don't have live CSS
    vars yet. None of the six steps are in `seed-health/tokens` —
    see lessons.md.
hero_imagery:
  jar: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/dm-g-02_500x.webp?v=1775013877
  capsule: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/dm-g-03_500x.webp?v=1775015094
  ingredient: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/dm-g-04_500x.webp?v=1775015094
  lifestyle: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/dm-g-05_500x.webp?v=1775015094
surfaces:
  desktop:
    viewport: 1440
    screenshot: ./desktop.png
  mobile:
    viewport: 390
    screenshot: ./mobile.png
key_claims:
  - 100% daily value of 20 essential vitamins and minerals
  - Bioavailable nutrients
  - 2-in-1 formulation (inner microbiome capsule + outer body capsule)
  - ViaCap® delivery system
  - Cellular Energy Complex (CoQ10, PQQ, MK-7, spermidine)
compliance_notes: |
  Structure-function language with `*` footnote tied to FDA disclaimer.
  Bioavailability and absorption claims are scoped to "designed for" /
  "engineered for" framing, not absolute. Cellular Energy Complex
  ingredients (CoQ10, PQQ, MK-7, spermidine) are referenced by name only —
  no efficacy claims attached to individual ingredients beyond what's
  approved in the supplement-facts panel. Avoid: "treats," "cures,"
  "prevents," any disease state.
---

# Daily Multivitamin (DM-02™)

A multivitamin built around the gut. Two capsules in one — outer for the body's nutrient gaps, inner for the microbiome. Currently flagged "New" in hero. Sits adjacent to DS-01 in the Daily Essentials Duo bundle.

## Visual identity

- **Primary:** `#B7C194` — sage / soft olive. Lead branding accent.
- **Secondary:** `#DEE3CA` — supporting sage surfaces. Also exposed live as `--color--dm-redemption` (used as a section background tint behind benefit modules).
- **Light:** `#ECF2D7` — softest sage wash for subtle section backgrounds.
- **Medium:** `#757C5D` — muted olive. The live site exposes this as `--color--dm` and uses it as the dominant brand-product surface. Distinct from DS-01's brand-primary green.
- **Dark:** `#6E7951` — deeper olive for contrast type or weighted footers.
- **Highlight:** `#DCF194` — bright chartreuse for emphasis spots / callouts.
- **None of the 6 steps are in `seed-health/tokens` yet** — flagged in lessons.md.
- **Secondary color:** Warm off-white / parchment (`#fcfcf7`, brand `bg-ghost`).
- **Accent:** `color.primary.seed-green` (`#1c3a13`) for CTAs and brand emphasis. Primary product color is decorative; accent stays brand-primary across all SKUs.
- **Badge treatment:** "New" chip near the product name in steady-state hero (replacing DS-01's "Bestseller").
- **Typography variant:** No deviation from default Seed Sans hierarchy.

## Content specifics

- **Tagline:** "DM-02™ helps cover the nutritional needs of your body and gut microbiome with 100% daily value of 20 essential vitamins and minerals.*"
- **Elevated claim language:**
  - "2-in-1 formulation optimized for nutrient delivery"
  - "Bioavailable ingredients your body can actually absorb and use"
  - "Cellular Energy Complex: CoQ10, PQQ, MK-7, and spermidine"
  - "Targeted release along the GI tract via ViaCap® delivery system"
- **Simple claim language:**
  - "Helps fill daily nutrient gaps with precise dosing"
  - "Engineered for absorption throughout the GI tract"
  - "Bioavailable nutrients your body can use"
  - "Supports healthy aging and immune function"
- **Compliance-approved phrases:**
  - "Helps fill nutrient gaps"
  - "Designed for absorption" (avoid bare "improves absorption" — not supported)
  - "Promotes healthy aging" (structure-function)
  - "Bolsters daily immune defenses" (avoid "boosts immunity" — disease-adjacent)
  - Avoid: "treats deficiency," "cures," any disease-state framing

## Imagery direction

- **Hero style:** Macro / product-on-pedestal of the dual-capsule. Hero ground sits on the `medium` muted-olive (`#757C5D`) on the live site, with `primary` sage (`#B7C194`) and `highlight` chartreuse (`#DCF194`) reserved for accents. Same shape language as DS-01 (capsule transparency as visual signature) but a clearly different color story.
- **Ingredient / science imagery:** Cross-section diagrams of the inner-outer capsule split. Nutrient-gap and absorption modules use schematic illustration (not photographic). Cellular Energy Complex callouts use clinical / blueprint styling.
- **Lifestyle imagery:** Refillable glass jar + travel vial echo DS-01 — same sustainability anchor across the line. Lifestyle shots stay editorial / still-life.

## Template deviations

None — uses canonical PDP structure (`pages/pdp/`). Notable variant: hero badge is "New" rather than "Bestseller"; Bundle-and-Save module promotes DS-01 as the cross-sell instead of DM-02.

## Related

- Page template: [pages/pdp/](../../pages/pdp/index.md)
- Voice rules: [copy/compliance.md](../../copy/compliance.md) — structure-function vs. disease language
- Bundle: [Daily Essentials Duo](../daily-essentials-duo/index.md) (DS-01 + DM-02)
- Cross-sell partner: [DS-01](../ds-01/index.md)
