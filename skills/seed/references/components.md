# Components

> ⚠️ **DRAFT — do not trust token references or status flags in this file.**
>
> This inventory was scaffolded speculatively in the initial commit and has **not** been verified against the actual component library ([seed-health/my-seed-live → components](https://github.com/seed-health/my-seed-live/tree/main/components)) or the hosted Storybook ([Chromatic](https://www.chromatic.com/library?appId=63b5c3a4b545db5441de378b)).
>
> Several token references below (e.g. `color.status.error`, `color.science.*`, `shadow.sm`, `motion.easing.entrance`, `bp.md`) **do not exist** in `@seed-health/tokens`. Use `tokens.md` for real names.
>
> Seed-specific patterns surfaced during page capture (ViaCap explainer, benefit timeline, comparison table, welcome kit card, subscription tier selector, attribute badge grid) are **not listed** here yet.
>
> Dev refactor is underway. This file will be regenerated from `my-seed-live/components` + Storybook once the refactor settles. Until then, when an agent needs a real component, read the code directly rather than citing this file.

Current component inventory. Status flags indicate where each component lives and its maturity. Figma is ahead of this file in most cases; update when stabilizing.

## Status legend

- `stable` — documented, in Figma, in code, safe to use
- `beta` — in Figma, in code, minor gaps
- `figma-only` — designed but not built in code
- `planned` — name reserved, not yet designed
- `deprecated` — do not use, migration path documented

---

## Primitives

### Button

Status: `stable`

Variants: `primary`, `secondary`, `tertiary`, `ghost`, `destructive`

Sizes: `sm`, `md`, `lg`

Rules:
- Primary buttons are the single most important action on a surface. Never more than one per viewport without deliberate reason.
- Destructive buttons always pair with a confirmation step for irreversible actions.
- Icons sit left of label unless the button is icon-only.
- Minimum touch target 44x44px on mobile.

Anatomy:
```
[icon?] [label] [icon?]
```

States: default, hover, active, focus, disabled, loading

---

### Input

Status: `stable`

Variants: `text`, `email`, `password`, `number`, `search`

Rules:
- Always paired with a visible label. Placeholder is not a label.
- Error messages sit below the input, never inside.
- Use `color.status.error` for error borders, never background fill.

---

### Select

Status: `beta`

Rules:
- Under 5 options: use radio group instead.
- Over 20 options: add search inside the dropdown.
- Never use for yes/no; use switch or radio.

---

### Checkbox, Radio, Switch

Status: `stable`

Rules:
- Checkbox: multi-select in a list.
- Radio: single select from 2-5 options.
- Switch: binary on/off for a setting that applies immediately.

---

### Badge, Pill, Tag

Status: `stable`

Rules:
- Badge: status or count (success, warning, error, info).
- Pill: filter selection, rounded container for a short string.
- Tag: categorization, user-controlled.

---

## Surfaces

### Card

Status: `stable`

Variants: `default`, `elevated`, `interactive`

Anatomy: `header`, `body`, `footer`

Rules:
- Interactive cards show a hover state and have a single primary action.
- Elevated cards use `shadow.sm`, not borders.

---

### Panel

Status: `beta`

Used for sidebars, filter panels, details drawers.

---

### Modal, Dialog

Status: `stable`

Rules:
- Modal: blocks interaction with the page behind. Use sparingly.
- Dialog: confirms an action or captures input. Always dismissible with ESC.
- Never nest modals.
- Use `motion.easing.entrance` for entry.

---

### Toast

Status: `stable`

Variants: `success`, `warning`, `error`, `info`

Rules:
- Auto-dismiss after 5 seconds for success and info.
- Never auto-dismiss errors.
- Max one toast visible at a time. Queue the rest.

---

## Navigation

### Tabs

Status: `stable`

Rules:
- 2-5 tabs only. More requires a different pattern.
- Tab labels are single words where possible.

---

### Breadcrumbs

Status: `stable`

Rules:
- Hide on mobile below `bp.md`.
- Current page is not a link.

---

### Pagination

Status: `beta`

Rules:
- Use for sets over 20 items.
- Under 20 items: show all with no pagination.

---

## Data

### Table

Status: `beta`

Rules:
- Sticky header on scroll for tables over 10 rows.
- Right-align numeric columns.
- First column is the row identifier.

---

### List

Status: `stable`

Variants: `default`, `divided`, `interactive`

---

### Empty state

Status: `stable`

Anatomy: `icon`, `headline`, `body`, `action`

Rules:
- Always include a next step or explain why the list is empty.
- Use Seed voice; empty states are prime brand moments.

---

## Feedback

### Progress

Status: `stable`

Variants: `bar`, `circle`, `steps`

---

### Skeleton

Status: `beta`

Rules:
- Match the shape and approximate size of the real content.
- Use for initial loads over 300ms.

---

### Alert

Status: `stable`

Variants: `info`, `success`, `warning`, `error`

Rules:
- Inline on the surface, not overlaid. For overlay feedback use toast.

---

## Marketing surfaces

### Hero

Status: `figma-only`

---

### Feature block

Status: `figma-only`

---

### Testimonial

Status: `planned`

---

### FAQ

Status: `figma-only`

---

### CTA block

Status: `stable`

---

## Product surfaces

### PDP hero

Status: `figma-only`

Specific to DS-01. Will generalize for DM-02, PM-02, AM-02 in v2.

---

### Science module

Status: `figma-only`

Rules:
- Use `color.science.*` tokens for any data viz.
- Citations always visible, never hidden behind a click.

---

### Review carousel

Status: `planned`

---

## Member experience

### Subscription controls

Status: `planned`

Pause, skip, cancel, change frequency. See `patterns.md` for flow rules.

---

### Education card

Status: `planned`

---

## Component gaps

Add gaps here as you encounter them. Format: component name, surface needing it, date, context.

- _none yet_
