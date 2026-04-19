# Examples

Copy-ready composition snippets for common Seed surfaces. Use as starting points, then adapt.

---

## 1. Top-of-funnel lander hero (React + Tailwind + tokens)

```jsx
<section className="bg-surface-base py-16 md:py-24 px-4">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
    <div>
      <p className="text-sm font-medium text-brand-primary mb-3">
        Clinical-grade probiotic
      </p>
      <h1 className="text-4xl md:text-6xl font-display font-semibold text-text-primary mb-5">
        Daily care for your gut
      </h1>
      <p className="text-lg text-text-secondary mb-8 max-w-md">
        DS-01 is a broad-spectrum synbiotic built from 24 clinically studied strains.
      </p>
      <button className="inline-flex items-center h-12 px-6 bg-brand-primary text-text-inverse rounded-md font-medium">
        Start your subscription
      </button>
      <p className="text-sm text-text-tertiary mt-4">
        $49.99/month. Pause or cancel anytime.
      </p>
    </div>
    <div>
      <img
        src="[bynder-cdn-url]/webimage"
        alt="Daily Synbiotic DS-01 travel vial next to the monthly glass jar"
        className="w-full rounded-lg"
      />
    </div>
  </div>
</section>
```

---

## 2. Science module with citation (React)

```jsx
<section className="bg-surface-raised py-12 px-4">
  <div className="max-w-4xl mx-auto">
    <p className="text-sm font-medium text-brand-primary mb-2">
      The science
    </p>
    <h2 className="text-3xl font-display font-semibold text-text-primary mb-4">
      24 strains, clinically studied
    </h2>
    <p className="text-text-secondary mb-6 text-lg">
      Each strain in DS-01 has published human clinical data supporting its role
      in gastrointestinal or systemic health.
    </p>
    <details className="border-t border-text-tertiary/20 pt-4">
      <summary className="cursor-pointer font-medium text-text-primary">
        How we chose these strains
      </summary>
      <div className="mt-4 text-text-secondary space-y-3">
        <p>
          Strains were selected based on three criteria: species-level
          identification, human clinical evidence, and survivability through
          the GI tract.
        </p>
        <p>
          See the full strain breakdown and citations in our{" "}
          <a href="/science" className="text-text-link underline">
            published research
          </a>.
        </p>
      </div>
    </details>
    <p className="text-xs text-text-tertiary mt-6">
      These statements have not been evaluated by the FDA. This product is not
      intended to diagnose, treat, cure, or prevent any disease.
    </p>
  </div>
</section>
```

---

## 3. Subscription pause confirmation (React)

```jsx
<div className="bg-surface-raised rounded-lg p-6 max-w-md">
  <div className="flex items-start gap-3 mb-4">
    <div className="w-10 h-10 rounded-full bg-status-success/10 flex items-center justify-center shrink-0">
      <CheckIcon className="w-5 h-5 text-status-success" />
    </div>
    <div>
      <h3 className="font-semibold text-text-primary mb-1">
        Subscription paused
      </h3>
      <p className="text-text-secondary text-sm">
        We'll skip your next delivery and resume automatically on May 18, 2026.
      </p>
    </div>
  </div>
  <div className="flex gap-3 mt-6">
    <button className="text-text-link text-sm font-medium">
      Change pause date
    </button>
    <button className="text-text-secondary text-sm font-medium ml-auto">
      Resume now
    </button>
  </div>
</div>
```

---

## 4. Cancel flow step (React)

```jsx
<div className="max-w-lg mx-auto py-8 px-4">
  <h2 className="text-2xl font-display font-semibold text-text-primary mb-2">
    Before you cancel
  </h2>
  <p className="text-text-secondary mb-8">
    Your subscription is active through May 18, 2026. You can make a change
    that fits better, or cancel anytime.
  </p>

  <div className="space-y-3 mb-8">
    <button className="w-full text-left p-4 rounded-md border border-text-tertiary/20 hover:border-brand-primary transition-colors">
      <p className="font-medium text-text-primary mb-1">Pause for a while</p>
      <p className="text-sm text-text-secondary">
        Take 1-2 months off. Resume automatically.
      </p>
    </button>
    <button className="w-full text-left p-4 rounded-md border border-text-tertiary/20 hover:border-brand-primary transition-colors">
      <p className="font-medium text-text-primary mb-1">Change frequency</p>
      <p className="text-sm text-text-secondary">
        Move to every 2 months instead of monthly.
      </p>
    </button>
  </div>

  <button className="text-text-secondary text-sm underline">
    Continue with cancellation
  </button>
</div>
```

---

## 5. Empty state (React)

```jsx
<div className="text-center py-16 px-4">
  <div className="w-16 h-16 rounded-full bg-surface-raised mx-auto mb-6 flex items-center justify-center">
    <PackageIcon className="w-8 h-8 text-text-tertiary" />
  </div>
  <h3 className="text-lg font-semibold text-text-primary mb-2">
    No orders yet
  </h3>
  <p className="text-text-secondary mb-6 max-w-sm mx-auto">
    Your first delivery arrives 2 days after you subscribe.
  </p>
  <button className="inline-flex items-center h-11 px-5 bg-brand-primary text-text-inverse rounded-md font-medium">
    Start your subscription
  </button>
</div>
```

---

## 6. FAQ accordion (plain HTML with tokens)

```html
<section style="max-width: 800px; margin: 0 auto; padding: 48px 16px;">
  <h2 style="font-family: var(--font-display); font-size: 32px; color: var(--color-text-primary); margin-bottom: 32px;">
    Questions, answered
  </h2>
  <div style="border-top: 1px solid var(--color-text-tertiary);">
    <details style="border-bottom: 1px solid var(--color-text-tertiary); padding: 20px 0;">
      <summary style="cursor: pointer; font-weight: 600; color: var(--color-text-primary);">
        When should I take DS-01?
      </summary>
      <p style="color: var(--color-text-secondary); margin-top: 12px; padding-right: 32px;">
        Take 2 capsules daily on an empty stomach, first thing in the morning.
        No refrigeration needed.
      </p>
    </details>
    <details style="border-bottom: 1px solid var(--color-text-tertiary); padding: 20px 0;">
      <summary style="cursor: pointer; font-weight: 600; color: var(--color-text-primary);">
        How long until I notice a difference?
      </summary>
      <p style="color: var(--color-text-secondary); margin-top: 12px; padding-right: 32px;">
        Most members report changes within 4-6 weeks. Consistency matters more than dose.
      </p>
    </details>
  </div>
</section>
```

---

## 7. Inline error state (React)

```jsx
<div className="mb-4">
  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
    Email
  </label>
  <input
    id="email"
    type="email"
    aria-invalid="true"
    aria-describedby="email-error"
    className="w-full h-11 px-3 rounded-md border border-status-error bg-surface-sunken text-text-primary"
  />
  <p id="email-error" className="mt-2 text-sm text-status-error">
    We need a valid email to send your order updates.
  </p>
</div>
```

---

## 8. Loading state (React)

```jsx
<button
  disabled
  className="inline-flex items-center gap-2 h-11 px-5 bg-brand-primary text-text-inverse rounded-md font-medium opacity-80"
>
  <SpinnerIcon className="w-4 h-4 animate-spin" />
  Starting subscription
</button>
```

---

## 9. Microcopy in context: product page price block

```jsx
<div className="mb-6">
  <div className="flex items-baseline gap-3 mb-1">
    <span className="text-2xl font-semibold text-text-primary">$49.99</span>
    <span className="text-text-secondary">/month</span>
  </div>
  <p className="text-sm text-text-secondary">
    Free shipping. Pause or cancel anytime.
  </p>
</div>
```

---

## 10. Toast (React)

```jsx
<div
  role="status"
  aria-live="polite"
  className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-surface-overlay text-text-primary px-4 py-3 rounded-md shadow-md flex items-center gap-3 max-w-sm"
>
  <CheckIcon className="w-5 h-5 text-status-success shrink-0" />
  <p className="text-sm">Your delivery is scheduled for May 20.</p>
</div>
```

---

## How to use these

- Tokens in these examples are placeholders. Your final code emits real token values from `references/tokens.md` or your Tailwind theme.
- Copy in these examples is approved Seed voice. Reuse verbatim where appropriate; adapt with `voice.md` rules.
- All examples pass accessibility basics: focus states, aria attributes, semantic HTML. Maintain these when adapting.

## Add your own

When you build something that works well, add it here. Flag it with context:

```
## N. [Title] ([Stack])

[Context: where this pattern shows up, when to use it.]

[Code]
```
