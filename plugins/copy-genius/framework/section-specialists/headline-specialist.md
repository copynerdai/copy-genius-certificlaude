# Headline Specialist — Section Specialist

> Section specialist. Writes **headline blocks** — the pre-headline + H1 + sub-headline structure that anchors the top of every piece where the visual identity of the title carries persuasion weight. Headlines are responsible for the *first* of the four sales copy must make: the sale of attention. Roughly **80% of any piece's performance** depends on this block working.
>
> Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) when intent recognition matches headline production, OR by a format specialist ([lp-specialist](format-specialists/lp-specialist.md), [advertorial-specialist](format-specialists/advertorial-specialist.md), [ad-specialist](format-specialists/ad-specialist.md), [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md), [blog-specialist](format-specialists/blog-specialist.md)) when its piece needs a dedicated headline block. Reads the funnel brief, the brand wiki, the universal writing libraries — never reinvents what's documented elsewhere.
>
> **Scope boundary**: this specialist handles **structured headline blocks** — pre-headline + main headline + sub-headline as a coordinated unit, plus the visual gravity rules that govern how the reader's eye consumes them. It owns landing-page hero headlines, sales-letter top blocks, advertorial titles, static-ad visual-overlay / button / thumbnail headlines, blog post titles, VSL thumbnail titles, and any piece whose top surface is a deliberately composed title block. For **micro-openers** (email subject + first line, VSL spoken opening, video-ad 3-sec hook, social post first line) → load [hook-specialist](section-specialists/hook-specialist.md). When a piece needs both (e.g., a static ad with visual-overlay headline + caption opener) both specialists are invoked in parallel.
>
> **Self-contained file**: this specialist holds the full headline knowledge base — the 4 sales of copy, the 4 objectives of a headline, the 5 errors to avoid, the 20 pre-writing brainstorming questions, the 4 production methods, the 5 characteristics checklist with its sub-frameworks, the 6 emotional registers, the 7 U steroids, the proof-stacking pattern, the visual gravity rules. Strategic inputs (awareness, Big Idea, avatar, Chain of Beliefs, dominant emotion) come from the brief; this file teaches *how* to execute them as a headline block.

---

## 0. Execution path — read this first

> **Inline invocation** (called mid-piece by a format specialist — the COMMON case): take the inputs already gathered by the calling piece (§3) → calibrate to the awareness level (§6.3 table) and the Big Idea shape (§8) → produce 3-5 variants drawing from 2 production methods (§12) → run the short check: the 5 characteristics (§6), one dominant emotion (§7), visual gravity order (§4.5). Do not run the full protocol (20-question brainstorming, 10-25 variants, full §16 checklist).
>
> **Standalone invocation** (direct request, e.g. "dammi 10 headline per la landing"): full protocol in order — §3 inputs → §11 brainstorming → §12 production methods → §13 variant protocol → §14 output formats → §16 revision checklist.
>
> **Tier 1 bans apply while DRAFTING** (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.".
>
> **Swipe**: read the [headlines library](swipe/elements/headlines.md) IN FULL before generating variants — it complements the Formula Library in this file: the swipe holds curated PROVEN instances. Templates are emotion-agnostic, re-instantiate with the brief's anchor; verbatim stays in its original language, generate natively in the target language. Cite the template's `from:` slug in variant metadata. If empty, proceed without.
>
> **Reference/appendix sections — consult on demand only**: §A1 Formula Library (open when Method 1 is in play), §10 format rules (open only the subsection for the format in hand), §15 common pitfalls (open at QA).

---

## Quick navigation

### Part A — Identity & scope
- §1 [Purpose](#1-purpose)
- §2 [When invoked](#2-when-invoked)
- §3 [Required inputs](#3-required-inputs)

### Part B — Section expertise
- §4 [Core principles — the 4 sales, the 4 objectives, the 5 errors](#4-core-principles--the-4-sales-the-4-objectives-the-5-errors)
- §5 [Anatomy of the headline block — pre-headline, H1, sub-headline](#5-anatomy-of-the-headline-block--pre-headline-h1-sub-headline)
- §6 [The 5-characteristic checklist — the irresistible headline](#6-the-5-characteristic-checklist--the-irresistible-headline)
- §7 [The 6 emotional registers](#7-the-6-emotional-registers)
- §8 [The Big Idea articulation](#8-the-big-idea-articulation)
- §9 [Steroids — the 7 U + stories + recognized figures + proof stacking](#9-steroids--the-7-u--stories--recognized-figures--proof-stacking)
- §10 [Format-specific rules](#10-format-specific-rules)

### Part C — Operational workflow
- §11 [The 20-question pre-writing brainstorming](#11-the-20-question-pre-writing-brainstorming)
- §12 [The 4 production methods](#12-the-4-production-methods)
- §13 [Variant production protocol](#13-variant-production-protocol)
- §14 [Output formats](#14-output-formats)

### Part D — Quality control & references
- §15 [Common pitfalls](#15-common-pitfalls)
- §16 [Revision checklist](#16-revision-checklist)
- §17 [Cross-references](#17-cross-references)

### Appendix
- §A1 [Formula Library — 71 patterns in 18 categories (with swipe examples)](#appendix-a1--formula-library-71-patterns-in-18-categories)

---

# PART A — Identity & scope

## 1. Purpose

Produce ready-to-deploy headline blocks for any piece whose top surface is a coordinated title unit:

- **Landing-page hero headlines** — pre-headline + H1 + sub-headline as the ATF anchor
- **Sales-letter top blocks** — the title structure that carries the reader from arrival into the lead
- **Advertorial titles** — the editorial-style title that opens the article
- **Static-ad headlines** — visual-overlay headlines on image creatives, button copy on thumbnails, thumbnail titles
- **VSL thumbnail titles** — the text overlay on the video poster frame
- **Blog post titles** — SEO-aware titles that also do persuasion work
- **Standalone headline blocks** — when the request is for headline variants only, with no surrounding piece

Does NOT produce:

- Micro-openers (email subject + first line, VSL spoken opening, video-ad 3-sec hook, static-ad caption opener, social post first line) — handled by [hook-specialist](section-specialists/hook-specialist.md)
- The lead / opening narrative that follows the headline block — handled by [lead-specialist](section-specialists/lead-specialist.md)
- The piece itself — handled by the corresponding format specialist
- The Big Idea / Unique Mechanism / strategic angle — those come from the brief; this specialist *expresses* them in headline form, does not decide them
- The full offer composition — handled by [offer-specialist](section-specialists/offer-specialist.md)

The specialist is the **executor**, not the strategist. Strategic decisions (awareness, sophistication, Big Idea, dominant emotion, Chain of Beliefs targeting, Strategic Attack Angle for Product Aware) come from the brief. The specialist translates those decisions into a headline block that captures attention, sells the reading of the next line, and survives the visual gravity law of how the reader's eye moves on the page.

---

## 2. When invoked

The orchestrator routes to headline-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches:

- "write the headline", "scrivi l'headline", "draft the H1"
- "write the title", "scrivi il titolo", "draft 10 headline variants"
- "rewrite the hero headline", "rifai l'headline della landing"
- "draft the headline block for [piece]"
- "give me 5 headline variants for [offer / angle]"
- "scrivi pre-headline e sub-headline per [piece]"

Format specialists also call headline-specialist mid-execution when their piece needs a coordinated headline block. The orchestrator runs the **Brief readiness check** ([CLAUDE §6](CLAUDE.md)) before invoking. If the brief is missing the touchpoint's awareness level, Big Idea (when applicable), or the offer's dominant promise, the orchestrator surfaces the gap before calling this specialist.

---

## 3. Required inputs

The specialist needs these to start. Missing critical inputs are escalated to the orchestrator.

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md) of the specific funnel):

- §3.2 Mass Desire — the dominant desire calibration
- §3.3 Awareness Level — primary calibrator for which characteristics dominate (Most Aware → claim + benefit; Solution Aware → mechanism + benefit; Problem Aware → identification + curiosity; Unaware → curiosity + story-shaped hook)
- §3.4 Sophistication — affects whether the headline leads with the mechanism, the claim, the identification, or contrarian framing
- §3.5 Avatar reference — voice anchors, blocking beliefs, the exact thoughts the avatar has right now, their fears / frustrations / desires (critical for the 20-question brainstorming in §11)
- §3.6 Offer — the dominant promise (when relevant for direct-lead headlines); for indirect leads, only the promise is needed, not the full offer
- §3.7 Big Idea — when present, the Big Idea MUST be expressed by the headline block (typically in H1 + sub, see §8)
- §3.8 Chain of Beliefs — the specific beliefs the headline targets (a single headline targets one to three beliefs maximum; multiple variants target different beliefs)
- §3.9 Proof inventory — for proof-led headlines and proof-stacked sub-headlines
- §4.2 / §4.3 Touchpoint block — format (landing page / sales letter / advertorial / static ad / blog / VSL thumb), length budget, any pattern preference, the **Strategic Attack Angle** if Product Aware

**From the brand wiki**:

- `brands/<brand>/brand-copy-rules.md` — voice (mandatory). The headline must sound like the brand.
- `brands/<brand>/swipe.md` — brand-specific headline examples for voice calibration (when present)
- `brands/<brand>/testimonials.md` — for proof-led headlines (specific results, customer claims)
- `brands/<brand>/transcripts/` — for headlines that need a found phrase from the avatar's own vocabulary, or a founder anecdote compressed into a headline

**From the cross-specialist writing libraries** (read once during pre-writing):

- [writing-principles](core/writing/writing-principles.md) — read SECTION A (principles) + SECTION B (anti-AI patterns) **post-draft** as the refinement layer
- [big-idea](core/strategic-frameworks/big-idea.md) — Big Idea construction; the headline is often the surface where the Big Idea crystallizes
- [proof-elements](core/strategic-frameworks/proof-elements.md) — the proof typology that feeds the credibility characteristic (§6.2) and proof stacking (§9)
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — every headline activates one or more tactical techniques (Intensification, Gradualization, Mechanization, Camouflage, Inversion, Borrowed Authority)
- [naming](core/strategic-frameworks/naming.md) — when the headline carries a proprietary mechanism name
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — belief numbering and rings
- [emotional-intelligence](core/writing/emotional-intelligence.md) — **conditional**. Open when the brief specifies the dominant emotion (§7) and the touchpoint block specifies emotional anchors. Read ONLY the entries for the dominant emotion(s).

---

# PART B — Section expertise

## 4. Core principles — the 4 sales, the 4 objectives, the 5 errors

### 4.1 — The 4 sales of copy

Every piece of copy must make four sales, in this exact order. They cannot be skipped, reordered, or compressed.

| # | Sale | What it converts | Where it lives |
|---|---|---|---|
| 1 | **Attention** | Awareness into focus | The headline block |
| 2 | **Reading** | Focus into sustained engagement | The first 500-800 words (the lead) |
| 3 | **Product** | Engagement into desire | The body + offer block |
| 4 | **CTA** | Desire into action | The close + urgency + scarcity |

The headline's job is **the first sale only**. The reader who has read the headline has not yet been sold the reading, the product, or the action. The headline that tries to do all four sales at once collapses into a feature-list dressed as a title.

### 4.2 — The 4 objectives of a headline

The headline block has four objectives, in priority order:

1. **Sell the reading of the next line.** Not the product (unless the brief calls for a direct lead). The headline sells the sub-headline, which sells the first paragraph of the lead, which sells the next paragraph, and so on.
2. **Be the marketing-message advertisement.** Pass the **newspaper-ad test**: if this headline appeared as a classified ad in a newspaper, would the target reader call for more information, or buy directly (in the direct-lead case)?
3. **Make the reader read the first line of the body (or watch the first seconds of the video).** Not the whole piece. One step at a time.
4. **Articulate the Big Idea** (when one is present in the brief — see §8).

The 80% heuristic: roughly 80% of a piece's performance depends on the headline block working. Adjust creative attention accordingly — but never to the point of starving the offer block, which is the close-side equivalent ([offer-specialist](section-specialists/offer-specialist.md) §4.3).

### 4.3 — The 5 errors to avoid (anti-patterns)

The five most common failure modes when writing headlines. Every headline draft is screened against these before any refinement begins.

| # | Error | Diagnostic |
|---|---|---|
| **5.1** | **Not surprising** | The reader's brain pattern-matches the headline to something already seen. *"Lose weight fast"* is dead before it's read. |
| **5.2** | **Incoherent with the copy** | The headline sets up an expectation the body does not deliver. Bait-and-switch — the reader feels manipulated. |
| **5.3** | **Not differentiated** | The same promise as the competition. Fails the *"already heard this"* gate. |
| **5.4** | **Predictable** | The reader knows exactly where the piece is going within the first three words. Predictability is the cancer of copy. |
| **5.5** | **Not targeted** | The headline talks about the product, or in abstract terms, or to a generic audience — not to *this* avatar with *their* specific situation. |

These five errors are the inverse of the five characteristics (§6). The diagnostic loop: a headline that does not display the five characteristics will fall into one of the five errors.

### 4.4 — The headline sells the next line, not the product

This principle is so often violated that it deserves its own statement. The headline's deliverable is *the second sale moving forward, not the third or fourth.* If the headline tries to compress the product reveal, the price, and the CTA into the title block, it loses the attention sale itself.

The exception: **direct lead headlines** for Most Aware audiences, where the offer IS the angle and the audience expects to see it immediately. In those cases the headline can carry product + benefit. For every other awareness level, the headline sells the curiosity, the promise, the angle, or the identification — *not* the product.

### 4.5 — The Visual Gravity Law

The reader's eye does not move randomly across the headline block. It follows a predictable gravity pattern that the specialist must respect.

For a hero block with image, pre-headline, H1, and sub-headline, the eye consumes in this order:

1. **Image** (if present and visually dominant) → 0.5 sec
2. **H1** (visually largest text element) → 1-2 sec
3. **Sub-headline** (just below H1) → 1-2 sec
4. **First body line** (just below sub-headline)
5. **Only after all of the above**: the **pre-headline** (the text above the H1)

**Implication**: the pre-headline is the *last* element the reader sees, despite being the first one positioned. Anything critical placed in the pre-headline is functionally invisible. Pre-headlines are useful for qualifying the reader (*"For business owners over 40..."*) or for setting a small context note — but **never for carrying the main claim or the Big Idea**.

**Diagnostic**: if the headline block does not work when the pre-headline is hidden, the pre-headline is doing too much. Move its content into the H1 or the sub-headline.

This law is non-negotiable. You cannot reverse the gravity by typography tricks — the eye reads the largest element first regardless of position.

---

## 5. Anatomy of the headline block — pre-headline, H1, sub-headline

The headline block has three coordinated components. Not all pieces use all three — the brief specifies which are present.

### 5.1 — Pre-headline (optional)

A smaller-font line positioned *above* the H1. Per the Visual Gravity Law (§4.5), it is read last, not first.

**Function**: qualify the reader, add a small context tag, signal a sub-niche, or carry a press / authority signal.

**Patterns that work**:
- Audience qualifier — *"For independent professionals over 40..."*
- Authority pre-stamp — *"From the team behind [recognized credential]..."*
- Series marker — *"Special report 14 of 27..."*
- Sub-niche specifier — *"For [profession] in [region]..."*

**Patterns that fail**:
- Carrying the main Big Idea (it will be read last and miss its moment)
- Carrying the price (price is part of the offer block, not the headline)
- Carrying a question that the H1 then answers (the eye reads them out of order)

**Length**: 5-15 words. The pre-headline is short by design — if it grows, it's pretending to be a headline.

**Rule**: if the headline block works *without* the pre-headline, leave it off. Adding a pre-headline because the layout has space is the wrong reason.

### 5.2 — The H1 (main headline)

The visually dominant text element. Carries the weight of the promise, the angle, the curiosity hook, or the identification. Read first by the eye (after any dominant image).

**Function**: the first sale of attention. Express the Big Idea (when present), articulate the dominant promise, install the curiosity gap, or name the reader's situation specifically.

**Length envelopes** (by format):
- LP hero / sales letter top: 6-20 words typical; longer is allowed if every word earns its place
- Static-ad visual overlay: 4-10 words (visual real estate is tighter)
- Static-ad button / thumbnail: 3-7 words
- Blog post title: 6-15 words (SEO-aware but persuasion-first)
- VSL thumbnail: 4-10 words
- Advertorial title: 8-20 words (editorial register tolerates longer)

**Sound**: a strong H1 reads like a magnetic claim, a curiosity gap, an identification, or a story compressed into one line — never like a corporate tagline.

**Visual treatment**: largest font, distinctive weight, often with one or two words emphasized (color, italic, underline) to anchor the eye on the highest-charge term.

### 5.3 — Sub-headline

The line(s) positioned *immediately below* the H1, smaller font but still large enough to register on the eye's first sweep. Read second.

**Function**: expand the H1, clarify the angle, add proof or specificity, open the door to the body. The reader who has read the pre + H1 + sub must know: *who this is for, what it's about, why they should keep reading.*

**Sub-headline patterns that work**:
- **Expand the claim** with specificity — H1: *"Reverse type-2 in 90 days"* + Sub: *"Using a [duration]-second daily protocol developed by a [credential] in the [research area] research community"*
- **Add the proof anchor** — H1: *"The secret behind [outcome]"* + Sub: *"[N] independent studies confirm. [N,NNN] users have already validated. Here's the protocol..."*
- **Stack proof** (see §9 proof stacking) — H1: short claim + Sub: 3-5 proof elements in sequence
- **Resolve the curiosity** the H1 opened (partially — leave enough loop for the body)
- **Identify the avatar precisely** when the H1 is broader

**Sub-headline anti-patterns**:
- Restating the H1 in different words (wastes attention)
- A generic call-to-engage (*"Read on to find out..."* — vapid)
- Pure feature listing without persuasion charge

**Length**: typically 20-50 words for LP / sales letter; shorter for ads / thumbnails / blog titles. The sub is where proof and specificity expand — it is allowed to be longer than the H1.

### 5.4 — Headline block composition rules

Three rules govern how the three components interact:

1. **Different jobs, no overlap.** The H1 carries the *angle*; the sub carries the *expansion + proof*; the pre carries the *qualifier or context tag*. If two components are saying the same thing, one is wasted.
2. **The eye-order test.** Read the block in the order the eye actually consumes it (H1 → sub → body → pre). Does it work in that order? If the answer is *"only if you read it top-to-bottom in printed order,"* the block is broken.
3. **One emotional register dominates** (see §7). The H1 sets the emotional tone. The sub can support with a secondary emotion or with logic/proof, but two competing dominant emotions split the block's force.

---

## 6. The 5-characteristic checklist — the irresistible headline

The core diagnostic framework. Every headline draft must screen positive on all five characteristics. A headline weak in even one falls into the corresponding error (§4.3).

### 6.1 — INCISIVE

**Definition**: every word earns its place. The headline cannot be shortened by even one word without altering the meaning.

**Operational tests**:

- **The word-removal test**: read the headline. Try removing each word in turn. If the meaning survives the removal, the word was filler. Cut it.
- **Word-class hierarchy** (in descending order of persuasion charge):
  - **Verbs** carry the most weight. *"Crush"* > *"defeat"* > *"beat"*. *"Reverse"* > *"improve"* > *"address"*. *"Disintegrate"* > *"break"* > *"affect"*. Build a personal lexicon of high-charge verbs across the brand's vertical.
  - **Nouns** define category and emotional anchor. *"Cure"* > *"remedy"* > *"treatment"*. *"Catastrophe"* > *"problem"* > *"issue"*. *"Discovery"* > *"finding"* > *"observation"*.
  - **Adjectives** add color, but at diminishing returns. *"Revolutionary"* > *"effective"* > *"good"*. Don't lean on adjectives to compensate for weak verbs.
  - **Adverbs** are generally a sign of weakness. *"Hit hard"* loses to *"smash."* *"Increased significantly"* loses to *"exploded."* If you need an adverb, your verb is too weak — replace the verb.

- **Visceral language**: words that hit the body, not just the brain. *"Strangling"* > *"limiting."* *"Bleeding"* > *"losing."* *"Detonate"* > *"trigger."* The headline must reach the reader's stomach, not just their intellect.

- **Vocabulary tools**: dictionary of synonyms, thesaurus of collocations, semantic-field maps. The strongest verb in any given context is rarely the first one that comes to mind — it's the third or fourth try, after the obvious options have been considered and rejected.

**Diagnostic question**: *"Could a smarter writer say this with fewer or sharper words?"* If yes, rewrite.

### 6.2 — CREDIBLE

**Definition**: the headline carries proof — or sits next to proof in the sub-headline — sufficient to make every claim defensible.

**Rule of proximity**: every audacious promise needs its proof *in the same line of sight*. A promise in the H1 with proof buried 800 words down in the body is a broken contract. The reader either dismisses the promise as unsupported, or stops reading.

**Categories of proof to stack into the headline block**:

| Category | Example pattern |
|---|---|
| **Press / media stamps** | *"As featured in [N tier-1 outlets]"* in the pre-headline strip |
| **User count** | *"Already used by [N,NNN] [audience descriptor]"* |
| **Credentialed authority** | *"[Credential]-certified [profession] reveals..."* |
| **Specific track record** | *"This is the [specific result] this approach has produced [N] times"* |
| **External citation** | The headline framed as a verbatim quote from a credible source (use quotation marks — see §9.5) |
| **Scientific study** | *"[N] peer-reviewed studies confirm..."* |
| **Prestigious location** | *"Live from [recognized institution]..."* |
| **Demonstrable record** | A specific, verifiable past prediction or accomplishment |

**Proximity rule in practice**: the H1 carries the claim. The sub-headline carries the proof or proof-stack that supports the claim. If the H1 is bold, the sub must be heavier on proof. If the H1 is more measured (e.g., a question), the sub can lead with the claim and proof appears in the body.

**Operational rule**: never leave the H1's promise unsupported when the eye reaches the sub. The reader who reads only those two surfaces must come away with *"I see why this could be true."*

### 6.3 — IMPLIES OR INCLUDES IMMEDIATE BENEFIT

**Definition**: the reader, having read the headline block, knows what they get from continuing to read.

**Default mode (99% of cases)**: a benefit is present — either explicit (*"How to [specific outcome]"*) or implicit (*"Here's why [situation the reader recognizes] is happening — and what to do"*). The benefit can be the *information* the piece will deliver, not necessarily the product's outcome.

**Exception mode (1-2% of cases)**: the benefit is *omitted*, and the headline relies entirely on curiosity, identification, or pain-point naming. This is reserved for highly sophisticated markets where overt benefit-promising activates the reader's *"already-heard-and-failed"* skepticism filter.

When omitting the benefit:
- The headline must name the reader's **specific maximum pain point** with surgical accuracy
- The sub-headline carries the implicit benefit (*"Inside, [N] [audience descriptor] reveal what they wish they'd known earlier"*)
- The body must deliver value within the first 100 words to compensate for the unstated benefit promise

**Benefit calibration by awareness**:

| Awareness | Benefit treatment |
|---|---|
| **Most Aware** | Benefit + price + urgency can all live in the H1 |
| **Product Aware** | Benefit + differentiator (the mechanism that makes this offer different) |
| **Solution Aware** | Benefit + mechanism (the *how* is the key) |
| **Problem Aware** | Benefit + identification with the pain (specifically named) |
| **Unaware** | Benefit is *implied* through identification or curiosity — never named directly |

### 6.4 — STIMULATES CURIOSITY

**Definition**: the headline creates a cognitive gap the reader cannot ignore. Curiosity is an instinctive emotion — the brain compulsively seeks closure on opened loops.

Six sub-strategies, often combined:

#### 6.4.1 — Paradox / strange detail

A small detail that contradicts expectation, attached to the otherwise normal claim. *"How a [unlikely profession] helped me [outcome the unlikely profession doesn't suggest]."* *"The [outcome] secret discovered by a [unexpected demographic]."*

The strange detail multiplies the headline's force by an order of magnitude. Without the detail, the headline reads as one of many. With it, the reader's brain locks onto *"how can this be?"*

#### 6.4.2 — Strange or curious images

When the headline block sits next to an image, the image is part of the headline. A strange, unexpected, or curiosity-provoking image amplifies the H1. Patterns: an everyday object in a non-standard context, an implausible juxtaposition, a visual that contradicts the H1's words.

The image must connect to the body within the first 30-60 seconds of reading — pure decoration without payoff frustrates rather than rewards.

#### 6.4.3 — Contrast (challenge the reader's belief)

Open by stating what the reader currently believes, then reverse it. *"Lowering [metric] is wrong if you have [condition]."* *"[Common practice] is the reason your [problem] won't resolve."* *"Avoiding [common villain] is making things worse."*

The reverse must be **defensible** — backed by proof inside the piece. Contrast without substantiation is a stunt.

#### 6.4.4 — Strategic words / proprietary mechanism name

A single distinctive word or short phrase elevates an otherwise generic claim. *"The forbidden fruit"*, *"the cockroach strategy"*, *"the [recognized-figure]-style loophole"* — these phrases carry a curiosity charge that the surrounding words cannot.

This is where Unique Mechanism naming ([naming](core/strategic-frameworks/naming.md)) lands. A proprietary or proprietary-feeling name for the mechanism makes the headline curious by definition — the reader does not know what it is and must read to find out.

#### 6.4.5 — Provocative questions (5 types)

| Type | What it does | Example pattern |
|---|---|---|
| **Rhetorical** | Pre-loads the answer the reader will agree with | *"What's wrong with [aspirational outcome]?"* |
| **Challenging** | Targets the reader's ego or vanity | *"Do you have what it takes to [premium outcome]?"* |
| **Guiding** | Walks the reader toward the offer's frame | *"Is there anyone left we can trust?"* (sets up the brand as the answer) |
| **Doubting** | Adds a question mark to a claim that would be too audacious as a statement | *"Has [unlikely scientific outcome] finally been achieved?"* |
| **Identifying** | Names the reader's specific situation as a question | *"Are you [specific avatar trait] and struggling with [specific problem]?"* |

Questions enable claims too bold to be stated directly. The question mark functions as a credibility hedge — the headline can promise more than a statement headline would dare.

**The "this/these" magic word**: inserting *"this"* or *"these"* into a generic question dramatically sharpens it. *"Do you make errors in [topic]?"* becomes *"Do you make THESE errors in [topic]?"* — and the reader must know *which* errors, and whether they make them.

The word does not work in isolation. It potentiates a question that already has structure. Drop it into a flat headline and it does nothing.

#### 6.4.6 — Shocking statements

A flat, declarative sentence whose content contradicts everything the reader expects. *"[Doing the opposite of conventional wisdom] saved my life."* *"[Common assumption] is the reason for [problem the reader has]."*

The shock must be **specific** — a vague shocking claim reads as melodrama. The shock must be **defensible** — backed by the body. The shock must be **relevant** — connected to the reader's actual situation, not shock-for-shock's-sake.

### 6.5 — SPECIFIC

**Definition**: the headline contains concrete, verifiable details — never abstractions or generalities.

Specificity does two things simultaneously: it potentiates **credibility** (a specific number is harder to dismiss than a round number) and it potentiates **curiosity** (specific details create vivid mental images that the brain wants to resolve).

**The eight modes of specificity**:

| # | Mode | Pattern | Example shape |
|---|---|---|---|
| 1 | **Specific figures** | Exact numbers, not rounded | *"€2,319.15 in 12 minutes"* rather than *"about three grand"* |
| 2 | **Specific time** | Identifiable moment, not too precise | *"On the night of my [specific event]"* — not *"at 2:33:45 AM"* (which kills credibility) |
| 3 | **Specific location** | Recognized place anchored | *"A [profession] from [recognizable city]"* — adds tridimensionality |
| 4 | **Privileged access** | Insider position implied | *"The assistant to [recognized figure] reveals..."* |
| 5 | **Specific benefits** | Itemized symptoms / outcomes | *"Exhaustion, brain fog, joint pain, sleep struggles..."* — not *"health issues"* |
| 6 | **Specific solution** | Named mechanism / method | *"Using a [specific category] formula"* — not *"using a method"* |
| 7 | **Specific image** | Vivid visual phrase | *"You're literally feeding cancer cells when you put this on your dinner plate"* — image, not abstraction |
| 8 | **Detail for tridimensionality** | One unexpected trait that makes the subject specific | *"The marketing genius who's afraid of flying"* — the *"afraid of flying"* adds tridimensionality and curiosity |

**Calibration warning**: specificity has a sweet spot. Too vague kills credibility. Too precise kills credibility (the reader thinks *"how could you possibly know that?"*). A burglary headline that says *"on the night of my birthday"* works. *"At 2:33:45 AM"* does not — no one knows exactly when burglars enter. The specificity must be plausible-knowable.

---

## 7. The 6 emotional registers

A strong headline is **emotionally tinted** in one dominant register. Six registers carry the most persuasion charge. The brief specifies the dominant emotion (or the specialist proposes it for confirmation); the specialist then writes within that register.

**The one-dominant rule**: a single headline carries one dominant emotion. Secondary emotions can live in the sub-headline. Two competing dominant emotions split the block's force and dilute both.

**Canonical labeling**: the six registers below are selection shortcuts. When labeling the dominant emotion in the delivered output (§14), use the canonical entry name from [emotional-intelligence](core/writing/emotional-intelligence.md) — its Quick Index lists the 13 families and their entries.

### 7.1 — Anger

The most viral emotion. Anger triggers a *movement* response — the reader is mobilized to read on and act.

**When it works**: when there is a real external villain — an injustice, an equity violation, an expectation that has been betrayed by some identifiable party.

**Headline patterns**:
- Name the villain (the industry, the institution, the conventional wisdom)
- Frame the reader as the victim of an injustice they may not have fully articulated
- Position the brand as the equalizer — *"It's time someone said this..."*

**Caution**: anger without a defensible villain reads as conspiracy or grievance theater. The villain must be real.

### 7.2 — Betrayal

A specific subtype of anger. Triggered when the reader feels deceived by someone they trusted.

**When it works**: when the brand can credibly expose an actual deception — not a hypothetical one. Betrayal headlines require **strong proof** in the sub or immediately adjacent body, or they collapse.

**Headline patterns**:
- *"[Trusted authority] has been lying about [topic]"*
- *"The [number] [trusted-authority-figures] who are not what they seem"*
- *"What [trusted source] never told you about [topic]"*

The betrayed reader becomes a buyer at higher rates than the merely angry reader — but the betrayal must be substantiated, or it backfires.

### 7.3 — Revenge

An extension of anger and betrayal. The reader has been wronged, and the offer is positioned as the *tool of redress*.

**When it works**: when there is a clean narrative arc from past wrong to present remedy, and the product or method genuinely functions as the corrective.

**Headline patterns**:
- *"Your [adversary] broke you — now flip the table"*
- *"Time to [reverse the wrong] — [N] approaches that work"*
- *"[Offer] is how you take back what's yours"*

**Discipline**: do not force revenge where the narrative doesn't carry it. Revenge headlines for a vitamin or a productivity tool look ridiculous. They suit verticals where there is a real adversarial relationship between the reader and some external party.

### 7.4 — Fear

Instills urgency. The reader who is afraid becomes the reader who acts immediately rather than later.

**When it works**: when the threat is real, current, and the offer credibly addresses it. Fear pairs best with current events — a fear-based headline tied to something the reader saw in the news this week is multiplicatively more powerful than a generic fear headline.

**Headline patterns**:
- Name the specific risk with statistics — *"[N] of every [N] people will [bad outcome]"*
- Tie to current events — *"After [recent event], here's what's at stake for [audience]"*
- Frame inaction as the riskier choice — *"Doing nothing is no longer safe"*

**Critical pairing**: fear *alone* paralyzes. Fear plus an action-emotion (greed, ambition, hope) creates movement. The sub-headline almost always carries the action-emotion when the H1 carries fear.

### 7.5 — Greed

The desire for more — money, energy, beauty, status, time. Greed is the most-used emotion in the headline arsenal — which means readers are partially desensitized to it.

**When it works**: when paired with **maximum specificity** and **proof stacking**. Greed without specificity reads as the thousandth empty promise. Greed without proof activates the *"another scam"* filter.

**Headline patterns**:
- Specific number greed — *"How [identifiable demographic] is collecting [specific dollar figure] using [specific mechanism]"*
- Aspirational specificity — *"The [recognized aspiration] in [specific time window]"*
- Quoted-result greed — H1 framed as a verbatim claim from a user

**Discipline**: never lead with greed alone. Always combine with specificity (§6.5) and proof (§6.2) — those two carry the credibility that greed-alone burns through.

### 7.6 — Frustration

The emotion of having tried many things and seen none of them work. Effective in **mature, saturated markets** where readers have been exposed to many failed promises.

**When it works**: when the brand can credibly position itself as the alternative to the failed approaches — *not* as another version of them. Frustration headlines built on empathy, not promise.

**Headline patterns**:
- *"Tired of [common failure]?"* — open with the validation
- *"If you've tried [N approaches] and nothing has worked..."* — install identification
- *"It's not your fault — here's what [authorities] never told you"* — discharge blame from the reader onto the failed approaches

The frustration headline never opens with a new promise. It opens with empathy. The promise comes after the reader has felt *seen*.

---

## 8. The Big Idea articulation

When the brief specifies a Big Idea, the headline block is the surface where the Big Idea crystallizes. A strong Big Idea is often *already* the headline — the work is to recognize it and frame it.

A Big Idea is composed of three elements ([big-idea](core/strategic-frameworks/big-idea.md)):

1. **Dominant Promise** — the outcome the reader wants most
2. **Unique Mechanism** — the distinctive *how* that makes this offer different from alternatives
3. **Intellectually interesting** — the cognitive gap or curiosity that makes the idea engaging beyond the promise itself

**Translation to the headline block**:

| Big Idea element | Where it lands |
|---|---|
| Dominant Promise | The H1 (or the sub when the H1 carries the mechanism) |
| Unique Mechanism | The H1 (when the mechanism is the angle) or the sub (when the H1 is benefit-led) |
| Intellectually interesting | The curiosity gap (§6.4) — usually carried by the H1's paradox / specificity / strange detail |

**Three canonical headline shapes** based on which element leads:

**Shape A — Promise-led** (Most Aware, Product Aware)
- H1: *"[Specific aspirational outcome] using [unique mechanism]"*
- Sub: proof + specificity + secondary benefit

**Shape B — Mechanism-led** (Solution Aware, Problem Aware)
- H1: *"The [unique mechanism] that [does what nothing else does]"*
- Sub: the promise this mechanism delivers + proof

**Shape C — Curiosity-led** (Problem Aware, Unaware)
- H1: a paradox, strange statement, or question that intellectually demands resolution
- Sub: the promise + the mechanism, partially revealed

The selection is awareness-driven and brief-specified. The specialist does not choose the shape — the brief does. The specialist *executes* the shape.

---

## 9. Steroids — the 7 U + stories + recognized figures + proof stacking

After the headline draft passes the 5-characteristic checklist (§6), four steroid layers amplify it. Apply them when the draft is structurally sound — never as a substitute for fixing structural weakness.

### 9.1 — The 7 U

A two-tier checklist. The first four are the foundation. The next three are the multipliers.

**Foundation (the 4 U)**:

1. **Useful** — does the headline promise something the reader values?
2. **Unique** — is it differentiated from competing headlines in the same vertical?
3. **Ultra-specific** — are concrete details present (figures, names, mechanisms)?
4. **Urgent** — is there a reason to read NOW, not later?

**Multipliers (the 3 advanced U)**:

5. **Ultra-fascinating** — is the mechanism named with proprietary or proprietary-feeling language? Is the verb visceral?
6. **Ultra-temporal** — is the headline tied to a current moment (a season, a news event, a recent shift)?
7. **Ultra-dimensionalized** — does the reader form a vivid mental picture of the post-outcome state?

**Diagnostic sweep**: read the headline draft and check off each U. The hierarchy is one ladder, not two competing thresholds: **7/7 is the bar to aim for on the recommended pick**; the delivery floor is the §16 checklist's **minimum 5/7 on the final variant**. A draft scoring 3/7 has room to grow. A draft scoring 0/7 should be reconsidered structurally.

### 9.2 — Story headlines

A mini-narrative compressed into a single line. The reader's brain locks onto stories more powerfully than onto claims.

**Patterns**:
- A character + an unexpected event — *"They laughed when [character] [action], until [reversal]..."*
- A confession opening — *"My [relationship] told me [provocative line] on our [milestone]..."*
- A dramatic mid-scene — *"My [relationship] was holding [object] in one hand and [object] in the other..."*

**Application**: story headlines work hardest when the body of the piece is also story-shaped. A story headline followed by a feature-list body produces dissonance.

### 9.3 — Recognized-figure headlines

A celebrity, public figure, recognized organization, or known-by-name authority included in the headline carries borrowed credibility.

**Rules**:

- The link to the recognized figure must be **real**. Inventing a connection that doesn't exist is dishonest and exposes the brand to risk.
- The link must be **logical**. A recognized figure named in a headline must have a plausible connection to the product or topic.
- The link must be **disclosed clearly** in the body. The H1 hint is followed by the full reveal inside.

**Patterns**:
- *"[Recognized figure's] approach to [topic] — now available to everyone"*
- *"What [recognized figure] knows about [outcome] that the rest of the industry doesn't"*
- *"An open letter to [recognized figure who has the problem the product solves] — and anyone else who [problem]"*

A clean link to a recognized figure can do more for a headline's force than several other steroids combined. Use sparingly to preserve the impact.

### 9.4 — Proof stacking

A pattern where the H1 + sub-headline carry **multiple stacked proof elements** in sequence. Each proof element validates a different aspect of the claim, and the cumulative weight makes the promise feel unassailable.

**The pattern in practice**:

- H1: the main claim or curiosity hook
- Sub: a sequence of proof elements, each adding a different category of validation

**Categories that stack well**:
- Credentialed expert (a real authority with verifiable title)
- Historical proof (something that has worked for [N] years means it works)
- Scientific study (peer-reviewed, citable)
- Reason-why (a specific mechanism explanation that makes the claim *plausible* mechanically)
- Case study (a specific named person or organization with a specific result)
- Press citation (third-party media confirmation)
- Numbers / statistics (specific user counts, success rates, dollar figures)

**A canonical 4-proof stack**:

- Sub element 1: credentialed authority (*"[Credential]-certified [profession]..."*)
- Sub element 2: historical proof (*"...uses an approach validated over [N] years..."*)
- Sub element 3: scientific anchor (*"...confirmed in [N] independent studies..."*)
- Sub element 4: reason-why (*"...because it works at the level of [specific mechanism explanation]"*)

By the time the reader reaches the body, the resistance to the claim has been pre-dismantled.

### 9.5 — Ninja closing tricks

Three small techniques that compound when applied:

- **Quotation marks around the H1** — the headline appears as a citation from someone else. Reader's brain perceives external corroboration. Use when the headline is bold enough to benefit from the *"someone is saying this"* framing.
- **Short H1 + rich sub** — the H1 condenses the angle into a punch (4-8 words); the sub does the heavy lifting of benefit, proof, and specificity. Often the strongest configuration for landing pages.
- **Anti-pre-headline discipline** — most blocks work without a pre-headline. If the H1 + sub carry the load, leave the pre-headline off (see §4.5 and §5.1).

---

## 10. Format-specific rules

Headline blocks behave differently across formats. The specialist tunes the block to the format the brief specifies.

### 10.1 — Landing page hero headline

- Composition: pre (optional) + H1 + sub
- H1 length: 8-20 words
- Sub length: 20-50 words
- Mobile-first: the H1 + sub must complete their reading above the mobile fold (~600px). If the sub spills below, the block is broken on mobile.
- Strategic Attack Angle: when the brief is Product Aware, the H1 expresses the Attack angle field of the funnel brief §3.7 (Big Idea block — chosen by the Strategist; craft source: [big-idea](core/strategic-frameworks/big-idea.md) + the 5 Schwartz angles in the Product Aware section of [awareness-levels](core/strategic-frameworks/awareness-levels.md)). If the field is missing for a Product Aware target, propose an angle derived from the Big Idea and ask the copywriter to confirm — do not silently guess, do not hard-block.
- Conventional placement: H1 visually largest, sub immediately below with slightly smaller weight, pre-headline above H1 in even smaller weight (when present)

### 10.2 — Sales letter top block

- Identical structure to LP hero but the piece is longer-form and the reader is in a different mental state on arrival
- Pre-headline more useful here than on LP — sales-letter readers tolerate qualifier text better
- H1 can be longer (up to 25 words) when the sales letter is long-form Problem Aware / Unaware
- Sub-headline often runs to 50-70 words and itself carries multi-sentence proof stacking

### 10.3 — Advertorial title

- The title must read as **editorial**, not as marketing. The reader believes (or half-believes) they are reading content, not an ad.
- Patterns: news-style (*"[Surprising finding] uncovered by [credible source]"*), feature-style (*"How [unlikely figure] solved [common problem]"*), report-style (*"Inside the [topic] [report / investigation / study]"*)
- Avoid: imperative verbs (*"Buy now"*, *"Click here"*), commercial vocabulary (*"offer"*, *"discount"*, *"save"*), brand naming in the title itself
- Sub-headline reads as a deck or sub-deck in editorial layouts

### 10.4 — Static-ad visual overlay

- The H1 is the text overlaid on the ad image
- Length: 4-10 words (real estate is tight)
- Must read at thumb-scroll speed (sub-second)
- Strong contrast: visual emphasis (color, weight, capitalization) on the highest-charge word
- Often paired with a caption opener (handled by [hook-specialist](section-specialists/hook-specialist.md)) — together, overlay + caption opener form the ad's micro-headline structure

### 10.5 — Static-ad button / thumbnail headline

- Even shorter: 3-7 words
- Must function in isolation (the reader sometimes sees only this)
- Verb-forward — leads with the action or the outcome
- No abstractions: this is the cleanest expression of incisiveness (§6.1)

### 10.6 — Blog post title

- SEO consideration: the title may need to include a keyword or phrase
- Persuasion-first principle: SEO matters, but a keyword-stuffed title that fails the attention sale won't get traffic regardless of ranking
- Length: 6-15 words; ~60 characters typical for SEO
- Lists and numbers perform well in blog titles (*"[N] ways to..."*, *"[N] things [audience] do differently"*) — these are the formula-base shapes (§12.1)
- Avoid clickbait — a blog title that lies about what the post delivers destroys trust on the second click

### 10.7 — VSL thumbnail title

- Text overlaid on the video poster frame
- Length: 4-10 words
- Must work in conjunction with the thumbnail image (which is half the message)
- Strong curiosity charge — the thumbnail's job is to be clicked, and the title text + image together do that work
- Pairs with the VSL's first spoken line (handled by [hook-specialist](section-specialists/hook-specialist.md) as the pattern interrupt) — together, thumbnail title + first spoken line form the VSL's opening structure

---

# PART C — Operational workflow

**Step 0 — before any drafting**: read [feedback-rules](core/feedback-rules.md) (global) + `brands/<brand>/brand-copy-rules.md` (brand — overrides global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d).

## 11. The 20-question pre-writing brainstorming

Before writing any headline draft, the specialist runs through 20 questions designed to surface the raw material the headline will be built from. Not all 20 questions yield usable answers for every brief — but every brief benefits from running the full sweep.

The output of this brainstorming is a structured document with 20 numbered sections, each populated from the brief, brand wiki, transcripts, and external research (forums, reviews, social media).

| # | Question | What the answer feeds into |
|---|---|---|
| 1 | What does the prospect say about the **common enemy**? | The villain language for anger / betrayal / revenge headlines (§7.1, §7.2, §7.3) |
| 2 | What does the prospect say about the **competitors** (in forums, review pages, social)? | The frustration language (§7.6) and the differentiation angle (§4.3 error 3) |
| 3 | How does the prospect describe **their problem in their own words**? | The avatar-language vocabulary that goes into identification headlines (§6.5 mode 5, §10.3) |
| 4 | What are the prospect's biggest **fears, frustrations, and desires**? | The emotion selection (§7) |
| 5 | What **specific responsibility** does the prospect want to offload? | The leadership-positioning angle (the brand takes the responsibility off the reader's shoulders) |
| 6 | What could you say that the prospect would **immediately agree with**? | The opening claim that continues the conversation already in the reader's head |
| 7 | What **current news** is the prospect worried or excited about? | Ultra-temporal steroid (§9.1 U6) and current-events fear pairing (§7.4) |
| 8 | What is the prospect's **#1 unresolved question**? | The curiosity gap (§6.4) and the mystery-resolution angle |
| 9 | What **story** could hook the prospect immediately? | Story headlines (§9.2) |
| 10 | What **recognized figure / organization / authority** connects to the topic? | Recognized-figure headlines (§9.3) |
| 11 | What can you know about the prospect's situation **better than they do themselves**? | Empathy-driven headlines that demonstrate deep understanding |
| 12 | What **image** could amplify the headline visually? | Image + headline integration (§6.4.2) |
| 13 | What **negative result** does the prospect want to avoid? | Fear-led headlines (§7.4) and pain-led identification (§10.3) |
| 14 | What **conventional wisdom myth** can you debunk in the prospect's market? | Contrast strategy (§6.4.3) and shocking statements (§6.4.6) |
| 15 | What **real deception / scam / hidden manipulation** can you expose? | Betrayal headlines (§7.2) — must be real, never invented |
| 16 | What **mystery** in the prospect's market can you resolve? | Curiosity gap (§6.4) and the paradox angle (§6.4.1) |
| 17 | What **strong guarantee or bold promise** can the brand make immediately in the headline? | Direct-lead headlines (Most Aware, §6.3 awareness table) |
| 18 | What **natural deadline / urgency** (non-promotional, tied to the topic) exists? | Urgency in the H1 / sub (§9.1 U4) |
| 19 | What **parable / biblical reference / cultural narrative** could frame the offer? | Narrative borrowing for resonance (use carefully — must fit the brand) |
| 20 | What **future-pacing transformation** can the headline imply? | Ultra-dimensionalized steroid (§9.1 U7) and outcome-led headlines |

This is a deliberately wide sweep. The specialist runs through all 20, captures the strongest 5-8 raw materials, and uses them as the starting points for headline drafting. Most headlines integrate 2-3 of the 20 dimensions — rarely just one, never all twenty.

---

## 12. The 4 production methods

Once the 20-question brainstorming is complete, the specialist drafts headlines using one or more of four production methods. The brief and the awareness level guide which methods dominate.

### 12.1 — Method 1: Brainstorming with base formulas

The fastest production path. The specialist takes a catalog of historically-validated headline formulas and substitutes the brief's specifics into the formula slots.

**The full formula library lives in the Appendix** — §A1 below contains 71 patterns organized into 18 categories, each with a template, a worked example, and a set of "Additional examples" (real headlines from classic and contemporary direct response, used as creative sparks).

**How to use the library**:

1. Identify the awareness level + sophistication stage from the brief
2. Scan the relevant categories (e.g., Most Aware + Stage 1-2 → Categories 1, 5, 10, 11; Product Aware Stage 3+ → Category 18 mechanism-as-headline; Problem Aware → Categories 3, 4, 7, 8)
3. Substitute the brief's specifics into the formula slots
4. Cross-reference the "Additional examples" for that category to absorb rhythm and tonal patterns
5. Produce 3-5 variants drawing from 2-3 different categories
6. **Never copy the wording** — extract the principle and rewrite with the brand's voice and the avatar's vocabulary

**When to use this method**:
- When time is constrained
- When the copywriter is a beginner — formulas are the safer starting point
- When the awareness level is Most or Product Aware (formulas are direct enough)
- When the brand needs a quick test variant alongside a more ambitious headline

**Discipline**: a formula-based headline is rarely the strongest possible. It is *reliable*, not *exceptional*. Treat formulas as the floor, not the ceiling. The Additional examples in §A1 show what the ceiling looks like across categories.

### 12.2 — Method 2: Bullet-first, headline-from-bullets

Write the piece's bullets first (the dense lists of micro-benefits / claims). Select the 3-5 strongest. Use one of them as the H1.

**Procedure**:
1. Write 30+ bullets for the piece's body (without filtering)
2. Identify the 3-5 with the strongest curiosity charge
3. Develop the first 500-800 words of body copy based on each
4. Test each as a candidate H1 — on the page, in front of test readers, or as ad headlines
5. Promote the winner to H1

**When to use this method**:
- When the body is dense with discrete benefits / curiosity points
- When the brand has a list-driven product (a course with modules, a system with steps)
- For blog posts, advertorials, and bullet-heavy sales pages

**Cross-reference**: this method's bullet generation phase is the work of [bullet-point-specialist](section-specialists/bullet-point-specialist.md). The headline specialist picks up where the bullet specialist's output ends.

### 12.3 — Method 3: Dramatization of the strongest proof element

Take the brand's single most powerful piece of proof and dramatize it into a headline. Drama means: turning the proof into something visual, emotional, and immediately graspable.

**Examples of the pattern shape**:
- Proof: a single user's dramatic recovery, with before/after evidence → Headline: *"How a [credentialed person] reversed [her relative's] [condition] in [specific time period]"* + sub-headline showing the before/after evidence
- Proof: an NDA the customers had to sign → Headline: *"You cannot buy this method unless you agree never to share it. We're not joking."*
- Proof: a specific dollar figure earned → Headline: *"I have no retirement plan. But three [organizations] just paid me [specific dollar amount] in one week"*

**When to use this method**:
- When the brand has *one truly remarkable proof element* that the competition cannot match
- When the proof is visually or narratively dramatic
- When the brief calls for credibility-led headlines (§6.2 dominant)

### 12.4 — Method 4: Big Idea / USP-led

When the brief contains a strongly articulated Big Idea or USP, the headline often *is* the Big Idea, expressed concisely. The method: read the Big Idea, identify which of the three canonical shapes (§8 Shape A/B/C) fits the awareness level, and write the headline directly from the Big Idea elements.

**When to use this method**:
- When the brief's §3.7 (Big Idea) is fully developed and strong
- When the brand has a codified UM with proprietary naming
- For the lead variant of any high-stakes headline (the version designed to win, with formula variants as fallbacks)

---

## 13. Variant production protocol

Headlines are produced in batches, not single shots. The first headline draft is almost never the strongest possible — strength emerges from quantity and iteration.

### 13.1 — Quantity discipline

Write **at least 10 variants** for any production headline. For high-stakes pieces (a flagship sales letter, a paid-ad headline that will spend significant budget), the historical recommendation is **25 variants** before selecting.

**Rule**: do not edit while drafting. Capture all variants in raw form. Editing during the creative phase kills volume, and volume is the precondition for finding the strongest variant.

### 13.2 — Variant differentiation

The 10-25 variants should not all be small typographical changes to the same headline. They should differ structurally:

- 2-3 formula-based variants (Method 1)
- 2-3 bullet-promoted variants (Method 2)
- 1-2 proof-dramatization variants (Method 3)
- 2-3 Big Idea-led variants (Method 4)
- 1-2 different-emotion variants (try the same angle with anger, then with fear, then with greed)
- 1-2 different-curiosity-strategy variants (paradox, contrast, shocking statement)

This structural diversity ensures the batch covers the strategic space, not just the surface variations of one idea.

### 13.3 — Selection

After the batch is written, the specialist runs each variant through:

1. The **newspaper-ad test** (§4.2 objective 2)
2. The **5-characteristic checklist** (§6)
3. The **7 U sweep** (§9.1)
4. The **visual gravity reading** (§4.5) — read H1 → sub → first body line and verify the message arrives intact in that order

The variants that score highest become the **shortlist**. The shortlist is presented to the copywriter (or to A/B testing) for the final selection.

### 13.4 — A/B testing protocol

For high-stakes deployments, the shortlist (typically 2-3 finalists) is A/B tested in a low-cost surface (a social ad, an email subject line) before being deployed in the full piece.

The headline-specialist proposes the test setup: which two variants, what surface, what KPI (click-through, dwell time, conversion-through to lead). The actual A/B execution is a deployment task, not a writing task.

---

## 14. Output formats

### 14.1 — Headline block (single variant)

```
PRE-HEADLINE: [text] (if present — see §5.1)

H1: [text]

SUB-HEADLINE: [text]

— Design notes —
[Optional: visual emphasis instructions — which word in red, which phrase italicized, any image direction]
```

### 14.2 — Headline variant batch

```
HEADLINE VARIANTS — [piece / offer / angle]
Brief reference: [funnel-brief filename + version]
Awareness: [level]
Big Idea: [if present]
Dominant emotion: [if specified]
Strategic Attack Angle: [if Product Aware]

— Variant 1 — [method used] — [dominant characteristic]
PRE: [...]
H1: [...]
SUB: [...]

— Variant 2 — [method used] — [dominant characteristic]
[...]

[... up to N variants ...]

— Selection notes —
[Specialist's recommendation: which variant to lead with, which to test, which to reserve]
```

### 14.3 — Headline + brief diagnostic

When the brief is weak (missing Big Idea, undefined dominant emotion, unclear awareness), the specialist surfaces the gap before delivering variants:

```
BRIEF GAP IDENTIFIED:
- [Missing element]: [what's needed]
- [Suggested action]: [escalate to Strategist? Use placeholder? Proceed with assumption?]

DRAFT VARIANTS (with assumed [element]):
[variants as in §14.2]

NOTE: These variants assume [X]. If the brief is updated with [Y], the variants should be re-screened.
```

---

# PART D — Quality control & references

## 15. Common pitfalls

Beyond the 5 errors of §4.3, the following recurring failure modes deserve their own diagnostic.

### 15.1 — Pre-headline carrying the main claim

The Big Idea is buried in the pre-headline because the layout suggested the pre-headline should be substantial. Per the Visual Gravity Law (§4.5), the pre-headline is read last — the Big Idea misses its moment.

**Fix**: move the Big Idea content into the H1 or the sub. Pre-headline returns to its role as qualifier / context tag.

### 15.2 — Image below the H1

Layout design that puts the dominant image *below* the H1 forces the reader's eye through an inefficient path (H1 → image → back up to sub → body). The eye should land on the image, then drop to H1, then continue down.

**Fix**: image above H1, or alongside as a hero block where the image is visually equal to or larger than the H1.

### 15.3 — Too-specific specificity (credibility-breaking)

A burglary headline that says *"at 2:33:45 AM"* destroys credibility (no one could plausibly know the time that precisely). Excessive specificity reads as fabrication.

**Fix**: stay within plausible-knowable bounds. *"On the night of my [event]"* works. *"Down to the second"* does not.

### 15.4 — Two competing dominant emotions

The H1 leads with anger, the sub leads with greed. The reader's emotional register cannot synchronize, and both forces dilute.

**Fix**: one dominant emotion per block. The sub can support with logic or proof, but if it carries a second emotion, that emotion must be *secondary*, not equal in weight.

### 15.5 — Editing during drafting

The specialist writes one headline, refines it for ten minutes, then writes the next. The total variant count after an hour is 4-5. Volume is missing.

**Fix**: separate drafting and editing. Drafting phase: write 25 variants without judgment. Editing phase: refine the strongest 3.

### 15.6 — Headline selling the product, not the reading

The H1 says *"Order [Product Name] today for [price]"*. The reader hasn't been sold the reading, let alone the product. Conversion collapses.

**Fix**: unless the brief specifies a direct lead (Most Aware), the headline sells curiosity, identification, or the promise of valuable information — not the product itself.

### 15.7 — Adverb-heavy phrasing

*"Lose weight quickly and easily without struggling."* The adverbs *"quickly,"* *"easily,"* *"without struggling"* signal that the verbs are weak.

**Fix**: replace the weak verb with a stronger one. *"Melt weight in [specific time period]"* — one strong verb, no adverbs needed.

### 15.8 — Inflated promises without proof

*"Make $1 million in 30 days."* No proof in sight. The reader's scam-filter activates, and the brand loses credibility for the rest of the piece.

**Fix**: scale the promise to what the proof can support. If the proof is *"users earn $5,000-$15,000"*, the headline says that, not the inflated version.

### 15.9 — Generic benefits

*"Improve your health."* No specificity, no curiosity, no targeting. The headline applies to anyone, which means it applies to no one.

**Fix**: list specific symptoms, specific outcomes, specific avatars. *"Reverse the [specific symptoms]"* is concrete; *"improve health"* is vapor.

### 15.10 — Trap headlines (bait-and-switch)

*"Free Sex"* as the H1, with a body that has nothing to do with sex. The reader feels manipulated and the brand burns trust.

**Fix**: the headline must be coherent with the body. If the headline promises X, the body delivers X. Curiosity is acceptable; deception is not.

### 15.11 — Predictable headlines

The reader knows from the first three words exactly where the piece is going. Predictability is the cancer of copy — the reader disengages because they feel they've already heard it.

**Fix**: introduce a paradox, a contrast, a strange detail, or an unexpected angle (§6.4). If the headline doesn't surprise the reader, restructure.

### 15.12 — Imitating the competition

The brand's headline says the same thing as three competitors' headlines. The reader cannot tell the brands apart, and the headline becomes invisible.

**Fix**: pull the differentiator from the brief — the Unique Mechanism, the proprietary angle, the contrarian frame. Lead with what only the brand can say.

### 15.13 — Inventing celebrity / authority connections

A recognized figure is named in the headline, but the connection is fabricated. Legal risk; trust burn; brand damage.

**Fix**: only use recognized-figure headlines when the link is real, logical, and verifiable. If no real link exists, find a different steroid.

### 15.14 — Sub-headline restating the H1

The sub adds nothing new — it just paraphrases the H1. The reader's attention is wasted on the second-most-important surface.

**Fix**: the sub does a *different* job. It expands, proves, specifies, or identifies. It does not repeat.

### 15.15 — Forced revenge / forced anger in soft verticals

A productivity tool with a revenge-themed headline reads as ridiculous. The emotion does not fit the topic.

**Fix**: match the emotion to the vertical. Anger / betrayal / revenge suit verticals with real adversarial relationships. Soft verticals call for greed, curiosity, or aspiration.

---

## 16. Revision checklist

Run before delivering. **Headline-specific only** — the universal writing checks (Gulpease readability, em-dash count, anti-AI patterns) live in [writing-principles](core/writing/writing-principles.md) and are applied during writing-principles §2, Fase 3-5 (plus the Fase 4d feedback-rules scan).

**Structural — the 5 characteristics**
- [ ] **Incisive**: no removable words?
- [ ] **Credible**: every audacious claim has proof in the same line of sight (sub-headline)?
- [ ] **Benefit (implicit or explicit)**: the reader knows what they get from continuing?
- [ ] **Curiosity**: a cognitive gap the reader cannot ignore is present (paradox / strange detail / contrast / proprietary mechanism / question / shocking statement)?
- [ ] **Specific**: at least one mode of specificity from the eight (§6.5) is deployed?

**Visual gravity**
- [ ] H1 → sub → body line reads coherently in that order?
- [ ] Pre-headline (if present) is dispensable without breaking the block?
- [ ] Image position respects the gravity law (image above H1, not below)?

**Awareness calibration**
- [ ] H1 matches the awareness level from the brief (per the table in §6.3)?
- [ ] Strategic Attack Angle expressed (Product Aware)?
- [ ] No product naming / pricing in the H1 (unless direct lead, Most Aware)?

**Emotional register**
- [ ] One dominant emotion in the H1?
- [ ] Secondary emotion in sub (if any) does not compete with the dominant?
- [ ] Emotion-vertical fit (anger/betrayal/revenge for adversarial topics; greed/aspiration for soft verticals; fear paired with action-emotion)?

**Steroids**
- [ ] The 7 U sweep run; minimum 5/7 present in the final variant?
- [ ] Proof stacking deployed in the sub when the claim warrants it?
- [ ] Recognized-figure connections (if any) are real and logical?
- [ ] Story / mini-narrative integrated cleanly (if §9.2 was applied)?

**Word choice**
- [ ] Verbs visceral and high-charge?
- [ ] No adverbs as crutches for weak verbs?
- [ ] No corporate / generic / abstract vocabulary in the H1?
- [ ] Brand voice (`brands/<brand>/brand-copy-rules.md`) respected?

**Format conformance**
- [ ] Length envelope matches the format (LP, sales letter, advertorial, static ad, blog, VSL thumb)?
- [ ] Visual emphasis notes ([DESIGN NOTE:]) inserted where needed?
- [ ] Mobile-first reading (LP / sales letter): the H1 + sub complete above the mobile fold?

**Brief integrity**
- [ ] H1 articulates the Big Idea (if present in §3.7)?
- [ ] Chain of Beliefs targeting respected (one to three beliefs per variant)?
- [ ] Avatar language used (vocabulary from `brands/<brand>/transcripts/`)?
- [ ] No invented facts; everything from the brief or brand wiki?
- [ ] feedback-rules (global + brand) re-scanned — no rule violated

**Variant batch**
- [ ] Minimum 10 variants produced (25 for high-stakes pieces)?
- [ ] Structural diversity across variants (different methods, different emotions, different curiosity strategies)?
- [ ] Shortlist (2-3 finalists) recommended with reasoning?

---

## Appendix A1 — Formula Library: 71 patterns in 18 categories

> **Swipe quarantine** — the examples below are historical swipe kept for structure and psychology. Do NOT inherit their punctuation or constructions: Tier 1 bans (writing-principles B.1–B.3 — zero em-dash, no "Not X. But Y.") apply to all delivered copy regardless of what these examples model.

Each formula has `# / Template / Example`. Never copy the wording — extract the principle and rewrite with the brand's voice and the avatar's vocabulary (see the "Imitating the competition" pitfall in §15.12).

Each category also lists **Additional examples** — real headlines drawn from classic and contemporary direct response, useful as creative sparks for absorbing rhythm, structure, and tonal patterns. The examples are illustrative; the formulas are the production tool.

---

### Category 1 — Direct Benefit / Promise

| # | Template | Example |
|---|----------|---------|
| F1 | How to [OUTCOME] + [OBSTACLE ELIMINATED OR CONDITION THE AVATAR THINKS IMPOSSIBLE] | *"How to drop 3 cm off your waist before you even sign up for the gym"* |
| F2 | How to [RESULT] — thanks to [COUNTERINTUITIVE METHOD THAT REMOVES THE STANDARD OBSTACLE] | *"How to quit smoking thanks to these 3 simple techniques"* |
| F3 | Here's how [HIGHLY DESIRED OUTCOME] | *"Here's how a simple secret made an overweight woman happy to wear her new swimsuit"* |
| F4 | Finally: [RESULT PERCEIVED AS TEDIOUS / DIFFICULT / STRESSFUL TO ACHIEVE] done for you | *"Finally: the new system to collect every unpaid invoice without lifting a finger"* |
| F5 | Now you can [STRONGLY DESIRED OUTCOME] even if [POWERFUL OBJECTION THAT HAS BLOCKED THEM] | *"Now you can write your book even if you have no time for it"* |
| F6 | [STRONGLY DESIRED RESULT] like [AUTHORITY / CELEBRITY / PROFESSIONAL / ANIMAL OR OBJECT THAT GETS IT EFFORTLESSLY] | *"Write persuasive headlines like the multi-million-dollar copywriters of the past"* |
| F7 | The lazy [TARGET]'s way to [DESIRED RESULT REQUIRING EFFORT THEY DON'T WANT] | *"The lazy student's way to pass the winter exam session without dying over books"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"Consistently Convert Cold Traffic… Make Dozens of Million Dollar Connections"*
- *"GET 200% MORE MONEY FROM EVERY NEW BUYER SALE"*
- *"'Borrow A Bestseller' And Get Flooded With New Customers In Just Days!"*
- *"Use My Proven 60 Second Subconscious Rewiring Routine To PURGE Anxiety From Your Subconscious Mind"*
- *"Give Me Four Weeks — And I'll Give You A Super-Power Memory"*
- *"How To Stroke Wrinkles Right Out Of Your Face!"*
- *"World's Greatest Minds Force-Feed Their Knowledge Into Your Brain"*
- *"How To Eat Your Way Out Of Fatigue"*
- *"Turn A Tape Recorder Into A Private Tutor"*

---

### Category 2 — Secret / Discovery / Hidden

| # | Template | Example |
|---|----------|---------|
| F8 | The secret to [DEEPLY DESIRED OUTCOME] | *"The secret to getting everything you want"* (works best in low-sophistication markets; mature markets require pairing the secret with mechanism specificity) |
| F9 | Discover [OBJECT OF DESIRE] hidden in [PLACE WHERE THE AVATAR WOULD NEVER LOOK] | *"Discover the fat-burning food hidden in your refrigerator"* |
| F10 | [CHARACTER DOING SOMETHING DISTRACTED] reveals / leaks / discovers [OBJECT OF DESIRE] | *"Distracted painter discovers a paint that dries in 7 minutes and needs no second coat"* |
| F11 | Where [OBJECT OF DESIRE] is hidden and how to get it | *"Where the best Tuscan hotels hide and how to book the best rooms at the lowest prices"* |
| F12 | [SUPREME AUTHORITY] has finally [BREAKTHROUGH THOUGHT IMPOSSIBLE]. Thousands of [PARTIES WITH A STAKE IN HIDING IT] fooled — [ADDITIONAL PROOF ELEMENT] | *"30-year accountant discovers a loophole to slash your taxes. The State is losing a fortune — and it's completely legal"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"A Rare 'Triple Swan Sequence' Of Events Has Blown Open The Doors…"*
- *"A Clogged Colon: The Hidden Cause"*
- *"SECRET SICKNESS — a noted physician reveals the hidden cause"*
- *"Here is the background of a monumental discovery"*
- *"Reveals His Innermost Secrets"*
- *"Yours At Last — This Wisdom Of The Ages"*

---

### Category 3 — Question / Qualification

| # | Template | Example |
|---|----------|---------|
| F13 | Have you ever [FACTOR X THAT CAUSES EMBARRASSMENT OR DISCOMFORT] during [EVENT / MOMENT]? | *"Have you ever stepped on the feet of the girl you liked during a dance?"* |
| F14 | Who else wants [RESULT THE AVATAR WANTS BUT THINKS THEY CAN'T HAVE]? | *"Who else wants to cut their electricity bill in half without switching providers?"* |
| F15 | Do [PERSON / OBJECT / SITUATION] ever [EMBARRASS / DISCOMFORT / HUMILIATE] you? | *"Does your boyfriend ever make you feel ignored when he's with his friends?"* |
| F16 | [RESULT THE AVATAR WANTS BUT IS SKEPTICAL OF]? You must be kidding! | *"Sell your home in less than a month? You must be kidding!"* |
| F17 | Have you ever imagined how you'd look with [STRONGLY DESIRED RESULT]? | *"Have you ever imagined how you'd look with a part-time job paying €6,000/month?"* |
| F18 | Would you like to [DESIRED OUTCOME / ELIMINATE A PROBLEM]? | *"Would you like to say goodbye to every household chore?"* |
| F19 | Is this the [MOST ADJECTIVE THAT ELIMINATES THE PRIMARY OBJECTION] [PRODUCT / SERVICE] in the world? | *"Is this the most painless and invisible teeth-straightening system in the world?"* |
| F20 | What would it mean for [SUBJECT] if, instead of [CURRENT RESULT], they got [RESULT ACHIEVABLE WITH YOUR PRODUCT]? | *"How would your life change if, instead of €1,500/month, you received €4,000?"* |
| F21 | [NUMBER] types of [CATEGORY]: which are you? / What type of [TARGET] are you? | *"What skin type do you have?"* |
| F22 | Need / Looking for / Do you need [OBJECT OF AVATAR DESIRE]? | *"Do you need to sell your home in the shortest time possible?"* |
| F23 | You, [DESIRED IDENTITY / OUTCOME]? | *"You, a mother who has plenty of time for herself?"* |
| F24 | What would you like to do: [COMMON PASSIVE ACTION YOU DON'T WANT AS A READER] or [ACTION THAT QUALIFIES THE PROSPECT]? | *"What would you like to do: keep complaining about high bills, or cut them by up to 75% without risking blackout?"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"In a Hurry to Create Higher-Converting Copy As Quickly As Possible?"*
- *"Want to Consistently and Predictably Acquire New Clients, Customers & Profits in Your Business?"*
- *"Isn't It Worth $7 To You To Ensure Your Marketing Will Stand Out As New And Different?"*
- *"Sick & Tired Of Dieting?"*
- *"If I told you I can give you the brain of a millionaire, in the next 7 days… Would you take it?"*
- *"Are Any Books Left?"* (scarcity question)
- *"Can this man control your destiny?"*
- *"Are you far overweight? The trouble may be hypoglycemia"*
- *"Are you growing old too fast?"*
- *"Does it shock you…?"*
- *"Would you pay a thousand dollars to have this trouble-shooting guide?"*
- *"Isn't it worth one short week of your time?"*
- *"How much will your child earn in his lifetime? Will he be a winner or a loser?"*
- *"Why Were Bankers Warned That This New Book Could Upset the Savings Applecart"*

---

### Category 4 — Curiosity / Paradox

| # | Template | Example |
|---|----------|---------|
| F25 | A little mistake that [LOSS THE AVATAR WILL DO ANYTHING TO AVOID] | *"A small mistake that put 4 kg back on a woman after 2 months of dieting"* |
| F26 | A [NEW DISCOVERY / EVENT / FACTOR / INVENTION] transformed a [DESCRIPTION AVATAR IDENTIFIES WITH AND WANTS TO ESCAPE] into [TRANSFORMATION THEY DEEPLY WANT] | *"A new discovery transformed a 30-year-old shy bachelor into a confident playboy"* |
| F27 | When [AUTHORITY IN A FIELD] get [CONDITION IMPOSSIBLE FOR THAT AUTHORITY AND UNWANTED BY THE AVATAR], here's what they do | *"When chefs face an empty refrigerator, here's what they actually do"* |
| F28 | Who ever heard of a [TARGET] who [DESIRED RESULT] and [ACTION THE AVATAR BELIEVES IMPOSSIBLE BUT WISHES WERE TRUE] at the same time? | *"Who ever heard of a student who gets straight A's studying only 2 days before the exam?"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"What I'm about to share is brand new and extremely controversial"* (open-loop announcement)
- *"It's NOT permanent"* (counter to avatar's belief)
- *"An entirely different kind of reducing ad"* (category-inversion pattern interrupt)
- *"You cannot avoid losing weight — but weight loss is the LEAST important benefit"* (reframe of the primary desire)
- *"Primitive Aborigines outlive modern man"* (unexpected comparison)
- *"This advertisement pulls no punches, no impossible dreams"* (deadly-sincerity frame)

---

### Category 5 — Authority / Proof

| # | Template | Example |
|---|----------|---------|
| F29 | [AUTHORITY IN FIELD] has proven that [X "TARGET" OUT OF Y] can achieve [DESIRED RESULT] in [RELATIVELY SHORT TIMEFRAME] | *"Pro basketball player reveals how 1 player in 5 can hit every free throw in just 3 training sessions"* |
| F30 | Why some [TARGET] almost always [RESULT THEY WANT BUT THINK IS RESERVED TO A FEW] | *"Why some poker players almost always win the tournaments they enter"* |
| F31 | [TARGET] everywhere are raving about this new [PRODUCT / SERVICE] | *"Men around the world are fighting over this new shaving gel"* |
| F32 | Thousands of [TARGET] now [RESULT] who thought they couldn't — even though [MAIN OBJECTION] | *"Over a thousand women now lose weight without strict diets, even though they thought it was impossible"* |
| F33 | [QUOTE OR MICRO-SUMMARY FROM A REAL TESTIMONIAL] | *"This new armored door has forever changed the peace of my sleep"* |
| F34 | [SUBJECT WHO ACHIEVED THE DESIRED RESULT] discovers [MEANS BY WHICH THEY ACHIEVED IT] | *"Olympic 100m gold medalist discovers a scientific system to cut your track time from 13 to 7.9 seconds"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"Urgent Message From [Author]"*
- *"€150 million entrepreneur"* (authority frame in one line)
- *"A noted physician says — SECRET SICKNESS"* (authority + secret stacked)
- *"A well-known, widely experienced practicing attorney shows you HOW TO AVOID LAWYERS"* (authority paradox — the expert teaches you to bypass the system)
- *"One of America's most successful weight-reducing doctors… Turns Up Your Digestive Furnace"* (authority + mechanism-in-headline)
- *"World-famous trainer of champions… break all the rules, win a 35-year-old body at 50-60-70+"* (authority + contrarian promise)
- *"PROOF BEYOND DISPUTE"* (proof as section header)

---

### Category 6 — Story-in-Headline

| # | Template | Example |
|---|----------|---------|
| F35 | [EVERYONE LAUGHED / DOUBTED / IGNORED ME] when [ACTION RIDICULOUS OR IMPOSSIBLE FROM THE PROTAGONIST]… but when [DEMONSTRATION THE PROTAGONIST WAS RIGHT] | *"Everyone looked at me with disdain when I became a copywriter… but their looks turned to envy when I billed €27,000 in a single contract after 2 months"* |
| F36 | [CONDITION WHERE AVATAR EXPECTS A NEGATIVE RESULT], [FALSE WEAK POINT THAT ELIMINATES THE NEGATIVE RESULT] | *"After 4 hours in these heels, the only discomfort you'll feel are the envious looks of other women"* |
| F37 | [EXTREME TEST ON PRODUCT], [UNEXPECTED POSITIVE RESULT THE AVATAR DESIRES] | *"Dropped from 100 meters: still works like new"* |
| F38 | [TIME PERIOD] ago, [FACT FROM THAT TIME]. Today, [EXTRAORDINARY RESULT ACHIEVED]. Imagine [RESULT BASED ON ASSUMING IT CAN HAPPEN AGAIN] | *"3 months ago, a group of postpartum women weighed an average of 72 kg. Today, thanks to this plan, they weigh 59. Imagine how much you could lose in the next 3 months"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"After years of arm twisting, I was able to convince him…"* (reluctant-expert frame)
- *"Imagine How A NEW DISCOVERY… Helped a Struggling Single Mother of 3 Lose 75 Pounds"*
- *"First Tested On Her Own Face"* (origin-story sub-headline)
- *"Dying at 43 to medically certified 35-year-old body at 70"* (before/after as story headline)
- *"70-year-old lifting 170-pound man"* (photo-callout demonstration)

---

### Category 7 — Provocation / Shame / Dare

| # | Template | Example |
|---|----------|---------|
| F39 | Laugh at [PROBLEM THAT NORMALLY CAUSES ANXIETY] — by following this [SIMPLE PLAN / EXERCISE / RULE SET] | *"Laugh in the face of premature ejaculation by following this simple mental exercise"* |
| F40 | It's a shame for you not to [DESIRED RESULT], when these [OTHER PEOPLE] are getting it so easily | *"It's a shame for you not to be able to approach the women you like, when these men are doing it so easily"* |
| F41 | Do you have the courage to [CHALLENGE THE AVATAR WOULD ACCEPT WITHOUT HESITATION] | *"Do you have the courage to earn half a million euros a year?"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"If you have the determination… lose 20, 40, 60, 80, even 100 pounds"* (qualifying challenge with specificity ladder)

---

### Category 8 — Blame Discharge / Enemy Framing

| # | Template | Example |
|---|----------|---------|
| F42 | How often do you hear yourself saying: "[PHRASE AVATAR REPEATS TO DELAY ACTION], but I meant to!" | *"How many times have you told yourself 'I'll start my diet on Monday' without ever keeping that promise?"* |
| F43 | [PARTY HURT BY YOUR PRODUCT] doesn't want you to discover / read / find [YOUR PRODUCT / SERVICE / INFORMATION] | *"The big electricity and gas companies don't want you to read this report"* |
| F44 | Warning: do not read this if [SOMETHING THE READER HAS NO PROBLEM DOING] | *"Warning: do not read this letter if you have a problem managing a monthly income above €5,000"* |
| F45 | Here's why you haven't [RESULT NOT YET ACHIEVED BUT ACHIEVABLE WITH YOUR PRODUCT] | *"Here's why you haven't sold your home yet — revealed: 3 small tactics real estate agents have hidden for years"* |
| F46 | [ENTITY / PERSON / PROFESSIONAL PRESSURING THE AVATAR] has kept you [TRAPPED / CORNERED / HELD] for too long | *"Your ex has had you cornered for too long"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"The multi-billion dollar therapeutic and pharmaceutical industries don't want you to know"*
- *"It's not your fault"* (anaphora-based blame discharge — the phrase is repeated 3 times across the piece as a constant relief drumbeat)
- *"Why Were Bankers Warned…"* (enemy framing through implied threat to an insider class)
- *"Banks themselves use these techniques"* (enemy's own methods turned against them)
- *"New Battleground for the Consumer Revolution"* (social-cause reframe)

---

### Category 9 — Counterintuitive / Anti-Obstacle

| # | Template | Example |
|---|----------|---------|
| F47 | A simple trick to [DESIRED RESULT], while / without [PRIMARY OBJECTION TO THAT RESULT] | *"A clever trick to halve your electricity bill while using it exactly as you always have"* |
| F48 | You don't have to be [EXTREME TRAIT THE READER CAN ACCEPT LACKING] to [DESIRED RESULT] | *"You don't have to be a tenth-dan black belt to defend your family"* |
| F49 | Here's why [ACTION THE AVATAR THINKS RIGHT OR WRONG] will give you [RESULT CONTRARY TO EXPECTATION] | *"Here's why going to the gym 7 days a week won't give you the body of your dreams"* |
| F50 | [SHORT POSITIVE COMMAND] + [EQUIPMENT / HARD WORK / SOMETHING COSTLY THAT WAS INDISPENSABLE UNTIL YOUR PRODUCT] | *"Stop grocery shopping"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"You Can NOT Deposit Sales Conversion Rate"* (reframe)
- *"Rich brains are wired one way, yours is wired another"*
- *"The fortune isn't in the follow up, it's in HOW you do it"*
- *"Anxiety IS a subconscious problem and requires a subconscious solution"*
- *"Unorthodox Email Marketing Masterclass"* (pattern-interrupt qualifier)
- *"A Formula, Not A Concept"* (mechanism definition as headline)
- *"Eat MORE for breakfast… ice cream up to 3x/week"* (anti-restriction paradox)
- *"No longer any need to starve yourself"*
- *"Most of the ways you use to lose weight today… make you swell up like a balloon"* (counter to avatar's current behavior)
- *"Low-calorie = chronic fatigue; high-protein = high cholesterol"* (destruction of both conventional paths)
- *"Break all the rules"* (direct anti-convention call)

---

### Category 10 — Lists / Mistakes / Numbered

| # | Template | Example |
|---|----------|---------|
| F51 | [PROBLEMS PLAGUING THE AVATAR] — which of these do you want to eliminate? | *"Seven common genetic problems blocking weight loss — which one do you want to eliminate?"* |
| F52 | Do you make these mistakes in [SPECIFIC AREA THAT UNDERMINES AVATAR'S REPUTATION]? | *"Do you make these mistakes during job interviews?"* |
| F53 | Try these [INFO / PRODUCT / SAMPLE] for [TIMEFRAME], and [INCREDIBLE RESULT] | *"Use these 7 templates to write your headlines and attract the best clients on the market"* |
| F54 | [NUMBER] [TIPS / IDEAS / WAYS] to [SPECIFIC DESIRED RESULT] | *"The 115 questions you must ask yourself before printing your sales letter"* |
| F55 | [NUMBER] mistakes most [TARGET] make when [COMMON ACTION DONE WRONG] | *"5 mistakes most parents make when scolding their children"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"6 Biggest Obstacles"*
- *"24 ADVANCED Email Persuasion & Conversion Triggers"*
- *"NOT a novel / NOT a textbook / NOT full of jargon / NOT one of the usual books"* (quad-destruction stack — category exclusion)
- *"BRAND NEW / LITTLE KNOWN / SIMPLE"* (triple-attribute pattern interrupt)
- *"ONE: blood sugar scarcity starving organs… TWO: masquerades as other conditions… THREE: simple food can end it"* (three-step logical proof)
- *"Point 1: Inflation destroys passive savings… Point 2: Third Way… Point 3: Loophole Depositing"* (numbered argument as piece-level headline sequence)
- *"15 Simple Insight Questions"* (numbered diagnostic)

---

### Category 11 — Novelty / Announcement / Social Consequence

| # | Template | Example |
|---|----------|---------|
| F56 | Revealed / Announcing [PRODUCT OR SERVICE] that GUARANTEES [DESIRED RESULT] | *"Revealed: a modeling agency that GUARANTEES at least two paid assignments per week"* |
| F57 | [PRODUCT / SERVICE] will get you [SOCIAL CONSEQUENCES OF THE RESULT] | *"Everyone will ask where you bought this new limited-edition décolleté"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"The life-changing event is back… LIVE!"*
- *"Introducing [Product Name]"*
- *"UNORTHODOX FORMULA ENSURES YOU'LL… 'NEVER HAVE YOUR MARKETING IGNORED AGAIN!'"*
- *"HERE IS THE VAST NEW WORLD OF KNOWLEDGE"*
- *"Medically proven breakthrough"* (novelty compressed to a two-word frame)

---

### Category 12 — Urgency / Scarcity / Guarantee

| # | Template | Example |
|---|----------|---------|
| F58 | [ACTION YOUR AUDIENCE MUST TAKE] before [UNDESIRED EVENT] | *"Read this short article before buying your next refrigerator"* |
| F59 | [PRODUCT / BENEFIT] in [TIMEFRAME], or [WHAT HAPPENS IF NOT DELIVERED ON TIME] | *"Your pizza at your door in 30 minutes, or you don't pay and get a €5 voucher for future orders"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"ONE-TIME LIMITED OFFER: EXPIRES AUGUST 15TH"*
- *"Only open until Sunday, August 15th"*
- *"Overcome Anxiety Or Your Money Back"* (guarantee as headline)
- *"Forehead lines MUST GO or book costs nothing"* (conditional guarantee as headline)
- *"Feel the change in one week or return it"*
- *"Examine this book free for 10 days"* (risk-reversal pre-headline)
- *"SEND NO MONEY NOW! READ IT 10 DAYS FREE!"* (triple-free anchor)
- *"Start the countdown right now"* (urgency opener)

---

### Category 13 — Test / Demonstration / Invitation to Verify

| # | Template | Example |
|---|----------|---------|
| F60 | All you need is [TIMEFRAME REQUIRED TO VERIFY EFFICACY] to test this new [PRODUCT / SERVICE] | *"All you need is 30 seconds to test the power of this new memory technique"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"Super-Memory Test"* (test-as-headline)
- *"15 Simple Insight Questions"* (self-diagnostic)
- *"Start Your Search for Insidious Symptoms"* (investigation frame)

---

### Category 14 — "Could" / Possibility Frame

| # | Template | Example |
|---|----------|---------|
| F61 | This [PRODUCT / ARTICLE / REPORT] could remove forever [ATAVISTIC FEAR / PHOBIA] | *"This report could eliminate your fear of cancer forever"* |

---

### Category 15 — Target Selection / Open Letter

| # | Template | Example |
|---|----------|---------|
| F62 | We're looking for [TARGET] who want [RESULT THEY'RE TRYING TO GET WITHOUT SUCCESS] | *"We're looking for people who train at the gym and want a body to be proud of"* |
| F63 | Turn your [SOMETHING THE PROSPECT ALREADY HAS, IF USED BETTER] into [HIDDEN DESIRE SHAPED AS METAPHOR] | *"Turn your marketing materials into professional snipers that always hit their mark"* |
| F64 | Open letter to [TARGET] who want [RESULT] but [DON'T KNOW WHERE TO START / ARE STUCK] | *"Open letter to those who want to earn from home writing on a computer but don't know where to start"* |
| F65 | Tired of [SOMETHING THE AVATAR NO LONGER WANTS TO DO OR BE]? | *"Tired of writing articles nobody reads?"* |
| F66 | The [TARGET] who [ACTION YOU'RE ASKING] will end up with [BENEFIT THE READER COULD HAVE HAD BUT WON'T IF INACTIVE] | *"The men who read this report will end up with the beard that could make their face more interesting"* |
| F67 | If you can [ACTION THE AVATAR CAN ALREADY DO], then you can [EXTRAORDINARY RESULT THE AVATAR DESIRES] | *"If you can watch your favorite Netflix series for more than 3 hours straight, then you can build a passive income with this"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"For Anyone Looking For A Quick Surge Of Cash In Their Business!"*
- *"An Open Letter To Every [Target] Who Secretly Believes That [Hidden Frustration]"* (letter format)
- *"WARNING! Don't Even Think About [Action] Until You Read This…"* (warning + command)
- *"Select group of knowledgeable depositors… they know 'inside' techniques that you don't"* (insider-gap selection)
- *"Whether you have $500 or $500,000"* (inclusive range qualifier)
- *"A book for people who mean business"* (qualification-filter close)

---

### Category 16 — Ultimate Guide / Time-Bound Promise

| # | Template | Example |
|---|----------|---------|
| F68 | The ultimate guide to [SPECIFIC DESIRED RESULT] | *"The ultimate guide to choosing your new TV without regretting it a week later"* |
| F69 | Give me [TIMEFRAME SHORTER THAN AVATAR EXPECTS] and I'll give you [EXTRAORDINARY RESULT] | *"Give me 2 minutes and I'll tell you how to avoid being rejected at your next job interview"* |

---

### Category 17 — Problem Dismissal

| # | Template | Example |
|---|----------|---------|
| F70 | Get rid of [AVATAR'S PROBLEM] once and for all | *"Get rid of your market competitors once and for all"* |

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"Put an end to this anxiety problem"*

---

### Category 18 — Mechanism-as-Headline (Sophistication Stage 3+ Structural Inversion)

At Sophistication Stage 3+, a proprietary mechanism name can carry the headline alone. The claim becomes shorthand (one word, implied); the mechanism becomes the H1 or a standalone sub-headline. See §6.4.4 (proprietary mechanism naming) and §8 Shape B (mechanism-led headline).

| # | Template | Example |
|---|----------|---------|
| F71 | [Proprietary Mechanism Name] — [1-line description of effect] | *"The [Method Name] — turns every transaction into a compounding asset"* |

**When it works**: (a) the mechanism is codified and genuinely proprietary, (b) the audience already knows the problem space, (c) the name is vivid enough to carry the headline alone, (d) the sophistication stage is 3+ (the market has absorbed claims and now responds to differentiation by mechanism).

**Additional examples** (swipe quarantine — B.1–B.3 still apply, see note at top of this appendix):
- *"The AOV Algorithm"*
- *"Asymmetric biological control"*
- *"The Triple Swan Sequence"*
- *"Behavioural-Triggered Campaign Consumption"*
- *"The 4X Follow-Up Framework"*
- *"Microbiome modulation"*
- *"Critical factor drawbridge"*
- *"Movie preview method"*
- *"Set point mechanism"*
- *"E5 Method"*
- *"Turns Up Your Digestive Furnace"*

---

### How to use the formula library in practice

1. **Identify the awareness level and sophistication stage** from the brief (Section 3 — Required inputs).
2. **Pre-select 2-4 candidate categories** based on the awareness mapping:
   - Most Aware → Cat 1 (direct benefit), Cat 11 (announcement), Cat 12 (urgency)
   - Product Aware → Cat 5 (authority), Cat 9 (counterintuitive), Cat 18 (mechanism — if Stage 3+)
   - Solution Aware → Cat 1 (benefit), Cat 4 (curiosity), Cat 6 (story), Cat 16 (ultimate guide)
   - Problem Aware → Cat 3 (question), Cat 4 (curiosity), Cat 7 (provocation), Cat 8 (blame discharge), Cat 9 (counterintuitive)
   - Unaware → Cat 3 (question), Cat 4 (curiosity), Cat 6 (story), Cat 15 (target selection / open letter)
3. **Generate 1-2 variants per pre-selected category**, drawing rhythm and structure from that category's Additional examples.
4. **Run the §6 5-characteristic checklist** (incisive / credible / immediate benefit / curiosity / specific) on each variant.
5. **Select 3-5 variants** to present, deliberately spanning multiple categories so the copywriter sees genuinely different approaches to the same brief (per §13.2 — variant differentiation).

---

## 17. Cross-references

- [CLAUDE](CLAUDE.md) — orchestrator, runs Brief readiness check before invoking this specialist
- [strategist](skills/strategist.md) — produces the funnel brief this specialist consumes
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — input template
- [big-idea](core/strategic-frameworks/big-idea.md) — Big Idea construction; the headline is the surface where the Big Idea crystallizes (§8)
- [proof-elements](core/strategic-frameworks/proof-elements.md) — proof typology that feeds the credibility characteristic (§6.2) and proof stacking (§9.4)
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — strategic levers the headline activates
- [naming](core/strategic-frameworks/naming.md) — UM naming conventions when the headline carries a proprietary mechanism (§6.4.4)
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — belief targeting for the variant batch
- [awareness-levels](core/strategic-frameworks/awareness-levels.md) — calibrator for headline shape selection (§6.3, §8)
- [writing-principles](core/writing/writing-principles.md) — read SECTION A + B post-draft as the refinement layer
- [emotional-intelligence](core/writing/emotional-intelligence.md) — conditional read when the dominant emotion (§7) requires vocabulary depth
- [hook-specialist](section-specialists/hook-specialist.md) — sibling section specialist; handles micro-openers (email subject lines, VSL spoken openings, ad caption openers, social post first lines). Often invoked in parallel with this specialist when a piece needs both a headline block AND a micro-opener.
- [lead-specialist](section-specialists/lead-specialist.md) — sibling section specialist; handles the lead / opening narrative that follows the headline block. The headline sells the lead's first line.
- [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — sibling section specialist; articulates the Unique Mechanism in the body. The headline's mechanism naming (§6.4.4, §8 Shape B) must align with the marketing thesis's articulation.
- [offer-specialist](section-specialists/offer-specialist.md) — sibling section specialist; handles the offer block at the close. The headline opens what the offer block closes — the two are the persuasion bookends of any piece.
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — sibling section specialist; produces the bullet sets that feed Method 2 (§12.2 bullet-first headline generation).
- [faq-specialist](section-specialists/faq-specialist.md) — sibling section specialist; handles the FAQ block before the close.
- [lp-specialist](format-specialists/lp-specialist.md) — primary consumer of LP hero headlines (§10.1)
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — primary consumer of advertorial titles (§10.3)
- [ad-specialist](format-specialists/ad-specialist.md) — primary consumer of static-ad visual overlays and thumbnail headlines (§10.4, §10.5)
- [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) — primary consumer of VSL thumbnail titles (§10.7) and the headline that sits above the embedded video player
- [blog-specialist](format-specialists/blog-specialist.md) — primary consumer of blog post titles (§10.6)
- [email-specialist](format-specialists/email-specialist.md) — adjacent specialist; emails use micro-openers (handled by hook-specialist) rather than structured headline blocks, but occasional offer emails reference a hosted headline block
- `brands/<brand>/brand-copy-rules.md` — voice, primary over generic best practice
- `brands/<brand>/swipe.md` — brand-specific headline examples for voice calibration
- `brands/<brand>/testimonials.md` — proof rows that feed proof stacking in the sub
- `brands/<brand>/transcripts/` — source material for avatar vocabulary
