---
product: Pediatric Daily Synbiotic (PDS-08®)
sku: PDS-08
category: synbiotic
template: pdp
captured: 2026-04-29
source: https://seed.com/pds08-daily-kids-probiotic
subcategory_color:
  token: color.primary.seed-green
  hex: "#1c3a13"
  note: |
    PDS-08 uses the brand primary directly (same as DS-01) — no
    `--color--pds` token exists in the live CSS. Both adult and pediatric
    synbiotics share the brand-primary color story; non-synbiotic
    products (DM-02, AM-02, PM-02) get their own subcategory token.
hero_imagery:
  hero: https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto,w_1000/v1649362831/PDS%20PDP/pds08_pdp_hero.png
  note: |
    PDS-08 uses Cloudinary for product imagery rather than Shopify CDN.
    The PDP predates the Shopify CDN convention (Cloudinary timestamps
    are from 2022, the rest of the line moved to Shopify CDN later).
    Treat as a known deviation, not a model to replicate.
surfaces:
  desktop:
    viewport: 1440
    screenshot: ./desktop.png
  mobile:
    viewport: 390
    screenshot: ./mobile.png
key_claims:
  - 9 probiotic strains + fiber-based prebiotic (2-in-1 powdered synbiotic)
  - 24.5 Billion AFU
  - For kids and teens, ages 3-17
  - 5g of prebiotic fiber per serving
  - No added sugar, no refrigeration required
  - Clinically studied formula
compliance_notes: |
  Pediatric claims sit under structure-function language with `º` /
  `*` footnote tied to FDA disclaimer (`These statements have not been
  evaluated by the Food and Drug Administration. This product is not
  intended to diagnose, treat, cure, or prevent any disease.`). Strain
  blends are categorized by benefit area (Gastrointestinal Immunity /
  Respiratory Health / Dermatological Health) — quote blend names
  verbatim. Required disclaimers: "Intended for daily use by persons
  between the ages of 3-17 years. Use only under the supervision of a
  parent, guardian, or health practitioner." and "Keep out of reach of
  children under 3 years of age." Avoid: any claim about treating
  pediatric conditions, ADHD, autism, allergies, or behavioral
  outcomes — this is the highest-risk product for compliance drift.
---

# Pediatric Daily Synbiotic (PDS-08®)

The kids' synbiotic. Powdered sachet rather than capsule — formulated for ages 3-17 with an explicit "how do I get my kid to take this daily?" design ethos. Comes in the BacTrac™ aluminum container that doubles as a daily-use tracker. The legacy product in the line: predates the Shopify CDN convention, has its own template variations.

## Visual identity

- **Primary color:** `color.primary.seed-green` (`#1c3a13`) — brand primary. PDS-08 does not have a per-product subcategory color (no `--color--pds` token); shares the seed-green visual treatment with DS-01 because both are synbiotics.
- **Secondary color:** Warm off-white / parchment (`#fcfcf7`).
- **Accent:** `color.primary.seed-green` for CTAs.
- **Badge treatment:** No "Bestseller" or "New" chip in steady state; product name uses a stacked layout ("PDS-08® Pediatric Daily Synbiotic").
- **Typography variant:** No deviation from default Seed Sans hierarchy.

## Content specifics

- **Tagline:** "Clinically studied 2-in-1 powdered synbiotic, formulated for children and adolescents ages 3-17 with 9 probiotic strains and a fiber-based prebiotic."
- **Voice tone:** Notably warmer / more parental than the rest of the line. Uses phrases like "how-do-I-get-my-kid-to-take-this-daily" as section headers — a deliberate winks-at-parents register that doesn't appear elsewhere.
- **Elevated claim language:**
  - "Clinically studied formula"
  - "MAOS Microbiota-Accessible Oligomeric Substrates™ Prebiotic"
  - "Molecular weight profiled inulin and fructooligosaccharides from chicory (Cichorium intybus) root"
  - "The presence of Bifidobacterium increased significantly in the stool among children taking PDS-08® over 12 weeks in a placebo-controlled clinical trial."
- **Simple claim language:**
  - "Formulated for benefits in and beyond the gut"
  - "5g of prebiotic fiber per serving"
  - "No observed side effects or GI distress"
  - "Engineered to survive digestion"
  - "No refrigeration necessary"
- **Compliance-approved phrases:**
  - "Clinically studied" (only when referring to the placebo-controlled trial in children)
  - "Designed for daily use"
  - "Supports digestive and immune function" (structure-function, scoped to commensal bacteria)
  - Always pair benefit claims with the `º` footnote symbol pointing to the FDA disclaimer.
- **Required disclaimers:**
  - "Intended for daily use by persons between the ages of 3-17 years. Use only under the supervision of a parent, guardian, or health practitioner."
  - "Do not exceed the stated recommended daily dose."
  - "Keep out of reach of children under 3 years of age."

## Imagery direction

- **Hero style:** PDS-08 PDP hero shot via Cloudinary (legacy convention). Product-on-pedestal of the BacTrac container against a seed-green field.
- **How-to-use imagery:** Step-by-step icons (open, pour, stir, enjoy) stored in Cloudinary as `PDS08_icon_*.svg` — these are PDS-08-specific and don't appear elsewhere in the line. Also includes a Mux-hosted demo video (different from the rest of the line, which is image-only).
- **Sustainability imagery:** Three-part sustainability illustration (algae shipping box, bio-based tray, aluminum BacTrac container) is unique to PDS-08.
- **Lifestyle imagery:** Kid-in-context shots (the only product whose lifestyle imagery includes children).

## Template deviations

Significant deviations from canonical PDP (`pages/pdp/`):
- **No ViaCap® module.** PDS-08 is a powder, not a capsule.
- **No benefit timeline.** Replaced with "Need-to-Knows" bullet block above the fold.
- **"How to use, daily" video module.** Mux-hosted demo + step-icon walkthrough. Unique to PDS-08.
- **BacTrac™ container education.** Tracking dial / twist-top is part of the product story; not present in capsule SKUs.
- **Sustainability narrative.** Three-part Welcome Kit + Monthly Refills explainer is more prominent than on capsule PDPs.
- **Citations / footnote section.** PDS-08 includes an explicit numbered citations block (`1`-`5`) at the bottom — claim-strength markers use numbered footnotes rather than the `*`/`†` symbol hierarchy used elsewhere.
- **Imagery hosting.** Cloudinary, not Shopify CDN. Treat as legacy; not a model for new captures.

## Related

- Page template: [pages/pdp/](../../pages/pdp/index.md) — primary structural reference, but note the deviations above.
- Voice rules: [copy/compliance.md](../../copy/compliance.md) — pediatric compliance is the strictest scope in the line.
- Adult counterpart: [DS-01](../ds-01/index.md) — same synbiotic category, same brand-primary color.
