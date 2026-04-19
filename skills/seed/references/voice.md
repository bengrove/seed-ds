# Voice

Voice for Seed is split across seven focused files in `copy/`. This file is the index. Read it first, then jump to the file you need.

**Sources of truth:**
- Brand TOV 2025 (Figma deck: `F0GLIVKZ0uByZmaivVhcoJ`)
- Seed Copy Style Guide 2026
- Seed UX and Microcopy Best Practices

If any rule in `copy/` conflicts with the source docs above, the source docs win. Flag the conflict so the skill can be updated.

---

## When to read which file

| File | Use when |
|---|---|
| `copy/tov.md` | Any time you are generating user-facing copy. Covers the three pillars (Grounding, Illuminating, Intriguing), the formulas, and how voice shifts by funnel stage. |
| `copy/mechanics.md` | Grammar, punctuation, citations, capitalization, emojis, numbers. This is the style-guide layer. |
| `copy/vocabulary.md` | Word choice, defined terms, product naming, trademark handling, Elevated vs. Simple scientific language, do/don't phrasing. |
| `copy/surfaces.md` | Per-surface rules (homepage, PLP, PDP, cart, checkout, promos, email, ads, social, TV). Length, structure, performance benchmarks. |
| `copy/microcopy.md` | CTAs, form labels, errors, empty states, loading, subscription controls, toasts, tooltips. Verbatim strings live here. |
| `copy/compliance.md` | Structure/function vs. disease claims, FDA disclaimer, strain-specific claim rules, promo T&Cs. |
| `copy/examples.md` | Approved copy examples by funnel stage and pillar. Use as direct lift or adapt. |

---

## Quickstart: minimum reads per task

### Writing a headline or subhead
`copy/tov.md` → `copy/surfaces.md` → `copy/examples.md`

### Writing a CTA, error, or confirmation
`copy/microcopy.md` (if a verbatim string exists, use it) → `copy/mechanics.md` for casing.

### Writing a health or efficacy claim
`copy/compliance.md` → `copy/vocabulary.md` → `copy/tov.md` for tone.

### Picking between two phrasings
`copy/vocabulary.md` (Elevated vs. Simple, do/don't tables).

### Generating a full page or flow
Read all seven files in order, then `references/examples.md` for composition snippets.

---

## Non-negotiable voice rules

These are the rules that break things when they're skipped. Pulled from the deeper files for quick reference.

1. **Three pillars, always.** Every piece of copy carries Grounding, Illuminating, and Intriguing. Missing one creates predictable failure modes (see `copy/tov.md`).
2. **Em dashes are Seed.** No spaces on either side. Used instead of semicolons. (`copy/mechanics.md`)
3. **One exclamation per surface max.** Default to periods. Exclamations are rare, intentional, and earned. (`copy/mechanics.md`)
4. **Oxford commas, always.** (`copy/mechanics.md`)
5. **Short sentences. Active voice. You address the reader.** (`copy/tov.md`)
6. **Lead with the outcome, then the mechanism.** (`copy/tov.md`)
7. **Structure/function claims only. Never disease claims.** FDA disclaimer on any surface with a claim. (`copy/compliance.md`)
8. **Control as a feature.** Pause, skip, cancel are first-class, not hidden. (`copy/microcopy.md`)
9. **If a microcopy string exists, use it verbatim.** (`copy/microcopy.md`)
10. **Citations after punctuation. APA style.** (`copy/mechanics.md`)

---

## Voice pillar checklist (before you ship)

Every headline, subhead, module, or email should pass these three checks:
- **Grounding:** Is this specific and defensible? Would a scientist nod?
- **Illuminating:** Would a smart person new to Seed leave understanding more?
- **Intriguing:** Is there a reason to read the next line?

If any answer is "no," rewrite. If you cannot pass all three, flag the gap in your response.

---

## When you are generating copy, in this order

1. Check `copy/microcopy.md` for a verbatim string that fits.
2. Check `copy/examples.md` for an approved pattern.
3. Check `copy/surfaces.md` for per-surface length and structure.
4. Check `copy/vocabulary.md` for the right register (Elevated vs. Simple).
5. Apply `copy/mechanics.md` for punctuation and formatting.
6. Apply `copy/compliance.md` if the copy makes a claim.
7. Run the three-pillar check from `copy/tov.md`.
8. In your response, flag any claim for legal review and any gap you filled with a best-guess.
