# Microcopy

Source: Seed UX and Microcopy Best Practices + Seed Copy Style Guide 2026.

String-level patterns for CTAs, form labels, errors, empty states, loading states, and toasts. When a verbatim string exists below, use it exactly.

---

## CTA principles

1. **Action verbs, 1-4 words.** Sentence Case. Aim for brevity and specificity.
2. **Confirm what happens.** "Start your subscription," not "Get started."
3. **Never use:** `Click here`, `Submit`, `OK` alone, or vague intents.
4. **Differentiate when multiple CTAs exist on one surface.** If the hero CTA says "Start DS-01®," the second module CTA should shift angle, e.g., "Save 30% on DS-01®."

### CTA words that stay lowercase (unless first or last word)
`a, an, the, and, but, for, or, nor, at, by, for, in, of, off, on, out, to, up, to`

### Plus signs in CTAs
Never. Always use "and" in a CTA, regardless of character count.

---

## CTAs by funnel stage

Tune the CTA tone to where the user is.

### Homepage and top-of-funnel
Softer, less transactional. Encourage learning and trust-building.

| Context | CTA |
|---|---|
| Explore category | `Explore Co-Biotics` |
| Introduce new SKU | `Try DM-02™` |
| Learn | `Learn More` |
| Read | `Read Cultured` |

### PDP and mid-funnel
Direct, conversion-forward. Use first person when personalization fits (quiz results, bundles, promos).

| Context | CTA |
|---|---|
| Subscribe primary | `Start DS-01®` |
| Subscribe (first person) | `Start my DS-01® Journey` |
| Add bundle | `Add Bundle` |
| Enroll in program | `Enroll Now` |
| Shop SKU | `Shop Now` |

### Cart and checkout
Explicit, clear, action-completing.

| Context | CTA |
|---|---|
| Checkout | `Checkout` |
| Submit | `Submit` |
| Complete purchase | `Complete Purchase` |

### Industry benchmarks for reference
- Nike's "Start Your Journey" CTA converts 23% better than "Buy Now" for subscription products with new visitors.
- Sakara's first-person CTAs (`Start My Cleanse`) increased checkout completion by 14%.
- Feals' sticky mobile CTA increased conversions by 19%.

### Never
- `Explore more probiotics for you and your microbiome` (too long, dilutes intent).
- Generic buttons like `Submit`, `Go`, `Click Here`, `More Info`.

---

## Secondary CTAs

Use secondary CTAs to route users into flyovers, drawers, or nested sections. They should signal more detail without competing with the primary action.

Patterns:
- `See the strains`
- `How it works`
- `Read the study`
- `Full ingredients list`

---

## Form labels

- **Sentence case**, no colons.
- **Plain language:** `Email` not `Email address` unless ambiguous.
- **Required fields:** mark with an asterisk. Explain the asterisk once per form.
- **Required marker legend:** `Required`.

---

## Error states

Two jobs: tell the user **what happened** and **what to do next**. Both. No blame. Under 12 words when possible.

### Voice rules
- Never start with `Error:` or `You entered...` or `You forgot...`
- Never blame the user.
- Be specific about the remedy.

### Verbatim error strings (use exactly)

| Context | String |
|---|---|
| Generic error fallback | `Something went wrong. Please try again or contact support.` |
| Network error | `We can't reach our servers. Check your connection and try again.` |
| Invalid email | `We need a valid email to send your order updates.` |
| Payment method declined | `This card was declined. Try another or update your details.` |
| Required field empty | `This field is required.` |
| Address can't be verified | `We can't verify this address. Double-check it or contact support.` |

### Pattern for new error strings
`[Plain-language description of the problem]. [Specific remedy as an action the user can take].`

---

## Empty states

- Explain **why** it's empty.
- Offer a **next step**.
- Use Seed voice, not default system copy.

### Verbatim empty-state strings

| Context | String |
|---|---|
| No orders yet | `No orders yet. Your first delivery arrives 2 days after you subscribe.` |
| No order history for filter | `No orders in this range. Try a different date filter.` |
| No saved addresses | `No saved addresses yet. Add one at checkout.` |

---

## Success states

- Confirm what happened.
- Tell the user what comes next if relevant.

### Verbatim success strings

| Context | String |
|---|---|
| Subscription paused | `Subscription paused. Resumes on [date].` |
| Subscription canceled | `Subscription canceled. You'll keep access through [date].` |
| Order shipped | `Your order shipped. Track it anytime from your account.` |
| Delivery arriving today | `Arriving today by [time window].` |
| Saved preference | `Saved.` |

---

## Loading states

Tie copy to duration.

| Duration | Rule |
|---|---|
| Under 1 second | No loading copy. |
| 1-3 seconds | Spinner only, no copy. |
| 3+ seconds | Describe what's happening: `Starting subscription`, `Preparing your plan`, `Loading your order history`. |

No ellipses for dramatic effect. A period or nothing.

---

## Subscription controls

Member-experience microcopy that appears across pause, skip, resume, cancel, and adjust flows.

### Buttons (verbatim)

| Context | String |
|---|---|
| Pause | `Pause subscription` |
| Resume | `Resume subscription` |
| Skip delivery | `Skip this month` |
| Cancel (destructive) | `Cancel subscription` |
| Change frequency | `Change frequency` |
| Change pause date | `Change pause date` |
| Reactivate after cancel | `Restart subscription` |

### Confirmation headers (verbatim)

| Context | String |
|---|---|
| Paused | `Subscription paused` |
| Resumed | `Subscription resumed` |
| Canceled | `Subscription canceled` |
| Skipped | `Delivery skipped` |

### Cancel-flow principles
- **Never hide the cancel button.**
- **Never add friction that does not also add value.** Offering education, a pause, or a frequency change is valuable friction. A "Are you sure?" modal alone is not.
- **Confirmation copy is neutral, not pleading.**

**Good:** `Your subscription is canceled. You'll keep access through [date].`
**Not this:** `We're sad to see you go. Are you sure you want to leave?`

### Pause principles
- Frame pause as a **first-class option**, not a retention tactic.
- Default pause durations: 2 weeks, 1 month, 2 months.
- Confirm resume date explicitly.

### Win-back
- Honest. If the user canceled for a reason, address it.
- One email per cancellation event. No campaigns.

---

## Toasts

Short system confirmations. Polite, concise, no exclamation.

### Patterns

| Context | String |
|---|---|
| Saved | `Saved.` |
| Copied to clipboard | `Link copied.` |
| Added to cart | `Added to cart.` |
| Removed from cart | `Removed from cart.` |
| Applied promo | `Promo applied.` |
| Promo invalid | `This code isn't valid. Check it or try another.` |

---

## Promo microcopy

From `mechanics.md`, amplified here with string patterns.

### Banner format
`[Offer] • [Deadline or condition]`
- `30% Off • Ends Today`
- `Free Shipping • Orders $40+`
- `25% Off Your First Order†`

### Subject line formats
- `30% off → ends today.` (arrow replaces emoji)
- `Your DS-01® subscription, now 25% off.`

### Never
- `Act fast!`
- `Don't miss out!`
- Stacked exclamations.

---

## Tooltips and helper text

- One sentence. 10-15 words.
- Explain the **why**, not the **what** (the label already handles the what).

### Patterns
- `We use this to send your tracking and order updates.`
- `Taxes are calculated at checkout based on your shipping address.`
- `Your card is encrypted and never stored on our servers.`

---

## Microcopy library (master list)

Copy strings to reuse verbatim. Do not paraphrase these.

| Context | Copy |
|---|---|
| Generic error fallback | `Something went wrong. Please try again or contact support.` |
| Network error | `We can't reach our servers. Check your connection and try again.` |
| Invalid email | `We need a valid email to send your order updates.` |
| Payment declined | `This card was declined. Try another or update your details.` |
| Subscription paused confirm | `Subscription paused. Resumes on [date].` |
| Subscription canceled confirm | `Subscription canceled. You'll keep access through [date].` |
| Order shipped | `Your order shipped. Track it anytime from your account.` |
| Delivery arriving today | `Arriving today by [time window].` |
| No orders yet | `No orders yet. Your first delivery arrives 2 days after you subscribe.` |
| Required field marker legend | `Required` |
| Cancel button (destructive) | `Cancel subscription` |
| Pause button | `Pause subscription` |
| Resume button | `Resume subscription` |
| Skip delivery | `Skip this month` |
| Link copied toast | `Link copied.` |
| Added to cart toast | `Added to cart.` |
| Promo applied toast | `Promo applied.` |
| Invalid promo | `This code isn't valid. Check it or try another.` |
