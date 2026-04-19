# Motion

Motion principles, tokens, and usage rules.

## Principles

1. **Motion has meaning.** Every animation communicates cause and effect.
2. **Calm by default.** No bouncy, playful springs for utility surfaces.
3. **Fast over slow.** Most transitions under 200ms.
4. **Reduce when requested.** Respect `prefers-reduced-motion: reduce`.

## Duration tokens

| Token | Value | Usage |
|---|---|---|
| `motion.duration.instant` | 0ms | Accessibility fallback |
| `motion.duration.fast` | 120ms | Hover, small state changes, toggles |
| `motion.duration.base` | 200ms | Default for most transitions |
| `motion.duration.slow` | 320ms | Overlays, page transitions |
| `motion.duration.slower` | 480ms | Large layout shifts, decorative reveals |

## Easing tokens

| Token | Curve | Usage |
|---|---|---|
| `motion.easing.standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default |
| `motion.easing.entrance` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering |
| `motion.easing.exit` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving |
| `motion.easing.spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Rare, for delight moments only |

## What to animate

### Default-animate

- `background-color` on hover and active states
- `opacity` for fade in/out
- `transform` for scale, translate (GPU-accelerated)
- `border-color` for focus states

### Never animate

- `color` on text (causes reflow in some cases, reads as flicker)
- `width` or `height` (use `transform: scale` instead, or `max-height` with overflow)
- `padding` or `margin` in repeated interactions
- Multiple properties simultaneously without a purpose

## Component-specific rules

### Buttons

- Hover: `background-color` only, 120ms standard easing
- Active: `transform: scale(0.98)`, instant back on release
- Focus: ring appears instantly, no transition
- Loading: replace label with spinner, no morph

### Modals and dialogs

- Enter: 320ms entrance easing, fade + translate up 8px
- Exit: 200ms exit easing, fade + translate down 8px
- Backdrop: fade only, no blur animation

### Toasts

- Enter: slide up from bottom, 320ms entrance easing
- Exit: slide down, 200ms exit easing
- Auto-dismiss timer shown as optional progress bar on the toast edge

### Dropdowns and popovers

- Enter: 200ms entrance, fade + scale from 0.96 to 1
- Exit: 120ms exit, fade only
- Origin matches the trigger position

### Page transitions

- Marketing: no page transition. Hard swap is faster.
- Product: no page transition.
- Member experience: cross-fade 200ms for tab switches within a surface.

### Skeletons

- Shimmer effect: 1.5s loop, linear, opacity-based
- Never animate skeleton position

### Accordions

- Expand: 200ms standard easing on `max-height` and `opacity`
- Collapse: 120ms exit easing

## Stagger

For lists of items entering together, stagger by 40-60ms per item. Cap at 10 items; longer lists use a single group transition.

## Reduced motion

When `prefers-reduced-motion: reduce`:

- All duration tokens become `instant`
- Transforms are removed; only opacity remains
- Scroll-triggered animations are disabled
- Autoplay video is paused

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Performance rules

- Only animate `transform` and `opacity` for high-frequency animations
- Use `will-change` sparingly and remove after the animation
- Never animate more than 10 elements simultaneously
- Test on a mid-range Android at 60fps

## Motion gaps

- _none yet_
