---
product: Energy + Focus (AM-02™)
sku: AM-02
category: nootropic
template: pdp
captured: 2026-04-29
source: https://seed.com/energy-focus
subcategory_color:
  ramp:
    primary: "#EAE081"        # lead branding / hero accent (citrine)
    secondary: "#F2ECAE"      # paler yellow / supporting surfaces
    light: "#FAF7D3"          # softest wash / subtle backgrounds
    medium: "#9F995B"         # muted olive — the live site's `--color--am`
    dark: "#797648"           # deep moss / contrast type / footers
    highlight: "#FFF593"      # bright yellow accent / emphasis spots
  live_var: "--color--am"
  live_var_role: medium
  redemption_hex: "#dfd686b3"
  note: |
    Full 6-step palette per the AM-02 design system. The live
    my-seed-live CSS currently only exposes the `medium` shade
    (`#9f995b`) as `--color--am`; the other 5 steps don't have
    published CSS variables yet. None of the six steps are in
    `seed-health/tokens` — see lessons.md.
hero_imagery:
  jar: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/am-g-02_500x.webp?v=1775001764
  capsule: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/am-g-03_500x.webp?v=1775001764
  ingredient: https://cdn.shopify.com/s/files/1/0929/7828/2785/files/am-g-04_500x.webp?v=1775001764
surfaces:
  desktop:
    viewport: 1440
    screenshot: ./desktop.png
  mobile:
    viewport: 390
    screenshot: ./mobile.png
key_claims:
  - Caffeine-free, sustained energy
  - Improves focus and attention in 1 hour
  - Targets the gut-brain axis
  - 2-in-1 ViaCap® delivery (inner microbiome + outer nootropic capsule)
  - Clinically studied nootropics (SoWell™ Methylliberine, CereBoost® Ginseng Root, TeaCrine® Theacrine)
compliance_notes: |
  Cognitive and energy claims sit under structure-function language with
  `*` footnote tied to FDA disclaimer. Branded ingredient names
  (SoWell™, CereBoost®, TeaCrine®) carry their own clinical-claim
  language tied to supplier studies — quote them verbatim, don't
  rephrase. Activation timelines ("peaks within 1 hour", "lasts up to 6
  hours") are tied to specific compounds; never combine into a
  product-level claim. Avoid: "treats fatigue," "cures brain fog," any
  disease-state framing.
---

# Energy + Focus (AM-02™)

Caffeine-free nootropic stack timed across the morning. Inner capsule feeds the gut-brain axis (prebiotics + postbiotics + B vitamins); outer capsule delivers the nootropic stack (ginseng, methylliberine, theacrine). Currently flagged "New" in hero. AM-02's signature is the staggered activation timeline.

## Visual identity

- **Primary:** `#EAE081` — citrine / pale yellow. Lead branding accent.
- **Secondary:** `#F2ECAE` — paler yellow for supporting surfaces.
- **Light:** `#FAF7D3` — softest wash for subtle section backgrounds.
- **Medium:** `#9F995B` — muted olive / khaki green-yellow. The live site exposes this as `--color--am` and uses it as the dominant brand-product surface (where most other products use their primary). Unique inversion to AM-02.
- **Dark:** `#797648` — deep moss for contrast type or weighted footers.
- **Highlight:** `#FFF593` — bright yellow for emphasis spots / callouts.
- **Redemption / wash color:** `#dfd686b3` (live var `--color--am-redemption`) — alpha-blended yellow-olive tint behind benefit modules. The only product currently using a transparent token in this slot.
- **None of the 6 steps are in `seed-health/tokens` yet** — flagged in lessons.md.
- **Secondary color:** Warm off-white / parchment (`#fcfcf7`).
- **Accent:** `color.primary.seed-green` (`#1c3a13`) for CTAs and brand emphasis.
- **Badge treatment:** "New" chip near the product name.
- **Typography variant:** No deviation from default Seed Sans hierarchy.

## Content specifics

- **Tagline:** "AM-02™ delivers steady, caffeine-free energy to sharpen focus, enhance attention, and fight mental fatigue.*"
- **Elevated claim language:**
  - "2-in-1 formulation, superior delivery"
  - "Targeted nutrient delivery to the gut-brain axis"
  - "SoWell™ Methylliberine: a fast-acting nootropic compound with a chemical structure identical to kucha tea"
  - "CereBoost® Ginseng Root: a clinically proven adaptogen that promotes focus and calming sensations during daily stress"
  - "TeaCrine® Theacrine: a nature-identical tea compound with a molecular structure similar to caffeine"
  - "Activates the prefrontal cortex of the brain to support peak cognitive function"
- **Simple claim language:**
  - "Mental energy you can feel in as little as 1 hour that lasts for up to 6 hours"
  - "Ingredients that activate and taper without the jitters or afternoon crash"
  - "Fights fatigue while enhancing processing speed and mental clarity"
  - "Energy that peaks without the crash"
- **Compliance-approved phrases:**
  - "Caffeine-free" (factual, always safe)
  - "Sustained energy" (structure-function)
  - "Promotes focus and calming sensations" (CereBoost®-specific, supplier-validated)
  - "Supports peak cognitive function" (structure-function)
  - Avoid: "treats brain fog," "cures fatigue," "boosts intelligence," any disease-state or super-physiological framing

## Imagery direction

- **Hero style:** Macro / product-on-pedestal of the dual-capsule. Hero ground sits on the muted olive `medium` shade (`#9F995B`) on the live site, with the brighter `primary` citrine (`#EAE081`) and `highlight` (`#FFF593`) reserved for accents and emphasis spots. Same capsule shape language as DS-01 / DM-02; color story shifts to daytime warmth.
- **Ingredient / science imagery:** Activation timeline diagram is AM-02's signature graphic — three compounds, three peak times, layered over a 6-hour curve. Branded ingredient callouts (SoWell™, CereBoost®, TeaCrine®) get their own card treatments.
- **Lifestyle imagery:** Refillable jar + travel vial echoes the line. Lifestyle shots lean morning / desk / focus contexts.

## Template deviations

None — uses canonical PDP structure (`pages/pdp/`). Notable variant: hero badge is "New"; activation-timeline module is unique to AM-02 (other PDPs use the benefit-timeline pattern instead).

## Related

- Page template: [pages/pdp/](../../pages/pdp/index.md)
- Voice rules: [copy/compliance.md](../../copy/compliance.md) — structure-function vs. disease language
- Companion product: [PM-02 Sleep + Restore](../pm-02/index.md) — circadian / day-night pairing
- Cross-sell partner in bundle: [DS-01](../ds-01/index.md)
