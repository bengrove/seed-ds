---
template: <template-name>        # e.g. pdp, homepage, plp, cart
captured: YYYY-MM-DD
source: https://seed.com/...
surfaces:
  desktop:
    viewport: 1440
    screenshot: ./desktop.png
    figma: ./desktop.h2d
  mobile:
    viewport: 390
    screenshot: ./mobile.png
    figma: ./mobile.h2d
notes: |
  Capture caveats (html.to.design cleanup needed? auth-gated sections skipped? etc.)
---

# <Template name>

## Purpose
One line: what job this template does in the customer journey.

## Structure
Ordered list of the modules/sections present, top to bottom.
1. ...
2. ...

## Key patterns
- Layout: grid/container behavior, sticky elements
- Responsive: what reflows, what collapses, breakpoint notes
- Interactive: drawers, modals, hover states worth flagging

## Component usage
Which design system components appear and how. Link to `components.md` entries.

## Content
Paste the extension's markdown output here (or link to a separate `content.md` if long).
