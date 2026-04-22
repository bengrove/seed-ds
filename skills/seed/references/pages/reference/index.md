---
template: reference
product: Daily Synbiotic (DS-01®)
captured: 2026-04-21
source: https://seed.com/reference/syn-wk
surfaces:
  desktop:
    viewport: 1440
    screenshot: ./desktop.png
  mobile:
    viewport: 390
    screenshot: ./mobile.png
notes: |
  Canonical reference page capture — the DS-01 "prove it" surface.
  Deepest science and compliance documentation on seed.com: full
  formulation breakdown, clinical trials, strain-level benefit studies,
  quality control testing battery (microbiological, chemical, allergen,
  genome, water activity), and interaction FAQs.

  The markdown extraction duplicates several tables (Strain-Specific
  Benefits, each Testing subsection) because the page renders both a
  desktop view and a mobile/stacked view of the same data. Screenshots
  are the source of truth for which renders where.

  Footnote symbols (‡, ††, †††) appear in tables without inline
  definitions in this capture — they tie back to `copy/compliance.md`
  strain-claim rules and should be reconciled when that file is
  refreshed.
---

# Reference (DS-01 scientific reference page)

## Purpose
Deep-science surface for the skeptical prospect or returning member who wants the receipts. Shows the full formulation, dosing, clinical evidence, strain-level citations, QC testing methodology, and safety interactions. Primary job is trust and compliance defensibility — not conversion. No "Start Now" hero; this is the page that proves the PDP's claims.

## Structure
1. **Page header** — "Reference Library" (site-level section), then product-specific H2 for DS-01®
2. **Product overview paragraph** — one-paragraph summary of what DS-01 is and its delivery technology
3. **Formulation** — five sub-sections of probiotic/prebiotic blends:
   - Digestive Health Probiotic Blend (224mg / 38.7B AFU, 16 strains)
   - Micronutrient Synthesis Probiotic Blend (36mg / 7.32B AFU, 2 strains)
   - Dermatological Health Probiotic Blend (36mg / 3.4B AFU, 4 strains)
   - Cardiovascular Health Probiotic Blend (13mg / 4.21B AFU, 2 strains)
   - MAPP prebiotic (400mg Indian Pomegranate whole fruit)
   Each blend: header, dose line (mg / AFU count), italicized strain list
4. **Directions for Use** — acclimation protocol (1 capsule for 3 days → 2 capsules, empty stomach preferred), acclimation-period acknowledgement, troubleshooting suggestions, figure reference (*Fig. 1* — Acclimation protocol)
5. **Clinical Trials** — DS-01-specific (6-week, n=350, bloating/regularity RCT) with full results narrative + list of other full-formulation trials (Napier et al. Nutrients 2025, Antibiotics 2025/2026, DDW 2024) with academic-format citations
6. **Strain-Specific Benefit Studies** — 7-row benefits → studies table:
   Digestive Health, Gut Barrier Integrity, Gut Immune Axis, Cardiovascular Health, Dermatological Health, Micronutrient Synthesis, Gut Microbial Balance. Plus figure reference (*Fig. 4* — Strain microscopy)
7. **Testing (Quality Control Testing Battery)** — five stacked table groups:
   - Microbiological (yeasts/molds, Enterobacteria, coliforms, E. coli, Salmonella, Staph, Listeria) — each batch
   - Chemical Contaminants [Organic] (AMPA, Glyphosate, Pesticides/Biocides 427 chemicals) — quarterly
   - Allergens (23 allergens with daily-dose thresholds + ED01 explainer footnote) — quarterly
   - Whole Genome Sequencing — under development
   - Water Activity — each batch
   Plus a ViaCap® release narrative (10.57 log vs 10.60 log ≈ 100% release at 3hrs)
8. **Interactions** — lead paragraph + two FAQ questions ("Can I take too many probiotics?", "Can I take DS-01® with other probiotics?")

## Key patterns
- **Reference library is site-scoped** — URL pattern is `/reference/{slug}`. DS-01 is the first entry; other products could get their own reference pages on the same template.
- **Dose format:** `{mg} / {billion} AFU` pattern for every blend. Worth standardizing as a component (`dose-spec`).
- **Strain list typography:** italicized species + strain code, one per line. Strain codes follow a pattern: `{letters}-{alphanumeric}-{country}` (e.g., `SD-BB536-JP`, `HRVD113-US`, `SD-LR6-IT`). Country code at the end is a Seed convention.
- **Figure references inline:** *Fig. 1*, *Fig. 4* — italicized figure numbers with em-dash caption. Pattern worth codifying.
- **Table-heavy layout:** at least 6 distinct table treatments on this page. All appear to have a desktop variant (possibly with an extra leading empty column for visual structure) and a mobile-stacked variant — the extraction shows both.
- **Academic-grade citations inline:** clinical trial references use full journal citation format (author et al., *Journal*, year). Contrast with `cultured/` pages where citations go in a dedicated numbered list; here citations appear in the body next to claims.
- **Footnote symbols:** `*`, `‡`, `††`, `†††` appear without inline definitions in this capture. These are claim-strength markers (see `copy/compliance.md`). Whichever ref surface hosts the definitions should be linked from the reference page.
- **"Under development" as a testing status:** the Whole Genome Sequencing row lists testing frequency as "Under development" — legitimate status for a published testing battery, signals ongoing methodology work.
- **No conversion CTA:** this template has no "Shop Now" / "Start Now" in the flow. It's a trust surface, not a funnel surface. That's intentional.
- **Responsive:** tables need the most responsive work — they're likely the reason the markdown extraction picked up duplicates (desktop grid + mobile stacked = two renders of the same data). Confirm against screenshots.

## Component usage
- Reference page header (Reference Library / product name)
- Product overview paragraph (compliance-hedged summary)
- Dose spec block (mg/AFU count + blend name + strain list)
- Strain row (italicized species name + strain code)
- Clinical trial summary (header, n, duration, primary endpoints, citation)
- Studies table (benefit → citations list, 2-col)
- QC testing battery table (5 variants — microbiological, chemical, allergen, genome, water)
- Figure reference inline (italic *Fig. N* + caption)
- FAQ accordion / Q&A block (Interactions section)

Cross-ref: `components.md` (when regenerated — reference page has the most table patterns to document), `patterns.md` (reference template), `copy/compliance.md` (claim symbols, strain claim rules), `copy/mechanics.md` (citation format, italicization)

## Content
> Raw extraction from .MD this page — preserved verbatim for reference. Tables duplicated in the source because the page renders desktop and mobile variants of the same data; kept as-is to preserve fidelity.

---

**Title:** Reference Library • Seed

**Source:** https://seed.com/reference/syn-wk

---

## DS-01® Daily Synbiotic

DS-01® comprises 24 scientifically studied probiotic strains with a patented, non-fiber prebiotic. This breakthrough formulation is paired with innovations in probiotic stabilization and a precision-release system to deliver strains to the lower small intestine and colon, which support systemic benefits and whole body health.*

## Formulation

### Digestive Health Probiotic Blend*

**224mg / 38.7 Billion AFU**

- *Bifidobacterium breve* SD-BR3-IT
- *Bifidobacterium longum* SD-BB536-JP
- *Lacticaseibacillus rhamnosus* HRVD113-US
- *Lactiplantibacillus plantarum* SD-LP1-IT
- *Lacticaseibacillus rhamnosus* SD-LR6-IT
- *Bifidobacterium lactis* HRVD524-US
- *Bifidobacterium infantis* SD-M63-JP
- *Bifidobacterium lactis* SD-BS5-IT
- *Lacticaseibacillus casei* HRVD300-US
- *Bifidobacterium breve* HRVD521-US
- *Bifidobacterium lactis* SD-150-BE
- *Bifidobacterium longum* HRVD90b-US
- *Lacticaseibacillus rhamnosus* SD-GG-BE
- *Limosilactobacillus reuteri* RD830-FR
- *Lactobacillus crispatus* SD-LCR01-IT
- *Limosilactobacillus fermentum* SD-LF8-IT

### Micronutrient Synthesis Probiotic Blend*

**36mg / 7.32 Billion AFU**

- *Bifidobacterium adolescentis* SD-BA5-IT
- *Limosilactobacillus reuteri* SD-LRE2-IT

### Dermatological Health Probiotic Blend*

**36mg / 3.4 Billion AFU**

- *Ligilactobacillus salivarius* SD-LS1-IT
- *Bifidobacterium longum* SD-CECT7347-SP
- *Lacticaseibacillus casei* SD-CECT9104-SP
- *Bifidobacterium lactis* SD-CECT8145-SP

### Cardiovascular Health Probiotic Blend

**13mg / 4.21 Billion AFU**

- *Lactiplantibacillus plantarum* SD-LPLDL-UK
- *Bifidobacterium lactis* SD-MB2409-IT

### MAPP — Microbiota-Accessible Polyphenolic Precursors

**400mg**

- Indian Pomegranate [whole fruit] (*Punica granatum*) (>40% Polyphenolic + Phenolic Bioactives)

*Identical strain, formerly known as Bifidobacterium adolescentis SD-BA5-IT*

## Directions for Use

Take 1 capsule daily for the first three days.

On day four (or when you're ready), increase to the full dose of 2 capsules at once, daily. Ideally, take both capsules on an empty stomach or at least 10 minutes prior to a meal.

*Fig. 1* — Acclimation protocol

Just as with any new diet, product, or change, you may experience a temporary acclimation period — some gastrointestinal discomfort, abdominal tightness, mild nausea, or changes in your stool. This can be very normal. In fact, an immediate physiological reaction is a sign that our probiotics are viable and attuning to your system. Any discomfort should subside within the first few weeks of consistent use.

If the discomfort does not subside, you may try experimenting with your DS-01® use. Try taking the capsules with food or one capsule in the morning and one in the evening.

## Clinical Trials

### DS-01® on Bloating and Irregularity

Bloating, gas, and irregular bowel habits are among the most common gastrointestinal complaints in the general population — yet most probiotic clinical research focuses on individuals with diagnosed GI conditions. Generally healthy adults experiencing these symptoms represent a significant, underserved population in the clinical literature. To address this gap, we conducted a randomized, double-blind, placebo-controlled trial in 350 generally healthy adults experiencing bloating/indigestion. Over 6 weeks, participants were evaluated for GI complaints and burden, including using validated clinical endpoints.

Participants taking DS-01 demonstrated a statistically significant reduction in bloating and gas compared to placebo, as measured by the NIH-GI PROMIS 13a. DS-01 also led to meaningful reductions in abdominal discomfort relative to placebo, assessed via the NIH-GI PROMIS 5a. In terms of bowel habits, DS-01 supported improved regularity compared to placebo, with observed improvements in occasional constipation-related discomfort. Beyond symptom-level metrics, DS-01 improved GI-related quality of life compared to placebo as measured by the DQLQ — including greater food enjoyment, reduced food avoidance, and less disruption to physical activity due to digestive events, outcomes that reflect how digestive health is actually experienced in daily life.

By applying the same clinically rigorous tools used in GI condition research to a generally healthy population, at a scale not previously achieved in this category, this study established a higher evidentiary standard for what probiotic science can demonstrate. The findings show that the known mechanistic activity of DS-01 translates to real, measurable improvements in how people feel — across a population that has historically been excluded from this research.

**Allegretty JR, et al.** *Nutrients.* 2026 Jan 14;18(2):255

### Other Full-formulation Clinical Trials

- **Napier et al.,** *Nutrients* 2025
- **Napier et al.,** *Antibiotics* 2025
- **Napier et al.,** *Digestive Disease Week* 2024

Full citations:

- Napier BA, Allegretti JR, Feuerstadt P, Kelly CR, Van Hise NW, Jäger R, Kassam Z, Reid G. *Multi-Species Synbiotic Supplementation Enhances Gut Microbial Diversity, Increases Urolithin A and Butyrate Production, and Reduces Inflammation in Healthy Adults: A Randomized, Placebo-Controlled Trial.* Nutrients. 2025 Aug 23;17(17):2734
- Napier BA, Allegretti JR, Feuerstadt P, Kelly CR, Van Hise NW, Jäger R, Stuivenberg GA, Kassam Z, Reid G. *Multi-Species Synbiotic Supplementation After Antibiotics Promotes Recovery of Microbial Diversity and Function, and Increases Gut Barrier Integrity: A Randomized, Placebo-Controlled Trial.* Antibiotics. 2026; 15(2):138
- Napier BA, Van Den Elzen C, Al-Ghalith GA, Avena CV, Gevers D, Dhir R, Nee J, Lembo A, Simmons S. *A Multi-Species Synbiotic (DS-01) Alleviates Irritable Bowel Syndrome Symptoms While Boosting Synbiotic Consortium: A Randomized, Double-Blind, Placebo-Controlled Clinical Trial.* Digestive Disease Week. 2024

## Strain-Specific Benefit Studies

| Benefit | Studies |
| --- | --- |
| Digestive Health | Del Piano et al. *J Clin Gastroenterol.* 2010<br>Ogata et al. *Biosci Microflora.* 1997 |
| Gut Barrier Integrity | Iemoli et al. *J Clin Gastroenterol.* 2012 ‡<br>Magistrelli et al. *Front Immunol.* 2019 †† |
| Gut Immune Axis | Olivares et al. *J Agric Food Chem.* 2011<br>Iemoli et al. *J Clin Gastroenterol.* 2012 ‡<br>Drago et al. *Allergy Asthma Immunol Res.* 2015<br>Magistrelli et al. *Front Immunol.* |
| Cardiovascular Health | Costabile et al. *PLoS One.* 2017<br>Bordoni et al. *Appl Microbiol Biotechnol.* 2013<br>Keleszade et al. *J Func Foods.* 2022 |
| Dermatological Health | Iemoli et al. *J Clin Gastroenterol.* 2012 ‡<br>Climent et al. *Microorganisms.* 2021 †††<br>Navarro-López et al. *JAMA Dermatol.* 2018 ††† |
| Micronutrient Synthesis | Bron et al. *I J Mol Sciences.* 2021<br>Strozzi & Mogna. *J Clin Gastroenterol.* 2008<br>Pompei et al. *Appl Environ Microbiol.* 2007 |
| Gut Microbial Balance | Drago et al. *Allergy Asthma Immunol Res.* 2015<br>Magistrelli et al. *Front Immunol.* 2019 †† |

*Fig. 4* — Strain microscopy: 1 *Lactobacillus rhamnosus* SD-LR6-IT, 2 *Lactobacillus plantarum* SD-LPLDL-UK, 3 *Bifidobacterium longum* SD-CECT7347-SP

## Testing — Quality Control Testing Battery

### Microbiological Data

| Description | Unit of Measure (LOQ) | Testing Frequency |
| --- | --- | --- |
| Yeasts and molds | <100 CFU/g | Each batch |
| *Enterobacteria* | <10 MPN/g | Each batch |
| Total coliforms | <3 MPN/g | Each batch |
| *E. coli* | Absent / 10 g | Each batch |
| *Salmonella* | Absent / 25 g | Each batch |
| *Staphylococcus coagulase positive* | <10 CFU/g | Each batch |
| *Listeria monocytogenes* | Negative / 25 g | Each batch |

### Chemical Contaminants [Organic]

| Description | Unit of Measure (LOQ) | Testing Frequency |
| --- | --- | --- |
| AMPA (breakdown product of glyphosate) | <10.0 ng/g | Quarterly |
| Glyphosate | <10.0 ng/g | Quarterly |
| Pesticides/Biocides [427 different chemicals] | Varies; see Pesticides List in Appendix Section III | Quarterly |

### Allergens

| Allergen | DS-01™ Daily Dose | Testing Frequency |
| --- | --- | --- |
| Almond | <0.1mg | Quarterly |
| Brazil Nut | <0.1mg | Quarterly |
| Cashew | <0.05mg | Quarterly |
| Celery | <0.07mg | Quarterly |
| Corn | Not established\* | Quarterly |
| Gluten [across barley, rye, oats + wheat] (wheat protein) | <20 ppm | Quarterly |
| Crustacean (shrimp protein) | <26.2mg | Quarterly |
| Egg | <0.2mg | Quarterly |
| Fish | <2.6mg | Quarterly |
| Hazelnut | <0.1mg | Quarterly |
| Lupin | <2.9mg | Quarterly |
| Macadamia Nut | <0.1mg | Quarterly |
| Milk | <0.2mg | Quarterly |
| Molluscs | Not established\* | Quarterly |
| Mustard | <0.07mg | Quarterly |
| Peanut | <0.2mg | Quarterly |
| Pecan | <0.03mg | Quarterly |
| Pine Nut | <0.1mg | Quarterly |
| Pistachio | <0.05mg | Quarterly |
| Sesame | <0.1mg | Quarterly |
| Soy | <0.5mg | Quarterly |
| Sulfiting Agents | <10 ppm | Quarterly |
| Walnut | <0.03mg | Quarterly |

*‡ Maximum daily doses are clinically-derived from oral food challenge studies and reflect the most recent advancements in food allergy research. The reference dose, also termed ED01, is the dose at which 1% of the allergic population would be predicted to experience any objective allergic reaction (i.e., 99% of the population does not experience any objectively measurable reaction).*

*\* Inadequate number of clinical studies using low dose oral challenges with this allergen.*

### Whole Genome Sequencing

| Description | Unit of Measure (LOQ) | Testing Frequency |
| --- | --- | --- |
| A series of involved genetic tests down to the strain level | ≥ Label claim for AFU (strain specific) | Under development |

### Water Activity

| Description | Unit of Measure (LOQ) | Testing Frequency |
| --- | --- | --- |
| (aW) — Dew Point Method | <0.20 aW (inner and outer cap) | Each batch |

DS-01® is tested for all 14 classes of allergens according to EFSA and verified to be below the ED01.

At the three hour mark of incubation, the ViaCap® delivered a maximal release of probiotics maintaining the full value of the starting dose (10.57 log vs 10.60 log, or about 100%), indicating viability through the end of the small intestine for delivery into the colon. The ViaCap® was engineered for a precision release of the contents of the inner, probiotic capsule, through the small intestine, resulting in full delivery of label potency prior to entering the colon chamber.

## Interactions

DS-01® has no known contraindications with medications or supplements. However, if you are currently taking prescription medication, have an underlying medical condition, are pregnant or nursing, or if you have questions regarding your specific health needs, you should consult with your personal physician prior to use so that they may advise with the complete knowledge of your health history.

### Can I take too many probiotics?

Unlike with some vitamins and minerals, probiotics do not have established recommended upper limits, and clinical literature has not generally shown them to reach levels of toxicity. In fact, probiotics have been clinically studied for certain indications in CFU dosages that reach the trillions. It is important to note, more is not necessarily better — the best dose per strain is the one shown in human clinical trials to have the intended health benefit.

### Can I take DS-01® with other probiotics?

Many DS-01® users take other supplements, including additional probiotics. While there are no known adverse effects from combining these formulations, there may be some functional redundancy when combining microbial strains in the Lactobacillus and Bifidobacteria genera. To ensure a streamlined and effective protocol, we suggest reviewing your full supplement regimen with your physician or a healthcare professional.

---

## Related
- Routed from: `pdp` (DS-01 — "Strain-identity footnote" and "Clinical trial" references link here), `approach`, `cultured` (deep articles citing DS-01 specifically)
- Products on this template: DS-01 (canonical). Future: PDS-08, VS-01 likely get their own reference pages
- Shared DNA with: `approach` (science-forward voice), `seed-labs` (research), `cultured` (citation density)
- Compliance anchor: this page is the single most citation-heavy surface — claims everywhere need their proof links
- Voice: Grounding-forward (science-heavy), per `copy/tov.md`
- Patterns unique to this template: dose-spec blocks, strain-row typography, QC testing battery tables, figure references inline
