---
template: cart
captured: 2026-04-21
source: https://seed.com/cart
surfaces:
  desktop:
    viewport: 1440
    screenshot: ./desktop.png
  mobile:
    viewport: 390
    screenshot: ./mobile.png
notes: |
  Current standalone cart page. A flyout/drawer version is in the roadmap;
  capture again when that ships. Auth state: pre-checkout, DS-01
  subscription already added to trigger realistic line items.
---

# Cart

## Purpose
Cart review before checkout. Confirms the subscription line item and bonus gift, surfaces frequency upgrade nudges, cross-sells the three newer co-biotics (DM-02, AM-02, PM-02) with promotional pricing, and routes to a payment-method picker at checkout.

## Structure
1. **Page header** — "Your Cart"
2. **Line item table** — three columns: Product · Quantity · Price
3. **Primary line item** — DS-01® Daily Synbiotic
   - Frequency: "Delivered monthly"
   - Frequency upgrade nudge: "Save 10% on 3 Month Delivery / Upgrade" (inline)
   - Qty: 1 · Price: $49.99
4. **Bonus gift line** — Glass Travel Vial, "Bonus gift", Qty: 1, "Free"
5. **Cross-sell module** — "You Might Also Like:" with 3-up product cards:
   - DM-02™ Daily Multivitamin · $29.99 ~~$39.99~~
   - AM-02™ Energy + Focus · $26.24 ~~$34.99~~
   - PM-02™ Sleep + Restore · $26.24 ~~$34.99~~
6. **Promo code input** — single text field + `Apply` button
7. **Total** — price summary ($49.99 in this capture — promo and cross-sells not yet added)
8. **Checkout CTA** — "Continue with" preamble + `Checkout` button (suggests a downstream payment-method picker)

## Key patterns
- **Line item table:** three-column layout (Product · Quantity · Price). Image + name + metadata stack in the Product column. Qty control in center. Price right-aligned.
- **Inline frequency upgrade:** "Save 10% on 3 Month Delivery / Upgrade" sits inside the line item, not as a separate banner. Pattern worth documenting — cart is a low-friction place to nudge commitment length without blocking checkout.
- **Bonus gift treatment:** same row format as paid items but with "Bonus gift" metadata label and "Free" price. Keeps the gift visible as part of the order.
- **Cross-sell pricing:** consistent strikethrough-with-percentage-off format used across PLP and PDP. Cart cross-sells show the pre-discounted price alongside — reinforces "you're saving" mental model.
- **Promo code field:** compact inline input + Apply CTA. No drawer or modal; stays on-page.
- **Total without tax/shipping:** this capture shows only subtotal. Tax/shipping likely calculated at checkout (Shopify CDN side).
- **"Continue with" preamble + Checkout CTA:** wording implies payment-method picker downstream (Shop Pay / Apple Pay / guest checkout). Worth confirming when checkout is captured.

## Component usage
- Page header
- Line item row (Product · Quantity · Price)
- Frequency upgrade nudge (inline variant of subscription-controls)
- Bonus gift row (line item variant)
- Cross-sell product card (compact, 3-up, with strikethrough pricing)
- Promo code input + Apply button (compact inline input pattern)
- Total summary row
- Primary CTA with "Continue with" preamble

Cross-ref: `components.md`, `patterns.md` (cart/member flows), `copy/surfaces.md` (cart rules), `copy/microcopy.md` (CTA + subscription-control strings)

## Content
> Raw extraction from .MD this page — preserved verbatim for reference.

---

**Title:** Seed • Your Cart

**Source:** https://seed.com/cart

---

## Your Cart

| Product | Quantity | Price |
| --- | --- | --- |
| **DS-01® Daily Synbiotic**<br>Delivered monthly<br>*Save 10% on 3 Month Delivery — Upgrade* | 1 | $49.99 |
| **Glass Travel Vial**<br>Bonus gift | 1 | Free |

---

### You Might Also Like:

- **DM-02™** — Daily Multivitamin · $29.99 ~~$39.99~~
- **AM-02™** — Energy + Focus · $26.24 ~~$34.99~~
- **PM-02™** — Sleep + Restore · $26.24 ~~$34.99~~

---

**Promo Code:** [ ________ ] · Apply

**Total:** $49.99

**Continue with** · Checkout

---

## Related
- Next in flow: `checkout` (Shopify CDN territory)
- Preceding surface: `pdp` or `plp` (Add to Cart origin)
- Cross-sold here: DM-02™, AM-02™, PM-02™ — all at the same 25% / 10% promotional pricing seen on PDP bundle and PLP
- Shared modules: strikethrough cross-sell pricing (same treatment as PLP + PDP bundles)
- Linked templates: `subscription` (frequency upgrade ties into subscription management), `account`
