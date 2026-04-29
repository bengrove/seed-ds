---
product: <Product Name>              # e.g. Daily Synbiotic
sku: <SKU>                            # e.g. DS-01
category: <category>                  # e.g. synbiotic, probiotic, prebiotic, multivitamin
template: pdp                         # links to pages/pdp/
captured: YYYY-MM-DD
source: https://seed.com/...
subcategory_color:
  # If the product uses brand-primary (synbiotic category — DS-01, PDS-08,
  # VS-01, DED), set `token: color.primary.seed-green` and `hex: "#1c3a13"`
  # and skip the ramp.
  #
  # If the product has its own subcategory ramp (DM-02, AM-02, PM-02),
  # fill in all six steps from the design system. The live my-seed-live
  # CSS exposes only the `medium` shade as `--color--<sku>` — note this
  # under `live_var_role`.
  ramp:
    primary: "#000000"        # lead branding / hero accent
    secondary: "#000000"      # supporting surfaces
    light: "#000000"          # softest wash / subtle backgrounds
    medium: "#000000"         # mid-tone (typically the live --color--<sku>)
    dark: "#000000"           # contrast type / weighted footers
    highlight: "#000000"      # bright accent / emphasis spots
  live_var: "--color--<sku>"
  live_var_role: medium       # which ramp step the live var maps to
  redemption_hex: "#000000"   # if a `--color--<sku>-redemption` var exists
hero_imagery:
  jar: <Shopify CDN URL for product / jar shot>
  viacap: <Shopify CDN URL for capsule / detail shot>
  # Add additional named keys as needed (lifestyle, ingredient, etc.)
surfaces:
  desktop:
    viewport: 1440
    screenshot: ./desktop.png
  mobile:
    viewport: 390
    screenshot: ./mobile.png
key_claims:
  - <claim 1>
  - <claim 2>
compliance_notes: |
  Structure/function vs. disease language, FDA disclaimer placement, strain claim rules.
---

# <Product Name>

## Visual identity
- **Primary color:** <token / hex>
- **Secondary color:** <token / hex>
- **Accent:** <token / hex, or "matches primary">
- **Badge treatment:** <describe>
- **Typography variant:** <if any deviation from default>

## Content specifics
- **Tagline:** "..."
- **Elevated claim language:** "..."
- **Simple claim language:** "..."
- **Compliance-approved phrases:** [...]

## Imagery direction
- Hero style: <describe>
- Ingredient / science imagery: <describe>
- Lifestyle imagery: <describe>

## Template deviations
Anything structurally different from the canonical `pages/<template>/`. If nothing, write "None — uses canonical PDP structure."

## Related
- Page template: [pages/pdp/](../../pages/pdp/index.md)
- Other products in category: [...]
