# Patterns

Composition patterns for Seed surfaces. Each pattern is a proven structure, not a rigid template. Use as a starting point; adapt with judgment.

---

## Top of funnel landers

### Goal

Move a cold or warm visitor toward a single, clear next step. Usually subscription start or email capture.

### Default structure

1. **Hero** — one promise, one primary CTA, supporting visual
2. **Proof strip** — press logos, user count, or single strongest credential
3. **Problem / solution** — name what's broken, show Seed's answer
4. **Science module** — specific mechanism with citation
5. **Social proof** — testimonials or reviews, real users
6. **FAQ** — 3-5 questions, the ones that actually block conversion
7. **Closing CTA** — same action as hero, restated

### Rules

- One CTA action per page. Restate it, never vary it.
- Hero loads above the fold on mobile at 375px width.
- First meaningful paint under 1.5s. Test before shipping.
- No carousel for hero content. Carousels hide everything after slide 1.
- Sticky CTA on mobile appears after the user scrolls past the hero.
- Social proof uses real names and photos or none at all. Never stock photos with quotes.

### Variations

- **Ingredient-led**: lead with the strain or active, science module moves up to #2.
- **Practitioner-led**: lead with the expert or creator, testimonial moves up to #2.
- **Outcome-led**: lead with a specific user outcome, testimonial inline with hero.

---

## Product detail page (DS-01 baseline)

### Goal

Convert intent into purchase. The visitor is warm; they need confidence, not persuasion.

### Default structure

1. **Hero** — product, price, primary CTA, subscription vs one-time toggle
2. **Quick facts** — 3-5 scannable product attributes
3. **Who it's for** — specific, not "everyone"
4. **What's inside** — ingredient or strain list with tooltips
5. **Science module** — mechanism, clinical data, citations
6. **How it works** — usage, timing, expectations
7. **Reviews** — sortable, filterable, honest
8. **FAQ** — product-specific, not generic
9. **Closing CTA**

### Rules

- Subscribe vs one-time toggle defaults to subscribe. Savings shown inline.
- Ingredient names link to a detail view or expand inline.
- Every efficacy claim has a visible citation.
- Reviews show distribution (1-5 stars breakdown), not just average.
- No "best seller" badges without a defensible definition.

### Progressive disclosure

- Quick facts summarize; details expand on click.
- Science module shows the headline; full mechanism expands.
- Reviews load 5; more on scroll.

---

## Member experience

### Core principle

Education and storytelling reduce churn. Clarity and control build trust. Every member surface chooses one or both.

### Onboarding

1. **Welcome** — confirm the subscription, set the expectation
2. **Timeline** — what arrives when, delivery + first product dose
3. **How to take it** — simple daily ritual
4. **What to expect** — realistic timeline for results, plus the first week sensation window
5. **Support** — how to reach Seed, how to pause if needed

### Education surfaces

- Card-based, one topic per card.
- Every card has a citation or acknowledges "based on [strain]'s published data."
- Cards are sorted by user relevance, not chronologically.

### Subscription management

Subscription management surfaces follow the "clarity and control" principle absolutely.

#### Pause flow

1. User taps "Pause subscription"
2. Choose duration (2 weeks, 1 month, 2 months, custom)
3. Confirm with explicit resume date
4. Done. No extra steps.

#### Skip flow

1. User taps "Skip next delivery"
2. Confirm which delivery is skipped and when the next one arrives
3. Done.

#### Cancel flow 2.0

Gated on cancellation rate neutrality. See internal PRD for full logic.

1. User taps "Cancel subscription"
2. Single reason prompt (optional to answer)
3. Offer alternatives relevant to the reason: pause, change frequency, change product
4. If declined, confirm cancellation with clear access end date
5. Done.

Rules:
- Never require the reason prompt.
- Never add more than one friction step.
- Alternatives must match the stated reason (don't offer pause to someone who said "it didn't work").
- Confirmation copy is neutral, not pleading.

### Account surfaces

- One setting per row. No dense grids of toggles.
- Destructive actions (delete, cancel) sit at the bottom, not mixed with settings.
- Password and email changes always require confirmation.

---

## Marketing emails

### Structure

1. **Preheader** — second subject line, 40-60 characters
2. **Single message** — one thing per email
3. **Primary CTA** — one action, repeated max twice
4. **Signature** — if needed, from a real human

### Rules

- Subject lines under 50 characters.
- First sentence earns the rest of the email.
- No dark patterns in unsubscribe.
- Plain text fallback always works.

---

## Cross-surface patterns

### Progressive disclosure

Default for dense information. Three levels:

1. **Summary** visible by default
2. **Details** expand on click or scroll
3. **Full depth** linked to a dedicated page

Apply to: science modules, ingredient lists, clinical data, FAQs, reviews.

### Status communication

Any async action (ordering, saving, canceling) shows state at three moments:
1. Action triggered (loading)
2. Action succeeded (confirmation)
3. Next step (what happens now)

Never assume the user saw a toast. Confirm in context.

### Empty and zero states

Every list, table, or collection has a designed empty state. Empty states are brand moments. See `components.md` for anatomy.

---

## Pattern gaps

Add gaps here as they arise.

- _none yet_
