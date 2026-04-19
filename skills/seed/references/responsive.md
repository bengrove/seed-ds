# Responsive

Breakpoint system, grid rules, and mobile behavior.

## Breakpoints

Mobile-first. Write styles for mobile, then scale up.

| Name | Min width | Typical device |
|---|---|---|
| `sm` | 640px | Mobile landscape, small tablet |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape, small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

Below 640px is mobile default. No breakpoint needed.

## Grid

### Marketing surfaces

- Mobile: single column, 16px horizontal padding
- `md+`: 12-column grid, 24px gutters, max content width 1280px
- `xl+`: centered with equal margins

### Product surfaces

- Mobile: single column, 16px horizontal padding
- `md+`: content + sidebar or 2-column grid, 16px gutters
- Max product content width: 1200px

### Member experience

- Mobile: single column
- `md+`: sidebar navigation + content, 280px sidebar
- Always functional at 320px width (iPhone SE baseline)

## Container queries

Use container queries for components that appear at multiple sizes (cards in grids, sidebar vs full-width). Define the container on the parent:

```css
.card-container {
  container-type: inline-size;
}

.card {
  padding: var(--space-3);
}

@container (min-width: 480px) {
  .card {
    padding: var(--space-5);
  }
}
```

## Mobile-specific rules

- Touch targets minimum 44x44px.
- Tap spacing minimum 8px between targets.
- Bottom-sheet modals on mobile for anything that would be a centered dialog on desktop.
- Sticky CTAs on mobile for landers after hero scroll.
- Tables reflow to card lists below `md` unless the data genuinely needs tabular display.
- Input font size minimum 16px on mobile to prevent iOS zoom.

## Device frames

For design explorations showing responsive behavior, use three reference widths:
- Mobile: 375px (iPhone SE / 13 mini reference)
- Tablet: 768px (iPad portrait)
- Desktop: 1440px (typical laptop viewport)

## Images

- Serve responsive images with `srcset` and `sizes`.
- Bynder delivers optimized variants. See `assets.md` for URL patterns.
- Aspect ratios preserved via `aspect-ratio` CSS, not fixed heights.
- Lazy-load everything below the fold.

## Typography scaling

Headlines scale down at smaller breakpoints. Body stays consistent.

| Token | Mobile | `md+` |
|---|---|---|
| `font.size.display.xl` | 40px | 64px |
| `font.size.display.lg` | 32px | 48px |
| `font.size.h1` | 28px | 36px |
| `font.size.h2` | 22px | 28px |
| `font.size.h3` | 18px | 22px |

Body sizes do not change between mobile and desktop.

## Navigation patterns

### Marketing

- Mobile: hamburger menu, full-screen overlay on open
- `md+`: horizontal nav with dropdowns for sub-items

### Product

- Mobile: bottom tab bar for primary navigation
- `md+`: top nav or sidebar depending on surface

### Member

- Mobile: top app bar with back + title, bottom tab for primary sections
- `md+`: persistent sidebar navigation

## Performance budgets

Responsive design is a performance decision. Targets:

- LCP under 2.5s on 4G mobile
- CLS under 0.1
- Hero image under 200KB on mobile, 500KB on desktop
- Total page weight under 1.5MB for landers

## Responsive gaps

- _none yet_
