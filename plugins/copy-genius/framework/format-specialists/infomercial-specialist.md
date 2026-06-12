# Infomercial Specialist — Format Specialist

> **Production craft companion** to [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md). Covers the **infomercial-specific** production knowledge — what makes an infomercial-style entertainment-led DR video distinct from a standard VSL.
>
> **Split of responsibilities:**
> - **For copy + script + structure + pacing** of any infomercial → read [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md). The infomercial is a long-form variant of the spoken-over-video format, and its copy follows the same 6 structural models documented there.
> - **For infomercial-specific production craft** (DEMO staging, backstage closer, theming, comparison, pitch-man tradition, style levers, ROI mindset) → read THIS file.
>
> Both files are consumed by the orchestrator ([CLAUDE](CLAUDE.md)) when an infomercial is requested. Always read VSL-and-video-ad FIRST for the structural backbone; then layer in the infomercial-specific craft from this file.

---

## Quick navigation

### Part A — Identity & scope
- §1 [Purpose](#1-purpose)
- §2 [When invoked](#2-when-invoked)
- §3 [Required inputs](#3-required-inputs)

### Part B — Infomercial-specific craft
- §4 [Hybrid format positioning](#4-hybrid-format-positioning)
- §5 [DEMO craft — dramatic visual demonstration](#5-demo-craft--dramatic-visual-demonstration)
- §6 [Backstage closer technique](#6-backstage-closer-technique)
- §7 [Theming from pop culture](#7-theming-from-pop-culture)
- §8 [Product comparison (with Italian legal framework)](#8-product-comparison-with-italian-legal-framework)
- §9 [Style levers — entertainment-led infomercials](#9-style-levers--entertainment-led-infomercials)
- §10 [Pitch-man tradition](#10-pitch-man-tradition)
- §11 [Two-CTA architecture](#11-two-cta-architecture)
- §12 [Duration sweet spot](#12-duration-sweet-spot)
- §13 [ROI > virality mindset](#13-roi--virality-mindset)

### Part C — Operational workflow
- §14 [Application protocol — infomercial-specific notes](#14-application-protocol--infomercial-specific-notes)
- §15 [Output formats](#15-output-formats)

### Part D — Quality control & references
- §16 [Common pitfalls](#16-common-pitfalls)
- §17 [Revision checklist](#17-revision-checklist)
- §18 [Cross-references](#18-cross-references)

---

# PART A — Identity & scope

## 1. Purpose

Provide the **infomercial-specific production craft** that layers on top of the standard VSL script work. Specifically:

- **Hybrid format positioning** — when to choose an infomercial-style entertainment-led approach vs a standard VSL approach
- **DEMO staging** — how to design the dramatic visual demonstration that anchors the piece
- **Backstage closer** — the authenticity-proving technique unique to the infomercial tradition
- **Theming patterns** — pop-culture borrowing as a recurring infomercial device
- **Product comparison** — how to compare products within the Italian legal framework
- **Style levers** — comedy, character, rhythm for entertainment-led infomercials
- **Pitch-man selection** — the spokesperson archetype that defines the format
- **Two-CTA architecture** — the classic infomercial CTA-objections-CTA close
- **Duration calibration** — why the medio formato (4-8 min) is the sweet spot
- **ROI mindset** — why infomercial success is measured in ROI, not virality

Does NOT produce:

- Script copy, structural sequence, pacing, stage directions → **always handled by [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md)**
- Generic video production rules (lighting, backgrounds, mic placement, music selection) → also in vsl-and-video-ad-specialist §6 conventions
- Pre-production / production / post-production phases — operational/tooling, out of scope for Copy Genius
- The funnel brief or strategic decisions — handled by [strategist](skills/strategist.md)

The specialist is the **production craft companion**, not the writer. The writer remains the vsl-and-video-ad-specialist. This file supplies the infomercial-specific layer.

---

## 2. When invoked

The orchestrator routes to infomercial-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md) — the dedicated infomercial intent row, which routes to `vsl-and-video-ad-specialist` + `infomercial-specialist` read together) matches:

- "write the infomercial", "scrivi l'infomercial", "write an infomercial", "draft a TV-style spot"
- "draft the entertainment-led DR video", "scrivi la televendita"
- "infomercial script for [product]", "spot a risposta diretta lungo per [prodotto]"
- "long-form entertainment-led video ad" (when entertainment is a primary feature)

**Important workflow** (this is what the CLAUDE.md §5 "read together" routing means in practice): the orchestrator invokes BOTH specialists in sequence (or reads both files inline in single-orchestrator mode):

1. **First**: read [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) for script/structure/pacing
2. **Then**: read this file for infomercial-specific production layer
3. **Output**: a script that follows VSL structural patterns PLUS infomercial production craft

---

## 3. Required inputs

The specialist needs these to start. Critical inputs missing → escalated to the orchestrator.

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md)):

- §3.3 Awareness Level — calibrates entertainment vs. directness balance
- §3.5 Avatar reference — informs the pitch-man character archetype + style levers
- §3.6 Offer — the offer composition (price, guarantee, urgency anchored to a reason-why)
- §3.7 Big Idea — the central concept the infomercial dramatizes visually
- §3.9 Proof inventory — testimonials, data, demo materials, talent endorsements

**Infomercial-specific brief fields** (must always be present — if absent from the brief, ask the copywriter before writing; do not invent):

- **Product visualizability** — can the product's benefit be SHOWN visually? (Yes → infomercial is viable; No → consider standard VSL instead)
- **Punto di Svolta (turning point)** — the specific moment of visual transformation the demo will dramatize
- **Style register** — Entertainment-led (commedia) / Authority-led (expert demonstration) / Hybrid
- **Duration target** — Spot breve (1-2 min) / Medio formato (4-8 min, default) / Televendita classica (20-30 min)
- **Pitch-man profile** — internal frontman / external talent / actor-character / hybrid

**From the brand wiki**:

- `brands/<brand>/brand-copy-rules.md` — voice (mandatory)
- `brands/<brand>/offers.md` — offer composition
- `brands/<brand>/testimonials.md` — proof rows + talent endorsements if available
- `brands/<brand>/transcripts/` — founder voice for the pitch-man character (if frontman-led)

**From the cross-specialist writing libraries**:

- [writing-principles](core/writing/writing-principles.md) — universal style layer (post-draft refinement)
- Read [emotional-intelligence](core/writing/emotional-intelligence.md): (a) MANDATORY when the brief's touchpoint block names Emotional anchors — read those entries only; (b) if the brief names no anchors and the piece includes emotionally-led moments (problem dramatization, hook, future pacing), consult the relevant entries anyway (max 3 per piece) and flag the missing anchors to the copywriter as a brief gap. The infomercial is an emotion-led format by design (the DEMO, the character beats, the close) — branch (b) applies to virtually every piece when the brief is silent.

**From companion format specialists** (always read first):

- [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) — the **primary specialist** for the script. Always read first; this file complements, never replaces.

**From section specialists** (read selectively):

- [hook-specialist](section-specialists/hook-specialist.md) — opening hook (informs the pattern-interrupt choice)
- [offer-specialist](section-specialists/offer-specialist.md) — CTA1 and CTA2 craft, price reveal, guarantee
- [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — the mechanism behind the DEMO (the "why does this work")

---

# PART B — Infomercial-specific craft

## 4. Hybrid format positioning

### 4.1 — Three video formats compared

| Format | Optimized for | Costs | Best fit |
|---|---|---|---|
| **Branded video** | Entertainment + reputation. Does NOT sell. | High production + media buy. | Big brands already known + with brand-building budget |
| **Classic televendita** ("televendita" = the Italian TV-shopping pitch tradition) | Direct response. Sells. Deliberately unpolished ("rozzo" — the trade term for the rough televendita register). | High production + TV media buy. | Established TV-shopping verticals (Anglo-American tradition) |
| **Hybrid infomercial** *(this specialist's focus)* | Entertainment + DR. Sells through entertainment. | Medium production + flexible distribution (web + paid social). | SMB Italian context, viable for any business that can sustain a single-asset evergreen video investment |

### 4.2 — When to choose the hybrid infomercial format

Use hybrid infomercial when:
- The product benefit is **visualizable** (can be demonstrated, not just described)
- The brand needs a **single evergreen DR asset** that converts over months
- The market is **competitive enough** that pure-direct messaging is fatigued (entertainment differentiates)
- The brand voice supports **entertainment without losing authority** (comedy / character / playfulness compatible with the offer)
- The budget supports **one well-produced piece** (not a constant churn of short ads)

Avoid hybrid infomercial when:
- The product is purely abstract / informational (no visual demonstration possible)
- The brand voice is fundamentally formal / institutional (entertainment clashes)
- The campaign needs constant fresh creative (the infomercial is an asset, not a feed)

### 4.3 — The hybrid principle

The hybrid infomercial unites:
- The **entertainment + production quality** of branded video (so the spectator is engaged, not bored)
- The **direct response orientation** of classic televendita (so the spectator buys, not just watches)

The result: a video where every entertainment moment serves the sale. Comedy that doesn't lead to sale is cut. Memorability that doesn't drive action is wasted.

---

## 5. DEMO craft — dramatic visual demonstration

### 5.1 — The DEMO as spine

The DEMO is the most distinctive infomercial device. It's the visual moment that proves the product works in a way no copy can.

The DEMO is built around the **Punto di Svolta** (Turning Point) — the precise visual transformation that, once shown, makes the product's value undeniable.

**Critical principle:** in a sales letter, the Punto di Svolta is described in words. In an infomercial, the Punto di Svolta is **dramatized visually**. Images > words.

### 5.2 — Three DEMO archetypes

| Archetype | What it shows | When to use |
|---|---|---|
| **Extreme test** | The product handling something nobody would actually do with it (a vacuum sucking pool balls, a power bank surviving frozen overnight) | Physical products where capacity / durability is a selling point |
| **Visceral transformation** | The before-and-after of a problem dissolving (constipation relief via posture change, mess cleaned by a fabric) | Health / household / personal-care products |
| **Process compression** | A long-duration result shown in compressed time (a kitchen knife slicing 50 items in 10 seconds) | Tools, kitchen, fitness — anywhere "speed" is the value |

### 5.3 — DEMO design rules

- **Make it extreme but believable.** The test must be visibly real (no obvious editing tricks). Audiences can spot fakery.
- **Compress the timeline visually.** What takes 5 minutes in reality should take 30 seconds on screen — but never lie about it.
- **Show the contrast.** The before-state and after-state must be in the same frame or adjacent shots.
- **Avoid easy framing.** A DEMO where the product handles what any competitor could handle is wasted. Push to the extreme that ONLY this product survives.

### 5.4 — When DEMO is impossible

If the product's value can't be visually demonstrated (abstract services, complex software, knowledge products), the hybrid infomercial format is the wrong choice. Default to standard long VSL via [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md).

---

## 6. Backstage closer technique

A specific stylistic signature popularized by certain US DR-video studios. After the main infomercial concludes (post-CTA), a brief raw "behind-the-scenes" segment shows the DEMO being set up or executed without polish.

### 6.1 — Why it works

Audiences who watched a DEMO have one persistent objection: *"It's faked, it's edited, the eggs were rubber..."*

The backstage closer pre-empts this objection by showing the materials, the angles, the actual physical demonstration as a behind-camera reality.

The backstage segment IS the proof. Not testimonials, not reviews — the raw setup of the DEMO itself.

### 6.2 — When to use it

- The DEMO is sufficiently extreme that "it must be fake" is the dominant objection
- The brand has the production budget for a separate B-roll capture
- The brand voice supports transparency (anti-establishment / authentic positioning)

### 6.3 — When to skip it

- Standard credibility (testimonials, reviews, expert endorsement) is already heavy
- The DEMO is modest enough that the objection isn't dominant
- The brand voice is highly polished (raw backstage would clash)

---

## 7. Theming from pop culture

The infomercial tradition borrows narrative frameworks from familiar pop-culture formats. The viewer's mind locks onto a known shape, and the infomercial rides that shape to deliver the message.

### 7.1 — Common theming patterns

- **Faux TV broadcast** — the infomercial opens as if it were a news segment, talk show, or interview program
- **Movie / series pastiche** — the infomercial dramatizes the product story in the visual style of a known film genre (Western, horror, action)
- **Documentary frame** — the infomercial is presented as a serious investigation, with on-screen text, archival footage, expert interviews
- **Tutorial / how-to overlay** — the infomercial mimics a how-to YouTube video, then pivots to the product as the "best tool for the job"

### 7.2 — Why theming works

- **Pattern recognition** — the viewer's brain comfortable in the familiar shape doesn't reject the format as advertising
- **Entertainment without invention** — the theming carries the entertainment weight, freeing the script to focus on the sale
- **Memorability** — a theming concept makes the infomercial distinctive and shareable

### 7.3 — Theming rules

- The theming must SERVE the sale, never distract from it
- The product reveal must fit naturally inside the theme (no awkward "by the way, here's the product")
- The theme should be familiar to the target audience (a theming that the avatar doesn't recognize fails)

---

## 8. Product comparison (with Italian legal framework)

Direct product-vs-product comparison is more permissive in some markets (US) than in others (Italy). The Italian context allows comparison but with specific constraints.

### 8.1 — What's allowed in Italy

- **Objective data comparison** — measurable specifications (weight, capacity, runtime, ingredients), backed by documentation
- **Category comparison** — comparing against a generic category rather than a named competitor ("most vacuums on the market" instead of "[brand X]")
- **Visible mark presence** — both brands' logos can be shown if the comparison is factually accurate and demonstrable
- **Granular specifications** — the more specific the comparison metric ("weight without cord"), the safer legally and the more persuasive

### 8.2 — What's NOT allowed

- Denigration of the competitor ("the competitor's product is bad")
- Unverifiable claims ("we're better in every way")
- Cherry-picking that misrepresents the competitor's overall offering
- Comparison on subjective dimensions (taste, beauty) where no objective metric exists

### 8.3 — Best practice

- **Be granular.** Detail the comparison axis ("noise level under 60 dB" vs "noise level under 80 dB") rather than headlining ("we're quieter").
- **Stay factual.** Cite the source of the comparison data inline if possible.
- **Frame as information, not attack.** "Here's how the category differs" lands better than "they're worse".

---

## 9. Style levers — entertainment-led infomercials

When the brief calls for an entertainment-led infomercial (comedy, character-driven), four levers shape the style.

### 9.1 — Commedia (Comedy)

The comedic register can carry significant DR weight if applied correctly. Three rules:

- **Every joke has a purpose** — a joke that doesn't advance the sale gets cut, even if funny
- **Every joke must land** — comedy that misses turns into discomfort and trust collapse
- **The brand voice must support comedy** — formal / institutional brands shouldn't force comedy

**When NOT to use commedia:** the product/brand register is serious (health emergencies, financial risk, mourning). When in doubt, default to ingenuity rather than full comedy.

### 9.2 — Ingegnosità (Wordplay & wit)

Less risky than full comedy. Uses rhymes, alliterations, double meanings, clever turns of phrase to inject personality.

Works almost universally — even formal brands can deploy ingenuity without breaking voice.

### 9.3 — Personaggi riconoscibili (Recognizable characters)

Build characters that are caricatures of the avatar — exaggerated versions of the viewer's traits, situations, accents, hobbies.

The viewer recognizes themselves (or their type) in the character, which creates identification before the sales argument even begins.

### 9.4 — Ritmo (Rhythm)

The pacing rule: never too slow (the viewer disengages), never too fast (the viewer loses the message).

A working heuristic for entertainment-led infomercials: **one beat of entertainment per paragraph of copy**. The beat can be visual (cut, transition, prop) or verbal (joke, wordplay, character reaction).

### 9.5 — Focus (the master constraint)

Above all four levers: the entertainment must serve the sale. A scripted joke that's funny but distracting from the close gets cut. A character moment that's charming but pulls focus from the CTA gets compressed.

A clear sales message beats a clever entertainment moment that doesn't work. When in doubt, choose directness, simplicity, clarity ("schiettezza, semplicità, chiarezza" in the source tradition).

---

## 10. Pitch-man tradition

The **pitch-man** is the on-camera character (presenter or actor) who carries the infomercial. Within the infomercial tradition, the pitch-man is widely considered the #1 success factor — more important than the script, the production, or even the offer.

### 10.1 — Why the pitch-man matters

- The viewer doesn't buy from a company — they buy from a person
- A convinced pitch-man transmits emotion that script and production cannot
- A famous pitch-man becomes a brand asset (the face of an entire company)

### 10.2 — Selection criteria

**Critical**: has the pitch-man used the product?

The combination of **personal conviction + professional capability** is the explosive mix. A pitch-man who hasn't used the product reads as hired talent; the viewer senses it.

**Selection levers:**
- Internal frontman / founder — works when the founder has presence + conviction
- External talent (celebrity, public figure) — works when the talent is relevant to the avatar
- Actor playing a character — works when the character archetype matches the avatar's situation
- Hybrid (founder + actor as commentator) — works for complex products where both authority + character are needed

### 10.3 — Pitch-man as character

Even when the pitch-man is the founder, treat them as a **recognizable character** within the infomercial:
- Consistent costume / wardrobe across appearances
- Signature phrases / catchphrases
- Distinctive setting / backdrop
- Visual signature (look, gesture, prop)

Over time, the pitch-man becomes the visual shorthand for the brand. The infomercial is a vehicle for building that recognition.

---

## 11. Two-CTA architecture

Distinct from many VSL formats, the classic infomercial uses a **two-CTA close** with an objection-handling layer in between.

### 11.1 — The structure

```
... main body ...

CTA #1 — Simple, ape-proof, immediate
   "Click here and order now. Here's exactly what happens next."

[Objection-handling layer]
   - Add credibility (reviews, guarantee, risk reversal, free trial)
   - Resolve specific doubts (the candor technique — admit a small limitation honestly)

CTA #2 — Different wording, same destination
   "Click below now if you want this. The offer expires when this timer hits zero."

Outro — Give time to click
   - Repeat the offer summary once
   - Mention scarcity / urgency one last time
   - Don't cut the video the second the CTA appears — let viewers physically click
```

### 11.2 — Why two CTAs

- Viewers who reach the first CTA but didn't click have a specific reason (doubt, hesitation, missed information)
- The objection-handling layer addresses those specifically
- The second CTA catches viewers who needed one more push

### 11.3 — CTA copy rules (both #1 and #2)

- Ape-proof: click here, do this, done
- Show the post-click flow visually (a screen recording of the checkout process if possible)
- Different wording on CTA #2 (not literal repeat — slight variation framing)
- Same destination (one URL, one outcome — never split traffic)

---

## 12. Duration sweet spot

### 12.1 — The three duration classes

| Class | Length | Best for | When NOT to use |
|---|---|---|---|
| **Spot breve** ("short spot") | 1-2 min | Big brands already known, retargeting | SMB launching new products (no time for the movements of the duration model chosen in the brief — e.g., the 8 movements of the short model, [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) §7.4) |
| **Medio formato** ("mid-length format") | 4-8 min | **Default for SMB hybrid infomercials** | When the product needs <2 min OR >15 min explanation |
| **Televendita classica** ("classic TV-shopping pitch") | 20-30 min | TV-shopping verticals, single-product brands with TV distribution | Web-only distribution (rare viewer sustains 30 min on web) |

### 12.2 — Why medio formato (4-8 min) wins

Reference data (unsourced field observation — directional, not a rule): medio formato shows roughly **+32% conversion vs spot breve** and **+15% vs televendita classica** when distributed on web/paid social. The reason: enough time to develop all the DR blocks, short enough to retain web-attention.

The default for hybrid infomercials is **medio formato (4-8 min)**. The brief should specify a different duration only when the product/audience genuinely warrants it.

### 12.3 — The "more you tell, more you sell" caveat

For complex products (high-ticket info products, programs, services), the medio formato may need to extend toward 8-12 min. The principle: tell enough to fully sell, never less.

---

## 13. ROI > virality mindset

The infomercial's success metric is **ROI on paid distribution**, NOT views or virality.

### 13.1 — The #chissenefregadeivirali principle ("who cares about going viral")

If the infomercial generates more than €1 for every €1 spent on paid distribution (Facebook ads, Google ads, YouTube ads), it's a money-printing machine — regardless of whether it goes viral.

The video will accumulate views naturally as paid distribution scales. Virality is a side effect, not the goal.

### 13.2 — Why this matters

- Many infomercial briefs come in with implicit virality goals ("we want a video that goes viral"). Reset this expectation early.
- A viral video that doesn't convert is a brand-building expense, not DR.
- A non-viral video with positive ROI is an asset — it pays for itself indefinitely.

### 13.3 — Metrics that actually matter

- **Cost per acquisition (CPA)** — how much paid spend produces one conversion
- **Average order value (AOV)** — what the average buyer spends, including upsells
- **Return on ad spend (ROAS)** — gross revenue / ad spend, with 1.0 being break-even and 2.0+ being healthy
- **Customer lifetime value (LTV)** — long-term value of the acquired customer, the real success measure

Virality, view counts, share counts → tracked as secondary signals but never the decision metric.

---

# PART C — Operational workflow

## 14. Application protocol — infomercial-specific notes

The infomercial-specialist always layers on top of the vsl-and-video-ad-specialist's universal 5-phase protocol (see [vsl-and-video-ad-specialist §9](format-specialists/vsl-and-video-ad-specialist.md) and the canonical protocol in [writing-principles §2](core/writing/writing-principles.md)).

The notes below specify what is **infomercial-specific** at each phase.

| Phase | Infomercial-specific notes |
|---|---|
| **Fase 1 — Pre-writing** | 0. Read [feedback-rules](core/feedback-rules.md) (global rules) + `brands/<brand>/brand-copy-rules.md` (brand rules — they override global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d). **Emotional gate**: apply the two-branch rule in §3 ([emotional-intelligence](core/writing/emotional-intelligence.md)). Then, after reading the VSL universal pre-write materials, decide on five infomercial-specific calibrations: (a) **Hybrid positioning** (§4) — is this genuinely hybrid or could it be a standard VSL?; (b) **DEMO design** (§5) — what's the Punto di Svolta and which DEMO archetype fits?; (c) **Pitch-man profile** (§10) — internal frontman / external talent / actor / hybrid?; (d) **Style register** (§9) — entertainment-led / authority-led / hybrid?; (e) **Duration** (§12) — confirm medio formato (4-8 min) is right, or justify deviation. |
| **Fase 2 — Drafting** | Draft script via vsl-and-video-ad-specialist first. Then add the infomercial-specific layer: the DEMO must be planned at script-time (the stage direction includes the dramatic test, not just "show the product"); the two-CTA architecture (§11) replaces single-CTA close; if backstage closer (§6) is used, plan the B-roll for it; if theming (§7) is used, the script wraps the movements of the duration model chosen in the brief (e.g., the 8 movements of the short model, [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) §7.4) inside the theming framework. |
| **Fase 3 — Principles refinement** | Universal pass per [writing-principles SECTION A](core/writing/writing-principles.md). Infomercial-specific watch-points: **Principle 1 (One Thing)** — the DEMO IS the One Thing made visual; every other beat must point back to it. **Principle 7 (Reason Why)** — the discount, urgency, and scarcity all need reason-why (no generic claims). |
| **Fase 4 — Anti-AI pass** | Universal pass per [writing-principles SECTION B](core/writing/writing-principles.md). Infomercial-specific hotspots: forced comedy (§9.1 — every joke needs purpose), generic pitch-man phrases ("Hi I'm here today to share with you...") — rewrite into character voice, rigid two-CTA wording that reads templated. |
| **Fase 5 — Readability + Read-aloud + DEMO Test** | Universal Gulpease + read-aloud per [writing-principles §3](core/writing/writing-principles.md). **Then add the DEMO Test (infomercial-specific)**: read the script aloud and visualize the DEMO at the precise scripted moment. Does the DEMO land where the copy expects it? Does the Punto di Svolta moment in the visual match the Punto di Svolta moment in the words? If misaligned, rewrite the DEMO description in the script, not the copy. |

---

## 15. Output formats

### Structure proposal (when planning before writing)

Use the standard VSL structure proposal from [vsl-and-video-ad-specialist §10](format-specialists/vsl-and-video-ad-specialist.md), PLUS append the following infomercial-specific block:

```
INFOMERCIAL-SPECIFIC LAYER:

Hybrid positioning: [§4 — confirm hybrid fits, or justify pure-VSL choice]
DEMO design:
  - Punto di Svolta: [the precise visual transformation moment]
  - DEMO archetype: [Extreme test / Visceral transformation / Process compression] (from §5.2)
  - Staging notes: [props needed, setup, before-after framing]

Pitch-man profile: [Internal frontman / External talent / Actor-character / Hybrid] (from §10)
Pitch-man character notes: [costume, signature phrase, setting, visual signature]

Style register: [Entertainment-led / Authority-led / Hybrid] (from §9)
Style levers active: [Commedia / Ingegnosità / Personaggi / Ritmo — which ones and how]

Two-CTA architecture: [CTA #1 wording / objection layer plan / CTA #2 wording variant] (from §11)

Backstage closer: [Yes — what B-roll to capture / No — why not] (from §6)

Theming: [Faux TV broadcast / Movie pastiche / Documentary frame / Tutorial overlay / None] (from §7)
  - If yes: [theming framework details]

Product comparison: [Yes / No]
  - If yes: [comparison axis + data source + Italian-legal-framework compliance check] (from §8)

Duration: [Spot breve / Medio formato / Televendita classica] (from §12)
  - Justification if not medio formato

ROI / virality framing: [explicit note that success is ROI, not views] (from §13)
```

### Writing execution

The script follows the standard VSL output format (see [vsl-and-video-ad-specialist §10](format-specialists/vsl-and-video-ad-specialist.md)) with infomercial-specific stage directions added inline:

```
[Standard VSL script lines with stage directions per vsl-and-video-ad-specialist conventions]

[INFOMERCIAL-SPECIFIC additions:]

[DEMO MOMENT — Punto di Svolta]
[STAGE DIRECTION: precise visual setup — props, framing, before-state and after-state in same frame]
[PITCH-MAN CHARACTER: specific visual signature called out — signature gesture, prop, setting]

[CTA #1]
[STAGE DIRECTION: post-click visualization — screen recording of next steps]

[OBJECTION HANDLING LAYER]
[STAGE DIRECTION: credibility elements — testimonials, badges, guarantee visualization]

[CTA #2 — different wording, same destination]

[OUTRO — give time to click]

[OPTIONAL: BACKSTAGE CLOSER B-ROLL]
[STAGE DIRECTION: raw setup footage of the DEMO being prepared/executed without polish]
```

---

# PART D — Quality control & references

## 16. Common pitfalls

Infomercial-specific only. Universal video-writing pitfalls live in [vsl-and-video-ad-specialist §11](format-specialists/vsl-and-video-ad-specialist.md).

### 16.1 — DEMO that isn't dramatic enough

The DEMO shows the product working, but no more than any competitor could show. The viewer thinks "OK fine" and moves on. There's no Punto di Svolta moment — just a competent demonstration.

**Fix:** push the DEMO to the extreme that ONLY this product could survive. If competitors could pass the same test, the DEMO is too tame.

### 16.2 — DEMO that fails the believability test

The DEMO is so extreme it looks fake. The viewer thinks "they edited that" and credibility collapses.

**Fix:** plan a backstage closer (§6) if the DEMO needs proof. Or scale the DEMO down to "extreme but visibly real."

### 16.3 — Pitch-man without conviction

The on-camera person reads like hired talent. The viewer senses they haven't used the product.

**Fix:** require the pitch-man to have used the product (§10). If using external talent, ensure they have authentic relevance to the avatar. If not possible, default to an internal frontman.

### 16.4 — Comedy that doesn't serve the sale

The script lands jokes that are funny but pull focus from the CTA. Memorable but unconverting.

**Fix:** the focus constraint (§9.5). Every joke that doesn't move the viewer closer to the click gets cut, regardless of how funny it is.

### 16.5 — Single CTA when two would convert better

The script uses one CTA at the end like a standard VSL. The infomercial's objection-handling-then-second-CTA pattern is missing.

**Fix:** implement the two-CTA architecture (§11). The middle objection layer is where many hesitant viewers convert.

### 16.6 — Forced theming that breaks immersion

A theming concept (faux TV broadcast, movie pastiche) is imposed but the script doesn't carry it through. The viewer notices the gimmick and disengages.

**Fix:** if you commit to a theming framework (§7), follow it through every beat — opening, mid-section, CTA, outro. Partial theming reads worse than no theming.

### 16.7 — Comparison that crosses Italian legal lines

The script attacks named competitors directly or makes unverifiable claims. Legal exposure + viewer skepticism.

**Fix:** stick to objective data comparison, category-level framing, and granular specifications (§8).

### 16.8 — Virality goal contamination

The brief or copywriter is chasing virality instead of ROI. The script optimizes for shareability at the expense of selling.

**Fix:** reset the metric to ROI from the start (§13). Communicate the #chissenefregadeivirali principle to the brand if needed.

### 16.9 — Wrong duration for the type

Spot breve when the product needs explanation, or televendita classica for web distribution. Mismatched length kills conversion.

**Fix:** default to medio formato (4-8 min) unless brief justifies deviation (§12).

### 16.10 — DEMO as afterthought rather than spine

The script is written first, then the DEMO is bolted on at the right structural moment. The DEMO feels disconnected from the rest.

**Fix:** plan the DEMO at brief-time. The script is built AROUND the DEMO, not the other way. The Punto di Svolta is the anchor.

---

## 17. Revision checklist

Run this before delivering. **Infomercial-specific only** — universal video-writing checks live in [vsl-and-video-ad-specialist §12](format-specialists/vsl-and-video-ad-specialist.md), universal style checks live in [writing-principles](core/writing/writing-principles.md).

**Hybrid positioning**
- [ ] Was the hybrid format the right choice (§4) vs standard VSL?
- [ ] Does the product genuinely support visual demonstration?

**DEMO**
- [ ] Is the Punto di Svolta clearly identified at script-time?
- [ ] Is the DEMO archetype (extreme test / visceral transformation / process compression) the right fit?
- [ ] Is the DEMO extreme enough that only this product could survive?
- [ ] Is the DEMO believable (not so extreme it looks fake)?
- [ ] If extreme: is a backstage closer planned to prove authenticity?

**Pitch-man**
- [ ] Profile defined (internal / talent / actor / hybrid)?
- [ ] Has the pitch-man used the product (or, if actor, authentically relevant)?
- [ ] Character signature notes documented (costume, phrase, setting)?

**Style**
- [ ] Style register defined (entertainment / authority / hybrid)?
- [ ] If entertainment-led: every joke serves the sale (focus constraint)?
- [ ] If entertainment-led: brand voice supports comedy?
- [ ] Ritmo calibrated (one beat of entertainment per paragraph as heuristic)?

**Two-CTA architecture**
- [ ] CTA #1 simple, ape-proof, with post-click visualization?
- [ ] Objection layer between CTAs (credibility + specific doubts addressed)?
- [ ] CTA #2 different wording, same destination?
- [ ] Outro gives viewer time to physically click?

**Comparison (if used)**
- [ ] Comparison axis is objective + measurable?
- [ ] Granular specifications (not generic "better")?
- [ ] Italian legal framework respected (no denigration, no unverifiable claims)?

**Backstage closer (if used)**
- [ ] B-roll planned for capture?
- [ ] Backstage shows DEMO setup authentically (no polished re-staging)?

**Theming (if used)**
- [ ] Theming framework carried through every beat (opening, mid, CTA, outro)?
- [ ] Theming serves the sale, not distracts?
- [ ] Theming familiar to the target avatar?

**Duration**
- [ ] Medio formato (4-8 min) unless deviation justified?
- [ ] Length appropriate to product complexity?

**Mindset**
- [ ] ROI metric communicated as primary success measure?
- [ ] No virality contamination in the brief or script?

**Rules compliance**
- [ ] feedback-rules (global + brand) re-scanned on the final draft — no rule violated

---

## 18. Cross-references

- [CLAUDE](CLAUDE.md) — orchestrator
- [strategist](skills/strategist.md) — produces the funnel brief this specialist consumes
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — input template
- [writing-principles](core/writing/writing-principles.md) — universal style layer
- [emotional-intelligence](core/writing/emotional-intelligence.md) — two-branch gate per §3: mandatory when the brief names Emotional anchors; consulted anyway for emotionally-led moments when it doesn't
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — Intensification + Camouflage dominant for infomercials
- [funnel-architecture](core/strategic-frameworks/funnel-architecture.md) — infomercial as a touchpoint
- **[vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md)** — **primary companion**, always read first for script/structure/pacing
- [hook-specialist](section-specialists/hook-specialist.md) — opening hook + pattern interrupt
- [offer-specialist](section-specialists/offer-specialist.md) — CTA1 and CTA2 craft, price, guarantee
- [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) — mechanism behind the DEMO
- [lp-specialist](format-specialists/lp-specialist.md) — sibling format specialist (pattern reference for self-contained specialist files)
- `brands/<brand>/brand-copy-rules.md` — voice (mandatory)
- `brands/<brand>/offers.md` — offer composition
- `brands/<brand>/testimonials.md` — proof rows + talent endorsements
- `brands/<brand>/transcripts/` — founder voice for pitch-man character
