---
template: checkout
captured: 2026-04-21
source: https://checkout.seed.com/checkouts/...
surfaces:
  desktop:
    viewport: 1440
    screenshot: ./desktop.png
  mobile:
    viewport: 390
    screenshot: ./mobile.png
notes: |
  Shopify-hosted checkout. Not a headless surface — lives on
  checkout.seed.com (Shopify domain) rather than seed.com.

  The .MD this page extension only extracted the title and one H1; the rest
  of the checkout UI is rendered client-side inside Shopify's SPA, so
  text-extraction tools can't reach it. The real reference is the
  screenshots, not the markdown.

  Design system influence on this surface is limited: Shopify's Checkout
  UI Extensions / Branding API controls (color, type, logo, corner radius,
  button style) are the primary levers. See docs/claude-design-setup.md
  for why this surface is governed differently than headless pages.
---

# Checkout

## Purpose
Shopify-hosted checkout for completing the purchase. Handles shipping address, payment, order review, and confirmation. Served from `checkout.seed.com` (Shopify domain), not the headless `seed.com`.

## Structure (by Shopify convention — extraction couldn't reach SPA content)
Typical Shopify one-page checkout stages:
1. **Contact information** — email, marketing opt-in
2. **Shipping address** — autocomplete, country, standard form fields
3. **Shipping method** — rate selector (free standard for DS-01 subscribers)
4. **Payment** — Shop Pay, Apple Pay, Google Pay, credit card
5. **Order summary** — line items from cart, subtotal, shipping, tax, total
6. **Complete order CTA**

Refer to the desktop/mobile screenshots for the actual ordering and module treatments at capture time.

## Key patterns
- **Not a headless surface.** Checkout runs on Shopify's platform. Custom React components, Tailwind classes, and design tokens from `@seed-health/tokens` **do not apply here** the same way they do on headless pages.
- **Branding controls are limited to Shopify's Checkout Branding API** — corner radius, primary button color, accent color, heading/body typography pairings, logo upload, form field style (outlined vs filled), color scheme.
- **Shop Pay is the default** accelerated checkout. The capture URL includes `&skip_shop_pay=true`, which is a dev flag to see the full form path — end users typically see Shop Pay first.
- **Line items come from cart state** — any frequency upgrade or promo applied in `cart` carries through.
- **Payment surface uses Shopify CDN** for product thumbnails.
- **No headless voice rules apply to Shopify's stock strings** (e.g., "Contact information", "Shipping method"). These are Shopify defaults unless overridden via the Branding API.

## Component usage
Not applicable in the same sense as headless pages. On Shopify checkout:
- Use **Shopify Checkout UI Extensions** for any custom blocks (upsells, trust badges, delivery notes)
- Use **Checkout Branding API** for token-aligned visual defaults
- Don't attempt to port `my-seed-live/components` into checkout — the frame doesn't support it

Cross-ref: `assets.md` (Shopify CDN section), `docs/claude-design-setup.md` (checkout workflow note)

## Content
> Raw extraction from .MD this page — nearly empty because Shopify checkout is a client-rendered SPA.

---

**Title:** Checkout - Seed Health

**Source:** `https://checkout.seed.com/checkouts/cn/...` (dynamic per-session URL)

---

# Seed Health Checkout

*(Remaining UI is rendered client-side inside Shopify's SPA and not extractable via `.MD this page`. See screenshots for actual layout.)*

---

## Related
- Preceding surface: [`cart`](../cart/index.md) — cart state carries into checkout
- CDN: Shopify — see [`assets.md`](../../assets.md) Shopify CDN section
- Adjacent docs: [`docs/claude-design-setup.md`](../../../../../docs/claude-design-setup.md) for why Claude Design can't style checkout directly
- Divergent from design system: checkout is platform-governed (Shopify Branding API), not headless-governed. Flag this surface when agents try to emit Seed-styled checkout markup — it won't apply.
