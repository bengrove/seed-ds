---
product: Sleep + Restore (PM-02™)
sku: PM-02
category: sleep
template: pdp
captured: 2026-04-29
source: https://seed.com/sleep-restore
subcategory_color:
  ramp:
    primary: "#B0D1BE"        # lead branding / hero accent (soft mint)
    secondary: "#D2E6DA"      # supporting surfaces (also = `--color--pm-redemption`)
    light: "#EBF5EF"          # softest wash
    medium: "#698E79"         # dusk green — the live site's `--color--pm`
    dark: "#4E6B5C"           # contrast / weighted footers
    highlight: "#C9F3DB"      # bright mint accent
  live_var: "--color--pm"
  live_var_role: medium
  redemption_hex: "#D2E6DA"   # = ramp.secondary
  note: |
    Full 6-step palette per the PM-02 design system. The live
    my-seed-live CSS exposes the `medium` shade (`#698e79`) as
    `--color--pm` and the `secondary` shade (`#d2e6da`) as
    `--color--pm-redemption`. The other 4 steps don't have live CSS
    vars yet. None of the six steps are in `seed-health/tokens` —
    see lessons.md.
hero_imagery:
  jar: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/pm-02-jar-catalog-01_dbbb7d5e-19c8-4c3e-8dab-8ca356cffaee_1440x.webp?v=1773686902
  capsule: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/pm-g-03_500x.webp?v=1775002769
  ingredient: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/pm-g-04_500x.webp?v=1775002769
  lifestyle: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/pm-tal_1440x.webp?v=1775229463
surfaces:
  desktop:
    viewport: 1440
    screenshot: ./desktop.png
  mobile:
    viewport: 390
    screenshot: ./mobile.png
key_claims:
  - Non-habit forming sleep support
  - Bioidentical melatonin (clinically informed dose, 500mcg)
  - Shoden® Ashwagandha for stress / cortisol regulation
  - PQQ (Pyrroloquinoline Quinone) for cellular health
  - Targets the gut-brain axis
  - 2-in-1 ViaCap® delivery (inner microbiome + outer melatonin / adaptogen capsule)
compliance_notes: |
  Sleep claims sit under structure-function language with `*` footnote
  tied to FDA disclaimer. Branded ingredient names (Shoden®) carry
  supplier-validated language — quote verbatim. Melatonin dose is
  specifically called out as "bioidentical" and "clinically informed
  500mcg" — never round, never imply higher = better. Activation
  windows ("starts within 1 hour, continues for up to 7 hours") are
  ingredient-specific (melatonin), not product-level. Required usage
  warning: "Do not drive or operate heavy machinery after taking."
  Avoid: "treats insomnia," "cures sleep disorders," any disease-state
  framing.
---

# Sleep + Restore (PM-02™)

Non-habit-forming sleep stack timed for the night. Bioidentical melatonin (500mcg, clinically informed dose — not the megadose default) plus Shoden® Ashwagandha for stress and PQQ for cellular recovery. Inner capsule feeds the gut-brain axis. Currently flagged "New" in hero. PM-02 is the daytime / nighttime mirror to AM-02.

## Visual identity

- **Primary:** `#B0D1BE` — soft mint. Lead branding accent.
- **Secondary:** `#D2E6DA` — supporting mint surfaces. Also exposed live as `--color--pm-redemption` (used as a section background tint behind benefit modules).
- **Light:** `#EBF5EF` — softest mint wash for subtle section backgrounds.
- **Medium:** `#698E79` — cool dusk green / verdigris. The live site exposes this as `--color--pm` and uses it as the dominant brand-product surface. Reads nighttime / restorative.
- **Dark:** `#4E6B5C` — deep dusk for contrast type or weighted footers.
- **Highlight:** `#C9F3DB` — brighter mint for emphasis spots / callouts.
- **None of the 6 steps are in `seed-health/tokens` yet** — flagged in lessons.md.
- **Secondary color:** Warm off-white / parchment (`#fcfcf7`).
- **Accent:** `color.primary.seed-green` (`#1c3a13`) for CTAs and brand emphasis.
- **Badge treatment:** "New" chip near the product name.
- **Typography variant:** No deviation from default Seed Sans hierarchy.

## Content specifics

- **Tagline:** "PM-02™ provides non-habit forming support for deep, restorative sleep and refreshed mornings.*"
- **Elevated claim language:**
  - "Bioidentical melatonin: clinically informed dose that mimics the amount your body naturally produces, gently releasing throughout the night to help you stay asleep."
  - "Shoden® Ashwagandha: a clinically studied adaptogen that lowers cortisol levels, enhances stress resilience, and supports deep, restorative sleep"
  - "Pyrroloquinoline Quinone: a superior antioxidant for cellular health that supports brain health and cognitive function — enhances mitochondrial activity and reduces oxidative stress"
  - "Helps realign your natural sleep-wake cycle"
  - "Recalibrates your circadian rhythm over time"
- **Simple claim language:**
  - "Reduces sleep latency and helps you stay asleep through the night"
  - "Lowers your physical and cellular stress to promote recovery while sleeping"
  - "Wake up refreshed without the next-day haze"
  - "Designed to gently taper so you wake up without the next-day haze"
- **Compliance-approved phrases:**
  - "Non-habit forming" (factual / formulation claim)
  - "Supports faster sleep onset" (structure-function)
  - "Promotes feeling relaxed and calm before bedtime" (structure-function)
  - "Bioidentical dose of melatonin — 500mcg" (factual + specific)
  - Avoid: "treats insomnia," "cures sleep disorders," "induces sleep" (passive structure-function only — "supports" / "promotes")
- **Required disclaimer:** "Do not drive or operate heavy machinery after taking." Always include in usage instructions.

## Imagery direction

- **Hero style:** Macro / product-on-pedestal of the dual-capsule. Hero ground sits on the `medium` dusk-green (`#698E79`) on the live site, with `primary` (`#B0D1BE`) and `highlight` (`#C9F3DB`) reserved for accent spots. Capsule transparency consistent with the line.
- **Ingredient / science imagery:** Day/night circadian diagram is PM-02's signature graphic — shows melatonin activation timeline overlaid against natural cycle. Branded ingredient callouts (Shoden®) get card treatments. PQQ imagery leans cellular / mitochondrial, not photographic.
- **Lifestyle imagery:** Dusk / dim / evening contexts. Refillable jar + travel vial echoes the line. Lifestyle stays editorial.

## Template deviations

None — uses canonical PDP structure (`pages/pdp/`). Notable variant: hero badge is "New"; circadian-alignment diagram is unique to PM-02; usage instruction includes the required heavy-machinery warning.

## Related

- Page template: [pages/pdp/](../../pages/pdp/index.md)
- Voice rules: [copy/compliance.md](../../copy/compliance.md) — structure-function vs. disease language
- Companion product: [AM-02 Energy + Focus](../am-02/index.md) — circadian / day-night pairing
- Cross-sell partner in bundle: [DS-01](../ds-01/index.md)
