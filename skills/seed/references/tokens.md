# Tokens

Source of truth: the Seed tokens repo (Style Dictionary / Tokens Studio). This file mirrors that output for agent context. Keep in sync.

## How to use this file

- Token names use the pattern from the tokens repo exactly. Do not rename.
- Every token has a usage rule. Follow the rule; flag exceptions.
- If you need a value that does not exist, use the closest token and note the gap.

---

## Color

### Brand

| Token | Value | Usage |
|---|---|---|
| `color.brand.primary` | TBD | Primary brand moments, CTAs in marketing surfaces |
| `color.brand.secondary` | TBD | Supporting brand accents |
| `color.brand.accent` | TBD | Sparing highlight for emphasis |

### Surface

| Token | Value | Usage |
|---|---|---|
| `color.surface.base` | TBD | Page background |
| `color.surface.raised` | TBD | Cards, panels, elevated content |
| `color.surface.sunken` | TBD | Input fields, inset areas |
| `color.surface.overlay` | TBD | Modals, popovers, tooltips |

### Text

| Token | Value | Usage |
|---|---|---|
| `color.text.primary` | TBD | Body text, headlines |
| `color.text.secondary` | TBD | Supporting text, metadata |
| `color.text.tertiary` | TBD | Disabled, placeholder, hint |
| `color.text.inverse` | TBD | Text on dark surfaces |
| `color.text.link` | TBD | Inline links only |

### Status

| Token | Value | Usage |
|---|---|---|
| `color.status.success` | TBD | Confirmation, positive delta |
| `color.status.warning` | TBD | Caution, non-blocking issues |
| `color.status.error` | TBD | Errors, destructive confirms |
| `color.status.info` | TBD | Neutral info, help |

### Health and science palette

Reserved tokens for science and data visualization on product pages. Earth-toned, never neon.

| Token | Value | Usage |
|---|---|---|
| `color.science.1` | TBD | Primary data series |
| `color.science.2` | TBD | Secondary data series |
| `color.science.3` | TBD | Tertiary data series |

---

## Typography

### Font families

| Token | Value | Usage |
|---|---|---|
| `font.family.display` | TBD | Hero headlines, editorial |
| `font.family.body` | TBD | All body copy, UI |
| `font.family.mono` | TBD | Data, codes, technical callouts |

### Scale

| Token | Size | Line height | Usage |
|---|---|---|---|
| `font.size.display.xl` | TBD | TBD | Hero only |
| `font.size.display.lg` | TBD | TBD | Section headers, landing pages |
| `font.size.h1` | TBD | TBD | Page titles |
| `font.size.h2` | TBD | TBD | Section titles |
| `font.size.h3` | TBD | TBD | Subsections |
| `font.size.body.lg` | TBD | TBD | Lead paragraphs |
| `font.size.body` | TBD | TBD | Default body |
| `font.size.body.sm` | TBD | TBD | Captions, metadata |
| `font.size.caption` | TBD | TBD | Legal, footnotes |

### Weight

| Token | Value | Usage |
|---|---|---|
| `font.weight.regular` | 400 | Body default |
| `font.weight.medium` | 500 | Emphasis, small UI |
| `font.weight.semibold` | 600 | Headlines, buttons |
| `font.weight.bold` | 700 | Rare, deliberate emphasis |

---

## Spacing

Strict scale. Do not invent values in between.

| Token | Value |
|---|---|
| `space.0` | 0 |
| `space.1` | 4px |
| `space.2` | 8px |
| `space.3` | 12px |
| `space.4` | 16px |
| `space.5` | 24px |
| `space.6` | 32px |
| `space.7` | 48px |
| `space.8` | 64px |
| `space.9` | 96px |
| `space.10` | 128px |

Base grid: 4px. Component padding, gaps, and margins always resolve to one of these values.

---

## Radius

| Token | Value | Usage |
|---|---|---|
| `radius.sm` | TBD | Inputs, small pills |
| `radius.md` | TBD | Buttons, cards |
| `radius.lg` | TBD | Hero surfaces, modals |
| `radius.full` | 9999px | Pills, avatars |

---

## Shadow

Reserved for overlays and elevated surfaces. Never decorative.

| Token | Value | Usage |
|---|---|---|
| `shadow.sm` | TBD | Subtle lift, hover states |
| `shadow.md` | TBD | Dropdowns, popovers |
| `shadow.lg` | TBD | Modals, dialogs |
| `shadow.focus` | TBD | Focus rings |

---

## Motion

See `references/motion.md` for full rules. Token summary:

| Token | Value | Usage |
|---|---|---|
| `motion.duration.fast` | TBD | Hover, small state changes |
| `motion.duration.base` | TBD | Most transitions |
| `motion.duration.slow` | TBD | Overlays, page transitions |
| `motion.easing.standard` | TBD | Default |
| `motion.easing.entrance` | TBD | Modal, toast entry |
| `motion.easing.exit` | TBD | Modal, toast exit |

---

## Breakpoints

| Token | Value | Usage |
|---|---|---|
| `bp.sm` | 640px | Mobile landscape |
| `bp.md` | 768px | Tablet |
| `bp.lg` | 1024px | Desktop |
| `bp.xl` | 1280px | Large desktop |
| `bp.2xl` | 1536px | Extra large |

---

## Token sync status

- [ ] Sync from tokens repo: colors
- [ ] Sync from tokens repo: typography
- [ ] Sync from tokens repo: spacing
- [ ] Sync from tokens repo: radius
- [ ] Sync from tokens repo: shadow
- [ ] Sync from tokens repo: motion

Last sync: never. Update this line when synced.
