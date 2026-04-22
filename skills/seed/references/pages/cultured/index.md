---
template: cultured
article: Microbiome 101
original_publish_date: 2018-04-06
last_updated: 2025-05-08
captured: 2026-04-21
source: https://seed.com/cultured/microbiome-101/
surfaces:
  desktop:
    viewport: 1440
    screenshot: ./desktop.png
  mobile:
    viewport: 390
    screenshot: ./mobile.png
notes: |
  Canonical cultured article capture — Microbiome 101, the foundational
  science explainer routed from the homepage ("You are more than human"
  module) and the "Science / Microbiome 101" nav. Longest and most
  reference-heavy cultured article; exercises the full editorial module
  library including TOC, citation system, and academic-grade references.
---

# Cultured article (editorial longform)

## Purpose
Editorial, science-forward explainer content. Teaches the reader a concept deeply enough to build trust in Seed's science positioning, with citations that hold up under scrutiny. Primary job is trust-building and SEO; secondary is funneling curious prospects to PDP or the Biotics Quiz.

## Structure
1. **Article header** — title, author (Seed Health as default author for science pieces), original publish date
2. **"Last updated" line** — explicit maintenance signal; science content gets re-reviewed
3. **Hook paragraph** — opens with a memorable stat or reframe ("38 trillion bacteria... 50% of you by cell count")
4. **Contents / TOC** — anchor-linked navigation to section headings (flat list, not nested)
5. **Body sections** — each introduced by a section heading (often a question: *"But aren't bacteria bad?"*, *"What do bacteria do in my body?"*, *"Is my microbiome healthy?"*)
6. **Body prose** — mix of declarative and conversational; uses:
   - Bold inline for defined terms: `micro**biota**`, `micro**biome**`
   - Italic for technical Latin (species names) and emphasized words (*seeding*)
   - Superscript citations (¹, ², ³…) inline with claims
7. **Filed Under** — taxonomy / category chips (empty in this capture but the surface is there)
8. **Next Article card** — single recommendation, shows:
   - Section label ("Next Article")
   - Article title (H3)
   - Byline (author + date)
   - Read time estimate ("5 minutes")
9. **Citations** — numbered list, full academic format (APA-ish): author(s), year, title, journal (italic), DOI/URL

## Key patterns
- **Hook stat:** editorial openers lead with a memorable number or reframe. Not "Here's what the microbiome does" but "38 trillion bacteria — 50% of you by cell count." Reframe-led, matches the Intriguing pillar from `copy/tov.md`.
- **Conversational section headings as questions:** *"But aren't bacteria bad?"*, *"Is my microbiome healthy?"* — breaks the academic voice, keeps reader agency. Paired with matter-of-fact answers. Worth documenting as a cultured-specific pattern.
- **Progressive disclosure via TOC:** the TOC is the whole article at a glance; each section stands alone enough to be dropped in.
- **Citation density:** claims are cited inline with superscript numbers; citations section at the bottom uses academic format. Agents generating cultured copy must include citations for claim-bearing statements — see `copy/compliance.md`.
- **Latin italicized:** species names (`*Lactobacilli*`, `*E. coli*`) always in italics, per `copy/mechanics.md`.
- **Inline terminology bolding** — `micro**biota**` / `micro**biome**` defines a term mid-sentence by bolding the distinguishing suffix, so the reader parses the difference visually. Lightweight definition pattern.
- **Next Article recommendation** shows one — not three or four. Single clear next step. Intentional simplicity.
- **Last updated line** is a trust signal. Science content gets re-dated when reviewed; marketing content doesn't.
- **Responsive:** body column narrows on mobile; TOC likely collapses to an accordion or drawer.

## Component usage
- Article header (title, byline, date, last-updated)
- Hook paragraph (styled larger than body)
- Table of contents (anchor navigation, flat list)
- Body prose with inline emphasis (bold defined terms, italic species/emphasis)
- Superscript citation inline
- Section heading (question-form variant common in cultured)
- Filed Under / category chips
- Next Article recommendation card
- Citations list (numbered, academic format)

Cross-ref: `components.md` (cultured article components), `patterns.md` (editorial/longform), `copy/mechanics.md` (citations, casing, italics), `copy/compliance.md` (claim-bearing statements require citations), `copy/tov.md` (intriguing-led hooks)

## Content
> Raw extraction from .MD this page — preserved verbatim for reference.

---

**Title:** Microbiome 101

**Author:** Seed Health

**Original publish date:** 2018-04-06

**Last updated:** 2025-05-08

**Source:** https://seed.com/cultured/microbiome-101/

---

### Hook

You are home to a community of trillions of microorganisms, including 38,000,000,000,000 (that's 38 trillion) bacteria, living in and on your body. The bacteria alone represent 50% of you by cell count.¹

### Contents

- Meet Your Microbiome
- Where does my microbiome come from?
- What do bacteria do in my body?
- What is the gut barrier?
- Is my microbiome healthy?
- Citations

### Body (abridged — full text in raw capture above)

Opens with the 38 trillion bacteria hook. Defines **microbiota** (the microorganisms) vs **microbiome** (the cells + their components + their environment). Answers "But aren't bacteria bad?" (most are commensal or mutualistic).

Covers:
- **Where your microbiome comes from:** seeding at birth (vaginal canal, skin contact, breastfeeding), stabilizing into steady-state microbiome within the first few years of life.
- **What bacteria do:** gut barrier integrity, acidic environment maintenance, neurotransmitter production for intestinal motility, short-chain fatty acid byproducts (butyrate), B vitamin + vitamin K synthesis, vaginal pH balance, gut-brain axis signaling.
- **The gut barrier:** single layer of epithelial cells + mucus; tight junctions between cells regulate permeability; 220 ft² surface area.
- **"Healthy microbiome" framing:** there is no ideal microbiome; diversity is the point. The better question is whether your bacteria are working optimally with your body.
- **Closing reframe:** we are superorganisms — half human, half bacterial. This is the new biology.

### Next Article

**5 Ways to Improve Digestion (That Have Nothing to Do With Food)**
by Emma Loewe · May 28, 2025 · 5 minutes

### Citations (25 total)

Academic APA-ish format. Examples:
- Sender, R., Fuchs, S., & Milo, R. (2016). Revised Estimates for the Number of Human and Bacteria Cells in the Body. *PLoS biology, 14*(8), e1002533. https://doi.org/10.1371/journal.pbio.1002533
- Dunn, A. B., Jordan, S., Baker, B. F., & Carlson, N. S. (2017). The Maternal Infant Microbiome. *MCN: The American Journal of Maternal/Child Nursing, 42*(6), 318–325. https://doi.org/10.1097/nmc.0000000000000373
- *(full list preserved in source URL)*

---

## Related
- Routed from: `homepage` ("You are more than human" module → "SCIENCE / Microbiome 101")
- Likely routes to: `pdp` (DS-01), `flows/biotics-quiz`, other cultured articles
- Shared with: `approach`, `seed-labs`, `reference` (other science-forward surfaces)
- Voice anchor: opens with Intriguing-led hook; body uses Grounding-forward prose with citations — see `copy/tov.md`
- Compliance: any new cultured article with health claims must follow `copy/compliance.md` citation and structure/function language rules
