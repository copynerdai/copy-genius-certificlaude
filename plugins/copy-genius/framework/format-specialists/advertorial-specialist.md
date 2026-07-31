# Advertorial Specialist — Format Specialist

> Full-piece format specialist. Writes advertorials — paid pieces that look editorial. Two variants under one roof: **native ads** (online, on Taboola / Outbrain / Yahoo Gemini / Facebook native) and **print advertorials** (offline, on prestigious magazines such as Forbes, Fortune, Millionaire). Same principles, different surfaces.
>
> Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) when intent recognition matches advertorial / native-ad writing. Reads the funnel brief, the brand wiki, the universal writing libraries, and the component specialists relevant to each section it writes — never reinvents what's documented elsewhere.
>
> **Self-contained file**: this specialist holds the advertorial-specific knowledge base (anatomy, the two canonical formulas, image rules, layout conventions, offline-specific tuning) and the operational workflow. For the craft of individual components (hook, headline, lead, mechanism, bullets, offer block, FAQ), it references the corresponding component specialists — supplying only the advertorial-specific execution tuning. The structure of each piece comes from the funnel brief; this file teaches *how* to execute that structure as an advertorial.

---

## 0. Execution path — read this first

> Always read before writing: funnel brief touchpoint block · brand-copy-rules · feedback-rules (brand overrides global).
> **Structure selection (Mode 1 step 5)**: before planning, the orchestrator queries the [swipe-index](swipe/index.md) for matching structures — if a SKELETON (or composition) was chosen, it is the piece plan's structural spine; adapt it to the brief, never the reverse. If none chosen, plan from this file's own models.
> Tier 1 style bans apply while DRAFTING, not only at QA (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.", no banned phrases.
> Writing invocation: brief → pre-writing reads (§3 inputs + §9 Phase 1; for print also 3-5 real editorial articles from the target magazine) → §8 variant/formula/goal selection → §9 application protocol (the Phase 2 writing sequence in §10 carries its own inline verifications — run them as written) → §10 output formats → §12 revision checklist (QA — the canonical home of the 3-Yes / in-line links / no-offer-reveal checks).
> Reference sections — consult on demand only: Part B taxonomies (§4 principles, §5 anatomy, §6 conventions, §7 formulas — open the entries the piece needs, not the whole catalog) and the appendices (A1 swipe case studies, A2 tools, A3 the 40-40-20 rule).

---

## Quick navigation

### Part A — Identity & scope
- §1 [Purpose](#1-purpose)
- §2 [When invoked](#2-when-invoked)
- §3 [Required inputs](#3-required-inputs)

### Part B — Format expertise
- §4 [Core principles](#4-core-principles)
- §5 [Anatomy & components](#5-anatomy--components)
- §6 [Format-specific conventions](#6-format-specific-conventions)
- §7 [Compositional patterns — the 2 canonical formulas + print variant](#7-compositional-patterns--the-2-canonical-formulas--print-variant)

### Part C — Operational workflow
- §8 [Selecting variant, formula, and goal](#8-selecting-variant-formula-and-goal)
- §9 [Application protocol — advertorial-specific notes](#9-application-protocol--advertorial-specific-notes)
- §10 [Output formats](#10-output-formats)

### Part D — Quality control & references
- §11 [Common pitfalls](#11-common-pitfalls)
- §12 [Revision checklist](#12-revision-checklist)
- §13 [Cross-references](#13-cross-references)

### Appendix
- §A1 [Swipe library — 2 annotated case studies](#a1-swipe-library--2-annotated-case-studies)
- §A2 [Resources & tools](#a2-resources--tools)
- §A3 [The 40-40-20 rule](#a3-the-40-40-20-rule)

---

# PART A — Identity & scope

## 1. Purpose

Produce ready-to-deploy advertorial copy for:

- **Native ads (online)** — paid articles placed on third-party content platforms (Taboola, Outbrain, Yahoo Gemini) or on social (Facebook native), that look and read like editorial content native to the host platform
- **Print advertorials (offline)** — paid articles published in prestigious magazines (Forbes, Fortune, Millionaire, Harvard Business Review) that mimic the magazine's editorial style
- **Section copy for any of the above** — when the brief specifies a partial scope (e.g., "rewrite the opening", "draft the body around the bifocal tease", "redo the CTA bridge")

Does NOT produce:

- Hooks / leads in isolation — handled by [hook-specialist](section-specialists/hook-specialist.md), unless none is supplied in the brief and the specialist drafts placeholders for the opening
- Headlines in isolation — handled by [headline-specialist](section-specialists/headline-specialist.md), unless none are supplied
- Bullet points (catalog / curiosity / page-reference) — handled by [bullet-point-specialist](section-specialists/bullet-point-specialist.md), unless the brief gives no bullets
- The funnel brief or strategic decisions — handled by [strategist](skills/strategist.md)
- The landing page that the advertorial links to — handled by [lp-specialist](format-specialists/lp-specialist.md)
- The paid traffic targeting / placement strategy — design and media-buy decisions live outside the writing scope (the specialist surfaces conventions, never decides budgets)
- Image production — the specialist writes `[IMAGE NOTE:]` directions for the designer; it never generates images

The specialist is the **executor**, not the strategist. Strategic decisions (awareness, sophistication, Big Idea, offer composition, chain of beliefs) come from the brief. The specialist translates those decisions into an advertorial that camouflages perfectly as editorial content while still installing every belief the brief specifies.

---

## 2. When invoked

The orchestrator routes to advertorial-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches:

- "write the advertorial", "draft the advertorial", "write the article"
- "write the native ad", "draft the native", "build a native ad"
- "write an editorial piece for [magazine]"
- "redo the opening", "rewrite the body"
- "draft an advertorial for [offer]", "build a Forbes-style article", "write a print advertorial"

The orchestrator runs the **Brief readiness check** ([CLAUDE §6](CLAUDE.md)) before invoking. If the brief is Draft / In-Review / missing for this touchpoint, the orchestrator surfaces the gap before calling advertorial-specialist.

---

## 3. Required inputs

The specialist needs these to start. Missing critical inputs are escalated to the orchestrator.

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md) of the specific funnel):

- §3.2 Mass Desire — the dominant desire calibration (advertorial often runs on the *promise* side: it teaches something the prospect is eager to discover)
- §3.3 Awareness Level — primary calibrator. Advertorials excel at **generating new demand** in Unaware and Problem Aware segments. Most Aware advertorials are rare — when awareness is high, the advertorial loses its reason to exist (the prospect already wants the product, no need to camouflage).
- §3.4 Sophistication — calibrates which of the 4 content types lands best (common mistakes, lists, case studies, how-to)
- §3.5 Avatar reference — voice anchors, blocking beliefs, lived-experience details, the specific pains to surface in the Personal Struggle section
- §3.6 Offer — full 7-component offer (the advertorial does NOT sell the offer directly; it pre-sells the *next step* — clicking through to the LP or VSL where the offer lives)
- §3.7 Big Idea — the editorial angle. For advertorial, the Big Idea must double as an *editorial hook* — i.e., it must justify the article's existence as content, not just as marketing.
- §3.8 Chain of Beliefs — the rings the advertorial installs (typically Rings 1-2-3 for Problem Aware; full chain for Unaware long-form on prestigious magazines for authority-building)
- §3.9 Proof inventory — testimonials, data, studies, authority cites. Critical for the Ethos-Pathos-Logos requirement (§4.7 of this file).
- §3.10 Reference pointers — which testimonials, transcripts, swipe rows to pull
- §4.2 / §4.3 Touchpoint block for this advertorial — section sequence + belief mapping + length target + variant (native online vs print)

**From the brand wiki**:

- `brands/<brand>/brand-copy-rules.md` — voice (mandatory). For print, voice must also be calibrated to the magazine's editorial register — see §6.14.
- `brands/<brand>/swipe.md` — brand-specific advertorial examples for voice calibration; the 2 case studies in §A1 are a generic reference
- `brands/<brand>/offers.md` — the specific offer's full composition (the advertorial alludes to the offer, never reveals it in full)
- `brands/<brand>/testimonials.md` — proof rows for inline credibility
- `brands/<brand>/transcripts/` — founder anecdotes, customer stories, original quotes for the editorial tone

**From the cross-specialist writing libraries** (read once during pre-writing):

- [writing-principles](core/writing/writing-principles.md) — read SECTION C (Drafting methods) **before drafting** if the piece is long-form (typically over 1,500 words). Read SECTION A (principles) + SECTION B (anti-AI patterns) **post-draft** as Phase 3-4 refinement.
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — the strategic levers this piece activates. For advertorial, **Camouflage** is the dominant technique; **Gradualization** carries the body; **Mechanization** carries the solution reveal.
- Read [emotional-intelligence](core/writing/emotional-intelligence.md): (a) MANDATORY when the brief's touchpoint block names Emotional anchors — read those entries only; (b) if the brief names no anchors and the piece includes emotionally-led moments (problem dramatization, hook, future pacing), consult the relevant entries anyway (max 3 per piece) and flag the missing anchors to the copywriter as a brief gap. Note: the Personal Struggle lead (§5.3) is an emotionally-led moment by design — most advertorials qualify under branch (b) even when the brief is silent.

**From the component specialists** (read each one when writing its corresponding advertorial section — see §5):

- [headline-specialist](section-specialists/headline-specialist.md) — for the editorial-style headline (§5.1). Advertorials use one of two patterns: **How-To** or **Case-Study** (the latter is the How-To on steroids — see §5.1).
- [hook-specialist](section-specialists/hook-specialist.md) — for the opening hook (§5.1) — the very first line that pulls the reader into the article voice
- [lead-specialist](section-specialists/lead-specialist.md) — for the Personal Struggle section (§5.3)
- [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — for the mechanism / solution reveal (§5.5)
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — for bullet lists (§5.7)
- [offer-specialist](section-specialists/offer-specialist.md) — for the offer block (§5.8) — note: in advertorial the offer is *alluded to*, not fully revealed. Read for the principles, then dial back to "tease + link to LP".
- [faq-specialist](section-specialists/faq-specialist.md) — rarely used in advertorial; only when piece runs very long (3,000+ words) and explicit objection-handling is needed before the bridge to the LP

**From the copywriter (the request)**:

- Variant: **native online** vs **print advertorial** (if not specified in the brief)
- Formula: **#1** (info-products, software, courses, memberships) vs **#2** (physical products, services, commodities)
- Goal: **lead generation** vs **direct sale** vs **authority building** (the latter is print-specific)
- Placement / host platform (Taboola / Outbrain / Yahoo Gemini / Facebook / specific magazine name)
- Length target (if not specified)
- Any user-provided swipe (takes priority over generic conventions)

---

# PART B — Format expertise

## 4. Core principles

### 4.1 — The Camouflage Principle ("more hidden = better it works")

The advertorial is paid content that **does not look paid**. It mimics the host platform's editorial template — same fonts, same paragraph rhythm, same sidebar layout, same byline conventions. The reader must approach it as content, not as advertising.

This is not a stylistic choice — it is the **core mechanism of persuasion**. The moment the reader recognizes "this is an ad", the defenses go up and the click-through rate collapses.

**Diagnostic question for any layout / paragraph choice**: *"If I were a reader scrolling through this magazine / feed, would this jump out as an ad?"* If yes, the camouflage is broken — fix it before publishing.

### 4.2 — Pre-Suasion (Cialdini) — "the prospect discovers you, not vice versa"

A standard ad interrupts the reader: *"Stop what you were doing, look at my product."* The advertorial inverts this: *the reader, in a state of curiosity, finds an article that happens to be exactly what they were looking for.* The advertorial does not feel inflicted — it feels discovered.

The implication for writing: **never break the editorial illusion with a sales register**. No "buy now", no "limited time offer", no exclamation marks chained three at a time. The reader who feels in control will keep reading. The reader who feels sold-to will bounce.

### 4.3 — Pre-Sell the Next Step (never sell the product — advance the funnel)

The advertorial does NOT sell the product. It sells **the next click**: the click to the landing page, the click to the opt-in pop-up, the click to the VSL. The product is sold elsewhere — on the LP or VSL that the advertorial bridges to.

Why this matters: the reader is in *editorial mode*. They are willing to read, willing to learn, willing to be intrigued. They are NOT yet in *transactional mode*. Trying to close the sale inside the advertorial breaks the camouflage AND wastes the persuasion arc that should culminate on the LP.

**Operational rule**: the advertorial's CTA never reads *"buy now"* — it reads *"continue reading / discover / learn more / click here to see [X]"*. The sale lives downstream. (Canonical verification of the no-offer-reveal rule: §12 checklist, CTA & links block.)

### 4.4 — Information Before Product

The advertorial teaches the reader something useful before any pitch. This is non-negotiable. The reader who finishes the piece must feel they learned something — even if they don't click through.

In practice: explain the problem mechanism, share a case study, list common errors, demonstrate the right method. The reader's *"this was worth reading"* feeling is the reading-fee they pay for staying engaged through the piece.

This principle drives the choice of the 4 content types (§6.1): **common mistakes**, **lists**, **case studies**, **how-to**. Each one of them centers on teaching — delivering something the reader didn't know.

### 4.5 — The 50/50 Rule (content / design)

Half of an advertorial's success is the copy. The other half is the design — the layout, the image, the typographic mimicry of the host platform. A brilliant copy on a layout that screams "ad" will underperform a decent copy on a layout that camouflages perfectly.

The specialist writes copy AND writes the design directions (`[DESIGN NOTE:]`, `[IMAGE NOTE:]`, `[LAYOUT NOTE:]`) so the designer renders the surface correctly. Leaving the visual layer to chance kills half the persuasion power.

### 4.6 — Authority Borrowing (print-specific, long-term ROI)

For print advertorials on prestigious magazines, the **direct ROI is often unprofitable**. An €8,000 investment to appear in Forbes will rarely return €8,000 in direct sales from that single article.

The real ROI is **long-term and indirect**: the logo of Forbes / Fortune / Millionaire becomes a perpetual social-proof asset that the brand re-uses on every landing page, every email, every social ad. The Gary Halbert trick (§6.14.3) — using your own quoted text from the article as if the magazine itself said it — multiplies this asset.

**Operational implication**: for print, the writing goals are not "convert this article" but "produce reusable authority assets". The piece is engineered for downstream re-use.

### 4.7 — Ethos, Pathos, Logos (Aristotle, minimum 2 of 3)

Every advertorial must include at least two of the three persuasion axes:

- **Logos** — logic, reason, proof. Structure of the article (opening / body / closure), references to studies / statistics / case studies, comparisons, analogies, metaphors.
- **Pathos** — emotions, values. Stories, inspirational quotes, vivid impact language.
- **Ethos** — credibility, trust. Personal branding, confidence in the communication, citing credible sources.

If all three are present, the piece is stronger. Two is the floor. One alone underperforms because the reader is missing either the rational case (logos), or the emotional pull (pathos), or the trust anchor (ethos).

### 4.8 — Marketing Thesis as spine

Like every other piece in the Copy Genius system, the advertorial argues one single thesis (articulated by [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) from the brief's UM block):

> *The [qualifier] way for [avatar] to achieve [result] is through [Unique Mechanism].*

The advertorial never states this thesis as a slogan — it lets the reader *arrive* at it through the article's argumentation. Every section pushes the reader closer to internally articulating the thesis. The CTA then bridges the reader to the LP, where the thesis can be stated more openly.

---

## 5. Anatomy & components

The functional blocks of an advertorial. Not all pieces use all blocks — the brief specifies which are present. The order is also brief-driven; this catalog defines *what each block does at the advertorial level* and *how to tune it for editorial-camouflage execution*.

**Architecture note**: for components whose craft applies across many formats (hook, headline, lead, mechanism argumentation, offer block, bullets), this specialist delegates the universal craft to the corresponding **component specialist** and supplies only the advertorial-specific execution tuning. The advertorial-specialist remains the writer of the whole piece — it does not hand off sections, it reads the component specialist files inline and applies the craft within advertorial context.

### 5.1 — Hero block (headline + opening)

The opening is the camouflage gate. If the opening reads as an ad, the rest of the piece is dead.

**Pre-headline (optional)** — small text, sets editorial context. Common patterns:
- *"Warning: do not [verb] before reading this"* (case-study Lutzu/Millionaire)
- Author byline emulating the magazine's style (*"by [First Last] — Editor, [Outlet]"*)
- Section tag of the magazine (*"Business / Economy / Health"*)

> **Case-study material** (Lutzu / Certificopy, here and throughout this file): use for structure and psychology — never imitate its register; brand-copy-rules governs the voice.

**Headline (H1)** — editorial-style, not sales-style. Two canonical patterns:

- **How-To pattern** — generic instructional. *"How to write a sales page in 12 simple steps"*. Works in all niches. Risk: overused — Lutzu's rule is **never more than 30% of your output in this pattern**, otherwise pieces look templated.
- **Case-Study pattern** — the How-To on steroids. *"The 12-step formula for writing sales pages that lifted our conversions by 354%"*. Adds a specific case + a measurable result + a number. Always prefer this when you have a real case to anchor to.

Production of headline candidates is the job of [headline-specialist](section-specialists/headline-specialist.md); the advertorial-specialist uses the approved headline as supplied and tunes it for editorial register.

**Sub-headline / opening line** — the first line of the body. Often serves as the **tease to the main problem** — alluding to what the reader will discover by reading on, without revealing it.

**ATF visual** — image, ATF photo, or magazine-page layout (for print):
- Native online → photo respecting the 4 principles (§6.7) and the 7 tested rules
- Print → must mimic the magazine's editorial photo style (cropping, composition, color treatment)

**Commercial-Communication disclosure** — required by regulation. Position it as inconspicuously as possible — top-left corner, small font. Never centered, never bold, never near the headline. The disclosure is unavoidable; its visibility is your choice.

### 5.2 — The 3-Yes Opener (agreement state)

Right after the hero block, the body opens with **three rhetorical questions or statements that the reader will internally answer with "yes"**. This puts the reader in a state of mental agreement and reduces resistance to the rest of the article.

The questions can be:
- **Explicit**: *"Do you want sculpted abs? Do you want to break free from chronic fatigue? Do you want to sleep better?"*
- **Implicit**: paragraphs that describe a state the reader recognizes (*"If you've been following the market lately... you've probably noticed that many cryptocurrencies are exploding..."*). The reader internally agrees: *"yes, I've noticed."*

**Why 3**: Cialdini's commitment principle. Three small "yeses" build a chain — once the reader has agreed three times, they are mentally committed to the article's thesis and more likely to keep saying yes.

This block is not always a literal section — sometimes it's woven into the first 2-3 paragraphs. But the **3 yeses must be present** somewhere in the first 200-300 words. The canonical verification lives in the §12 checklist (Structural block).

### 5.3 — Personal Struggle (lead section)

Apply the craft from [lead-specialist](section-specialists/lead-specialist.md).

Advertorial-specific tuning:

The lead in an advertorial is **always a story** — the protagonist's (or a customer's) struggle. Structure:

1. **The personal story** — *"I was in this condition, with these problems"* (or in 3rd person for case-study format: *"Mariano was in this situation…"*)
2. **The failed solutions** — *"I tried this, this, and this — and nothing worked"*
3. **The Aha moment** — *"Everything changed when I discovered X…"* (or *"He finally found an agency that told him…"*)

The lead does not need to be long. 200-400 words is typical. What matters is the **3-beat structure** — without all three beats, the reader doesn't feel the arc of struggle → discovery and the rest of the piece loses its narrative spine.

- [story-telling-specialist](section-specialists/story-telling-specialist.md) — il lead dell'advertorial e' sempre una storia a voce editoriale: leggilo per struttura, arco e voce del racconto.

For mobile native ads, paragraphs in the lead are 3-5 lines max. For print, paragraphs follow the magazine's editorial column rhythm.

### 5.4 — Bifocal Tease (Formula #1 only)

Specific to **Formula #1** (info-products / software / membership). After the lead, before the body solution, the writer flags two layers of problem:

1. **Surface problem** — what the reader is *consciously* aware of wanting to solve (write a sales page, lose weight, sleep better)
2. **Deep problem** — the deeper problem the reader didn't know they had, that the product also solves

Example: the headline promises a 12-step formula to write a sales page (surface problem). The bifocal tease flags that *"even with the formula, writing a sales page is long and demanding — and I have a solution for that too"* (deep problem: time / energy → hire a copywriter / use a tool).

The bifocal tease is a **strategic loop** — it opens a second curiosity gap that gets resolved later in the piece, after the first one is closed. It doubles the reader's reason to keep reading.

Skip this section entirely for Formula #2 (physical products / services / commodity), where the structural arc is simpler.

### 5.5 — Mechanism / solution body

Apply the craft from [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md).

Advertorial-specific tuning:

This is the **body of the piece** — typically 40-60% of the total word count. Two variants based on formula:

**Formula #1 — body = "Solve the surface problem" + "Solve the deep problem"**
- Step-by-step solution to the conscious problem (Step 1, Step 2, Step 3…)
- Image for each step (`[IMAGE NOTE: ...]` direction) — visual interest signals editorial layout
- Generous content density: *"Give a lot of content. Don't be shy. Astonish them and be useful."* The reader who consumes tangibly useful information starts to trust the source and opens up to the second problem (the deep one).
- Then: explain why the second problem is crucial, present its solution (which conveniently lives in the product / service being advertised)

**Formula #2 — body = "Step-by-step solution" + "The Crucial Step"**
- Step-by-step solution to the main problem (Step 1, 2, 3 with before/after images where applicable)
- Then: **the Crucial Step** — detail why one specific step is the key, and why the competition does NOT do this step properly. Link the product / service as the unique provider of that critical step.

In both formulas: **in-line links** at strategic points (start, middle, end of body) — see §5.9.

The Marketing Thesis lands implicitly in this section: by the time the reader finishes the body, they can internally articulate *"The [qualifier] way to get [result] is through [UM]"*. The advertorial never says this sentence verbatim — it lets the reader arrive at it.

### 5.6 — Proof integration (Ethos / Pathos / Logos)

Two options at the advertorial level:

- **Integrated proof** — testimonials, data points, authority cites woven into the flow next to the claim they support. Preferred default for advertorial — the editorial register suits prose-embedded proof, not stacked testimonial blocks.
- **Dedicated proof block** — rare in advertorial. Used only when the proof volume is so heavy (a published study, a major media feature) that it warrants its own paragraph.

The advertorial pulls proof from three axes (per §4.7):

| Axis | Native online tactic | Print tactic |
|---|---|---|
| **Logos** | Reference to studies, screenshots of data, quoted statistics | Quoted research, numbered case data, comparison table |
| **Pathos** | Customer story, inspirational quote, vivid impact language | Founder narrative, customer testimonial as paragraph |
| **Ethos** | Founder credentials, third-party logos (small, in sidebar) | Citing magazines, awards, years of experience, list of clients |

Minimum 2 of the 3 axes per piece. Three is stronger.

### 5.7 — Bullet points

Apply the craft from [bullet-point-specialist](section-specialists/bullet-point-specialist.md).

Advertorial-specific tuning:

- Deployed under "What you'll discover" framings or as the step-list inside the body solution (Step 1 / Step 2 / Step 3 are technically bullets in disguise)
- Visual treatment: indented list with markers, white space, optionally numbered for step sequences
- End with *"And much more..."* only if genuinely true
- For print, mimic the magazine's bullet style (some magazines use em-dashes instead of dots, some prefer numbered checklists — match the editorial template)

### 5.8 — Offer tease + CTA bridge

Apply the craft from [offer-specialist](section-specialists/offer-specialist.md) — but **dial back significantly**. The advertorial does not reveal the full offer. It does NOT show:
- The price (naked or with reason-why)
- The full bonus stack
- The guarantee
- The urgency / scarcity

What the advertorial DOES include:
- A **summary of what the reader has discovered** in the article (*"In this article you discovered that to [result] you need to [step 1], [step 2], [step 3]"*)
- A **link to the product / service** as the resource that delivers all of this (*"Click here for [next step]"*)
- An optional **request for comments / questions** to seed social proof (*"What do you think? Leave a comment below"*) — works on native online, less so on print

**CTA copy rules**:

- **Direct, never timid**. NO: *"Why not try a free pack of...?"* YES: *"Click here to receive a free bottle"*.
- **Specific, never generic**. NO: *"Click here to learn more"*. YES: *"Click here to discover how [specific benefit]"*.
- **Confident, never apologetic**. NO: *"I hope this might interest you"*. YES: *"Discover this method now"*.

**Bridge function**: the CTA pulls the reader from editorial mode into transactional mode — but the transaction happens on the LP, not here. The CTA's job is to deliver a warmed-up, partially convinced prospect to the next touchpoint.

### 5.9 — In-line links policy

The advertorial must contain **at least 3 in-line links** — at the start of the body, in the middle, and at the end. More is fine. (Canonical verification: §12 checklist, CTA & links block.)

In-line links are sentences (or fragments) that contain a hyperlink to the destination (LP, opt-in, VSL). The link is woven into the prose, not a banner or button: *"This method lets you lose 14 kg. In fact, [a ScienceDaily article] shows that…"*

Why: skimmers who scan the article without reading deeply will see the bolded / linked phrases and click out of curiosity. In-line links also reinforce the editorial illusion — articles online routinely link out, ads typically don't.

**For print**: in-line links don't exist physically. The equivalent is **seeding URLs and brand references** in the prose (*"visit www.[brand].com for…"*, *"the book [title] develops…"*), so motivated readers can find the destination. Don't overdo it: 1-2 references max in a magazine advertorial, or the piece reads as a brochure.

### 5.10 — Sidebar / banner area (native online only)

A native ad article almost always includes a **sidebar offer** — a banner or text box on the right side of the page (or the top, on mobile) that travels with the reader as they scroll. The sidebar usually:

- Displays an opt-in form (email capture in exchange for a lead magnet)
- Or a secondary CTA (*"Download the free guide"*)
- Sometimes both (top + side)

**Operational rule**: the sidebar copy is *not* duplicated body copy — it's a parallel persuasion track that catches readers who skim past the in-line links. Treat it as a mini-ad of its own: short, specific, action-oriented.

For mobile native, the sidebar collapses to the top of the page (header position).

### 5.11 — Pop-ups (native online only)

Three pop-up types, all valid, all combinable:

- **On-load pop-up** — appears as soon as the page opens. Aggressive but high-volume. Often a multi-step opt-in (quiz, custom quote, *"what language do you want to learn?"*).
- **Delay pop-up** — appears after N seconds (typically 20-30 seconds). The reader who stays this long is engaged enough to be worth interrupting.
- **Exit-intent pop-up** — appears when the cursor moves toward the browser-close. Last-chance capture for the reader who is leaving — typically an opt-in with a strong lead magnet.

**Tool**: Optin Monster ([optinmonster.com](https://optinmonster.com/)) for WordPress sites — historical reference data (2019-2021 era), verify before relying on it; any current pop-up builder with the three trigger types works.

Pop-ups should NEVER appear in print (obvious) and should be used sparingly — one or two per article, not three.

### 5.12 — Footer / comments section (native online)

Native ads designed to look like blog articles include a comments section at the bottom. This serves social proof: pre-seed real comments from existing customers to signal engagement and credibility.

If commenting isn't an option (technical or moderation reasons), display a count of shares / likes / views as social-proof anchor.

---

## 6. Format-specific conventions

These are the conventions that make an advertorial *read like editorial*, not like a long sales page or a Facebook ad. They live in the visual layer as much as in the copy layer.

### 6.1 — The 4 Content Types (which model to follow)

The advertorial follows one of 4 tested content templates, selected by niche and goal:

| Template | Phrasing | Best for |
|---|---|---|
| **Common Mistakes** | *"Are you making these mistakes in...?"* | Practically all niches — works as a universal opener |
| **Lists** | *"3 ways to [result]"*, *"7 steps to..."* | Health, fitness, finance, productivity |
| **Case Studies** | *"How Marco earned X in 21 days"* | B2B, make-money, business — proof-heavy contexts |
| **How-To** | *"How to solve [problem] with [unusual element]"* | Generic — works but heavily overused; cap at 30% of your output |

The brief usually flags which template fits the awareness + offer. When ambiguous, **default to Case Studies** if a real case exists in the brand wiki, otherwise **Common Mistakes**.

### 6.2 — Editorial Camouflage (the dominant convention)

The single most important convention. The advertorial must visually and tonally mimic the host platform:

**For native ads online**:
- Layout matches the host (Taboola → looks like a Taboola feed item; Outbrain → looks like Outbrain's content cards)
- Fonts, color palette, sidebar structure match the host's editorial pages, NOT the brand's own design system
- Author byline, publish date, share buttons — all present, all rendered as the host would render them
- The destination article page (after click) ALSO mimics editorial: blog-style header, body column, related-articles sidebar

**For print**:
- Column width matches the magazine's editorial columns (not the magazine's ad widths)
- Headline font is the magazine's editorial font, not a custom sales font
- Paragraph rhythm, paragraph length, sub-headline frequency all match the magazine
- No glossy product photos — use journalistic photography (or none)

The advertorial breaks camouflage the moment any one of these signals goes off — and once camouflage breaks, the reader treats the whole piece as an ad.

### 6.3 — Commercial-Communication disclosure placement

The disclosure is legally required. Its visibility is a writing choice:

- **Position**: top-left corner, never centered, never near the headline
- **Size**: smallest legal font size
- **Color**: muted, never bold, never colored
- **Phrasing**: the regulation typically allows variants — *"Commercial communication"*, *"Sponsored content"*, *"Sponsored"*, *"BrandVoice"* (Forbes Italy's clever euphemism). When the host platform offers a softer phrasing, use it.

The case study on Forbes (§A1.2) shows how *"BrandVoice"* feels so editorial that most readers don't register the sponsorship signal.

### 6.4 — Two Reading Levels (skimmer strategy)

Same as LP — an advertorial is read by both a deep reader and a skimmer. The skimmer reads:

1. Headline
2. Sub-headline
3. Sub-headlines (H2s) throughout
4. Bold phrases
5. Bullet points
6. Image captions
7. CTA copy + in-line links

**Operational rule — the sub-headline test**: read the sub-headlines in sequence. They must constitute a complete editorial argument. Blind sub-headlines (*"The Truth", "The Story"*) collapse this layer — replace with sub-headlines that name what the section delivers.

**Operational rule — the bold test**: bold phrases in sequence must form a coherent micro-message, never confetti.

### 6.5 — Editorial tone discipline

The advertorial's prose **must not slip into sales register**, even at climactic moments. Sales register signs to watch:

- Three or more exclamation marks
- Direct address with imperative verbs in close cadence (*"Buy! Click! Order!"*)
- Phrases like *"limited offer"*, *"exclusive discount"*, *"only for the first X"* in the body (these belong on the LP)
- Capital letters for emphasis (occasional ok, frequent = ad)
- ROI/conversion language exposed to the reader (*"this converted 432% better"*)

When emotional intensity rises, raise it through **vivid imagery and specific detail**, not through sales markers. The Lutzu Forbes article inserts copy punches (*"disguising our commercial communications has become the only weapon"*) — but they read as journalistic punch, not as sales copy.

### 6.6 — Perfect layout (desktop vs mobile)

**Desktop layout** (validated by Justin Brooke's split testing):

```
[Header — magazine/site brand]
[Optional top banner ad]

H1: Headline                          [Sidebar: offer #1]
[Image caption: extends loop]         [Sticky as user scrolls]
[Body paragraph 1 — 3-5 lines]
[Body paragraph 2]
[H2: Sub-headline]
[Body paragraphs]
[Image with caption]
[Body paragraphs]
...
[Final CTA]                           [Sidebar: offer #2 or repeat]
[Comments / shares]
```

**Mobile layout** (80% of native traffic comes from mobile — non-negotiable):

- The sidebar collapses to the **header position** (top of page), so the offer is still visible without scrolling
- Paragraphs 3-5 lines maximum (which becomes 8-10 lines on mobile if you don't cap)
- White space between every paragraph
- Single-column body — no side elements
- CTA must complete within a single mobile viewport

**Critical rule**: **never deploy a "responsive" mobile page as-is**. The mobile experience deserves its own page, designed mobile-first. A desktop layout shrunk to phone dimensions reads badly and converts worse.

For print, layout is constrained by the magazine's editorial template — no choice. Adapt copy density and paragraph length to the magazine's columns.

### 6.7 — Image selection (the most important tactical decision)

Images are **more important than the headline** in driving click-through. The image is what catches the scrolling reader's eye; the headline is what they read after.

**4 base principles**:

1. **Keep it simple** — don't overthink. Simple images outperform complicated ones, especially at the start of your testing.
2. **High contrast** — image must stand out from the host platform's other content. On Facebook, **red** is the highest-contrast color. On Taboola / Outbrain, the contrast comes from differentiation vs surrounding ads.
3. **Highly relevant** — image must connect to the product / desire / story. Obvious, often forgotten.
4. **Worst case: shock and disturb** — shocking / disturbing images work on Taboola / Outbrain in some niches (health, finance). **Never on Facebook** — not compliant.

**7 tested image rules** (with documented lift percentages — historical reference data (2019-2021 era), verify before relying on it; the directional principles hold, the exact percentages may not):

| Rule | Lift | Notes |
|---|---|---|
| **With people > without people** | **+40% CTR** | Even if the product is the focus, include a person interacting with it |
| **Close-ups > wide shots** | **+6% CTR** | Face close-ups outperform full-environment shots |
| **Without text > with text** | (Facebook also penalizes algorithmically) | If text is unavoidable (product cover), test both — but default to no text |
| **Black-and-white > color** | **+24% CTR** | B/W creates contrast against the color-saturated host feed. On Facebook, also test red. |
| **Photo > drawing / cartoon** | Documented | Real photos consistently outperform illustrations |
| **Outdoor > indoor** | Documented | Outdoor environments feel less claustrophobic, more inviting |
| **Curiosity images (weird objects)** | Strong on Taboola / Outbrain | Avoid on Facebook (generates negative feedback). Examples: unusual fruits, odd household items, "what is this?" objects |

**Easily-recognizable objects**: if the product is iconic (sunglasses, drone, credit card), include it in the image — readers click to verify. Don't get creative when the product itself is the curiosity hook.

**Operational rule**: test images BEFORE testing copy. The image swings CTR more than any copy variation. Lutzu's rule from the 4 Golden Rules: *"Test images first, then test copy."*

The specialist writes `[IMAGE NOTE: specific description matching the 7 rules]` directions — the designer renders.

### 6.8 — Readability (Gulpease 63-70 — the advertorial deroga)

The body of the advertorial targets **Gulpease 63-70** — the editorial-style deroga defined in [writing-principles](core/writing/writing-principles.md) §3.5, which is the canonical source for all Gulpease targets (system default ≥70; **below 60: always refactor**). The editorial register tolerates slightly more syntactic density than direct sales copy — it never licenses a score under 60. For English-language pieces, the equivalent target is a Flesch Reading Ease score of 60-70.

Apply during Phase 5 of the protocol. Adjust by:
- Shortening long sentences
- Replacing rare words with common ones
- Breaking long paragraphs

### 6.9 — Skimmer-friendly formatting

Standard rendering for the body:

- **Sub-headlines** every 3-5 paragraphs (non-negotiable in long-form)
- **Short paragraphs** — 3-5 lines max
- **Bold phrases** — one key phrase per paragraph, never entire sentences
- **Images** — every 4-6 paragraphs, each with a caption that does persuasion work
- **Captions under images** — never empty, never decorative; each caption extends the curiosity loop or adds a proof element
- **Bullet lists** as visual breathers, especially in step-by-step body sections

### 6.10 — Placement strategy (campaign types — for native online)

Two campaign types, **always run both**:

- **Discovery Campaign** — broad targeting, exploratory. Goal: find new audiences that respond to the offer. Riskier (higher CPC, lower conversion at first), but the source of new winning audiences.
- **Whitelist Campaign** — narrow, tested targeting. Goal: scale on audiences that have already shown they convert. Lower risk, higher concentration of budget.

The advertorial-specialist does NOT decide budgets or audiences — this is media-buying territory. But the specialist surfaces the campaign type the brief targets (Discovery vs Whitelist) because **copy variations matter**:

- Discovery → broader hooks, more curiosity-driven openings, less niche jargon
- Whitelist → can use niche language, specific avatar references, deeper UM articulation

### 6.11 — The 4 Golden Rules

Four rules that distinguish high-performing advertorials from average ones:

1. **Use micro-commitments** (Cialdini) — multi-step opt-ins, quizzes, questionnaires, custom-quote forms. The reader who answers one small question is much more likely to complete the next step. Used heavily for home-improvement, automotive, education niches.
2. **Test images first, then copy** — images drive CTR more than headlines. Test image variants on the same headline first, lock the winning image, then iterate on copy.
3. **Use dynamic insertions** when possible — geo-personalization (*"People in Boston..."*), age-personalization (*"Women aged [N]..."*), interest-personalization. Massive lift in CTR vs generic copy. Common on dating, real-estate, local-service niches.
4. **Add dynamic proof** — *"X people are viewing this site"*, *"Mark just purchased"*, *"X people viewed this page in the last 24h"*. Tool: [useproof.com](https://useproof.com/) — historical reference data (2019-2021 era), verify the tool and platform tolerance for dynamic-proof widgets before relying on it. This is real-time social proof and works across niches.

### 6.12 — CTA conventions

CTA copy patterns that work:

- *"Click here for [specific benefit]"* (default direct)
- *"Yes, I want to receive [thing]"* (first-person commitment — used by Gary Bencivenga on his olive-oil native ad)
- *"Discover how [specific outcome]"* (curiosity-led)
- Photo with play button (when bridging to a VSL)
- Embedded opt-in form (*"Leave your details here..."*)

CTA copy patterns to avoid:

- *"Why not try a free pack of...?"* — timid, apologetic
- *"Click here to learn more"* — generic, no benefit
- *"Find out more"* — vague
- *"Submit"* / *"Send"* — transactional dead-words

### 6.13 — Format conventions for design directions

Inline design notes the advertorial-specialist writes for the designer:

- `[IMAGE NOTE: description matching the 7 rules — what the image shows + why it works]` — drives image selection
- `[CTA BUTTON: "exact button copy"]` — the literal CTA text
- `[H2 SUB-HEADLINE TEXT]` — visual treatment of section break
- `[CAPTION: text]` — text under image
- `[IN-LINE LINK: text → destination type]` — placement and target type for inline hyperlinks
- `[SIDEBAR: content for sidebar offer]` — separate persuasion track for native online
- `[POP-UP: type + trigger + offer]` — for on-load / delay / exit-intent
- `[DESIGN NOTE: layout specifics]` — banner placement, sealed block, sidebar position
- `[MAGAZINE MATCH: which editorial element to mimic from the host]` — print-specific direction

These bracketed instructions tell the designer how to render the camouflage. The advertorial-specialist is responsible for them — the designer should never be left guessing.

### 6.14 — Print-specific conventions

The print variant inherits all the above, with specific additional rules:

**6.14.1 — Mirror the magazine's editorial style**

Not optional. Before drafting, study 3-5 real editorial articles from the target magazine and extract:
- Average paragraph length
- Sub-headline frequency
- Image-to-text ratio
- Tone (formal / conversational / authoritative)
- Bullet style (or absence)
- Headline structure (one line / two lines / with deck)

Then write to match. A Forbes piece reads completely differently from a Millionaire piece — same advertorial framework, totally different surface.

**6.14.2 — Compromise on the headline**

On prestigious magazines (Forbes, Fortune, Harvard Business Review), aggressive How-To / Case-Study headlines clash with editorial register. Tone down the headline — sometimes a more bland editorial headline like *"The secrets of copywriting"* is the right move, even though it underperforms by direct-response standards. The trade-off is: less click-bait, more authority preserved.

The Lutzu case study on Forbes (§A1.2) explicitly notes this — *"The secrets of copywriting"* is not a great headline by DR standards, but on Forbes you compromise.

**6.14.3 — The Gary Halbert Trick (circular citations)**

After publication, **re-use your own quoted text from the article as if the magazine itself said it**. Example: if your Forbes article says *"the Bible of copywriting"*, then in your Facebook ad you say *"Forbes called this the Bible of copywriting"*.

Strictly speaking, the magazine didn't write that phrase — you did, inside an advertorial. But the phrase appears in Forbes, so the social-proof inference holds.

This trick is the **single biggest reason** print advertorials are worth their €8,000 price tag. The article becomes a permanent license to borrow the magazine's authority across every future piece of marketing.

**6.14.4 — Re-use the logos**

Once published, the magazine's logo is yours to display on:
- The brand website ("As featured in: Forbes / Fortune / Millionaire")
- Landing pages (authority strip near the headline)
- Email signatures
- Social ads
- Sales decks

Send a physical copy of the magazine to your customers — they see your brand in the editorial pages of a magazine they recognize, and trust grows automatically.

**6.14.5 — Plan for authority, not for direct ROI**

Print advertorials almost never break even on direct sales. Project the ROI over 12-24 months, including:
- Direct sales from the article
- Indirect sales from logo-reuse across LPs, emails, ads
- Trust lift on existing customer base
- Press / partnership conversations enabled by the credential

If you measure print by direct conversion only, the budget allocation looks irrational. Frame the investment correctly upfront — see §4.6 and §A3.

---

## 7. Compositional patterns — the 2 canonical formulas + print variant

> **What this is**: two structural formulas validated by direct-response practice on native ads, and one variant for print. These are templates — but apply them with judgment, the brief comes first.

### 7.1 — Formula #1 — Info-products, software, courses, memberships (6 parts)

| # | Movement | Function | Word-count % |
|---|---|---|---|
| 1 | **Headline** | How-To or Case-Study pattern. Use numbers ("12 steps"). Tease the surface problem. | 5% |
| 2 | **Personal Struggle** | Story: personal struggle + failed solutions + Aha moment. 3-beat arc. | 15-20% |
| 3 | **Bifocal Tease** | Flag surface problem + deeper problem. Open the second curiosity loop. | 5-10% |
| 4 | **Solve the Surface Problem** | Step-by-step solution to the conscious problem. Generous content. Images per step. | 30-35% |
| 5 | **Solve the Deep Problem** | Explain why the deeper problem is crucial. Step solution. Link product as the resource. | 20-25% |
| 6 | **CTA** | Summary of discoveries + link to product + comments invite. Direct, specific, confident. | 5-10% |

Total: 1,500-3,500 words typical.

Where the canonical formula came from: tested heavily by Mattia Paganelli + Marco Lutzu's team on info-product launches (Certificopy, Copy Academy, Scrivere per Vendere). Works across niches that can teach before selling.

### 7.2 — Formula #2 — Physical products, services, commodities (5 parts)

| # | Movement | Function | Word-count % |
|---|---|---|---|
| 1 | **Headline** | How-To or Case-Study. Tease to the main problem can be the first body line. | 5% |
| 2 | **Personal Struggle** | Story in 3rd person typical for case studies. Same 3-beat arc. | 15-20% |
| 3 | **Step-by-step solution** | Step-by-step solution with images per step (before/after where applicable). Generous content. | 40-50% |
| 4 | **The Crucial Step** | Detail why one step is the unique key. Detail why competition does NOT do this step. Link product. | 20-25% |
| 5 | **CTA** | Summary + link + comments invite. | 5-10% |

Total: 1,200-2,500 words typical.

Where the formula came from: same lineage, validated on physical-product cases (the real-estate / "sell your house in 19 days" example in the Certificopy module).

**Key difference from Formula #1**: no Bifocal Tease. The arc is single-problem, single-solution. Simpler, more direct, suited to commoditized offers where the unique value is execution, not insight.

### 7.3 — Authority-Building variant (print, e.g., Forbes case study)

For print on prestigious magazines, when the goal is **authority building** (not direct conversion), the structure shifts:

| # | Movement | Function |
|---|---|---|
| 1 | **Editorial-toned headline + sub-headline carrying authority** | Headline doesn't sell — it positions. Sub-headline establishes the protagonist as authority. |
| 2 | **Educational opening for the Unaware** | Introduce the category / problem / concept to readers who don't know it (the magazine's editorial audience is often Unaware about niche categories). |
| 3 | **Seeded concepts and jargon** | Introduce key terms (*"multiplied selling"*, *"disguising commercial communications"*) that the protagonist will own as their authority. |
| 4 | **Strategic positioning shift** | Shift the reader's frame (*"online → offline"*, *"salespeople → multiplied selling"*) to a terrain where the protagonist is the recognized leader. |
| 5 | **Quotable claims** | Insert statements that can be Halbert-tricked later (*"the unique weapon"*, *"the most authoritative copywriter in Italy"*). |
| 6 | **Seeded URLs and brand mentions** | 1-2 references for motivated readers to find the funnel. |
| 7 | **Auto-celebration block** | List of credentials, projects, students, books. Self-promotion that wouldn't fly in a hard-sell context but reads as biographical in editorial register. |
| 8 | **Lead-magnet bridge** (optional) | Mention a book / report / entry-level offer that's affordable enough to be a low-friction first touch. |
| 9 | **Testimonial as paragraph** | One or two narrative testimonials embedded as quoted text, with attribution. |

Total: 1,500-3,000 words. The piece is engineered for re-use, not for in-magazine conversion.

### 7.4 — When to use which

| Brief signal | Pattern |
|---|---|
| Info-product / software / course / membership + 2-layer problem (surface + deep) | **Formula #1** |
| Physical product / service / commodity + single-problem arc | **Formula #2** |
| Print on prestigious magazine + authority goal | **Authority-Building variant** |
| Native online + lead generation as primary goal | Formula #1 or #2 depending on offer type; lead-gen optimized via micro-commitments (§6.11) |
| Native online + direct sale as primary goal | Formula #2 default; Formula #1 if the offer benefits from a Bifocal Tease (e.g., front-end course + back-end coaching) |

If the brief is ambiguous, surface the choice to the copywriter — never auto-pick.

---

# PART C — Operational workflow

## 8. Selecting variant, formula, and goal

The brief usually specifies all three. When ambiguity exists, the advertorial-specialist makes the selection based on the criteria below — and surfaces the selection to the copywriter for confirmation if the brief was silent.

### 8.1 — Variant (native online vs print)

| Brief signal | Variant |
|---|---|
| Touchpoint specifies Taboola / Outbrain / Yahoo Gemini / Facebook native placement | **Native online** |
| Touchpoint specifies a magazine name (Forbes / Fortune / Millionaire / HBR) | **Print** |
| Goal is authority building with reusable assets | **Print** (strongly preferred) |
| Budget is sub-€2,000 per piece | **Native online** (print doesn't run on these budgets) |
| Goal is high-volume lead generation | **Native online** (print doesn't scale) |
| Audience is hyper-niche B2B that reads prestige business press | **Print** can outperform native |

### 8.2 — Formula (#1 vs #2)

| Brief signal | Formula |
|---|---|
| Offer is an info-product / software / course / membership | **Formula #1** |
| Offer has a Bifocal Tease opportunity (surface + deep problem) | **Formula #1** |
| Offer is a physical product / service / commodity | **Formula #2** |
| Offer is a single-arc, single-mechanism solution | **Formula #2** |
| Audience is B2B and the brief includes a real customer case study | **Formula #2** with strong case-study framing |

### 8.3 — Goal (lead gen / direct sale / authority)

| Brief signal | Goal |
|---|---|
| Funnel design includes an opt-in / lead capture downstream | **Lead generation** — optimize CTA for opt-in, deploy micro-commitments |
| Funnel design has a direct LP / VSL after the advertorial | **Direct sale** — optimize CTA for click-through with curiosity loop |
| Print placement on prestigious magazine | **Authority building** (primary), direct sale (secondary) — see §7.3 |

### 8.4 — Headline pattern (How-To vs Case-Study)

| Brief signal | Headline pattern |
|---|---|
| Real, documented case in the brand wiki with specific result | **Case-Study** |
| No specific case but a tested formula or method | **How-To** |
| Recurring across 30%+ of past pieces | **Avoid both** — use a different opener (curiosity, contrarian, target-specific) |

### 8.5 — Content type (the 4 templates from §6.1)

| Brief signal | Template |
|---|---|
| Avatar makes recurring mistakes the brief flagged | **Common Mistakes** |
| Brand has step-by-step methodology | **Lists** |
| Brand has documented case studies | **Case Studies** |
| Brand has a hook around an unexpected element ("strange fruit") | **How-To** with curiosity twist |

---

## 9. Application protocol — advertorial-specific notes

The specialist applies the universal **5-phase protocol** defined in [writing-principles §2](core/writing/writing-principles.md). That protocol is the authoritative workflow — read it there, do not re-state it here.

The notes below specify what is **advertorial-specific** at each phase. Treat them as supplements to the universal protocol, not replacements.

| Phase | Advertorial-specific notes |
|---|---|
| **Phase 1 — Pre-writing** | 0. Read [feedback-rules](core/feedback-rules.md) (global rules) + `brands/<brand>/brand-copy-rules.md` (brand rules — they override global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d). Then always read: brief §3-§4 (per §3 of this file), brand `swipe.md` (1-2 advertorial examples if present), the specific testimonials/transcripts/offers referenced. **For print**: ALSO read 3-5 real editorial articles from the target magazine — extract paragraph length, sub-headline frequency, tone, image style. **For native online**: ALSO check the host platform's style (Taboola / Outbrain feed items, Facebook native conventions). **For long-form (1,500+ words)**: read [writing-principles SECTION C](core/writing/writing-principles.md) and decide drafting approach. **Emotional gate**: apply the two-branch rule in §3 — [emotional-intelligence](core/writing/emotional-intelligence.md) is mandatory when the brief names Emotional anchors; when it names none, consult the relevant entries anyway for the emotionally-led moments (max 3 per piece) and flag the brief gap. |
| **Phase 2 — Drafting** | **Write the sub-headlines first** — verify the second-level-of-reading test (§6.4) passes before any body paragraph fills in. Then draft body section by section, following the formula chosen in §8.2. Then add strategic bold (one key phrase per paragraph). Then add `[IMAGE NOTE:]`, `[CTA BUTTON:]`, `[SIDEBAR:]`, `[POP-UP:]`, `[IN-LINE LINK:]` directions. For print: insert `[MAGAZINE MATCH:]` directions where editorial-style mimicry must be exact. Verify: 3 yeses present in first 200-300 words, at least 3 in-line links distributed, Commercial-Communication disclosure placement noted. |
| **Phase 3 — Principles refinement** | Universal pass per [writing-principles SECTION A](core/writing/writing-principles.md). Advertorial-specific watch-points: Principle 1 (One Thing) often slips when the piece argues 2 separate theses; Principle 2 (Promise → Proof → Implication) often slips in the body solution section if proof is missing per step; Principle 6 (Conversational flow) often slips at the transition from Personal Struggle to body solution. |
| **Phase 4 — Anti-AI pass** | Universal pass per [writing-principles SECTION B](core/writing/writing-principles.md). Advertorial-specific hotspots: rigid parallel triads tend to cluster in the body's step-list (Step 1 / Step 2 / Step 3); em-dash overuse tends to cluster in the Personal Struggle; generic transitions between sections leak sales register — replace with editorial transitions (*"In fact…"*, *"However…"*, *"What I discovered is…"*). |
| **Phase 5 — Readability + Read-aloud + Skimmer + Editorial-mimicry test** | Universal readability check (Gulpease 63-70 for Italian — the advertorial deroga per [writing-principles](core/writing/writing-principles.md) §3.5; below 60: always refactor; Flesch 60-70 for English) + read-aloud per [writing-principles §3](core/writing/writing-principles.md). **Then add 2 advertorial-specific tests**: (a) **Skimmer test** — read ONLY the sub-headlines + bold phrases + bullets + image captions + CTA + in-line link text, in order. The sequence alone must constitute a complete editorial argument. (b) **Editorial-mimicry test** — place the draft side-by-side with a real editorial article from the host platform / magazine. If the difference is visible to a casual scroller, the camouflage is broken — fix layout / tone / paragraph rhythm. |

---

## 10. Output formats

### Structure proposal (when planning before writing)

```
PROPOSED STRUCTURE — Advertorial for [Offer] in [Funnel]

Variant: [Native online / Print]
Host platform: [Taboola / Outbrain / Facebook native / Forbes / Fortune / Millionaire / ...]
Formula: [#1 (info-product) / #2 (physical-product) / Authority-Building variant]
Length target: [Short ~1,200 / Medium ~2,000 / Long ~3,000 words]
Awareness: [level from brief]
Sophistication: [stage from brief]
Goal: [Lead gen / Direct sale / Authority building]
Content type: [Common Mistakes / Lists / Case Studies / How-To]
Headline pattern: [How-To / Case-Study]
Reference swipe: [name — what's adapted]

SECOND LEVEL OF READING (sub-headlines + bold scan):
H1: [headline text]
Sub-H: [sub-headline / opening tease]
H2 §1: [sub-headline]
H2 §2: [sub-headline]
H2 §3: [sub-headline]
[... full sequence — verify the editorial argument holds reading these alone]

SECTION-BY-SECTION:

Section 1 — HERO BLOCK — Installs belief: #X
  Function: editorial-style hook + tease to the problem
  Headline pattern: [How-To / Case-Study]
  Pre-headline: [text or "none"]
  ATF image: [description matching the 7 image rules]
  Caption: [draft caption]
  Commercial-Communication placement: [top-left small / equivalent on host]

Section 2 — 3-YES OPENER — Installs beliefs: #X
  Function: agreement state
  3 yes-triggers: [explicit questions or implicit statements]

Section 3 — PERSONAL STRUGGLE — Installs beliefs: #X, #Y
  Function: identification + struggle → discovery arc
  Sub-headline: [text]
  3-beat structure:
    1. [Personal story]
    2. [Failed solutions]
    3. [Aha moment]

Section 4 — BIFOCAL TEASE (Formula #1 only)
  Function: open second curiosity loop
  Surface problem: [what reader thinks they want to solve]
  Deep problem: [what they didn't know they had]

Section 5 — BODY SOLUTION — Installs beliefs: #X
  Function: teaching (step-by-step)
  Sub-headlines per step: [list]
  Image plan per step: [list of [IMAGE NOTE:] entries]
  In-line links: [list with positions]
  Proof (ethos/pathos/logos): [which axes covered, where]

Section 6 — DEEP PROBLEM (Formula #1) / CRUCIAL STEP (Formula #2) — Installs beliefs: #X
  Function: bridge to the offer + competition destruction (Formula #2)
  Sub-headline: [text]

Section 7 — CTA + BRIDGE TO LP
  Sub-headline: [text]
  Summary recap: [bullets of what reader discovered]
  Link copy: [exact text]
  Optional: comments invite

[Sidebar / Pop-ups / Layout directions]
Sidebar offer: [content]
Pop-up types: [on-load / delay / exit-intent]
Sidebar position: [right on desktop, top on mobile]

Belief coverage check: [belief # → section where installed]
Proof distribution: [Ethos / Pathos / Logos → section]
3-yes verification: [present in section X / yes / no]
In-line link distribution: [section X, Y, Z]
Image rule compliance: [7 rules → which followed, which violated, why]
```

### Writing execution (per section, after structure approved)

```
---
## SECTION [N]: [NAME]
## Installs beliefs: #X, #Y

### [H2 SUB-HEADLINE TEXT]

[Body — paragraphs 3-5 lines max, strategic bold on key phrases, editorial voice]

[IMAGE NOTE: specific description matching the 7 rules]
[CAPTION: text]

[IN-LINE LINK: "linked text fragment" → destination type]

[CTA BUTTON: "exact button copy"] (if applicable)
---
```

### Writing sequence within Phase 2

1. Write all sub-headlines first; verify second level of reading (skimmer test)
2. Write the 3-Yes Opener — verify reader will internally agree 3 times
3. Write the Personal Struggle lead — verify 3-beat arc complete
4. (Formula #1 only) Write the Bifocal Tease — verify both loops opened
5. Write body solution section by section — generous content, images per step
6. Write the bridge (Deep Problem / Crucial Step) — connect product as resource
7. Write CTA — direct, specific, confident
8. Add design directions ([IMAGE NOTE:], [CTA BUTTON:], [SIDEBAR:], [POP-UP:], [IN-LINE LINK:])
9. For print: add [MAGAZINE MATCH:] directions where mimicry must be exact
10. Add strategic bold — one key phrase per paragraph
11. Run Phase 3-5 (refinement passes)

---

# PART D — Quality control & references

## 11. Common pitfalls

Distilled from extensive native ads + print practice. Watch for these.

### 11.1 — Broken camouflage (the layout screams "ad")

The headline font is the brand's, the image is a glossy product shot, the sidebar offers a 50% discount, and the disclosure is centered in red. The reader recognizes the ad in 2 seconds and bounces.

**Fix**: Editorial-mimicry test (§9 Phase 5). Place the draft side-by-side with a real editorial article from the host. Difference visible? Fix layout, fonts, image, disclosure placement.

### 11.2 — Sales register inside the body

The body opens editorially, then halfway through slips into *"limited offer"*, *"exclusive discount"*, *"act now"*. The shift is jarring and breaks the camouflage.

**Fix**: read the body aloud. Any sentence that sounds like a sales pitch — rewrite in editorial register. Save the offer language for the LP downstream.

### 11.3 — Timid or generic CTA

*"Why not try a free pack of...?"* (timid). *"Click here to learn more"* (generic). Both kill conversion.

**Fix**: CTA direct + specific + confident. *"Click here to receive [exact thing]"*.

### 11.4 — Headline that does NOT mirror the magazine's editorial style (print)

A Forbes piece with a *"How to [X] in 12 steps with this trick"* headline reads as advertorial spam on prestigious magazines. Forbes readers expect editorial register.

**Fix**: on prestigious magazines, compromise on click-through aggressiveness for editorial credibility. *"The secrets of copywriting"* underperforms by DR metrics but preserves authority.

### 11.5 — Responsive mobile page (vs mobile-dedicated)

A desktop layout shrunk to phone dimensions reads badly and converts worse. Mobile is 80% of native traffic.

**Fix**: mobile gets its own page, designed mobile-first. Hero block completes within mobile viewport. Sidebar collapses to top header.

### 11.6 — Text on top of the image

Text overlaid on the ad image is penalized by Facebook's algorithm (less reach) and tested-lower CTR on Taboola / Outbrain.

**Fix**: keep text out of the image. If unavoidable (product packaging shot), test variants. Default to no text.

### 11.7 — Weird images on Facebook

Curiosity-driven weird images (strange fruits, mysterious objects) work on Taboola / Outbrain. On Facebook they generate negative feedback (*"this is weird"*) that suppresses the ad's reach.

**Fix**: keep weird images for Taboola / Outbrain. On Facebook, use clean, recognizable imagery — preferably with people.

### 11.8 — Shocking images on Facebook (non-compliant)

Shocking / disturbing images are explicitly non-compliant with Facebook's ad policy. Account-ban risk.

**Fix**: only deploy shocking imagery on Taboola / Outbrain, and only when the niche supports it (some health / finance verticals).

### 11.9 — Centered, visible Commercial-Communication disclosure

Disclosure in 14pt, centered, near the headline. The reader sees it in 1 second and adjusts expectations: this is an ad.

**Fix**: top-left, smallest legal font, muted color. Use softer phrasings when the host allows (*"BrandVoice"* on Forbes).

### 11.10 — Overused How-To pattern (>30% of output)

90% of advertorials in the brand's archive open with *"How to..."*. Readers notice the pattern, the openings lose impact.

**Fix**: cap at 30%. Mix in Common Mistakes, Lists, Case Studies. Rotate templates aggressively.

### 11.11 — Period after the headline

*"The 7 steps to build a successful franchise."* — the punctuation after a headline is a small but visible amateur signal. Headlines never carry final punctuation (except !, ?, or ellipsis when intentional).

**Fix**: strip terminal punctuation from headlines.

### 11.12 — Clumsy camouflage (offer leaks into the article)

The body of the article reveals the price, the bonuses, the guarantee — and at that point the article reads as a sales page in disguise, not as editorial.

**Fix**: the offer is *alluded to*, never fully revealed. Price, bonuses, guarantee live on the LP. The advertorial pre-sells the click, not the offer. (Canonical verification: §12 checklist, CTA & links block.)

### 11.13 — Print ROI as the only metric (missing the authority-borrowing play)

The €8,000 Forbes investment returned €4,000 in direct sales. CFO concludes it failed. Wrong frame — the article enables 12-24 months of authority borrowing across every downstream LP, email, social ad.

**Fix**: project ROI over the authority-borrowing window. Track logo-reuse occurrences and their attributable lift across downstream pieces.

### 11.14 — Missing in-line links

The body has no in-line links — the reader who skims and wants to click out has nothing to click. CTR collapses.

**Fix**: minimum 3 in-line links (start, middle, end of body). More is fine. Each link is a sentence (or fragment) hyperlinked to the next-step destination. (Canonical verification: §12 checklist.)

### 11.15 — Solution explained too completely (no reason to click)

The body explains the full mechanism, the full solution, the full method — and the reader walks away satisfied. *"Great article, now I don't need the product."*

**Fix**: the body teaches enough to demonstrate authority and value, but leaves a critical piece *behind the click*. The reader who wants the complete picture must click through to the LP.

### 11.16 — Missing 3-Yes Opener

The first 200-300 words don't establish mental agreement. The reader starts in skeptical mode and stays there through the whole piece.

**Fix**: 3 yes-triggers in the first 200-300 words. Explicit questions or implicit statements that the reader will internally agree with. (Canonical verification: §12 checklist.)

### 11.17 — Pop-up overload (3+ on a single page)

On-load + delay + exit-intent + sticky banner + sidebar = the reader is bombarded and bounces.

**Fix**: maximum 2 pop-up types per page. Most commonly: on-load (with strong lead magnet) + exit-intent (last-chance capture). Skip delay if the on-load is already deployed.

### 11.18 — Forgetting dynamic insertions (when applicable)

A real-estate ad targeting Rimini residents that opens with *"Sell your house in 19 days"* underperforms the same ad with *"The 9 steps this 47-year-old man from Rimini followed to sell his house in 19 days"*.

**Fix**: when the brief flags geo / age / interest targeting, deploy dynamic insertions in the headline AND the lead. The added specificity drives CTR.

### 11.19 — Ethos / Pathos / Logos under threshold (only 1 axis present)

The article is all data and logic (Logos only) → cold and unmemorable. Or all emotion (Pathos only) → suspicious, unsubstantiated. Or all credentials (Ethos only) → self-serving brochure.

**Fix**: minimum 2 axes per piece. Verify on revision: which axes are present, where they live.

### 11.20 — Halbert Trick not exploited (print)

The Forbes article runs, gets read, and then sits in the magazine archive. The brand doesn't extract quotable text and re-use it as Forbes-attributed across downstream marketing.

**Fix**: after publication, immediately identify 3-5 quotable phrases from the article. Build a Halbert-trick library for the brand. Deploy across LPs, emails, social ads, sales decks.

---

## 12. Revision checklist

Run this before delivering. **Advertorial-specific only** — the universal writing-quality checks (readability, em-dash count, anti-AI patterns, read-aloud) are handled during Phase 3-5 of the protocol per [writing-principles](core/writing/writing-principles.md). This checklist supplements those, it doesn't restate them.

**Structural**
- [ ] Every belief from the brief's Chain of Beliefs is installed somewhere in the article?
- [ ] Every key objection from the brief is addressed (implicitly in the editorial argument)?
- [ ] Marketing Thesis is the spine — every section traces to it?
- [ ] Variant + Formula + Goal match the brief's specification?
- [ ] 3-Yes Opener present in the first 200-300 words?
- [ ] Bifocal Tease present (Formula #1) or absent (Formula #2) as appropriate?

**Camouflage**
- [ ] Layout matches the host platform / magazine?
- [ ] Fonts, paragraph rhythm, sub-headline frequency match editorial style?
- [ ] Commercial-Communication placement inconspicuous (top-left, smallest legal font)?
- [ ] No sales register in the body (no *"limited offer"*, no triple exclamation marks)?
- [ ] Editorial-mimicry test passed (side-by-side comparison with real article from host)?

**Image & visual**
- [ ] ATF image follows the 4 base principles (simple, contrast, relevant, optionally shocking off-Facebook)?
- [ ] 7 image rules applied where possible (people, close-ups, no text, B/W test, photo not cartoon, outdoor, easily-recognizable objects)?
- [ ] Every body image has a caption that does persuasion work?
- [ ] `[IMAGE NOTE:]` directions specific enough for the designer?
- [ ] Mobile-dedicated layout planned (not "responsive standard")?

**Proof (Ethos / Pathos / Logos)**
- [ ] Minimum 2 of 3 axes present?
- [ ] Proof integrated in flow (next to claim it supports), not stacked in a testimonial block?
- [ ] For print authority-building: quotable phrases planted for downstream Halbert-Trick reuse?

**Body & flow**
- [ ] Sub-headlines in sequence form a complete editorial argument?
- [ ] No blind sub-headlines (every H2 advances the argument or teaches something)?
- [ ] Step-by-step body section has images per step + generous content?
- [ ] How-To headline pattern at 30% or less of recent output (no inflation)?
- [ ] Paragraph length 3-5 lines max (mobile-readable)?

**CTA & links**
- [ ] CTA copy direct, specific, confident (not timid, not generic)?
- [ ] Minimum 3 in-line links distributed (start, middle, end)?
- [ ] For native online: sidebar offer specified + pop-up types specified?
- [ ] Bridge to LP / opt-in is clear — no offer dump inside the advertorial?

**Print-specific** (if applicable)
- [ ] Studied 3-5 real editorial articles from target magazine for tone/paragraph/style?
- [ ] Headline appropriately tempered for magazine prestige?
- [ ] Quotable phrases planted for downstream Halbert-Trick reuse?
- [ ] Authority-borrowing plan documented (which logos go where downstream)?
- [ ] ROI framed over 12-24 month authority window (not direct sale only)?

**Brand fidelity**
- [ ] Tone and vocabulary match `brands/<brand>/brand-copy-rules.md`?
- [ ] No invented facts (everything from brief or brand wiki)?
- [ ] First-person consistent (founder / customer voice as specified)?
- [ ] feedback-rules (global + brand) re-scanned on the final draft — no rule violated

---

## 13. Cross-references

- [CLAUDE](CLAUDE.md) — orchestrator, runs Brief readiness check before invoking this specialist
- [strategist](skills/strategist.md) — produces the funnel brief this specialist consumes
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — input template
- [writing-principles](core/writing/writing-principles.md) — read SECTION C (drafting methods) pre-writing for long-form; SECTION A + B post-draft; §3 readability + read-aloud in Phase 5
- [emotional-intelligence](core/writing/emotional-intelligence.md) — two-branch gate per §3: mandatory when the brief names Emotional anchors; consulted anyway for emotionally-led moments when it doesn't
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — **Camouflage** is the dominant technique for advertorial; **Gradualization** carries the body; **Mechanization** carries the solution reveal
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — advertorials typically install Rings 1-2-3 (Problem Aware route)
- [awareness-levels](core/strategic-frameworks/awareness-levels.md) — advertorial format performs strongest in Unaware and Problem Aware segments
- [big-idea](core/strategic-frameworks/big-idea.md) — the Big Idea must double as an editorial hook
- [naming](core/strategic-frameworks/naming.md) — UM naming conventions, when the mechanism is named inside the body
- [proof-elements](core/strategic-frameworks/proof-elements.md) — typology of proof, mapped to Ethos / Pathos / Logos for advertorial use
- [offer-construction](core/strategic-frameworks/offer-construction.md) — the offer the advertorial pre-sells (revealed in full only on the LP downstream)
- [funnel-architecture](core/strategic-frameworks/funnel-architecture.md) — the advertorial as a bridge touchpoint between cold ad and conversion page
- [hook-specialist](section-specialists/hook-specialist.md) — supplies hooks for the opening
- [headline-specialist](section-specialists/headline-specialist.md) — supplies the editorial-style headline (How-To / Case-Study patterns)
- [lead-specialist](section-specialists/lead-specialist.md) — supplies the Personal Struggle craft for §5.3
- [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — supplies the mechanism argumentation craft for §5.5
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — supplies bullet lists for §5.7
- [offer-specialist](section-specialists/offer-specialist.md) — supplies offer principles for §5.8 (dial back to "tease + link to LP"; advertorial does NOT reveal the full offer)
- [faq-specialist](section-specialists/faq-specialist.md) — rarely used in advertorial (only for very long pieces)
- [lp-specialist](format-specialists/lp-specialist.md) — downstream touchpoint, where the offer is fully revealed and the conversion happens
- [ad-specialist](format-specialists/ad-specialist.md) — upstream touchpoint, the paid ad that drives traffic into the advertorial
- [email-specialist](format-specialists/email-specialist.md) — sibling full-piece specialist (reference pattern for self-contained specialist files)
- `brands/<brand>/brand-copy-rules.md` — voice, primary over generic best practice
- `brands/<brand>/swipe.md` — brand-specific advertorial examples for voice calibration
- `brands/<brand>/offers.md` — full offer composition (the advertorial alludes; LP reveals)
- `brands/<brand>/testimonials.md` — proof rows
- `brands/<brand>/transcripts/` — founder anecdotes, customer narratives

---

# Appendix

## A1. Swipe library — 2 annotated case studies

> **Swipe quarantine** — the examples below are historical swipe kept for structure and psychology. Do NOT inherit their punctuation or constructions: Tier 1 bans (writing-principles B.1–B.3 — zero em-dash, no "Not X. But Y.") apply to all delivered copy regardless of what these examples model.
>
> **What this appendix is**: two real, validated advertorial case studies from Marco Lutzu's practice — one print piece on Millionaire (lead-gen for a franchising offer) and one print authority-building piece on Forbes (positioning Lutzu as the most authoritative copywriter in Italy). These are **swipe — not templates**. The structure of the piece comes from the funnel brief; this catalog exists as reference for how the canonical formulas land in practice.

### A1.1 — Case study #1 — Millionaire / franchising lead generation

**Brief context**: client was a franchising network looking for qualified leads (people interested in opening a franchise). Audience: readers of Millionaire (Italy's most popular entrepreneurship magazine) → mostly aspiring entrepreneurs, often Problem Aware about wanting an income source but Unaware about franchising specifics.

**Variant**: print on Millionaire
**Formula**: #1 (info-product style, applied to a service)
**Goal**: lead generation
**Headline pattern**: Case-Study with specific number

**Structure as executed**:

- **Commercial-Communication placement**: top-left corner, inconspicuous. Reader scrutinizing the page might find it; casual reader doesn't see it.
- **Pre-headline**: *"Warning: do not [verb] before reading this"* — non-negotiable opener pattern, tested.
  - *Minor flaw flagged by Lutzu*: there's a period after the pre-headline. Headlines should never carry final punctuation. Small issue, but visible amateur signal.
- **Headline**: *"The 7 points for..."* (a specific case-study-style headline). Carries: specificity (€10,000), numbered ("7"), and case-study framing.
  - *Improvement opportunity flagged*: could have been more specific — the actual case study earned €10,564, not €10,000. The exact figure would have outperformed the rounded one.
- **Sub-headline**: identifies the specific case + the result + the system (2 employees managing the franchise, founder free to do other things).
- **3-Yes Opener**: implicit. The opening paragraphs describe the target's state (wanting an income, considering franchising, distrusting generic offers) — the reader internally agrees.
- **Personal Struggle**: framed in 3rd person (case-study style — the person in the case had searched, failed, finally found this franchising).
- **Body (Formula #1 logic adapted)**: 7 educational points about what makes a *good* franchising (lead generation, customer fidelization, ROI in 6 months, clear royalties, etc.). The reader who knows nothing about franchising operations now has a checklist for evaluating any offer — including the one being subtly positioned.
- **CTA**: teasing only — *"discover what the offer is"*. Doesn't reveal the brand name in the headline; reader who clicks lands on a dedicated LP that captures full data → sales call.
- **Image**: editorial-style with founder photo (person in the image — image rule #1).

**Why it worked**: educational structure + editorial register + specific numbers + camouflage with Millionaire's content style. Generic franchising ads in Millionaire say *"earn X thousand € per month"* — this advertorial teaches what to look for in a franchising, which is what the audience actually wanted to know.

**Annotation**: a clean Formula #1 execution, with minor surface flaws (punctuation, rounded number). Good model for B2B lead gen via print on entrepreneurship press.

### A1.2 — Case study #2 — Forbes / authority building for copywriting

**Brief context**: Marco Lutzu wanted to establish himself as the most authoritative direct-response copywriter in Italy. Audience: Forbes Italy readers → entrepreneurs, executives, mostly Unaware about copywriting as a discipline (the category is niche in Italy). Direct-response goal was a stretch given the placement.

**Variant**: print on Forbes (page 122, mid-magazine — not premium real estate)
**Formula**: Authority-Building variant (not #1, not #2)
**Goal**: authority building (primary), lead capture (secondary)
**Headline pattern**: editorial-toned, compromised for prestige

**Cost**: €8,000 (negotiated down from a higher opening figure)

**Structure as executed**:

- **"BrandVoice" disclosure**: Forbes Italy's editorial-feeling label for sponsored content. Reader doesn't register the sponsorship signal as quickly as they would with *"commercial communication"*.
- **Headline**: *"The secrets of copywriting"* — by direct-response standards, mediocre. By Forbes standards, appropriate. Compromise on click-through aggressiveness for editorial credibility.
- **Sub-headline**: *"Persuasive written communication, still little known to Italian entrepreneurs, can be a powerful weapon available to every company operating in our country. Marco Lutzu, entrepreneur and professional educator, has become the reference and the most authoritative source, thanks to a book."* — establishes Lutzu as the authority before the body even begins.
- **Educational opening for the Unaware**: explains what copywriting is, where it comes from (US, early 1900s), why it matters. Forbes readers are mostly Unaware — the article meets them where they are.
- **Seeded concepts**:
  - *"Multiplied selling"* (borrowed from Bencivenga) — a concept Lutzu now owns in the Italian market
  - *"Disguising our commercial communications"* — the Camouflage Principle stated in editorial register
  - *"Abandoning classic paper materials, written persuasively, is a mistake you pay dearly for"* — quotable Halbert-Trick candidate
- **Strategic positioning shift**: explicit move to reframe the conversation — *"the online channel is dominated by big players; the offline space is where unique opportunity lives"*. This positions Lutzu's offline-heavy methodology (used later in another product line) as the strategic territory.
- **Auto-celebration block**: list of credentials (Copy Academy Italia with 300+ students, Certificopy as a year-long master). Self-promotion that would feel pushy in a hard-sell context, but reads as biographical in editorial register.
- **Lead-magnet bridge**: the recently published book *"Scrivere per Vendere"* — affordable entry-point to the funnel. Forbes readers not ready for Certificopy can still acquire the book.
- **Testimonial**: an embedded quoted testimonial — *"Marco is the only one in the world who can cure it. Absolute genius"*. Self-celebratory in tone, but reads as a quoted endorsement in the editorial layout.

**Why it worked (long-term)**:

- Direct ROI: unfavorable. €8,000 spent, modest direct sales.
- Long-term ROI: the Forbes logo became a permanent asset. Lutzu now displays it on every LP, every email, every social ad. The *"27 marketing secrets"* launch — the first one with the full Forbes/Fortune/Millionaire logo strip — converted at €50,000 in one week on a €297 product.
- Halbert Trick deployed: *"Buy what Forbes called the Bible of copywriting"* — Facebook ads ran with this attribution, even though Forbes never used the word "Bible" — Lutzu did, inside the advertorial.

**Annotation**: this is the canonical example of the Authority-Building variant (§7.3). Read alongside §6.14 (print-specific conventions) and §4.6 (Authority Borrowing principle).

---

## A2. Resources & tools

Tools referenced in the source material, validated by Lutzu's practice. **Historical reference data (2019-2021 era) — verify each tool still exists and works as described before relying on it.**

| Tool | URL | Use |
|---|---|---|
| **Adbeat** | [adbeat.com](https://adbeat.com) | Spy on top-performing ads across networks. Subscribe for 1-2 months, study what's converting in your niche. |
| **Ahrefs** | [ahrefs.com](https://ahrefs.com) | Competitive intelligence on ads + organic. Useful for spotting which advertorial pieces are getting traffic. |
| **OptinMonster** | [optinmonster.com](https://optinmonster.com) | Pop-up builder for WordPress. Used for on-load, delay, exit-intent pop-ups. |
| **UseProof** | [useproof.com](https://useproof.com) | Real-time social-proof banners (*"X people are viewing this site"*). Implements Golden Rule #4. |
| **Italian readability check** | (the legacy xoomer.virgilio.it page is dead — removed) | Compute the Gulpease index per [writing-principles](core/writing/writing-principles.md) §3.2 (formula included there). Advertorial target: 63-70 per §3.5; below 60: always refactor. For English: Flesch Reading Ease, target 60-70. |

For competitive research workflow:
1. Subscribe to Adbeat for 1-2 months
2. Filter by your niche + by ad spend (high spend = validated performance)
3. Study the layouts, the images, the copy patterns
4. Extract the structural moves; do not copy verbatim

---

## A3. The 40-40-20 rule

A direct-marketing axiom recalled in the source material, applicable to advertorial campaigns:

- **40% — the list / audience**
- **40% — the offer**
- **20% — the copy**

Even brilliant copy underperforms on the wrong list or with a weak offer. Copy is the smallest lever — but it's the lever the advertorial-specialist controls.

**Implication for advertorial work**:
- Pre-flight: verify the brief specifies an aligned audience + a strong offer. If either is weak, surface the concern to the orchestrator before writing.
- Post-flight: if a piece underperforms after publication, run the 40-40-20 diagnostic — was it the copy that failed, or was the list / offer the bottleneck? Many *"the copy didn't work"* diagnoses are misattributions.

The Lutzu *"27 marketing secrets"* launch case (referenced in §A1.2) illustrates this: the sales letter was *"not particularly exciting"* by Lutzu's own admission, but the list was pre-qualified (internal Facebook group) and the offer was *"irresistible"* (one bonus alone valued at 4x the product price). Result: €50,000 in a single week on a €297 product. The copy was the smallest contributor — list + offer carried the campaign.

The advertorial-specialist writes the best copy possible, while transparently acknowledging the upstream variables that dwarf its contribution.
