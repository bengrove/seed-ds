---
template: pdp
product: Daily Synbiotic (DS-01®)
captured: 2026-04-20
source: https://seed.com/daily-synbiotic
surfaces:
  desktop:
    viewport: 1440
    screenshot: ./desktop.png
    figma: ./desktop.h2d
  mobile:
    viewport: 390
    screenshot: ./mobile.png
    figma: ./mobile.h2d
notes: |
  Canonical PDP capture. DS-01 exercises the full PDP module library (hero,
  ViaCap, benefit timeline, compare table, welcome kit, subscription tiers,
  testing callouts). Promo code "TARGET20" is live at capture time — typical
  promo-on-PDP treatment, not permanent copy.
---

# PDP (Product Detail Page)

## Purpose
Deep-dive product page for prospects evaluating a specific SKU. Converts browsers to subscribers by pairing emotional proof (bloating relief, skin, immunity) with scientific proof (strain counts, clinical validation, testing rigor). Primary CTA is "Start Now" into a subscription flow.

## Structure
1. **Hero** — product name (DS-01®), one-line value prop, promo code banner, strikethrough pricing ($39.99 / ~~$49.99~~), "30-day supply delivered monthly" reassurance, "Start Now" CTA, risk/shipping reassurance line
2. **Bundle + Save 25%** — cross-sell (AM-02™ Energy + Focus) with inline upsell card
3. **ViaCap® technology module** — capsule-in-capsule explainer (shared pattern with homepage; outer/inner capsule breakdown)
4. **Benefit timeline** — "The DS-01® difference: Benefits that build over time"; horizontal/tabbed 4-stage timeline (7 days → 2 weeks → 4 weeks → 3 months) each with 3 sub-benefits and compliance asterisks/daggers
5. **How to Use** — single-line usage instruction
6. **Attribute badge grid** — Vegan, Gluten-Tested, Dairy-Tested, Nut-Tested, Soy-Tested, Shellfish-Tested, Sesame-Tested, Corn-Tested, Glyphosate/AMPA-Tested, No Binders, No Preservatives, Prop. 65 Compliant (12 chips)
7. **Footnote** — strain identity disclosure
8. **Comparison table** — "How DS-01® Compares"; 5-row 2-column (DS-01 vs Other Probiotics) with check/copy cells
9. **Welcome Kit module** — "Sustainably delivered, monthly." First-order inclusion: refillable glass jar + glass travel vial + DS-01 (30-day / 60 caps)
10. **Subscription tier selector** — "Sustainable Refills" with 1 / 3 / 6 month delivery options
11. **Testing rigor module** — "Rigorous testing that sets a higher standard." Three callouts: allergen-free formulation, heavy-metal/glyphosate testing, Prop. 65 compliance
12. **Bottom brand repeat** — "DS-01® Daily Synbiotic"

## Key patterns
- **Pricing treatment:** Strikethrough original + discounted display, paired with a promo code badge. Matches bundle treatment from homepage/PLP.
- **Benefit timeline:** Time-based progression (7d/2w/4w/3m) is a PDP-specific pattern. Each stage is a stacked list with 3 sub-benefits. Compliance marks (`*`, `**`, `†`, `††`) distinguish claim strength.
- **Attribute badge grid:** 12-item chip grid — compact, symmetric, reads as a "what's in / not in" scannable block. Likely wraps from 4-col desktop → 3-col mobile → 2-col narrow.
- **Comparison table:** 2-column versus format. Cells have check marks (DS-01) or prose (competitors, typically hedged: "10 or less strains", "Rare"). Document as `comparison-table` component.
- **Welcome kit vs subscription tiers:** Two distinct card/module treatments — a one-time "Welcome Kit" row with bonus-gift chips, then a separate 3-up tier selector for recurring. Worth documenting as distinct patterns.
- **CTAs:** Single primary ("Start Now") in hero, no secondary at top. Reassurance line beneath CTA ("30-day risk-free guarantee. Free US shipping.") is a consistent pattern.
- **Compliance:** Heavy use of `*`, `**`, `†`, `††` symbols — see `copy/compliance.md` for the claim-strength hierarchy.
- **Responsive:** Benefit timeline likely switches from horizontal stepper (desktop) to vertical stack (mobile). Comparison table often transforms to stacked cards on narrow widths.

## Component usage
- Hero with promo badge + strikethrough pricing + primary CTA + reassurance line
- Bundle upsell card (inline cross-sell)
- ViaCap explainer module (shared with homepage)
- Benefit timeline / stepper (PDP-specific)
- Attribute badge / chip grid
- Comparison table (2-col versus)
- Welcome kit card with bonus-gift chips
- Subscription tier selector (3-up)
- Testing/trust callout module (3-up)

Cross-ref: `components.md`, `patterns.md` (PDP entry), `copy/surfaces.md` (PDP rules), `copy/compliance.md`

## Content
> Raw extraction from .MD this page — preserved verbatim for reference.

---

**Title:** Seed • DS-01® Daily Synbiotic | Best Selling Probiotic | Best Price Available - Seed

**Source:** https://seed.com/daily-synbiotic

---

**DS-01®**

Daily probiotic + prebiotic clinically validated to relieve bloating, gas, and irregularity. Powered by 24 strains that promote whole body health.*

**20% off with TARGET20**

$39.99 ~~$49.99~~

30-day supply delivered monthly.
Pause or cancel anytime.

**Start Now**

*30-day risk-free guarantee. Free US shipping.*

---

**Bundle + Save 25%**

Add AM-02™ Energy + Focus to your routine and save on your first order.

---

## Unlike many probiotics, DS-01® makes it to the gut alive.

Seed's ViaCap® technology is engineered for targeted delivery along the GI tract.

**Prebiotic Outer Capsule** — Antioxidant rich prebiotic releases in the upper GI tract.

**Probiotic Inner Capsule** — Delivers live bacteria to the colon where it's needed most.

---

## The DS-01® difference: Benefits that build over time

Results you can feel in as little as 7 days.*

- **7 Days — Reduces Bloating + Gas†**
  - Reduces rumbling in the gut
  - Alleviates excess gas
  - Lessens disruption from bloating**
- **2 Weeks — Supports Healthy Regularity*††**
  - Improves stool quality
  - Reduces occasional constipation
  - Makes pooping easier
- **4 Weeks — Smooths Skin Aging*††**
  - Supports skin appearance
  - Reduces fine lines
  - Reduces wrinkles
- **3 Months — Whole Body Health***
  - Promotes overall digestive quality of life
  - Supports immune system balance††
  - Increases micronutrient synthesis††

**How to Use:**
Take 2 capsules daily, with or without food, day or night.

---

**Attribute badges:** Vegan · Gluten-Tested · Dairy-Tested · Nut-Tested · Soy-Tested · Shellfish-Tested · Sesame-Tested · Corn-Tested · Glyphosate / AMPA-Tested · No Binders · No Preservatives · Prop. 65 Compliant

*Identical strain, formerly known as Bifidobacterium adolescentis SD-BA5-IT

---

## How DS-01® Compares:

|  | DS-01® | Other Probiotics |
| --- | --- | --- |
| Clinically-studied 24-strain formula | ✓ | 10 or less strains |
| Engineered for precision delivery to the colon | ✓ | Rarely validated to reach the gut |
| Clinically tested in multiple clinical trials | ✓ | Rare |
| Third-party tested for pesticides and allergens | ✓ | Rare |
| Vegan, gluten and nut tested, low FODMAP | ✓ | Rare |

---

## Sustainably delivered, monthly.

**DS-01® Welcome Kit** — Complimentary with your first order.

- **Refillable Glass Jar** — Bonus gift
- **Glass Travel Vial** — Bonus gift
- **DS-01® Daily Synbiotic** — 30-day supply · 60 capsules

---

**Sustainable Refills** — Recurring orders, on your schedule.

- **1 Month Delivery** — 30-day supply · 60 capsules
- **3 Month Delivery** — 90-day supply · 180 capsules
- **6 Month Delivery** — 180-day supply · 360 capsules

---

## Rigorous testing that sets a higher standard.

DS-01® is screened as a full formula for allergens, contaminants, and pesticides — because what's not in your supplement matters, too.

- Formulated without gluten, soy, dairy, and corn
- Tested for heavy metals and free of glyphosate and AMPA
- Formulated to comply with Prop. 65

---

**DS-01® Daily Synbiotic**

---

## Related
- Page template: `pages/pdp/`
- Flagship product: [products/daily-synbiotic.md](../../products/daily-synbiotic.md) *(not yet created)*
- Cross-sold here: AM-02™ (Focus + Energy)
- Shared modules: ViaCap explainer (also on homepage), attribute badge grid, testing callout
- Linked templates: `plp`, `reference` (DS scientific reference), `cart`, `flows/biotics-quiz` (for hesitant prospects)
