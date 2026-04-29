---
product: Daily Essentials Duo
sku: DED
category: bundle
template: pdp
captured: 2026-04-29
source: https://seed.com/daily-essentials-duo
constituents:
  - DS-01
  - DM-02
subcategory_color:
  token: color.primary.seed-green
  hex: "#1c3a13"
  note: |
    Bundle PDPs use the brand primary directly. No `--color--ded` token —
    the duo inherits DS-01's color story and primary branding. DM-02's
    `#757c5d` does not appear as a hero accent here; the duo positions
    itself as DS-01 + DM-02 under one canopy, not as a third color story.
hero_imagery:
  hero: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/duo-g-02_500x.webp
  alt_a: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/duo-g-03_500x.webp
  alt_b: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/duo-g-04_500x.webp
  dm02_jar: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/dm-02-jar-catalog-01_691fb263-7210-4eff-8ac8-2557f64b3d3c_1440x.webp
surfaces:
  desktop:
    viewport: 1440
    screenshot: ./desktop.png
  mobile:
    viewport: 390
    screenshot: ./mobile.png
key_claims:
  - DS-01® Daily Synbiotic + DM-02™ Daily Multivitamin paired
  - Bundle + Save 25%
  - Reduces bloating, promotes healthy regularity, helps cover nutrient gaps
  - Supports gut, immune, skin, heart, and bone health every day
pricing:
  bundle: 67.48
  list: 89.98
  discount_pct: 25
compliance_notes: |
  Bundle inherits the compliance posture of its strictest constituent —
  copy here cannot make any claim that wouldn't pass on DS-01 or DM-02
  individually. Combined statements ("supports your gut, immune, skin,
  heart, and bone health") must remain structure-function and tied to
  the `*` FDA disclaimer footnote. Avoid framing the bundle as
  "complete nutrition" or "all you need" — that overstates the formula.
---

# Daily Essentials Duo

The bundle wrapper for DS-01 + DM-02. A thinner PDP than either constituent — its job is to position the pair as a routine, not to re-explain either product. Sits at the routine-builder tier in the buying funnel: customers who already understand DS-01 / DM-02 individually convert here for the 25% bundle discount.

## Visual identity

- **Primary color:** `color.primary.seed-green` (`#1c3a13`) — bundle PDPs default to brand primary. Neither DS-01's seed-green nor DM-02's `#757c5d` dominates; the duo is "Seed branded" rather than product-color-branded.
- **Secondary color:** Warm off-white / parchment (`#fcfcf7`).
- **Accent:** `color.primary.seed-green` for CTAs.
- **Badge treatment:** "Bundle + Save 25%" as a discount chip near the price. No "Bestseller" or "New" — bundle-specific commerce signal.
- **Typography variant:** No deviation from default Seed Sans hierarchy.

## Content specifics

- **Tagline:** "Clinically-studied daily synbiotic paired with a daily multivitamin to reduce bloating, promote healthy regularity and help cover nutrient gaps.*"
- **Elevated claim language:**
  - "Clinically-studied daily synbiotic paired with a daily multivitamin"
  - "DS-01® Daily Synbiotic: Clinically proven to reduce gas and bloating, improve regularity, and increase healthy bacteria in the gut*"
  - "DM-02™ Daily Multivitamin: Helps fill nutrient gaps with 100% daily value of 20 key vitamins and minerals*"
- **Simple claim language:**
  - "Use both to support your gut, immune, skin, heart, and bone health every day"
  - "Bundle + Save 25%"
- **Compliance-approved phrases:**
  - Pull combined claims from each constituent's compliance-approved list (`ds-01/index.md` and `dm-02/index.md`). Never invent a duo-specific claim that isn't validated on either individual product.
  - Avoid: "complete nutrition," "all-in-one," "everything you need" — overstates.

## Imagery direction

- **Hero style:** Both jars together (DS-01 + DM-02) on a neutral parchment ground. Pairing is the visual story — neither product visually dominates.
- **Ingredient / science imagery:** Bundle PDP defers to constituent PDPs for ingredient and science visuals. No new hero modules invented for the duo.
- **Lifestyle imagery:** Same refillable-jar / sustainability anchor as DS-01 and DM-02 individually.

## Template deviations

Bundle PDP is significantly thinner than canonical PDP (`pages/pdp/`):
- **No ViaCap module.** Defers to constituent PDPs.
- **No benefit timeline.** Defers to constituent PDPs.
- **No comparison table.** Defers to constituent PDPs.
- **Cross-sell module promotes the other constituent.** Inverts the usual pattern: bundle PDP cross-sells "Add DM-02 to your routine" — buying the bundle implies you already have one constituent's mental model.
- **Welcome Kit / subscription tier modules.** Present, but bundle pricing replaces the standard 1/3/6-month tier selector.
- **Footnote / compliance density.** Lower than constituent PDPs because claims are scoped (all RTBs link to constituent products' deeper proof).

Bundle PDPs are intentionally lean. Treat as a routine-builder pattern, not as a primary product-discovery template.

## Related

- Page template: [pages/pdp/](../../pages/pdp/index.md) — primary structural reference, but note the deviations above.
- Constituents: [DS-01](../ds-01/index.md), [DM-02](../dm-02/index.md)
- Voice rules: [copy/compliance.md](../../copy/compliance.md) — bundle inherits the strictest constituent's posture.
