# Brand Creation — Skill

> Operational skill. Guided setup of a new brand inside the Copy Genius vault. Two work surfaces: a structured **interview** with the copywriter (and through them, with the brand) + a targeted **scraping** of the brand's OWN materials (website, e-commerce, sales pages, social, existing copy artifacts). **Zero market / competitor / psychographic research** at this stage — that's a separate skill ([deep-research](skills/deep-research.md)).
>
> Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) when intent recognition matches *"create a new brand"* / *"stiamo iniziando con un nuovo brand"* / *"let's set up [brand]"*, or when the copywriter selects **Option 1 — "Nuovo brand da zero"** from the Mode 2 (Wiki Management) menu in §10 of CLAUDE.md.
>
> Output: a populated `brands/<brand-slug>/` folder with the canonical structure (`brand.md`, `brand-copy-rules.md`, `products.md`, `offers.md`, `avatars/<segment>.md`, `testimonials.md`, `swipe.md`, plus initialized `funnel-briefs/README.md` and `research/README.md` indexes and empty subfolders `competitors/`, `procedures/`, `transcripts/`). After validation, the brand becomes **available to the [strategist](skills/strategist.md)** for Phase 1 Discovery workflows.

---

## Quick navigation

- §1 [Purpose](#1-purpose)
- §2 [When to invoke](#2-when-to-invoke)
- §3 [Required inputs](#3-required-inputs)
- §4 [Mode selection](#4-mode-selection)
- §5 [Phase 1 — Interview](#5-phase-1--interview)
- §6 [Phase 2 — Targeted scraping](#6-phase-2--targeted-scraping)
- §7 [Phase 3 — Brand wiki population](#7-phase-3--brand-wiki-population)
- §8 [Phase 4 — Validation](#8-phase-4--validation)
- §9 [Phase 5 — Optional handoff to Deep Research](#9-phase-5--optional-handoff-to-deep-research)
- §10 [Naming conventions](#10-naming-conventions)
- §11 [Common pitfalls](#11-common-pitfalls)
- §12 [Cross-references](#12-cross-references)
- [Appendix A — Full interview questionnaire](#appendix-a--full-interview-questionnaire)

---

## 1. Purpose

Take a copywriter from "we want to set up [brand X] in Copy Genius" to "the brand wiki is populated, validated, and ready for either funnel work or deep research" by:

1. Confirming scope and mode (Interview vs Scraping-led vs Hybrid)
2. Running a structured interview that captures brand identity, frontman, USP, voice, products, offers, and an **initial avatar hypothesis** (not psychographic-deep)
3. Targeted scraping of the brand's OWN public materials to extract verbatim copy, testimonials, product specs, and voice signals
4. Populating the canonical `brands/<brand-slug>/` files using the [template](brands/_template/) as scaffold
5. Surfacing every gap that prevents the [strategist](skills/strategist.md) from operating on this brand
6. Gating the handoff: brand is **active** only after the copywriter validates the populated wiki

The Brand Creation skill is **the onboarding consultant**. It collects what exists about the brand AS IT IS, organizes it into the Copy Genius file structure, and stops there. It does not extrapolate, does not invent, does not run market research, does not write psychographic profiles. Those are out of scope by design.

---

## 2. When to invoke

The orchestrator routes to Brand Creation when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches:

- "create a new brand", "stiamo iniziando con un nuovo brand", "let's set up [brand]", "voglio aggiungere un brand"
- "the wiki is empty" (session open with no brands) → orchestrator proposes brand-creation as the first step
- Mode 2 (Wiki Management) → Option 1 "Nuovo brand da zero"

**Activate on**:

- Copywriter has a real brand in mind (name, market, frontman or company) and wants Copy Genius to know it
- Existing partial brand folder (e.g., only `brand.md` exists with placeholder fields) → can resume from intake

**Never activate on**:

- Light updates to an existing brand → routed to Mode 2 → Option 3 "Aggiornare un brand" (direct edit on the relevant file)
- Market research requests → routed to [deep-research](skills/deep-research.md)
- "Just give me a template" → orchestrator points to `brands/_template/` and exits; brand-creation runs ONLY when there's real brand input to capture
- Funnel brief construction → routed to [strategist](skills/strategist.md) (which requires the brand wiki to already be populated)

**Default behavior on ambiguous requests**: the orchestrator asks the copywriter "Stai creando un brand nuovo (lo configuriamo da zero) o vuoi aggiornare un brand esistente (modifichiamo il file specifico)?" before any action.

---

## 3. Required inputs

Collect from the copywriter before starting.

**Mandatory**:

- **Brand name** (display name, e.g., "ACME Fitness", "Caffè Roma")
- **Brand slug** — kebab-case lowercase per §10 (e.g., `acme-fitness`, `caffe-roma`)
- **Niche / category** in one sentence
- **Language** of the brand's target market (it / en / es / ...)
- **Market** (country / region / DACH / global)
- **Business type** (D2C, coaching, SaaS, training, services, media, e-commerce, ...)
- **Has frontman?** (true / false) — and if true, the frontman's name

**Optional but valuable**:

- Brand website URL
- E-commerce / sales page URLs
- Social profiles (Instagram, LinkedIn, YouTube, TikTok)
- Existing copy artifacts the copywriter wants ingested (PDFs, screenshots, doc links)
- Existing testimonials the copywriter wants in the wiki
- Brand-style PDFs (brand book, tone of voice guide) if any

If a mandatory input is missing, **ask before proceeding**. Never guess the brand slug, niche, or business type — they will pollute every downstream file.

---

## 4. Mode selection

Asked at the start of every invocation.

> *"Tre modi per popolare la wiki di [brand]:*
>
> ***A — Intervista guidata** (~25-40 minuti, interattiva). Ti faccio una serie di domande strutturate sulla brand identity, sul frontman, sull'offerta, sulla voce e sull'avatar iniziale. Tu rispondi con quello che sai. Ideale quando hai chiara la brand in testa ma non hai materiali strutturati da farmi leggere.*
>
> ***B — Scraping-led** (~15-25 minuti, semi-autonomo). Tu mi dai gli URL e i materiali del brand (sito, e-commerce, social, PDF). Io estraggo, organizzo e ti chiedo solo conferma sulle ambiguità. Ideale quando il brand ha già materiali pubblici curati che parlano bene.*
>
> ***C — Ibrido** (~30-50 minuti, raccomandato per brand reali). Combiniamo: scraping per quello che è già pubblico + intervista mirata sui blocchi dove i materiali non bastano (in genere: voice signature accumulata, avatar segmentation, brand-copy-rules iniziali). Quasi sempre è la modalità migliore.*
>
> *Quale scegli?"*

### Routing logic

| Copywriter picks | Path |
|---|---|
| A — Intervista | Skip §6 (Scraping). Run §5 (full Interview) → §7 (Population) → §8 (Validation). |
| B — Scraping-led | Skim §5 (only the Mandatory inputs subset of §3). Run §6 (Scraping) → §7 (Population) → §5 selectively as gap-filler on missing blocks → §8 (Validation). |
| C — Hybrid (default) | Run §6 (Scraping) first on whatever materials exist → run §5 (Interview) on blocks where scraping didn't yield enough → §7 → §8. |
| Unsure | Default to C — Hybrid. |

### Mode B is NOT inferior

If the brand has a well-curated public surface (clear About page, transparent product specs, founder story documented, testimonials with verbatim text), Mode B can fully populate the wiki without losing fidelity. Mode A is the right call when the brand exists mainly in the copywriter's head or in private materials.

---

## 5. Phase 1 — Interview

Run the structured questionnaire one block at a time, in order. **The interview questions live ONLY in [Appendix A](#appendix-a--full-interview-questionnaire)** — this section holds, for each block, the operational rules and the target file(s). The questions are asked in Italian (the working language with the copywriter); the structure around them is English system infrastructure.

**Operational rules (all blocks)**:

- One block at a time. Wait for the copywriter to finish answering before moving to the next.
- Surface ambiguities as you go (e.g., *"Questa frase potrebbe essere il claim USP o solo un sotto-titolo del sito — cosa è davvero?"*). Don't let them resolve later.
- Capture VERBATIM the quotes and phrasings the copywriter offers. They go into `swipe.md` and inform `brand-copy-rules.md`.
- If the copywriter says *"non lo so ancora"* on a strategic block (e.g., voice signature, USP positioning), **mark the field as `[DA DEFINIRE]` and move on**. Do NOT invent. The strategist will surface the gap during Phase 1 Discovery.

### 5.1 — Brand identity block

- **Target file**: [brand.md](brands/_template/brand.md)
- **Covers**: display name, slug, niche, market language, geography, business type, mission, what the brand is REALLY selling (transformation / identity / emotional outcome), founding story, current size.
- **Questions**: Appendix A, Block 1 (10 questions).

### 5.2 — Frontman block

- **Skip when** `has_frontman = false`.
- **Target file**: [brand.md](brands/_template/brand.md) §Frontman.
- **Covers**: name, role, educational and professional background, personal pivot story (the founding anecdote), public trust credentials, personal voice signature, recurring anecdotes used in copy.
- **Questions**: Appendix A, Block 2 (8 questions).

### 5.3 — USP / positioning block

- **Target file**: [brand.md](brands/_template/brand.md) §Positioning + (partially) §USP.
- **Rule**: the 2-3 competitor names collected here are for framing ONLY — no competitive analysis happens in brand-creation (that belongs to [deep-research](skills/deep-research.md)).
- **Rule**: a public contrarian opinion, if any, feeds `swipe.md` + the tone rules in `brand-copy-rules.md`.
- **Questions**: Appendix A, Block 3 (5 questions).

### 5.4 — Voice signature block

- **Target files**: [brand-copy-rules.md](brands/_template/brand-copy-rules.md) (initial version, 3-7 rules) + [swipe.md](brands/_template/swipe.md) (verbatim examples).
- **Rule**: from the answers, produce **3-7 initial rules** in `brand-copy-rules.md`. Further rules accumulate over time via the *"salva questa regola per il brand"* command (CLAUDE.md §9).
- **Rule**: from the copy examples offered ("sounds like the brand" vs "would NOT sound like the brand"), extract patterns — store the patterns as rules, the examples in `swipe.md`.
- **Questions**: Appendix A, Block 4 (8 questions).

### 5.5 — Products & offers block

- **Target files**: [products.md](brands/_template/products.md) + [offers.md](brands/_template/offers.md).
- **Rule**: capture the mechanics ONLY (specs, pricing, bonuses, guarantee, urgency/scarcity, tier strategy). The strategic reasoning behind the offer (why this offer, awareness, big idea, chain of beliefs) does NOT enter here — it stays for the [strategist](skills/strategist.md)'s funnel brief.
- **Questions**: Appendix A, Block 5 (per product, 9 questions) + Block 6 (per offer, 9 questions).

### 5.6 — Avatar segments — initial hypothesis (light)

- **Target file**: `avatars/<segment>.md` (canonical template: [avatar.md](brands/_template/avatars/avatar.md)) — **initial seed**, not a full psychographic profile.
- **Rule**: the seed holds demographics + entry trigger + 3-5 verbatim symptoms/desires + 2-3 tried solutions + tribal language (5-10 expressions). The full psychographic profile is produced later by [deep-research](skills/deep-research.md) Phase 3. Brand Creation marks that the file EXISTS and holds a seed.
- **Rule**: if the copywriter has no clear avatar hypothesis → create a single placeholder `avatars/avatar-primario.md` with `[DA POPOLARE DA DEEP-RESEARCH]` as a notice, and proceed. Don't block the pipeline on this.
- **Questions**: Appendix A, Block 7 (per segment, 6 questions).

### 5.7 — Existing materials inventory

- **Target files**: [swipe.md](brands/_template/swipe.md) + [testimonials.md](brands/_template/testimonials.md) + `transcripts/` + `procedures/`.
- **Covers**: existing copy pieces to catalog as reference, documented testimonials (verbatim + name + role + date), frontman interview/podcast/masterclass transcripts, documented operational procedures (customer service, fulfillment, refunds).
- **Rule**: everything the copywriter hands over is catalogued VERBATIM (zero re-interpretation). Files are named kebab-case lowercase.
- **Questions**: Appendix A, Block 8 (4 questions).

---

## 6. Phase 2 — Targeted scraping

Runs in Mode B or C. Skipped in Mode A.

### 6.1 — Sources (brand-owned only)

**In scope**:

- The brand's official website (About, mission, founder bio, products, FAQ, public testimonials, editorial blog posts)
- The brand's e-commerce / sales pages
- The brand's public landing pages
- The brand's official social profiles (Instagram, LinkedIn, YouTube, TikTok, Twitter/X)
- Publications / press features about the brand (public interviews, press articles)
- Public video channels of the frontman / brand
- Public newsletter archives

**Out of scope** (anti-patterns):

- Competitor sites → that's material for [deep-research](skills/deep-research.md), not for brand-creation
- Forums, Reddit, Quora with market discussions → same, deep-research
- Aggregate reviews (Trustpilot, Amazon reviews of competitors) → deep-research
- Third-party clinical studies / scientific papers → deep-research or strategist
- Psychographic databases / industry consumer insights → deep-research

**Guiding principle**: Brand Creation looks ONLY at what the brand ITSELF has produced or published. Everything else is external and requires a separate skill.

### 6.2 — What to extract per source type

| Source | What to extract | Goes into |
|---|---|---|
| Site > About / Mission | Story, mission, declared values, founder bio | `brand.md` |
| Site > Products | Technical specs, descriptions, public pricing | `products.md` + `offers.md` |
| Site > FAQ | Recurring questions + official answers | `brand.md` §FAQ or `swipe.md` (if it's notable copy) |
| Sales / Landing page | Headline, sub, body, CTA, testimonials, narrated guarantee | `swipe.md` verbatim + `offers.md` for the mechanics |
| Editorial blog | Pieces representative of the voice + recurring themes | `swipe.md` (the top 3-5) |
| Social profiles | Bio + 5-10 posts the copywriter or the analysis marks as "representative of the voice" | `swipe.md` + signal for `brand-copy-rules.md` |
| Public testimonials | Verbatim + name + role + date + source | `testimonials.md` |
| Interviews / press | Frontman quotes + the framing used by the press | `brand.md` §Frontman + `swipe.md` |
| Newsletter | 2-3 representative issues | `swipe.md` |

### 6.3 — Operational protocol

1. **List the URLs/sources** given by the copywriter
2. For each URL: extract text + identify content type + target file category
3. Extract VERBATIM, never paraphrased
4. For each extracted element: add metadata (source URL + extraction date + type)
5. Surface any ambiguity to the copywriter ("Is this sentence the official USP or the claim of one specific landing page?")
6. Do NOT extract personal or protected data (e.g., private emails, internal phone numbers)
7. Do NOT extract copy from pages requiring login (respect the public perimeter)

### 6.4 — Anti-patterns during scraping

- ❌ Summarizing or interpreting the content: brand-creation captures, it does not synthesize
- ❌ Translating the content into another language: the source language is preserved; any translation is the job of [document-formatter](skills/document-formatter.md) or of a later explicit request
- ❌ Extracting content from non-brand sources (even if the URLs come from the copywriter — if they're not brand-owned, surface the conflict)
- ❌ Inferring avatar / target / psychographics from the brand's materials → that's a different job
- ❌ Re-formatting the copy "to make it clearer" → preserve the original structure; flag separately if a cleanup is needed

---

## 7. Phase 3 — Brand wiki population

Once the material is collected (from §5 or §6 or both), populate the structure.

### 7.1 — Clone protocol

1. Verify that `brands/<brand-slug>/` does NOT already exist
2. If it already exists partially (e.g., only `brand.md` with placeholders) → **do not overwrite**, integrate into the existing files
3. Otherwise, **clone** the structure from `brands/_template/`:

```
brands/<brand-slug>/
├── brand.md
├── brand-copy-rules.md
├── products.md
├── offers.md
├── swipe.md
├── testimonials.md
├── avatars/
│   └── <segment-slug>.md
├── competitors/        (empty — populated by deep-research)
├── funnel-briefs/
│   └── README.md       (initial index)
├── procedures/         (empty, or seeded with the copywriter's materials)
├── research/
│   └── README.md       (folder index — research documents land here via deep-research)
└── transcripts/        (empty, or seeded with the copywriter's materials)
```

4. Update the YAML frontmatter of every file with the correct `brand: <brand-slug>`, and set `status: In Setup` in `brand.md` (see §8 Validation states)
5. Replace every `<Brand Name>` / `<brand-slug>` placeholder with the real values

### 7.2 — Per-file population guide

#### `brand.md`

Populate every mandatory block of the template. Where the copywriter didn't answer, use `[DA DEFINIRE]` with a comment on why it's missing (e.g., *"positioning strategy to be decided in Discovery"*). Never invent. A well-populated `brand.md` is the file every specialist reads before writing copy.

#### `brand-copy-rules.md`

Start with **3-7 rules derived from the §5.4 answers + the §6 scraping**. Each rule has:
- Category (Tone / Lexicon / Structure / Rhythm / Names / Authority / Layout)
- Do / Don't with concrete examples
- Why
- Date added

Add an index at the top and a note that further rules are added via explicit command (see [feedback-rules](core/feedback-rules.md) and CLAUDE.md §9).

#### `products.md`

One row per product in the Index at the top + one `## PRODUCT — <slug>` per product with all the template fields.

#### `offers.md`

One row per offer in the Index + one `## OFFER — <slug>` per offer. Mechanics ONLY (price, bonuses, guarantee, urgency). The strategic motivations stay for the funnel brief.

#### `avatars/<segment>.md`

One file per identified segment. Even with a minimal seed, populate at least: segment name, base demographics, 3-5 verbatim pains, 2-3 tried solutions, tribal language (5-10 expressions). Add a disclaimer at the top: *"Initial profile (Phase 1 brand-creation). The full psychographic profile requires [deep-research](../../../skills/deep-research.md)."*

#### `testimonials.md`

All verbatim testimonials collected from the copywriter or from scraping. Structure: Illustrious first → Regular after (per the template default). Quick Reference table at the top if ≥10 testimonials.

#### `swipe.md`

All the brand pieces captured. Index at the top + one entry per piece with metadata (title, type, source, date). Verbatim, uncommented. Any distillation (argumentative skeleton) is later work, handled on demand by the orchestrator or the copywriter, not by brand-creation.

#### `funnel-briefs/README.md`

Clone the template version and personalize it with the correct brand slug. It stays empty of real briefs — briefs are produced by the [strategist](skills/strategist.md).

#### `research/README.md`

Clone the template version and personalize it with the correct brand slug. The folder stays empty of research documents — they are produced by [deep-research](skills/deep-research.md).

#### `competitors/`, `procedures/`, `transcripts/`

Leave them empty, or seed them with the initial materials if the copywriter shared any in §5.7. **`competitors/` always stays empty in Phase 1 — it is populated by [deep-research](skills/deep-research.md)** after the competitive analysis.

### 7.3 — Internal linking convention

All internal links in `brands/<brand-slug>/` files use **paths relative to the brand folder**, NOT absolute paths from the vault root. For the detail: §13 of [CLAUDE](CLAUDE.md) (Internal linking convention) — section "Exception — links inside `brands/_template/` and `brands/<brand>/`".

Correct examples:

- From `brand.md` to `products.md` → `[products](products.md)`
- From `brand.md` to `avatars/<segment>.md` → `[<segment>](avatars/<segment>.md)`
- From `avatars/<segment>.md` to `brand.md` → `[brand](../brand.md)`
- From a brand file to a core wiki file → `[strategist](../../../skills/strategist.md)`

### 7.4 — Output language

All `brands/<brand-slug>/` files produced by brand-creation are in the **language of the conversation with the copywriter** (rule: CLAUDE.md §8 → "Output language"). Italian if the copywriter writes in Italian, English if English. The templates themselves (in `brands/_template/`) stay in English as system scaffold; at clone time, brand-creation localizes them into the working language.

---

## 8. Phase 4 — Validation

Brand Creation never closes on its own. The copywriter must validate the result before the brand becomes **Active**.

### Validation gate

When population is complete (set `status: Awaiting Validation` in the `brand.md` frontmatter at this point):

1. **Surface a summary checklist to the copywriter**:
   - Files created (list)
   - Fields populated vs `[DA DEFINIRE]` (count)
   - Number of products / offers / testimonials / swipe pieces inserted
   - Any ambiguities left unresolved during the interview or the scraping

2. **Ask for explicit confirmation**:
   > *"Brand wiki popolata. Vuoi che apriamo i file principali per una review veloce, oppure ti basta la mia sintesi? Quando confermi 'tutto a posto', il brand diventa attivo e disponibile alla strategist."*

3. **On confirmation**:
   - Update the YAML frontmatter of `brand.md` with `status: Active` — or `status: Active — Partial` if key fields still carry `[DA DEFINIRE]`
   - Add a closing note in `brand.md` §Changelog with date + mode (Interview / Scraping / Hybrid) + who validated
   - Notify the orchestrator that the brand is available to the strategist

### Validation states

The states below are **written to the `status:` field of the YAML frontmatter of `brands/<brand>/brand.md`** at each transition. This is the machine-readable brand-state signal: the orchestrator reads it per CLAUDE.md §4 (State awareness).

| State | Meaning | What's possible |
|---|---|---|
| **In Setup** | brand-creation in progress | No downstream consumer can operate |
| **Awaiting Validation** | population complete, copywriter hasn't confirmed yet | Strategist does NOT start; deep-research CAN |
| **Active** | validated by the copywriter | Strategist can start; all specialists can read |
| **Active — Partial** | validated but with `[DA DEFINIRE]` in key fields | Strategist surfaces the gaps before proceeding |

### What NOT to validate

Don't ask the copywriter to validate the file contents one by one — that's useless friction. Surface ONLY the blocks with unresolved ambiguities or `[DA DEFINIRE]`. Everything else is bypass.

---

## 9. Phase 5 — Optional handoff to Deep Research

Brand Creation NEVER calls [deep-research](skills/deep-research.md) automatically. The handoff is optional and requires the copywriter's explicit request.

### When to propose it

At the end of validation, the orchestrator can propose (NOT impose):

> *"Brand [X] è attiva. Per portare la wiki dal livello 'inventario base' al livello 'pronta per copy ad alta conversione', l'arricchimento naturale è:*
>
> ***Deep Research** (~30-60 minuti) — analizza il mercato (awareness levels, sofisticazione, mass desire dominante), i competitor (3-5 nomi con angoli + pricing), e la psicografica dell'avatar (paure, frustrazioni, linguaggio tribale, soluzioni provate). Output: una `unified-brief.md` che la strategist può consumare direttamente.*
>
> *Vuoi che la lanci adesso, o preferisci tenerla per quando partirà il primo funnel?"*

### When NOT to propose it

- If the copywriter is just organizing brands in the vault to have them ready (no imminent funnel)
- If the brand is demo / didactic (a placeholder you keep only as a teaching example)
- If the copywriter has already done deep research in other tools and is willing to import it

### What deep-research does that brand-creation does NOT

| Dimension | brand-creation | deep-research |
|---|---|---|
| Brand materials | ✅ Captures | ❌ |
| Avatar light (seed) | ✅ Initial seed | ❌ |
| Psychographic avatar | ❌ | ✅ Full |
| Competitor mapping | ❌ | ✅ |
| Awareness levels stage | ❌ | ✅ |
| Market sophistication | ❌ | ✅ |
| Mass desire identification | ❌ | ✅ |
| Aggregated tribal language | ❌ | ✅ (with verbatim quote bank) |
| Press / industry examples | ❌ | ✅ (for sophistication) |

The two skills are **complementary**, not alternative.

---

## 10. Naming conventions

Every file and folder produced by brand-creation follows §14 of [CLAUDE](CLAUDE.md) (File & folder naming convention). Operational summary for the most frequent cases:

| Element | Convention | Example |
|---|---|---|
| Brand slug | kebab-case, lowercase | `acme-fitness`, `caffe-roma`, `scrivere-meglio` |
| Brand folder | kebab-case | `brands/acme-fitness/` |
| Brand-level files | kebab-case `.md` | `brand.md`, `brand-copy-rules.md`, `products.md` |
| Avatar slug | kebab-case, descriptive of the segment | `independent-trainer.md`, `over-50-runner.md`, `donna-40-stanca.md` |
| Product slug | kebab-case, descriptive | `acme-reset`, `protocollo-90-giorni` |
| Offer slug | kebab-case, descriptive | `bundle-3-confezioni`, `lancio-q2-2026` |
| Competitor slug | kebab-case of the competitor name | `supradyn`, `healthycheck`, `acme-corp` |

Never underscores (except the leading `_template/`), never PascalCase, never spaces.

If the copywriter proposes a non-compliant slug, surface the rule and propose the alternative:

> *"`Brand_Name` con underscore non è conforme alla convenzione del vault. Lo riconvertiamo in `brand-name`?"*

---

## 11. Common pitfalls

Distilled from brand-setup practice. Watch for these.

### 11.1 — Inventing where the copywriter doesn't know

Temptation: completing an empty field with a plausible "best guess".

**Fix**: use `[DA DEFINIRE]` + a comment on why it's missing. The strategist will surface it. A wiki that lies costs more than an incomplete wiki.

### 11.2 — Competitor-site scraping disguised as "brand intelligence"

Temptation: the copywriter says "add a quick comparison with the competitors too".

**Fix**: redirect to [deep-research](skills/deep-research.md). Brand Creation touches ONLY the brand's materials. Competitor analysis is a separate workstream with its own rules, citation conventions, and quality checks.

### 11.3 — Improvised psychographic avatar from brand-creation

Temptation: the §5.6 interview drifts into a mini psychographic profile ("the typical prospect is anxious, perfectionist, afraid of...").

**Fix**: cap the avatar at a seed (demographics + 3-5 verbatim + tribal language + tried solutions). Add the disclaimer "Initial profile, to be completed via deep-research". The psychographic avatar requires a methodology brand-creation doesn't have — mixing them produces plausible but wrong profiles.

### 11.4 — Initial brand-copy-rules that are too long

Temptation: writing 15-20 initial rules "to be complete".

**Fix**: start with 3-7 solid, well-founded rules. The rest grow organically during copy work via the "save this rule" command. The founding layer must be lean and free of internal conflict.

### 11.5 — Brand slug improvised by the copywriter on the spot

Temptation: the copywriter says "let's call it `AcmeFit` or `ACME_brand` or `acme-2026`".

**Fix**: apply §10. Propose a compliant alternative and show why it matters (filesystem portability, URL safety, AI readability).

### 11.6 — Brand folder created without validation

Temptation: ending the skill silently after writing the files.

**Fix**: the Phase 4 Validation is non-negotiable. Without the copywriter's explicit confirmation, the brand stays in "Awaiting Validation" and the strategist does not start. This gate prevents starting funnel briefs on an incomplete or ambiguous brand wiki.

### 11.7 — Overwriting an existing brand

Temptation: if the folder already exists, re-cloning the template and losing the prior work.

**Fix**: if `brands/<brand-slug>/` exists, brand-creation switches to "integrate into existing" mode — it populates ONLY empty or `[DA DEFINIRE]` fields, never overwrites content already curated by the copywriter. Surface any conflict.

### 11.8 — Skipping the `funnel-briefs/README.md` index

Temptation: leaving the `funnel-briefs/` folder completely empty.

**Fix**: the `README.md` index serves the orchestrator and the strategist to know how and where to place future briefs. Always seed it at clone time, even with no real briefs. Same applies to `research/README.md`.

### 11.9 — Localizing the `_template/` templates

Temptation: translating the templates themselves into Italian "for consistency with the Italian copywriter".

**Fix**: the templates stay in English (system rule, CLAUDE.md §8 Output language). Brand-creation **localizes them at clone time** in the specific brand's folder — the original templates stay universal.

### 11.10 — Confusing brand-creation with strategist

Temptation: making strategic choices (mass desire, awareness, big idea) during the interview.

**Fix**: brand-creation is inventory, NOT strategy. If the copywriter starts talking about Big Idea or awareness level, surface the boundary ("this belongs to the strategist when we build the first funnel brief") and return to the interview fields.

---

## 12. Cross-references

- [CLAUDE](CLAUDE.md) — the orchestrator that invokes this skill; §4 State awareness (reads the `status:` frontmatter written here); §5 Intent table routes "new brand setup" here; §10 Mode 2 (Wiki Management) → Option 1 "Nuovo brand da zero"; §13 Internal linking convention; §14 File & folder naming convention
- [deep-research](skills/deep-research.md) — complementary skill, runs post-brand-creation on request to enrich psychographic avatar + competitors + market awareness
- [strategist](skills/strategist.md) — main consumer; requires the brand to be `Active` to start
- [wiki-health-check](skills/wiki-health-check.md) — can be run on created brands to find broken links, orphan files, leftover `[DA DEFINIRE]` fields
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — template of the deliverable the strategist will produce after consuming the brand wiki
- [feedback-rules](core/feedback-rules.md) — the global rules system (brand-copy-rules are brand-scoped)
- `brands/_template/` — the scaffold cloned by brand-creation
- [brand template](brands/_template/brand.md) — the brand.md scaffold showing every field to populate

---

# Appendix A — Full interview questionnaire

> Ready-to-run version — **the single home of the interview questions** (§5 only holds the per-block rules and target files). One question per line, grouped by block. The questions are deliberately kept in Italian: they are asked verbatim to an Italian-speaking copywriter. Block headers are English system infrastructure. The copywriter answers inline; brand-creation captures verbatim and organizes into `brands/<brand-slug>/`.

```
═══════════════════════════════════════════
BLOCK 1 — BRAND IDENTITY             (10 Q)
═══════════════════════════════════════════
1.  Nome display del brand:
2.  Slug (kebab-case lowercase):
3.  Categoria/niche in una frase:
4.  Lingua del mercato:
5.  Mercato geografico:
6.  Tipo di business:
7.  Mission in una frase:
8.  Cosa stai vendendo davvero (oltre il prodotto):
9.  Anno di fondazione + storia in 3-4 righe:
10. Dimensione attuale (clienti / fatturato / team):

═══════════════════════════════════════════
BLOCK 2 — FRONTMAN                    (8 Q)
(skip if has_frontman=false)
═══════════════════════════════════════════
1.  Nome del frontman:
2.  Ruolo / titolo professionale:
3.  Background formativo:
4.  Esperienza professionale (anni + ruoli rilevanti):
5.  Storia del pivot personale (aneddoto fondativo):
6.  Credenziali pubbliche di trust:
7.  Voice signature personale:
8.  Aneddoti ricorrenti nel copy:

═══════════════════════════════════════════
BLOCK 3 — USP / POSITIONING           (5 Q)
═══════════════════════════════════════════
1.  In una frase, perché scelgono te:
2.  Cosa fai diversamente:
3.  2-3 competitor di riferimento (una frase ciascuno):
4.  Ascia di posizionamento:
5.  Opinione contrarian:

═══════════════════════════════════════════
BLOCK 4 — VOICE SIGNATURE             (8 Q)
═══════════════════════════════════════════
1.  Hai un brand book / tone of voice guide?
2.  1-2 esempi di copy "che suona come il brand" + 1 contro-esempio:
3.  Parole BANDITE:
4.  Parole RICORRENTI:
5.  Persona / prospettiva narrativa:
6.  Registro dominante:
7.  Lunghezza media frasi:
8.  Sotto-promette / sovra-promette / realismo stretto:

═══════════════════════════════════════════
BLOCK 5 — PRODUCTS              (per product)
═══════════════════════════════════════════
1.  Nome (display):
2.  Slug (kebab-case):
3.  Categoria:
4.  Ruolo nel funnel:
5.  Status:
6.  Prezzo pubblico:
7.  Descrizione 2-3 righe:
8.  Specifiche / contenuti / consegna:
9.  Differenziatori chiave:

═══════════════════════════════════════════
BLOCK 6 — OFFERS                  (per offer)
═══════════════════════════════════════════
1.  Slug dell'offerta:
2.  Nome display:
3.  Prodotti inclusi (slug):
4.  Tipo:
5.  Prezzo listino + offerta + ragione sconto:
6.  Bonus inclusi:
7.  Garanzia (tipo + durata + descrizione narrata):
8.  Urgenza / scarsità (tipo + ragione ancorata):
9.  Tier strategy (se multi-tier):

═══════════════════════════════════════════
BLOCK 7 — AVATAR SEED           (per segment)
═══════════════════════════════════════════
1.  Slug del segmento:
2.  Età, genere, occupazione, fascia reddito:
3.  Trigger d'ingresso (cosa li porta a cercare):
4.  3-5 sintomi/desideri verbatim:
5.  2-3 soluzioni già provate + perché non bastano:
6.  Linguaggio tribale (5-10 espressioni):

═══════════════════════════════════════════
BLOCK 8 — EXISTING MATERIALS          (4 Q)
═══════════════════════════════════════════
1.  Pezzi di copy esistenti da catalogare in swipe.md (link/file):
2.  Testimonial documentati (verbatim + fonte):
3.  Trascrizioni di interviste/podcast/masterclass del frontman:
4.  Procedure operative documentate (customer service, fulfillment, rimborsi):

═══════════════════════════════════════════
END OF INTERVIEW — Phase 3 Population
═══════════════════════════════════════════
```
