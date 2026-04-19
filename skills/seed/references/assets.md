# Assets

How to use imagery, video, and creative assets from Bynder. This is the Seed-specific companion to tokens and components.

## Source of truth

All approved creative assets live in [Bynder](https://seed.getbynder.com). Do not use assets from other sources without approval. Do not generate AI imagery as final production content; prototypes only, flagged explicitly.

## Bynder CDN

Bynder serves optimized variants via CDN URLs. Pattern:

```
https://seed.getbynder.com/m/[asset-id]/[variant]
```

Common variants:
- `original` — source file, avoid for web
- `webimage` — 1920px wide, web-optimized
- `mini` — 200px wide, thumbnails
- `thul` — 120px wide, avatars and icons

For responsive images, request multiple variants via `srcset`:

```html
<img
  src="https://seed.getbynder.com/m/[id]/webimage"
  srcset="
    https://seed.getbynder.com/m/[id]/mini 200w,
    https://seed.getbynder.com/m/[id]/thul 120w,
    https://seed.getbynder.com/m/[id]/webimage 1920w
  "
  sizes="(min-width: 768px) 50vw, 100vw"
  alt="[descriptive alt text]"
  loading="lazy"
  decoding="async"
/>
```

## Naming conventions

Bynder assets follow a naming pattern. When searching, look for:

- `product-[sku]-[view]` — product photography
- `lifestyle-[context]-[variant]` — lifestyle imagery
- `science-[type]-[subject]` — diagrams, lab imagery, clinical visuals
- `member-[context]` — member experience photography
- `brand-[asset]-[variant]` — logos, marks, brand elements

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
