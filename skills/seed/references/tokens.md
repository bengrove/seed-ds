# Tokens

Source of truth: [seed-health/tokens](https://github.com/seed-health/tokens) (published as `@seed-health/tokens` on npm). The token tables below are auto-generated from that repo — regenerate with `node scripts/sync-tokens.mjs`.

## How to use this file

- Token names come from the tokens repo exactly. Do not rename.
- If you need a value that does not exist, use the closest token and note the gap in your output.
- Composite tokens (typography, shadows) list their component fields inside the cell.
- For usage conventions per token category (when to use Primary vs Inverse, Fixed vs Mobile/Desktop typography, etc.), see `components.md` and the Figma library. Usage rules are not stored in the tokens repo.

## Consuming tokens in code

See the tokens repo README for stack-specific imports. Common formats:

- **CSS vars:** `import '@seed-health/tokens/build/css/variables.css'` → `var(--color-primary-500)`
- **JS/TS:** `import * as tokens from '@seed-health/tokens'` → `tokens.FixedLabelMedium`
- **SCSS:** `@use '@seed-health/tokens/build/scss/variables' as *` → `$color-primary-500`
- **JSON:** `@seed-health/tokens/build/json/tokens.json` (nested) or `tokens-flat.json` (flat)

When emitting code, prefer the token reference (CSS var or JS import) over hardcoded values.

---

<!-- SYNC:BEGIN -->

_Auto-generated from [seed-health/tokens@c3369cb](https://github.com/seed-health/tokens/tree/c3369cb) on 2026-04-23. Do not edit by hand — run `node scripts/sync-tokens.mjs`._

### Desktop Display

| Token | Value |
|---|---|
| `desktop-display.large` | fontFamily: `Seed Sans`<br>fontSize: `64px`<br>fontWeight: `350`<br>letterSpacing: `-1.28px`<br>lineHeight: `110%` |
| `desktop-display.small` | fontFamily: `Seed Sans`<br>fontSize: `48px`<br>fontWeight: `350`<br>letterSpacing: `-0.96px`<br>lineHeight: `100%` |

### Fixed

| Token | Value |
|---|---|
| `fixed.body-large` | fontFamily: `Seed Sans`<br>fontSize: `18px`<br>fontWeight: `350`<br>letterSpacing: `-0.18px`<br>lineHeight: `140%` |
| `fixed.body-medium` | fontFamily: `Seed Sans`<br>fontSize: `16px`<br>fontWeight: `350`<br>letterSpacing: `-0.16px`<br>lineHeight: `140%` |
| `fixed.body-small` | fontFamily: `Seed Sans`<br>fontSize: `14px`<br>fontWeight: `350`<br>letterSpacing: `-0.14px`<br>lineHeight: `140%` |
| `fixed.body-x-large` | fontFamily: `Seed Sans`<br>fontSize: `20px`<br>fontWeight: `350`<br>letterSpacing: `-0.2px`<br>lineHeight: `140%` |
| `fixed.body-x-small` | fontFamily: `Seed Sans`<br>fontSize: `12px`<br>fontWeight: `350`<br>letterSpacing: `-0.06px`<br>lineHeight: `140%` |
| `fixed.body-xx-small` | fontFamily: `Seed Sans`<br>fontSize: `10px`<br>fontWeight: `350`<br>letterSpacing: `-0.05px`<br>lineHeight: `140%` |
| `fixed.eyebrow` | fontFamily: `Seed Sans`<br>fontSize: `12px`<br>fontWeight: `500`<br>letterSpacing: `0.24px`<br>lineHeight: `110%` |
| `fixed.label-large` | fontFamily: `Seed Sans`<br>fontSize: `18px`<br>fontWeight: `500`<br>letterSpacing: `-0.18px`<br>lineHeight: `140%` |
| `fixed.label-medium` | fontFamily: `Seed Sans`<br>fontSize: `16px`<br>fontWeight: `500`<br>letterSpacing: `-0.16px`<br>lineHeight: `140%` |
| `fixed.label-small` | fontFamily: `Seed Sans`<br>fontSize: `14px`<br>fontWeight: `500`<br>letterSpacing: `-0.14px`<br>lineHeight: `140%` |
| `fixed.label-x-large` | fontFamily: `Seed Sans`<br>fontSize: `20px`<br>fontWeight: `500`<br>letterSpacing: `-0.2px`<br>lineHeight: `140%` |
| `fixed.label-x-small` | fontFamily: `Seed Sans`<br>fontSize: `12px`<br>fontWeight: `500`<br>letterSpacing: `-0.06px`<br>lineHeight: `140%` |
| `fixed.mono-large` | fontFamily: `Seed Sans Mono`<br>fontSize: `16px`<br>fontWeight: `400`<br>letterSpacing: `0px`<br>lineHeight: `110%` |
| `fixed.mono-small` | fontFamily: `Seed Sans Mono`<br>fontSize: `12px`<br>fontWeight: `400`<br>letterSpacing: `0px`<br>lineHeight: `110%` |
| `fixed.title-large` | fontFamily: `Seed Sans`<br>fontSize: `32px`<br>fontWeight: `350`<br>letterSpacing: `-0.64px`<br>lineHeight: `110%` |
| `fixed.title-small` | fontFamily: `Seed Sans`<br>fontSize: `24px`<br>fontWeight: `350`<br>letterSpacing: `-0.36px`<br>lineHeight: `120.00000762939453%` |

### Frosted Glass Light

| Token | Value |
|---|---|
| `frosted-glass-light` | `blur(38px)` |

### Frosted Glass Strong

| Token | Value |
|---|---|
| `frosted-glass-strong` | `blur(75px)` |

### Mobile Display

| Token | Value |
|---|---|
| `mobile-display.large` | fontFamily: `Seed Sans`<br>fontSize: `48px`<br>fontWeight: `350`<br>letterSpacing: `-0.96px`<br>lineHeight: `110%` |
| `mobile-display.small` | fontFamily: `Seed Sans`<br>fontSize: `40px`<br>fontWeight: `350`<br>letterSpacing: `-0.8px`<br>lineHeight: `110%` |

### Screen Grids

| Token | Value |
|---|---|
| `screen-grids.fluid-grid` | `[{"alignment":"min","count":-1,"gutterSize":"8px","pattern":"rows","sectionSize":"8px"},{"alignment":"stretch","count":4,"gutterSize":"16px","pattern":"columns","sectionSize":"5px"}]` |
| `screen-grids.static-grid` | `[{"alignment":"min","count":-1,"gutterSize":"8px","pattern":"rows","sectionSize":"8px"},{"alignment":"center","count":12,"gutterSize":"16px","pattern":"columns","sectionSize":"96px"}]` |

### Subtle Shadow

| Token | Value |
|---|---|
| `subtle-shadow` | offsetX: `0px`<br>offsetY: `4px`<br>blur: `30px`<br>spread: `0px`<br>color: `rgba(0, 0, 0, 0.07999999821186066)` |

### Actions

| Token | Value |
|---|---|
| `actions.bright` | `#ffffff` |
| `actions.inverse` | `#fcfcf7` |
| `actions.primary` | `#1c3a13` |

### Active

| Token | Value |
|---|---|
| `active` | `0.7` |

### Color

| Token | Value |
|---|---|
| `color.dark-opacity.10` | `#0000001a` |
| `color.dark-opacity.12` | `#0000001f` |
| `color.dark-opacity.16` | `#00000029` |
| `color.dark-opacity.20` | `#00000033` |
| `color.dark-opacity.30` | `#0000004d` |
| `color.dark-opacity.40` | `#00000066` |
| `color.dark-opacity.50` | `#00000080` |
| `color.dark-opacity.60` | `#00000099` |
| `color.dark-opacity.70` | `#000000b2` |
| `color.dark-opacity.80` | `#000000cc` |
| `color.dark-opacity.90` | `#000000e5` |
| `color.dark-opacity.100` | `#000000` |
| `color.dark-opacity.00` | `#00000000` |
| `color.dark-opacity.08` | `#00000014` |
| `color.guidance.bright-green` | `#d3fa99` |
| `color.guidance.error` | `#eb5757` |
| `color.guidance.lemongrass` | `#e9f0ca` |
| `color.guidance.warning` | `#ebb057` |
| `color.light-opacity.10` | `#ffffff1a` |
| `color.light-opacity.12` | `#ffffff1f` |
| `color.light-opacity.16` | `#ffffff29` |
| `color.light-opacity.20` | `#ffffff33` |
| `color.light-opacity.30` | `#ffffff4d` |
| `color.light-opacity.40` | `#ffffff66` |
| `color.light-opacity.50` | `#ffffff80` |
| `color.light-opacity.60` | `#ffffff99` |
| `color.light-opacity.70` | `#ffffffb2` |
| `color.light-opacity.80` | `#ffffffcc` |
| `color.light-opacity.90` | `#ffffffe5` |
| `color.light-opacity.100` | `#ffffff` |
| `color.light-opacity.00` | `#ffffff00` |
| `color.light-opacity.08` | `#ffffff14` |
| `color.neutral.cool-neutral-20` | `#f9f9f9` |
| `color.neutral.cool-neutral-40` | `#efefef` |
| `color.neutral.cool-neutral-60` | `#e6e6e6` |
| `color.neutral.faded-green-20` | `#d2d8d0` |
| `color.neutral.faded-green-40` | `#a4b0a1` |
| `color.neutral.faded-green-60` | `#778971` |
| `color.neutral.foam-white` | `#eff1e4` |
| `color.neutral.frosted-glass-08` | `#575e5514` |
| `color.neutral.frosted-glass-35` | `#575e5559` |
| `color.neutral.yellowish-white` | `#f6f7ef` |
| `color.primary.seed-green` | `#1c3a13` |
| `color.primary.seed-green-05` | `#1c3a130d` |
| `color.primary.seed-green-10` | `#1c3a131a` |
| `color.primary.seed-green-15` | `#1c3a1326` |
| `color.primary.seed-green-20` | `#1c3a1333` |
| `color.primary.seed-green-50` | `#1c3a1380` |
| `color.primary.seed-green-70` | `#1c3a13b2` |
| `color.primary.snow-white` | `#fcfcf7` |
| `color.primary.snow-white-10` | `#fcfcf71a` |
| `color.primary.snow-white-20` | `#fcfcf733` |
| `color.primary.snow-white-50` | `#fcfcf780` |
| `color.primary.snow-white-70` | `#fcfcf7b2` |
| `color.primary.soft-green` | `#3d5b34` |
| `color.primary.white` | `#ffffff` |

### Column

| Token | Value |
|---|---|
| `column.compact` | `12px` |
| `column.default` | `4px` |
| `column.medium` | `8px` |

### Disabled

| Token | Value |
|---|---|
| `disabled` | `0.4` |

### Extended Palette

| Token | Value |
|---|---|
| `extended-palette.arterial-red` | `#731418` |
| `extended-palette.arterial-red-light` | `#eedac2` |
| `extended-palette.asparagus-green` | `#d0d9b9` |
| `extended-palette.duck-green` | `#466b22` |
| `extended-palette.emerald-green` | `#97b578` |
| `extended-palette.grass-green` | `#86996d` |
| `extended-palette.indigo-blue` | `#4d628d` |
| `extended-palette.indigo-blue-light` | `#cdd6d1` |
| `extended-palette.oil-green` | `#ad9f61` |
| `extended-palette.olive-green` | `#61735e` |
| `extended-palette.pistachio-green` | `#829249` |
| `extended-palette.reddish-orange` | `#be6140` |
| `extended-palette.reddish-orange-light` | `#f7ddaa` |
| `extended-palette.scarlet-red` | `#ef4800` |
| `extended-palette.siskin-green` | `#d7e090` |
| `extended-palette.umber-brown` | `#533b3b` |
| `extended-palette.umber-brown-light` | `#bb797a` |
| `extended-palette.verdigris-green` | `#71aa89` |

### Fill

| Token | Value |
|---|---|
| `fill.brand` | `#1c3a13` |
| `fill.brand-subtle` | `#3d5b34` |
| `fill.bright` | `#ffffff` |
| `fill.neutral-dark` | `#e6e6e6` |
| `fill.neutral-light` | `#f9f9f9` |
| `fill.neutral-medium` | `#efefef` |
| `fill.primary` | `#fcfcf7` |
| `fill.secondary` | `#f6f7ef` |
| `fill.tertiary` | `#eff1e4` |

### Focused

| Token | Value |
|---|---|
| `focused` | `0.8` |

### Font

| Token | Value |
|---|---|
| `font.family.brand` | `Seed Sans` |
| `font.family.brand-mono` | `Seed Sans Mono` |
| `font.size.250` | `10px` |
| `font.size.300` | `12px` |
| `font.size.350` | `14px` |
| `font.size.400` | `16px` |
| `font.size.450` | `18px` |
| `font.size.500` | `20px` |
| `font.size.600` | `24px` |
| `font.size.800` | `32px` |
| `font.size.1000` | `40px` |
| `font.size.1200` | `48px` |
| `font.size.1600` | `64px` |
| `font.weight.300` | `light` |
| `font.weight.400` | `regular` |
| `font.weight.500` | `medium` |

### Guidance

| Token | Value |
|---|---|
| `guidance.primary` | `#d3fa99` |
| `guidance.secondary` | `#e9f0ca` |

### Gutter

| Token | Value |
|---|---|
| `gutter.large` | `24px` |
| `gutter.medium` | `16px` |
| `gutter.none` | `0px` |
| `gutter.small` | `8px` |

### Hover

| Token | Value |
|---|---|
| `hover` | `0.8` |

### Margin

| Token | Value |
|---|---|
| `margin.giant` | `80px` |
| `margin.large` | `24px` |
| `margin.medium` | `16px` |
| `margin.none` | `0px` |
| `margin.small` | `8px` |

### Opacity

| Token | Value |
|---|---|
| `opacity.10` | `0.1` |
| `opacity.20` | `0.2` |
| `opacity.30` | `0.3` |
| `opacity.40` | `0.4` |
| `opacity.50` | `0.5` |
| `opacity.60` | `0.6` |
| `opacity.70` | `0.7` |
| `opacity.80` | `0.8` |
| `opacity.90` | `0.9` |
| `opacity.100` | `1` |
| `opacity.00` | `0` |

### Outline

| Token | Value |
|---|---|
| `outline.error` | `#eb5757` |
| `outline.light` | `#fcfcf7` |
| `outline.light-20` | `#fcfcf733` |
| `outline.neutral` | `#d2d8d0` |
| `outline.primary` | `#1c3a13` |
| `outline.primary-10` | `#1c3a131a` |

### Page Grid

| Token | Value |
|---|---|
| `page-grid.column` | `8px` |
| `page-grid.gutter` | `16px` |
| `page-grid.margin` | `16px` |

### Products

| Token | Value |
|---|---|
| `products.AM-02.dark` | `#797648` |
| `products.AM-02.highlight` | `#fff593` |
| `products.AM-02.light` | `#faf7d3` |
| `products.AM-02.medium` | `#9f995b` |
| `products.AM-02.primary` | `#eae081` |
| `products.AM-02.secondary` | `#f2ecae` |
| `products.DM-02.dark` | `#6e7951` |
| `products.DM-02.highlight` | `#dcf194` |
| `products.DM-02.light` | `#ecf2d7` |
| `products.DM-02.medium` | `#757c5d` |
| `products.DM-02.primary` | `#b7c194` |
| `products.DM-02.secondary` | `#dee3ca` |
| `products.PM-02.dark` | `#4e6b5c` |
| `products.PM-02.highlight` | `#c9f3db` |
| `products.PM-02.light` | `#ebf5ef` |
| `products.PM-02.medium` | `#698e79` |
| `products.PM-02.primary` | `#b0d1be` |
| `products.PM-02.secondary` | `#d2e6da` |

### Radius

| Token | Value |
|---|---|
| `radius.full` | `1000px` |
| `radius.lg` | `24px` |
| `radius.md` | `16px` |
| `radius.sm` | `8px` |
| `radius.xl` | `32px` |
| `radius.xs` | `4px` |

### Scrim

| Token | Value |
|---|---|
| `scrim.dark-20` | `#00000033` |
| `scrim.dark-50` | `#00000080` |
| `scrim.glass-dark-08` | `#575e5514` |
| `scrim.glass-dark-35` | `#575e5559` |
| `scrim.glass-light-10` | `#fcfcf71a` |
| `scrim.glass-light-20` | `#fcfcf733` |

### Size

| Token | Value |
|---|---|
| `size.100` | `4px` |
| `size.200` | `8px` |
| `size.300` | `12px` |
| `size.400` | `16px` |
| `size.600` | `24px` |
| `size.800` | `32px` |
| `size.1000` | `40px` |
| `size.1200` | `48px` |
| `size.1400` | `56px` |
| `size.1600` | `64px` |
| `size.1800` | `72px` |
| `size.2000` | `80px` |
| `size.2500` | `100px` |
| `size.25000` | `1000px` |
| `size.00` | `0px` |
| `size.025` | `1px` |
| `size.050` | `2px` |

### Spacing

| Token | Value |
|---|---|
| `spacing.4` | `4px` |
| `spacing.8` | `8px` |
| `spacing.16` | `16px` |
| `spacing.24` | `24px` |
| `spacing.32` | `32px` |
| `spacing.40` | `40px` |
| `spacing.48` | `48px` |
| `spacing.56` | `56px` |
| `spacing.64` | `64px` |
| `spacing.72` | `72px` |
| `spacing.80` | `80px` |

### State Layer

| Token | Value |
|---|---|
| `state-layer.dark-disabled` | `#00000066` |
| `state-layer.dark-enabled` | `#00000000` |
| `state-layer.dark-focused` | `#0000001f` |
| `state-layer.dark-hovered` | `#00000014` |
| `state-layer.dark-pressed` | `#0000001f` |
| `state-layer.inner-focused-fixed` | `#fcfcf7` |
| `state-layer.light-disabled` | `#ffffff99` |
| `state-layer.light-enabled` | `#ffffff00` |
| `state-layer.light-focused` | `#ffffff1f` |
| `state-layer.light-hovered` | `#ffffff14` |
| `state-layer.light-pressed` | `#ffffff1f` |
| `state-layer.outer-focused-fixed` | `#1c3a13` |

### Stroke

| Token | Value |
|---|---|
| `stroke.default` | `1px` |

### Text

| Token | Value |
|---|---|
| `text.disabled` | `#1c3a1380` |
| `text.error` | `#eb5757` |
| `text.inverse-disabled` | `#fcfcf780` |
| `text.inverse-primary` | `#fcfcf7` |
| `text.inverse-secondary` | `#fcfcf7b2` |
| `text.primary` | `#1c3a13` |
| `text.secondary` | `#1c3a13b2` |
| `text.warning` | `#ebb057` |

<!-- SYNC:END -->
