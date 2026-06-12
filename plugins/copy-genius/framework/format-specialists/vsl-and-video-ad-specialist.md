# VSL & Video Ad Specialist — Format Specialist

> Full-piece format specialist. Writes **every kind of script that is voiced over video** — from sub-15-second story ads, to mid-length video ads on social feeds, to 48-minute long-form video sales letters. Video ads and VSLs are the same craft: short video ads are mini-VSLs, long VSLs are extended video ads. One specialist covers the entire spectrum.
>
> Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) when intent recognition matches VSL / video sales letter / video ad / video creative / sponsored video / spoken-over-video script writing. Reads the funnel brief, the brand wiki, the universal writing libraries, and the section specialists relevant to each part it writes — never reinvents what's documented elsewhere.
>
> **Self-contained file**: this specialist holds the VSL/video-ad-specific knowledge base (anatomy at the script level, format conventions, six compositional patterns by duration, technical conversion levers) and the operational workflow. For the craft of individual components (hook, lead, mechanism argumentation, offer block, FAQ, bullets, headline), it references the corresponding section specialists — supplying only the script-specific execution tuning. The structure of each piece comes from the funnel brief; this file teaches *how* to execute that structure as a spoken-over-video piece.
>
> **Scope across all durations**: this single specialist covers every length — story ad (12-15"), video ad (30-120"), radio-style ad (60-170"), short model (~3-12 min), medium model (12-24 min), long model (24-48 min). The brief specifies the length target and awareness; this specialist chooses or applies the corresponding compositional pattern.
>
> **Boundary with the static [ad-specialist](format-specialists/ad-specialist.md)**: the ad-specialist owns **static** ad creatives (image, carousel, captions, visual hooks, button copy on thumbnails). This specialist owns **every video creative**, regardless of length — including the short video ads that live in social feeds. When in doubt: if the deliverable is voiced over moving video, it's this specialist; if the deliverable is a still image or a carousel of stills, it's the ad-specialist.
>
> **Companion for infomercials**: for entertainment-led / televendita-style DR videos ("televendita" = the Italian TV-shopping pitch tradition), read [infomercial-specialist](format-specialists/infomercial-specialist.md) TOGETHER with this file — it layers production craft (DEMO staging, pitch-man, two-CTA close, theming) on top of the script craft here; CLAUDE.md §5 routes those intents here + there.

---

## 0. Execution path — read this first

> Always read before writing: funnel brief touchpoint block · brand-copy-rules · feedback-rules (brand overrides global).
> **Structure selection (Mode 1 step 5)**: before planning, the orchestrator queries the [swipe-index](swipe/index.md) for matching structures — if a SKELETON (or composition) was chosen, it is the piece plan's structural spine; adapt it to the brief, never the reverse. If none chosen, plan from this file's own models.
> Tier 1 style bans apply while DRAFTING, not only at QA (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.", no banned phrases.
> Writing invocation: brief → pre-writing reads (§3 inputs + §9 Fase 1) → Part C operational workflow (§8 type/length/model selection → §9 application protocol → §10 output formats) → §12 revision checklist (QA).
> Reference sections — consult on demand only: Part B taxonomies (§4 principles, §5 anatomy, §6 conventions, §7 compositional models — open the entries the piece needs, not the whole catalog), and the §6 production appendix (§6.4 player configuration, §6.12 post-production, §6.13 production workflow — never needed at writing time).

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
- §7 [Compositional patterns — the six structural models by duration](#7-compositional-patterns--the-six-structural-models-by-duration)

### Part C — Operational workflow
- §8 [Selecting VSL type, length, and structural model](#8-selecting-vsl-type-length-and-structural-model)
- §9 [Application protocol — VSL-specific notes](#9-application-protocol--vsl-specific-notes)
- §10 [Output formats](#10-output-formats)

### Part D — Quality control & references
- §11 [Common pitfalls](#11-common-pitfalls)
- §12 [Revision checklist](#12-revision-checklist)
- §13 [Cross-references](#13-cross-references)

---

# PART A — Identity & scope

## 1. Purpose

Produce ready-to-record scripts for any spoken-over-video piece, across the full duration spectrum:

- **Story ads** (12-15") — vertical/ephemeral feed formats; ultra-short conversion-or-click
- **Video ads** (30-120") — sponsored video creatives for scrolling feed environments (the dominant video ad format)
- **Radio-style ads** (60-170") — longer ad units that follow the historical radio ad structure adapted to video
- **Short-model VSLs** (~3-12 min) — viral-leaning or category-disruption pieces, often with cinematic production
- **Medium-model VSLs** (12-24 min) — direct-response VSLs with the canonical 13-step body
- **Long-model VSLs** (24-48 min) — the dominant long-form sales VSL shape (the format the majority of high-performing direct-response VSLs use)
- **Section scripts for any of the above** — when the brief asks for a partial scope ("rewrite the pattern interrupt", "redo the offer block", "draft the close")

**Unifying principle**: video ads and VSLs are not separate crafts. A 30-second video ad applies the same persuasion architecture as a 30-minute VSL, just compressed: pattern interrupt, hook, USP, free offer, CTA. The structural models in §7 form a continuous spectrum — pick the one that fits the duration and awareness, regardless of whether the brand calls it "an ad" or "a VSL".

Does NOT produce:

- Hooks / pattern interrupts in isolation — handled by [hook-specialist](section-specialists/hook-specialist.md), unless none is supplied in the brief and the specialist drafts placeholders for the opening
- Headlines (the line above the video player) — handled by [headline-specialist](section-specialists/headline-specialist.md), unless none are supplied
- The lead / opening of the spoken content — handled by [lead-specialist](section-specialists/lead-specialist.md), with VSL-specific tuning applied here
- The mechanism argumentation — handled by [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md), with VSL-specific tuning applied here
- The offer block (product reveal, price, bonuses, guarantee, future pacing, close, CTA copy, P.S. system) — handled by [offer-specialist](section-specialists/offer-specialist.md), with VSL-specific tuning applied here
- The FAQ block — handled by [faq-specialist](section-specialists/faq-specialist.md)
- Bullet points (catalog / curiosity / page-reference) — handled by [bullet-point-specialist](section-specialists/bullet-point-specialist.md)
- The funnel brief or strategic decisions — handled by [strategist](skills/strategist.md)
- Landing pages, sales pages, advertorials, emails, ads (non-video), upsells — handled by their respective specialists

The specialist is the **executor**, not the strategist. Strategic decisions (awareness, sophistication, chain of beliefs, Big Idea, offer composition, lead type, CTA placement rules) come from the brief. The specialist translates those decisions into a video sales letter that respects the format's conventions, exploits its passive-viewing leverage, and survives the brutal attention economics of video.

---

## 2. When invoked

The orchestrator routes to vsl-and-video-ad-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches any of:

**VSL intents**
- "write the VSL", "scrivi la VSL", "draft the video sales letter"
- "write the VSL script for [offer]", "I need the VSL script"
- "draft a [N]-minute VSL for [offer]" — any duration

**Video ad intents**
- "write the video ad", "scrivi il video ad", "draft a [N]-second video ad"
- "write the story ad", "scrivi la story ad", "draft the [vertical/feed] ad"
- "I need a video creative for [campaign]", "scrivi una creatività video"
- "write the sponsored video", "scrivi il video sponsorizzato"
- "draft the reel script", "draft the TikTok-style script" — any spoken-over-video creative

**Partial-scope intents**
- "rewrite the pattern interrupt", "redo the close", "rifai il blocco offerta del video"
- "draft the opening for the [video ad / VSL]", "write just the script body"

**Disambiguation note**: when the request mentions "ad" without "video" qualifier, the orchestrator clarifies — static ad creatives route to [ad-specialist](format-specialists/ad-specialist.md); video ad creatives route here.

The orchestrator runs the **Brief readiness check** ([CLAUDE §6](CLAUDE.md)) before invoking. If the brief is Draft / In-Review / missing for this touchpoint, the orchestrator surfaces the gap before calling this specialist.

---

## 3. Required inputs

The specialist needs these to start. Missing critical inputs are escalated to the orchestrator.

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md) of the specific funnel):

- §3.2 Mass Desire — the dominant desire calibration
- §3.3 Awareness Level — primary calibrator for opening style, pattern interrupt depth, CTA timing
- §3.4 Sophistication — calibrates whether to lead with claim, mechanism, identity, or experiential proof
- §3.5 Avatar reference — voice anchors, blocking beliefs, lived-experience details (the script speaks *to* this avatar in conversational register)
- §3.6 Offer — full 7-component offer (the close section is the densest part of the VSL)
- §3.7 Big Idea — the angle the pattern interrupt and opening express
- §3.8 Chain of Beliefs — the rings the script installs (typically the full chain for long-model VSLs; partial for short formats)
- §3.9 Proof inventory — testimonials, data, authority cites to deploy across the script
- §3.10 Reference pointers — which testimonials, transcripts, swipe rows to pull
- §4.2 / §4.3 Touchpoint block for this VSL — section sequence + belief mapping + length target + structural model selection
- §4 (touchpoint) Approved hook / pattern interrupt and headline block (if already produced upstream by [hook-specialist](section-specialists/hook-specialist.md) / [headline-specialist](section-specialists/headline-specialist.md))

**From the brand wiki**:

- `brands/<brand>/brand-copy-rules.md` — voice (mandatory)
- `brands/<brand>/swipe.md` — brand-specific VSL examples for voice and pacing calibration
- `brands/<brand>/offers.md` — the specific offer's full composition (price, bonuses, guarantee, urgency, reason-why)
- `brands/<brand>/testimonials.md` — the proof rows the brief references (testimonials are read partially in VSLs, never end-to-end — see §6.2)
- `brands/<brand>/transcripts/` — selected transcripts for vocabulary, founder anecdotes, and customer stories that anchor the spoken voice

**From the cross-specialist writing libraries** (read once during pre-writing):

- [writing-principles](core/writing/writing-principles.md) — read SECTION C (Drafting methods) **before drafting** if the piece is medium or long model. Read SECTION A (principles) + SECTION B (anti-AI patterns) **post-draft** as Fase 3-4 refinement. Pay particular attention to the conversational-flow principles — VSL scripts amplify written stiffness the moment they're read aloud.
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — the strategic levers this VSL activates (Intensification dominant in Most/Product Aware short formats, Gradualization dominant in Problem Aware long model, etc.)
- [proof-elements](core/strategic-frameworks/proof-elements.md) — the proof typology this VSL deploys (see §5.7 — eight ways to prove a claim)
- Read [emotional-intelligence](core/writing/emotional-intelligence.md): (a) MANDATORY when the brief's touchpoint block names Emotional anchors — read those entries only; (b) if the brief names no anchors and the piece includes emotionally-led moments (problem dramatization, hook, future pacing), consult the relevant entries anyway (max 3 per piece) and flag the missing anchors to the copywriter as a brief gap. Note: the opening of a VSL is loaded with **negative emotions by design** (see §4.6) — a VSL almost always qualifies under branch (b), so this file is read for virtually every VSL even when the brief is silent.

**From the section specialists** (read each one when writing its corresponding VSL component — see §5):

- [hook-specialist](section-specialists/hook-specialist.md) — for pattern interrupt openings (§5.1) unless an approved one is already supplied
- [headline-specialist](section-specialists/headline-specialist.md) — for the headline above the video player (§5.2) unless an approved headline is already supplied
- [lead-specialist](section-specialists/lead-specialist.md) — for opening content (§5.3) and for the story section / Hero's Journey (§5.4)
- [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — for problem identification + agitation (§5.5), for solution + Unique Mechanism reveal (§5.6), and for proof argumentation (§5.7)
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — for the bullet section (§5.8)
- [offer-specialist](section-specialists/offer-specialist.md) — for the offer block (§5.9) including product reveal, price reveal (with price destruction / value stack / anchor patterns), bonus stack, guarantee, final future pacing, close, CTA copy, 3 P.S. system, Crossroad Close
- [faq-specialist](section-specialists/faq-specialist.md) — for the FAQ / final social proof block (§5.11)

**From the copywriter (the request)**:

- VSL duration target (story ad / video ad / radio-style / short / medium / long) if not specified in the brief
- VSL visual type (text-on-screen / doodle / talking-head / live action / webinar / faux-interview — see §6.1) if not specified in the brief or constrained by production budget
- Any specific constraint (production budget, frontman availability, faces-on-camera vs faces-off, language requirements)
- Any user-provided swipe (takes priority over generic conventions)

---

# PART B — Format expertise

## 4. Core principles

### 4.1 — A VSL is a sales letter, with caveats

The VSL is a sales letter rendered in spoken video form. The underlying persuasion rules of the long-form sales letter apply — chain of beliefs, awareness-calibrated arguments, mechanism articulation, offer construction, close architecture. What changes is the **delivery medium and a few format-specific caveats** that this specialist exists to handle.

The caveats — covered in detail in §6.2 — turn on three differences from written copy:

1. **The reader cannot scan.** Video is linear; viewers consume in real time. This is both leverage (you control sequencing) and risk (a boring stretch loses them with no recovery).
2. **There is a voice.** Stiff phrasing that reads acceptably on the page becomes painful when spoken. Read-aloud is not optional — it's the actual delivery mode.
3. **There is a visual layer.** Slides, images, on-screen text, talking-head footage, b-roll — every spoken claim sits next to a visual that can either reinforce or sabotage it.

Rule of thumb: **from this point forward, draft as if every piece will be a VSL — even when it ends up as a written sales letter**. The VSL discipline (short sentences, spoken cadence, single thought per beat) makes the written version better; the reverse path (writing for the page then trying to record it) almost never produces a clean script.

### 4.2 — The first 120 seconds are the headline

In a sales letter, the headline carries the weight of attention capture. In a VSL, the headline is replaced by the **first two minutes of the script**. Everything in that window — the pattern interrupt, the opening hook, the first claims, the first proof — does the work that a headline does on the page.

Operational implications:

- The pattern interrupt occupies the first few seconds (or sometimes longer — see §5.1)
- Within the first 30 seconds, the script must be **stacked with proof** — testimonials, scientific studies, dramatic demonstrations, credibility markers, anything that earns the viewer's continued attention
- By the end of the first 120 seconds, the viewer must have a reason to stay for the rest. If they don't, the script has failed at the headline.
- For story ads and video ads (sub-2-minute formats), the entire piece IS the headline — there is no "after the headline"

### 4.3 — Marketing 75% / Selling 25%

In medium and long model VSLs, the body has a structural balance:

- The **marketing portion** — attention capture, problem identification, agitation, solution, Unique Mechanism reveal, founder story, proof — occupies roughly **75%** of the runtime
- The **selling portion** — product reveal, bullets, price, guarantee, bonuses, urgency, closes, CTAs — occupies roughly **25%**

When the 75% is built well, the 25% becomes almost a formality. The viewer arrives at the offer already convinced — the price reveal, guarantee, and close exist to remove final friction, not to do persuasion from scratch.

When the 75% is weak, no amount of close-stacking saves the piece. A VSL that opens weakly, agitates softly, and reveals a generic mechanism cannot recover with three-CTA stacking and a long guarantee. The order of operations is fixed.

### 4.4 — Passive consumption + linear control

The VSL's defining structural advantage over written copy is that **the viewer cannot scan**. They cannot jump to the price, scroll past the boring middle, or skim the bullets. The script controls the sequence of exposure end-to-end.

This is leverage if the script earns the runtime. It's a liability if the script wastes it.

Operational implications:

- **Sequence matters more than in writing.** A weak beat in minute 11 will drop a percentage of viewers who would have skimmed past it on a page.
- **You must earn each minute.** Every section of the script must give the viewer a reason to keep watching — a tease forward, a new specific, a fresh emotional beat, a proof element they haven't seen yet.
- **The player controls compound the advantage.** Disable the playbar, the speed control, the fullscreen toggle (see §6.4). The viewer who cannot skip is structurally forced to absorb the message — but only if the message has earned that forcing.

### 4.5 — The unexpected as the engine

The single recurring principle behind every effective VSL opening — and behind much of the body — is **the unexpected**. The viewer's brain disengages from anything it can predict. The script must continuously deliver moments the viewer did not see coming.

This is the principle behind the pattern interrupt (§5.1, §6.3) — but it generalizes:

- Unexpected openings (a shocking image, an incongruent statement, an inversion of cliché)
- Unexpected pivots in the body (the moment the script says *"and here's the part nobody else is telling you..."*)
- Unexpected bonuses in the offer (something the viewer didn't realize they wanted until you named it)
- Unexpected proof (the source that surprises — a peer-reviewed paper in a niche where viewers expect testimonials only)

The diagnostic: read the script in sequence and mark every beat where the viewer's brain would say *"I see where this is going."* Every such beat is a place where you've lost slack. Insert an unexpected pivot, or accept that the script will sag there.

### 4.6 — Negative emotions outperform positive in the first beats

The opening of a VSL is **deliberately loaded with negative emotions**. Rage, fear, disappointment, shame have higher emotional adhesion than positive emotions in the first 30-60 seconds. The viewer's brain holds onto them longer and engages more deeply with the script that introduces them.

This is not the same as "negative throughout." The arc of a VSL — particularly medium and long models — moves from negative emotional ignition (opening) through agitation, then to hope (solution reveal), then to vivid positive future pacing (offer, future scenes). The negative phase is short, dense, and concentrated in the opening.

Operational rule: in the first 30-90 seconds, name a fear / shame / frustration / loss that the viewer has felt but rarely heard articulated by a marketing piece. The moment the viewer thinks *"Yes, that's exactly what I feel"* — the engagement is locked.

### 4.7 — Spoken language is not written language

Every line of the script must survive **being read aloud**. Phrases that read fine on the page reveal their stiffness the moment the voice tries to deliver them.

The operational rules that follow from this principle — short sentences, one thought per slide, trailing ellipses, spoken bridges instead of sub-headlines, bullets spoken naturally, red bold on emotional carriers, the closest-friend voice register, standing while recording, never reading testimonials in full — live in **§6.2 (VSL vs. sales letter — the differential conventions)**. That section is the single operational home for these rules: apply them **during drafting**, not as an afterthought.

### 4.8 — You vs. the system (who holds the "magic powers")

A subtle but load-bearing strategic choice: when the script implies that **someone or something has the rare ability to deliver the result**, that "someone or something" must be calibrated to what the offer actually sells.

- **If the offer is a service or consulting** — the frontman (the speaker, "you") holds the magic powers. The Unique Mechanism flows through their personal expertise. The script positions the speaker as someone with rare insight, hard-won lived experience, or a perspective the audience cannot easily replicate.
- **If the offer is a product or system** — the **product/system** holds the magic powers. The speaker is the discoverer or the witness, not the source. The Unique Mechanism is embedded in the product, and the speaker's role is to have found it and made it accessible.

Why this matters: if a product VSL positions the speaker as the source of the magic, the viewer's blocking belief becomes *"But I'm not like you — I can't get those results."* If a services VSL positions a generic "method" as the source, the viewer thinks *"Then why am I paying for a coach if it's the method?"* Calibrate accordingly — see [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) for the underlying argumentation structure.

---

## 5. Anatomy & components

The functional blocks of a VSL. Not all VSLs use all blocks — the brief and the chosen compositional pattern (§7) specify which are present. This catalog defines *what each block does at the VSL level* and *how to tune it for spoken-video execution*.

**Architecture note**: for components whose craft applies across many formats (hook / pattern interrupt, headline, lead, mechanism argumentation, offer block, bullets, FAQ), this specialist delegates the universal craft to the corresponding **section specialist** and supplies only the VSL-specific execution tuning. The vsl-and-video-ad-specialist remains the writer of the whole script — it does not hand off sections, it reads the section specialist files inline and applies the craft within VSL context.

### 5.1 — Pattern interrupt

Apply the craft from [hook-specialist](section-specialists/hook-specialist.md). The hook specialist owns the universal craft of attention capture, curiosity loops, and opening hooks across formats.

VSL-specific tuning:

- The pattern interrupt is the VSL's hook — the device that shocks, surprises, or disorients the viewer in the first seconds so they keep watching instead of scrolling past
- Duration: **a few seconds in most cases**, but it can extend up to **2-3 minutes** (live-video interrupt, animation interrupt as the entire opening segment, sustained-shock sequences)
- Visual layer is essential — the interrupt is rarely text-only; it leverages image, motion, voice-off, music, or scene to deliver the surprise
- Mix multiple interrupt families in a single opening to compound the surprise (see §6.3 for the nine canonical families: image, warning, countdown, animation, live video, proof, shock, entertainment / desirable results, mix)
- For story ads and video ads (sub-2-minute formats), the pattern interrupt is even more compressed (2-3 seconds) and often inseparable from the hook
- The pattern interrupt is **never decorative**. Even when it appears unrelated to the offer, it must connect to the body within the first 30-60 seconds — viewers tolerate a few seconds of "what is this?" only if the script delivers the *"oh, now I see"* moment quickly

The pattern interrupt is mandatory in every VSL of every duration. There is no exception. See §6.3 for the catalog of visual families and §11.3 for the failure modes when it's missing or weak.

### 5.2 — Headline above the video player

Apply the craft from [headline-specialist](section-specialists/headline-specialist.md).

VSL-specific tuning:

- The headline sits **above the embedded video player** on the landing page hosting the VSL
- **Keep it short.** A kilometric headline above the video pulls the reader into reading instead of watching — and when the video player is set to autoplay-muted, the viewer may miss the first crucial seconds of the script while still reading the headline
- The headline echoes the script's first promise without giving away the pattern interrupt
- Visual hierarchy: headline visually dominant but **vertically compact** so the video player is above the mobile fold
- Awareness calibration: Most/Product Aware → can carry the offer in the headline; Solution/Problem Aware/Unaware → carries the promise or angle, not the offer

When the VSL is delivered inside an ad creative (story ad, video ad) rather than on a landing page, this component is absent — the VSL is the whole creative.

### 5.3 — Opening content (post-pattern-interrupt content opener)

Apply the craft from [lead-specialist](section-specialists/lead-specialist.md).

VSL-specific tuning — the lead specialist's strategic lead types map onto **three canonical VSL opening modes**, each with its own internal mechanics:

#### Mode 1 — The Big Benefit opening

The speaker introduces themselves and the video in a structured promise:

> *"Hi, my name is [NAME], and in this short presentation I'm going to..."*
> *a) Show you why the way you're doing things right now is completely wrong*
> *b) Reveal the Common Enemy*
> *c) Teach you how to solve your problem quickly, easily, and in a way you'd never thought of before*

Point (c) is the promise. The script must be bold here — marketing is the art of making promises and keeping them, and the opening is no place for timid framing. The promise can be the speaker's personal story compressed into a single line ("how I lost 20kg in two weeks **eating donuts**") or a sweeping result claim, but it must be both **big enough** and **intriguing enough** that the viewer wants to keep watching to find out how.

Useful spoken frames:
- *"Here's the trick..."*
- *"In the next [N] minutes..."*
- *"I'll show you how/why..."*

Critical reminder: at this stage the speaker is promising what the viewer will gain by **watching the video**, not by buying the product. The product comes much later.

#### Mode 2 — The "Worst Day of My Life" opening (dramatic storytelling)

Pure storytelling. The script opens with the speaker (or a protagonist) at the lowest point of their personal arc — the worst day, the rock bottom, the moment of crisis. The opening drops the viewer *in medias res*, at the most dramatic beat of the story, not at the chronological beginning.

Characteristics:
- Contains significant mystery — the opening is **not** direct ("This product will help you with X"). It is indirect — the viewer doesn't yet know what's being sold.
- Opens in the middle of the story — the speaker is already in the dramatic moment, and the viewer must keep watching to understand why
- Loaded with vivid sensory and emotional detail — heart pounding, hands shaking, the smell of the hospital, the cold floor
- The most-used opening in the highest-performing long-model VSLs in saturated markets

This mode is the VSL application of a narrative lead type. The lead specialist's craft applies fully — the VSL tuning is that the story is **spoken**, dropped into the middle, and carries the cinematic load that on a page would carry through paragraphs of prose.

#### Mode 3 — The Shocking Statement opening ("you've been lied to")

The script opens with a statement that contradicts the audience's existing beliefs — a "draw your line in the sand" claim. This is the conspiracy/contrarian opening: *"You've been lied to."* / *"Everything they've told you about [X] is wrong."* / *"There's a secret about [Y] that 99% of people don't know."*

Characteristics:
- Direct contradiction of a widely-held belief in the audience's market
- Often leverages the conspiracy frame ("they don't want you to know...")
- Works best when the audience is already partially skeptical of mainstream answers in the niche
- Pairs well with proof — the shocking statement must be backed by something solid within the first 60-90 seconds, or the viewer disengages as quickly as they engaged

Selection guidance:

- **Big Benefit opening** — when the storytelling instinct is not the copywriter's strongest tool, or when the audience needs the promise framed cleanly before any narrative
- **Worst Day opening** — when the speaker (or brand frontman) has a genuine dramatic story, and the copywriter is confident with narrative voice. Performs better than Big Benefit when applied well.
- **Shocking Statement opening** — when the market is saturated with mainstream answers and the audience is primed for contrarian framing

In all three modes, the opening **must include proof within the first 30 seconds** (see §4.2). The strongest performers in any of the three modes are those that load the opening with testimonials, scientific studies, dramatic demonstrations, or credibility markers — proof is what converts initial attention into sustained attention.

### 5.4 — Story section (Hero's Journey)

Apply the craft from [lead-specialist](section-specialists/lead-specialist.md) — the story section is an extended narrative lead, deployed inside medium and long model VSLs.

VSL-specific tuning — the Hero's Journey structure in a VSL unfolds across approximately **eight beats**:

1. **Empathy — "even worse"** — show the speaker has been in a situation as bad as (or worse than) the viewer's. The viewer must feel: *"this person has been where I am."*
2. **Lowest point / inspiration point** — narrate the moment of rock-bottom in detail. This is where the story discharges blame and creates emotional projection.
3. **Common Enemy / "It's not your fault"** — identify the external villain (the industry, the misinformation, the system) responsible for the viewer's continued failure. The viewer must hear: *"the reason this hasn't worked for you is not because of you."*
4. **The Great Discovery** — the moment the speaker (or their proxy) discovers the Unique Mechanism. This is the cognitive turning point of the story.
5. **More difficulties, doubts about the solution** — the speaker did not believe it at first, or it didn't work immediately. This beat dismantles skepticism by embodying it.
6. **Surprising personal results** — the speaker (or their proxy) experienced transformation. Specifics, not generalities.
7. **Shared results** — others who tried the mechanism also got results. This is the multi-witness beat.
8. **"And now I want to share it with you"** — the speaker's motivation for creating the offer is moral or generous, not commercial. *"I couldn't keep this to myself."*

The Hero's Journey beats are not rigid — adapt freely based on the brief, the story material in `brands/<brand>/transcripts/`, and the runtime budget. But the **arc** (empathy → fall → enemy → discovery → doubt → personal proof → shared proof → giving) is the canonical shape.

VSL-specific delivery notes:
- The story is **spoken**, not narrated in literary register — keep sentence lengths short, drop subordinate clauses, deliver one beat per slide
- Specific sensory and emotional detail is non-negotiable — "I was depressed" is dead; "I sat in my car at 2am, staring at the steering wheel" is alive
- The voice of the speaker should be vulnerable, not heroic — even when the story arc ends in triumph, the texture of the telling is open and unguarded
- Each beat takes 1-3 minutes in long-model VSLs; the story section as a whole occupies 6-12 minutes of a 30-minute script

### 5.5 — Problem identification + agitation

Apply the craft from [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md). The marketing thesis specialist owns the universal craft of articulating the problem, the mechanism behind it, and the agitation that makes it intolerable.

VSL-specific tuning:

- The problem statement appears immediately after the opening (or sometimes inside it), spoken directly to the viewer: *"You're tired of [X]?"* / *"If you've spent years trying [Y] without results..."*
- Agitation is delivered through **specific, sensory examples**, not abstractions. "Being overweight was destroying my life" is weak; "I couldn't look people in the eye at work without feeling that wave of shame" is strong.
- Statistics and external authority can support the agitation but never replace the personal/sensory frame
- The agitation phase is short (1-3 minutes in long model, seconds in shorter formats) — long agitation tips into wallowing, and the viewer disengages
- Pair every agitation beat with a forward pull: agitation is the prelude to hope, never the destination

### 5.6 — Solution + Unique Mechanism reveal

Apply the craft from [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md). The marketing thesis specialist owns the seven reveal styles for naming the Unique Mechanism, and the framework for destroying alternative solutions by mechanism.

VSL-specific tuning:

- The solution reveal is the **emotional pivot** of the script — from negative emotional load to hope. Voice modulation matters here; the speaker shifts to a different register.
- The Unique Mechanism is named in a single declarative beat — usually 1-2 slides — with a proprietary or proprietary-feeling word. See [naming](core/strategic-frameworks/naming.md) for naming conventions.
- The solution is **separated from the product reveal**. First the speaker reveals the mechanism (what the viewer has been missing); then, later, the speaker introduces the product as the embodiment of that mechanism. Collapsing these two beats into one weakens both.
- Cause-mechanism vs. solution-mechanism — the script often names **two mechanisms**: first the cause of the problem (why nothing else has worked), then the solution mechanism (how the speaker's approach addresses that cause). This double-mechanism structure works particularly well in Problem Aware long-model VSLs.

### 5.7 — Proof argumentation

This is the **single most load-bearing section of any medium or long model VSL**. Apply the craft from [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — the marketing thesis specialist's framework for proving every claim flows through this section.

VSL-specific tuning — the script must prove every claim it makes. The strongest performers deploy **eight modes of proof**, often combining several within the same section:

1. **Testimonials** — both from people who tried the same approach (anchoring the idea) and from people who used the specific product (anchoring the brand)
2. **Personal experience** — the speaker's own story, delivered as proof of the mechanism through lived application
3. **Scientific studies / evidence** — peer-reviewed research, clinical trials, published papers. Specific citations carry more weight than generic "studies show"
4. **Case studies of large organizations or public figures** — if [category leader] uses this approach, the credibility transfers. Specific organizations or figures known to the audience carry more weight than generic "successful brands"
5. **Popular knowledge** — claims that are credible at face value because they exist in the cultural common ground ("absence makes the heart grow fonder") — used to anchor a broader argument
6. **Gradualization** — "if A is true, then B must also be true." Logical chains where the first step is unquestionable, allowing the second (which is the actual claim) to inherit credibility
7. **Famous person proof** — when no direct product testimonials exist yet, but a recognized figure has publicly demonstrated the relevant result through the same approach — this becomes a quasi-testimonial
8. **"Test it yourself"** — give the viewer something to do *during the script* that produces an immediate small result, proving the broader claim. Extremely powerful when the offer supports it.

The proof section in a medium model VSL might occupy 3-5 minutes; in a long model, 5-10 minutes. It is **not** stacked at the end as a testimonial ghetto — proof is integrated alongside each claim throughout the script. See [proof-elements](core/strategic-frameworks/proof-elements.md) for the typology of proof beyond these eight VSL-tuned modes.

### 5.8 — Bullets

Apply the craft from [bullet-point-specialist](section-specialists/bullet-point-specialist.md).

VSL-specific tuning:

- Bullets are **spoken bullets** — they must sound natural when read aloud, not like a written checklist
- Each bullet is delivered with the cadence of conversation — short, beat-by-beat, with the trailing ellipsis at the end of most lines
- The visual layer can show each bullet as it's spoken (one bullet per slide is common) or compress into a list slide while the voice walks through
- Bullets appear after the product reveal, framed as *"here's what you'll get..."* or *"here's what the system includes..."* or *"in the next X minutes I'll show you..."*
- Bullet count: there is no fixed range — the count is whatever genuinely belongs. End with *"and much more..."* only if the truncation is real and the unmentioned items genuinely exist
- The strongest VSL bullets are **explosive benefit declarations** — each one a mini-pitch for the product that drags the viewer toward the buying decision

### 5.9 — Offer block

Apply the craft from [offer-specialist](section-specialists/offer-specialist.md). The offer specialist owns: product reveal, price reveal (with price destruction / value stack / anchor patterns), bonus stack, guarantee, final future pacing, close, CTA copy, 3 P.S. system, Crossroad Close.

VSL-specific tuning:

- **Product reveal is spoken and visually distinct** — the moment the script transitions from marketing to selling. A new slide style, a different background, a new visual treatment signals to the viewer that the offer has arrived. Voice modulation shifts to "now I'm telling you what this is and what it costs."
- **Price reveal happens out loud.** The speaker says the number. The slide displays it. Most strong VSLs reveal a high anchor first ("the full price is X"), then drop to the actual offer ("but today, you can get it for Y"). The reason-why for the drop is delivered immediately ("because [reason]"), never naked.
- **Guarantee is delivered in voice, not just shown.** The speaker explains the guarantee, lingers on the duration, and articulates the conditions (or lack of conditions) clearly. A guarantee that the viewer doesn't hear is a guarantee they don't trust.
- **Final future pacing is multi-scene and sensory** — the speaker walks the viewer through specific moments of post-transformation life. Not generic ("you'll feel better") but specific ("you'll wake up at 6am, you'll feel that clarity in your head before your feet hit the floor, you'll look in the mirror and..."). This beat occupies 1-3 minutes in long models.
- **Mobile-first slide construction.** Each slide of the offer block must be readable on a phone screen — number, bonus list, guarantee badge, CTA copy all sized for the smallest viewport.
- **The offer block does NOT begin until the marketing 75% has done its work.** Pulling the offer forward shortens the script's runtime but collapses the conviction needed to convert. See §4.3.

The next subsection (§5.10) covers the VSL-specific **sequence** of CTAs and closes that follow the offer block — this sequencing is architectural and lives in this specialist, while the craft of each individual CTA / close lives in the offer specialist.

### 5.10 — CTA and close sequencing (VSL-specific architecture)

The **sequence and number** of CTAs / closes is a VSL-specific architectural decision tied to the chosen compositional pattern (§7). The **craft** of each individual CTA, close, P.S. or Crossroad Close lives in [offer-specialist](section-specialists/offer-specialist.md).

VSL-specific sequencing by compositional pattern:

#### Medium model (12-24 min) — three CTAs by emotional register

The medium-model script deploys **three distinct CTAs**, each pitched to a different emotional register:

- **CTA #1 — Emotion / Desire.** Delivered right after the price reveal. Frames the offer in terms of the result the viewer wants. Voice modulation: warm, forward-pulling. *"Click the button below and you'll start [emotional benefit] within minutes..."*
- **CTA #2 — Logic.** Delivered after the guarantee. Frames the offer in terms of risk-free rationality. Voice modulation: calm, reasoned. Aimed at the rational decision-maker side of the brain. *"You have nothing to lose, and here's why..."*
- **CTA #3 — Fear.** Delivered after the urgency / warning beat. Frames the offer in terms of the cost of inaction. Voice modulation: urgent, direct. *"Click below now if you don't want to risk..."*

Each CTA is voiced and visually distinct. The button copy may vary slightly across the three (different benefit framings) but the destination is the same.

#### Long model (24-48 min) — four closes by emotional architecture

The long-model script deploys **four distinct closes**, each playing a different role in the buying decision architecture:

- **Close #1 — Desire.** Right after the price destruction. Focuses on the desire the script has built throughout. *"If you've watched this far, it means you want this. Here's what to do next..."*
- **Close #2 — Logic.** After the guarantee. The justification phase — for the left-brain decision-maker. Restates the no-risk frame, restates the math, restates the credibility.
- **Close #3 — Crossroad.** The two-roads close. The viewer has exactly two choices: take action now, or stay in the situation they were in before this video started. The script paints both futures vividly. The buying decision is framed as an IQ test — staying in the old situation must feel obviously inferior. See [offer-specialist](section-specialists/offer-specialist.md) for the Crossroad Close craft.
- **Close #4 — Fear.** The final urgency push. The negative consequences of not acting. Voice modulation: direct, slightly aggressive, no hedging. *"This is your last chance. Click below now."*

In both medium and long models, the closes are interleaved with the guarantee, the bonus stack, and the urgency beats — see §7.5 and §7.6 for the full sequence.

#### Short formats (story ad / video ad / radio-style / short model)

- Story ad / video ad — single CTA at the end (sometimes with a duplicate restatement)
- Radio-style ad — three CTA repetitions interleaved with offer / urgency beats (per the 12-step radio structure, §7.3)
- Short model — typically two CTAs (one early after the solution reveal, one final after the objection handler)

### 5.11 — FAQ / Final social proof

Apply the craft from [faq-specialist](section-specialists/faq-specialist.md).

VSL-specific tuning:

- Placed at the very end of medium and long model VSLs, after the final close
- Absent in story ads, video ads, and radio-style ads (no runtime budget)
- Format: spoken Q&A, with each question shown on a slide as the speaker reads or paraphrases it, then the answer delivered in 30-60 seconds of voice
- 3-5 questions is typical; each addresses a specific remaining objection
- Each answer ends with a soft re-point to the CTA — *"...and that's why you can click the button below with confidence"*
- A FAQ can be combined with a final round of testimonials shown rapidly on screen, with voice-over narration walking through the proof — this hybrid (FAQ + testimonial montage + final CTA) is the canonical long-model ending

### 5.12 — Outro

The closing seconds of the script — typically the last 5-15 seconds.

Components:
- A final voice line restating the offer in one sentence
- A final restatement of the CTA — direct, imperative, unambiguous
- Music sting or sound effect (production-layer, but the script anchors the cue)
- The final visual: CTA button, offer summary, urgency reminder

The outro is short by design. A long, summarizing outro dilutes the close. The script should end with the CTA echoing in the viewer's head, not with a recap.

---

## 6. Format-specific conventions

These are the conventions that make a script read like a VSL, not like a sales letter someone happened to film. They live in the visual layer, the voice layer, and the technical configuration of the player.

### 6.1 — The six visual types of VSL (selection by budget, content, target)

The script's content is largely format-agnostic — the same long-model body structure can be delivered through any of the six visual types below. The choice of visual type determines production cost, faces-on-camera requirements, and the perceived register of the piece.

| Type | When to use |
|---|---|
| **Text-on-screen** (slides only, voiced over) | Product/service not visually demonstrable, low budget, the speaker is uncomfortable on camera, you're porting a working written sales letter to video as a first test |
| **Doodle / illustrated** (hand-drawing animation) | Short explanatory videos, intro of an otherwise text-on-screen VSL (the doodle as the pattern interrupt), optimization layer over a working text VSL, no face available in the company |
| **Talking head / close-up** | A face represents the company well, an existing customer or brand ambassador can speak credibly, a recognized industry figure or celebrity is available, or you want to maximize empathy/intimacy with the viewer in the opening minutes |
| **Live action** | Goal is virality, the product is visually demonstrable in an entertaining way, high production budget, you can deliver a cinematic or comedic mini-film around the product |
| **Webinar** | High-ticket product, you're testing a new angle, live launches where empathy and authenticity matter, you want to mask the sales message inside content-feeling delivery |
| **Faux-interview** (interview-style production) | High production budget, a recognized industry figure or celebrity is available in the niche, financial or premium markets where the interview format carries credibility |

For all types except text-on-screen, captions/subtitles are mandatory (see §6.6). For text-on-screen, subtitles are redundant — the script is already on screen.

### 6.2 — VSL vs. sales letter — the differential conventions

The conventions below apply to every VSL across every duration. They differentiate the format from written copy and from naive video execution. Many are summarized in §4.7 but they live here as operational rules.

**Short sentences, especially at the opening.** Long sentences with multiple clauses break the spoken rhythm. The first minute of any VSL should average fewer words per sentence than the body.

**One thought per slide (90% rule).** Roughly 90% of slides in a text-on-screen VSL carry a single short sentence. Slides packed with text cause the viewer to read ahead of the voice, breaking sync. The exceptions: the offer summary slide, the bullet list slide, and a few specific recap slides — these can carry more content but are deliberately positioned.

**Ellipses end ~99% of sentences.** "..." instead of "." creates a micro open-loop at the end of every beat — *more is coming, keep listening*. Periods cut the flow. The ellipsis becomes part of the script's signature rhythm. Precedence note: `brands/<brand>/brand-copy-rules.md` can override this convention — if the brand bans trailing ellipses, the brand rule wins.

**Natural spoken transitions instead of abrupt sub-headlines.** A written sales letter uses H2 sub-headlines to mark section breaks. A VSL replaces those with **spoken bridges**: *"however..."*, *"and here's where it gets interesting..."*, *"now let's see what happens when..."*, *"but here's the part nobody talks about..."*. Without these bridges, the script reads as a series of disconnected slides, not as a conversation.

**Bullets must be spoken naturally.** Bullets in a VSL are delivered as part of the spoken flow, not as a checklist read mechanically. Each bullet should sound natural when read aloud — if it reads as written copy, rewrite.

**Red bold for emotionally charged words.** Roughly every two or three slides, words with high emotional charge are bolded in red (or otherwise visually emphasized). Black bold for medium-emotional carriers. The voice modulates on these words — added stress, slight tempo change, vocal warmth or sharpness depending on the emotion. Slides without any visual emphasis read as monotone and viewers disengage.

**Voice register: speaking to your closest friend.** Not formal. Not perfectly polished. The speaker imagines they're trying to sell to (or warn) someone they care about. Mild imperfections — a stumble, a self-correction, a moment of unguarded warmth — increase authenticity. Too many imperfections push the piece toward amateurish; calibrate.

**Stand while recording.** Vocal energy roughly doubles when the speaker is standing versus seated. Gesturing while speaking further amplifies the energy in the voice — even when the camera is on the face only, the gesture transfers to vocal dynamics.

**Never read testimonials in full.** If a slide carries a multi-line testimonial, the speaker paraphrases or reads only the most striking line. Reading the full testimonial out loud causes the audio-visual sync break and the viewer skips ahead in the on-screen text. The alternative — and often a stronger move — is to **show testimonials rapidly on screen** while the speaker delivers a voice-over walking through the broader proof claim, with the testimonials as visual reinforcement.

**The audio and visual must stay in sync within the slide.** A slide with three lines and a voice that has only delivered the first line creates a sync break — the viewer reads ahead and the script loses its grip. One thought per slide, one beat per slide, voice and visual aligned beat-for-beat.

### 6.3 — Pattern interrupt — the nine canonical visual families

The pattern interrupt is the VSL's hook (see §5.1 — delegated to [hook-specialist](section-specialists/hook-specialist.md) for universal craft). At the visual level, pattern interrupts cluster into nine recurring families. These are not mutually exclusive — strong openings often mix two or three.

| # | Family | What it does visually |
|---|---|---|
| 1 | **Image** | An unexpected image that seems unrelated to the product, creating immediate cognitive friction (*"what is this?"*). The connection to the body is revealed within the first 30-60 seconds. |
| 2 | **Warning** | A "warning" slide, often with a deep voice-over reading the word, in the style of a movie trailer. Simple, effective, very low production cost. |
| 3 | **Countdown** | A literal counter — 5 to 1 (for full VSLs), 3 to 1 (for shorter video ads). Often combined with a sound or music cue. Variant: a loading bar from 0 to 100%. |
| 4 | **Animation interrupt** | Animated doodle (a hand drawing on a board), puppet characters, or cartoon-style animation in the opening minutes. The animation is not the whole video — only the first 2-3 minutes, as the interrupt. |
| 5 | **Live video** | A talking-head shot of the speaker for the first minutes, with subtitles, before transitioning to slides. Variant: an interview clip (the speaker as guest on another show). Creates intimacy and authority. |
| 6 | **Proof** | Open with testimonials, with results footage (someone demonstrating the outcome), or with a dramatic demonstration of the product. Particularly strong when the product result is visually striking. |
| 7 | **Shock** | A situation the viewer absolutely does not expect — an irreverent character delivering an outrageous line, a scene that breaks social conventions, a juxtaposition that surprises. Common in high-virality short and medium models. |
| 8 | **Entertainment / desirable results** | Opening with footage of the desired outcome being lived (fitness transformations, lifestyle results, dramatic before/after) — content the target audience already consumes voluntarily on other platforms. The entertainment value carries the viewer in. |
| 9 | **Mix** | Combine two or more of the above. Entertainment + proof (people enjoying the result, with results-claim layered over). Desirable results + shock (the perfect outcome, then a twist). Animation + warning. Mixes compound the surprise and the persuasion. |

Application discipline: the pattern interrupt is **mandatory in every VSL**. The choice of family follows from the awareness, the production budget, and the brand voice. The first family that comes to mind is rarely the strongest — sketch two or three options and stress-test them against the brief's avatar.

*(§6.4 — Video player technical configuration — has moved to the production appendix at the end of this section, together with §6.12 and §6.13. All "§6.4" references in this file resolve there.)*

### 6.5 — CTA button delay (the two-version setup)

A canonical optimization: produce **two versions** of the VSL landing page, identical except for the CTA button behavior.

- **Version A — with delay.** The CTA button is hidden for the first 20-30 minutes (long model) or 5-10 minutes (medium model) — appearing only at the moment the script says *"click the button below to..."*. This is the version shown to **first-time visitors** — the goal is forced linear consumption.
- **Version B — without delay.** The CTA button is visible from the start, and the video player exposes controls (playbar enabled) so the viewer can navigate. This is the version shown to **return visitors** (detected via cookie, or arriving from a follow-up email autoresponder) — they've already been through the marketing and just need a path to buy.

The two-version setup respects the visitor's state. New visitors get the persuasion-led linear experience. Returning visitors get the buy-now utility experience. Without the second version, the brand frustrates qualified return traffic.

### 6.6 — Subtitles / captions are mandatory

For every visual VSL type **except text-on-screen** (where the script is already on screen), captions are mandatory.

Reasons:
- A large fraction of social-platform video traffic starts with muted autoplay — without captions, the first seconds are silent
- Mobile viewers often watch in environments where audio is impossible or socially inappropriate
- Captions allow the viewer to follow the script even when momentary attention drift breaks audio comprehension
- Captions improve perceived production quality

Caption styling: large enough to read on mobile, high contrast, positioned at the bottom of the frame or beneath the speaker's chin. For story ads and video ads on vertical-feed platforms, captions occupy a larger share of the screen and should be styled accordingly.

### 6.7 — Aspect ratio: 4:5 mobile, 16:9 desktop

Most VSL traffic now comes from mobile. Format the video accordingly:

- **4:5 aspect ratio** for mobile-first delivery (vertical-leaning rectangle) — feels native on mobile feeds, plays well in mobile browsers
- **16:9** for desktop delivery (traditional widescreen) — the standard for desktop video players

In landing-page contexts where both desktop and mobile traffic flows to the same page, 4:5 is the safer default because the mobile experience is the dominant one. The desktop experience tolerates 4:5; the mobile experience does not tolerate 16:9 as gracefully (letterboxing wastes vertical real estate).

### 6.8 — Forward-loop visual layers (banner + countdown timer)

Two visual techniques that hold the viewer through the marketing 75% without breaking the spoken flow:

- **Banner with "what you'll discover next"** — a small visual element (often top-right or bottom of frame) that previews what's coming in the script. *"Coming up: the 3 ingredients that..."*. This is a visual open-loop that runs parallel to the spoken open-loop.
- **Countdown timer to a reveal moment** — a visible countdown timer (often top-right) ticking toward the moment the script says *"and here it is..."*. The timer creates anticipation that compounds the script's verbal anticipation.

Both techniques exploit the same psychology — the viewer's brain locks onto an impending resolution and stays through whatever delivers it.

### 6.9 — Mini sales letter beneath the video player

A canonical landing-page-level optimization: **beneath the embedded video player, deploy a condensed written sales letter** that mirrors the script's offer.

Components, in approximate order:
- CTA button (the same one that appears in the video at the right moment)
- Testimonials block
- Another CTA
- "Why this is different" section (the Unique Mechanism in written form)
- Another CTA
- Table of contents / bullet list (what's inside the product)
- Another CTA
- More testimonials
- Another CTA
- Bonuses
- CTA
- Guarantee
- CTA
- Product image
- Final CTA

The mini sales letter serves two functions: (1) it provides a buying path for viewers who close the video early but are still on the page, (2) it serves as the surface for return visitors and for users who scrolled past the video.

The mini sales letter is the responsibility of the [lp-specialist](format-specialists/lp-specialist.md) — the vsl-and-video-ad-specialist coordinates with the LP specialist on which beats from the script translate to the written version.

### 6.10 — Transcript + exit intent

Two recovery mechanisms for viewers who don't want to watch:

- **Transcript link** — a small link beneath the video player (*"prefer to read? click here"*) opens the full written transcript of the script on a separate page. The transcript becomes a long-form sales letter in its own right.
- **Exit intent popup** — when the visitor moves the cursor to close the page, a popup appears offering the transcript or capturing an email for follow-up. The exit intent triggers must respect platform rules (don't prevent the user from leaving — only offer one final alternative).

Both mechanisms are optional but standard for medium and long model VSL landing pages.

### 6.11 — Drop-point management

Once the VSL is live and collecting analytics, monitor the **drop-off curve** — at what timestamps do viewers leave the video?

Expected drops:
- A 50%+ drop in the first 10-15 seconds (the cold viewer who didn't connect with the pattern interrupt)
- A drop at the moment of the price reveal (some viewers leave the moment they hear the number)

Unexpected drops — moments in the body where viewer count falls sharply without an obvious reason — signal a weak section. The script has lost the viewer at that point.

The optimization lever: **insert a brief on-screen comment at the drop point** that re-anchors the viewer. *"In 60 seconds, you'll see the special offer..."* or *"Stay with me — what's coming next changes everything."* These on-screen interjections reduce drop-offs and increase total watch time.

Identifying drop points requires player-level analytics; the script-level fix is the rewrite of the section preceding the drop or the insertion of the on-screen comment.

### Appendix — production reference (consult on demand, not at writing time)

> The three subsections below (§6.4 player configuration, §6.12 post-production adjustments, §6.13 production workflow) are technical/production reference. They are NOT consulted while writing the script — open them when configuring the player, finalizing the recording, or planning production.

#### 6.4 — Video player technical configuration

The player setup matters because it controls what the viewer can and cannot do during the script. The goal is to **maximize forced linear consumption** while respecting platform constraints.

Required configuration for any sales VSL:

- **Autoplay enabled, muted on start** — the video begins as soon as the page loads, without sound. The viewer unmutes deliberately. This survives browser policies that block autoplay-with-sound.
- **Big play button + small play button enabled** — visible controls to start/restart, but no playback scrubbing
- **Playbar disabled** — the viewer cannot drag forward or backward through the video. This is the single most important player-level lever for forced linear consumption.
- **Speed control disabled** — the viewer cannot speed up the script
- **Volume control optional** — usually enabled (so the viewer can adjust audio comfort)
- **Fullscreen disabled** — fullscreen mode on mobile often lets the viewer skip; disabling it keeps them on the page where the CTA button can appear
- **Settings/gear menu disabled** — no surface area for unwanted user behavior

For mobile-specific setups, additional rules:
- The video player must be sized to the **4:5 aspect ratio** (see §6.7) for vertical-first mobile rendering
- The CTA button below the player should be visible without scrolling once it appears (see §6.5)

Choice of video hosting platform is a budget/feature decision. The required functional capabilities: autoplay-muted, no playbar, no fullscreen, no speed control, ability to overlay clickable elements on the video, and ideally heat-map / drop-off analytics. Any platform that delivers these capabilities works; pick the one that fits the brand's volume and budget.

#### 6.12 — Speed +5-10%, silence trimming, volume -20%

Three post-recording adjustments that materially improve completion:

- **Speed up the video by 5-10%.** Most viewers find slow-paced narration tedious. A small speed increase compresses the runtime without becoming noticeably fast. Use a video editor that adjusts speed *without distorting audio pitch* — many consumer editors warp the voice at any speed change.
- **Trim the silences.** Even a well-recorded script has small gaps between sentences that aggregate to dead time. An audio editor with a silence-truncation function strips these. The result feels tighter and more confident.
- **Reduce the audio volume by ~20%.** Counterintuitively, slightly lower volume causes viewers to lean in — they turn up their device, move closer to the screen, and engage more attentively. Audio that hits the viewer too loudly on autoplay causes an instinctive close-the-tab reaction.

#### 6.13 — Production workflow

A working sequence for producing a VSL from script to upload:

1. **Draft the script in a plain-text editor**, not directly in a slide deck — write the full script as continuous text first
2. **Move the script into the slide deck** by pasting each line or beat as one slide (deck software allows direct outline-paste that creates one slide per line)
3. **Adjust the master slide** — set the title font, size, and layout once on the master, so all slides inherit the same visual identity
4. **Add formatting and visual elements** — red bold for emotional carriers, image placements, design notes
5. **Record the screen** with screen-recording software, voicing the script over the slides as they advance

Alternative workflow (higher production quality):

4b. **Record audio only** (without slides on screen) — the speaker reads from the script and delivers a clean audio track. Recording audio-only often yields better vocal performance because the speaker reads ahead and knows the tone for each upcoming line.
5b. **Trim silences in the audio** (as in §6.12)
6b. **Export slides as static images** from the deck software
7b. **Manually sync audio and slide images** in a video editor — bring in the audio track, then place each slide image at the timestamp where the corresponding line is spoken
8b. **Trim, speed-adjust, and export** the final video
9b. **Compress the video file** (using a compression tool) — file size drops dramatically with no perceptible quality loss, critical for mobile loading speeds
10b. **Upload to the chosen video hosting platform** with the configuration in §6.4

The choice between the simpler workflow (1-5) and the more precise one (1-3 + 4b-10b) depends on the production budget and the brand's quality bar.

---

## 7. Compositional patterns — the six structural models by duration

> **What this is**: six canonical structural models for VSLs, mapped to duration ranges. Each model is a sequence of beats that has been validated across many pieces and many markets at that duration.
>
> **How to use it**: the brief specifies the duration target. The vsl-and-video-ad-specialist selects (or follows the brief's selection of) the model that matches that duration. The model is a backbone — adapt freely based on the brief's awareness, sophistication, chain of beliefs, and offer specifics.
>
> **Application discipline**: even the strongest practitioners apply each model at roughly 95% adherence — adapting, reordering, or merging beats based on the specific piece. The model is a backbone, not a checklist.

### 7.1 — Story ad (12-15 seconds)

The shortest VSL format — a single mobile/feed-native creative, often deployed on ephemeral 24-hour formats. The entire creative is consumed in one or two breaths of attention.

**Structure**:

| # | Beat | Duration |
|---|---|---|
| 1 | Pattern interrupt — grab attention | 2-3 sec |
| 2 | Proof — ideally social proof / what many others are doing | 2-3 sec |
| 3 | Benefits / pain — the upside or the downside | ~5 sec |
| 4 | CTA — what to do | ~5 sec |

Execution notes:
- Add comedic or entertainment beats — relevant footage that the target audience already consumes voluntarily
- Make it feel **organic**, not like a polished ad — selfie-style smartphone footage outperforms professional-looking production at this length
- Captions occupy a significant share of the screen
- Single CTA at the end (sometimes with a brief restatement in the final frame)

Use case: top-of-funnel mobile-feed traffic where attention windows are sub-15-seconds. Often serves as a click-out to a landing page hosting a longer VSL.

### 7.2 — Video ad (30-120 seconds)

The dominant format for video advertising on social feeds — long enough to deliver a complete micro-pitch, short enough to fit autoplay-muted feed consumption.

**Structure**:

| # | Beat | Function |
|---|---|---|
| 1 | Pattern interrupt | Use intriguing questions, high-impact sequences, or anything unexpected to grab attention |
| 2 | Hook | What will you reveal? What is the unique, irresistible angle? |
| 3 | USP | Specify how what you offer is different from everything else |
| 4 | Free offer | What are you offering for free? (lead magnet, free training, free shipping, free guide) |
| 5 | CTA | Invite to action |

Execution notes:
- Pattern interrupt and hook often blend — the surprising opening *is* the hook
- The free offer is the conversion event (lead capture or low-friction click-through), not the paid product
- Captions throughout; sound is often off during consumption
- One CTA, single destination, calibrated to the ad platform's conversion event

Use case: cold and lukewarm traffic on the dominant social ad platforms. Typically the entry point into a funnel — the click leads to the next touchpoint (long-form VSL, sales page, webinar registration).

### 7.3 — Radio-style ad (60-170 seconds)

A longer ad format that follows the historical structure of the radio advertisement adapted to video. Twelve canonical beats compressed into 1-3 minutes.

**Structure** (12 steps):

| # | Beat | Function |
|---|---|---|
| 1 | Opening | Grab attention or curiosity and give a reason to keep watching (could be the free offer) |
| 2 | Questions | One or two questions to stimulate interest and/or explore pain points |
| 3 | Credibility | Brief presenter intro, explaining why the viewer should trust them |
| 4 | USP | Big Idea / promise |
| 5 | Testimonials | Typically three. For mixed-gender targets: male / female / male. Use emotion. Start from the problem, then resolve it. |
| 6 | Controversial statement | Stimulates interest without triggering fear |
| 7 | Free offer | Always involve them with something free |
| 8 | Urgency | Make them act now |
| 9 | Scarcity | Make it sound limited |
| 10 | CTAs | Three in total, distributed across the beats |
| 11 | Repetition | Repeat the offer and the CTA — the video should end with the CTA |
| 12 | Outro | Music, sound effects, or closing sting |

Execution notes:
- The three CTAs are interleaved through the middle and end — not stacked at the end
- The structure is dense; voice cadence is brisk
- This model works well as the second touchpoint after a story ad — slightly more space to develop the pitch

### 7.4 — Short model (~3-12 minutes)

The "viral-leaning" or "category-disruption" model. Often cinematic in production, frequently combining strong entertainment value with the persuasion architecture.

**Structure** (eight movements):

| # | Movement | Function |
|---|---|---|
| 1 | Hook | Strong pattern interrupt — often comedic, often visually shocking |
| 2 | Problem | Demonstrate the problem in a tangible, often humorous way |
| 3 | Solution | The product as the answer |
| 4 | Overcome doubts | Address the major objection that immediately arises (often the unspoken "this looks ridiculous") |
| 5 | CTA | First call to action |
| 6 | Credibility | Authority / proof / trust signals |
| 7 | CTA II | Second call to action |
| 8 | Outro | Closing visual and audio sting |

Execution notes:
- Doubts can be placed before or after the first CTA — when the doubt is enormous (the product looks strange, the price is high, the claim is provocative) it often sits before the CTA so the viewer's hesitation is addressed first
- The piece often relies on visual demonstration of the product — works best when the product is dramatically demonstrable
- Production budget is higher than other models — actors, scripted scenes, cinematography
- The CTA-driven structure means buyers either decide quickly or not at all; the model is poor for high-ticket but exceptional for mid-ticket and consumer goods

### 7.5 — Medium model (12-24 minutes) — the 13-step body

The dominant medium-duration direct-response VSL structure. Thirteen canonical beats, each occupying 30 seconds to 3 minutes depending on the piece's total runtime.

**Structure** (13 steps):

| # | Step | Function |
|---|---|---|
| 1 | Catch attention | Apply a pattern interrupt model — proof, story, question, promise, or a combination |
| 2 | Identify the problem | What is the problem you solve? Speak about it immediately to hook the prospect |
| 3 | Agitate it | With facts, examples, non-obvious consequences. Twist the knife. |
| 4 | Present the solution | Introduce the cause-mechanism (why nothing else has worked) and the solution-mechanism (how your approach addresses that cause) |
| 5 | Introduce your product | The logical consequence of the solution. The product as the embodiment of the mechanism. |
| 6 | Establish authority | Why should they listen to you? Why should this be true? Proof, facts, endorsements. |
| 7 | Explain how it works | The bullets section. The functional list of what's inside / how the product delivers. |
| 8 | Make the offer — CTA #1: Emotion / Desire | Reveal price, invite to buy framed around emotional benefit |
| 9 | Guarantee | Tell them why they have no risk |
| 10 | Re-offer — CTA #2: Logic | Explain logically why they need to act now. For the rational decision-maker. |
| 11 | Warning | Add scarcity or remind them of the cost of doing nothing |
| 12 | Final offer — CTA #3: Fear | Last urgency push, frame around the cost of inaction |
| 13 | Social proof / FAQ | Close with rapid testimonials, FAQ, objection handling |

Execution notes by step:

- **Step 1**: see §5.1 and §6.3 — pattern interrupt families
- **Step 3 (agitation)**: use specific statistics, concrete personal examples, dollar/time/relationship costs of inaction
- **Step 4 (solution)**: the **cause-mechanism** and **solution-mechanism** are two distinct claims, even when they share the same Unique Mechanism naming. Separate them clearly.
- **Step 5 (product reveal)**: this is the moment the script transitions from marketing to selling. New visual style, new voice register.
- **Step 8-12 (offer + CTAs)**: see §5.10 for the architectural sequencing — the three CTAs are pitched to Emotion, Logic, Fear in that order, interleaved with guarantee and warning
- **Step 13 (close)**: spoken FAQ + rapid testimonial montage; end on the CTA echo

Use case: Problem Aware and Solution Aware audiences. Information products, health, finance, productivity, lifestyle. The default direct-response medium-duration model.

### 7.6 — Long model (24-48 minutes) — the 16-step canonical body

The most common high-performing long-form sales VSL structure. Sixteen steps, with the Hero's Journey (§5.4) embedded inside as the story spine.

**Structure** (16 steps):

| # | Step | Function |
|---|---|---|
| 1 | Intro — grab attention | Big Benefit, story, or Shocking Statement opening (see §5.3) |
| 2 | Empathize with their problem | *"I'm exactly like you"*, *"I understand"* |
| 3 | Big Promise to solve it | Vivid, dimensionalized, future-paced |
| 4 | Tell your story | The Hero's Journey, eight beats (see §5.4) |
| 5 | Teach them to be your client | Reveal cause-mechanism + solution-mechanism. Prove every claim using the eight modes of proof (§5.7). |
| 6 | Present your product as the only logical solution | The embodiment of the mechanism |
| 7 | Present the product's benefits | The bullets section — spoken bullets, every benefit dimensionalized |
| 8 | Reveal full price, justify, then lower it | High anchor → reason-why → offer price |
| 9 | Close #1 — Desire | Focus on the desire built through the script. Vivid future picture. |
| 10 | Remove risk / guarantee | Strong guarantee, ideally combining unconditional base + conditional sweetener |
| 11 | Close #2 — Logic | For the rational decision-maker. Logic justifies what emotion has chosen. |
| 12 | Strategic bonuses | Bonus stack — see [offer-specialist](section-specialists/offer-specialist.md) for the canonical bonus typology |
| 13 | Why they must buy NOW | Urgency + scarcity, the cost of waiting |
| 14 | Close #3 — Crossroad | Two paths. The IQ-test framing. See [offer-specialist](section-specialists/offer-specialist.md) for the Crossroad Close craft. |
| 15 | Close #4 — Fear | Final push. The cost of inaction. Direct, urgent, no hedging. |
| 16 | FAQ / testimonials / objection handling | Final beat — handle remaining objections, deliver final testimonial montage, surprise bonus optional |

Execution notes by step:

- **Step 4 (story)**: this is where the runtime budget lives — 6-12 minutes of well-paced storytelling. The story sits between the promise (step 3) and the teaching (step 5).
- **Step 5 (teach them)**: the **single most load-bearing section** of the long-model VSL. The script proves every claim using the eight modes of proof (§5.7). When this section is strong, the closing steps almost write themselves. When it's weak, no amount of close-stacking saves the piece.
- **Step 8 (price reveal)**: full price → reason-why → drop to offer price → reason-why for the drop. The price is **never naked** — every number sits inside a justification.
- **Step 10 (guarantee)**: always use an unconditional guarantee as the base, optionally add a conditional sweetener on top (*"and if you follow the system and don't get results, I'll work with you personally until you do"*).
- **Steps 9, 11, 14, 15 (four closes)**: see §5.10 for the architectural sequencing. Each close has a distinct emotional register and a distinct role in the buying decision.
- **Step 16 (final beat)**: handle remaining objections, deliver final testimonial montage, optionally add a final surprise bonus at the very end as a last conviction lever.

Use case: Problem Aware audiences in long-form contexts. Health, weight loss, finance, relationships, life-transformation niches. The dominant high-converting long-form video model.

The 16-step structure should not be applied mechanically. Movements can merge, reorder, or be skipped based on the brief — but the **arc** (open → empathize → promise → story → teach → product → bullets → price → first close → guarantee → second close → bonuses → urgency → crossroad → fear → FAQ) is the backbone.

---

# PART C — Operational workflow

## 8. Selecting VSL type, length, and structural model

The brief usually specifies the duration target and (often) the structural model. When ambiguity exists, the vsl-and-video-ad-specialist makes the selection based on the criteria below and surfaces it to the copywriter for confirmation.

### 8.1 — By VSL visual type

See §6.1 for the six visual types. Selection follows from:
- **Production budget** — text-on-screen and doodle are lowest; live action and faux-interview are highest
- **Faces-on-camera availability** — talking-head requires a credible on-camera presence; text-on-screen and doodle don't
- **Product demonstrability** — live action shines when the product visually demonstrates; text-on-screen wins when it doesn't
- **Niche conventions** — financial markets often gravitate to faux-interview or webinar; consumer markets toward live action or talking-head; informational products toward text-on-screen or talking-head

### 8.2 — By length and awareness

| Awareness | Typical length range | Model |
|---|---|---|
| Most Aware | Story ad / video ad (sub-2 min) | §7.1 or §7.2 |
| Product Aware | Video ad / radio-style / short model (1-12 min) | §7.2, §7.3, or §7.4 |
| Solution Aware | Short model / medium model (3-24 min) | §7.4 or §7.5 |
| Problem Aware | Medium model / long model (12-48 min) | §7.5 or §7.6 |
| Unaware | Long model (24-48+ min) — story spine essential | §7.6 |

These are guideline ranges, not rules. The brief's specific belief count, proof inventory, and offer ticket shift the actual length. High-ticket offers and complex products push toward longer formats; low-ticket impulse offers stay short.

### 8.3 — By compositional pattern

The brief's touchpoint block (§4.2 / §4.3 of [funnel-brief](core/strategic-frameworks/funnel-brief.md)) typically specifies the model. When the brief leaves the choice open:

- If the audience is Problem Aware in a saturated market with a strong founder story → **long model** with embedded Hero's Journey
- If the audience is Solution Aware and the brand has clean cause-mechanism + solution-mechanism articulation → **medium model**
- If the product is visually demonstrable and the brand can fund cinematic production → **short model** with high entertainment value
- If the deliverable is the first ad in a cold-traffic campaign → **video ad** or **radio-style ad**
- If the deliverable is a feed-native creative on ephemeral formats → **story ad**

The selection is surfaced to the copywriter as part of the structure proposal (§10).

---

## 9. Application protocol — VSL-specific notes

The specialist applies the universal **5-phase protocol** defined in [writing-principles §2](core/writing/writing-principles.md). That protocol is the authoritative workflow — read it there, do not re-state it here.

The notes below specify what is **VSL-specific** at each phase. Treat them as supplements to the universal protocol, not replacements.

| Phase | VSL-specific notes |
|---|---|
| **Fase 1 — Pre-writing** | 0. Read [feedback-rules](core/feedback-rules.md) (global rules) + `brands/<brand>/brand-copy-rules.md` (brand rules — they override global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d). Then always read: brief §3-§4 (per §3 of this file), brand `swipe.md` (1-2 VSL examples if present), the specific testimonials/transcripts/offers referenced in the brief. **For medium/long model**: also read [writing-principles SECTION C](core/writing/writing-principles.md) and decide drafting approach (Method of Objections / Method of Assembly / Hybrid / free). **Emotional gate**: apply the two-branch rule in §3 — [emotional-intelligence](core/writing/emotional-intelligence.md) is mandatory when the brief names Emotional anchors; when it names none, consult the relevant entries anyway for the emotionally-led moments (max 3 per piece) and flag the brief gap. Decide visual type (§6.1) and structural model (§7) before writing. |
| **Fase 2 — Drafting** | **Draft as a spoken script**, not as a written sales letter that will be filmed later. Write line by line, beat by beat, with the trailing ellipsis at the end of most lines (§6.2). Keep sentences short. One thought per beat. For medium/long model: apply the drafting method chosen in Fase 1. Insert visual layer notes ([SLIDE: title], [B-ROLL: footage of...], [ON-SCREEN: caption], [VISUAL CUE: pattern interrupt countdown timer]) as you go. Note [VOICE: stress/warmth/urgent] cues at key emotional beats. |
| **Fase 3 — Principles refinement** | Universal pass per [writing-principles SECTION A](core/writing/writing-principles.md). VSL-specific watch-points: Principle 1 (One Thing) often slips when the script argues two parallel theses across the body; Principle 2 (Promise→Proof→Implication) often slips because in a VSL the proof must be **spoken alongside** the claim, not stacked at the end; Principle 6 (Conversational flow) is the principle the VSL format stress-tests hardest — the script must sound like spoken language, not written language read aloud. |
| **Fase 4 — Anti-AI pass** | Universal pass per [writing-principles SECTION B](core/writing/writing-principles.md). VSL-specific hotspots: rigid parallel triads tend to cluster in the bullets section; em-dash overuse tends to cluster in the opening and the agitation beats (em-dashes don't translate to spoken delivery — convert to ellipses or new sentences); generic transitions tend to cluster between major movements when the spoken bridges (§6.2) weren't voice-led during drafting. |
| **Fase 5 — Read-aloud + sync test** | Universal Gulpease + read-aloud per [writing-principles §3](core/writing/writing-principles.md). **The read-aloud is non-negotiable for any VSL** — read every line of the script out loud, ideally standing, ideally at the intended delivery pace. Mark every line that resists the voice (too long, awkward rhythm, unnatural phrasing). Rewrite. **Then add the VSL-specific sync test**: read the script while imagining the slide cadence (one thought per slide). If any "slide" requires the voice to deliver three sentences before the slide can advance, the slide is overloaded — split. |

---

## 10. Output formats

### Structure proposal (when planning before writing)

```
PROPOSED STRUCTURE — VSL for [Offer] in [Funnel]

VSL type: [Story ad / Video ad / Radio-style / Short / Medium / Long]
Visual type: [Text-on-screen / Doodle / Talking-head / Live action / Webinar / Faux-interview]
Duration target: [N minutes / seconds]
Compositional pattern: [§7.1 / §7.2 / §7.3 / §7.4 / §7.5 / §7.6]
Awareness: [level from brief]
Sophistication: [stage from brief]
Pattern interrupt family: [§6.3 — 1-9, or mix]
Opening mode: [Big Benefit / Worst Day / Shocking Statement / hybrid]
Story spine: [Yes — Hero's Journey embedded / No]
Reference swipe (brand or external): [name — what's adapted]

BEAT-BY-BEAT OUTLINE:

Movement 1 — PATTERN INTERRUPT (§5.1) — Installs belief: #X
  Duration: [N seconds]
  Pattern interrupt family: [from §6.3]
  Visual: [description]
  Voice line: [first spoken line draft]

Movement 2 — OPENING CONTENT (§5.3) — Installs beliefs: #X, #Y
  Opening mode: [from §5.3]
  Duration: [N minutes]
  Function: [bridges interrupt into body]
  [2-3 sentences describing function]

Movement 3 — [name] — Installs belief: #X
  Function: [...]
  [continue for all movements]

...

Movement N — OFFER BLOCK (§5.9)
  Duration: [N minutes]
  Product reveal: [draft beat]
  Price treatment: [high anchor → offer]
  Bonus stack: [items planned]
  Guarantee: [from brief — duration + type]

Movement N+1 — CLOSE SEQUENCE (§5.10)
  [for medium model: CTA #1 Emotion → CTA #2 Logic → CTA #3 Fear]
  [for long model: Close #1 Desire → guarantee → Close #2 Logic → bonuses → urgency → Close #3 Crossroad → Close #4 Fear]
  Button copy variants: [list]

Movement N+2 — FAQ / FINAL CTA (§5.11)
  Questions: [list of 3-5]
  Final beat: [closing CTA echo]

Belief coverage check: [belief # → movement where installed]
Objection coverage check: [objection → movement where resolved]
Proof distribution: [testimonial / data → movement]
DHD re-anchor points: [movements N, N+M where problem/promise is re-stated]
  (DHD = Deficit of Attention: the viewer is distracted and half-watching, so the
  piece must re-anchor problem/promise every 2-3 movements — full principle in
  [lp-specialist](format-specialists/lp-specialist.md) §4.4)
```

### Writing execution (per movement, after structure approved)

```
---
## MOVEMENT [N]: [NAME]
## Installs beliefs: #X, #Y
## Estimated duration: [N seconds / minutes]

[VOICE: register — warm / urgent / vulnerable / calm]
[SLIDE TITLE: text on slide]

[Spoken script — short sentences, trailing ellipses, one thought per beat]

[VISUAL CUE: what happens visually at this beat]
[B-ROLL: footage description, if applicable]
[ON-SCREEN: any text overlay during this beat]

[CTA BUTTON: "exact button copy"] (if applicable)
---
```

### Writing sequence within Fase 2

1. Draft the full script as a continuous spoken text, beat by beat
2. Insert visual cues, slide titles, B-roll directions, and on-screen text overlays
3. Mark voice modulation cues at key emotional beats
4. Identify and label each major movement (pattern interrupt, opening, problem, story, etc.)
5. Verify the close sequence (per the chosen model — §5.10)
6. Run Fase 3-5 (refinement passes, including read-aloud and sync test)

---

# PART D — Quality control & references

## 11. Common pitfalls

Distilled from extensive practice in medium and long model VSLs. Watch for these.

### 11.1 — Slides packed with text

Slides carrying multiple lines of text break the audio-visual sync. The viewer reads ahead of the voice; engagement collapses.

**Fix**: 90% of slides carry a single short sentence. The exceptions are deliberate (offer summary slide, bullets list, recap slide) and visually positioned as such.

### 11.2 — Testimonials read aloud in full

Reading a multi-line testimonial out loud causes the same sync break as packed slides — and is more tedious for the viewer.

**Fix**: paraphrase or read only the most striking line. Alternative: show testimonials rapidly on screen during a voice-over that walks through the broader proof claim.

### 11.3 — Weak or missing pattern interrupt

The first few seconds are spent on a generic image, a brand logo, or the speaker introducing themselves without a hook. The viewer scrolls past.

**Fix**: every VSL of every duration opens with a pattern interrupt from one of the nine families (§6.3). No exceptions.

### 11.4 — Promises stacked without proof

The opening makes bold claims but the script doesn't deliver supporting evidence within the first 30-90 seconds. The viewer's skepticism rises and the rest of the script reads as marketing noise.

**Fix**: load the first 30 seconds with proof — testimonials, scientific studies, demonstrations, credibility markers. The bolder the opening promise, the heavier the proof load required to support it.

### 11.5 — Storytelling that starts at the chronological beginning

"It was a Tuesday afternoon when..." sets up the story chronologically. The viewer disengages before the drama arrives.

**Fix**: drop the viewer **in the middle** of the story, at the most dramatic moment (the crisis, the diagnosis, the breaking point). Backfill the chronology after the viewer is hooked.

### 11.6 — Price revealed naked

The speaker says "the price is X" without anchoring it against a higher number, justifying the value, or framing the savings. The viewer's mental comparison goes to alternatives.

**Fix**: full price → reason-why → drop to offer price → reason-why for the drop. The price always sits inside a justification.

### 11.7 — Only a conditional guarantee

The guarantee is conditional ("if you follow the system and don't get results..."). The conditions create friction; viewers worry they won't meet the criteria.

**Fix**: always offer an **unconditional** guarantee as the base. Optionally add a conditional **sweetener** on top (a stronger refund or a bonus) — but the unconditional base must always be there.

### 11.8 — Inflated bonus values

A bonus claimed at €5,000 when no realistic market price would support that number reads as a stunt. The viewer's skepticism rises and the entire value stack collapses.

**Fix**: every bonus value attribution should be defensible — the viewer could plausibly acquire that thing for that price on the open market. Inflate gently if at all, with reason-why.

### 11.9 — Player with playback controls and fullscreen enabled

The viewer can scrub through the video, skipping the marketing and jumping to the price. The script's linear control is broken.

**Fix**: configure the player per §6.4 — no playbar, no fullscreen, no speed control. Autoplay-muted on first load.

### 11.10 — Audio volume too high

The video starts with high-volume audio and the viewer reflexively closes the tab.

**Fix**: reduce final audio volume by ~20% in post-production. The viewer who is interested will lean in; the viewer who is startled by volume will leave.

### 11.11 — Headline above the video player is kilometric

A long, multi-line headline above the video pulls the viewer into reading instead of watching. By the time they finish the headline, the autoplay-muted video has passed its critical opening seconds.

**Fix**: keep the headline compact. The headline echoes the script's first promise without giving away the pattern interrupt.

### 11.12 — No CTA delay on cold-traffic versions

A CTA button visible from the start on a first-visit page signals "this is a sales pitch" immediately. The viewer's defenses rise.

**Fix**: use the two-version setup (§6.5). First-time visitors see Version A with delayed CTA; return visitors see Version B with immediate CTA.

### 11.13 — No transcript link

The viewer who doesn't want to watch (in a quiet office, on a slow connection, in a hurry) has no alternative path — they leave the page.

**Fix**: small link below the video offering the transcript. Optional: exit-intent popup offering the transcript or capturing email for follow-up.

### 11.14 — Drop points ignored

The analytics show a sharp drop at a specific timestamp. The script is never updated, the drop persists, completion rates stay low.

**Fix**: identify drop points using player analytics, insert on-screen interjections at those timestamps ("In 60 seconds, you'll see..."), and rewrite the surrounding section if the drop persists.

### 11.15 — Webinar replay sold as a VSL

A recording of a live webinar is repackaged as a VSL. The pacing, the live-feel ad-libs, the audience interaction beats — all of these break in the recorded context. The piece feels neither like a live webinar nor like a polished VSL.

**Fix**: webinar replays can be sold as webinars (with the live framing intact) or rewritten into VSL format from scratch. Never the in-between.

### 11.16 — Not mobile-first 4:5

The video is produced 16:9 and embedded on a landing page that gets 70%+ mobile traffic. On mobile, the player is small, letterboxed, hard to read.

**Fix**: produce 4:5 (or have a 4:5 version) for mobile-dominant traffic. 16:9 only when desktop traffic dominates.

### 11.17 — Selling before the marketing 75% is done

The product is revealed in minute 5 of a 30-minute script. The viewer wasn't given enough marketing to be convinced. The remaining 25 minutes feel like flogging.

**Fix**: respect the 75/25 architecture (§4.3). The product reveal arrives only when the chain of beliefs has been installed.

### 11.18 — "You" have the magic powers when selling a product

The product VSL positions the speaker as the source of the magic, when it should be the product/system. The viewer's blocking belief becomes *"I'm not like you — I can't get those results."*

**Fix**: when selling a product, the system has the powers and the speaker is the discoverer. When selling services, the speaker has the powers. See §4.8.

### 11.19 — Generic, undifferentiated pattern interrupt

The pattern interrupt is a generic countdown, a stock image, or a low-energy "warning" graphic. The first seconds are wasted on something the viewer has seen a hundred times.

**Fix**: sketch two or three pattern interrupt options from different families (§6.3) and stress-test against the brief's avatar. The first option that comes to mind is rarely the strongest.

### 11.20 — Boring middle (DHD failure — Deficit of Attention, see [lp-specialist](format-specialists/lp-specialist.md) §4.4)

The viewer engaged in minutes 1-3, then the script lost them between minutes 7-15. The problem and promise haven't been re-anchored, the proof has gone stale, no new specifics have arrived.

**Fix**: every 2-3 minutes in long-model VSLs, re-anchor — restate the problem in fresh framing, restate the promise in a new beat, introduce a fresh proof element, or shift the emotional register. Not repetition — re-grounding through new specifics.

---

## 12. Revision checklist

Run this before delivering. **VSL-specific only** — the universal writing-quality checks (Gulpease, em-dash count, anti-AI patterns, read-aloud) are handled during Fase 3-5 of the protocol per [writing-principles](core/writing/writing-principles.md). This checklist supplements those, it doesn't restate them.

**Structural**
- [ ] Every belief from the brief's Chain of Beliefs is installed somewhere in the script?
- [ ] Every key objection from the brief is addressed somewhere in the script?
- [ ] Marketing Thesis ([marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — mechanism argumentation) is the spine — every section traces to it?
- [ ] Compositional model (§7.1-§7.6) matches the brief's duration target?
- [ ] Marketing 75% / Selling 25% balance respected (medium and long models)?

**Opening (first 120 seconds)**
- [ ] Pattern interrupt present and from a defined family (§6.3)?
- [ ] Opening mode (Big Benefit / Worst Day / Shocking Statement) selected and applied per §5.3?
- [ ] First 30 seconds loaded with proof (testimonials, studies, demonstrations, credibility markers)?
- [ ] Negative emotional charge in the opening (anger / fear / disappointment / shame)?
- [ ] Promise made about what they'll gain by watching, not by buying?

**Voice & spoken language**
- [ ] Short sentences, especially in the opening?
- [ ] ~90% of slides carry a single thought?
- [ ] Trailing ellipses end ~99% of lines?
- [ ] Natural spoken transitions, not abrupt sub-headlines?
- [ ] Bullets spoken naturally, not as written checklist?
- [ ] Testimonials never read in full (paraphrased or shown as visual)?
- [ ] Voice modulation cues placed at emotional pivots ([VOICE: ...])?
- [ ] Read-aloud test passed?

**Story (medium/long model)**
- [ ] Story starts in medias res, not chronologically?
- [ ] Hero's Journey beats present (empathy → fall → enemy → discovery → doubt → personal proof → shared proof → giving)?
- [ ] Common Enemy named (the external villain that absolves the viewer)?
- [ ] Vulnerable register in the storytelling, not heroic?

**Mechanism & proof**
- [ ] Cause-mechanism and solution-mechanism both named?
- [ ] Unique Mechanism named with a proprietary or proprietary-feeling word?
- [ ] Every major claim followed by proof (eight modes — §5.7)?
- [ ] Proof integrated alongside claims, not stacked in a testimonial ghetto?
- [ ] Speaker's role calibrated to product type ("you" with magic / system with magic — §4.8)?

**Offer & close sequence**
- [ ] Product reveal separated from solution reveal (no collapse)?
- [ ] Price never naked (high anchor → reason-why → offer price → reason-why for drop)?
- [ ] Guarantee unconditional base + optional conditional sweetener?
- [ ] CTA / close sequence matches the chosen model:
  - Medium model: CTA #1 Emotion → CTA #2 Logic → CTA #3 Fear?
  - Long model: Close #1 Desire → guarantee → Close #2 Logic → bonuses → urgency → Close #3 Crossroad → Close #4 Fear?
- [ ] Each CTA has slightly varied button copy (same destination)?
- [ ] Final future pacing multi-scene and sensory?

**Visual layer**
- [ ] Visual type selected and consistent (§6.1)?
- [ ] Captions / subtitles planned (mandatory except for text-on-screen)?
- [ ] Mobile-first 4:5 (or both versions planned)?
- [ ] Red bold for emotional carriers on key slides?
- [ ] Visual cues, B-roll directions, on-screen text overlays inserted?

**Technical configuration**
- [ ] Player setup specified (autoplay-muted, no playbar, no fullscreen, no speed control)?
- [ ] CTA delay setup specified (two-version: with delay + without)?
- [ ] CTA button visible at the right moment in the script (delay timed to the price reveal beat)?
- [ ] Transcript link planned beneath the video?
- [ ] Exit intent optional but considered?

**Brand fidelity**
- [ ] Tone and vocabulary match `brands/<brand>/brand-copy-rules.md`?
- [ ] No invented facts (everything from brief or brand wiki)?
- [ ] First person consistent (frontman/brand speaks as "I" / "we")?
- [ ] No proprietary external jargon exposed to the viewer?
- [ ] feedback-rules (global + brand) re-scanned on the final draft — no rule violated

---

## 13. Cross-references

- [CLAUDE](CLAUDE.md) — orchestrator, runs Brief readiness check before invoking this specialist
- [strategist](skills/strategist.md) — produces the funnel brief this specialist consumes
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — input template
- [writing-principles](core/writing/writing-principles.md) — read SECTION C (drafting methods) pre-writing for medium/long model; SECTION A + B post-draft; §3 Gulpease + read-aloud in Fase 5 (read-aloud is non-negotiable for VSL)
- [emotional-intelligence](core/writing/emotional-intelligence.md) — two-branch gate per §3: mandatory when the brief names Emotional anchors; consulted anyway for emotionally-led moments when it doesn't (the opening of a VSL is loaded with negative emotional charge by design)
- [infomercial-specialist](format-specialists/infomercial-specialist.md) — companion file for entertainment-led / televendita-style DR videos; read TOGETHER with this file (it layers production craft on top of the script craft here — CLAUDE.md §5 routes infomercial intents to both)
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — strategic levers the script activates
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — every belief in the brief installs at a specific movement
- [offer-construction](core/strategic-frameworks/offer-construction.md) — the offer block sits inside the script; this file defines what an offer is composed of
- [proof-elements](core/strategic-frameworks/proof-elements.md) — typology of proof; the eight VSL-tuned modes in §5.7 are an application of this framework
- [naming](core/strategic-frameworks/naming.md) — UM naming conventions for the mechanism reveal
- [funnel-architecture](core/strategic-frameworks/funnel-architecture.md) — the VSL as a touchpoint in the funnel
- [hook-specialist](section-specialists/hook-specialist.md) — supplies pattern interrupt openings (§5.1)
- [headline-specialist](section-specialists/headline-specialist.md) — supplies the headline above the video player (§5.2)
- [lead-specialist](section-specialists/lead-specialist.md) — supplies the lead craft for opening content (§5.3) and for the story section / Hero's Journey (§5.4)
- [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — supplies the problem identification + agitation (§5.5), the solution + UM reveal (§5.6), and the proof argumentation (§5.7)
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — supplies the bullet section (§5.8)
- [offer-specialist](section-specialists/offer-specialist.md) — supplies the complete offer block craft for §5.9 (product reveal, price, bonus, guarantee, future pacing, close, CTA copy, P.S. system, Crossroad Close) — the close sequence in §5.10 is VSL-specific architecture but each individual close uses offer-specialist craft
- [faq-specialist](section-specialists/faq-specialist.md) — supplies the FAQ / final social proof craft for §5.11
- [lp-specialist](format-specialists/lp-specialist.md) — sibling full-piece specialist; produces the landing page that hosts the VSL embed and the mini sales letter beneath it (§6.9)
- [email-specialist](format-specialists/email-specialist.md) — sibling specialist; produces the emails that drive traffic to the VSL touchpoint
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — sibling specialist; advertorials often share script DNA with the medium/long model VSL body
- `brands/<brand>/brand-copy-rules.md` — voice, primary over generic best practice
- `brands/<brand>/swipe.md` — brand-specific VSL examples for voice and pacing calibration
- `brands/<brand>/offers.md` — full offer composition (price, bonuses, guarantee, urgency, reason-why)
- `brands/<brand>/testimonials.md` — proof rows (testimonials are paraphrased or shown visually, never read in full)
- `brands/<brand>/transcripts/` — source material for founder anecdotes and customer stories that anchor the spoken voice
