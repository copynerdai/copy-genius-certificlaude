# Email Specialist — Format Specialist

> Operational skill. Writes single emails and email sequences for any funnel context the [strategist](skills/strategist.md) has documented in a funnel brief.
>
> Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) when intent recognition matches email writing (single email, sequence, subject line work, abandoned-cart recovery, etc.). Reads the funnel brief, the brand wiki, and the cross-specialist writing libraries — never reinvents what's documented elsewhere.
>
> **Self-contained file**: this specialist holds both the operational workflow AND the email-specific knowledge base (catalog of types, anatomy, sequence archetypes). For **subject lines + first-line body openings** — the email's Double Hook — this specialist delegates to [hook-specialist](section-specialists/hook-specialist.md), which owns the 18 hook types + 7 advanced patterns + the awareness matrix. Cross-specialist references also go out to [writing-principles](core/writing/writing-principles.md), [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md), and the funnel brief.

---

## 0. Execution path — read this first

> Always read before writing: funnel brief touchpoint block · brand-copy-rules · feedback-rules (brand overrides global).
> **Structure selection (Mode 1 step 5)**: before planning, the orchestrator queries the [swipe-index](swipe/index.md) for matching structures — if a SKELETON (or composition) was chosen, it is the piece plan's structural spine; adapt it to the brief, never the reverse. If none chosen, plan from this file's own models.
> Tier 1 style bans apply while DRAFTING, not only at QA (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.", no banned phrases.
> Writing invocation: §9 (select the email type) → §11 (5-phase protocol — Fase 1 is the single normative pre-writing list; Fase 2b for sequences) → §10 (subject lines — Double Hook, written with the body) → §12 (output formats) → §14 (revision checklist).
> Reference sections — consult on demand only: §4-§5 (principles + anatomy), §6 (21-type library — open ONLY the chosen type's entry, per Fase 1 step 4), §7 (sequence archetypes — only the archetype in play), §8 (structural patterns).

---

## Quick navigation

### Part A — Identity & scope
- §1 [Purpose](#1-purpose)
- §2 [When invoked](#2-when-invoked)
- §3 [Required inputs](#3-required-inputs)

### Part B — Knowledge base
- §4 [Core principles](#4-core-principles)
- §5 [The 5-block email anatomy](#5-the-5-block-email-anatomy)
- §6 [The 21 email types library](#6-the-21-email-types-library)
- §7 [The 7 sequence archetypes](#7-the-7-sequence-archetypes)
- §8 [Email-specific structural patterns](#8-email-specific-structural-patterns)

### Part C — Operational workflow
- §9 [Selecting the email type](#9-selecting-the-email-type)
- §10 [Subject lines](#10-subject-lines)
- §11 [Application protocol — the 5 phases](#11-application-protocol--the-5-phases)
- §12 [Output formats](#12-output-formats)

### Part D — Quality control & references
- §13 [Common pitfalls](#13-common-pitfalls)
- §14 [Revision checklist](#14-revision-checklist)
- §15 [Cross-references](#15-cross-references)

---

# PART A — Identity & scope

## 1. Purpose

Produce written email copy ready for delivery:

- **Single emails** — broadcasts, individual emails in a campaign, one-off sends
- **Sequences** — multi-email arcs (welcome, abandon cart, launch, nurturing, soap opera, re-engagement, post-purchase)
- **Subject lines** — 3 variants per email (own-produced unless [hook-specialist](section-specialists/hook-specialist.md) supplies approved subject lines for critical sequence emails)
- **P.S. blocks** — always present, always different angle from main CTA

Does NOT produce:

- Fascinations / bullet lists — handled by [bullet-point-specialist](section-specialists/bullet-point-specialist.md), except CTA fascinations when none provided
- Hooks for non-email formats — handled by [hook-specialist](section-specialists/hook-specialist.md)
- The funnel brief or strategic decisions — handled by [strategist](skills/strategist.md)

The specialist is the **executor**, not the strategist. Strategic decisions (which rings to install, which awareness level, which Big Idea, which offer to surface) come from the brief. The specialist's job is to translate those decisions into copy that hits the brief's targets in the brand's voice.

---

## 2. When invoked

The orchestrator routes to email-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches:

- "write the email sequence", "scrivi le email", "draft the abandon cart sequence"
- "write the welcome email", "draft the launch broadcast"
- "write a re-engagement email", "scrivi un'email di winback"
- Sequence-specific names (welcome / cart abandonment / launch / nurturing / soap opera / re-engagement / post-purchase)

The orchestrator runs the **Brief readiness check** ([CLAUDE §6](CLAUDE.md)) before invoking. If the brief is Draft / In-Review / missing for this touchpoint, the orchestrator surfaces the gap before calling email-specialist.

---

## 3. Required inputs

The specialist needs these to start. Missing inputs are escalated to the orchestrator.

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md) of the specific funnel):

- §3.2 Mass Desire — the dominant desire calibration
- §3.3 Awareness Level — for selecting types and subject patterns
- §3.5 Avatar reference — voice anchors, blocking beliefs, lived-experience details
- §3.6 Offer — full 7-component offer for emails that touch the offer
- §3.7 Big Idea — the angle the emails express
- §3.8 Chain of Beliefs — the rings each email installs
- §3.9 Proof inventory — testimonials, data, authority cites to deploy
- §3.10 Reference pointers — which testimonials, transcripts, swipe rows to pull
- §4.2 / §4.3 Touchpoint blocks — for emails as funnel touchpoints (sequence emails, broadcasts)

**From the brand wiki**:

- `brands/<brand>/brand-copy-rules.md` — voice (mandatory)
- `brands/<brand>/swipe.md` — brand-specific email examples for voice calibration
- `brands/<brand>/transcripts/` — selected transcripts for vocabulary, founder anecdotes
- Specific testimonials referenced in the brief

**From the cross-specialist writing libraries** (read once during pre-writing — the normative reading sequence is Fase 1 of §11):

- [feedback-rules](core/feedback-rules.md) — global user rules. Read together with `brand-copy-rules.md` at Fase 1 step 0 (brand rules override global).
- [hook-specialist](section-specialists/hook-specialist.md) — owns the catalog of 18 hook types + 7 advanced patterns used for subject lines and first-line openings (the email's Double Hook). Email-specialist either calls hook-specialist for variants or picks the recommended type from §6 and writes inline — see §10.
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — for the strategic levers
- [emotional-intelligence](core/writing/emotional-intelligence.md) — **gated read, two branches** (see §11 Fase 1 step 6): (a) MANDATORY when the brief's touchpoint block names Emotional anchors — read those entries only; (b) if the brief names no anchors and the piece includes emotionally-led moments (problem dramatization, hook, future pacing), consult the relevant entries anyway (max 3 per piece) and flag the missing anchors to the copywriter as a brief gap. Either way, read ONLY the entries needed — never the whole file.
- [writing-principles](core/writing/writing-principles.md) — for post-draft refinement (consulted in Fase 3-5, not before)

**From the copywriter (the request)**:

- Single email or sequence?
- If sequence: which archetype (welcome / cart abandonment / launch / etc.)?
- Sequence length (if not specified by archetype)
- Any specific email function the brief doesn't already pin down
- Any constraint (specific testimonial to feature, specific call-out, specific date / urgency anchor)

---

# PART B — Knowledge base

## 4. Core principles

### 4.1 Email = a conversation between two people

Every email is one frontman speaking to one reader. Never a brochure, never a lecture, never a corporate broadcast. The voice is intimate even when the topic is hard-sell.

### 4.2 One email = one idea = one CTA

A single email carries ONE central idea, ends with ONE call to action (the CTA may repeat 2x maximum within the body, but never asks the reader to do two different things).

### 4.3 Email sells the CLICK, not the product

The job of the email is to earn the click to the next destination (sales page / VSL / booking / next-step page). The destination closes; the email opens. Exception: pure relationship-builder emails where the goal is engagement, not conversion.

### 4.4 Infotainment — give the WHY, sell the HOW

Content and selling are fused. The reader receives the *insight* (why this matters, why now, why this approach) and the product enters as the *implementation* of the insight. Reader never perceives the moment value ends and pitch begins.

### 4.5 Frequency beats perfection

A 6.5/10 email sent daily outperforms a 10/10 email sent weekly. Production discipline matters more than polish. This calibrates the writing standard: ship clean and human, not over-engineered.

### 4.6 Each email in a sequence is self-sufficient

A reader who opens only email #4 of a 7-email sequence must still receive complete value. Sequences have arc, but every email stands on its own.

---

## 5. The 5-block email anatomy

Every email has 5 functional blocks. Some blocks can be one sentence; some can stretch over multiple paragraphs. The blocks are functional, not visual.

### Block 1 — Hook (1-3 sentences)

The opening earns the read. Opens a curiosity gap, emotional spike, or unanswerable question. The Block 1 hook (first line of the body) works **in pair with the subject line** as a Double Hook (subject = Hook 1 / Stop; first body line = Hook 2 / Trap — per [hook-specialist §4](section-specialists/hook-specialist.md#4-core-principles--the-double-hook-architecture)). Selection of the hook type comes from the 18 types + 7 advanced patterns in [hook-specialist §5-6](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) — each email type in §6 of this file flags its recommended hook type.

**Diagnostic question**: *If I cut the first paragraph, do I lose anything? If no, the first paragraph is warmup — cut it. The hook is the second paragraph in disguise.*

### Block 2 — Body (narrative core)

Story, analogy, opinion, observation, demonstration. Never didactic lists. Paragraphs 1-3 lines maximum.

**Three primary narrative devices**:

- **Reader question** — pose a question the reader has → derive a principle → connect to product
- **Personal memoir** — a specific memory → extract a moral → product as the implementation
- **Extended metaphor** — concrete image → conceptual mapping → product enters via the metaphor

**Bridge sentences** between paragraphs: phrases that hook one beat to the next. Voice-driven, never generic ("Why am I telling you this?" / "Here's where it gets interesting" / "And then I noticed something").

### Block 3 — Bridge to offer

The product emerges as the **logical consequence** of the principle established in the body. If the bridge feels like a gear shift ("And by the way, my product..."), the body wasn't doing its job. Rewrite the body until the bridge feels inevitable.

### Block 4 — CTA

ONE specific reason to act TODAY. Calibrated to the audience temperature and sequence position.

| Calibration | When | Pattern |
|---|---|---|
| **Soft** | Cold audience, mid-nurture | "If this resonates, here's where to look next..." |
| **Direct** | Warm, close-of-sequence | "Click here to [action] before [deadline]." |
| **Integrated** | Story-led, embedded | Link inside narrative flow |

### Block 5 — P.S.

**ALWAYS present.** Second most-read element after subject line — many readers scroll to P.S. before reading the body.

The P.S. is NOT a summary. It is a **second shot at conversion** with a fresh angle. Possible angles (pick one, never all):

- Urgency or scarcity reminder
- Restate the biggest benefit in different framing
- Personal note that humanizes the sender
- Tease the next email in the sequence
- Different proof element than the body used

---

## 6. The 21 email types library

Each type is an **end-to-end narrative shape** for ONE email. The 5-block anatomy is the skeleton; the type is the flavor.

> **Gated library**: do not read this section end to end at writing time. Choose the type via the §9 tables, then read ONLY the chosen type's entry (per §11 Fase 1 step 4).
>
> **Derived-copy note (applies to every "Recommended hook type" line in this section)**: the hook-type recommendations are derived copy — source of truth: [hook-specialist](section-specialists/hook-specialist.md) §5-§6 and §A1. Re-sync on edit; on conflict, hook-specialist wins.

**Critical rule**: in a sequence, never repeat the same type in consecutive emails. Variety of mechanism keeps the reader engaged across the arc.

---

### Family A — Curiosity-led (open gaps, force forward reading)

---

#### Type 1 — Socratic Teaser

**Mechanism**: A chain of escalating questions that leads the reader to a realization they reach themselves. The product appears as the natural answer to the question the reader has just answered internally.

**Best for**: Problem Aware audiences, opener emails, cold-to-warm transition.

**Chain rings typically installed**: #1 (problem exists), #2 (problem is priority), #5 (missing 1%), beginning of B1 (brand understands).

**Persuasion technique active**: [Gradualization](core/strategic-frameworks/persuasion-techniques.md) (inclusion questions, syllogistic thinking — reader concludes the truth themselves).

**Recommended hook type**: [Type 18 — Relevant Question](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) or [Type 3 — Binding Statement](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types).

**Standard arc**:
1. Hook — a question that demands self-examination
2. Body — 2-3 follow-up questions, each building from the implied answer to the previous
3. Bridge — the realization that emerges from the question chain
4. CTA — positions the product as the answer the reader is now ready to receive
5. P.S. — one final question that re-opens curiosity for the next email

**Avoid when**: audience is already Product Aware or Most Aware (gradualizing what they already accept feels insulting).

---

#### Type 5 — Forbidden Curiosity

**Mechanism**: Frames knowledge as hidden, suppressed, or kept secret from the audience. Curiosity gap opens via the perception of restricted access.

**Best for**: Problem Aware audiences, especially in health, finance, performance niches where insider knowledge has weight.

**Chain rings typically installed**: #5 (missing 1%), #6 (previous understanding wrong), #18 (brand has unique advantage).

**Persuasion technique active**: [Camouflage](core/strategic-frameworks/persuasion-techniques.md) (third-party authority — the writer as messenger of suppressed information) + light Concentration (alternatives are part of what's hiding the truth).

**Recommended hook type**: [Type 14 — Burning Curiosity / Open Loop](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) or [Type 6 — Secret Advantage of a Group](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types).

**Standard arc**:
1. Hook — frame the existence of suppressed/hidden knowledge
2. Body — explain why the knowledge has been kept hidden (incentives, industry, culture)
3. Bridge — reveal that the brand has access to / is publishing this knowledge
4. CTA — invite into the access
5. P.S. — hint that more is coming (chain to next email)

**Avoid when**: market is saturated with conspiracy framings (current Italian DR climate has fatigue here — use with awareness).

---

#### Type 6 — Paradoxical Truth

**Mechanism**: A counterintuitive claim that contradicts mainstream belief, followed by proof. The dissonance forces engagement: the reader either rejects the claim and stops, or accepts the proof and stays.

**Best for**: Sophisticated markets (Stage 4-5), Solution Aware audiences fatigued by standard claims.

**Chain rings typically installed**: #6 (previous understanding wrong), #8 (past failures destined), #11 (different from past).

**Persuasion technique active**: [Gradualization](core/strategic-frameworks/persuasion-techniques.md) (contradiction of false belief).

**Recommended hook type**: [Type 11 — Contrarian Advice](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) or [Type 5 — New Cause / Hidden Trigger](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types).

**Standard arc**:
1. Hook — state the counterintuitive claim flatly
2. Body — back it with mechanism, data, or named authority
3. Bridge — the new truth makes the product's approach the natural conclusion
4. CTA — invite to the solution that follows from the new truth
5. P.S. — extend the contrarian framing (one more "common belief that's wrong")

**Avoid when**: the contrarian claim cannot be fully backed up — the reader's skepticism will exceed the curiosity.

---

#### Type 9 — Curiosity Cultivator

**Mechanism**: Multiple stacked curiosity hooks, none fully resolved in the email itself. The reader is left with open loops that the rest of the funnel or sequence will close.

**Best for**: Broadcast emails to a nurture list, list re-engagement, mid-sequence pivots that need to keep momentum.

**Chain rings typically installed**: opens space for #5 (missing 1%) without fully installing; primes brand engagement.

**Persuasion technique active**: [Intensification](core/strategic-frameworks/persuasion-techniques.md) (compound desire through stacked partial reveals).

**Recommended hook type**: any curiosity-family type from [hook-specialist §5](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) — Type 14 (Burning Curiosity), Type 5 (New Cause), Type 11 (Contrarian Advice), Type 7 (Shocking Fact).

**Standard arc**:
1. Hook — first curiosity gap
2. Body — second and third curiosity hooks layered (each could be its own email)
3. Bridge — the destination (LP / VSL / next email) is positioned as where the loops close
4. CTA — click to resolution
5. P.S. — fourth curiosity hook teased for tomorrow

**Avoid when**: audience is at decision point — they need closure, not more loops. Use closer-of-sequence types instead.

---

### Family B — Identity & Polarization (us vs them, identity-driven action)

---

#### Type 2 — Taboo Breaker

**Mechanism**: Opens by addressing a controversy, fear, or unspoken topic the audience knows but doesn't discuss. The shock of seeing it named creates pattern interrupt and re-engages dormant attention.

**Best for**: Re-engagement of cold lists, pattern interrupt mid-sequence, brands with personality willing to take a stance.

**Chain rings typically installed**: B5 (brand cares about my success — willing to address the uncomfortable), B6 (brand has discovered through struggle).

**Persuasion technique active**: [Identification](core/strategic-frameworks/persuasion-techniques.md) (character role of the truth-teller) + light Concentration (against the silence of the category).

**Recommended hook type**: opening with the taboo subject named directly. Often [Type 2 — Associative State](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) framing the taboo as something the reader has felt.

**Standard arc**:
1. Hook — name the taboo
2. Body — explain why no one talks about it, then talk about it
3. Bridge — the brand's product is the response to the taboo's underlying issue
4. CTA — soft, often relational
5. P.S. — invite to reply / engage / extend the conversation

**Avoid when**: brand voice is conservative or formal — the taboo frame conflicts with the voice.

---

#### Type 4 — Polarization Principle

**Mechanism**: Defines an us-vs-them identity. Readers who self-identify with the "us" stay; readers who don't unsubscribe. Builds a tribal audience.

**Best for**: Brand-building emails, community sequences, audiences where strong identity differentiation is strategic.

**Chain rings typically installed**: #19 (brand reflects my values), B5 (brand cares), B4 (brand trustworthy through honesty about who it serves).

**Persuasion technique active**: [Identification](core/strategic-frameworks/persuasion-techniques.md) + [Concentration](core/strategic-frameworks/persuasion-techniques.md) (against an out-group of approach/mindset, never of specific brands).

**Recommended hook type**: identity-naming frame, often [Type 2 — Associative State](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) tuned to identity rather than scene, or [H3 — Open Letter](section-specialists/hook-specialist.md#63--h3-adv-open-letter) explicitly addressing the in-group.

**Standard arc**:
1. Hook — name the "us" or the "them"
2. Body — articulate what each side believes / does / values
3. Bridge — the product is built for the "us"
4. CTA — for the "us" only; explicit qualifier
5. P.S. — reinforce the identity line

**Avoid when**: brand needs broad mass-market appeal — polarization shrinks the audience by design.

---

#### Type 19 — Authority Amplifier

**Mechanism**: Strong personal opinion expressed with the confidence of long experience. The frontman speaks as expert + as person, not as marketer.

**Best for**: Broadcast emails, brand personality building, audiences who value strong individual voices over corporate.

**Chain rings typically installed**: B1 (brand understands), B2 (brand competence), B6 (founder story embedded).

**Persuasion technique active**: [Identification](core/strategic-frameworks/persuasion-techniques.md) (character role) + [Camouflage](core/strategic-frameworks/persuasion-techniques.md) (the voice transcends ad-pitch register).

**Recommended hook type**: [Type 8 — Authority Quote](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) inverted (self-authority instead of cited — the frontman IS the authority).

**Standard arc**:
1. Hook — strong opinion stated flatly
2. Body — the experience or reasoning behind the opinion
3. Bridge — the product is what the opinion produces in practice
4. CTA — direct, confidence-led
5. P.S. — one more opinion that extends the brand's personality

**Avoid when**: brand voice is humble or peer-to-peer (the strong-opinion frame breaks the voice).

---

#### Type 18 — Bandwagon Blueprint

**Mechanism**: Demonstrates social momentum — the people moving, the trend forming, the community growing. FOMO emerges naturally from the scale.

**Best for**: Launch closing, community-driven products, audiences receptive to social proof at scale.

**Chain rings typically installed**: #23 (others will approve), B3 (brand track record), #20 (now or never light).

**Persuasion technique active**: [Identification](core/strategic-frameworks/persuasion-techniques.md) (community character role) + [Intensification](core/strategic-frameworks/persuasion-techniques.md) (cost of staying outside).

**Recommended hook type**: aggregate-proof framing, often [Type 7 — Shocking Fact / Statistic](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) with social numbers (community size, conversion rate, momentum metric).

**Standard arc**:
1. Hook — scale of the movement / number of buyers / momentum stat
2. Body — what's happening, who's joining, where it's going
3. Bridge — invite into the movement
4. CTA — join now, ride the wave
5. P.S. — one more datapoint of momentum

**Avoid when**: the numbers aren't impressive enough to carry the frame — manufactured bandwagon collapses on inspection.

---

### Family C — Proof & Credibility (build belief through evidence)

---

#### Type 12 — Authority Hijack

**Mechanism**: Borrows the credibility of a named expert, institution, study, or recognized authority. The frontman is the messenger; the authority is the source of truth.

**Best for**: Health, finance, performance niches where authority transfer has weight. Problem Aware audiences who need a credibility bridge.

**Chain rings typically installed**: B2 (brand competence — via association), #10 (root cause), #17 (specific mechanism).

**Persuasion technique active**: [Camouflage](core/strategic-frameworks/persuasion-techniques.md) (third-party authority transfer — the strongest variant).

**Recommended hook type**: [Type 8 — Authority Quote](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types).

**Standard arc**:
1. Hook — name the authority + what they discovered/said
2. Body — credentials of the authority + what they revealed
3. Bridge — the brand's product implements what the authority discovered
4. CTA — invite to the implementation
5. P.S. — extend with a second authority data-point

**Avoid when**: the authority is thinly attached to the topic (False Proof) or over-used in the niche (saturation).

---

#### Type 15 — Social Proof Spectrum

**Mechanism**: Multiple customer profiles, multiple results, multiple stories — each addressing a different reader segment or objection. The breadth says "people like you in many situations have done this."

**Best for**: Mid-sequence objection handling, launch sequences with diverse audience, products that serve multiple segments.

**Chain rings typically installed**: #12 (works for people like me), #14 (fits my life), B3 (brand track record).

**Persuasion technique active**: [Identification](core/strategic-frameworks/persuasion-techniques.md) (multiple character roles for projection) + [Mechanization](core/strategic-frameworks/persuasion-techniques.md) (the pattern across cases).

**Recommended hook type**: case-study framing, often [Type 2 — Associative State](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) or [Type 1 — Personal Claim / Story](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types).

**Standard arc**:
1. Hook — frame the variety of who has succeeded
2. Body — 3-5 brief case profiles (each 2-3 lines, different segment / situation / outcome)
3. Bridge — the through-line is the product / method
4. CTA — invite to add their case to the gallery
5. P.S. — most surprising case as bonus

**Avoid when**: testimonials are generic or unverifiable — variety amplifies suspicion when each profile feels invented.

---

#### Type 21 — Envy Engine

**Mechanism**: One specific person's enviable result, told as a focused story. The reader feels both inspiration and slight envy — the productive combination that drives action.

**Best for**: Aspirational products, lifestyle outcomes, mid-sequence emotional spike.

**Chain rings typically installed**: #12 (works for people like me — projection), #14 (fits my life), #15 (results worth cost), #16 (I deserve this).

**Persuasion technique active**: [Identification](core/strategic-frameworks/persuasion-techniques.md) (achievement role) + [Intensification](core/strategic-frameworks/persuasion-techniques.md) (vividness of the result).

**Recommended hook type**: [Type 14 — Burning Curiosity / Open Loop](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) in its Visible Outlier Witness variant — name a person whose specific result triggers the loop.

**Standard arc**:
1. Hook — name the person + their specific result
2. Body — what they did differently (the brand's approach)
3. Bridge — the same path is available to the reader
4. CTA — start the path
5. P.S. — one detail of the person's result that lands as visceral

**Avoid when**: the case is too distant from the reader's situation — the envy curdles into "that's for them, not me."

---

### Family D — Story & Narrative (carry the message through narrative arc)

---

#### Type 7 — Archetypal Journey

**Mechanism**: A full hero's journey for a single character (customer, founder, or witnessed figure). Struggle → discovery → transformation → resolution. The product is part of the discovery moment.

**Best for**: Brand emails, founder story sequences, Problem-to-Solution Aware transition emails.

**Chain rings typically installed**: B6 (founder discovered through struggle) or #12/#14 (for customer-archetype), #8 (past failures destined).

**Persuasion technique active**: [Identification](core/strategic-frameworks/persuasion-techniques.md) (character projection) + [Camouflage](core/strategic-frameworks/persuasion-techniques.md) (narrative format borrows non-ad trust).

**Recommended hook type**: [Type 1 — Personal Claim / Story](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types).

**Standard arc**:
1. Hook — drop into the middle of the character's struggle
2. Body — the full journey: struggle → search → discovery → application
3. Bridge — the product was the discovery moment (or the implementation of it)
4. CTA — invite the reader to enter the same journey
5. P.S. — one detail of the character's life now (current state, vivid)

**Avoid when**: format is too short to carry the arc (this is a 300-500 word email minimum) or when audience expects directness.

---

#### Type 8 — Fulfilled Fantasy

**Mechanism**: Vivid future-pacing of the desired state — multi-sensory, specific, lived-in. The product is positioned as the bridge from current reality to the imagined state.

**Best for**: High-ticket products, aspirational categories, desire amplification mid-sequence.

**Chain rings typically installed**: #15 (results worth cost), #16 (I deserve this), Ring 4 procrastination via desire amplification.

**Persuasion technique active**: [Intensification](core/strategic-frameworks/persuasion-techniques.md) (the dominant technique — visualization, sensory presentation, bringing the reader inside).

**Recommended hook type**: [Type 2 — Associative State](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) tuned to an aspirational scene rather than a pain scene — drop the reader inside the post-transformation life.

**Standard arc**:
1. Hook — open inside the imagined future state (no setup, just the scene)
2. Body — extend the scene with sensory details (sight, sound, touch, mood)
3. Bridge — the product is the path from here-now to that scene
4. CTA — start the path
5. P.S. — one final detail of the future state (the "and also..." that lands)

**Avoid when**: audience is skeptical of the desire's reality — future-pacing without belief structure backfires. Pair with proof emails.

---

#### Type 20 — Contrast Crafting

**Mechanism**: Side-by-side picture of "without the product" vs "with the product" — two parallel lives in the same email, the reader chooses which one.

**Best for**: Closing emails, final-decision moments, two-path close pattern.

**Chain rings typically installed**: #11 (different from past failures), #15 (results worth cost), #20 (now or never).

**Persuasion technique active**: [Intensification](core/strategic-frameworks/persuasion-techniques.md) (cost of inaction) + [Concentration](core/strategic-frameworks/persuasion-techniques.md) (the without-product life is implicitly the alternative path).

**Recommended hook type**: identity-question framing, often [Type 18 — Relevant Question](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) in its aspirational sub-form (the question the reader is asking about who they could become).

**Standard arc**:
1. Hook — set up the contrast
2. Body — describe both paths in alternation or side-by-side
3. Bridge — the decision moment is now
4. CTA — the path of the product, explicit
5. P.S. — the consequence of the not-product path, one line

**Avoid when**: the contrast can't be made visceral — generic contrasts ("better life vs worse life") fail. Specificity is mandatory.

---

### Family E — Belief installation (build acceptance through logic and consistency)

---

#### Type 3 — False Choice

**Mechanism**: Frame the reader's current options as two bad choices, then introduce the product as the unspoken third option. The "Neither" reveal pattern.

**Best for**: Solution Aware audiences shopping among alternatives, competition-destruction emails.

**Chain rings typically installed**: #11 (different from past failures), #22 (superior to alternatives), #17 (specific mechanism only this brand).

**Persuasion technique active**: [Concentration](core/strategic-frameworks/persuasion-techniques.md) (must pair with solution — Schwartz's master rule).

**Recommended hook type**: [Type 11 — Contrarian Advice](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) in its Either/Or → Neither sub-variant — pose the two known options, then reveal the third.

**Standard arc**:
1. Hook — pose the two known options
2. Body — show why each one fails (specific mechanism failure for each)
3. Bridge — reveal the third option
4. CTA — invite into the third path
5. P.S. — one more datapoint on why the standard options fail

**Avoid when**: the brand's solution shares mechanism with one of the negated options (the negation backfires).

---

#### Type 13 — Emotional Rollercoaster

**Mechanism**: Walks the reader through a deliberate emotional arc — fear, relief, desire, urgency — in sequence. Each shift earns the next.

**Best for**: Mid-sequence pivots, long emails (500+ words), audiences that benefit from emotional priming before offer.

**Chain rings typically installed**: multiple — the arc installs Ring 1 (problem worsening) → Ring 3 (solution exists) → Ring 4 (procrastination) in sequence.

**Persuasion technique active**: [Intensification](core/strategic-frameworks/persuasion-techniques.md) across multiple dimensions + [Gradualization](core/strategic-frameworks/persuasion-techniques.md) (the emotional sequence is itself a belief chain).

**Recommended hook type**: typically opens on the fear beat — [Type 2 — Associative State](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) in its Failure-Moment sub-variant (drop the reader inside the moment the problem broke them).

**Standard arc**:
1. Hook — fear beat: name the worsening problem
2. Body — relief beat (a solution exists) → desire beat (vivid future) → urgency beat (window closing)
3. Bridge — the product across all four beats
4. CTA — direct, urgency-driven
5. P.S. — re-anchor to the relief beat (avoid ending only on fear)

**Avoid when**: short emails (under 300 words) — the arc needs space. Compress and you get whiplash.

---

#### Type 16 — Consistency Chain

**Mechanism**: A sequence of micro-agreements (questions, statements, or observations the reader has already mentally agreed with) builds toward the product as the inevitable conclusion the reader's own logic produces.

**Best for**: Skeptical audiences, Problem Aware in high-stakes niches, audiences burned by past category failures.

**Chain rings typically installed**: builds slowly across the chain — primarily #2, #3, #4, then bridges into product rings.

**Persuasion technique active**: [Gradualization](core/strategic-frameworks/persuasion-techniques.md) (the dominant technique — yes-questions, syllogistic thinking, detailed identification).

**Recommended hook type**: [Type 18 — Relevant Question](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) or [Type 3 — Binding Statement](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) in the Inclusion-Question sub-form (the yes-question the reader cannot refuse to answer affirmatively).

**Standard arc**:
1. Hook — first agreeable proposition (yes-question or stated fact)
2. Body — chain of 3-5 micro-agreements building toward the conclusion
3. Bridge — the product is the logical conclusion of what the reader has just agreed to
4. CTA — invite to the conclusion
5. P.S. — restate the conclusion in one line

**Avoid when**: audience is at decision-point — chain-building is preparation, not closing. Use closing types.

---

### Family F — Urgency & Loss (drive action through time and loss aversion)

---

#### Type 10 — Loss Reframe

**Mechanism**: Quantify the cost of NOT acting. Make the inaction-path visible and expensive. Especially powerful in cart abandonment and closing emails.

**Best for**: Cart abandonment, closing emails, procrastination-prone audiences.

**Chain rings typically installed**: #4 (won't resolve), #7 (cost of problem exceeds price), #20 (now or never).

**Persuasion technique active**: [Intensification](core/strategic-frameworks/persuasion-techniques.md) (penalties of waiting — the dominant technique).

**Recommended hook type**: opening with the calculation — [Type 7 — Shocking Fact / Statistic](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) in its Threat-Stat sub-variant (the cost-of-inaction number).

**Standard arc**:
1. Hook — name the cost of inaction in specific terms
2. Body — accumulate the cost over time / scenarios
3. Bridge — the product as the path that stops the bleeding
4. CTA — direct, urgency-led
5. P.S. — one more dimension of the cost the reader hadn't considered

**Avoid when**: brand voice is humble / encouraging (loss reframe can feel manipulative if voice is gentle).

---

#### Type 11 — Scarcity Sells

**Mechanism**: Real urgency anchored in a stated reason. Deadline, quantity limit, cohort closure — always with the WHY of the limit.

**Best for**: Final-call emails, flash sales, cohort-program last days.

**Chain rings typically installed**: #20 (now or never), B4 (brand trustworthy via real reason).

**Persuasion technique active**: [Intensification](core/strategic-frameworks/persuasion-techniques.md) (penalties of waiting).

**Recommended hook type**: [Type 16 — Timely / Current Events](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) or [Type 17 — Strong Claim + Guarantee](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) — both carry the urgency frame natively.

**Standard arc**:
1. Hook — name the deadline / quantity + the reason
2. Body — what closes when the deadline passes (the specific loss)
3. Bridge — re-anchor the value being lost
4. CTA — direct, time-bound
5. P.S. — countdown / re-state the deadline

**Avoid when**: scarcity isn't real — phantom scarcity destroys B4 trustworthiness instantly. Never invent urgency.

---

#### Type 14 — Anchoring Advantage

**Mechanism**: Establish a high price anchor (the value of what's included, the cost of alternatives, the price the offer would normally be), then reveal the actual price. The contrast does the persuasion.

**Best for**: Offer-reveal emails in launch sequences, value-justification when prospect questions price.

**Chain rings typically installed**: #25 (I can afford this — through reframing), #15 (results worth cost).

**Persuasion technique active**: [Redefinition](core/strategic-frameworks/persuasion-techniques.md) (price reframing — switch the standard of comparison).

**Recommended hook type**: [Type 7 — Shocking Fact / Statistic](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) in its Hidden-Resource-Stat sub-variant (the value-stack number itself as the shocking stat).

**Standard arc**:
1. Hook — name the high anchor
2. Body — build the stack / justify the anchor
3. Bridge — reveal the actual price by contrast
4. CTA — direct, value-justified
5. P.S. — one element of the stack the reader might have missed

**Avoid when**: the anchor is implausible — when the prospect rejects the anchor, the whole structure collapses.

---

#### Type 17 — Endowment Effect

**Mechanism**: Make the reader feel like they already have the product (during a trial, an early sign-up, a "you're in" frame), then surface the threat of losing it. Loss aversion does the rest.

**Best for**: Free trial conversion, renewal emails, post-optin onboarding sequences.

**Chain rings typically installed**: #15 (results worth cost), #16 (I deserve this), #20 (now or never via loss).

**Persuasion technique active**: [Intensification](core/strategic-frameworks/persuasion-techniques.md) (the desire is anchored to what they "already have").

**Recommended hook type**: identity-locking framing, often [Type 2 — Associative State](section-specialists/hook-specialist.md#5-hook-pattern-catalog--18-base-types) in its Aspirational-Scene sub-variant — drop the reader inside the moment they're already enjoying the benefit.

**Standard arc**:
1. Hook — anchor in what they already have / are experiencing
2. Body — extend the value they're inside of
3. Bridge — what happens when access ends
4. CTA — convert to keep
5. P.S. — one final detail of what they'd lose

**Avoid when**: the prospect hasn't yet experienced the product — endowment requires real possession. Don't fake it.

---

## 7. The 7 sequence archetypes

Email sequences. Each archetype defines the standard architecture for a specific funnel role.

**Universal sequence rules**:
- Each email is self-sufficient (a reader opening only email #4 must get value)
- Never repeat the same type in consecutive emails
- Map the emotional arc deliberately before writing
- Urgency escalates toward the final email
- Last email = strongest push

---

### Archetype 1 — Welcome / Onboarding (3-5 emails)

**Purpose**: Convert a fresh optin into engaged reader + first-time buyer.

**State A → State B**: cold optin → invested reader expecting daily/weekly contact + ready to consider first offer.

**Standard arc**:
1. Email 1 — Welcome + quick win + brand introduction
2. Email 2 — Founder story / origin (B6)
3. Email 3 — Philosophy / core principle + soft CTA
4. Email 4 — Social proof + identity reinforcement
5. Email 5 — "What's next" + first offer or escalation

**Types typically used**: Type 7 (Archetypal Journey) for email 2 / Type 16 (Consistency Chain) for email 3 / Type 15 (Social Proof Spectrum) for email 4 / Type 12 (Authority Hijack) optional.

---

### Archetype 2 — Cart Abandonment (3-5 emails over 1-7 days)

**Purpose**: Recover prospects who reached checkout but didn't convert.

**State A → State B**: hesitating Product Aware → committed buyer.

**Standard arc**:
1. Email 1 (1-2h later) — Reconnect + diagnose hesitation (gentle, personal note)
2. Email 2 (24h) — Problem mechanism reminder + risk reversal emphasis
3. Email 3 (48h) — Testimonial + specific objection crush
4. Email 4 (96h) — Urgency + reason-why
5. Email 5 (final) — Two-path close / final call

**Types typically used**: Type 7 (Archetypal Journey) or Type 5 (Forbidden Curiosity) for email 1 / Type 21 (Envy Engine) for email 3 / Type 10 (Loss Reframe) for email 4 / Type 20 (Contrast Crafting) for email 5.

**Critical rules**: never start with "hai dimenticato qualcosa nel carrello!" cliché. The first email is a personal note acknowledging the hesitation, not a pressure tactic.

---

### Archetype 3 — Launch / Sales (5-9 emails over 5-10 days)

**Purpose**: Drive a coordinated launch around a specific product / offer / deadline.

**State A → State B**: aware audience → buyer within the launch window.

**Standard arc**:
1. Pre-launch (1-2 emails) — anticipation / tease / story
2. Launch day — offer reveal + bonuses
3. Mid-launch (2-3 emails) — proof / objection handling / alternative angles
4. Close (1-3 emails) — urgency escalation
5. Final email — last-call (often Type 11 Scarcity Sells)

**Types typically used**: Type 8 (Fulfilled Fantasy) for pre-launch / Type 14 (Anchoring Advantage) for launch day / Type 15 (Social Proof Spectrum), Type 12 (Authority Hijack), Type 6 (Paradoxical Truth) for mid / Type 10 (Loss Reframe), Type 11 (Scarcity), Type 20 (Contrast Crafting) for close.

---

### Archetype 4 — Nurturing / Broadcast (ongoing)

**Purpose**: Maintain relationship and consume-buy momentum on a list over months/years.

**State A → State B**: existing reader → ongoing reader + buyer at every offer opportunity.

**Standard arc**: continuous. No fixed sequence. Use **reason-why stacking**: same products / themes, different angle every email.

**Types typically used**: rotation across all 21 types. Never repeat consecutively. Maintain Infotainment principle in every email.

---

### Archetype 5 — Soap Opera (5-7 emails)

**Purpose**: Tell a serialized story across the sequence, each email ending with a cliffhanger that pulls the reader to the next.

**State A → State B**: cold list → emotionally invested + ready to buy at the climax.

**Standard arc**:
1. Email 1 — Stage-set / introduce character / situation
2. Email 2 — Rising tension / first conflict
3. Email 3 — Crisis / failure / wall
4. Email 4 — Epiphany / discovery (the product enters)
5. Email 5-6 — Application / results / hidden benefits
6. Email 7 — Urgency + final CTA + climax resolution

**Types typically used**: Type 7 (Archetypal Journey) across the arc / Type 13 (Emotional Rollercoaster) for crisis emails.

**Key rule**: every email ends with cliffhanger that creates open loop for next.

---

### Archetype 6 — Re-engagement / Winback (3-5 emails)

**Purpose**: Revive a cold or inactive list segment.

**State A → State B**: dormant reader → re-engaged or self-unsubscribed (both are wins — clean list).

**Standard arc**:
1. Email 1 — "We miss you" + what's new (pattern interrupt opening)
2. Email 2 — Proof of what they're missing (social proof or transformation)
3. Email 3 — Special offer + deadline
4. Email 4 — Last call / soft goodbye

**Types typically used**: Type 2 (Taboo Breaker) for email 1 / Type 21 (Envy Engine) for email 2 / Type 11 (Scarcity) for email 3.

---

### Archetype 7 — Post-Purchase (3-7 emails)

**Purpose**: Reinforce the buyer's decision, drive consumption, prepare for upsell / next purchase.

**State A → State B**: fresh buyer → consumed customer + ready for next offer.

**Standard arc**:
1. Email 1 — Celebration + first step (buyer's remorse prevention)
2. Email 2 — Preparation / setup / what to expect
3. Email 3 — Activation / first use
4. Email 4-5 — Usage tips / deeper application
5. Email 6 — Check-in + cross-sell or upgrade
6. Email 7 — Community / loyalty / next-step

**Types typically used**: Type 19 (Authority Amplifier) for email 1 / Type 16 (Consistency Chain) for email 2-3 / Type 14 (Anchoring Advantage) for email 6 cross-sell.

**Critical rule**: never sell aggressively in email 1 — the buyer needs validation, not another pitch.

---

## 8. Email-specific structural patterns

Three patterns that are email-specific (the cross-format hook architecture lives in [hook-specialist](section-specialists/hook-specialist.md); the underlying persuasion levers live in [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md)).

### 8.1 Discount Escalation with Reason-Why

Across a sequence, the discount increases (or the bonus stack grows) — but every increase has a stated reason. "I'm extending the offer because the cohort filled faster than expected" / "I'm adding a bonus because last week's emails surfaced a question I want to address."

Without reasons, the discounts read as desperation. With reasons, they read as responsiveness.

### 8.2 Spontaneity Frame

The email is framed as written in the moment, not pre-scheduled. "I wasn't planning to send this" / "Something just happened that I had to share." Removes the "calculated marketing" objection.

**Critical**: must feel genuine. Repeated use across many emails reveals it as a frame, and the trust collapses.

### 8.3 Pull-Back as Trust Builder

One email in a sequence deliberately doesn't sell. Pure value, no CTA, or only a relational CTA. The pull-back recalibrates the reader's expectation; the next email's push lands harder because trust has been restored.

Usually placed mid-sequence in launch / nurture flows.

---

# PART C — Operational workflow

## 9. Selecting the email type

The 21 types (§6) cover end-to-end shape selection. Selection follows from the brief, not from preference.

### Type selection criteria

| Input from brief | Implication for type choice |
|---|---|
| Awareness level | Calibrates which family is appropriate (e.g., Most Aware: avoid Curiosity-led / Identification opening) |
| Rings to install | Each type installs specific rings — match the email's required rings to types that install them |
| Position in sequence | Opening / middle / close emails favor different types (see archetypes in §7) |
| Recipient's emotional state | Cart abandonment requires a different type than welcome; mid-sequence requires different than close |
| Sequence variety | In a sequence, no two consecutive emails use the same type — the catalog rotation matters |

### Default candidates by situation

| Situation | Default candidate types |
|---|---|
| Cold opener to Problem Aware list | Type 1 (Socratic Teaser), Type 7 (Archetypal Journey), Type 5 (Forbidden Curiosity) |
| Welcome email #1 | Type 7 (Archetypal Journey for founder story) or Type 19 (Authority Amplifier) |
| Cart abandonment email 1 (personal note) | Type 7 (compressed) or Type 5 light, with Type 10 (Loss Reframe) emerging by email 3-4 |
| Launch reveal | Type 14 (Anchoring Advantage) or Type 8 (Fulfilled Fantasy) |
| Final-call urgency | Type 11 (Scarcity Sells), Type 20 (Contrast Crafting) |
| Re-engagement opener | Type 2 (Taboo Breaker) or Type 9 (Curiosity Cultivator) |
| Post-purchase email 1 | Type 19 (Authority Amplifier — celebration + validation) |

These are defaults — not rules. The brief and voice override them.

---

## 10. Subject lines

**The subject line is a hook — specifically, it is Hook 1 of an email's Double Hook (subject + first body line).** The architecture, the 18 types, the 7 advanced patterns, the awareness matrix, and the 6-axis revision all live in [hook-specialist](section-specialists/hook-specialist.md). This section documents only what is **email-specific** about the subject — the format constraints, the operational rules — and how email-specialist coordinates with hook-specialist on subject-line work.

### 10.1 — Coordination with hook-specialist

Two operating modes:

- **Inline mode (default)** — email-specialist writes the subject line directly, using the recommended hook type already flagged in §6 for the chosen email type. This is the standard path for sequence emails and broadcasts where the brief doesn't request dedicated hook production.
- **Delegation mode** — email-specialist explicitly invokes hook-specialist for subject-line variants when the brief flags the touchpoint as critical (launch lead email, advertorial bridge email, paid-to-list cold opener), or when the copywriter requests *"give me 3 subject lines from hook-specialist for this email"*. The output comes back in the standard hook-specialist format (Hook 1 / Hook 2 / target belief / dominant emotion — see [hook-specialist §10](section-specialists/hook-specialist.md#10-output-formats)).

Either way, the subject is ALWAYS treated as Hook 1 of a Double Hook — the first body line is ALWAYS Hook 2. The two are written together, never as separate units.

### 10.2 — Email-specific subject-line rules

These are the format constraints. The strategic selection (which type, which belief) follows [hook-specialist §8](section-specialists/hook-specialist.md#8-selection-logic--matching-pattern-to-brief).

- **Length**: max ~50 characters. Mobile inboxes truncate after that. Shorter usually performs better.
- **Single job**: earn the open. Nothing else — no claim, no offer, no preview of body. Selling happens downstream.
- **Open a loop, never close it**: a subject that resolves itself (*"5 tips for X"*) gives the reader no reason to open. See [hook-specialist §4.5](section-specialists/hook-specialist.md#45--open-the-loop-never-close-it).
- **3 variants per email** testing different angles. Per the **variant diversity rule** ([hook-specialist §8.4](section-specialists/hook-specialist.md#84--variant-diversity-rule)): the 3 variants must use **3 different hook types** targeting **3 different beliefs** — not 3 rewordings of the same angle.
- **Texture cues** that lift open rate: `[brackets]`, CAPS for 1-2 words (never the whole subject), numbers, quoted phrases. Pick 1-2 cues max — overload reads as spam ([hook-specialist §13.12](section-specialists/hook-specialist.md#1312--texture-overload-in-email-subjects)).
- **Never repeat the same subject formula in consecutive sequence emails** — extension of the email type-rotation rule (§6) into the subject layer.

### 10.3 — The Double Hook pair (subject + first body line)

The pair is the most powerful email opening structure. Always write the two together:

- **Hook 1 (subject)** — visceral interrupt at inbox-scan speed. Stops the scroll.
- **Hook 2 (first body line)** — curiosity gap / foreshadowing. Earns the read past the preheader.

Both leave the payoff for later in the body. The body delivers; the hook only promises.

Worked example:
- Subject (Hook 1 — Type 7 Shocking Fact): *"This 7-second trick drops blood sugar 24%"*
- First line (Hook 2 — open loop deepening the trap): *"But here's the problem nobody talks about — who honestly wants to do this every single day?"*

The subject stops with a specific number + dramatic claim. The first line validates the reader's likely objection and reopens curiosity in a fresh direction. The body resolves both threads.

### 10.4 — Quick lookup — subject hook type by awareness

> **Derived copy** — source of truth: [hook-specialist](section-specialists/hook-specialist.md) §A1. Re-sync this table on edit; on conflict, hook-specialist §A1 wins.

This is a condensed quick-lookup. The full Hook × Awareness matrix lives in [hook-specialist §A1](section-specialists/hook-specialist.md#a1-hook--awareness-matrix-full-reference) — consult it for the complete reasoning and the "Avoid" rows.

| Awareness | First-choice subject types | Avoid |
|---|---|---|
| **Most Aware** | Type 17 (Strong Claim + Guarantee), Type 16 (Timely / Current Events) | Curiosity-gap patterns (delay the offer) |
| **Product Aware** | Type 4 (Mechanism + Benefit), Type 8 (Authority Quote), Type 1 (Personal Claim), Type 18 (Relevant Question) | Generic claims that fit any competitor |
| **Solution Aware** | Type 11 (Contrarian Advice), Type 4 (Mechanism + Benefit), Type 13 (Mocking Traditional Solutions), Type 6 (Secret Advantage), Type 14 (Burning Curiosity) | Subjects explaining the problem |
| **Problem Aware** | Type 2 (Associative State), Type 5 (New Cause), Type 7 (Shocking Fact), Type 12 (Common Mistake), Type 18 (Relevant Question) | Product mentions, offers, mechanisms |
| **Unaware** | Type 2 (Associative State), Type 14 (Burning Curiosity), Type 16 (Timely), Type 1 (Personal Claim, as story) | Anything that names problem / solution / product / price |

For Product Aware: the brief must also specify the **5 Strategic Attack Angle** ([strategist](skills/strategist.md) Step 5) — see [hook-specialist §8.2](section-specialists/hook-specialist.md#82--strategic-attack-angle-selection-product-aware-only).

---

## 11. Application protocol — the 5 phases

The specialist follows the 5-phase workflow from [writing-principles §2](core/writing/writing-principles.md), applied to email writing.

### Fase 1 — Pre-writing (consultation)

**This is the single normative pre-writing list** (§3 describes the expected inputs; this sequence governs). Read in order:

0. Read [feedback-rules](core/feedback-rules.md) (global rules) + `brands/<brand>/brand-copy-rules.md` (brand rules — they override global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d).
1. The funnel brief sections listed in §3 above
2. `brand-copy-rules.md` — voice anchoring (already opened at step 0 for the rules; this pass is for voice calibration before drafting)
3. Brand swipe (1-2 examples calibrated to email format if available)
4. §6 (this file) — **gated read**: choose the type via the §9 tables, then read ONLY the chosen type's §6 entry (never the whole library); copy its "Avoid when" line into the piece plan so it gets checked against this email's context
5. [hook-specialist](section-specialists/hook-specialist.md) — identify the hook type for the Double Hook (subject = Hook 1 / first body line = Hook 2). The recommended type per email type is already flagged in §6 of this file; consult hook-specialist §5-6 for the type's full definition + variants, and §A1 for the Hook × Awareness matrix.
6. **Emotional gate** — read [emotional-intelligence](core/writing/emotional-intelligence.md): (a) MANDATORY when the brief's touchpoint block (§4.2 / §4.3) names Emotional anchors — read ONLY the entries listed there (e.g., only `### Anxiety` if the anchor is "Hook → Anxiety"); (b) if the brief names no anchors and the piece includes emotionally-led moments (problem dramatization, hook, future pacing), consult the relevant entries anyway (max 3 per piece) and flag the missing anchors to the copywriter as a brief gap. Note for each entry read: the 3 dimensions (physical / mental / visceral) + the file's universal rules (max 2-3 cues per passage, never name the emotion, regenerate — never copy verbatim).

DO NOT read [writing-principles](core/writing/writing-principles.md) yet — speaks after the draft exists.

### Fase 2 — Drafting

Write naturally inside the brand voice, applying the chosen type's 5-block structure. The principles in `writing-principles.md` are NOT actively checked during this phase.

For sequences: draft each email standalone, then run the sequence-level pass (Fase 2b below) to check connectivity, urgency escalation, type rotation, arc progression.

### Fase 2b — Sequence-level pass (sequences only)

Run on the whole arc after the standalone drafts exist (and re-run after Fase 3-5 polish). Six checks, all distilled from the §7 universal sequence rules and archetype arcs:

1. **Connectivity** — each email's close (or P.S.) opens a loop the next email rewards; in Soap Opera arcs, every email ends on a cliffhanger.
2. **Urgency escalation** — urgency rises toward the final email; the last email is the strongest push, never a soft fade.
3. **Type rotation** — no two consecutive emails use the same §6 type; no consecutive repeat of the same subject formula (§10.2).
4. **Arc progression** — the sequence visibly moves the reader from State A to State B per the chosen §7 archetype, and the emotional arc mapped in the sequence plan is actually realized beat by beat.
5. **Self-sufficiency** — each email still stands on its own: a reader opening only email #4 receives complete value (§4.6).
6. **No-repeat proof** — the same testimonial / data point / authority cite is not redeployed across multiple emails of the arc; each email pulls distinct proof from the brief's §3.9 inventory.

If a check fails, fix at the sequence level (reorder, swap type, redistribute proof) before polishing individual emails further.

### Fase 3 — Principles refinement

Read [writing-principles §SECTION A](core/writing/writing-principles.md).

Diagnostic question: *"Which 2-3 principles is this email underserving?"*

Refine only those 2-3 places. Never apply all 10 principles mechanically.

### Fase 4 — Anti-AI pass

Read [writing-principles §SECTION B](core/writing/writing-principles.md).

Diagnostic question: *"Where in this email do I sense AI rhythm or AI form?"*

Adjust the specific passages — not preventively.

### Fase 5 — Readability + Read aloud

Run the Gulpease check ([writing-principles §3](core/writing/writing-principles.md)):
- Target ≥70
- Below 70: refactor unless the heaviness is intentional register choice
- Below 60: always refactor

Then read aloud (or attentive sub-vocalization). Rewrite anywhere you stumble.

For sequences: run Fase 3-5 on each email individually, then re-run the Fase 2b sequence-level pass on the whole arc.

---

## 12. Output formats

### Single email structure proposal (when planning before writing)

```
PROPOSED EMAIL — [Function] for [Funnel name]

Email type: Type [N] — [Name] (from §6)
Awareness: [level from brief]
Recipient state: [emotional / cognitive state in this moment]
Subject line hook type: Type [N] — [Name] (from hook-specialist §5) or H[N] (from hook-specialist §6 advanced patterns)

Structure (5-block):
- Hook: [approach + open loop]
- Body: [narrative device + key content]
- Bridge: [how product enters]
- CTA: [action + calibration soft/direct/integrated]
- P.S.: [angle — different from main CTA]

Rings worked: [#X, #Y from brief §3.8]
Persuasion technique active: [from email-type entry]
Reference materials: [testimonial #X, transcript Y, swipe Z]
```

### Sequence plan (when writing a sequence)

```
PROPOSED SEQUENCE — [Archetype] for [Funnel] — [N] emails

State A (entry): [recipient state at email 1]
State B (exit): [recipient state at final email]
Emotional arc: [progression beat by beat]
Reference swipe / archetype: [if applicable]

Email 1: Day [X] — [Function] — Type [N]: [Name]
  Rings: #X, #Y | Hook angle: [1 sentence] | Core content: [1-2 sentences] | CTA: [action]
Email 2: Day [X] — [Function] — Type [N]: [Name]
  [...]
[continue for all emails]

Rings coverage check: [ring → email → installation device]
Objections addressed: [objection → email → handling]
Subject line strategy: [own / hook-specialist for emails #X, #Y]
Discount or urgency progression: [if applicable]
```

### Writing execution (after structure / sequence plan is approved)

```
EMAIL [N] of [N] — [Function]

Subject Line Option 1: [text — pattern A]
Subject Line Option 2: [text — pattern B]
Subject Line Option 3: [text — pattern C]

From: [Sender name] at [Brand]

[Full email body — 5-block structure flowing as a single narrative]

P.S. [text — different angle from main CTA]
```

---

# PART D — Quality control & references

## 13. Common pitfalls

Distilled from extensive email DR practice. Watch for these.

### 13.1 Hard teach

Giving away the complete "how-to" inside the email. The reader learns everything, has no reason to click. **Rule**: give the WHY (insight, principle, story). Sell the HOW (the product is the implementation).

### 13.2 Content and selling separated

The 80-20 trap: 80% teach, then "by the way, here's my product." The transition feels like a gear shift — the reader rejects the pivot. **Rule**: fuse content and selling so the bridge to product feels inevitable, not abrupt.

### 13.3 Subject line that closes the loop

A subject like "5 ways to sleep better tonight" gives no reason to open — the answer is implied. **Rule**: subject opens a loop. The body opens it further. The destination closes it.

### 13.4 Wall of text

Paragraphs over 3 lines = reader skips. Email format requires visual breathing. **Rule**: 1-3 lines per paragraph maximum. Sentence fragments allowed when they serve readability.

### 13.5 P.S. missing or generic

The P.S. is the second-most-read element. Skipping it = leaving conversion on the table. Using it as a summary = waste. **Rule**: always present, always different angle from main CTA.

### 13.6 Same type repeated consecutively in a sequence

Sequence variety is a feature, not optional. Two consecutive Loss Reframe emails (Type 10) read as desperation. Two consecutive Authority Hijack (Type 12) read as one long pitch. **Rule**: rotate types — never repeat consecutively. The 21-type catalog gives plenty of variety.

### 13.7 Buyer's remorse ignored post-purchase

First post-purchase email is NOT a sales pitch. It validates the decision. Selling immediately re-opens the buyer's doubt. **Rule**: email 1 post-purchase = celebration + validation, not pitch. Move to cross-sell from email 3 onward.

---

## 14. Revision checklist

Run this before delivering. **Email-specific only** — the universal writing-quality checks (Gulpease, em-dash count, anti-AI patterns, read-aloud) are handled during Fase 3-5 of the protocol per [writing-principles](core/writing/writing-principles.md). This checklist supplements those, it doesn't restate them.

**Per email**

- [ ] One email = one idea = one CTA (§4.2) — CTA repeated max 2x, never two different asks?
- [ ] The email sells the CLICK, not the product (§4.3) — except declared relationship-builders?
- [ ] Double Hook written as a pair: subject (Hook 1) + first body line (Hook 2), payoff deferred to the body (§10.3)?
- [ ] Subject line ≤ ~50 characters, opens a loop, never closes it (§10.2)?
- [ ] 3 subject variants = 3 different hook types targeting 3 different beliefs (variant diversity, §10.2)?
- [ ] Subject hook type conforms to [hook-specialist](section-specialists/hook-specialist.md) craft and matches the brief's awareness (§10.4 / hook-specialist §A1)?
- [ ] P.S. present, fresh angle — never a summary, different angle from the main CTA (§5 Block 5)?
- [ ] Bridge to offer feels inevitable — no "by the way, my product..." gear shift (§5 Block 3 / §13.2)?
- [ ] Paragraphs 1-3 lines max — no wall of text (§13.4)?
- [ ] The chosen type's "Avoid when" line (copied into the piece plan at Fase 1 step 4) was checked against this email's context?
- [ ] Tone and vocabulary match `brands/<brand>/brand-copy-rules.md`?
- [ ] feedback-rules (global + brand) re-scanned on the final draft — no rule violated?

**Per sequence (additional — see Fase 2b)**

- [ ] No two consecutive emails use the same §6 type; no consecutive repeat of the same subject formula (§7 / §10.2)?
- [ ] Each email self-sufficient — a reader opening only #4 gets complete value (§4.6 / §7)?
- [ ] Urgency escalates toward the final email; last email = strongest push (§7)?
- [ ] Emotional arc mapped in the sequence plan and realized beat by beat; Fase 2b pass run on the whole arc?

---

## 15. Cross-references

- [hook-specialist](section-specialists/hook-specialist.md) — owns the cross-format hook architecture (18 types + 7 advanced patterns + Hook × Awareness matrix + 6-axis revision). Email subjects + first body lines are written as Double Hooks per hook-specialist §4. Called inline by default; explicitly invoked in delegation mode for critical sequence emails (per §10.1). The recommended hook type per email type is flagged in §6 of this file (derived copy — hook-specialist is the source of truth).
- [writing-principles](core/writing/writing-principles.md) — post-draft refinement (principles + anti-AI + Gulpease + read-aloud). Consulted in Fase 3-5.
- [feedback-rules](core/feedback-rules.md) — global user rules; read at Fase 1 step 0 with `brand-copy-rules.md` (brand overrides global), re-scanned at QA (writing-principles Fase 4d).
- [emotional-intelligence](core/writing/emotional-intelligence.md) — atomic database for emotion dimensionalization (75 emotions × physical / mental / visceral). Gated read, two branches (see §11 Fase 1 step 6): mandatory when the brief names Emotional anchors (read those entries only); consulted anyway (max 3 entries) for emotionally-led moments when it doesn't, flagging the gap to the copywriter. Regenerate every cue in natural language — never copy verbatim.
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — strategic levers each type activates.
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — every email installs specific rings; the chain block in the funnel brief documents which.
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — the strategic decisions the specialist executes against. Primary input.
- [strategist](skills/strategist.md) — produces the brief this specialist consumes.
- [CLAUDE](CLAUDE.md) — the orchestrator that invokes this specialist + runs the Brief readiness check.
- `brands/<brand>/brand-copy-rules.md` — voice. Always primary over generic best practice. The type structures in §6 are expressed THROUGH this voice.
- `brands/<brand>/swipe.md` — brand-specific email examples (when available) calibrate type application to this brand.
- `brands/<brand>/testimonials.md` + `brands/<brand>/transcripts/` — source materials. Pull specifically what the brief references in §3.9 and §3.10.
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — Active. Supplies bullets when emails need them. Otherwise email-specialist creates only CTA fascinations.
