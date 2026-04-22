---
template: plp
captured: 2026-04-19
source: https://seed.com/products
surfaces:
  desktop:
    viewport: 1440
    screenshot: ./desktop.png
  mobile:
    viewport: 390
    screenshot: ./mobile.png
notes: |
  Content captured via .MD this page extension. Full product catalog listing page.
---

# PLP (Product Listing Page)

## Purpose
Shop-all landing. Surfaces the full product catalog with enough detail for prospects to evaluate and add to cart without leaving the page. Also anchors cross-sell (Daily Essentials Duo) and funnels uncertain prospects into the Biotics Quiz.

## Structure
1. **Page header** — "Whole Body Health, Made Possible by Your Microbiome"
2. **Featured product — DS-01®** (Bestseller) with full feature card: badge, name, price, claim copy, dual CTA (Learn More / Add to Cart), quiz inline nudge
3. **DM-02™** — Daily Multivitamin, New badge
4. **Bundle — Daily Essentials Duo** — cross-sell between DS-01 and DM-02, strikethrough pricing ($67.49 / ~~$89.98~~), 25% off
5. **AM-02™** — Focus + Energy, New badge
6. **PM-02™** — Sleep + Restore, New badge
7. **PDS-08®** — Pediatric Synbiotic
8. **VS-01™** — Vaginal Synbiotic (premium tier at $99)

## Key patterns
- **Layout:** Vertical stack of product cards (not a typical e-com grid). Each card gets substantial vertical real estate with claim copy — priority is education, not density.
- **Card anatomy:** Optional badge (top), product icon/imagery, SKU + name, claim sentence (with asterisk for structure/function), price, dual CTA.
- **Badges:** "Bestseller" (DS-01), "New" (DM-02, AM-02, PM-02), "Bundle + Save 25%" (Duo).
- **Inline CTA variant:** Under DS-01, a conversational quiz nudge — "Is DS-01® the right probiotic for you? Take the Quiz". Pattern worth documenting as a "product-card supplement" component.
- **Pricing treatment:** Bundle uses strikethrough original price — document the typographic treatment.
- **Responsive:** Already stacks vertically — likely just tightens padding / reduces imagery size on mobile.
- **Compliance:** Every claim carries an asterisk; italicized Latin (*L. crispatus*) for strain names.

## Component usage
- Product card (variants: Bestseller, New, Bundle)
- Badge (Bestseller, New, Bundle + Save %)
- Dual CTA pair (Learn More + Add to Cart) — likely `button/secondary` + `button/primary`
- Inline quiz-nudge prompt under product card
- Strikethrough / sale pricing typography

Cross-ref: `components.md`, `patterns.md`, `copy/surfaces.md` (PLP rules)

## Content
> Raw extraction from .MD this page — preserved verbatim for reference.

---

**Title:** #1 Daily Probiotic, Multivitamin, Sleep + Energy Supplements

**Source:** https://seed.com/products

---

# Whole Body Health, Made Possible by Your Microbiome

**Bestseller**
**DS-01® — Daily Synbiotic**
Eases bloating, improves regularity, and supports digestive health with 24 targeted probiotic strains + a novel prebiotic.*
$49.99
Learn More · Add to Cart

*Is DS-01® the right probiotic for you? Take the Quiz*

---

**New**
**DM–02™ — Daily Multivitamin**
Helps cover daily nutrient gaps for your body and microbiome with 100% daily value of 20 essential vitamins and minerals.*
$39.99
Learn More · Add to Cart

---

**Daily Essentials Duo**
Clinically validated probiotic and advanced multivitamin duo for daily health.*
**Bundle + Save 25%**
$67.49 ~~$89.98~~
Learn More · Add to Cart

---

**New**
**AM–02™ — Focus + Energy**
Delivers steady, caffeine-free energy to enhance focus, sharpen attention, and help fight mental fatigue.*
$34.99
Learn More · Add to Cart

---

**New**
**PM–02™ — Sleep + Restore**
Provides non-habit forming support for deep, restorative sleep and refreshed mornings.*
$34.99
Learn More · Add to Cart

---

**PDS–08® — Pediatric Synbiotic**
Supports healthy regularity, skin, and respiratory health for kids and teens (ages 3-17) with 9 probiotic strains + a prebiotic.*
$39.99
Learn More · Add to Cart

---

**VS–01™ — Vaginal Synbiotic**
Rapidly establishes a healthy vaginal microbiome dominated by *L. crispatus* — the vagina's most protective bacteria.*
$99.00

---

## Related
- Page templates: `pdp` (deep-dive per product), `flows/biotics-quiz` (inline nudge routes here), `cart`
- Products: [products/daily-synbiotic.md](../../products/daily-synbiotic.md), [products/dm-02.md](../../products/dm-02.md), [products/am-02.md](../../products/am-02.md), [products/pm-02.md](../../products/pm-02.md), [products/pds-08.md](../../products/pds-08.md), [products/vs-01.md](../../products/vs-01.md) *(none created yet)*
