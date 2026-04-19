# Voice

Mirrors the Seed brand TOV and copy style guide. Read before generating any user-facing copy. When in doubt, default to clarity over cleverness.

## Voice pillars

1. **Scientific but not clinical.** Reference mechanisms, studies, and strains with precision, but translate for a human. The reader is smart and curious, not a researcher.
2. **Confident but not boastful.** Claims are specific and backed. Avoid superlatives without evidence.
3. **Warm but not cute.** Friendly and direct. No emoji in product copy. No wink-wink tone.
4. **Plain but not boring.** Short sentences, concrete verbs, active voice. Rhythm matters.

## Always

- Lead with what the user gets, not what Seed does.
- Use "you" and "your." Address the reader directly.
- Write at an 8th-grade reading level for marketing, 10th for education content.
- Cite sources for health claims inline when possible.
- Give users control language: "you can pause," "skip anytime," "change your mind."

## Never

- Medical claims without citation ("cures," "treats," "prevents" for non-drug products).
- Fear-based framing ("without Seed, your gut is...").
- Jargon without definition on first use.
- Ellipses for dramatic effect.
- ALL CAPS for emphasis. Use italics or a distinct visual treatment.
- Exclamation marks in product copy. Marketing surfaces allow one per surface max.
- Em dashes (brand preference).
- Emoji in product UI. Marketing surfaces allow deliberate, sparing use.

## Copy patterns

### Headlines

- Marketing hero: 3-8 words, one clear promise, no passive voice.
- Section: 2-5 words, noun-first when possible.
- Product detail: name the benefit, not the feature.

Good: "Daily Synbiotic DS-01"
Not: "Introducing our revolutionary new synbiotic"

### Body

- Lead sentence carries the point. Everything after supports.
- Paragraphs are 1-3 sentences.
- Lists over prose when 3 or more parallel items.

### Microcopy

#### Buttons

- Action verbs, 1-3 words.
- Never "Click here," "Submit," or "OK" alone.
- Confirm what will happen: "Start subscription," "Pause 1 month," "Cancel order."

Good: "Start your subscription"
Not: "Get started"

#### Form labels

- Sentence case, no colons.
- Plain language: "Email" not "Email address" unless ambiguous.
- Required fields are marked with an asterisk and explained once per form.

#### Errors

- Tell the user what happened and what to do next. Always both.
- No blame. Never "you entered" or "you forgot."
- Short. Under 12 words when possible.

Good: "We need a valid email to send your order updates."
Not: "Error: Invalid email format entered by user."

#### Empty states

- Explain why it's empty.
- Offer a next step.
- Use Seed voice, not default system copy.

Good: "No orders yet. Your first delivery arrives 2 days after you subscribe."
Not: "No data available."

#### Success states

- Confirm what happened.
- Tell the user what comes next if relevant.

Good: "Subscription paused. We'll skip your next delivery and resume automatically."
Not: "Success!"

#### Loading

- Under 1 second: no loading copy.
- 1-3 seconds: spinner, no copy.
- 3+ seconds: describe what's happening.

---

## Regulatory and compliance language

Consumer health products carry specific constraints. Read carefully.

### Structure/function vs disease claims

Seed products make structure/function claims only. Never disease claims.

Allowed: "Supports digestive health."
Not allowed: "Cures IBS." "Treats SIBO."

### Required disclaimers

For any structure/function claim, the FDA disclaimer must be present on the surface. Check with legal before shipping new claim language.

"These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."

### Strain-specific claims

Only make a claim if the strain in the product has published human clinical data supporting it. Link to the citation.

---

## Subscription and cancellation language

Member experience surfaces require extra care. See `patterns.md` for flow rules.

### Pause

- Frame pause as a first-class option, not a retention tactic.
- Default pause durations: 2 weeks, 1 month, 2 months.
- Confirm resume date explicitly.

### Cancel

- Never hide the cancel button.
- Never add friction that does not also add value (education, alternative plans).
- Confirmation copy should be neutral, not pleading.

Good: "Your subscription is canceled. You'll keep access through [date]."
Not: "We're sad to see you go. Are you sure you want to leave?"

### Win-back

- Honest. If the user canceled for a reason, address it.
- One email per cancellation event. No campaigns.

---

## Educational content patterns

### Science explanations

- Lead with the outcome, then the mechanism.
- Define terms on first use.
- Link to the primary source, not a secondary article.

Pattern:
> [Outcome the user cares about]. [How it happens, in one sentence]. [Specific evidence, citation]. [What this means for you].

### Myth-busting

- Name the myth accurately before correcting it.
- Use neutral language, not mockery.
- Close with what to do, not just what not to believe.

---

## Microcopy library

Copy strings to reuse verbatim. Do not paraphrase these.

| Context | Copy |
|---|---|
| Generic error fallback | "Something went wrong. Please try again or contact support." |
| Network error | "We can't reach our servers. Check your connection and try again." |
| Subscription paused confirm | "Subscription paused. Resumes on [date]." |
| Subscription canceled confirm | "Subscription canceled. You'll keep access through [date]." |
| Order shipped | "Your order shipped. Track it anytime from your account." |
| Delivery arriving today | "Arriving today by [time window]." |
| Required field marker legend | "Required" |
| Cancel button (destructive flow) | "Cancel subscription" |
| Pause button | "Pause subscription" |
| Resume button | "Resume subscription" |

---

## Voice rules for agents

When generating copy:
1. Check this file first. If a pattern exists, use it.
2. If a microcopy string exists for the context, use it verbatim.
3. If generating new copy, read the pillars and check against "Never."
4. Flag any health or efficacy claim for legal review in your response.
5. Default to the shortest copy that carries meaning.
