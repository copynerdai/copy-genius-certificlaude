# Hook Specialist — Section Specialist

> Section specialist. Writes hooks — the micro-openers across every format that *stop* the prospect (interrupt attention) and *trap* them (install a curiosity gap that makes leaving costly). Every hook has two layers.
>
> Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) when intent recognition matches hook production, OR by a format specialist (ad-specialist / email-specialist / lp-specialist / vsl-and-video-ad-specialist / advertorial-specialist) when its piece needs a dedicated hook block. Reads the funnel brief, the brand wiki, the universal writing libraries — never reinvents what's documented elsewhere.
>
> **Scope boundary**: this specialist handles **micro-openers** — email subject + first line, VSL spoken opening, video-ad 3-sec hook, static-ad caption opener, social post first line. For the H1 / pre-headline / sub-headline **block** on landing pages, sales letters, advertorials, static-ad button / thumbnail / visual-overlay headlines, blog titles, VSL thumbnail titles → load [headline-specialist](section-specialists/headline-specialist.md). When a piece needs both (e.g., a static ad: visual-overlay headline + caption opener), both specialists are invoked in parallel.
>
> **Self-contained file**: this specialist holds the full hook knowledge base — the Double Hook architecture, the 18 hook types, the 7 advanced patterns, the format laws, the awareness matrix, the 6-axis revision, the output schema. Strategic inputs (awareness, Big Idea, avatar, Chain of Beliefs, Strategic Attack Angle) come from the brief; this file teaches *how* to execute them as a hook.

---

## 0. Execution path — read this first

> **Inline invocation** (called mid-piece by a format specialist — the COMMON case): take the inputs already gathered by the calling piece (§3) → select hook type(s) per awareness + angle (§8.1, §8.2) → write 3 variants, each a Double Hook (§4.1) on a different type and a different belief (§8.4) → mini-check: the 3 diagnostic tests (§12.2). Do not run the full §12.1 checklist or the full 6-axis pass on every variant.
>
> **Standalone invocation** (direct request, e.g. "dammi 5 hook per X"): full protocol — §3 inputs → §8 selection logic → §9 variant production protocol → §10 output → §11 6-axis revision → §12 checklist + diagnostic tests.
>
> **Tier 1 bans apply while DRAFTING** (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.".
>
> **Swipe**: read the [hooks library](swipe/elements/hooks.md) IN FULL before generating variants — templates are emotion-agnostic, re-instantiate with the brief's anchor; verbatim stays in its original language, generate natively in the target language. Cite the template's `from:` slug in variant metadata. If empty, proceed without.
>
> **Reference/appendix sections — consult on demand only**: §A1 Hook × Awareness matrix (open the row for the brief's awareness level), §A2 examples library (voice-and-shape reference only), §13 pitfalls (at QA).

---

## Quick navigation

### Part A — Identity & scope
- §1 [Purpose](#1-purpose)
- §2 [When invoked](#2-when-invoked)
- §3 [Required inputs](#3-required-inputs)

### Part B — Section expertise
- §4 [Core principles — the Double Hook architecture](#4-core-principles--the-double-hook-architecture)
- §5 [Hook pattern catalog — 18 base types](#5-hook-pattern-catalog--18-base-types)
- §6 [Advanced hook patterns — H1 to H7](#6-advanced-hook-patterns--h1-to-h7)
- §7 [Format-specific rules](#7-format-specific-rules)

### Part C — Operational workflow
- §8 [Selection logic — matching pattern to brief](#8-selection-logic--matching-pattern-to-brief)
- §9 [Variant production protocol](#9-variant-production-protocol)
- §10 [Output formats](#10-output-formats)

### Part D — Quality control & references
- §11 [The 6-axis revision](#11-the-6-axis-revision)
- §12 [Quality checklist + diagnostic tests](#12-quality-checklist--diagnostic-tests)
- §13 [Common pitfalls](#13-common-pitfalls)
- §14 [Cross-references](#14-cross-references)

### Appendix
- §A1 [Hook × Awareness matrix (full reference)](#a1-hook--awareness-matrix-full-reference)
- §A2 [Hook examples library (per type)](#a2-hook-examples-library-per-type)

---

# PART A — Identity & scope

## 1. Purpose

Produce ready-to-deploy hooks for any format that needs a micro-opener:

- **Email** — subject line + first visible line (the Double Hook pair)
- **VSL** — spoken opening (first 1-2 sentences before the pause)
- **Video ad** — 0-3 second hook (visual + audio + opening line)
- **Static ad** — caption opener (first 2 lines before the "read more" cutoff)
- **Social post** — first line (the line that decides whether the post gets read)
- **Advertorial** — opening hook (the first line of the body, separate from the headline)
- **LP / sales page** — hero opening (the first line of the body, separate from the H1/sub block)

Does NOT produce:

- Headline blocks (H1 + pre-headline + sub-headline) — handled by [headline-specialist](section-specialists/headline-specialist.md)
- Leads — handled by [lead-specialist](section-specialists/lead-specialist.md)
- The piece itself — handled by the corresponding format specialist
- Strategic decisions — handled by [strategist](skills/strategist.md). The hook executes the brief; it does not decide awareness, Big Idea, or angle.

The specialist is the **executor**, not the strategist. Strategic decisions (awareness, sophistication, Big Idea, avatar, Chain of Beliefs, Strategic Attack Angle for Product Aware) come from the brief. The specialist translates those decisions into a hook that opens the reader's loop on the first line and pulls them into the next.

---

## 2. When invoked

The orchestrator routes to hook-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches:

- "write the hook", "draft the hook", "I need an opener for [X]"
- "write the subject line", "draft the email subject"
- "write the VSL opening", "draft the first 3 seconds of the ad"
- "write the caption opener", "draft the first line of the post"
- "give me 3 hook variants for [X]"

Format specialists also call hook-specialist mid-execution when their piece needs hook variants (e.g., ad-specialist invokes it for the first-line hook of the body — ad-specialist §5.1 — and for the hook sets of a modular kit — ad-specialist §5.7; lp-specialist invokes it for the hero opening when the brief doesn't supply one).

The orchestrator runs the **Brief readiness check** ([CLAUDE §6](CLAUDE.md)) before invoking. If the brief is missing the touchpoint's awareness level, Big Idea (when applicable), or Chain of Beliefs targeting, the orchestrator surfaces the gap before calling hook-specialist.

---

## 3. Required inputs

The specialist needs these to start. Missing critical inputs are escalated to the orchestrator.

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md) of the specific funnel):

- §3.2 Mass Desire — the dominant desire calibration
- §3.3 Awareness Level — primary calibrator for hook type selection (the Product Aware section of [awareness-levels](core/strategic-frameworks/awareness-levels.md) for the 5 Schwartz angles; §A1 of this file for the full matrix)
- §3.4 Sophistication — affects whether the hook leads with the mechanism, the claim, or the identification
- §3.5 Avatar reference — voice anchors, blocking beliefs, the exact thoughts the avatar has right now (critical for relevance — axis #1 of the 6-axis revision)
- §3.7 Big Idea — when present, the Big Idea MUST be expressed in Hook 1 (§4.4 of this file)
- §3.8 Chain of Beliefs — every hook variant targets ONE specific belief; multiple variants target DIFFERENT beliefs in the chain (§6.2 of this file)
- §4.2 / §4.3 Touchpoint block — format (email / VSL / video ad / static / social / advertorial / LP), length, any pattern preference. For Product Aware targets, the **Attack angle** lives in the brief §3.7 Big Idea block (chosen by the Strategist; craft source: [big-idea](core/strategic-frameworks/big-idea.md) + the 5 Schwartz angles in the Product Aware section of [awareness-levels](core/strategic-frameworks/awareness-levels.md))
- §3.9 Proof inventory — for proof-led hook types (types #7, #8, #9, #10)

**From the brand wiki**:

- `brands/<brand>/brand-copy-rules.md` — voice (mandatory). The hook must sound like the frontman.
- `brands/<brand>/swipe.md` — brand-specific hook examples for voice calibration (when present)
- `brands/<brand>/testimonials.md` — for proof-led hooks (specific results, customer claims)
- `brands/<brand>/transcripts/` — for hooks that need an avatar quote or a founder anecdote opener

**From the cross-specialist writing libraries** (read once during pre-writing):

- [writing-principles](core/writing/writing-principles.md) — read SECTION A (principles) + SECTION B (anti-AI patterns) **post-draft** as Phase 3-4 refinement
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — every hook pattern activates one or more tactical techniques (Intensification, Gradualization, Mechanization, Camouflage, Inversion, Borrowed Authority)
- [emotional-intelligence](core/writing/emotional-intelligence.md) — **conditional**. Open ONLY when the touchpoint block specifies emotional anchors. Read ONLY the emotion entries listed.
- [big-idea](core/strategic-frameworks/big-idea.md) — Big Idea construction (when the hook expresses one)
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — belief numbering and rings

**From the requesting party** (orchestrator or format specialist):

- Format (email / VSL / video ad / static / social / advertorial / LP hero)
- Number of variants requested (default: 3)
- Any specific constraint (length cap, must-include element, banned vocabulary, must-mention proof)
- Any user-provided swipe (takes priority over generic conventions)

---

# PART B — Section expertise

## 4. Core principles — the Double Hook architecture

### 4.1 — Every hook has two layers

A hook is not a single line — it is a **pair of layers** working together:

- **Hook 1 — The Stop (0-3 seconds)** — visceral interrupt. Pattern break. The prospect notices before they decide to notice. System 1 fires first; System 2 catches up after.
- **Hook 2 — The Trap (3-8 seconds)** — curiosity gap or foreshadowing. The payoff promise that makes leaving costly. Never reveal it early.

A hook that stops but doesn't trap = the reader looks, then leaves. A hook that traps but doesn't stop = nobody reads the trap because they never looked. Both layers are mandatory.

**Example (email)**:
- Hook 1 (subject): *"This 7-second trick drops blood sugar 24%"*
- Hook 2 (first line): *"But here's the problem nobody talks about — who honestly wants to do this every single day?"*

The subject stops (specific number, dramatic claim). The first line traps (validates buyer concern, opens a loop that only the email body can close).

### 4.2 — The hook sells the next line, not the product

The hook's job is to make the reader *continue reading* — nothing else. Trying to sell the product, the offer, or the mechanism inside the hook collapses the architecture. The hook is the door, not the room.

**Diagnostic question for every hook draft**: *"If the reader read only this hook and then stopped, would they have any reason to keep going?"* If the answer is yes (curiosity / dread / fascination / threat), the hook works. If the answer is *"they'd already know what comes next"*, the loop didn't open.

### 4.3 — A hook must be unique to this piece, this avatar, this moment

A hook that could be reused on a competitor's piece is not a hook — it is a generic opener. The diagnostic: **can a competitor say this same line?** If yes, rewrite. The hook must be tied to something specific — a number, a name, a mechanism, a scene, a contrarian frame — that wouldn't fit another piece's offer.

### 4.4 — The Big Idea rule

When the brief includes an approved Big Idea (the §3.7 Big Idea block, chosen by the Strategist; craft source: [big-idea](core/strategic-frameworks/big-idea.md)):

- **The Big Idea MUST be expressed in Hook 1**. It IS the attention engine — not a later reveal.
- Hook 2 expands and dimensionalizes the Big Idea.
- **Error to avoid**: opening with a painful scenario or a generic question and keeping the Big Idea as a midpoint reveal. The Big Idea is the lead concept, not the punchline.

Without an approved Big Idea (Unaware audiences in early drafts, or pieces that don't require one), the hook leads with identification, story, or pattern interrupt — see §8 selection logic.

### 4.5 — Open the loop, never close it

The single most common amateur mistake: revealing the payoff inside the hook itself. *"This 7-second trick drops blood sugar 24% — it's drinking apple cider vinegar"* — the loop closes in the same line, the reader has no reason to continue.

**Operational rule**: the answer / mechanism / specifics live in the body, not in the hook. The hook *names the loop* and *promises the payoff*; the body delivers.

---

## 5. Hook pattern catalog — 18 base types

The 18 core hook types, grouped by category. For each: the core dynamic, the awareness level(s) it serves best, and the persuasion technique it activates.

### 5.1 — Narrative / Identity

| # | Type | Core dynamic | Best for |
|---|------|--------------|----------|
| **1** | **Personal Claim / Story** | Specific, verifiable personal result. *"I dropped 18kg in 12 weeks while eating pasta every night."* | Problem Aware, Solution Aware |
| **2** | **Associative State** | Scene the prospect is currently living — their exact thoughts and feelings reflected back. *"It's 3 AM. You're staring at the ceiling, calculating how many hours of sleep you can still get."* | Problem Aware (pain), Unaware (identification) |
| **3** | **Binding Statement** | A truth the prospect believes — then the reveal that they're failing at it. *"You already know diet matters more than exercise. So why isn't it working?"* | Problem Aware, Solution Aware |

### 5.2 — Mechanism / Information

| # | Type | Core dynamic | Best for |
|---|------|--------------|----------|
| **4** | **Mechanism + Benefit** | Name a specific mechanism tied to a desirable outcome. *"The [proprietary mechanism] that lets you [outcome] without [common downside]."* | Solution Aware Stage 3+ |
| **5** | **New Cause / Hidden Trigger** | Unknown cause behind a known problem. *"The real reason you can't fall asleep isn't stress — it's something that happens at 4 PM."* | Problem Aware (Road A) |
| **6** | **Secret Advantage of a Group** | What a privileged group knows. *"What top-1% earners do every Monday morning that the rest of us never learned."* | Solution Aware, Problem Aware |

### 5.3 — Credibility / Proof

| # | Type | Core dynamic | Best for |
|---|------|--------------|----------|
| **7** | **Shocking Fact / Statistic** | Specific, counterintuitive number. *"73% of people who follow this trial protocol see results in 14 days — and almost nobody is using it."* | Problem Aware, Unaware |
| **8** | **Authority Quote** | Borrow credibility from a recognized name. *"Harvard's longevity researcher said one sentence at a conference last month that changed everything I thought about aging."* | Solution Aware, Product Aware |
| **9** | **Testable Proof / Self-Test** | Something verifiable right now, by the reader, in seconds. *"Press your finger on your wrist for 5 seconds. If you feel [X], it's already happening."* | Problem Aware |
| **10** | **Physical Demonstration** | Tangible object or action embodying the claim. Video-only. *"[Holds object on camera] This costs €4. It just replaced a €2,000-a-year medication."* | Any awareness (video format) |

### 5.4 — Emotional / Provocative

| # | Type | Core dynamic | Best for |
|---|------|--------------|----------|
| **11** | **Contrarian Advice** | Directly contradict common wisdom. *"Stop drinking 8 glasses of water a day. Here's what's actually happening."* | Solution Aware, Problem Aware |
| **12** | **Common Mistake / Fatal Error** | A specific mistake causing their pain. **Never reveal the mistake in the hook** — only that it exists. *"There's one thing 9 out of 10 trainers tell their clients that's actually wrecking their progress."* | Problem Aware, Solution Aware |
| **13** | **Mocking Traditional Solutions** | Ridicule the status quo with humor, then pivot. *"'Just count your macros.' Sure. And while we're at it, let's all do our own dentistry too."* | Solution Aware |

### 5.5 — Curiosity / Intrigue

| # | Type | Core dynamic | Best for |
|---|------|--------------|----------|
| **14** | **Burning Curiosity / Open Loop** | Information gap impossible to walk away from. The loop must be genuinely unguessable. *"There's a 4-letter word at the bottom of every long-lived person's medical chart. Nobody's writing about it."* | Any awareness |
| **15** | **Quiz / Challenge** | A question that tests knowledge, with a surprising answer. *"Quick test: which of these 3 foods spikes blood sugar the most? (Most people get it wrong.)"* | Problem Aware, Solution Aware |

### 5.6 — Urgency / Timely

| # | Type | Core dynamic | Best for |
|---|------|--------------|----------|
| **16** | **Timely / Current Events** | A current event framing the message as urgent. *"Last week's FDA announcement just made this 3x more important — and almost nobody noticed."* | Any awareness |
| **17** | **Strong Claim + Guarantee** | Audacious promise + immediate risk removal. *"Try this for 30 days. If your [outcome] doesn't change, I'll send your money back AND pay you €50 for your time."* | Product Aware, Most Aware |
| **18** | **Relevant Question** | The question the prospect is already asking — then the reveal that the common answers are wrong. *"Why are you still tired after 8 hours of sleep? Everything you've been told is half the story."* | Problem Aware, Solution Aware |

---

## 6. Advanced hook patterns — H1 to H7

Seven battle-tested hook architectures. Each is a **complete Double Hook** (the Stop and the Trap are both built into the pattern). Use alongside the 18 base types — they are pattern templates, not replacements.

### 6.1 — H1: `adv-warning`

**Structure**: *"WARNING! Don't Even [Think/Do] [Action] Until You [Read This]..."*

- Hook 1: WARNING label = System 1 safety alert. The brain processes warnings before processing content.
- Hook 2: *"Until you read this"* = explicit open loop.

**Best for**: Solution Aware, Product Aware. Saturated markets where the prospect is about to act (about to buy a competitor, about to start a diet, about to sign with another agency).

**Activates**: Inversion (subverts the expected next action), Camouflage (looks like a safety notice, not an ad).

### 6.2 — H2: `adv-news-shock`

**Structure**: *"[Person's Name] + [Dramatic Event That Sounds Like Breaking News]"*

- Hook 1: Newspaper headline format — brain processes as NEWS before realizing it's an ad.
- Hook 2: *"Could this happen to ME?"* — implicit identification.

**Best for**: Unaware, Problem Aware. Maximum pattern interrupt. Long-form pieces, advertorials, VSLs.

**Rule**: The news must connect to the product's promise. Forced link = reader feels tricked = lifetime trust damage.

**Activates**: Camouflage (editorial dress), Borrowed Authority (news register).

### 6.3 — H3: `adv-open-letter`

**Structure**: *"An Open Letter To Every [Target] Who Secretly Believes That [Hidden Belief]"*

- Hook 1: *"Open Letter To Every [target]"* = instant self-selection. The right reader leans in; the wrong reader leaves.
- Hook 2: *"Who Secretly Believes"* = validates a belief they're afraid to express. Instant rapport.

**Best for**: Problem Aware, Solution Aware. Target has a hidden frustration they feel alone about.

**Rule**: The *"secretly believes"* must be genuinely felt — not something they'd say openly. If it's something the prospect would readily admit, the rapport collapses (it's not secret).

**Activates**: Identification (Rapport / Dog-Whistling), Camouflage (letter register).

### 6.4 — H4: `adv-exotic-mechanism`

**Structure**: *"[Authority from Exotic Place] Reveals [Secret/Discovery] That [Outrageous Benefit]"*

- Hook 1: Exotic origin = novelty (System 1 reads as *"something I haven't heard"*).
- Hook 2: Outrageous benefit tied to the exotic mechanism.

**Best for**: Solution Aware (mechanism = differentiator), Problem Aware. Saturated markets with similar-sounding offers.

**Rule**: The exotic element must be CREDIBLE with a real reason to exist. *"Tibetan monks reveal..."* with no actual monk involvement = lifetime trust damage.

**Activates**: Mechanization, Borrowed Authority (the exotic source carries credibility).

### 6.5 — H5: `adv-personal-hook`

**Structure**: *"Did you know that your [personal detail] was [surprising fact]?"*

- Hook 1: Reader's OWN identity reflected back — impossible to ignore.
- Hook 2: Surprising fact attached to their identity.

**Best for**: Unaware, Problem Aware. Maximum personalization. Requires genuine personalization data (geo-targeting, age-targeting, interest-targeting).

**Activates**: Identification (direct), Intensification (their identity, amplified).

### 6.6 — H6: `adv-impossibility`

**Structure**: *"[Seemingly Impossible Source] + [Incredible Specific Result]"*

- Hook 1: Impossible source (one-legged golfer, bankrupt entrepreneur turned millionaire, blind painter) = cognitive dissonance.
- Hook 2: HOW is this possible? — the only remaining question for the reader.

**Best for**: Most Aware, Product Aware (cuts skepticism with paradox). Solution Aware in tired markets where every promise sounds the same.

**Rule**: The paradox must be REAL or based on a real story. Manufactured paradoxes (*"the lazy person's guide to fitness"*) are too thin to carry the load.

**Activates**: Inversion (subverts the expected source of expertise), Camouflage (story register).

### 6.7 — H7: `adv-invalidation`

**Structure**: *"All Your [Expertise/Skills] Won't [Help] You Against [New Threat]"*

- Hook 1: Attacks the reader's CONFIDENCE in what they know — System 1 threat response.
- Hook 2: New threat that renders current knowledge useless.

**Best for**: Solution Aware (frustrated, tried everything), Problem Aware. Creates an opening for a NEW system.

**Rule**: Must DELIVER on the invalidation — the new system must genuinely differ. If the new system is *"the same thing with a different name"*, the hook becomes a betrayal.

**Activates**: Inversion (their knowledge is wrong), Gradualization (new threat = new system).

### 6.8 — Advanced patterns × Awareness (quick lookup)

| Awareness | Best advanced patterns | Why |
|---|---|---|
| **Most Aware** | H6 | Cuts through *"heard it all"* with paradox |
| **Product Aware** | H1, H6 | Repositions the product or creates a new angle |
| **Solution Aware** | H3, H4, H7 | Differentiates, validates frustration, introduces new mechanism |
| **Problem Aware** | H2, H3, H5 | Captures through news, identification, personalization |
| **Unaware** | H2, H5 | Stops without mentioning problem or solution |

---

## 7. Format-specific rules

The same hook architecture must adapt to the medium's constraints. Each format has its own laws.

### 7.1 — Email (subject + first line)

- **Subject = Hook 1** (max ~50 characters; mobile inboxes truncate after that)
- **First visible line = Hook 2** (the preheader / first line of the body, the second thing the reader sees in inbox preview)
- **Texture cues that lift open rate**: `[brackets]`, CAPS for 1-2 words (never the whole subject), numbers, quotation marks framing a quoted phrase
- **Never reveal the payoff in the subject** — that's the trap, not the stop
- **Match the subject voice to the from-name**: a subject signed *"Maria"* should read like Maria writes — not like a corporate newsletter

### 7.2 — Video ad (0-3 second hook)

- **Hook 1**: visual + audio (System 1) AND message (System 2) **simultaneously** within 0-3 seconds. Visual hook ≠ audio hook ≠ message hook — they are three channels firing in parallel.
- **Hook 2**: foreshadowing within 5-8 seconds. The reader who survives the first 3 seconds must hit the curiosity gap by second 8 or they leave.
- **Write as**: spoken words + `[VISUAL: ...]` + `[AUDIO: ...]` direction blocks.
- **Texture**: pattern interrupt in the first frame (movement, unexpected face, contrarian object, on-screen text overlay). The scroll-stopping element is the visual; the audio earns the next 5 seconds.

### 7.3 — Landing page / sales page (hero opening — but defer block to headline-specialist)

This specialist supplies the **first line of the body** (right after the headline block). The H1/sub-block itself comes from [headline-specialist](section-specialists/headline-specialist.md).

- **Together with the headline block**, the hook must answer: WHO this is for, WHAT it's about, WHY continue reading
- The hook bridges the headline into the lead — it cannot repeat the headline; it must add a new beat
- **Boundary with lead-specialist**: on LPs and advertorials the hook IS the first line of the lead: [lead-specialist](section-specialists/lead-specialist.md) receives it as input and does not rewrite it. This specialist owns line 1; the lead specialist writes from line 2 to the bridge.
- **CTA above fold** ONLY for Most Aware and Product Aware (rule lives in [lp-specialist](format-specialists/lp-specialist.md) §11.3)

### 7.4 — VSL (spoken opening)

- **Hook 1**: first spoken sentence (max 10-15 words). `[pause]` after. Spoken cadence matters — write to be *heard*, not read.
- **Hook 2**: foreshadowing sentence. Must sound natural read aloud — no clauses, no parenthetical asides, no semicolons.
- **Read-aloud test is mandatory** for every VSL hook draft. If the speaker stumbles, the listener will too.

### 7.5 — Static ad (caption opener)

- **Hook in the first 2 lines** — before the *"read more"* cutoff that platforms apply at roughly 125 characters on mobile.
- **Double Hook in ~25-30 words total**.
- **Visual hook (image text)** = separate System 1 layer, written by ad-specialist with this specialist's input.
- The caption opener should make the reader either click *"read more"* or tap the image — both count.

### 7.6 — Social post (first line)

- **First line = Hook 1** (the line that decides whether the post gets read past the cutoff). Stand-alone, no preamble.
- **Second line = Hook 2** (the trap). Often a line break between them — the platform's UI rewards the gap with attention.
- **No emoji unless the brand voice demands them** (most brand voices in the Copy Genius system don't).

### 7.7 — Advertorial (opening hook — but defer headline to headline-specialist)

The advertorial's H1/sub-block comes from [headline-specialist](section-specialists/headline-specialist.md). This specialist supplies the **first line of the body** — the line that pulls the editorial-mode reader into the article voice.

- Editorial register, never sales register (per [advertorial-specialist](format-specialists/advertorial-specialist.md) §4.2)
- Can serve as the first of the 3-Yes Opener triggers (per advertorial-specialist §5.2)
- **Boundary with lead-specialist**: on advertorials (as on LPs) the hook IS the first line of the lead: [lead-specialist](section-specialists/lead-specialist.md) receives it as input and does not rewrite it.

---

# PART C — Operational workflow

## 8. Selection logic — matching pattern to brief

The brief usually specifies awareness + Big Idea (when present) + Strategic Attack Angle (for Product Aware). From those, the specialist selects which hook type(s) to deploy across the variant set.

### 8.1 — Hook × Awareness selection

The full matrix lives in §A1. Quick reference:

| Awareness | First-choice types | Avoid |
|---|---|---|
| **Most Aware** | #17, #16 | Anything delaying the offer |
| **Product Aware** | #1, #4, #8, #18 | Generic hooks that fit any competitor |
| **Solution Aware** | #4, #6, #11, #13, #14 | Hooks explaining the problem (the reader is past that) |
| **Problem Aware** | #2, #5, #7, #9, #12, #18 | Product mentions, offers, mechanisms (too early) |
| **Unaware** | #2, #14, #16, #15, #1-as-story | Product, solution, problem, price (any of these breaks identification) |

### 8.2 — Strategic Attack Angle selection (Product Aware only)

For Product Aware audiences, the brief specifies ONE of the 5 Schwartz Strategic Attack Angles in the §3.7 Big Idea block ("Attack angle (Product Aware only)" field, chosen by the Strategist; craft source: [big-idea](core/strategic-frameworks/big-idea.md) + the Product Aware section of [awareness-levels](core/strategic-frameworks/awareness-levels.md)). The hook expresses the approved angle using the Double Hook architecture:

| Angle | What the hook does | Hook type priority |
|---|---|---|
| **1. New mental image of desire fulfilled** | Paint a vivid, specific end state. Hook 1 = scene. Hook 2 = curiosity about how it's achieved. | #2 Associative State, #14 Burning Curiosity, H1 / H3 |
| **2. Sharpen idea of how the product satisfies a specific desire** | Lead with a product detail previously unused in marketing. Hook 1 = that detail. Hook 2 = why it matters. | #1 Personal Claim, #4 Mechanism + Benefit, #7 Shocking Fact |
| **3. Expand perception of where / when** | Target-specific framing. Hook 1 = scenario locking in the vertical / occasion. Hook 2 = specificity payoff. | #2 Associative State, #6 Secret Advantage, H3 Open Letter |
| **4. New proof, details, documentation** | Lead with evidence. Hook 1 = shocking proof. Hook 2 = what it implies. | #7 Shocking Fact, #8 Authority Quote, #10 Physical Demo, H2 News Shock |
| **5. Present the Unique Mechanism** | Headline IS the mechanism. Hook 1 = UM name or specific-sounding UM action. Hook 2 = outcome. | #4 Mechanism + Benefit, H4 Exotic Mechanism, #17 Claim + Guarantee |

The brief tells you which angle is approved. Pick hook type(s) consistent with the angle. If the field is missing for a Product Aware target, **propose an angle derived from the Big Idea and ask the copywriter to confirm** — do not silently guess, do not hard-block.

### 8.3 — Chain of Beliefs targeting

Every hook has ONE target belief from the brief's Chain of Beliefs (numbering per [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md)). The hook's job is to **open the belief gap** the rest of the piece will fill.

**Rule**: when producing multiple hook variants, target **different beliefs** within the chain — not different phrasings of the same belief. A set of 3 hooks should attack 3 different beliefs so the copywriter can test which belief opens the prospect best.

**Awareness → beliefs typically opened in the hook**:

| Awareness | Beliefs the hook typically opens |
|---|---|
| **Problem Aware** | #1 problem exists, #3 problem is worsening, #5 missing 1%, #6 previous understanding was wrong, #8 past attempts destined to fail |
| **Solution Aware** | #10 solution addresses root cause, #11 different from past failures, #14 fits my life, #17 brand-specific mechanism |
| **Product Aware** | #18 unique advantage, #20 now or never, #22 superior to alternatives |
| **Most Aware** | #20 now or never, #26 risk-free guarantee |
| **Unaware** | Identification BEFORE argumentation. The hook surfaces identity / emotion / story — the first numbered belief (#1 problem exists) is reached AFTER the reader sees themselves in the opening. |

For every hook variant, state: *hook type # + target belief #* (see §10 output format).

### 8.4 — Variant diversity rule

A set of 3 hook variants must cover **3 different hook types** across **3 different beliefs** in the chain. Three rewordings of the same approach = one variant, not three. The copywriter tests genuinely different angles, not synonyms.

If the brief constrains the type (e.g., *"all variants must be #2 Associative State"*), follow the constraint and surface the loss of diversity to the orchestrator.

---

## 9. Variant production protocol

### 9.1 — The 5-phase protocol applies

The specialist follows the universal **5-phase protocol** defined in [writing-principles §2](core/writing/writing-principles.md). Hook-specific notes at each phase:

| Phase | Hook-specific notes |
|---|---|
| **Phase 1 — Pre-writing** | 0. Read [feedback-rules](core/feedback-rules.md) (global) + `brands/<brand>/brand-copy-rules.md` (brand — overrides global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d). Then always read: brief §3-§4, brand `swipe.md` (hook examples if present). For Product Aware: confirm Strategic Attack Angle is in the brief. For pieces with Big Idea: re-read the Big Idea statement — it must drive Hook 1 verbatim or close. **Conditional**: open [emotional-intelligence](core/writing/emotional-intelligence.md) ONLY if the brief specifies emotional anchors for the opening beat. |
| **Phase 2 — Drafting** | Generate the variant set (typically 3). Per variant: pick hook type → pick target belief → write Hook 1 (the Stop) → write Hook 2 (the Trap). Verify per variant: different type + different belief from the other variants. Format-specific: write to the medium's constraints (length, channel — see §7). |
| **Phase 3 — Principles refinement** | Universal pass per [writing-principles SECTION A](core/writing/writing-principles.md). Hook-specific watch-points: Principle 1 (One Thing) often slips when Hook 1 carries two competing ideas; Principle 2 (Promise → Proof → Implication) — for hooks, this becomes Promise → Tease → Imply-payoff; Principle 6 (Conversational flow) — Hook 2 must feel like a natural continuation of Hook 1, not a separate sentence. |
| **Phase 4 — Anti-AI pass** | Universal pass per [writing-principles SECTION B](core/writing/writing-principles.md). Hook-specific hotspots: rigid parallel constructions in Hook 1; em-dash count in Hook 1 + Hook 2 = 0 (writing-principles B.1) — convert to period or comma; generic transitions between Hook 1 and Hook 2 (*"And here's the thing..."*, *"But wait..."* — these are AI tells). |
| **Phase 5 — Read-aloud + Diagnostic tests** | Read every Hook 1 + Hook 2 pair aloud. Then run the diagnostic tests (§12.2): generality test, open-loop test, fit-to-medium test, 6-axis revision (§11). |

### 9.2 — When the brief is missing critical inputs

Critical inputs whose absence blocks hook writing:

- **Awareness level** — without this, type selection is guessing. Block and ask.
- **Big Idea (when piece requires one)** — Hook 1 needs the Big Idea verbatim or close. Block and ask.
- **Avatar voice anchors** — without these, the relevance axis collapses (axis #1 of 6-axis revision). Surface the gap to the orchestrator and offer to use generic voice as fallback.

Non-critical inputs whose absence the specialist can work around:

- Strategic Attack Angle (Product Aware only, brief §3.7) → propose an angle derived from the Big Idea and ask the copywriter to confirm — do not silently guess, do not hard-block
- Specific testimonials / proof rows → use generic proof-shaped placeholders, flag in output
- Specific dynamic insertion data (geo, age) → write hook with `[INSERT: city]` placeholders
- Brand swipe examples → use generic voice calibration from brand-copy-rules

---

## 10. Output formats

### 10.1 — Standard request (3 variants, single format)

```
HOOK VARIANT 1 — [Type name, e.g., #2 Associative State]
Target belief: #[number from brief's Chain of Beliefs]
[For Product Aware only] Strategic Angle: [1-5 from brief]
Hook 1 (Stop): [text]
Hook 2 (Trap): [text]
[VISUAL: ...] [AUDIO: ...]  (if video format)
Dominant emotion: [register from §11.3: Seeking / Rage / Fear / Lust / Care / Panic / Play] → labeled with the canonical entry name from [emotional-intelligence](core/writing/emotional-intelligence.md)

HOOK VARIANT 2 — [Type name — must be different from Variant 1]
Target belief: #[different from Variant 1]
[For Product Aware only] Strategic Angle: [1-5 from brief]
Hook 1 (Stop): [text]
Hook 2 (Trap): [text]
Dominant emotion: [different from Variant 1]

HOOK VARIANT 3 — [Type name — must be different from 1 and 2]
Target belief: #[different from Variants 1 and 2]
[For Product Aware only] Strategic Angle: [1-5 from brief]
Hook 1 (Stop): [text]
Hook 2 (Trap): [text]
Dominant emotion: [different from Variants 1 and 2]
```

### 10.2 — Modular kit output (grouped by angle)

When invoked by ad-specialist for a modular kit (ad-specialist §5.7 — multiple angles, multiple hook variants per angle):

```
ANGLE: [angle name from brief]

Hook 1.1 — [Type]
[Hook 1 (Stop)]
[Hook 2 (Trap)]

Hook 1.2 — [Type — different]
[Hook 1 (Stop)]
[Hook 2 (Trap)]

Hook 1.3 — [Type — different]
[Hook 1 (Stop)]
[Hook 2 (Trap)]

[Repeat for each angle in the brief]
```

Always deliver **different types across variants** — not reformulations of the same approach.

### 10.3 — Cross-format request (same hook adapted to 3 media)

When the brief asks for the same hook concept adapted across email + VSL + static:

```
HOOK CONCEPT — [Type + target belief + 1-line concept summary]

EMAIL VERSION:
Subject: [text]
First line: [text]

VSL VERSION (spoken):
[First sentence] [pause] [Foreshadowing sentence]

STATIC AD VERSION (caption):
[Line 1 — Hook 1]
[Line 2 — Hook 2]
[VISUAL OVERLAY: text on image]
```

---

# PART D — Quality control & references

## 11. The 6-axis revision

Every hook variant gets strengthened across these six axes during Phase 3 of the protocol. Run the pass explicitly — don't trust intuition.

### 11.1 — Relevance

Connects to what the avatar thinks about RIGHT NOW, specifically — not generically. *"Are you struggling with weight?"* fails the axis (everyone has thought about that at some point). *"You just stepped on the scale and saw +2kg again, even though you ate clean all week"* passes (that's a specific Monday morning).

### 11.2 — Importance of Information

Feels like knowing this ONE THING changes everything. The reader's internal reaction must be *"I need to know this NOW"* — not *"that's interesting"*. Information that the reader could acquire elsewhere fails this axis; information that lives only behind this hook passes it.

### 11.3 — Dominant emotion

One per hook. Don't stack. Options:

- **Seeking** (curiosity / dopamine) — for #14, #15, H4
- **Rage** (injustice) — for #5, #11, H7
- **Fear** (threat / loss) — for #7, #12, H1, H7
- **Lust** (desire / aspiration) — for #1, #4, H6
- **Care** (protection — self or others) — for #2, #5, H3
- **Panic** (FOMO) — for #16, #17, H2
- **Play** (humor) — for #13, occasionally H6

If a hook tries to fire two emotions at once, both weaken. Pick one, sharpen it.

**Canonical labeling**: the seven registers above are selection shortcuts. When labeling the dominant emotion in the delivered output (§10), use the canonical entry name from [emotional-intelligence](core/writing/emotional-intelligence.md) — its Quick Index lists the 13 families and their entries.

### 11.4 — Contrast with market

Says something the prospect has NEVER heard. The diagnostic from §4.3: *"If it works for a competitor, not enough contrast."* The hook should be a sentence only this brand can say.

### 11.5 — Rapport / Dog-whistling

Signals shared beliefs. The prospect's internal reaction: *"this person gets it."* Often achieved via:

- Naming a frustration they've felt but never expressed (H3 Open Letter)
- Mocking a piece of advice they secretly resent (#13 Mocking)
- Using vocabulary specific to their world (avatar voice anchors from the brief)

### 11.6 — Believability

Includes a credibility signal: authority (#8), specificity (numbers), social proof (#10), or a real-sounding mechanism (#4). A hook that lifts every other axis but fails believability becomes hype — and hype repels the savvy prospect.

---

## 12. Quality checklist + diagnostic tests

### 12.1 — Pre-delivery checklist

Run this before delivering. Hook-specific only — the universal writing-quality checks (em-dash count, anti-AI patterns, read-aloud) are handled during Phase 3-5 per [writing-principles](core/writing/writing-principles.md).

**Architecture**
- [ ] Double Hook present (Hook 1 Stop + Hook 2 Trap, both layers explicit)
- [ ] Hook 1 stops in 0-3 seconds (or the medium's equivalent attention window)
- [ ] Hook 2 traps without revealing the payoff
- [ ] If Big Idea present: expressed verbatim or near-verbatim in Hook 1

**Strategic alignment**
- [ ] Each variant matches the brief's awareness level (per §A1 matrix)
- [ ] For Product Aware: each variant executes the approved Strategic Attack Angle
- [ ] Each variant targets a specific belief # from the Chain of Beliefs
- [ ] Across the variant set: different types, different beliefs (no rewordings)

**Voice & specificity**
- [ ] Sounds like the frontman (matches `brand-copy-rules.md`)
- [ ] Could NOT work for a competitor (generality test)
- [ ] Includes one specificity element per hook (number, name, mechanism, scene)
- [ ] Zero AI stilisms (no *"In a world where..."*, *"Imagine if..."*, *"Picture this:"* unless the brand voice demands it)

**Format fit**
- [ ] Length matches the medium (subject ≤ 50 chars, video Hook 1 within 0-3s, static caption Double Hook ≤ 25-30 words)
- [ ] Visual/audio notes present if format is video
- [ ] Read-aloud test passed (especially for VSL and video ad)

**Feedback rules**
- [ ] feedback-rules (global + brand) re-scanned — no rule violated

### 12.2 — The 3 diagnostic tests

Three tests every hook must pass.

**Generality test**: paste the hook into a generic competitor's piece — does it still work? If yes, the hook is too generic. Rewrite with a specificity that ties it uniquely to this offer.

**Open-loop test**: imagine reading only Hook 1 and Hook 2, then stopping. Is there a question the reader cannot let go of? If you can imagine the reader shrugging and moving on, the loop didn't open — rewrite Hook 2.

**Fit-to-medium test**: read the hook in the medium it will live in (email preview, VSL spoken, static-ad scrolling). Does it survive the medium's constraints (subject truncation, scroll-stop window, read-more cutoff)? If not, adapt the length / cadence / structure.

---

## 13. Common pitfalls

Watch for these. Each one corresponds to a specific failure mode.

### 13.1 — Revealing the payoff in Hook 1

*"Apple cider vinegar drops blood sugar 24% — drink one tablespoon before meals."* The loop closes in the same line. Rewrite to name the loop without resolving it.

### 13.2 — Generic Hook 1 with no specificity

*"Are you struggling with weight loss?"* — no number, no name, no scene, no mechanism. Could be on any competitor's piece. Add one specificity element.

### 13.3 — Big Idea buried in the body instead of in Hook 1

The piece has an approved Big Idea, but Hook 1 leads with a generic identification scene and the Big Idea appears at the midpoint reveal. The hook architecture fails: the Big Idea must be the attention engine, not the punchline.

### 13.4 — Variant set with same type / same belief, different wording

*"Tired of being tired?" / "Are you exhausted all the time?" / "Sleep isn't fixing your fatigue?"* — three rewordings of the same approach, one variant. Rebuild: 3 different types × 3 different beliefs.

### 13.5 — Hook 2 that doesn't bridge from Hook 1

Hook 1 opens a loop on topic A; Hook 2 talks about topic B. The reader feels yanked. Hook 2 must continue the loop Hook 1 opened — same topic, deeper question.

### 13.6 — Two emotions stacked in one hook

Trying to fire both Fear and Curiosity at once → both weaken. Pick one (the dominant emotion from §11.3), sharpen it, let it carry the hook alone.

### 13.7 — Product mention in Unaware / Problem Aware hooks

Naming the product, the offer, the price, or the brand inside a hook for an Unaware or early-Problem-Aware audience breaks identification immediately. The hook must surface identity / story / pattern — not the answer.

### 13.8 — Forced exotic mechanism with no real basis

*"Tibetan monks discovered this technique 2,000 years ago"* with no actual Tibet connection in the offer = the reader feels conned the moment they hit the body. H4 only works when the exotic element is real.

### 13.9 — Manufactured paradox in H6

H6 (`adv-impossibility`) requires a REAL paradox or a real story. *"The lazy person's guide to fitness"* is a marketing cliché, not a paradox. *"How a one-legged golfer broke the course record at Augusta"* is a paradox (if true).

### 13.10 — Read-aloud failures in VSL / video hooks

The hook reads well on screen but stumbles when spoken. Semicolons, parenthetical asides, long clauses — all of these die in spoken delivery. Read every video / VSL hook aloud during Phase 5.

### 13.11 — Generic transitions between Hook 1 and Hook 2

*"And here's the thing..."*, *"But wait..."*, *"Let me explain..."* — these read as AI tells and waste the second of attention you just earned. Replace with content that moves the loop forward.

### 13.12 — Texture overload in email subjects

`[BRACKETS] + CAPS + numbers + emoji + quotes + ellipsis` — when every texture lever is pulled at once, the subject reads as spam. Pick 1-2 texture cues per subject, no more.

### 13.13 — Hook that requires the headline block to make sense

For LP / advertorial / sales-page hooks, this specialist supplies the **first line of the body**, after the headline block. The hook must stand on its own — it cannot rely on the H1 to set context.

### 13.14 — Variant set that ignores the brief's awareness level

A Product Aware brief that gets 3 hook variants all built on #2 Associative State (a Problem Aware hook type) = the specialist read the brief wrong. Cross-check every variant against the §A1 matrix before delivering.

### 13.15 — Strategic Angle mismatch (Product Aware)

The brief specifies Angle 5 (Present the Unique Mechanism); the variant set leads with Angle 1 (New Mental Image). The hooks may be well-written but they execute the wrong strategy. Re-check the brief's angle before drafting.

---

## 14. Cross-references

- [CLAUDE](CLAUDE.md) — orchestrator, runs Brief readiness check before invoking this specialist
- [strategist](skills/strategist.md) — produces the funnel brief this specialist consumes (for Product Aware, the Attack angle lives in the brief §3.7 Big Idea block)
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — input template
- [awareness-levels](core/strategic-frameworks/awareness-levels.md) — primary calibrator for hook type selection
- [big-idea](core/strategic-frameworks/big-idea.md) — Big Idea construction; when present, drives Hook 1 (§4.4)
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — belief numbering for hook targeting (§8.3)
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — each hook pattern activates one or more tactical techniques
- [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) — for hook types #4 Mechanism + Benefit and H4 Exotic Mechanism
- [mass-desire](core/strategic-frameworks/mass-desire.md) — calibrates the emotional axis of the hook
- [naming](core/strategic-frameworks/naming.md) — when the hook references a named mechanism
- [writing-principles](core/writing/writing-principles.md) — read SECTION A + B post-draft for Phase 3-4 refinement; §3 read-aloud in Phase 5
- [emotional-intelligence](core/writing/emotional-intelligence.md) — conditional read when brief specifies emotional anchors
- [headline-specialist](section-specialists/headline-specialist.md) — sibling section specialist. Parallel invocation common for LP / advertorial / static ad (block + caption opener / hero + first-body-line).
- [lead-specialist](section-specialists/lead-specialist.md) — downstream from the hook on LP / advertorial (the hook bridges into the lead)
- [ad-specialist](format-specialists/ad-specialist.md) — invokes this specialist for the first-line hook of the body (its §5.1) and for the hook sets of a modular kit (its §5.7)
- [email-specialist](format-specialists/email-specialist.md) — invokes this specialist for subject + first-line pairs
- [lp-specialist](format-specialists/lp-specialist.md) — invokes this specialist for the hero opening (first line of the body)
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — invokes this specialist for the editorial-mode opening line
- [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) — invokes this specialist for the spoken opening (across every duration tier — the tiers are sections of that single file)
- `brands/<brand>/brand-copy-rules.md` — voice, primary over generic best practice
- `brands/<brand>/swipe.md` — brand-specific hook examples for voice calibration
- `brands/<brand>/testimonials.md` — for proof-led hooks (#7, #8, #9, #10)
- `brands/<brand>/transcripts/` — for hooks that reference founder anecdotes or avatar quotes

---

# Appendix

## A1. Hook × Awareness matrix (full reference)

The complete lookup. For each awareness level: which hook types fit best, which to avoid, and why.

### A1.1 — Most Aware

The reader already knows the brand and the offer. They're one step from buying. The hook's job: trigger the action.

**Best types**: #17 Strong Claim + Guarantee, #16 Timely / Current Events
**Best advanced patterns**: H6 (paradox cuts through *"heard it all"*)
**Avoid**: anything that delays the offer (#2 Associative State, #5 New Cause — these belong upstream); pure curiosity (#14) without an action call
**Why**: at Most Aware, the prospect's resistance is *"give me a reason to act today, not later"*. The hook must compress urgency + risk reversal + specificity into a few words.

### A1.2 — Product Aware

The reader knows the product category and 2-3 competitors. They're comparing. The hook's job: differentiate this product from the alternatives they're considering.

**Best types**: #1 Personal Claim, #4 Mechanism + Benefit, #8 Authority Quote, #18 Relevant Question
**Best advanced patterns**: H1 (warning vs about-to-buy alternative), H6 (paradox of impossible source)
**Avoid**: generic hooks that fit any competitor (fails the generality test in §12.2); explanatory hooks (the reader is past explanation)
**Why**: Product Aware prospects already have a frame; the hook must shift the frame to one where this product wins. Strategic Attack Angle (§8.2) is mandatory — the angle dictates which type fits.

### A1.3 — Solution Aware

The reader knows the solution category exists (e.g., they know personal training works) but hasn't picked a brand. The hook's job: position THIS approach as the differentiated way to get the solution.

**Best types**: #4 Mechanism + Benefit, #6 Secret Advantage of a Group, #11 Contrarian Advice, #13 Mocking Traditional Solutions, #14 Burning Curiosity
**Best advanced patterns**: H3 Open Letter, H4 Exotic Mechanism, H7 Invalidation
**Avoid**: hooks that explain the problem (already known); hooks that promise the basic solution outcome (already expected)
**Why**: Solution Aware prospects need a reason to choose THIS solution provider over the obvious competitors. Mechanism differentiation, contrarian framing, or invalidation of past attempts all work here.

### A1.4 — Problem Aware

The reader knows they have the problem but doesn't yet know the solution category. The hook's job: identify with the problem hard enough that the reader leans into the body for an answer.

**Best types**: #2 Associative State, #5 New Cause / Hidden Trigger, #7 Shocking Fact, #9 Testable Proof, #12 Common Mistake, #18 Relevant Question
**Best advanced patterns**: H2 News Shock, H3 Open Letter, H5 Personal Hook
**Avoid**: product mentions, offer mentions, price, brand-specific mechanisms (all of these jump too far ahead)
**Why**: Problem Aware prospects are still in *"what's wrong with me?"* mode. The hook must validate the problem (so the reader feels seen) or introduce a new dimension of the problem (so the reader feels they're learning).

### A1.5 — Unaware

The reader doesn't know they have a problem, or doesn't recognize it as one. The hook's job: surface identity or scene without naming the problem — let identification do the work.

**Best types**: #2 Associative State, #14 Burning Curiosity, #16 Timely / Current Events, #15 Quiz / Challenge, #1 (used as pure story, no claim)
**Best advanced patterns**: H2 News Shock, H5 Personal Hook
**Avoid**: product, solution, problem, price (any of these breaks the identification — the reader thinks *"oh, this is an ad"* and leaves)
**Why**: Unaware audiences need to recognize themselves in the opening before they're ready to hear about a problem. The hook is pure story, pure curiosity, pure scene — the explicit argumentation comes later in the piece.

---

## A2. Hook examples library (per type)

> **What this appendix is**: one representative example per base type, calibrated to a generic health / fitness / business avatar. Use as voice-and-shape reference, never as a swipe to copy. Brand-specific examples live in `brands/<brand>/swipe.md`.
>
> **Swipe quarantine** — the examples below are historical swipe kept for structure and psychology. Do NOT inherit their punctuation or constructions: Tier 1 bans (writing-principles B.1–B.3 — zero em-dash, no "Not X. But Y.") apply to all delivered copy regardless of what these examples model.

### Narrative / Identity

**#1 — Personal Claim / Story**
> Hook 1: *"I lost 18kg in 12 weeks while eating pasta four nights a week."*
> Hook 2: *"And the part that surprised me most wasn't the food — it was what stopped working in week 7."*

**#2 — Associative State**
> Hook 1: *"It's 3 AM. You're staring at the ceiling, doing the math on how many hours of sleep you can still get."*
> Hook 2: *"You're not stressed. You're not anxious. You're something else — and most sleep advice misses it completely."*

**#3 — Binding Statement**
> Hook 1: *"You already know diet matters more than exercise. So why isn't it working?"*
> Hook 2: *"There's a piece of the equation almost nobody talks about — and it's not what you'd expect."*

### Mechanism / Information

**#4 — Mechanism + Benefit**
> Hook 1: *"The 11-minute morning reset that drops cortisol 27% by lunch."*
> Hook 2: *"It looks like nothing. The metabolic shift it triggers is everything."*

**#5 — New Cause / Hidden Trigger**
> Hook 1: *"The real reason you can't fall asleep isn't stress. It's something that happens at 4 PM."*
> Hook 2: *"Once you see it, you'll never not see it."*

**#6 — Secret Advantage of a Group**
> Hook 1: *"What top-1% earners do every Monday morning that the rest of us never learned in school."*
> Hook 2: *"It takes 6 minutes. It changes the whole week. Nobody teaches it."*

### Credibility / Proof

**#7 — Shocking Fact / Statistic**
> Hook 1: *"73% of people who follow this protocol see results in 14 days. Almost nobody is using it."*
> Hook 2: *"And there's a specific reason it stayed out of mainstream advice — one that says more about the industry than about the science."*

**#8 — Authority Quote**
> Hook 1: *"Harvard's longevity researcher said one sentence at a conference last month that quietly changed everything I thought about aging."*
> Hook 2: *"He buried it in the third slide. Most of the audience missed it."*

**#9 — Testable Proof / Self-Test**
> Hook 1: *"Press your finger against your collarbone for 5 seconds. If you feel a faint pulse, you're in the 60% who already have it."*
> Hook 2: *"Most doctors aren't trained to spot it. Here's what to do next."*

**#10 — Physical Demonstration** (video-only)
> Hook 1 [VISUAL: founder holding a small object on camera] + [AUDIO]: *"This costs €4. It just replaced a €2,000-a-year medication for me."*
> Hook 2: *"I'll show you exactly what it is in 90 seconds — but first, you need to know why it works."*

### Emotional / Provocative

**#11 — Contrarian Advice**
> Hook 1: *"Stop drinking 8 glasses of water a day."*
> Hook 2: *"The advice came from one badly-cited study in 1945. Here's what's actually happening when you over-hydrate."*

**#12 — Common Mistake / Fatal Error**
> Hook 1: *"There's one thing 9 out of 10 trainers tell their clients that's actually wrecking their progress."*
> Hook 2: *"It sounds like advice. It works against you. Most people never realize."*

**#13 — Mocking Traditional Solutions**
> Hook 1: *"'Just count your macros.' Sure. And while we're at it, let's all do our own dentistry too."*
> Hook 2: *"There's a smarter way — one that doesn't require a spreadsheet every meal."*

### Curiosity / Intrigue

**#14 — Burning Curiosity / Open Loop**
> Hook 1: *"There's a 4-letter word at the bottom of every long-lived person's medical chart."*
> Hook 2: *"Doctors see it. Nobody writes about it. It changes how you think about aging."*

**#15 — Quiz / Challenge**
> Hook 1: *"Quick test — which of these three foods spikes blood sugar the most?"*
> Hook 2: *"Most people get it wrong. The answer says something uncomfortable about modern nutrition advice."*

### Urgency / Timely

**#16 — Timely / Current Events**
> Hook 1: *"Last week's FDA announcement just made this 3x more important — and almost nobody noticed."*
> Hook 2: *"Here's what changed, and what it means for the next 12 months."*

**#17 — Strong Claim + Guarantee**
> Hook 1: *"Try this for 30 days. If your [outcome] doesn't change, I'll refund every euro AND send you €50 for the time you wasted."*
> Hook 2: *"I can offer this because the system works on its own — your job is just to show up."*

**#18 — Relevant Question**
> Hook 1: *"Why are you still tired after 8 hours of sleep?"*
> Hook 2: *"Everything you've been told is half the story — and the missing half is what makes the difference."*

---

For brand-specific examples calibrated to a real avatar and voice, see `brands/<brand>/swipe.md`. The examples above are voice-shape references only.
