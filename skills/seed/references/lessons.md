# Lessons

Gotchas, decisions, and hard-earned knowledge from real builds. Read before shipping. Add to this file whenever you hit something the skill didn't warn you about.

## How to add a lesson

Format:

```
### [Short title]

**Context:** What was the task.
**What went wrong:** The specific issue.
**Fix:** What to do instead.
**Date:** YYYY-MM-DD
```

Keep each lesson scannable. One paragraph max.

---

## Seed-specific lessons

### Subscription language must be consistent across surfaces

**Context:** Building cancel flow 2.0 and a marketing lander separately.
**What went wrong:** Lander said "cancel anytime," product said "cancel your subscription," email said "end your membership." Three terms for the same action confused users.
**Fix:** Always use "cancel subscription" in action language. "Pause" and "skip" are distinct first-class actions. See `voice.md` microcopy library.
**Date:** TBD (add when real)

---

### Health claims require inline citations, not footer links

**Context:** PDP science module linking to a references page.
**What went wrong:** Claims read as marketing without the citation in direct view. Regulatory flagged.
**Fix:** Every structure/function claim has a visible citation number inline. References expand or link within the module, not a separate page.
**Date:** TBD

---

### Progressive disclosure fails on mobile when the tap target is not obvious

**Context:** FAQ accordion on PDP.
**What went wrong:** Users didn't realize rows were expandable. Engagement dropped compared to the old design.
**Fix:** Every expandable row has a visible chevron or `+/-` affordance. Whole row is tappable, chevron is visual only.
**Date:** TBD

---

## Claude Code + skill gotchas

### Skill updates require a reload

**Context:** Edited `voice.md` during a Claude Code session.
**What went wrong:** Changes didn't reflect until the skill was reloaded.
**Fix:** After editing any skill file, run `/plugin reload` or restart the session. Alternatively, point at the skill path directly for the task.
**Date:** TBD

---

## Claude Design gotchas

### Bynder assets don't surface natively

**Context:** Building a lander in Claude Design.
**What went wrong:** No Bynder integration, images had to be downloaded and re-uploaded.
**Fix:** Until a connector exists, batch-download needed assets from Bynder at the start of a design session and upload them as a group.
**Date:** TBD

---

### Figma export path is missing

**Context:** Wanted to bring a Claude Design prototype back into Figma for refinement.
**What went wrong:** No direct Figma export. Canva, PDF, PPTX, HTML only.
**Fix:** Export to HTML, use Figma's Code to Canvas feature to pull the HTML back into Figma as editable designs.
**Date:** TBD

---

## Tokens gotchas

### Token sync drifts from the repo

**Context:** Updated a color in the tokens repo.
**What went wrong:** `tokens.md` in this skill drifted from the actual repo.
**Fix:** Run `node scripts/sync-tokens.mjs` to regenerate `tokens.md` from the latest commit of seed-health/tokens. The sync region between `<!-- SYNC:BEGIN -->` and `<!-- SYNC:END -->` is overwritten each run.
**Date:** TBD

---

### Per-product subcategory colors aren't in seed-health/tokens (6-step ramp not exposed)

**Context:** Capturing `products/<sku>/index.md` files and extracting subcategory colors from live seed.com PDPs and design system source.
**What went wrong:** The design system defines a 6-step ramp per product (`primary`, `secondary`, `light`, `medium`, `dark`, `highlight`). The live my-seed-live CSS currently only exposes the `medium` shade as `--color--<sku>` — e.g. AM-02's `--color--am: #9f995b` is the *medium* step, not the primary. The actual AM-02 primary is the brighter citrine `#EAE081`. Picking the live var as the "primary color" leads agents to use the muted middle of the ramp instead of the lead brand accent. None of the six steps for any product are in `seed-health/tokens`.
**Fix (interim):** Each product file in `products/<sku>/index.md` documents the full 6-step ramp where known, plus the live var (`--color--<sku>`) and its role in the ramp (`live_var_role: medium`). Verified pattern across DM-02, AM-02, and PM-02: `--color--<sku>` maps to `ramp.medium` and `--color--<sku>-redemption` maps to `ramp.secondary` — every time. DS-01, PDS-08, VS-01, and Daily Essentials Duo use brand-primary `color.primary.seed-green` directly with no per-product ramp; DM-02, AM-02, PM-02 each have their own 6-step ramp.
**Fix (durable):** Publish the 6-step subcategory ramps in `seed-health/tokens` (e.g. `subcategory.am.primary`, `subcategory.am.medium`) so they sync into `tokens.md` and agents can reference them by name. Until then, `products/<sku>/index.md` is the single source of truth for non-brand-primary product colors.
**Date:** 2026-04-29

---

### PDS-08 PDP uses Cloudinary for product imagery, not Shopify CDN

**Context:** Capturing `products/pds-08/index.md` and extracting hero imagery URLs.
**What went wrong:** PDS-08's PDP predates the Shopify-CDN convention used by the rest of the line — its hero, step icons, and sustainability illustrations all live on `res.cloudinary.com/dljz0lko8/...` (timestamps from 2022). Other capsule PDPs (DS-01, DM-02, AM-02, PM-02) use `cdn.shopify.com/s/files/1/0929/7828/2785/...`.
**Fix:** Don't treat PDS-08's Cloudinary hosting as a new pattern. New PDP imagery goes on Shopify CDN. PDS-08 is a known legacy exception — flagged in its product file's `hero_imagery.note` and `Template deviations` section.
**Date:** 2026-04-29

---

## Decision log

Record of architectural decisions that affect the skill.

### 2026-04-18: Adopt Atlas-style skill structure

**Decision:** Build the Seed DS as a Claude Code skill using a reference repo structure inspired by pacifio/ui (Atlas).
**Rationale:** Agent-first, stack-agnostic, same source feeds Claude Design, Claude Code, Cursor, and human docs.
**Tradeoff:** Requires maintenance of markdown alongside Figma and tokens repo.

---

## Open questions

Things to resolve as the skill matures.

- How do we version tokens across the skill, tokens repo, and Figma? Single source or synced?
- What's the review process for adding new components here vs Figma-first?
- Should voice updates flow through legal review before landing in `voice.md`?
- How do we surface regulatory language constraints to agents automatically?

---

## Template for new lessons

Copy this when adding:

```
### [Title]

**Context:** 
**What went wrong:** 
**Fix:** 
**Date:** 
```
