# Assets

How to handle imagery, video, and creative assets at Seed. Covers three delivery systems (Bynder, Cloudinary, Shopify CDN), the Media Container component, imagery rules, and asset workflow.

## Asset delivery landscape

Seed is headless on Shopify. Three systems, each with a distinct job:

1. **Bynder (DAM)** — source of truth for approved brand, lifestyle, and science assets. Storage, approvals, master files. **Not** a production web delivery layer.
2. **Cloudinary (headless CDN)** — serves and optimizes assets for the headless storefront (homepage, PLP, cultured articles, SeedLabs, approach, and all lifestyle/editorial imagery). Handles format negotiation (webp/avif), responsive resizing, on-the-fly transformations.
3. **Shopify CDN** — serves product imagery on PDPs and all checkout assets. Product photos live here natively because Shopify hosts the product catalog.

**Picking the right CDN:** *which surface is this?* PDP or checkout → Shopify. Everything else on the headless site → Cloudinary. Brand, lifestyle, and science source files live in Bynder regardless of where they're delivered.

---

## Bynder (DAM)

Bynder is where approved assets live. Brand team and designers use it for storage, approvals, and internal review. Before an asset ships to the web, it's pushed into Cloudinary (for headless surfaces) or uploaded to Shopify (for product imagery).

- URL: [seed.getbynder.com](https://seed.getbynder.com)
- **Do not hotlink Bynder URLs in production pages.** Use Cloudinary or Shopify CDN instead.
- Do not use assets from other sources without approval.
- Do not generate AI imagery as final production content; prototypes only, flagged explicitly.

### Bynder naming conventions

When searching Bynder, look for:

- `product-[sku]-[view]` — product photography
- `lifestyle-[context]-[variant]` — lifestyle imagery
- `science-[type]-[subject]` — diagrams, lab imagery, clinical visuals
- `member-[context]` — member experience photography
- `brand-[asset]-[variant]` — logos, marks, brand elements

---

## Cloudinary (headless CDN)

**Cloud name:** `dljz0lko8`. URLs are open (unsigned) — no signature segment.

**URL pattern:**

```
https://res.cloudinary.com/dljz0lko8/image/upload/{transformations}/{folder-path}/{filename}.{ext}
```

**Standard transformations:** always include `f_auto,q_auto` (auto format for webp/avif support, auto quality). Add `w_{width}` for responsive variants.

Example — homepage hero, mobile variant:

```
https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto/library/hero/science_and_tech_mobile.png
```

### Responsive srcset pattern

```html
<img
  src="https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto,w_1440/library/hero/science_and_tech.png"
  srcset="
    https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto,w_390/library/hero/science_and_tech_mobile.png 390w,
    https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto,w_768/library/hero/science_and_tech.png 768w,
    https://res.cloudinary.com/dljz0lko8/image/upload/f_auto,q_auto,w_1440/library/hero/science_and_tech.png 1440w
  "
  sizes="(min-width: 768px) 100vw, 100vw"
  alt="..."
  loading="lazy"
  decoding="async"
/>
```

### Folder convention

Observed pattern (document more as URLs surface during page captures):

- `library/` — common root for web-delivered assets
- `library/{category}/` — grouped by purpose (`hero/`, etc.)
- Filenames: underscores, lowercase, context suffix where needed (`_mobile`, `_desktop`)

---

## Shopify CDN

Shopify CDN serves PDP product imagery and all checkout assets natively, because Shopify hosts the product catalog and checkout surface.

**URL pattern:**

```
https://cdn.shopify.com/s/files/1/{store-id}/products/{filename}.{ext}
```

Shopify handles most optimization automatically — format conversion, responsive variants via query params (`?width=1440`), lazy loading when using the storefront `<Image>` component.

**Use Shopify CDN for:**
- PDP hero gallery (product shots, detail views, scale references)
- Checkout product thumbnails
- Any asset tied to a Shopify product SKU

**Do not use Shopify CDN for:**
- Editorial imagery (homepage hero, cultured articles, SeedLabs, approach) — use Cloudinary
- Brand marks, logos — use Cloudinary
- Lifestyle imagery not tied to a product — use Cloudinary

## Media Container component

All images and video on Seed surfaces render inside the **Media Container** component (Figma library). Use this component instead of bare `<img>` / `<video>` tags — it enforces aspect ratio, fallback, and loading behavior.

### Aspect ratio variants

The component exposes six supported ratios. Pick the ratio that matches the crop of the asset, not the layout slot.

| Ratio | Typical use |
|---|---|
| `3:4` | Portrait product shots, portrait lifestyle, editorial hero |
| `1:1` | Square grid tiles, social-style modules, avatar-adjacent |
| `5:4` | Near-square editorial, tighter product compositions |
| `4:3` | Classic photo, science diagrams, member stories |
| `3:2` | Landscape product, landscape lifestyle |
| `16:9` | Video thumbnails, cinematic hero, full-bleed landscape |

Do not author custom aspect ratios. If an asset doesn't fit one of the six, re-crop the source rather than adding a new variant.

### Container states

Every ratio has two states:

- **Image** — the asset is loaded and displayed. Preserves the ratio via CSS (`aspect-ratio`), not fixed height.
- **Fallback** — the asset is missing, loading, or failed. Shows a token-styled placeholder (solid fill using a neutral token) that preserves layout and prevents CLS.

When emitting code, always render the Fallback state behind the Image so layout is stable before the asset resolves. Do not collapse the container when an image is missing.

### Choosing a ratio per surface

| Surface | Default ratio | CDN |
|---|---|---|
| PDP hero (product) | `3:4` portrait or `1:1` square | Shopify |
| PLP tile | `1:1` | Shopify (product) / Cloudinary (editorial) |
| Homepage module (editorial) | `4:3` or `16:9` | Cloudinary |
| Benefit card (timeline, welcome kit) | `1:1` or `4:3` | Cloudinary |
| Video (Microbiome 101, SeedLabs) | `16:9` | Cloudinary / Mux |
| Checkout thumbnail | `1:1` | Shopify |
| Member-facing account avatar | `1:1` | Cloudinary |

See `pages/*/` for real-world ratio usage across templates.

---

## Imagery rules

### Product photography

- Primary product shot: front view, white seamless background
- Secondary shots: detail, lifestyle, scale reference
- Never use product photography with real medical imagery (pills, prescriptions) nearby

### Lifestyle

- Real people, diverse representation, natural settings
- No stock photography with watermarks or recognizable stock tropes
- Skin tones accurate to the original capture; no over-smoothing

### Science and education

- Diagrams use Seed's illustration style, earth-toned palette
- Microbiome imagery uses the approved visual language (see Bynder tag: `science-microbiome`)
- Never use microscope imagery that implies the product's contents

### Brand marks

- Primary logo: only on approved placements
- Minimum clear space: logo height on all sides
- Never stretch, recolor outside of token-allowed variants, or combine with other marks

## Alt text

Alt text is required on every image. Write for screen readers; describe what the image communicates, not what it depicts.

Good: "A hand holding a daily Seed capsule next to a glass of water"
Not: "product.jpg" or "Seed product"

For decorative images, use `alt=""` and mark `role="presentation"`.

## Video

### Hosting

- Primary: Mux for performance, adaptive bitrate
- Secondary: Bynder for internal and brand assets

### Rules

- Autoplay allowed only when muted and within viewport
- Provide captions for all video with speech
- Provide a poster frame; no black or default thumbnails
- Keep hero videos under 10 seconds or loop seamlessly

### Formats

- `h264` for broad support
- `webm` optional for smaller file size
- `hls` for adaptive streaming

## AI-generated imagery

For prototypes and Claude Design explorations only. Never ship AI imagery as final production content.

Flag AI imagery in code:

```html
<img
  src="[ai-generated-url]"
  alt="Placeholder, AI-generated"
  data-placeholder="true"
  data-source="ai"
/>
```

## Image optimization checklist

Before shipping:
- [ ] Correct Bynder variant for the display size
- [ ] `srcset` and `sizes` for responsive
- [ ] `loading="lazy"` for below-fold
- [ ] `decoding="async"`
- [ ] `alt` text meaningful or empty
- [ ] Aspect ratio preserved via CSS, not fixed height
- [ ] No images over 500KB on desktop, 200KB on mobile

## Asset request workflow

If a surface needs an asset that does not exist in Bynder:

1. Note the gap in this file under "Asset gaps"
2. Request from the creative team
3. Use a placeholder in the meantime, flagged with `data-placeholder="true"`

## Asset gaps

Add gaps as encountered.

- _none yet_
