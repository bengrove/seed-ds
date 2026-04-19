# Theming

How Seed tokens translate to different stacks. This file is for agents generating code.

## Light and dark

Seed is light-first. Dark mode is supported where it makes sense (account surfaces, reading-heavy education content). Marketing and PDP are light-only unless explicitly requested.

### Theme switching

```html
<html data-theme="light">
<!-- or -->
<html data-theme="dark">
```

All color tokens remap under `[data-theme="dark"]`. Component structure never changes between themes.

---

## Tailwind v4

Translate tokens into `@theme` block. Do not ship a separate `seed.css` to the bundle.

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-brand-primary: /* from tokens */;
  --color-surface-base: /* from tokens */;
  --color-surface-raised: /* from tokens */;
  --color-text-primary: /* from tokens */;
  --color-text-secondary: /* from tokens */;
  --color-status-success: /* from tokens */;
  --color-status-warning: /* from tokens */;
  --color-status-error: /* from tokens */;

  --radius-sm: /* from tokens */;
  --radius-md: /* from tokens */;
  --radius-lg: /* from tokens */;

  --font-display: /* from tokens */;
  --font-body: /* from tokens */;
  --font-mono: /* from tokens */;
}
```

Emit utility classes using these tokens:

```jsx
<button className="inline-flex items-center h-11 px-4
                   bg-brand-primary text-white rounded-md
                   font-medium hover:brightness-95 transition-colors">
  Start your subscription
</button>
```

---

## shadcn/ui

Override shadcn's CSS variables with Seed values. Do not overlay custom classes on top of shadcn components; keep shadcn's structure.

```css
/* app/globals.css */
:root {
  --background: /* Seed color.surface.base as HSL */;
  --foreground: /* Seed color.text.primary as HSL */;
  --card: /* Seed color.surface.raised as HSL */;
  --card-foreground: /* Seed color.text.primary as HSL */;
  --popover: /* Seed color.surface.overlay as HSL */;
  --popover-foreground: /* Seed color.text.primary as HSL */;
  --primary: /* Seed color.brand.primary as HSL */;
  --primary-foreground: /* Seed color.text.inverse as HSL */;
  --secondary: /* Seed color.brand.secondary as HSL */;
  --secondary-foreground: /* Seed color.text.primary as HSL */;
  --muted: /* Seed surface.sunken as HSL */;
  --muted-foreground: /* Seed text.secondary as HSL */;
  --accent: /* Seed color.brand.accent as HSL */;
  --accent-foreground: /* Seed color.text.primary as HSL */;
  --destructive: /* Seed color.status.error as HSL */;
  --destructive-foreground: /* Seed color.text.inverse as HSL */;
  --border: /* derived from text.tertiary at low opacity */;
  --input: /* derived from surface.sunken */;
  --ring: /* Seed color.status.info for focus */;
  --radius: /* Seed radius.md */;
}

[data-theme="dark"] {
  /* dark-mode remaps */
}
```

Then use shadcn normally:

```jsx
import { Button } from "@/components/ui/button"
<Button variant="default">Start your subscription</Button>
```

---

## Plain HTML / static

When generating plain HTML for a one-off lander or prototype, emit inline CSS vars in a root block:

```html
<style>
  :root {
    --color-brand-primary: /* from tokens */;
    --color-text-primary: /* from tokens */;
    /* ... */
  }
</style>

<button style="background: var(--color-brand-primary); color: var(--color-text-inverse); padding: 12px 16px; border-radius: var(--radius-md); font-family: var(--font-body);">
  Start your subscription
</button>
```

---

## React with CSS Modules

Port the component rules from the Figma library into modules. The token file is imported once at the app root.

```css
/* tokens.css */
:root {
  --color-brand-primary: /* from tokens */;
  /* ... */
}

/* Button.module.css */
.button {
  display: inline-flex;
  align-items: center;
  height: 44px;
  padding: 0 16px;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-weight: 500;
}
.primary {
  background: var(--color-brand-primary);
  color: var(--color-text-inverse);
}
```

---

## Component library in GitHub

The Seed React component library is the production source. When emitting code for production surfaces, import from the library rather than re-implementing. Example:

```jsx
import { Button, Card } from "@seed/ui";

<Card>
  <Button variant="primary">Start your subscription</Button>
</Card>
```

For prototypes and Claude Design exports, plain HTML or Tailwind-with-tokens is acceptable. Note in your output which context applies.

---

## Figma Code Connect

Figma Code Connect maps Figma components to React components in the library. When a Figma link is provided:

1. Use the Figma MCP to read the design
2. Match components to the production library via Code Connect
3. Emit code using the library imports

---

## Stack decision tree

| Context | Stack to emit |
|---|---|
| Production landing page | React + production component library |
| Claude Design prototype | Plain HTML or React with Tailwind tokens |
| Internal experiment | React + Tailwind with tokens |
| Email | HTML tables, inline styles, token values inlined |
| Quick wireframe | Plain HTML with tokens |
| Figma handoff | Match Figma Code Connect mappings |

---

## Theming gaps

- _none yet_
