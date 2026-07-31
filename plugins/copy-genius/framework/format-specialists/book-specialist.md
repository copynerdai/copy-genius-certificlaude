# Book Specialist — Format Specialist

> Format-level specialist. Produces complete **long-form books** as direct-response copy assets — lead-magnet books, authority books, brand autobiographies, editorial manuals, signature methodology books. **Format specialist** (produces a complete piece). Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) on direct user request, or when a funnel strategy calls for a book as an asset.
>
> **Two layers in this specialist**:
>
> 1. **Strategic + craft layer** — what kind of book, what architecture, what frameworks (Parts A and B)
> 2. **Operational layer** — the 5 Reference Documents system (files on disk, not conversations) and the 3-phase production workflow that makes long-form book production actually shippable inside the single-orchestrator model (Parts C and D)
>
> **Division of labor**: this specialist handles the WRITING and STRUCTURE of the book as a DR asset. Out of scope: physical production (ISBN, printing, cover design), publishing strategy (self-publishing vs. traditional), launch funnel architecture (delegated to [funnel-architecture](core/strategic-frameworks/funnel-architecture.md) and [offer-specialist](section-specialists/offer-specialist.md)).
>
> **What this specialist inherits from the funnel brief** (and does NOT re-derive): avatar profile, awareness level, brand-level chain of beliefs, positioning vs. competitors. The specialist re-uses these — it does not regenerate them. What this specialist DOES derive: the book's Big Idea (a specific articulation of the campaign Big Idea for the book format), the book's Unique Mechanism (the framework the book teaches), the book's architecture, the Voice Guide (more granular than `brand-copy-rules.md` for book-length writing).

---

## 0. Execution path — read this first

> Always read before writing: funnel brief touchpoint block · brand-copy-rules · feedback-rules (brand overrides global).
> **Structure selection (Mode 1 step 5)**: before planning, the orchestrator queries the [swipe-index](swipe/index.md) for matching structures — if a SKELETON (or composition) was chosen, it is the piece plan's structural spine; adapt it to the brief, never the reverse. If none chosen, plan from this file's own models.
> Tier 1 style bans apply while DRAFTING, not only at QA (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.", no banned phrases.
> Writing invocation: §17 (3-phase overview) → §18 (Phase 1 — strategy + create the 5 reference docs) → §19 (Phase 2 — per-chapter protocol, incl. per-chapter QA) → §20 (Phase 3 — post-production) → §23 (consolidated checklist).
> Reference sections — consult on demand only: §5 (11 formats) and §6 (4 objectives) at format-selection time, §7 (architecture) at outline time, §8 (chapter anatomy) at chapter time, §9 (title strategy) at Book Bible time, §10 (CTA integration) at closing-chapter time, §12-§16 (document templates) when creating each reference doc.

---

## Quick navigation

### Part A — Identity & scope
- §1 [Purpose](#1-purpose)
- §2 [When invoked](#2-when-invoked)
- §3 [Required inputs](#3-required-inputs)

### Part B — Strategic foundation
- §4 [Core principles](#4-core-principles)
- §5 [The 11 book formats](#5-the-11-book-formats)
- §6 [The 4 objective types](#6-the-4-objective-types)
- §7 [The 4-part book architecture](#7-the-4-part-book-architecture)
- §8 [Chapter anatomy + writing rules](#8-chapter-anatomy--writing-rules)
- §9 [Title and subtitle strategy](#9-title-and-subtitle-strategy)
- §10 [CTA integration inside a book](#10-cta-integration-inside-a-book)

### Part C — The 5 Reference Documents
- §11 [Why reference documents matter](#11-why-reference-documents-matter)
- §12 [Document 1 — Book Bible](#12-document-1--book-bible-book-biblemd)
- §13 [Document 2 — Detailed Outline](#13-document-2--detailed-outline-outlinemd)
- §14 [Document 3 — Voice Guide](#14-document-3--voice-guide-voice-guidemd)
- §15 [Document 4 — Chapter Tracker](#15-document-4--chapter-tracker-chapter-trackermd)
- §16 [Document 5 — Raw Materials index](#16-document-5--raw-materials-index-raw-materialsmd--optional-but-powerful)

### Part D — Operational workflow
- §17 [The 3 phases overview](#17-the-3-phases-overview)
- §18 [Phase 1 — Pre-production](#18-phase-1--pre-production)
- §19 [Phase 2 — Production](#19-phase-2--production)
- §20 [Phase 3 — Post-production](#20-phase-3--post-production)
- §21 [Managing context across a book-length project](#21-managing-context-across-a-book-length-project)

### Part E — Quality control & references
- §22 [Common pitfalls](#22-common-pitfalls)
- §23 [Consolidated checklist](#23-consolidated-checklist)
- §24 [Tips & tricks](#24-tips--tricks)
- §25 [Cross-references](#25-cross-references)

---

# PART A — Identity & scope

## 1. Purpose

Produce ready-to-publish books as direct-response assets:

- **Lead-magnet books** — short to medium length (60-150 pages), free + shipping or paid front-end, designed to acquire leads and educate them into the backend
- **Authority books** — medium to long (150-300 pages), positioning the frontman as the category expert
- **Brand autobiographies** — narrative-led books that tell the founder's journey and the brand's origin
- **Editorial manuals** — structured how-to books that teach a methodology, used as authority asset + course companion
- **Signature methodology books** — book-as-codification of the brand's Unique Mechanism

Does NOT produce:

- Physical book production specs (ISBN, paper choice, printer selection, layout files)
- Publishing strategy decisions (self-publishing vs. traditional vs. hybrid)
- Launch funnel architecture (the funnel that sells the book or uses the book as lead magnet)
- The offer block on the book's sales page (handled by [offer-specialist](section-specialists/offer-specialist.md))
- Audiobook narration scripts (the book text is the same; narration direction is a separate craft)

The specialist is the **author-by-proxy**: takes the brand's frontman, mechanism, avatar, and material, then produces a book the frontman could publish under their name.

---

## 2. When invoked

The orchestrator routes to book-specialist when intent recognition matches:

- "scrivi un libro per [brand]", "write a book", "draft the lead-magnet book"
- "build the authority book", "scrivi il manuale operativo"
- "write the brand autobiography", "scrivi la storia del fondatore in formato libro"
- "structure the book", "fammi la scaletta del libro"
- "write chapter N of the book", "scrivi il capitolo N"
- "revise this book chapter", "rivedi questo capitolo"
- "create the Book Bible", "estrai la Voice Guide", "fammi l'outline del libro"

Also invoked **internally** by other specialists when a book is referenced in a funnel:

- [lp-specialist](format-specialists/lp-specialist.md) when writing the sales page that sells the book
- [strategist](skills/strategist.md) when the funnel brief includes "book as lead magnet" or "book as authority asset"

---

## 3. Required inputs

| Input | Source | What the specialist needs from it |
|---|---|---|
| **Funnel brief** | Strategist output | Awareness level, avatar, brand chain of beliefs, brand Big Idea, brand UM, book's role in the funnel |
| **Brand foundation** | `brands/<brand>/brand.md` | Frontman identity, story, credentials, voice, posture |
| **Avatar** | `brands/<brand>/avatars/*.md` | Reader profile, beliefs to dismantle, desires to activate, language to mirror |
| **Brand Unique Mechanism** | `brands/<brand>/products.md` or brief | The brand's UM that the book will re-articulate as the book's framework |
| **Frontman raw materials** | `brands/<brand>/transcripts/`, `swipe.md` | Pre-existing content (interviews, podcasts, courses, lectures, sales call transcripts) — the foundation of Phase 1 and the Voice Guide |
| **Book objective** | Brief or user input | Authority / thought leadership / lead generation / front-end sales (§6) |
| **Book format** | User input or specialist proposal | One of the 11 formats (§5) |
| **Length target** | User input | Word count or page target (60-page lead magnet vs. 300-page authority book have different architectures) |
| **Brand voice rules** | `brands/<brand>/brand-copy-rules.md` | Starting point for the Voice Guide (§14 — the Voice Guide is more granular) |

If the brand has no codified UM and the awareness level requires one (Product/Solution/Problem Aware), flag the gap and route to the [strategist](skills/strategist.md) before proceeding. A book without a UM in a UM-requiring market becomes a generic info-book that competes on price.

---

# PART B — Strategic foundation

## 4. Core principles

### 4.1 The book is a sales letter architecturally — not on the surface

The single most damaging mistake: writing a 200-page hard pitch. Authority destroyed on contact.

The opposite mistake is equally damaging: writing a 200-page generic info-book with no persuasive spine. The reader closes the book vaguely educated and never converts.

The correct frame: **the book is built with sales-letter architecture but reads with authority register.**

What this means in practice:

- **Architecturally**: every chapter installs one or two beliefs from the chain. Each chapter agitates a problem, introduces a concept that shifts perception, and points toward the brand's mechanism. The book follows the 4-part DR structure (§7 — Problem / Reveal / Demonstration / Action).
- **On the surface**: the book reads as authoritative teaching, never as a pitch. Soft CTA integration (§10), value delivered first, the reader closes the book convinced — not pitched.

When done right, the reader finishes the book and the natural next thought is: *"I need to talk to this person/company"*. Not because they were sold to. Because the chain installed during the read made the brand's solution the only logical next step.

### 4.2 One Idea Per Book

A book has ONE central idea that everything orbits around. If the book covers "how to triple your sales" AND "how to manage your time" AND "how to build a team", it has three weak books inside it instead of one strong one.

Identify the central idea before writing. Test it: every chapter, every example, every framework must trace back to that idea. If something doesn't, cut it or save it for the next book.

### 4.3 Big Idea ↔ Unique Mechanism alignment (the book-specific decision)

The funnel brief provides the brand-level Big Idea and Unique Mechanism. The book specialist's first strategic job is to **derive the book's Big Idea and the book's Unique Mechanism from the brand's ones**.

- **Book's Big Idea**: a provocative one-line thesis that creates a dichotomy (the old way vs. the new way) and that the entire book defends. It MUST be derivable from the brand Big Idea but compressed and sharpened for book format. Test: would a reader who never met the brand finish the book and be able to recite this thesis?
- **Book's Unique Mechanism**: the proprietary system/framework the book teaches. Has a name, is visualizable, has named components. Inherits from the brand UM but is reframed as the book's organizing principle.

The alignment between these two is the book's strategic core. If Big Idea and Mechanism diverge, the book splits into two voices and loses the reader.

This work happens in Phase 1 Pre-production (§18, Step 1.1 Strategic Briefing) and gets locked in the Book Bible (§12).

### 4.4 Angle-first, title-first

Choose the angle and the title BEFORE writing the content. Reverse order — writing content first, then finding a title — produces generic books that read like university textbooks.

The angle is the specific lens through which the central idea is presented. Same idea, different angle = different book.

Example, same brand UM, three angles:
- Angle A: the founder's personal journey from broke to scale
- Angle B: the 11 mistakes that kill 90% of [audience] before milestone X
- Angle C: the system [insider authority] uses to achieve [outcome]

Each angle produces a structurally different book.

The title carries the angle. Title strategy in §9.

### 4.5 What vs. How Split

A critical strategic decision before writing:

- **For info-businesses** (courses, programs, info products): share the **HOW**. The book teaches the methodology. Readers who consume it become educated buyers, easier to convert into the program.
- **For product/service businesses**: share the **WHAT** (problem + solution + framework) and keep the **HOW** as a paid service. The book proves competence; the implementation requires the company.

Getting this split wrong:

- Info-business sharing only WHAT: reader leaves without learning anything, brand seems thin
- Product/service business sharing all the HOW: reader implements alone, no need for the company

Decided in Phase 1, locked in the Book Bible.

### 4.6 Content depth calibration: the 20-euro test

The reader must feel they received more value than the price paid. For a free+shipping book (perceived cost around 10 euro), the value delivered should feel like 50-100 euro. For a paid book (20-30 euro), the value should feel like 150-300 euro.

Test: would a competent reader, after finishing the book, say *"I would have paid double for this"*? If no, the depth is insufficient. If yes (and the WHAT/HOW split is correct), the book is calibrated.

Anti-pattern: writing 200 pages of obvious content padded with stories. The reader notices and authority drops.

### 4.7 Show, never just tell — case studies are mandatory

Every framework introduced in the book must be followed by a case study showing it in action — ideally from the frontman's own operations or documented client work. Pure theory = forgettable. Theory + concrete case = memorable + believable.

Where the frontman lacks personal case studies, use industry case studies or historical examples. **Never fabricate cases.** The Chapter Tracker (§15) preserves which cases were used where to prevent reuse.

### 4.8 The book is a chain-of-beliefs installer

A direct-response book is structurally a long-form chain-of-beliefs installation. Each chapter installs one or two beliefs from [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md). By the time the reader reaches the closing chapter, the chain is installed and the offer at the end is the logical next step.

The Strategist's chain selection in the funnel brief is the book's structural skeleton. The book-specialist re-uses it — does not regenerate it.

---

## 5. The 11 book formats

Taxonomy of 11 formats for direct-response books. Hybridization is possible (a book can combine 2 formats), but the dominant format determines the book's architecture.

| # | Format | What it is | Best for | Example title pattern |
|---|---|---|---|---|
| 1 | **Story collection** | Anthology of cases, stories, episodes; each chapter is a self-contained narrative | Authority building when the frontman has many real cases; brand autobiographies | *"[Number] stories of [transformation]"* |
| 2 | **How-to** | Linear instructional book teaching a methodology step by step | Lead-magnet books for info-businesses; signature methodology books | *"How to [outcome] in [timeframe] using [mechanism]"* |
| 3 | **Month-by-month guide** | One chapter per time unit (month, week, quarter), guiding the reader through a structured journey | Programs with sequential implementation; transformations that require pacing | *"[N] months to [outcome]"* |
| 4 | **X ways to do Y** | List-based book, each chapter one method/technique | When the frontman has multiple validated approaches to the same problem | *"[N] ways to [achieve outcome]"* |
| 5 | **Challenge / Improve yourself** | Reader-as-protagonist: each chapter is a challenge or exercise the reader completes | Identity-driven books; transformations requiring active participation | *"The [N]-day [challenge name]"* |
| 6 | **Expert interviews** | Compilation of interviews with category experts curated by the frontman | Borrowed authority; networking-as-product | *"[N] experts reveal [topic]"* |
| 7 | **FAQ-based** | Each chapter answers a question the avatar actually asks | Problem Aware audiences; reference books | *"The [N] questions [audience] never asks about [topic]"* |
| 8 | **Citations / curated wisdom** | Compilation of quotes, insights, principles from authorities curated and commented by the frontman | Quick-read books; gift books; positioning the frontman as curator-of-wisdom | *"The wisdom of [N] [type] on [topic]"* |
| 9 | **Errors / what NOT to do** | Each chapter one mistake to avoid + why + how to recover | Burned audiences; categories full of failed attempts | *"The [N] mistakes that [bad outcome]"* |
| 10 | **Compilation of writings** | Curated selection of the frontman's existing essays, blog posts, social posts | Backend product for established brands with archive content | *"[Founder name]: collected works on [topic]"* |
| 11 | **Autobiography / Hero's journey** | The founder's transformation arc as the book's spine | Brand origin stories; identity-driven positioning | *"How I [transformation]"* |

### How to choose

**By awareness level**:

- Unaware: Story collection (#1), Autobiography (#11)
- Problem Aware: FAQ-based (#7), Errors (#9), Story collection (#1)
- Solution Aware: How-to (#2), X ways (#4), Month-by-month (#3)
- Product Aware: How-to (#2), Signature methodology (#2 variant), Errors (#9)
- Most Aware: Compilation (#10), Citations (#8)

**By objective** (see §6):

- Authority: Story collection, Expert interviews, Citations
- Thought leadership: Errors, Compilation, Autobiography
- Lead generation: How-to, Challenge, X ways, FAQ
- Front-end sales: How-to, Challenge, Month-by-month

### Hybridization rules

A book can combine 2 formats but never 3+. Common hybrids:

- **How-to + Autobiography**: methodology framed inside the founder's journey
- **Story collection + How-to**: each chapter is a case followed by the extracted principle
- **Errors + How-to**: each mistake chapter ends with the corrective method

Avoid Frankenstein hybrids. Pick a dominant format; let the secondary format support it.

---

## 6. The 4 objective types

Every book has ONE primary objective. The objective determines depth, structure, and CTA architecture.

| # | Objective | What the book does | Length | CTA at the end |
|---|---|---|---|---|
| 1 | **Pure authority** | Establishes the frontman as the category authority. No backend ask. The book IS the asset. | Medium-long (150-300 pages) | Implicit invitation: "you can learn more at [brand site]"; no hard offer |
| 2 | **Thought leadership** | Establishes the brand's worldview, shifts the category conversation. Educates the market into a new frame. | Medium (120-200 pages) | Soft CTA: newsletter signup, community access, free resource |
| 3 | **Lead generation** | Acquires leads. The book is a high-value lead magnet (often free + shipping). | Short-medium (60-150 pages) | Strong CTA: free consultation, low-ticket course, masterclass, follow-up sequence |
| 4 | **Front-end sales** | The book itself is sold (low-ticket: 10-30 euro paid + shipping). Buyer is then upsold to backend. | Short-medium (80-180 pages) | Multi-step CTA: bump offer in checkout, OTO after purchase, follow-up sequence selling backend |

Choose the objective with the Strategist before writing. The objective shapes everything downstream: depth, examples used, CTA design, even title strategy. Lock the objective in the Book Bible (§12).

---

## 7. The 4-part book architecture

Every DR book follows a 4-part macro-structure that maps the persuasion arc from problem-aware to ready-to-act reader. Percentages are total-book percentages; adapt to the specific length target.

| # | Part | Percentage | What it does | Reader state at the end |
|---|---|---|---|---|
| 1 | **The Problem** | 20-25% | Demolish the reader's existing beliefs. Show why what they thought they knew is wrong or incomplete. Create urgency and constructive anxiety. | *"I've been doing this wrong this whole time."* |
| 2 | **The Reveal** | 15-20% | Introduce the Big Idea and the Unique Mechanism. The "Aha!" moment. The brand's framework/system appears as the logical answer to the problems exposed in Part 1. | *"This is the missing piece I was looking for."* |
| 3 | **The Demonstration** | 30-35% | Case studies, proof, data, success stories. Each chapter demonstrates one aspect of the Unique Mechanism in action. Reader moves from "interesting" to "convinced". | *"This actually works. I want this for myself."* |
| 4 | **The Action** | 15-20% | How to implement (enough to understand, not enough to do it alone — applies WHAT/HOW split rules from §4.5). Final call to the next step. Reader feels they have the map but need the guide to walk the territory. | *"I need to take the next step with this brand."* |

### Mapping to chain-of-beliefs

The 4 parts roughly align with installing different ring categories of the chain:

- Part 1 → installs Problem-Aware beliefs (#1-#8)
- Part 2 → installs Solution-Aware beliefs (#9-#17) and introduces brand-level beliefs
- Part 3 → installs Product-Aware beliefs (#18-#24) through proof
- Part 4 → installs the closing beliefs (#25 affordability, #26 mechanism guarantee, B1-B5 brand beliefs) and points to action

The Strategist's chain selection in the funnel brief is the spine. The 4-part structure is how the spine gets distributed across the book.

### Adaptation rules

- For **pure authority books** (objective #1), Part 4 is lighter (no hard CTA), Part 3 expanded (proof-heavy)
- For **lead-magnet books** (objective #3), Part 1 and Part 4 are tighter, Part 2 (the reveal) is the centerpiece because the reader must convert quickly
- For **autobiography format** (format #11), the 4 parts are woven into the founder's chronology rather than separated cleanly

---

## 8. Chapter anatomy + writing rules

### 8.1 Chapter anatomy

Each chapter has a recurring structure. Helps the reader navigate, helps the writer produce, prevents the chapter from collapsing into a wall of text.

| Section | Function | Length per chapter |
|---|---|---|
| **Chapter title + hook** | Promise of the chapter, often a benefit or question | 1 page |
| **Opening anchor** | A story, a statistic, a counterintuitive statement that opens the chapter and sets the tone | 1-2 pages |
| **Core teaching** | The teaching material organized into a logical arc | 8-25 pages depending on chapter depth |
| **Case study / example** | At least one concrete example demonstrating the teaching | 2-4 pages |
| **Practical extraction** | What the reader should DO with this chapter (checklist, exercise, decision tree) | 1-3 pages |
| **Chapter close + bridge** | Summary + open loop into the next chapter (cliffhanger or anticipation) | 1 page |

### 8.2 Writing rules (applied at §19 Step B — chapter writing)

These rules are applied to the drafting of every chapter:

1. **First person**: write as if you are the frontman, not as a third-party narrator
2. **Strong hook opening**: never start with "In this chapter we will see..." — open with a provocative question, a counterintuitive statement, or a micro-story
3. **Problem-first, solution-second**: every section agitates a problem before offering the solution
4. **Natural transitions**: not academic ("Furthermore", "Moreover") but conversational
5. **Story density**: at least one story or anecdote every 1,500 words
6. **Cliffhanger close**: end the chapter with a hook into the next chapter, never a flat summary
7. **Big Idea thread**: keep the central idea visible as the through-line — every section traces back to it
8. **No repetition**: do not repeat concepts already covered in previous chapters (the Chapter Tracker §15 prevents this)
9. **Brand vocabulary**: use the words/expressions from the Book Bible "words to use" list (§12)
10. **Forbidden vocabulary**: never use the words/expressions from the Book Bible "words to never use" list (§12)

These 10 rules are non-negotiable per chapter. They are checked in the per-chapter revision (Phase 2, §19).

### 8.3 Length calibration per book type

| Book type | Target length |
|---|---|
| Free + shipping lead magnet | 80-150 pages (20-40K words) |
| Paid front-end book | 120-200 pages (30-50K words) |
| Authority book | 200-300 pages (50-80K words) |
| Brand autobiography | 180-280 pages (45-70K words) |
| Editorial manual / signature methodology | 250-350 pages (60-100K words) |

### 8.4 Book-level structure: front matter and back matter

Beyond chapters, the book has mandatory front matter and back matter. Both are persuasion territory — not bureaucratic filler.

#### Front matter (mandatory)

| Section | Function | Length |
|---|---|---|
| **Title page** | Title + subtitle + author name | 1 page |
| **Copyright + ISBN** | Legal + identification | 1 page |
| **Table of contents** | Navigation | 2-4 pages |
| **Introduction** | The 5 mandatory elements (see below) | 6-15 pages |

#### Introduction: the 5 mandatory elements

The introduction is where the book either earns the reader's attention or loses it forever. Every introduction must include, in this order:

1. **Who the frontman is and why they have the right to write this book** — credentials anchored to specifics
2. **Why this book exists** — the problem the book solves, the gap in the category the book fills, the frontman's motivation
3. **Who this book is for (and who it is NOT for)** — explicit qualification of the reader; protects both reader and book
4. **What the reader will get** — promise of the transformation, framed as the WHAT (results) not the HOW (mechanics)
5. **How to read this book** — pacing suggestions, chapter dependencies, recommended approach

Without these 5 elements, the introduction reads as filler and the reader skips to chapter 1 unconvinced. The introduction is the most-read section after the title.

#### Back matter (mandatory)

| Section | Function |
|---|---|
| **Closing chapter** | The summary + the primary CTA (§10.4) |
| **About the author** | 1-2 pages, anchored to the brand's credibility assets, follows brand-belief structure (frontman understands, has competence, has track record, cares about the reader) |
| **Resources / links** | Where to go next (brand site, free resources, community) |
| **Acknowledgments** | Recognition; humanizes the frontman |
| **Bibliography / references** | Credibility + invites further reading |

---

## 9. Title and subtitle strategy

### 9.1 The title carries the angle

The title is not a description of the book's content. The title is the angle (§4.4) crystallized into 4-8 words. A great title is impossible to ignore for the target avatar.

### 9.2 The 7 title strategies

| # | Strategy | Pattern | When it works |
|---|---|---|---|
| 1 | **Paradox** | Combines two concepts that seem incompatible | When the brand's mechanism resolves a tension the avatar feels |
| 2 | **Conviction** | A bold, polarizing statement | When the brand is positioned against a status quo the avatar resents |
| 3 | **Unreachable desire** | Names a result the avatar wants but believes is unattainable | When the brand's UM makes the unreachable accessible |
| 4 | **Direct benefit** | States the outcome directly | When the avatar is Product Aware or Most Aware |
| 5 | **Numbers** | Specific quantity ("The 7 X", "The 30-day Y") | When the brand has a codified system with a clear count |
| 6 | **Shock / pattern interrupt** | A word/phrase that breaks expectation in the category | When the category is saturated with safe titles |
| 7 | **Word play** | Pun, double meaning, neologism | When the brand voice is playful or the avatar appreciates wit |

### 9.3 Subtitle as the sales headline

The subtitle is where the title's angle gets explained. While the title is short and evocative, the subtitle is longer and benefit-clear. Think of the subtitle as the headline of a sales page: its job is to convert the curiosity sparked by the title into the decision to open the book.

Pattern: `[Title: short and evocative]: [Subtitle: specific benefit + mechanism + qualifier]`

Subtitle ingredients: who it's for + what outcome + by what method + within what timeframe (when relevant).

### 9.4 Domain check

Before locking the title, check that a sensible domain matching the title is available. If the book has a strong title and the brand can own the matching domain (e.g., `[booktitle].com` or `[author][booktitle].com`), it becomes a permanent funnel asset.

---

## 10. CTA integration inside a book

Books that hard-sell inside the chapters destroy trust. Books that integrate CTAs softly turn readers into leads/buyers without breaking the reading contract.

### 10.1 Soft CTA principles

- **Earned, never imposed**: a CTA appears only after the reader has received value in that section
- **Specific, not generic**: "go to [page] to download the workbook for this chapter" beats "visit our site"
- **Optional, not interruptive**: the reader can skip the CTA and keep reading without losing the book's arc
- **Branded resource, not external link soup**: every CTA points to the brand's ecosystem

### 10.2 Placement patterns

| Placement | What to put there |
|---|---|
| **End of each chapter** | Free resource related to that chapter (worksheet, checklist, audio, video): soft download CTA |
| **Inside chapters (rarely)** | QR code or short URL to a video extension of a specific section |
| **Closing chapter (mandatory)** | Single strong CTA to the brand's primary funnel entry point |
| **Back matter (resources page)** | Curated list of all the brand's resources mentioned in the book |
| **About the author** | Bio + a single closing invitation to engage |

### 10.3 What never works inside a book

- Pop-up style boxes "BUY MY COURSE NOW!" wedged into chapter 3
- Multiple competing CTAs on the same page
- Affiliate links to unrelated products
- Discount codes in the middle of teaching content

### 10.4 The book's primary CTA — the closing chapter

The closing chapter has one job: deliver the closing belief of the chain (often #25/26 from [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md)) and bridge to the brand's primary funnel.

Pattern:

1. **Recap the journey**: what the reader has learned, the transformation they've started
2. **Name the gap**: what the book could NOT cover (because it would require personalization, hands-on work, community, accountability)
3. **Bridge to the next step**: the brand's program/service/community that fills that gap
4. **Soft close**: invitation, not pressure

---

# PART C — The 5 Reference Documents

## 11. Why reference documents matter

The orchestrator writes the book by executing this file inline ([CLAUDE](CLAUDE.md) operating model — single orchestrator, no external chats, no sub-agents). A long-form book cannot be held in working memory across the whole production. Three problems:

1. **Memory saturation**: after 20-25K words of produced text, earlier chapters fade from working context. Repetitions, drift, contradictions follow.
2. **Voice drift**: the tone shifts progressively as the initial voice calibration fades
3. **Lost Big Idea**: the central thread weakens; chapters become disconnected islands

The solution is structural: **the orchestrator should not have to remember — it should re-read.**

The reference documents are **files on disk**, living in `brands/<brand>/books/<book-slug>/`. They are the book's external memory. They are updated as the book progresses (the Chapter Tracker especially). With this system in place, a 60K-word book becomes shippable; without it, the same project collapses around chapter 6.

### The 5 documents (canonical paths)

| # | Document | File | Re-read |
|---|---|---|---|
| 1 | **Book Bible** — strategic spine | `brands/<brand>/books/<book-slug>/book-bible.md` | At the start of every chapter |
| 2 | **Detailed Outline** — chapter-by-chapter map | `brands/<brand>/books/<book-slug>/outline.md` | At the start of every chapter (full doc + the chapter's entry) |
| 3 | **Voice Guide** — how the frontman writes | `brands/<brand>/books/<book-slug>/voice-guide.md` | At the start of every chapter |
| 4 | **Chapter Tracker** — what's been written so far | `brands/<brand>/books/<book-slug>/chapter-tracker.md` | At the start of every chapter; updated after every chapter |
| 5 | **Raw Materials index** — source content mapped per chapter | `brands/<brand>/books/<book-slug>/raw-materials.md` (index; the sources themselves stay in `brands/<brand>/transcripts/` and the brand wiki) | Selectively — only the entries for the chapter in progress |

The Golden Rule: **at the start of each chapter, re-read the 5 reference docs + the chapter's outline entry, then write.** Never write a chapter from memory of the previous ones.

---

## 12. Document 1 — Book Bible (`book-bible.md`)

The most important document. Re-read at the start of EVERY chapter.

**Target length**: 1,500-2,500 words.

### Contents

| Field | What goes here |
|---|---|
| **Title** | The final title |
| **Subtitle** | The subtitle that communicates the promise |
| **Big Idea (1 sentence)** | The book's central thesis, formulated as a provocative assertion |
| **Unique Mechanism** | Name, 3-5 line description, main components, why it's different from everything else |
| **Reader avatar** | Who will read this book? Current situation? Desires? Fears? Objections? (Inherited from `brands/<brand>/avatars/`, compressed for the book.) |
| **Voice and tone** | How the author speaks. Formal/informal? Technical jargon? Dominant emotional register? Include 2-3 sentences as examples of the ideal tone. |
| **Commercial objective** | What must the reader do AFTER finishing the book? (Book a call, buy a course, request a quote, etc.) |
| **Recurring words/expressions** | Proprietary terms, brand metaphors, expressions to use often |
| **Forbidden words/expressions** | Terms never to use (competitors, concepts the author rejects) |
| **Total word target** | The book's target length (e.g., 45,000-55,000 words) |

### When to create it

Phase 1 Pre-production (§18 Step 1.3), after the Strategic Briefing and after the copywriter validates the Big Idea + Unique Mechanism.

### When to update it

Rarely. The Book Bible is the spine — once locked, it stays locked. If the Big Idea or UM changes mid-book, stop production and rebuild from the Bible.

### Template

```markdown
# Book Bible — [Book Title]

## Title
[Final title]

## Subtitle
[Subtitle communicating the promise]

## Big Idea (1 sentence)
[Provocative thesis statement]

## Unique Mechanism
- Name: [Mechanism name]
- Description: [3-5 lines]
- Components: [List of named components]
- Why it's different: [What only this brand offers]

## Reader avatar
- Current situation: [...]
- Primary desire: [...]
- Primary fear: [...]
- Primary objection: [...]

## Voice and tone
- Formality: [Formal/informal scale 1-10, with 1 sentence example]
- Sentence length: [Short/medium/long; staccato/flowing]
- Emotional register: [Dominant emotion the voice carries]
- Sample sentences (3): "...", "...", "..."

## Commercial objective
[What the reader must do after the book]

## Words/expressions to use
- [List]

## Words/expressions to NEVER use
- [List]

## Total word target
[e.g., 45,000-55,000 words]
```

---

## 13. Document 2 — Detailed Outline (`outline.md`)

The book's reasoned index. Not a list of titles — a mini-card per chapter.

**Target length**: 2,000-3,000 words.

### For every chapter, specify

| Field | What goes here |
|---|---|
| **Chapter title** | Final title |
| **Persuasive objective** | What must the reader BELIEVE at the end of this chapter that they didn't believe before? |
| **Key points (3-5)** | The main concepts to cover |
| **Stories/examples to use** | Specific case studies, founder anecdotes, data points |
| **Connection to previous chapter** | How it hooks to the narrative thread |
| **Connection to next chapter** | How it prepares the ground for what comes next |
| **Target length** | Indicative word count |

### When to create it

Phase 1 Pre-production (§18 Step 1.4), after the Book Bible is locked.

### When to update it

Whenever a chapter is significantly restructured during writing. The Outline is the living plan, not a sacred contract.

### Template (per chapter)

```markdown
## Chapter N: [Title]

- **Persuasive objective**: [...]
- **Key points**:
  1. [...]
  2. [...]
  3. [...]
- **Stories/examples**: [...]
- **Connection to previous chapter**: [...]
- **Connection to next chapter**: [...]
- **Target length**: [N] words
```

---

## 14. Document 3 — Voice Guide (`voice-guide.md`)

A document that captures the frontman's voice. Essential when the frontman is not a professional writer.

**Target length**: 800-1,200 words.

### How to build it

The best method: transcribe 30-60 minutes of free-flowing conversation with the frontman about the book's themes. From the transcript, extract:

- Recurring expressions and turns of phrase
- Sentence structure (short sentences? long periods?)
- Level of formality
- Type of humor (if present)
- Cultural references typically used
- How they explain complex concepts (metaphors? concrete examples? data?)
- Verbal tics and fillers

**Note**: client calls are gold for this document. A raw call transcript beats a written questionnaire — when people write, they filter; when they speak, they're authentic.

### When to create it

Phase 1 Pre-production (§18 Step 1.5).

### When to update it

If new transcripts become available mid-book (rare). Otherwise, the Voice Guide stays locked.

### Template

```markdown
# Voice Guide — [Frontman name]

## Formality level
- Scale 1-10: [N]
- Justification: [...]
- Example sentence at this level: "..."

## Sentence rhythm
- Average length: [short/medium/long]
- Pattern: [staccato / flowing / mixed]
- Example: "..."

## Recurring expressions
- [List of 10-15 phrases the frontman uses repeatedly]

## Type of humor
- Present? [yes/no]
- If yes: [self-deprecating / observational / dark / wordplay / other]
- Example: "..."

## How they explain complex concepts
- Default method: [metaphor / concrete example / numerical breakdown / story]
- Example: "..."

## Cultural references
- Domains they reference: [sports / cinema / history / music / other]
- Example references: [...]

## Verbal tics and fillers
- [List of "you know", "basically", "the thing is", etc.]

## 5 sentences that perfectly represent the voice
1. "..."
2. "..."
3. "..."
4. "..."
5. "..."
```

---

## 15. Document 4 — Chapter Tracker (`chapter-tracker.md`)

A document updated chapter by chapter. The "cumulative memory" that lets the next chapter's writing pass know where the book is.

### Structure

For every completed chapter, record:

- Title
- 3-5 line summary (what the chapter says)
- Key concepts introduced
- Characters/case studies used
- Data/statistics cited
- How it ends (last concept or cliffhanger)
- Promises made to the reader that subsequent chapters must keep

### Critical rule

**Update the Chapter Tracker IMMEDIATELY after completing every chapter** (after the chapter has passed its QA — see §19 Step D). This is the document the orchestrator re-reads at the start of the next chapter to know "where we are" without re-reading the whole book.

If you skip an update, the next chapter will be disconnected from the previous one.

### Template (per chapter entry)

```markdown
## Chapter N: [Title] — Status: ✅ Completed

- **Summary**: [3-5 lines]
- **Key concepts introduced**: [list]
- **Cases/people used**: [list]
- **Data/statistics cited**: [list with source]
- **Ending**: [last concept or cliffhanger]
- **Promises to the reader**: [things the next chapters must address]
```

---

## 16. Document 5 — Raw Materials index (`raw-materials.md` — optional but powerful)

An index that maps each chapter to the raw material it draws on. The sources themselves stay where they live in the brand wiki:

- Call/interview transcripts (`brands/<brand>/transcripts/`)
- Articles or blog posts by the author
- Existing training material
- FAQ or recurring objections from the frontman's clients
- Screenshots of reviews/testimonials (`brands/<brand>/testimonials.md`)

### Reading rule

These materials must NOT be read all together. The index sections them chapter by chapter; at writing time, read only the entries relevant to the chapter in progress.

Reading everything in one pass saturates working context with irrelevant material and degrades the output.

### Organization

```
brands/<brand>/transcripts/
├── call-2026-01-15-strategy.md
├── podcast-episode-23-myth-busting.md
├── workshop-2026-02-04-mechanism-deep-dive.md
└── ...
```

The index entry per chapter: `Chapter 4 — [topic X]: read call-2026-01-15-strategy.md (section on X), testimonials rows #3, #7`. When writing chapter 4 on topic X, read only the sources the index lists for it.

---

# PART D — Operational workflow

## 17. The 3 phases overview

| Phase | Goal | Effort estimate |
|---|---|---|
| **Phase 1 — Pre-production** | Create all 5 reference documents and validate strategy | 2-4 working passes + 1-2 copywriter validation rounds |
| **Phase 2 — Production** | Write the book one chapter at a time (one writing pass per chapter, each starting from a re-read of the 5 docs) | N chapters × 1 pass (with max 2-3 revision rounds each) |
| **Phase 3 — Post-production** | Consistency check, polish, opening/closing review | 3-5 working passes |

A 50K-word book on this system: 2 weeks intensive or 4-6 weeks paced.

---

## 18. Phase 1 — Pre-production

**Goal**: have all 5 reference documents (the files defined in §11-§16) ready before a single chapter is written. Mistakes in Phase 1 propagate through the whole book. The orchestrator executes each step inline, reading the named files — there are no external conversations.

### Step 1.1 — Strategic Briefing

Read all available material on the brand: the funnel brief, `brands/<brand>/brand.md`, `brands/<brand>/transcripts/`, existing materials. Then produce:

1. THREE Big Idea proposals (each formulated as a provocative one-line assertion)
2. For each Big Idea, the corresponding Unique Mechanism (name + 3-line description)
3. The ideal reader avatar (compressed from `brands/<brand>/avatars/` — current situation, primary desire, primary fear, primary objection)
4. The commercial objective the book must achieve

Framing discipline (per §4.1): a direct-response book is not a teaching manual — it is **built with sales-letter architecture but reads with authority register**. Every element serves the persuasion arc, while the surface stays authoritative teaching, never a pitch.

### Step 1.2 — Copywriter validation

Present the 3 options to the copywriter. The copywriter picks one or hybridizes the direction; refine until the Big Idea + Unique Mechanism are validated.

### Step 1.3 — Book Bible compilation (`book-bible.md`)

Compile the Book Bible per the §12 template, including title + subtitle. **Title/subtitle trigger**: apply the §9 strategy and read [headline-specialist](section-specialists/headline-specialist.md) for the craft — the subtitle is the book's sales headline (§9.3). Run the §9.4 domain check before locking.

### Step 1.4 — Detailed Outline creation (`outline.md`)

Reading the locked Book Bible, produce the outline. For EACH chapter specify:

- (a) Title
- (b) Persuasive objective: what must the reader BELIEVE at the end that they didn't believe before?
- (c) 3-5 key points
- (d) Specific stories/examples to use
- (e) How it hooks to the previous chapter
- (f) How it prepares the next chapter
- (g) Target length in words

Reference structure: the 4-part DR book architecture (§7) — Part 1 The Problem (20-25%), Part 2 The Reveal (15-20%), Part 3 The Demonstration (30-35%), Part 4 The Action (15-20%). Distribute the total word target accordingly.

### Step 1.5 — Voice Guide creation (`voice-guide.md`)

If frontman transcripts are available (`brands/<brand>/transcripts/`), analyze them and extract the Voice Guide per the §14 template:

1. Formality level (scale 1-10, with examples)
2. Average sentence length and rhythm
3. Recurring expressions and turns of phrase (list)
4. Type of humor (if present)
5. How they explain complex concepts (metaphors? concrete examples? data?)
6. Typical cultural references
7. Verbal tics and fillers
8. 5 example sentences that perfectly represent their tone

### Step 1.6 — Tracker + Raw Materials index

Create `chapter-tracker.md` (empty, ready to be filled per the §15 template) and `raw-materials.md` (sources mapped per chapter, per §16).

### Step 1.7 — Lock the 5 documents

At the end of Phase 1, `brands/<brand>/books/<book-slug>/` must contain:

- ✅ `book-bible.md` (validated by the copywriter)
- ✅ `outline.md` (validated by the copywriter)
- ✅ `voice-guide.md`
- ✅ `chapter-tracker.md` (created empty, ready to be filled)
- ✅ `raw-materials.md` (sources organized by chapter)

If any of these is missing, do NOT start Phase 2.

---

## 19. Phase 2 — Production

This is where the book gets written, one chapter at a time. EVERY chapter follows the same protocol — the orchestrator executes it inline.

### Per-chapter protocol

**Step A — Re-read the reference documents (pre-writing)**

At the start of EVERY chapter, always re-read:

0. [feedback-rules](core/feedback-rules.md) (global rules) + `brands/<brand>/brand-copy-rules.md` (brand rules — they override global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d).
1. `book-bible.md`
2. `outline.md` — the full map + this chapter's entry
3. `chapter-tracker.md` (updated through the previous chapter)
4. `voice-guide.md`
5. The chapter-specific raw materials only (per the `raw-materials.md` index — relevant transcripts, data)

**Emotional gate** — for emotion-led chapters (problem dramatization in Part 1, future pacing in Part 4, emotionally charged chapter hooks), read [emotional-intelligence](core/writing/emotional-intelligence.md): (a) MANDATORY when the brief's touchpoint block names Emotional anchors — read those entries only; (b) if the brief names no anchors and the chapter includes emotionally-led moments, consult the relevant entries anyway (max 3 per chapter) and flag the missing anchors to the copywriter as a brief gap.

**Step B — Write the chapter**

Write as the ghostwriter of the frontman, in the exact style described in `voice-guide.md`.

- **Global context** (from `book-bible.md`): title, Big Idea, Unique Mechanism, target reader
- **Where we are** (from `chapter-tracker.md`): chapters written so far, promises still open
- **Chapter card** (from `outline.md`): title, persuasive objective, key points, stories/examples, connection to previous/next chapter, target length

Apply the 10 writing rules of §8.2 (first person; strong hook opening; problem-first; natural transitions; story density; cliffhanger close; Big Idea thread; no repetition — check the tracker; Book Bible vocabulary; forbidden vocabulary).

**Section-specialist triggers** (read inline at the relevant beat):

- **Chapter hook / opening line** → [hook-specialist](section-specialists/hook-specialist.md) for the hook craft (writing rule 2)
- **Soft CTA at chapter end or in the closing chapter** → [offer-specialist](section-specialists/offer-specialist.md) in compressed form, within the §10 soft-CTA principles
- **FAQ-based books (format #7) or objection-handling chapters** → [faq-specialist](section-specialists/faq-specialist.md) for question generation + answer patterns

*Handling long chapters (5,000+ words)*: draft in two passes — first half up to a named outline point, then continue from that point to the end, keeping the same tone and rhythm. Do NOT rewrite the first half; only continue.

**Step C — Review and iteration**

Re-read the output and revise. Maximum 2-3 revision rounds per chapter; then move on.

**Step D — Per-chapter QA, then update the tracker**

Run [writing-principles](core/writing/writing-principles.md) Fase 3-5 (+ Fase 4d feedback-rules scan) on the chapter BEFORE updating the tracker. Only when the chapter passes: update `chapter-tracker.md` with the chapter's full entry (§15 template). This is non-negotiable. Skipping a tracker update breaks the cumulative memory and the next chapter loses cohesion.

**Step E — Next chapter**

Start again from Step A: re-read the 5 reference docs + the next chapter's outline entry, then write. Never carry the previous chapter forward from memory.

### Language note

The workflow and this file are in English (consistent with the wiki). The book itself is written in the brand's market language per `brands/<brand>/brand-copy-rules.md`.

---

## 20. Phase 3 — Post-production

Once all chapters are completed, a global pass for cleanup and consistency.

### Step 3.1 — Consistency Check

Re-read `book-bible.md` and the complete `chapter-tracker.md` (fresh pass — do not rely on memory of the production phase). Identify:

1. Concepts repeated across multiple chapters (specify which)
2. Inconsistencies between chapters (data, claims, stories that contradict)
3. Promises made to the reader and never kept
4. Narrative gaps (missing logical transitions between chapters)
5. Chapters that don't contribute to the central Big Idea
6. The overall persuasive flow: does the reader arrive at the final CTA logically and inevitably?

For every problem found, note the specific fix and surface the list to the copywriter.

### Step 3.2 — Chapter-by-chapter Polish

For every chapter that needs revision, re-read `book-bible.md` + the specific chapter + the notes from the consistency check. Then:

- Rewrite ONLY the parts that need fixing. Do not rewrite the entire chapter. Keep everything that works.
- For every modification, indicate to the copywriter: what changed and why.

### Step 3.3 — Final Review: Openings and Closings

The last check is the first and last 200 words of every chapter. These are the most critical points for the book's rhythm. For each chapter analyze:

**Opening**:
- Does it have a powerful hook?
- Does it capture attention in the first 30 seconds?
- Does it connect to the previous chapter?

**Closing**:
- Does it create tension toward the next chapter?
- Does it leave the reader with a strong emotion or insight?
- Does it have a cliffhanger or an open question?

For every weak opening/closing, rewrite an improved version.

---

## 21. Managing context across a book-length project

### The Golden Rule

**At the start of each chapter: re-read the 5 reference docs + the chapter's outline entry, then write.** One chapter per writing pass (maximum two short ones). Never write the next chapter from memory of the previous ones.

### Discipline rules

- **Re-read, don't remember**: the reference docs on disk are the book's memory. Working memory of earlier chapters is unreliable past ~20-25K words of produced text — repetitions, voice drift, and a weakening Big Idea thread are the predictable failure modes (§11).
- **Tracker first**: never start a chapter if `chapter-tracker.md` is not updated through the previous one.
- **Selective raw materials**: read only the sources the `raw-materials.md` index lists for the chapter in progress — reading everything degrades the output (§16).
- **Voice re-anchor**: if voice drift is detected mid-chapter, re-read `voice-guide.md` + the last 300 words of the previous chapter before continuing.

### Why this matters

Without this discipline, a book of 50K+ words becomes unwriteable. The 5-document system + the "re-read before every chapter" rule is what makes long-form book production actually shippable inside the single-orchestrator model.

---

# PART E — Quality control & references

## 22. Common pitfalls

| # | Pitfall | What goes wrong | How to avoid |
|---|---|---|---|
| 1 | **Book-as-hard-pitch** | The book sells aggressively in every chapter. Authority destroyed. | Sales-letter architecture, authority register on the surface. Apply §4.1 + §10. |
| 2 | **Multi-idea book** | Three weak books crammed into one. | Lock the central idea in the Book Bible before Phase 1. Cut anything that doesn't trace back. |
| 3 | **No angle / generic content** | Reads like a textbook. | Choose the angle BEFORE writing (§4.4). The title carries the angle (§9.1). |
| 4 | **WHAT/HOW miscalibration** | Either too thin or too generous. | Decide the split in Phase 1 based on business model (§4.5). |
| 5 | **Skip the 5 reference documents** | "Let's just start writing and see." Recipe for chaos. | The 5 documents are non-negotiable. Phase 1 cannot be skipped. |
| 6 | **Skip the Chapter Tracker update** | Next chapter disconnected from previous. | Update IMMEDIATELY after every chapter (post-QA, §19 Step D), before starting the next one. |
| 7 | **Writing straight through without re-reading the reference docs** | Past ~20K words of produced text, drift and repetitions creep in. | Re-read the 5 docs at the start of EVERY chapter (§21 Golden Rule). Always. |
| 8 | **Read all Raw Materials at once** | Working context saturated with irrelevant content. | Section the materials per chapter via `raw-materials.md`. Read only what's relevant. |
| 9 | **No central chain of beliefs** | Chapters disconnect. Reader exits without belief shift. | Use the funnel brief's chain as the book's spine. Each chapter installs assigned beliefs. |
| 10 | **Format Frankenstein** | 3+ formats mixed. Reader can't predict. | One dominant format. One secondary format max. |
| 11 | **Title describes content** | Title is a label, not a hook. Book doesn't get picked up. | Title carries the angle (§9.1). Subtitle as sales headline (§9.3). |
| 12 | **Hard CTA in chapter 3** | Trust collapses. | Soft CTAs only. Hard CTA only in closing chapter (§10). |
| 13 | **Multiple competing CTAs in closing chapter** | Reader picks none. | ONE primary CTA in closing chapter. |
| 14 | **Generic introduction** | Doesn't earn the read. | 5 mandatory elements (who/why/for-whom/what/how-to-read). Introduction is the most-read section after the title. |
| 15 | **No qualification of who the book is NOT for** | Wrong reader gets to chapter 8 angry. | Explicit "this is NOT for you if..." in the introduction. |
| 16 | **No bridge between chapters** | Each chapter a silo. | Chapter close + bridge at the end of every chapter (§8.1). |
| 17 | **Frontman invented things** | Cases, dates, scenes, numbers not real. | Never invent. Use real materials. If gaps, use industry examples and label them as such. |
| 18 | **Accept the first draft without revision** | First draft is starting point, never finished product. | Max 2-3 revision rounds per chapter. Then move on. |
| 19 | **Tone drift across chapters** | Voice changes progressively. | `voice-guide.md` re-read at EVERY chapter. If drift detected, re-read the last 300 words of the previous chapter for tone calibration. |

---

## 23. Consolidated checklist

The single checklist for every book project — operational gates per phase + delivery-level revision. (Replaces the former separate operational and revision checklists.)

### Phase 1 — Pre-production (gate to Phase 2)

- [ ] Call with the frontman/client recorded and transcribed
- [ ] Big Idea, Unique Mechanism and final CTA approved by the copywriter; **central idea** identifiable in one sentence
- [ ] **Angle** locked; **title + subtitle** carry it ([headline-specialist](section-specialists/headline-specialist.md) craft applied, §18 Step 1.3); domain checked
- [ ] **Format** is one of the 11 (or a clean 2-format hybrid, no Frankenstein); **objective** is one of the 4 and matches the funnel position
- [ ] **WHAT/HOW split** decided for the business model (§4.5)
- [ ] `book-bible.md` compiled (all 10 fields) and validated
- [ ] `outline.md` with per-chapter card, 4-part distribution
- [ ] `voice-guide.md` extracted from transcripts (5 sample sentences capture the voice)
- [ ] `chapter-tracker.md` created (empty, ready to fill)
- [ ] `raw-materials.md` index organized per chapter

### Phase 2 — Per chapter

- [ ] feedback-rules (global + brand) + brand-copy-rules re-read (§19 Step A.0)
- [ ] 5 reference docs + this chapter's outline entry re-read
- [ ] Chapter-specific raw materials read (only those)
- [ ] Chapter follows the §8.1 anatomy + the §8.2 ten rules
- [ ] Section-specialist triggers honored where applicable (chapter hook → hook-specialist; soft CTA → offer-specialist; FAQ/objection chapters → faq-specialist)
- [ ] Output reviewed (max 2-3 rounds)
- [ ] writing-principles Fase 3-5 (+ Fase 4d feedback-rules scan) run on the chapter
- [ ] `chapter-tracker.md` updated BEFORE starting the next chapter

### Phase 3 — Post-production / manuscript delivery

- [ ] Consistency Check executed (§20 Step 3.1); fixes applied chapter by chapter (Step 3.2); openings and closings reviewed (Step 3.3)
- [ ] **4-part architecture** respected (Problem 20-25% / Reveal 15-20% / Demonstration 30-35% / Action 15-20%)
- [ ] **Chain of beliefs** installed across the chapters; every chapter traces back to the central idea
- [ ] **Every framework** illustrated with at least one case or example; **no invented facts** (every case, date, number, name from the brand's real materials)
- [ ] **Voice** consistent throughout, matching `voice-guide.md`; **length** calibrated to objective and audience expectation
- [ ] **Introduction** has the 5 mandatory elements (§8.4); **CTAs** soft, earned, specific, optional — no hard-sell in chapters 1-N; **closing chapter** has ONE primary CTA pointing to the brand's funnel entry
- [ ] **About the author** follows brand-belief structure; **back matter** complete (resources, acknowledgments, bibliography if applicable)
- [ ] **Tier 1 zero-tolerance** checks from [writing-principles](core/writing/writing-principles.md): zero em-dash in delivered copy, zero rigid parallel triads, zero negation-affirmation; **Tier 2 calibrated** patterns checked
- [ ] **feedback-rules (global + brand) re-scanned on the final manuscript — no rule violated**
- [ ] **Read-aloud check** on at least the introduction and the closing chapter
- [ ] Full final read (human); copywriter/client approval

---

## 24. Tips & tricks

### 24.1 Getting longer outputs

Long-form generation tends to compress. For chapters of 3,000-5,000 words:

- **Always fix the target length before drafting**: the chapter card in `outline.md` carries the word target — honor it, do not compress.
- **Expand with specific details**: extend examples with sensory detail and dialogue where the draft runs thin.
- **Divide into sections**: draft the first half up to a named outline point, then continue (§19 Step B).
- **Provide abundant material**: more raw material read (per the §16 index) = longer, more detailed output.

### 24.2 Keeping the tone consistent

Voice drift is the #1 enemy of long books. Countermeasures:

- **Always include 2-3 sample sentences in the Voice Guide**: the output calibrates on concrete examples, not on abstract descriptions of tone.
- **Explicit tone correction**: if tone shifts toward formal/academic, return to the conversational register of `voice-guide.md` and rewrite the drifted paragraphs.
- **Re-read the last paragraph of the previous chapter**: at the start of every chapter, in addition to the standard documents, re-read the previous chapter's last 300 words to recover the fresh "flavor" of the tone.

### 24.3 Stories and case studies

- [story-telling-specialist](section-specialists/story-telling-specialist.md) — per i book narrativi (brand autobiography, origin story, hero arc) leggilo per struttura, arco e voce del racconto.

Stories are the heart of a book that converts. Rules:

- **Always work from real facts**: never invent case studies. Take the data from the raw materials and narrativize it.
- **Structure PROBLEM → ATTEMPT → FAILURE → DISCOVERY → RESULT**: every story should follow this arc.
- **Sensory detail**: add what the protagonist saw, heard, felt — vividness is what makes stories land.

### 24.4 Errors to avoid

- **NEVER write multiple chapters back-to-back without re-reading the reference docs.** Past 15-20K words of continuous output, quality crashes inevitably.
- **NEVER skip the creation of reference documents.** "Let's just start writing and see" is the recipe for disaster.
- **NEVER forget to update the Chapter Tracker.** Skip one update and the next chapter will be disconnected.
- **NEVER read ALL raw materials in one pass.** Saturating working context with irrelevant material worsens the output.
- **NEVER accept the first draft without revision.** First draft is ALWAYS the starting point, never the finished product.

---

## 25. Cross-references

### Knowledge base (core/)

- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md): the book's spine; chapters install assigned beliefs
- [awareness-levels](core/strategic-frameworks/awareness-levels.md): calibrates format selection (§5) and depth (§4.6)
- [unique-mechanism](core/strategic-frameworks/unique-mechanism.md): the book teaches or positions the UM (Book UM is derived from brand UM in §4.3)
- [big-idea](core/strategic-frameworks/big-idea.md): the book's Big Idea is derived from the campaign Big Idea (§4.3)
- [proof-elements](core/strategic-frameworks/proof-elements.md): cases, testimonials, data used in Part 3 (Demonstration)
- [naming](core/strategic-frameworks/naming.md): title and subtitle naming conventions; book-as-product naming
- [funnel-architecture](core/strategic-frameworks/funnel-architecture.md): where the book sits in the funnel
- [writing-principles](core/writing/writing-principles.md): anti-AI patterns, voice rules; Fase 3-5 (+ Fase 4d feedback-rules scan) run per chapter at §19 Step D
- [feedback-rules](core/feedback-rules.md): global user rules; read at §19 Step A.0 with `brand-copy-rules.md` (brand overrides global), re-scanned at QA (writing-principles Fase 4d)
- [emotional-intelligence](core/writing/emotional-intelligence.md): gated read, two branches (see §19 Step A) — mandatory when the brief names Emotional anchors (read those entries only); consulted anyway (max 3 entries per chapter) for emotion-led chapters when it doesn't, flagging the gap
- [funnel-brief](core/strategic-frameworks/funnel-brief.md): inherits avatar, awareness, brand chain, brand UM, brand Big Idea — book-specialist does NOT re-derive these

### Orchestration

- [CLAUDE](CLAUDE.md): orchestrator
- [strategist](skills/strategist.md): produces the funnel brief, decides the book's role in the funnel

### Sibling format specialists

- [lp-specialist](format-specialists/lp-specialist.md): writes the sales page that sells the book
- [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md): writes the VSL that sells the book
- [advertorial-specialist](format-specialists/advertorial-specialist.md): writes the advertorial that drives traffic to the book funnel
- [email-specialist](format-specialists/email-specialist.md): writes the email sequence that nurtures readers post-book
- [upsell-specialist](format-specialists/upsell-specialist.md): writes the upsell after book purchase (when book is front-end)

### Section specialists (consumed by book-specialist — each has a declared workflow trigger)

- [hook-specialist](section-specialists/hook-specialist.md): chapter hooks, chapter-opening lines — triggered at §19 Step B (writing rule 2)
- [headline-specialist](section-specialists/headline-specialist.md): title + subtitle craft; chapter titles — triggered at §18 Step 1.3 (Book Bible title/subtitle)
- [offer-specialist](section-specialists/offer-specialist.md): soft CTAs and the closing-chapter CTA — triggered at §19 Step B and §10
- [faq-specialist](section-specialists/faq-specialist.md): FAQ-format books (format #7) and objection-handling chapters — triggered at §19 Step B

### Brand-level files

- `brands/<brand>/brand.md`: frontman + brand identity
- `brands/<brand>/brand-copy-rules.md`: starting point for the Voice Guide (Voice Guide is more granular for book-length writing)
- `brands/<brand>/products.md`: products + brand UM the book teaches/positions
- `brands/<brand>/avatars/*.md`: reader profile inherited (not re-derived)
- `brands/<brand>/transcripts/`: raw material for the Voice Guide + Raw Materials (Document 5)
- `brands/<brand>/swipe.md`: pattern reference for similar books in the brand's archive
- `brands/<brand>/testimonials.md`: case studies + transformations to embed in Part 3 chapters
