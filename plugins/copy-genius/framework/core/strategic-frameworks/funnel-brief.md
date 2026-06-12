# Funnel Brief — Template

> The funnel brief is the **single source of truth** that connects strategic discovery to copy production. It is the output of the **Copy Genius Strategist** at the end of Phase 1 (Discovery) and the input every specialist consumes during Phase 2 (Writing).
>
> This file is the **TEMPLATE**. A real funnel brief follows this structure, filled with the actual content of one specific funnel. The worked example in §8 is included here only as a reference — a real brief does NOT contain a worked-example block, it is the worked example.
>
> Distinct from the 10 strategic framework files (`mass-desire.md`, `awareness-levels.md`, `unique-mechanism.md`, `naming.md`, `chain-of-beliefs.md`, `proof-elements.md`, `big-idea.md`, `offer-construction.md`, `funnel-architecture.md`, `persuasion-techniques.md`) — those describe *how* the Strategist works; this file describes the *output format* of that work.
>
> **Consumer contract**
> Read by: the Strategist — at: brief compilation, end of Phase 1 (Discovery); and by every writing specialist — at: the start of any writing task on a touchpoint of the funnel.
> Output: this file IS the canonical template — it owns the format of every brief block (§3-§4). The strategic framework files do not redefine these formats; each one points back here and only explains how to derive its block's content.
> Load-bearing sections (always read): §2 anatomy, §3-§4 block formats (each role reads only the blocks §6 lists for it), §6 reading-by-role, §7 status & versioning, §9 operational rules. Reference (on demand): §5 chain-format rationale, §8 worked example (deep-dive only).

---

## 1. Core principle

The funnel brief is the document a specialist reads to write copy. It must contain everything funnel-specific the specialist needs — and nothing else.

### Funnel-specific vs. brand-general — the separation

| Lives in the brief (funnel-specific) | Lives in the brand wiki (brand-general) |
|---|---|
| Mass desire selected for this funnel | Brand identity, mission, positioning |
| Awareness level + sophistication of this campaign | Brand tone of voice, copy rules, glossary |
| Unique Mechanism configuration for this funnel | Full library of testimonials, transcripts, swipe |
| Avatar segment(s) targeted by this funnel | Full avatar profiles (all segments) |
| Specific products being sold (with their price, value, discount, terms, guarantee, bonuses, scarcity) | Brand product catalog (all products, abstracted) |
| Big Idea of this campaign | Brand-level creative principles |
| Chain of beliefs for this funnel | Brand competence beliefs and historical track record |
| Proof devices selected for this funnel | Proof inventory at brand level |
| Funnel architecture for this campaign | Brand's operational capacity, channels available |
| Pointers to which testimonials/swipe/transcripts to use | The actual testimonials/swipe/transcripts files |

**Specialists know** they read the brief AND the brand wiki in parallel. The brief tells them WHAT to write for this campaign; the brand wiki tells them HOW the brand writes generally. Both are consulted on every writing task.

The Strategist does NOT copy brand-general content into the brief. The brief stays focused; the brand wiki stays authoritative.

### Two-view architecture

The brief is organized in two parts:

- **Part 1 — Strategic foundations** (§3): read once by every specialist at the start of any writing task. The decisions that hold across every touchpoint of the funnel.
- **Part 2 — Funnel execution** (§4): organized per-touchpoint. The specialist writing the ad reads the Touchpoint 1 block; the specialist writing the VSL reads the VSL block. Each per-touchpoint block is self-contained — everything the writer needs for that piece.

A specialist working on a single touchpoint can read Part 1 + their touchpoint block in Part 2 and have full context. They do not have to read other touchpoints' blocks.

### The brief as the central artifact

If a specialist asks "what does the campaign need from me?" the brief is the answer. If a specialist asks "what's the angle, the price, the chain, the lever?" the brief is the answer. If the brief doesn't answer the question, either (a) the brief is incomplete and must be patched, or (b) the question is about brand-general content and the answer lives in the brand wiki.

The Strategist is responsible for keeping the brief complete and current.

---

## 2. Brief anatomy — the 14 blocks (numbered 0-13)

The brief consists of 14 blocks (numbered 0-13), organized in two parts.

| # | Block | Section | Source methodology |
|---|---|---|---|
| 0 | Meta / Header | §3.1 | This file |
| 1 | Mass Desire | §3.2 | `mass-desire.md` |
| 2 | Awareness Level | §3.3 | `awareness-levels.md` |
| 3 | Sophistication & UM | §3.4 | `unique-mechanism.md` |
| 4 | Avatar reference | §3.5 | `brands/<brand>/avatars/*.md` |
| 5 | Offer | §3.6 | `offer-construction.md` |
| 6 | Big Idea | §3.7 | `big-idea.md` |
| 7 | **Chain of Beliefs (central artifact)** | §3.8 + §5 | `chain-of-beliefs.md` |
| 8 | Proof inventory | §3.9 | `proof-elements.md` |
| 9 | Reference pointers for this funnel | §3.10 | `brands/<brand>/*` (selective) |
| 10 | Funnel map summary | §4.1 | `funnel-architecture.md` |
| 11 | Per-touchpoint specifications | §4.2 | `funnel-architecture.md` + chain |
| 12 | Satellite sub-funnels | §4.3 | `funnel-architecture.md` §2.5 |
| 13 | Branching / segmentation | §4.4 | `funnel-architecture.md` §2.3 |

Blocks 0-9 = Part 1 (Strategic foundations).
Blocks 10-13 = Part 2 (Funnel execution).

---

## 3. Part 1 — Strategic foundations (block formats)

### 3.1 Meta / Header

The brief's identity card. Top of the document.

Every brief file opens with this YAML frontmatter, ABOVE the human-readable header:

```yaml
---
brand: <brand-slug>
funnel: <funnel-slug>
status: Draft   # Draft | In-Review | Approved | Locked | Live
version: 1.0
created: <YYYY-MM-DD>
updated: <YYYY-MM-DD>
incomplete_blocks: none   # none | list of block numbers
---
```

Note: the YAML frontmatter is the machine-readable source of state (read by CLAUDE.md §4 and the readiness check); the human header below mirrors it. When the Strategist changes status, version, or completeness, BOTH are updated — frontmatter first.

```
FUNNEL BRIEF

  Brand:                   <brand-slug>
  Funnel name:             "<name of this specific funnel/campaign>"
  Funnel slug:             <funnel-slug>
  Campaign type:           [Evergreen | Launch | Promotional | Retargeting | Reactivation]
  Primary product(s):      <product-slug(s)>
  Primary channel:         [Meta | Google | YouTube | TikTok | Email | Organic | Mixed]

  Strategist:              <name or "Copy Genius Strategist">
  Copywriter:              <name>
  Status:                  [Draft | In-Review | Approved | Locked | Live]
  Version:                 <vN.N>
  Created:                 <YYYY-MM-DD>
  Last updated:            <YYYY-MM-DD>
  Sign-off date:           <YYYY-MM-DD | pending>

  Brand wiki references this brief depends on:
    - brands/<brand>/brand.md
    - brands/<brand>/brand-copy-rules.md
    - brands/<brand>/products.md
    - brands/<brand>/offers.md
    - brands/<brand>/testimonials.md
    - brands/<brand>/swipe.md
    - brands/<brand>/avatars/<segment>.md (one or more)
    - brands/<brand>/transcripts/<relevant-transcripts>.md (selective)
```

### 3.2 Mass Desire block

The engine of the funnel. The desire-performance pair that anchors everything downstream.

```
MASS DESIRE

  Selected desire:           <one phrase from the mass desire output>
  Product performance:        <how this product/offer fulfills the desire — one line>
  Desire dimensions:
    Intensity:                [Low | Medium | High | Burning]
    Staying power:            [Low | Medium | High]
    Scope:                    [Niche | Broad | Universal]
    Urgency:                  [Low | Medium | High | Now]
  Dominant dimension:        <which dimension carries the most weight in this funnel>
  Why this desire (not another): <one-paragraph rationale>

  Source: mass-desire.md output
```

### 3.3 Awareness Level block

Where the prospect sits in their relationship to desire + product + brand. Sets minimum rings required.

```
AWARENESS LEVEL

  Selected level:            [Unaware | Problem Aware | Solution Aware | Product Aware | Most Aware]
  Audience temperature:      [Cold | Warm | Hot | Retargeting (specify last touch)]
  Beliefs already held by the audience:  [list — typically the cumulative beliefs below this level + any retargeting carryovers]
  Beliefs to install:        [list — what the funnel must build, mapped to belief numbers from chain-of-beliefs.md §2]
  Minimum rings required:    <N — from chain-of-beliefs.md §4>

  Operational implications:
    What this awareness level requires the copy to DO:
      - <implication 1>
      - <implication 2>
    What this awareness level requires the copy to NOT do:
      - <implication 1>
      - <implication 2>

  Source: awareness-levels.md output
```

### 3.4 Sophistication & UM block

Market sophistication stage + the Unique Mechanism configuration.

```
SOPHISTICATION & UNIQUE MECHANISM

  Market sophistication stage: [Stage 1 | Stage 2 | Stage 3 | Stage 4 | Stage 5]
  Stage description:           <one line on the state of category messaging>
  Strategic implication of stage:  <what stage demands of this funnel — typically Stage 4-5 = need a UM>

  UM needed?                   [Yes | No]
  If No — why:                 <e.g., "leader of category exception", "low-sophistication market"; skip rest of block>

  IF YES:
  UM type:                     [UMP (Problem Mechanism) | UMS (Solution Mechanism) | Both with bridge | Category layer]
  UM name:                     "<the proprietary name — from naming.md output>"
  UM in one sentence:          <description>
  5-step articulation:         [either inline or pointer to brand wiki section]
  Reason Why (proof spine):    <why this mechanism works — the credibility argument>
  Side of the argument:        [Problem side | Solution side | Bridge]
  Campaign thesis:             "<The [qualifier] way for [avatar] to obtain [result] is through [UM]>"
                               [the filled 4-slot formula — source: unique-mechanism.md §8]

  Sources: unique-mechanism.md output (§8 for the campaign thesis), naming.md output
```

### 3.5 Avatar reference block

The audience this funnel targets. Pointer to the full avatar profile in the brand wiki — only what's funnel-relevant lives here.

```
AVATAR REFERENCE

  Primary segment:             <segment-slug — full profile in brands/<brand>/avatars/<segment>.md>
  Secondary segment(s):        <if branching/segmentation applies>

  Funnel-relevant avatar facets (specifically what shapes THIS funnel):
    Identity markers in copy:  <how this segment self-identifies in this campaign — 2-3 markers>
    Lived experience anchors:  <specific moments/scenes this funnel will reference>
    Blocking beliefs to dismantle:  <prior beliefs that block this purchase — for chain-of-beliefs §8 contradiction techniques>
    Vocabulary they own:       <2-5 phrases they use; full vocabulary list in avatar file>
    Vocabulary to avoid:       <terms that read as outsider or jargon>
    Purchase capacity for this offer: [Stretch | Comfortable | Easy]

  Source: brands/<brand>/avatars/<segment>.md (full profile)
```

### 3.6 Offer block

The complete offer for THIS funnel. Every offer component documented per `offer-construction.md` §11. This is mandatory and detailed — specialists writing the offer block of an LP or the closing of a VSL read this verbatim.

```
OFFER

  Mode of work:                [Construction (built from scratch) | Evaluation (existing offer audited and improved)]

  ─── The 7 components ───

  1. Product / service:
     Name:                     "<name>"
     What it is:               <description>
     Delivery method:          [Digital | Physical | Hybrid | Service | Subscription]
     Delivery timing:          [Instant | Shipped | Cohort starts <date> | On-demand]
     Differentiation:          <what makes it defensibly distinct>

  2. Benefits:
     Functional:               [list — each tied to a specific offer element]
     Experiential:             [list — each tied to a specific offer element]
     Emotional:                [list — each tied to a specific offer element]

  3. Price + terms:
     List price:               €<X>
     Offer price:              €<Y>
     Discount (if any):        €<X - Y>
     Reason for discount:      <must be stated — see offer-construction.md §3.3 Pattern B>
     Payment options:          [Single payment | Installments (specify) | Financing | Subscription]
     Delivery mechanics:       <as relevant>
     Refund mechanics:         <tied to guarantee component 5>
     What's included vs extra: <leak check — see offer-construction.md §3.3>

  4. Bonuses:
     Bonus 1 — "<name>":
       Description:            <what physical form>
       Why it matters:         <how it elevates the main product>
       Future benefit:         <what the buyer will do/feel after consuming>
       Stated value:           €<Z>
       Immediate access?       [Yes | No]
     Bonus 2 — "<name>":
       [same fields...]
     [continue per bonus]
     Total stacked value:      €<Σ>

  5. Risk inversion:
     Guarantee name:           "<name from naming.md output>"
     Guarantee type:           [Conditional | Unconditional | Mixed | Pay-back-more | Per-result-missed | Time-based | Lifetime | Competitor/price-match | Keep-bonuses | Experience-comp]
     Guarantee duration:       <N days | Lifetime | Other>
     Description length:       <word count — should be 100-300>
     Description verbatim:     "<the full guarantee paragraph as it will appear in copy>"
     Anchored to UM?           [Yes — how | No]
     3-rules check:            Competitors-would-think-crazy: [Y/N] | Described-not-stamped: [Y/N] | Named: [Y/N]
     Additional risk-reversal elements: <proof / track record / transparency / alignment markers from §3.5 of offer-construction.md>

  6. Scarcity / urgency:
     Type:                     [Time | Stock | Cohort | Tier | Reserved-segment]
     The actual limit:         <e.g., "20 spots", "cohort starts <date>", "first 100 founding members">
     Anchored reason:          <the real reason scarcity exists — required>
     Verifiable?               [Yes | No]
     Phantom-scarcity check:   [Pass | Fail]

  7. Call to action:
     Future pacing summary:    <description of post-purchase life — multi-sensory>
     Contrast (white/black world): <yes/no — if yes, summary>
     Exact-action steps:       1. <step> 2. <step> 3. <step>
     Cost of inaction:         <stated economically + emotionally>
     CTA verbatim suggestion:  "<the CTA button text + reassurance copy>"

  ─── Offer type (per offer-construction.md §4) ───
     Primary type:             [1-12, named from the 12 types]
     Combined with:            [if hybrid, list additional types]

  ─── Tier structure ───
     Standard:                 €<X> — <contents>
     Premium (if any):         €<Y> — <contents>
     VIP / Ultra-Premium (if any): €<Z> — <contents>
     Tier strategy:            <e.g., "Standard primary, Premium for upsell, VIP for high-touch segment">

  ─── Audit / leak summary (if Evaluation mode) ───
     Dominant leak identified: <e.g., "guarantee was generic; rewritten and named">
     Improvements applied:     [list]
     Improvements deferred to v2: [list]
     Accepted weaknesses:      [list — leaks shipped with awareness]

  Source: offer-construction.md output
```

### 3.7 Big Idea block

The angle of vision that headlines, leads, hooks, and the entire argumentation descend from.

```
BIG IDEA

  Big Idea name:               "<short memorable handle for the idea, if it has one>"
  The Big Idea in one sentence: <the core creative insight stated clearly>
  Why this idea (over alternatives): <one-paragraph rationale — what gives this angle distinctness for THIS awareness level and THIS sophistication stage>
  Idea structure:
     Hook angle:               <the curiosity/intrigue/contrarian frame>
     Promise embedded:         <what the idea promises before any feature is mentioned>
     Mechanism it implies:     <how the idea points toward the UM>
     Emotional charge:         <fear | aspiration | vindication | curiosity | outrage | hope>
  Attack angle (Product Aware only): <one of the 5 Schwartz attack angles | n/a>
                               [chosen by the Strategist when the dominant awareness is Product Aware;
                                craft source: big-idea.md + the Product Aware section of awareness-levels.md]
  Sustaining material (optional): <stories, demos, data threads that can sustain the idea across long-form pieces>
  Known weaknesses (optional): <where the idea is fragile — what the copy must NOT lean on>
  Big Idea expressions across the funnel:
     Ad expression:            "<headline angle for the ad>"
     Advertorial expression:   "<opening angle for the advertorial>"
     Landing expression:       "<headline + sub for the LP hero>"
     VSL expression:           "<the lead/hook of the VSL>"
     Email subject patterns:   "<2-3 patterns for the email sequence>"
     [other touchpoints as relevant]
  False Big Idea check:        [Pass | Fail — see big-idea.md §11]

  Source: big-idea.md output
```

### 3.8 Chain of Beliefs block (central artifact)

The most-consulted section of the brief. Format is the **ring-by-ring detailed view** — the specialist writing a touchpoint comes here to find what they need to install. See §5 for the rationale on the format.

```
CHAIN OF BELIEFS

  Awareness level:             <from §3.3>
  Minimum rings required:      <N — from awareness mapping>
  Audience state:              [Cold | Retargeting — beliefs already held: list]
  Route (if Problem Aware):    [Route A — Original Problem | Route B — New Better Solution]

  ─── Ring 1 — "<strategic ring label>" ───
    Beliefs installed:         #X (label), #Y (label), B<n> (brand belief)
    Status:                    [to install | already held | partially held — reinforce]
    Installation device(s):    <e.g., "Identity copy + Founder story excerpt + 1 data point">
                               [the WHAT — the concrete mechanical move]
    Persuasion technique:      <tactical technique that operates on this ring — see persuasion-techniques.md §3>
                               Options (canonical enum owned by persuasion-techniques.md §9): Mechanization | Redefinition | Concentration | Intensification spike | Identification spike
                               [the WHY — the psychological lever]
                               Leave blank only if this ring rides on architectural Gradualization alone (rare — most rings carry a tactical technique)
    Emotional anchor:          <optional — from emotional-intelligence.md>
                               Format: <emotion name (intensity on continuum)>, e.g., "Anxiety (worry)" or "Determination (resolve)" or "Relief (mild)"
                               [the HOW — the felt register of the section]
                               Leave blank for neutral / rational register. Apply the anti-saturation rule: at most 3 anchored rings per touchpoint, never two consecutive anchors from the same emotion family.
    Supporting arguments / proof / ammunition:
       - <specific argument 1 the specialist will use>
       - <specific proof point 2 with source>
       - <specific testimonial reference: testimonial #X from brands/<brand>/testimonials.md>
       - <specific data: "Source: <study/report/internal data>">
       - <specific story beat: "Founder anecdote from transcript #Y">
    Content summary:           "<1-2 sentences describing what the prospect will read/see in this ring>"
    Funnel location:           <touchpoint(s) + section/timestamp where this ring is installed>
    Specialist write target:   <which specialist writes this — ad / advertorial / LP / VSL / email>
    Success signal:            <behavioral threshold for the transition this ring contributes to>

  ─── Ring 2 — "<strategic ring label>" ───
    [same fields — Beliefs / Status / Installation device / Persuasion technique / Emotional anchor / Supporting arguments / Content summary / Funnel location / Specialist target / Success signal]

  ─── Ring 3 — "<strategic ring label>" ───
    [same fields]

  ─── Ring N (procrastination ring) — "Procrastinating could harm me" ───
    [same fields]

  ─── Blocking beliefs to contradict (if any) ───
    Blocking belief 1:         "<the wrong belief the prospect currently holds>"
    Source of this belief:     <where it came from in the audience's history — industry messaging, past failure, cultural narrative>
    Contradiction technique:   [Counter-example | Hidden cost | Conflict of interest/disinformation]
    Installation device:       <where the dismantling content sits>
    Supporting arguments:
       - <specific argument / proof point for the dismantling>
    Funnel location:           <touchpoint + section>

  ─── Brand beliefs to reinforce ───
    B1 — understands:          Device + content summary + location
    B2 — competence:           Device + content summary + location
    B3 — track record:         Device + content summary + location
    B4 — trustworthy:          Device + content summary + location
    B5 — cares:                Device + content summary + location
    B6 — founder story:        Device + content summary + location

  ─── Device gaps (flagged) ───
    [If any ring has no strong device available, list it here so the specialist sees the weakness before writing]

  Source: chain-of-beliefs.md output + proof-elements.md output
```

### 3.9 Proof inventory block

The proof devices selected for THIS funnel — drawn from the brand's wider proof inventory. The specialist looks here to know which proof to deploy where.

```
PROOF INVENTORY (for this funnel)

  ─── Proof devices selected ───

  Category 1 — Concrete proof (data / studies / mechanism explanations):
    - <device 1>: source, location in funnel, ring(s) it supports
    - <device 2>: source, location in funnel, ring(s) it supports

  Category 2 — Demonstrations (case studies / before-after / live demos):
    - <device 1>: source, location, ring(s)
    - <device 2>: source, location, ring(s)

  Category 3 — Social proof (testimonials / track record / numbers):
    - Illustrious testimonials:
        - <testimonial reference>: source (testimonials.md row), location, ring(s)
    - Regular testimonials:
        - <testimonial reference>: source, location, ring(s)
    - Aggregate proof:
        - <e.g., "<N> customers served since <year>">: location, ring(s)

  Category 4 — Authority / credentials:
    - <device>: source, location, ring(s)

  Category 5 — Risk-inversion / guarantee (lives in offer block §3.6):
    - Already documented in Offer §3.6 component 5; cross-reference: [yes/no]

  Category 6 — Specificity (named ingredients / named techniques / named processes):
    - <device>: source, location, ring(s)

  ─── False Proof check ───
     Any proof device weakly anchored or fabricated? [No | Yes — list and reconsider]

  Source: proof-elements.md output + brands/<brand>/testimonials.md (selective)
```

### 3.10 Reference pointers for this funnel

Pointers to the brand wiki sections this funnel will pull from. The specialist follows these pointers to consume the source material. This block is short — it does NOT duplicate content from the brand wiki, it lists what to consult.

```
REFERENCE POINTERS

  Brand foundational files (always consult):
    - brands/<brand>/brand.md
    - brands/<brand>/brand-copy-rules.md
    - brands/<brand>/products.md
    - brands/<brand>/offers.md

  Avatar files (this funnel's segment(s)):
    - brands/<brand>/avatars/<segment>.md
    - [secondary avatar if applicable]

  Testimonials to use (specific rows):
    - Testimonial <row-id> — <one-line context: "Illustrious authority cite for Ring 3">
    - Testimonial <row-id> — <one-line context>
    - [list all selected testimonials with their funnel role]

  Swipe pieces to model:
    - Swipe <row-id> — <one-line context: "argumentative skeleton for the advertorial structure">
    - [list applicable swipe references with their funnel role]

  Transcripts to mine:
    - Transcript <slug> — <one-line context: "founder origin story segment for B6 brand belief">
    - [list applicable transcripts with their funnel role]

  Procedures to follow (if any):
    - Procedure <slug> — <one-line context: "operational guide for OTO page mechanics">

  Competitor materials (only if differentiation calls for it):
    - Competitor <slug> — <one-line context: "competitor's claim to contradict in the advertorial">

  Notes for specialists:
    - This brief contains ONLY funnel-specific decisions.
    - For brand voice, tone, glossary, full vocabulary, full testimonial set, and brand copy rules — read the files above.
    - If a specialist needs material not pointed to here, escalate to the Strategist before improvising.

  Source: brand wiki (selective)
```

---

## 4. Part 2 — Funnel execution (block formats)

### 4.1 Funnel map summary

The high-level shape of the funnel. One-glance overview before the per-touchpoint detail.

```
FUNNEL MAP

  Funnel pattern:              <pattern name from funnel-architecture.md §4, or "custom" + description>
  Awareness level:             <from §3.3>
  Total touchpoints (primary):  <N>
  Satellite sub-funnels:       <M (list names)>
  Branching / segmentation:    [None | Yes — described in §4.4]

  Sequence (primary):
    Touchpoint 1 → Touchpoint 2 → Touchpoint 3 → ... → Conversion event
    (then) → Satellite 1 OTO → ... → Final confirmation

  Verification results (from funnel-architecture.md §8):
    Audit 1 — Orphan rings:           [PASS | FAIL]
    Audit 2 — Dead-weight touchpoints: [PASS | FAIL]
    Audit 3 — Emotional discontinuity: [PASS | FAIL]
    Audit 4 — Friction:                [PASS | WARNING]
    Ship recommendation:              [ship-as-is | quick-fix-then-ship | restructure-required]

  Source: funnel-architecture.md output
```

### 4.2 Per-touchpoint specification — the writer's section

For each touchpoint in the primary funnel, one self-contained block. The specialist writing this touchpoint reads ONLY this block + Part 1 strategic foundations and has everything needed to write.

```
TOUCHPOINT <N> — <name, e.g., "Static ad — Meta cold traffic">

  Specialist to write this:    <ad / advertorial / lp / vsl-and-video-ad / email / hook / bullet-point / headline / upsell>

  ─── Form specifications ───
    Form:                      <physical form — e.g., "static 1080x1080 + 150-char caption + CTA button">
    Length / duration target:  <e.g., "150 chars caption max; ad creative single-image">
    Format constraints:        <platform-specific: character limits, aspect ratios, etc.>

  ─── Strategic positioning of this touchpoint ───
    Awareness level entering:  <state from §3 of funnel-architecture.md, e.g., "Unaware / Scrolling">
    State exiting required:    <state, e.g., "Curious">
    Dominant lever:            <the single most powerful piece of content/argument/image that produces the transition — be specific>
    Success signal:            <behavioral threshold, e.g., "CTR > 1.2%">

  ─── Rings installed here ───
    Ring(s) carried by this touchpoint:
      - Ring <N> partial: install only <subset of beliefs>
      - Ring <N+1> full: install fully here
    [Cross-reference: §3.8 has full per-ring detail with devices and arguments]

  ─── Big Idea expression for this touchpoint ───
    Expression:                "<how the Big Idea shows up here — from §3.7>"
    Hook angle:                <the specific angle for this touchpoint>

  ─── Piece-level persuasion architecture ───
    [Source: `core/strategic-frameworks/persuasion-techniques.md` §3 "Three operational levels".]
    [These are the techniques that operate on the WHOLE piece, not on single rings. Per-ring tactical techniques live in §3.8 of this brief.]

    Gradualization sequence:   <the chain of belief itself acts as the gradualization architecture for the piece — each ring of §3.8 is one acceptance step in sequence. State here any non-default ordering or step compression specific to this touchpoint.>

    Camouflage frame:          [None | News / scoop | Scientific discovery | Rediscovered / suppressed knowledge | Conspiracy / hidden-interest | Personal story / memoir]
                               [Frame is the wrapper that earns the open. Defaults to None for Most Aware / Product Aware where direct response is normal; typically present for Solution Aware (light), Problem Aware (medium), Unaware (mandatory).]
                               Frame rationale: <one line — why this frame fits the brand voice and audience>

    Dominant continuous techniques:
      Intensification:         [On | Off]  — typically ON in body for Solution / Problem / Unaware; calibrated for Product Aware; minimal for Most Aware
      Identification:          [On | Off]  — typically ON for identity-driven products; calibrated to brand voice

  ─── Devices & arguments to deploy here ───
    [Pointer to §3.8 belief numbers — never copy chain content into touchpoint blocks (per §9.2): "see Ring <N> in §3.8"]
    - Device 1: <name + pointer to its Ring in §3.8>
    - Device 2: <name + pointer to its Ring in §3.8>
    - Proof/ammunition to use:
      - <specific testimonial / data / case study / quote — with pointer to source in §3.10>

  ─── Emotional anchors (optional — only where a beat needs to feel a specific emotion) ───
    [Source: `core/writing/emotional-intelligence.md`. Anchor specific beats — NOT all beats.]
    [Anti-saturation rules:
       - Max 3 anchors per touchpoint
       - Never two consecutive anchors from the same emotion family
       - Mark ONLY beats that genuinely require emotional vividness
       - All unmarked beats are written in neutral / rational register by default
       - If no beat in this touchpoint needs emotional vividness, leave this whole block empty / omit it]
    Anchors:
      - <beat label (e.g., "Opening hook", "Bridge to CTA", "Ring 4 procrastination beat")> → <emotion name from emotional-intelligence.md> (intensity: <point on the emotion's continuum, e.g., "worry" inside the anxiety continuum>)
    [continue per anchor — typically 0 to 3 per touchpoint]

  ─── Offer reference (if this touchpoint touches the offer) ───
    Offer surface here:        [None | Mention only | Full offer block | OTO-style direct]
    Specific offer elements to emphasize: <bonus / scarcity / guarantee — depending on touchpoint>

  ─── Funnel position of each ring within this touchpoint ───
    [For longer touchpoints — where exactly within the page/video/email each ring lives]
    Ring <N>:                  <section, scroll position, timestamp>
    Ring <N+1>:                <section, scroll position, timestamp>

  ─── Brand-wiki materials to consume ───
    [Specific pointers from §3.10 that this touchpoint draws from]
    - Testimonial <row-id> for Ring <N>
    - Transcript <slug> excerpt for B<n> brand belief
    - Swipe <row-id> as structural model for this touchpoint

  ─── Writing notes specific to this touchpoint ───
    [Funnel-specific notes only — brand voice rules are in the brand wiki]
    [e.g., "This ad targets a retargeting audience that already holds B1-B3, so skip brand-intro framing"]
    [e.g., "This advertorial is the first long-form piece of the campaign; the UM is revealed here for the first time — make the reveal feel earned, not announced"]

  ─── Out-of-scope for this touchpoint ───
    [Explicit list of what NOT to install/argue here — to prevent ring duplication or over-reach]
    [e.g., "Do NOT install Ring 3 — that lives on the LP. The advertorial ends after Ring 2 with the transition CTA"]
```

### 4.3 Satellite sub-funnels

For each post-purchase satellite (OTO / upsell / downsell / continuity / cross-sell), a dedicated block following the same per-touchpoint structure as §4.2 but with the satellite-specific anatomy from `funnel-architecture.md` §2.5.

```
SATELLITE <N> — <name, e.g., "Premium upgrade OTO — thank-you page">

  Specialist to write this:    <upsell / lp / email>
  Satellite type:              [Pure upgrade | Adjacent OTO | Premium tier upgrade | Continuity | Cross-sell]
  Trigger:                     <where in the primary funnel this satellite fires — e.g., "immediately post-checkout, before order confirmation page">
  Post-purchase momentum window: [Yes — fires immediately | No — fires later, specify timing]

  ─── Beliefs carried over from the primary purchase (DO NOT reinstall) ───
    - B1-B6 (already validated by the act of paying)
    - #14 (I can do this — already accepted)
    - #16 (I deserve this — already accepted)
    - #21 (risk acceptable — validated by primary guarantee)
    - <any other beliefs the primary funnel installed that carry over>

  ─── Mini-chain to install here ───
    Ring 1 (mini) — "<label>":
      Beliefs to install:      <e.g., #1 new problem, #18 new UM>
      Installation device:     <device>
      Supporting arguments:    <specific arguments>
      Content summary:         <1-2 sentences>
    [continue for each mini-ring — typically 2-4 total]

  ─── Form specifications ───
    Form:                      <e.g., "single-page upgrade pitch + accept/decline buttons (no cart back-out)">
    Length / duration target:  <e.g., "page length 800-1,200 words + 60-second optional video">
    Format constraints:        <platform/technical limits>

  ─── Offer for this satellite (its own offer) ───
    Product:                   <satellite product>
    List price:                €<X>
    Offer price:               €<Y>
    Why this price makes sense post-primary: <re-anchor #25 affordable>
    Bonuses / extras:          <if any>
    Guarantee:                 <typically inherits primary, but may be specific>
    Scarcity:                  <page-only / time-limited / decline-locks-it-out>

  ─── Big Idea expression for this satellite ───
    Expression:                <how the Big Idea continues here, or a related satellite idea>
    Hook angle:                <e.g., "What you just got was X. Here's what makes X complete.">

  ─── Piece-level persuasion architecture ───
    [Same logic as §4.2; satellites typically use lighter persuasion architecture because the buyer is already in momentum state.]

    Gradualization sequence:   <the mini-chain of this satellite acts as the gradualization architecture. State any non-default sequencing or step compression.>

    Camouflage frame:          [None | scoped variation appropriate to a post-purchase context — typically None or light Personal-story]
                               [Heavy camouflage frames are usually unnecessary in satellites — the buyer has already passed the trust gate.]
                               Frame rationale: <one line>

    Dominant continuous techniques:
      Intensification:         [On | Off]  — used sparingly in satellites to avoid breaking the post-purchase mood
      Identification:          [On | Off]  — typically ON to reinforce the buyer's identification with the brand and decision

  ─── Emotional anchors (optional — only where a beat needs to feel a specific emotion) ───
    [Source: `core/writing/emotional-intelligence.md`. Same rules as §4.2: anchor specific beats only, never all.]
    [Anti-saturation rules:
       - Max 3 anchors per satellite
       - Never two consecutive anchors from the same emotion family
       - Mark ONLY beats that need emotional vividness — everything else stays in neutral register
       - Satellites often need fewer anchors than primary touchpoints (buyer is already in momentum state — heavy emotional re-engagement can backfire)
       - If no beat needs an anchor, leave this block empty / omit it]
    Anchors:
      - <beat label> → <emotion name> (intensity: <continuum point>)
    [continue per anchor — typically 0 to 3 per satellite]

  ─── Specialist writing notes ───
    [Satellite-specific guidance]
    [e.g., "The OTO page must reference the just-completed purchase explicitly — anchor the satellite to the momentum of the primary action"]
    [e.g., "Decline button text must be a 'no' that takes responsibility (e.g., 'No thanks, I'll skip the upgrade and miss this discount') — not a passive 'maybe later'"]

  ─── Brand-wiki materials to consume ───
    <pointers — same format as §4.2>
```

### 4.4 Branching / segmentation (if applicable)

For funnels with quiz-based branching, segmentation routing, or retargeting paths.

```
BRANCHING / SEGMENTATION

  Branching trigger:           <touchpoint where prospect is routed — e.g., "Quiz outcomes after Touchpoint 2">
  Segmentation logic:          <how segments are determined>

  ─── Branch / Segment A — <name> ───
    Segment characteristics:   <who lands here>
    Beliefs already held:      <segment-specific carryovers>
    Rings to install in this branch: <may differ from primary chain>
    Touchpoints in this branch: <may diverge from primary funnel sequence>
    [Each branch touchpoint follows §4.2 format]

  ─── Branch / Segment B — <name> ───
    [same fields...]

  Convergence point (if any):  <touchpoint where branches reunite, e.g., "all segments reach the same checkout">
```

---

## 5. The Chain of Beliefs table — central artifact

The chain block (§3.8) is the most-consulted artifact in the brief. The format chosen for it is **ring-by-ring detailed** rather than a flat table — for reasons that matter operationally.

### 5.1 Why ring-by-ring detail beats a flat table

A flat table would show columns (Ring | Belief | Device | Location) and rows (one per ring). It's compact but the specialist writing one touchpoint has to scan rows + columns to assemble what they need.

The ring-by-ring detailed format places **every piece of information the specialist needs for that ring within a single visual block**:

- The ring label (what this ring achieves strategically)
- The specific beliefs being installed (numbered references)
- The device(s) doing the installation
- The supporting arguments / proof / ammunition (the actual content to deploy)
- The content summary (what the prospect will read/see)
- The funnel location (where in the funnel this ring is installed)
- The specialist writing it
- The success signal (how the transition is verified)

The specialist working on a touchpoint reads its per-touchpoint block in §4.2, sees the rings assigned, and jumps to those rings in §3.8 — and in each ring block has the complete picture. No scanning. No cross-referencing across rows.

### 5.2 Two reading patterns

**Vertical reading (per ring)**: when the specialist is installing one specific ring, they read its full block top-to-bottom. Used during writing.

**Horizontal reading (per touchpoint)**: when the specialist needs to know which rings live in their touchpoint, they read the per-touchpoint block (§4.2) which lists ring numbers — then jumps to those ring blocks in §3.8.

Both patterns flow from the same data laid out once.

### 5.3 What goes into "Supporting arguments / proof / ammunition"

This is the field that matters most for specialists writing the actual copy. It must contain the **specific content material** the writer will use, not abstract device names.

Wrong (too abstract):
> *Supporting arguments: testimonials, data points, founder story.*

Right (specific):
> *Supporting arguments:*
> *- Testimonial #7 from brands/trainerbrand/testimonials.md — Marco's quote on revenue uplift (Illustrious, used at advertorial section 4)*
> *- Data point: "78% of trainers who launch a digital product abandon it within 90 days" — source: 2023 IDEA Health & Fitness Industry Report, p. 23*
> *- Founder anecdote: the 2019 client-loss moment from transcripts/founder-origin-story.md minutes 12:30-14:15 — use as B6 anchor for Ring 1*
> *- Counter-example for blocking belief: "I tried online courses and they didn't work" → respond with case study #2 (a trainer who tried 3 generic courses, failed, then succeeded with the protocol-driven approach — case in testimonials.md row 12)*

The specialist reads this and knows exactly what to fetch from the brand wiki. No improvisation about *which* testimonial; no guessing about *what* data point. The Strategist has done the selection; the specialist executes.

### 5.4 The Strategist's job here

Producing this block well is the Strategist's most labor-intensive output. It requires:

1. Reading the brand wiki for all available material (testimonials, transcripts, swipe, prior campaigns)
2. Matching each ring to the strongest available device + ammunition
3. Naming specific rows / specific quotes / specific moments — not categories
4. Flagging device gaps where no strong material exists (the specialist needs to know what's missing so they can either request new material or use a weaker substitute consciously)

A weak chain block is the #1 failure mode of a brief. A specialist receiving a brief with "Ring 2: use testimonials and data points" cannot write efficient copy — they have to do the Strategist's selection work themselves, which is both slower and lower-quality (the specialist doesn't have the full discovery context).

---

## 6. Reading the brief — by specialist role

How each specialist consumes the brief. Cuts down on "do I need to read all of this?" friction.

### Every specialist (regardless of role)

Always reads:

- §3.1 Meta / Header (to confirm version + status)
- §3.2 Mass Desire
- §3.3 Awareness Level
- §3.5 Avatar reference
- §3.7 Big Idea
- §3.10 Reference pointers (to know what to pull from the brand wiki)
- Their specific per-touchpoint block in §4.2 or §4.3

Then dives into specific blocks based on role:

### Hook specialist

Primary focus:
- §3.7 Big Idea (the hook angle expression for the specific touchpoint)
- §4.2 / §4.3 the per-touchpoint block for the touchpoint whose hook is being written
- §3.8 Ring 1 (typically the hook installs Ring 1 partially)

May skip detailed reading of:
- §3.6 Offer (only the bottom-of-funnel hooks need this)
- §3.9 Proof inventory (only when the hook is built around a proof element)

### Headline specialist

Same primary focus as hook (often the same touchpoint), with addition of:
- §3.4 Sophistication & UM (the headline often references the UM at higher sophistication stages)

### Ad specialist

Reads everything every specialist reads, plus:
- §4.2 Touchpoint 1 (typically the ad)
- §3.8 Ring 1 (and Ring 2 if the ad carries 2 rings)
- §3.10 Reference pointers (for image / testimonial / data choices)

### Advertorial specialist

Reads everything every specialist reads, plus:
- §3.4 Sophistication & UM (full UMP/UMS articulation — the advertorial usually carries the mechanism reveal)
- §4.2 the advertorial touchpoint
- §3.8 the rings assigned to the advertorial (typically Ring 1 + Ring 2)
- §3.9 Proof inventory (advertorials lean heavily on proof)

### Landing / Sales page specialist

Reads everything every specialist reads, plus:
- §3.6 Offer (full block — LP carries the offer)
- §3.8 the rings assigned to the LP (often Rings 3-4)
- §3.9 Proof inventory (LP often hosts the densest proof distribution)
- §4.2 the LP touchpoint block

### VSL specialist (any duration variant)

Reads everything every specialist reads, plus:
- §3.4 Sophistication & UM (the VSL typically delivers the full mechanism arc)
- §3.6 Offer (the VSL closes with the offer)
- §3.7 Big Idea (the VSL lead is the Big Idea's most extended expression)
- §3.8 all rings assigned to the VSL (VSLs can carry 3-8 rings)
- §3.9 Proof inventory
- §4.2 the VSL touchpoint block

### Email specialist

Reads everything every specialist reads, plus:
- §3.8 the rings assigned to the email sequence (each email typically carries 1 ring)
- §4.2 each email touchpoint block (one block per email if the sequence is documented per-email)

### Upsell specialist

Reads everything every specialist reads, plus:
- §4.3 the satellite block they're writing
- §3.6 Offer (to understand the primary offer the satellite anchors to)
- The mini-chain inside the satellite block

### Bullet-point specialist

See [bullet-point-specialist](section-specialists/bullet-point-specialist.md). Primary focus:
- §3.8 (bullets — formerly "fascinations" — install or tease specific beliefs from the chain)
- §3.6 Offer (bullets often tease bonuses, guarantees, or specific offer elements)
- §4.2 the touchpoint hosting the bullets (LP, advertorial, email)

### Blog specialist

Reads everything every specialist reads, plus:
- §3.7 Big Idea (blog articles are satellite expressions of the campaign's Big Idea)
- §4.3 the satellite block for the article/newsletter touchpoint (when the blog piece is declared as a satellite)
- §3.8 only the ring(s) the article carries — blog pieces typically install 1 ring at most

### Book specialist

Reads everything every specialist reads, plus:
- §3.8 Chain of Beliefs in full — the chain is the book's spine (chapter sequence follows the ring sequence)
- §3.4 Sophistication & UM (the book carries the most extended mechanism argumentation)
- §3.9 Proof inventory (books host the deepest proof distribution)

### Infomercial specialist

Companion to the VSL specialist — reads the same blocks as the VSL specialist for the VSL touchpoint, plus:
- §4.2 the VSL touchpoint block fields (form, duration, dominant lever, rings, Big Idea expression) — the infomercial layers apply on top of that touchpoint spec
- §3.6 Offer (the two-CTA architecture and DEMO craft hang on the offer block)

---

## 7. Status & versioning

The brief is a living document until the campaign goes live.

### 7.1 Status states

| Status | Meaning | Who can change it |
|---|---|---|
| **Draft** | Strategist is still building; not ready for specialist consumption | Strategist |
| **In-Review** | Sent to copywriter for review; awaiting confirmation/edits | Copywriter |
| **Approved** | Copywriter has signed off on strategic foundations + funnel architecture; specialists can begin writing | Copywriter |
| **Locked** | All specialist deliverables are in production; no further changes accepted without explicit re-version | Copywriter |
| **Live** | Campaign is in market; brief is in archive mode | Strategist or Copywriter |

### 7.2 Versioning

Standard semantic versioning per brief:

- **vMajor.Minor** (e.g., v2.3)
- **Major bump** on structural changes (awareness level changed, funnel pattern changed, offer materially restructured)
- **Minor bump** on refinements (chain device swapped, proof addition, single touchpoint added)

Each version stored in `brands/<brand>/funnel-briefs/<funnel-slug>-v<N.N>.md`. Old versions retained — never deleted.

### 7.3 Update protocol

If during the writing phase a specialist surfaces new information that affects the brief:

1. **Specialist flags the gap or change need to the Strategist** (does not patch the brief themselves)
2. **Strategist evaluates**: structural change (major bump) vs. refinement (minor bump) vs. patch (no version bump if the brief was simply incomplete in a non-strategic way)
3. **Strategist updates the brief** + bumps version + adjusts status if needed (e.g., back to In-Review if a strategic change requires copywriter sign-off again)
4. **Strategist notifies the copywriter and any affected specialists** that the brief has been updated

### 7.4 Sign-off mechanic

The copywriter signs off when:

- All strategic foundations are reviewed and accepted
- The funnel architecture is committed (audit results acceptable)
- The chain block is reviewed ring-by-ring with the copywriter
- The offer block is reviewed and locked (or accepted-with-known-leaks)
- Reference pointers are verified to exist in the brand wiki

Sign-off triggers transition Draft → Approved. Specialists may begin work only once the brief is Approved.

---

## 8. Worked example — complete end-to-end brief

> **Worked example — deep-dive reference. NOT needed to fill the template; read it the first time you compile a brief, skip afterwards.**
>
> **This section exists ONLY in this template file.** A real funnel brief does NOT contain a "worked example" block — the real brief IS the worked example for that specific funnel.

The example below illustrates a complete brief for a hypothetical campaign:

- **Brand**: a personal-trainer's online education brand (fictitious, used for illustration)
- **Funnel**: launch of a €497 program teaching personal trainers how to build their first digital product
- **Awareness level**: Problem Aware (trainers know income is flat / they want extra revenue, but don't know the specific cause or solution)
- **Funnel pattern**: Advertorial bridge + 1 OTO satellite (premium upgrade)

---

```
FUNNEL BRIEF

  Brand:                   trainerbrand
  Funnel name:             "Digital Product Launchpad — Q2 launch"
  Funnel slug:             dpl-q2-launch
  Campaign type:           Launch
  Primary product(s):      digital-product-launchpad
  Primary channel:         Meta (cold) + retargeting layer

  Strategist:              Copy Genius Strategist
  Copywriter:              <name>
  Status:                  Approved
  Version:                 v1.0
  Created:                 2026-04-08
  Last updated:            2026-04-15
  Sign-off date:           2026-04-15

  Brand wiki references this brief depends on:
    - brands/trainerbrand/brand.md
    - brands/trainerbrand/brand-copy-rules.md
    - brands/trainerbrand/products.md
    - brands/trainerbrand/offers.md
    - brands/trainerbrand/testimonials.md
    - brands/trainerbrand/swipe.md
    - brands/trainerbrand/avatars/independent-trainer.md
    - brands/trainerbrand/transcripts/founder-origin-story.md
    - brands/trainerbrand/transcripts/case-study-marco-2024.md

──────────────────────────────────────────────────────────────────────

MASS DESIRE

  Selected desire:           Income leverage independent of personal hours
  Product performance:        Program teaches trainers to convert their expertise into a digital product they sell while training in person
  Desire dimensions:
    Intensity:                High
    Staying power:            High (chronic, not seasonal)
    Scope:                    Niche (independent fitness professionals)
    Urgency:                  Medium (stable but quietly worsening — see Ring 1)
  Dominant dimension:        Staying power + Intensity (the avatar has lived this pain for years)
  Why this desire (not another): More acute than "earn more from training" because it dissolves the hours-bound ceiling; more specific than "make passive income" because it leverages the asset they already have (expertise + audience).

──────────────────────────────────────────────────────────────────────

AWARENESS LEVEL

  Selected level:            Problem Aware
  Audience temperature:      Cold (Meta cold traffic) + Retargeting layer (warm, see §4.4)
  Beliefs already held by the audience:
    - #1 (problem exists — they know income is flat)
    - #2 (problem is priority — they think about it weekly)
    - B-existence (they know about digital products as a concept)
  Beliefs to install:
    Ring 1: #3 (worsening), B1 (brand understands)
    Ring 2: #5 (missing 1%), #6 (previous understanding wrong), #8 (past failures explained)
    Ring 3: #9 (category works), #10 (root cause), #17 (specific mechanism), #18 (brand's UM)
    Ring 4: #4 (won't resolve on its own), #7 (cost exceeds price), #15 (results worth cost), #20 (scarcity), #21 (risk acceptable), #25 (afford), #26 (mechanism guarantee)
  Minimum rings required:    4

  Operational implications:
    What this awareness level requires the copy to DO:
      - Open with the lived experience of the problem (not a feature claim)
      - Reveal a mechanism for the cause that they haven't heard before
      - Bridge the mechanism to the brand's specific solution
      - Discharge the blame for past failures (they tried things — those failed for a reason that wasn't their fault)
    What this awareness level requires the copy to NOT do:
      - NOT name the product before the problem mechanism is installed
      - NOT use "income freedom" / "passive income" language (Stage 4 sophistication — that vocabulary is exhausted in this market)
      - NOT lead with social proof (no testimonials in the ad or advertorial opening — they need the brand understanding first)

──────────────────────────────────────────────────────────────────────

SOPHISTICATION & UNIQUE MECHANISM

  Market sophistication stage: Stage 4
  Stage description:           Many competitors selling "courses for trainers" with claim-based advertising; market is fatigued on direct promises
  Strategic implication of stage:  UM required; differentiation must rest on a named mechanism

  UM needed?                   Yes
  UM type:                     UMP (Problem Mechanism) + UMS (Solution Mechanism) + bridge
  UM name:                     "The Hours Trap → The Asset Loop"
  UM in one sentence:          Trainers don't lack effort or skill — they lack a productized asset that monetizes their expertise outside the hours they work. The Asset Loop is a 4-stage process that builds that asset and routes existing audience into it.
  5-step articulation:         See brands/trainerbrand/brand.md § "The Hours Trap → The Asset Loop"
  Reason Why (proof spine):    The 87 trainers who completed the program in 2024 saw an average of +€2,847/month within 90 days. Brand-internal data; full case studies in testimonials.md.
  Side of the argument:        Bridge (UMP introduces Hours Trap; UMS introduces Asset Loop; the bridge is the moment when trainers realize the trap and the loop are two sides of the same insight)

──────────────────────────────────────────────────────────────────────

AVATAR REFERENCE

  Primary segment:             independent-trainer (full profile: brands/trainerbrand/avatars/independent-trainer.md)
  Secondary segment(s):        None for this campaign

  Funnel-relevant avatar facets:
    Identity markers in copy:
      - "I trade my hours for income"
      - "I'm good at what I do, but I can't scale myself"
      - "I have an audience — small but loyal"
    Lived experience anchors:
      - The 5 AM client + 9 PM client sandwich days
      - The "I cancelled vacation again" moment
      - Watching a YouTube trainer with 10x their following sell a course
    Blocking beliefs to dismantle:
      - "I tried selling a course before and it didn't work" → counter-example technique (Ring 2 area)
      - "My audience is too small to monetize" → hidden-cost technique (Ring 3 area)
    Vocabulary they own:
      - "Programming" (not "training plan")
      - "Sessions" (not "lessons")
      - "Body composition" (not "weight loss")
    Vocabulary to avoid:
      - "Passive income" (exhausted)
      - "Funnel" (too marketer-y for this avatar)
      - "Lead magnet" (too marketer-y)
    Purchase capacity for this offer: Comfortable (€497 vs typical trainer income €3-5K/month)

──────────────────────────────────────────────────────────────────────

OFFER

  Mode of work:                Construction (built for this launch — full new offer)

  ─── The 7 components ───

  1. Product / service:
     Name:                     "Digital Product Launchpad"
     What it is:               8-week structured program: video modules + weekly group calls + 1:1 product-review call
     Delivery method:          Hybrid (digital modules + live calls)
     Delivery timing:          Cohort starts 2026-05-13; modules drip weekly
     Differentiation:          Built specifically for fitness professionals (not generic course creators); product-review call is unique vs. competitors

  2. Benefits:
     Functional:
       - 32 video modules covering ideation → production → launch → scaling (tied to the 8-week curriculum)
       - 8 group calls (tied to weekly cohort rhythm)
       - 1:1 product-review call before launch (tied to the dedicated coach time)
     Experiential:
       - The relief of "I have a thing" the first time their product lands on a customer's screen
       - The first sale notification on their phone during a training session
     Emotional:
       - Pride: "I built something that works while I work"
       - Vindication: "I was right that my expertise had more value than my hours suggested"

  3. Price + terms:
     List price:               €797
     Offer price:              €497
     Discount:                 €300
     Reason for discount:      Launch pricing while collecting case studies for v2 — pricing locks at €797 after May 13
     Payment options:          Single payment OR 3 monthly installments of €177
     Delivery mechanics:       Cohort start 2026-05-13; access opens 7 days before
     Refund mechanics:         See guarantee below
     What's included vs extra: All modules, calls, and review call included; community access included for 12 months

  4. Bonuses:
     Bonus 1 — "The 30-Day Launch Playbook":
       Description:            Daily checklist + scripts for the first 30 days after the program ends
       Why it matters:         Removes the "now what?" gap most trainers hit after a course ends
       Future benefit:         You ship your first 30 sales while accountability is still warm
       Stated value:           €197
       Immediate access?       Yes
     Bonus 2 — "Cohort Community — 12 months":
       Description:            Private community channel with cohort + alumni + monthly Q&A with founder
       Why it matters:         Peer accountability + access to people who've crossed the line
       Future benefit:         You stay accountable past the 8 weeks and learn from alumni who've scaled past you
       Stated value:           €297
       Immediate access?       Yes
     Bonus 3 — "Founder's Product Audit (60 min, 1:1)":
       Description:            One additional 1:1 call with the founder before public launch
       Why it matters:         A second pair of expert eyes catches positioning gaps the cohort coach won't
       Future benefit:         Launch with a product whose positioning has been audited by the person who's done this 87 times
       Stated value:           €497
       Immediate access?       Yes (booked within 14 days of program start)
     Total stacked value:      €1,288 (program €497 list + bonuses €991)

  5. Risk inversion:
     Guarantee name:           "The Launch Guarantee"
     Guarantee type:           Mixed (Conditional + Per-result-missed)
     Guarantee duration:       90 days from program start
     Description length:       ~220 words
     Description verbatim:     "Either you complete the program with a launched product earning revenue within 90 days, or we extend your access for free until you do AND refund 100% of the program fee. The condition: you attend at least 6 of the 8 group calls and submit your product for the 1:1 review. If you do that and your product hasn't earned a single euro in 90 days, you get every euro back — and you keep the bonuses, the community access, and the recordings. The reason we can offer this: in 2024, 87 of 89 trainers who met the participation condition launched a revenue-earning product within 90 days. The 2 who didn't got refunded under this same guarantee. We're betting on you because the data says we should. — Founder signature"
     Anchored to UM?           Yes (the guarantee specifically references the Asset Loop completion — belief #26)
     3-rules check:            Competitors-would-think-crazy: Y | Described-not-stamped: Y | Named: Y
     Additional risk-reversal elements:
       - Transparent participation condition (signals brand seriousness, not desperation)
       - 87/89 historical case stat (concrete proof, not slogan)

  6. Scarcity / urgency:
     Type:                     Cohort + Tier
     The actual limit:         Cohort cap 40 spots; tier pricing locks May 13
     Anchored reason:          Cohort cap = capacity to deliver 1:1 review call within the program window; tier pricing = launch discount window
     Verifiable?               Yes
     Phantom-scarcity check:   Pass

  7. Call to action:
     Future pacing summary:    90 days from now you're getting first-sale notifications during sessions; 6 months in, your monthly digital revenue exceeds your worst-month training revenue; 12 months in, the digital revenue is large enough to let you reduce training hours by 30% with no income loss.
     Contrast:                 Yes — "stay on the hours treadmill vs. own an asset that works when you don't"
     Exact-action steps:       1. Click "Join the cohort" 2. Choose single payment or 3-installment 3. Receive welcome email within 5 minutes 4. Access opens 2026-05-06, cohort starts 2026-05-13
     Cost of inaction:         Every month without the asset = another €2,847 (cohort average) of revenue you don't earn. Over the 8 weeks of waiting for the next cohort = €5,694 of potential revenue uncaptured.
     CTA verbatim suggestion:  "Join the May Cohort — €497 (or 3 × €177)"

  ─── Offer type (per offer-construction.md §4) ───
     Primary type:             Type 5 (Launch offer with deadline) + Type 3 (Installments)
     Combined with:            Type 6-light (cohort limit)

  ─── Tier structure ───
     Standard:                 €497 — full program + 3 bonuses
     Premium:                  €997 — Standard + 6 months of 1:1 coaching (post-program) — offered as OTO satellite, see §4.3
     VIP:                      Not offered for this campaign

  ─── Audit / leak summary ───
     Not applicable (Construction mode — built clean from start)

──────────────────────────────────────────────────────────────────────

BIG IDEA

  Big Idea name:               "The Hours Trap"
  The Big Idea in one sentence: The reason your income is flat isn't your skill or your effort — it's that you're trapped inside a model that turns your hours into your ceiling, and there's a specific way out called the Asset Loop.
  Why this idea (over alternatives): Names a felt experience the avatar has lived for years but has never had a name for. Stage 4 sophistication demands a named mechanism — "Hours Trap" + "Asset Loop" gives the avatar vocabulary to think about their situation. Competing alternatives ("digital products for trainers", "scale your business") were rejected as Stage 3 — too feature-forward and category-level.
  Idea structure:
     Hook angle:               Contrarian — "Your problem is not what you've been told it is"
     Promise embedded:         Promise of finally understanding why effort hasn't worked, and what specifically does
     Mechanism it implies:     The Hours Trap (UMP) + The Asset Loop (UMS)
     Emotional charge:         Vindication + hope
  Big Idea expressions across the funnel:
     Ad expression:            "If you train 30+ hours a week and your income still won't grow — there's a name for what's stopping you."
     Advertorial expression:   "Most trainers think they need more clients. The 87 who escaped the Hours Trap last year discovered something different."
     Landing expression:       "The Hours Trap: why the harder you train, the further from real income you get. And the Asset Loop that breaks it."
     VSL expression:           N/A (no VSL in this funnel)
     Email subject patterns:
       - "The Hours Trap [is named]"
       - "What 87 trainers found on the other side of the trap"
       - "The Asset Loop — first stage [the founder explanation]"
  False Big Idea check:        Pass

──────────────────────────────────────────────────────────────────────

CHAIN OF BELIEFS

  Awareness level:             Problem Aware
  Minimum rings required:      4
  Audience state:              Cold (Meta paid)
  Route:                       Route A — Original Problem (introduce the UMP as a new lens)

  ─── Ring 1 — "The brand truly understands my problem" ───
    Beliefs installed:         #1 (problem exists, reinforced), #2 (problem is priority, reinforced), #3 (problem is worsening — the new install), B1 (brand understands)
    Status:                    Partially held — #1 and #2 already; install #3 and B1
    Installation device(s):    Identity copy (5 AM/9 PM sandwich anchor) + Founder anecdote (2019 client-loss moment) + 1 industry data point
    Supporting arguments / proof / ammunition:
       - Specific identity anchor: the "5 AM client + 9 PM client + cancelled vacation" sandwich day. Vocabulary: "programming", "sessions" (per avatar file).
       - Founder anecdote: 2019 client-loss moment from transcripts/founder-origin-story.md (minutes 4:30-6:15) — the realization that "even my best clients can't pay me more than the hours allow"
       - Industry data point: "78% of independent trainers report income plateau within 4 years of starting" — source: 2024 IDEA Fitness Industry Survey, p. 23
       - Counter-example for blocking belief "my audience is too small": testimonial #14 from testimonials.md — trainer with 340 Instagram followers who built €4K/month from the program
    Content summary:           "Open with the lived day of the trainer — specific scenes — then a moment where the founder names what the trainer has felt but never articulated: 'this is the Hours Trap.' Cite the 78% statistic as confirmation it isn't personal failure."
    Funnel location:           Ad H1 + caption first 3 lines + advertorial sections 1-2
    Specialist write target:   Ad specialist (ad portion) + advertorial specialist (advertorial portion)
    Success signal:            Ad CTR > 1.2%; advertorial scroll-depth > 60% to reach Ring 2

  ─── Ring 2 — "The real cause of my problem is X (the Hours Trap)" ───
    Beliefs installed:         #5 (missing 1%), #6 (previous understanding wrong), #8 (past failures destined)
    Status:                    To install
    Installation device(s):    UMP full 5-step articulation + 1 illustrious cite + 1 data point
    Supporting arguments / proof / ammunition:
       - UMP 5-step articulation (from brand.md § "The Hours Trap"): hour-bound revenue model → ceiling effect → audience-asset disconnect → effort-doesn't-scale → trap.
       - Illustrious cite: Dr. <name>, fitness business researcher, on "the hours ceiling in service businesses" — quote from testimonials.md row 7
       - Data point: "Trainers earning >€80K/year all have non-hours revenue" — source: brand-internal 2023 survey of 240 trainers, page 4
       - Counter-example for blocking belief "I tried selling a course before": testimonial #2 in testimonials.md (Marco, tried 3 generic course platforms and failed before the program; case in transcripts/case-study-marco-2024.md)
    Content summary:           "Name the Hours Trap explicitly. Walk through the 5-step mechanism showing why effort cannot break it. Anchor with the industry research cite. Discharge the past-failure blame: 'You didn't fail those courses — they failed you because they were teaching generic course-creation, not the trainer-specific asset loop.'"
    Funnel location:           Advertorial sections 3-5
    Specialist write target:   Advertorial specialist
    Success signal:            Advertorial scroll-depth > 80%; CTA-click rate > 4%

  ─── Ring 3 — "There exists a product with a Useful Mechanism for that problem (the Asset Loop)" ───
    Beliefs installed:         #9 (category works), #10 (root cause), #17 (only this mechanism addresses cause), #18 (brand's UM)
    Status:                    To install
    Installation device(s):    UMP/UMS bridge + UMS full articulation + 1 before/after case + 5 testimonials (2 Illustrious + 3 Regular)
    Supporting arguments / proof / ammunition:
       - UMP/UMS bridge: "If the Hours Trap is the trap, the Asset Loop is the lever — the same insight read in the inverse direction"
       - UMS 5-step articulation (from brand.md § "The Asset Loop"): expertise extraction → audience-asset matching → minimum viable product → launch protocol → revenue routing
       - Before/after case study: Marco from transcripts/case-study-marco-2024.md — €2,200/month flat for 3 years → €5,047/month within 90 days of program completion
       - Illustrious testimonials: #7 (Dr. fitness researcher quote on mechanism); #11 (industry magazine feature on the program approach)
       - Regular testimonials: #2 (Marco), #14 (small-audience trainer), #18 (mid-tier trainer with cohort outcome)
       - Aggregate: "87 trainers completed in 2024 — 85 launched a revenue product within 90 days"
    Content summary:           "Introduce the Asset Loop as the inverse of the Hours Trap. Walk through the 5 stages. Anchor with before/after of Marco. Distribute the 5 testimonials across the page — Illustrious at section 4 (authority), Regular at section 6 (identification). Cite the 85/87 stat as proof of mechanism reliability."
    Funnel location:           LP sections 1-7
    Specialist write target:   LP specialist
    Success signal:            LP scroll past section 7 > 50% of LP visitors; scroll-past-offer > 30%

  ─── Ring 4 — "Procrastinating could harm me" ───
    Beliefs installed:         #4 (won't resolve on its own), #7 (cost exceeds price), #15 (results worth cost), #20 (now or never — cohort + tier), #21 (risk acceptable — Launch Guarantee), #25 (afford — installments), #26 (mechanism guarantee)
    Status:                    To install
    Installation device(s):    Cost-of-inaction calculation + Offer mechanic scarcity (cohort capacity + tier deadline) + Launch Guarantee description + Stack-pattern price decomposition
    Supporting arguments / proof / ammunition:
       - Cost-of-inaction: "€2,847/month avg revenue not earned × waiting for next cohort = €5,694 of potential income"
       - Scarcity anchor: cohort cap 40 spots (reason: 1:1 review call capacity); tier pricing locks May 13 (reason: launch window ends)
       - Launch Guarantee verbatim (from §3.6 component 5)
       - Stack: €497 list product + €197 + €297 + €497 bonuses = €1,288 total stacked; today €497
       - Installment math: €177/mo × 3 = €531 effective (8.6% surcharge for installment is real, not hidden)
       - Per-day dimensionalization: €497 / 56 days of program = €8.87/day "less than your morning protein"
    Content summary:           "Compress: the trap continues compounding, the price is small relative to the gain, the cohort is capped for a real reason, the guarantee removes the risk, the installments remove the affordability barrier. Close with the white world / black world contrast — 'choose: another quarter of the Hours Trap, or the May cohort.'"
    Funnel location:           LP sections 8-10 (offer block + CTA) + email 4 of the abandonment recovery sequence
    Specialist write target:   LP specialist (sections 8-10) + Email specialist (email 4)
    Success signal:            LP add-to-cart > 4%; cart-completion > 70%

  ─── Blocking beliefs to contradict ───
    Blocking belief 1:         "I've tried selling a course before and it didn't work"
    Source of this belief:     Past attempt with generic course platforms (Udemy / Teachable / etc.) that don't address trainer-specific dynamics
    Contradiction technique:   Counter-example
    Installation device:       Story segment in advertorial (around Ring 2) + Marco case study on LP
    Supporting arguments:
       - "Generic course platforms teach generic course-creation. The Asset Loop is trainer-specific because [reasons]."
       - Marco's case is the lived-experience version of this argument — he tried 3 generic platforms before
    Funnel location:           Advertorial section 4 (within Ring 2) + LP section 3 (within Ring 3)

    Blocking belief 2:         "My audience is too small to monetize"
    Source of this belief:     Comparison with high-follower trainer influencers
    Contradiction technique:   Hidden cost (and counter-example)
    Installation device:       Testimonial #14 (340-follower success) + math in Ring 4
    Supporting arguments:
       - "The cost of an audience that's too small to monetize is zero. The cost of waiting for an audience to grow first is €2,847/month for years."
       - Testimonial #14: trainer with 340 followers, €4K/month within 90 days
    Funnel location:           LP section 5 (within Ring 3) + email 2

  ─── Brand beliefs to reinforce ───
    B1 (understands):          Founder anecdote + identity copy at advertorial sections 1-2 (within Ring 1)
    B2 (competence):           Illustrious testimonial #7 (Dr. fitness researcher) + 87/89 stat at LP section 4
    B3 (track record):         "87 trainers completed in 2024" aggregate + 3 Regular testimonials at LP section 6
    B4 (trustworthy):          Transparent participation condition in the guarantee + the 2/89 refund acknowledgment ("the 2 who didn't [launch] got refunded under this same guarantee")
    B5 (cares):                The 1:1 product-review call (signals individual attention) + the Cohort Community 12-month duration (signals long-term relationship)
    B6 (founder story):        2019 client-loss moment in advertorial section 1 (Ring 1) — combines competence + identification + social proof in one device

  ─── Device gaps ───
    No critical gaps. Minor: a fresher 2025 industry survey would strengthen Ring 1 data point — currently using 2024. Acceptable for ship; flagged for v2 update post-cohort.

──────────────────────────────────────────────────────────────────────

PROOF INVENTORY (for this funnel)

  ─── Proof devices selected ───

  Category 1 — Concrete proof:
    - "78% trainers report income plateau within 4 years" — 2024 IDEA Fitness Industry Survey, p.23 — Ad caption + advertorial Ring 1
    - "Trainers earning >€80K/year all have non-hours revenue" — brand-internal 2023 survey, p.4 — advertorial Ring 2
    - "87/89 trainers launched within 90 days in 2024" — brand-internal data — LP Ring 3 + guarantee description

  Category 2 — Demonstrations:
    - Before/after case: Marco €2,200 → €5,047/month — transcripts/case-study-marco-2024.md — LP Ring 3
    - Before/after case: small-audience trainer (340 followers → €4K/mo) — testimonial #14 — LP Ring 3 + email 2

  Category 3 — Social proof:
    Illustrious testimonials:
      - Dr. <name>, fitness business researcher — testimonials.md row 7 — advertorial Ring 2 (mechanism credibility) + LP section 4 (B2 brand competence)
      - Industry magazine feature — testimonials.md row 11 — LP section 4
    Regular testimonials:
      - Marco — testimonials.md row 2 — LP section 6 (Ring 3 identification) + email 3
      - 340-follower trainer — testimonials.md row 14 — LP section 6 (counter-blocking-belief) + email 2
      - Mid-tier trainer cohort outcome — testimonials.md row 18 — LP section 6 + email 3
    Aggregate proof:
      - "87 trainers completed in 2024; 85 launched within 90 days" — LP Ring 3 + Ring 4

  Category 4 — Authority / credentials:
    - Founder credentials (15 years training + 87 trainers coached) — brand.md — advertorial section 1 + LP footer

  Category 5 — Risk-inversion:
    - Already documented in Offer §3.6 component 5 (Launch Guarantee)

  Category 6 — Specificity:
    - Named mechanism: "Hours Trap" + "Asset Loop" — throughout (Ring 2 + Ring 3)
    - Named guarantee: "Launch Guarantee" — Ring 4
    - Named bonuses: "30-Day Launch Playbook" / "Cohort Community" / "Founder's Product Audit" — Ring 4

  ─── False Proof check ───
     Pass. All devices anchored to verifiable sources.

──────────────────────────────────────────────────────────────────────

REFERENCE POINTERS

  Brand foundational files (always consult):
    - brands/trainerbrand/brand.md
    - brands/trainerbrand/brand-copy-rules.md
    - brands/trainerbrand/products.md
    - brands/trainerbrand/offers.md

  Avatar files:
    - brands/trainerbrand/avatars/independent-trainer.md

  Testimonials to use (specific rows):
    - Testimonial #2 (Marco) — LP Ring 3 + email 3 — Regular, identification-driven
    - Testimonial #7 (Dr. researcher) — advertorial Ring 2 + LP section 4 — Illustrious, authority
    - Testimonial #11 (magazine feature) — LP section 4 — Illustrious, third-party
    - Testimonial #14 (small-audience trainer) — LP Ring 3 + email 2 — Regular, counter-blocking-belief
    - Testimonial #18 (mid-tier cohort outcome) — LP Ring 3 + email 3 — Regular, recent

  Swipe pieces to model:
    - Swipe #4 — argumentative skeleton for the advertorial structure (problem-mechanism-bridge-to-solution arc)
    - Swipe #9 — landing page hero+lead structural model (problem-named-then-mechanism-introduced)

  Transcripts to mine:
    - transcripts/founder-origin-story.md (4:30-6:15) — B6 founder anecdote — advertorial Ring 1
    - transcripts/case-study-marco-2024.md — Marco before/after detailed — LP Ring 3

  Procedures to follow:
    - None specific to this funnel

  Competitor materials:
    - Competitor X — competitors/competitor-x.md — "generic course platform" pattern to contradict in Ring 2

  Notes for specialists:
    - For brand voice, tone, glossary, copy rules — read brands/trainerbrand/brand.md + brand-copy-rules.md.
    - For the full avatar profile (more than the funnel-relevant facets above) — read avatars/independent-trainer.md.
    - For the full testimonials library (any additional rows beyond the 5 selected) — read testimonials.md.
    - If material needed is not pointed to here, escalate to Strategist before improvising.

──────────────────────────────────────────────────────────────────────

FUNNEL MAP

  Funnel pattern:              Advertorial bridge + 1 OTO satellite (Premium tier upgrade)
  Awareness level:             Problem Aware
  Total touchpoints (primary):  4 (Ad → Advertorial → LP → Checkout)
  Satellite sub-funnels:       1 (Premium upgrade OTO on thank-you page)
  Branching / segmentation:    Yes — retargeting layer (see §4.4)

  Sequence (primary):
    TP1 Static ad (Meta) → TP2 Advertorial (long-form, 2,000 words)
    → TP3 Landing page (long-form, 10 sections) → TP4 Checkout
    → Satellite OTO (Premium tier, €997)

  Verification results:
    Audit 1 — Orphan rings:           PASS
    Audit 2 — Dead-weight touchpoints: PASS
    Audit 3 — Emotional discontinuity: PASS
    Audit 4 — Friction:                PASS
    Ship recommendation:              ship-as-is

──────────────────────────────────────────────────────────────────────

TOUCHPOINT 1 — Static ad (Meta cold traffic)

  Specialist to write this:    Ad specialist

  ─── Form specifications ───
    Form:                      Static 1080x1080 image + 150-char caption + CTA "Read the article"
    Length / duration target:  Caption max 150 chars; 1 headline overlay on image (max 8 words)
    Format constraints:        Meta cold-traffic ad — no claim-based promises in image overlay

  ─── Strategic positioning ───
    Awareness level entering:  Unaware / Scrolling
    State exiting required:    Curious
    Dominant lever:            The identity hook: naming the specific lived day (5 AM/9 PM sandwich) before any promise or product mention. The reader recognizes themselves and the click follows.
    Success signal:            CTR > 1.2%, link-CTR > 0.5%

  ─── Rings installed here ───
    Ring 1 partial: install #1 reinforcement + first hint of #3 (worsening). Full B1 install happens in advertorial.

  ─── Big Idea expression ───
    Expression:                "If you train 30+ hours a week and your income still won't grow — there's a name for what's stopping you."
    Hook angle:                Contrarian curiosity ("there's a name for it" implies a mechanism the reader hasn't heard)

  ─── Devices & arguments to deploy ───
    - Identity copy: 5 AM / 9 PM sandwich day from avatar facets
    - Optional: 78% industry stat for caption credibility
    - NO testimonial here (too early)
    - NO product name here (Problem Aware requires problem-mechanism first)

  ─── Offer reference ───
    Offer surface here:        None. Do NOT mention price, product name, or offer details.

  ─── Funnel position of rings ───
    Ring 1 (partial):          Image headline + caption opening line

  ─── Brand-wiki materials to consume ───
    - Avatar file for vocabulary and identity markers
    - Brand copy rules for voice (consult brands/trainerbrand/brand-copy-rules.md)
    - Swipe #4 structural reference (optional)

  ─── Writing notes ───
    - Cold Meta traffic — assume zero brand recognition; image carries the identity match
    - Avoid "passive income" / "funnel" / "lead magnet" vocabulary (per avatar)
    - The CTA goes to the advertorial, NOT the LP

  ─── Out-of-scope ───
    - Do NOT install Ring 2 (Hours Trap mechanism reveal) — that lives in the advertorial
    - Do NOT mention the product or the offer
    - Do NOT use testimonials here

──────────────────────────────────────────────────────────────────────

TOUCHPOINT 2 — Advertorial (long-form, 2,000 words)

  Specialist to write this:    Advertorial specialist

  ─── Form specifications ───
    Form:                      Native-content style article on owned domain (looks editorial, not promotional)
    Length / duration target:  1,800-2,200 words
    Format constraints:        Editorial tone (consult brand-copy-rules.md for advertorial register)

  ─── Strategic positioning ───
    Awareness level entering:  Curious (clicked from ad)
    State exiting required:    Identified + Mechanism-curious
    Dominant lever:            The mechanism-reveal moment in section 3 — naming "the Hours Trap" for the first time and walking through the 5-step UMP articulation. The reader shifts from "this person gets it" to "I need to understand the rest of this."
    Success signal:            Scroll-depth > 70%, CTR on embedded CTA > 4%

  ─── Rings installed here ───
    Ring 1 (complete): #1 reinforcement, #2 reinforcement, #3 (worsening), B1 (brand understands)
    Ring 2 (complete): #5 (missing 1%), #6 (previous understanding wrong), #8 (past failures destined)

  ─── Big Idea expression ───
    Expression:                "Most trainers think they need more clients. The 87 who escaped the Hours Trap last year discovered something different."
    Hook angle:                Group-membership reveal — "the 87" + "different" implies a known-mechanism the reader doesn't yet have

  ─── Devices & arguments to deploy ───
    Ring 1 ammunition:
      - Identity scene: 5 AM/9 PM sandwich + cancelled-vacation moment (avatar facets)
      - Founder anecdote: 2019 client-loss moment (transcripts/founder-origin-story.md 4:30-6:15)
      - Industry stat: "78% income plateau within 4 years" (IDEA 2024 survey, p.23)
    Ring 2 ammunition:
      - UMP full 5-step articulation (brand.md § "The Hours Trap")
      - Illustrious cite: Dr. researcher on hours ceiling (testimonial #7)
      - Brand-internal data: ">€80K trainers all have non-hours revenue" (2023 survey p.4)
      - Past-failure discharge: address "I tried courses before" via Marco's pre-program failure (transcripts/case-study-marco-2024.md)
    NO offer mention. NO product name. NO bonuses. NO guarantee.

  ─── Offer reference ───
    Offer surface here:        None. The advertorial closes with a CTA to the LP, not the offer.

  ─── Funnel position of rings ───
    Ring 1:                    Sections 1-2 (hook → problem reframe → founder anecdote)
    Ring 2:                    Sections 3-5 (mechanism reveal → supporting evidence → past-failure discharge)
    CTA bridge:                Section 6 (transition into LP — "now that you know the trap, the way out follows")

  ─── Brand-wiki materials to consume ───
    - transcripts/founder-origin-story.md (4:30-6:15) — founder anecdote verbatim guide
    - transcripts/case-study-marco-2024.md — pre-program Marco section
    - testimonials.md row 7 — Dr. researcher illustrious cite
    - swipe.md row 4 — argumentative skeleton reference for the problem-mechanism-bridge arc
    - brand-copy-rules.md — advertorial register guidance

  ─── Writing notes ───
    - Treat the advertorial as editorial — bylines, no promotional framing, no sale language
    - The UMP reveal in section 3 should feel earned (build to it across sections 1-2), not announced
    - Past-failure discharge in section 4-5 is critical — the reader's prior attempts at "courses" must be reframed BEFORE the LP introduces the program

  ─── Out-of-scope ───
    - Do NOT install Ring 3 (Asset Loop / brand's UMS) — that's the LP's job
    - Do NOT install Ring 4 (procrastination) — LP closes that
    - Do NOT mention the product name or price

──────────────────────────────────────────────────────────────────────

TOUCHPOINT 3 — Landing page (long-form, 10 sections + offer block)

  Specialist to write this:    LP specialist

  ─── Form specifications ───
    Form:                      Long-form sales page, ~3,500 words, with 2 embedded video clips (founder explanation of Asset Loop + Marco case)
    Length / duration target:  3,200-3,800 words; 10 scroll sections + 1 offer block + CTA
    Format constraints:        Mobile-optimized; section breaks every 250-400 words

  ─── Strategic positioning ───
    Awareness level entering:  Identified + Mechanism-curious (from advertorial)
    State exiting required:    Convinced (emotionally) + Permitted + Action-ready
    Dominant lever:            The Asset Loop reveal in sections 3-4 (UMS articulation as the inverse of the trap) + the Marco before/after in section 5 — this is the lever that shifts the reader from "this works" to "this works for me." The offer block + Launch Guarantee in sections 8-10 closes the action-readiness.
    Success signal:            Scroll past section 7 > 50%; scroll-past-offer > 30%; add-to-cart > 4%

  ─── Rings installed here ───
    Ring 3 (complete): #9, #10, #17, #18 — Asset Loop as the brand's UM
    Ring 4 (complete): #4, #7, #15, #20, #21, #25, #26 — the procrastination ring with all sub-beliefs

  ─── Big Idea expression ───
    Expression:                "The Hours Trap: why the harder you train, the further from real income you get. And the Asset Loop that breaks it."
    Hook angle:                Synthesis (LP brings together the trap from the advertorial + the loop as the LP's domain)

  ─── Devices & arguments to deploy ───
    Ring 3 ammunition:
      - UMP/UMS bridge: "If Hours Trap is the trap, Asset Loop is the inverse"
      - UMS full 5-step articulation (brand.md § "The Asset Loop")
      - Marco before/after case (transcripts/case-study-marco-2024.md) — €2,200 → €5,047/mo in 90 days
      - Illustrious testimonials: #7 (Dr. researcher), #11 (industry magazine feature) — placed at section 4
      - Regular testimonials: #2 (Marco), #14 (small-audience), #18 (mid-tier) — placed at section 6
      - Aggregate: 87/89 launched within 90 days
    Ring 4 ammunition:
      - Cost-of-inaction calc: €2,847/mo avg × waiting for next cohort = €5,694
      - Cohort scarcity: 40 spots, capacity reason
      - Tier scarcity: pricing locks May 13
      - Launch Guarantee verbatim (offer §3.6 component 5)
      - Stack: €1,288 total stacked / €497 today
      - Per-day: €8.87/day across program duration
      - Installments: €177 × 3
      - White/black world contrast at CTA

  ─── Offer reference ───
    Offer surface here:        Full offer block in sections 8-10
    Specific offer elements to emphasize:
      - The Launch Guarantee (full ~220-word description)
      - The bonus stack with values
      - The cohort + tier scarcity with anchored reasons
      - The installment option for #25 affordability install

  ─── Funnel position of rings ───
    Hero:                      Ring 1 reinforcement (one-line carryover from advertorial — "you know the trap; here's the loop")
    Sections 1-2:               Ring 3 setup (bridging from advertorial)
    Sections 3-4:               Ring 3 — Asset Loop UMS full articulation + Illustrious testimonials
    Section 5:                  Ring 3 — Marco before/after case study (video clip embedded)
    Section 6:                  Ring 3 — Regular testimonials (identification block)
    Section 7:                  Ring 3 close — aggregate proof (87/89)
    Sections 8-10:               Ring 4 — offer block + stack + guarantee + scarcity + CTA

  ─── Brand-wiki materials to consume ───
    - brand.md § "The Asset Loop" — UMS full articulation
    - transcripts/case-study-marco-2024.md — Marco case verbatim
    - testimonials.md rows 2, 7, 11, 14, 18 — the 5 selected testimonials
    - offers.md — current offer for Digital Product Launchpad
    - swipe.md row 9 — LP hero+lead structural model

  ─── Writing notes ───
    - The hero must explicitly bridge from the advertorial — assume the reader arrives from advertorial and reference "the trap" within the first 30 words
    - Marco's case (section 5) is the emotional fulcrum — the reader sees their own future in his outcome. Don't compress it; give it space.
    - The guarantee in section 9 is the lever for #21 risk-acceptable — describe it fully (~220 words), do not stamp-and-move-on
    - The CTA in section 10 must include both single-payment and installment options visibly

  ─── Out-of-scope ───
    - Do NOT re-install Ring 1 or Ring 2 — those are already held by the time the reader lands here. A 1-line acknowledgment is enough.
    - Do NOT use testimonials beyond the 5 selected (per §3.10 pointers) — extras would dilute identification

──────────────────────────────────────────────────────────────────────

TOUCHPOINT 4 — Checkout

  Specialist to write this:    LP specialist (checkout reassurance copy)

  ─── Form specifications ───
    Form:                      Single-page checkout with order-bump option ("add the €197 Launch Playbook bonus to lock in before cohort start")
    Length / duration target:  Minimal copy; checkout fields + 100-200 words of reassurance copy in the right rail
    Format constraints:        Mobile-optimized; trust badges visible

  ─── Strategic positioning ───
    Awareness level entering:  Action-ready
    State exiting required:    Acted (purchase completed)
    Dominant lever:            Frictionless form + reassurance copy in the right rail that re-anchors the Launch Guarantee + the 87/89 trust signal
    Success signal:            Purchase completion > 70% of add-to-cart

  ─── Rings installed here ───
    None. Reinforcement only: B4 (brand trustworthy) + #21 (risk acceptable)

  ─── Big Idea expression ───
    Expression:                No Big Idea reveal at checkout. The Idea has done its work.
    Hook angle:                N/A (this is a transaction touchpoint)

  ─── Devices & arguments to deploy ───
    - Right-rail reassurance: 1-line guarantee echo ("Launch Guarantee — see full terms"), 87/89 stat, secure-payment badges
    - Order bump: 1 bonus add-on opportunity (the Launch Playbook bonus at €197 — already in the standard offer's bonus stack; this is an upsell-bonus pattern)

  ─── Offer reference ───
    Offer surface here:        Order summary (auto from offer system) + order-bump opportunity

  ─── Funnel position of rings ───
    N/A — no rings install here

  ─── Brand-wiki materials to consume ───
    - offers.md for order-bump configuration
    - brand-copy-rules.md for reassurance-copy register

  ─── Writing notes ───
    - Keep all copy under the buy button minimal — every word here either reassures or causes hesitation
    - The order-bump must NOT compete with the OTO satellite (which fires post-checkout) — keep it as a single bonus add-on, not a full alternate offer

  ─── Out-of-scope ───
    - Do NOT install new beliefs here
    - Do NOT introduce new offer elements
    - Do NOT re-pitch the program

──────────────────────────────────────────────────────────────────────

SATELLITE 1 — Premium upgrade OTO (thank-you page, immediate)

  Specialist to write this:    Upsell specialist
  Satellite type:              Premium tier upgrade
  Trigger:                     Immediately post-checkout of primary, before order confirmation page
  Post-purchase momentum window: Yes — fires immediately

  ─── Beliefs carried over (DO NOT reinstall) ───
    - B1-B6 (validated by primary purchase)
    - #14 (I can do this), #16 (I deserve this) — validated
    - #19 (brand reflects my values) — validated
    - #21 (risk acceptable) — primary Launch Guarantee carries over

  ─── Mini-chain to install ───
    Mini-ring 1 — "The premium tier is meaningfully more, not just bigger":
      Beliefs to install:      #22 (premium superior) + #18-extension (premium uses an additional UM element)
      Installation device:     Side-by-side tier comparison + extension argument
      Supporting arguments:
        - Premium tier adds: 6 months of post-program 1:1 coaching (post-cohort)
        - The argument: "The 8-week program teaches you to launch. The 6-month coaching gets you to scale. 84% of trainers who launched in 2024 stalled at month 3-4 without coaching support — Premium tier addresses that specific stall."
        - Stat: brand-internal data on post-launch stall pattern
      Content summary:         "Frame Premium as the answer to a problem the buyer doesn't yet know they'll have — the post-launch stall. Quantify the stall (84% stat). Show that the additional €500 (€997 - €497) is anchored to 6 months of 1:1 coaching priced individually at €1,200+."

    Mini-ring 2 — "I can afford the upgrade":
      Beliefs to install:      #25 (affordable at the new price)
      Installation device:     Price-anchoring to coaching market rate + installment option
      Supporting arguments:
        - "1:1 coaching with the founder is €200/hour standalone. Premium includes 6 months — that's 6 sessions at €200 = €1,200 value alone."
        - Installment offered: €333 × 3 instead of €177 × 3 — frame as "€156/month more to add 6 months of coaching"
      Content summary:         "Decompose the upgrade math: the additional €500 vs. the standalone cost of the coaching value (€1,200). Offer installment to bridge affordability for trainers who chose installment on primary."

    Mini-ring 3 — "This page only — page-specific scarcity":
      Beliefs to install:      #20 (now or never — page-specific)
      Installation device:     Explicit page-only framing
      Supporting arguments:
        - "Premium tier is available on this page only. Not in any email, not later, not for next cohort. The reason: we run Premium as a capped track inside the cohort — 12 spots maximum."
        - Real reason: Premium track requires founder bandwidth; 12 is the cap
      Content summary:         "State the page-only constraint plainly with the real reason. Avoid threat framing — frame as 'this is one of those decisions you make now or you make different.'"

  ─── Form specifications ───
    Form:                      Single-page upgrade pitch + accept/decline buttons (no cart back-out)
    Length / duration target:  800-1,200 words + 60-second optional video
    Format constraints:        Mobile-optimized; decline button visible but secondary

  ─── Offer for this satellite ───
    Product:                   Digital Product Launchpad Premium (Standard program + 6 months 1:1 coaching)
    List price:                €1,797
    Offer price:               €997 (instead of paying additional €500 above Standard €497)
    Why this price makes sense post-primary: The €500 increment buys €1,200 of coaching value — the upgrade is priced at less than half of standalone coaching cost
    Bonuses / extras:          Same primary bonuses + 6 sessions of 1:1 coaching (founder-led)
    Guarantee:                 Inherits Launch Guarantee; coaching sessions covered under the same condition
    Scarcity:                  Page-only + Premium track capped at 12 spots within the cohort

  ─── Big Idea expression ───
    Expression:                "You just chose to escape the Hours Trap. Here's how to make sure you don't get stuck at the next ceiling."
    Hook angle:                Continuity of the Big Idea + introduction of a new sub-problem (post-launch stall) that the upgrade specifically addresses

  ─── Specialist writing notes ───
    - The OTO copy must reference the just-completed primary purchase explicitly — anchor to post-purchase momentum
    - Decline button text: "No thanks, I'll stick with Standard and risk the post-launch stall" — frame as taking responsibility, not passive "maybe later"
    - The 84% stall stat is the lever for the mini-ring 1 — it must be cited with source

  ─── Brand-wiki materials to consume ───
    - offers.md — Premium tier configuration
    - brand.md — coaching value proposition
    - testimonials.md rows for 6-month outcomes (if any — flag if missing)

──────────────────────────────────────────────────────────────────────

BRANCHING / SEGMENTATION

  Branching trigger:           Cold (Meta paid) vs. Retargeting (warm — has touched at least one of the primary touchpoints)
  Segmentation logic:          Pixel-based — retargeting layer fires for anyone who reached LP but did not convert within 7 days

  ─── Branch / Segment A — Cold (Meta paid) ───
    Segment characteristics:   First-time exposure to brand and to the Hours Trap concept
    Beliefs already held:      #1, #2 only
    Rings to install in this branch: Full chain — Rings 1-4 as documented above
    Touchpoints in this branch: Ad → Advertorial → LP → Checkout → OTO satellite

  ─── Branch / Segment B — Retargeting (warm) ───
    Segment characteristics:   Has already consumed Ad + Advertorial + at least part of LP; bounced before checkout
    Beliefs already held:      #1, #2, #3, B1 (from Ring 1 already exposed) + likely #5, #6, #8 (from Ring 2 already exposed)
    Rings to install in this branch:
      Skip Ring 1 and Ring 2 (already exposed)
      Focus on Ring 3 (Asset Loop) and Ring 4 (procrastination)
    Touchpoints in this branch:
      Retargeting Ad → Direct to LP (skip advertorial)
      OR
      Retargeting Ad → Shorter "objections" advertorial (Ring 3 partial, Ring 4 focus) → LP offer block direct
    Specific retargeting messaging:
      - "Still on the fence? Here's what 87 of 89 figured out about Asset Loops…"
      - Lead with Marco case + Launch Guarantee, skip the Hours Trap setup

  Convergence point:           Both branches arrive at the same Checkout + OTO satellite
```

---

## 9. Operational rules

The rules that govern how the brief gets built, consumed, and maintained.

### 9.1 When the brief is compiled

The brief is compiled by the Strategist at the end of Phase 1 (Discovery), after all 10 strategic framework files (`mass-desire`, `awareness-levels`, `unique-mechanism`, `naming`, `chain-of-beliefs`, `proof-elements`, `big-idea`, `offer-construction`, `funnel-architecture`, `persuasion-techniques`) have been consulted and their outputs produced. The brief is the synthesis — it does not generate new strategic content; it organizes what the methodology phases produced.

### 9.2 Single point of writing

The brief is the only place where each piece of funnel-specific strategic content lives. The Strategist does NOT copy chain content into the per-touchpoint blocks (the per-touchpoint blocks reference the chain block); does NOT duplicate offer content across blocks; does NOT restate avatar content across blocks. References between blocks (e.g., "see §3.8 Ring 3") are preferred over duplication.

This matters because: when something changes (e.g., the offer's guarantee duration changes from 60 to 90 days), the Strategist updates one location. Duplication produces version drift.

### 9.3 Specialists do not modify the brief

Specialists consume the brief; they do not edit it. If a specialist finds a gap or notices a problem (e.g., "the chain doesn't have a device for Ring 2's hidden-cost contradiction"), they flag it to the Strategist. The Strategist evaluates, decides, and updates the brief if needed.

This separation is intentional: the brief is the *strategic* document. Letting specialists patch it would dissolve the strategic-vs-tactical boundary and produce drift across specialists.

### 9.4 What to do if a block is incomplete

If a block is incomplete when the brief is sent to specialists (rare but possible — e.g., the brand wiki was missing a specific testimonial type and the Strategist couldn't fill the proof inventory):

1. Mark the incomplete block with `[INCOMPLETE — pending: <what's needed>]`
2. Reflect the marker in the YAML frontmatter: list the block number(s) in the `incomplete_blocks:` field (this is what CLAUDE.md's readiness check reads — the inline marker alone is not machine-visible)
3. Surface the gap to the copywriter for prioritization
4. Specialists working on touchpoints that depend on the incomplete block pause until resolved; specialists whose touchpoints are unaffected may proceed

A brief with incomplete blocks cannot move to Approved unless the copywriter explicitly accepts the gap (record an accepted-gap note inside the block, e.g., `[INCOMPLETE — pending: 2025 device data — ACCEPTED GAP by copywriter <date>]`). Accepted gaps stay listed in `incomplete_blocks` so downstream readiness checks keep surfacing them.

### 9.5 Live-campaign update protocol

If a learning during the campaign (post-launch) requires the brief to change (e.g., a testimonial loses permission to be used; a guarantee duration changes; an audience-research finding emerges):

1. Strategist evaluates the change scope
2. Strategist updates the brief and bumps the version per §7.2 (a version bump is NOT a status change: status stays Live for refinements, or moves back to In-Review for major changes that need copywriter sign-off)
3. Affected specialists are notified
4. Version history is the series of `funnel-briefs/<funnel-slug>-v<N.N>.md` files per §7.2 — one file per version, never deleted. No separate archive files or `-archive` suffixes.

### 9.6 Cross-funnel reuse

If a brand runs multiple funnels (e.g., evergreen + seasonal launch + retargeting), each funnel has its own brief. Shared elements (the avatar profile, the brand's broader UM library, the testimonials library) are referenced — not copied — into each brief. The brief is the single point of funnel-specific synthesis; the brand wiki is the single point of brand-general truth.

### 9.7 What the brief is NOT

- NOT the brand strategy document (that's `brands/<brand>/brand.md`)
- NOT the avatar profile (that's `avatars/<segment>.md`)
- NOT the copy itself (specialists produce that as separate files)
- NOT a marketing plan (no media buying, no budget, no scheduling — those belong elsewhere)
- NOT a worked example template (this template file is the only place worked examples live)

---

## 10. Cross-references

- [mass-desire](core/strategic-frameworks/mass-desire.md) — produces the content for §3.2 (the selected mass desire and the desire-performance pair)
- [awareness-levels](core/strategic-frameworks/awareness-levels.md) — produces the content for §3.3 (awareness level + minimum rings + operational implications)
- [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) — produces the content for §3.4 (sophistication stage + UM configuration). When a UM name is needed, [naming](core/strategic-frameworks/naming.md) is invoked in parallel.
- [naming](core/strategic-frameworks/naming.md) — invoked when any element of the funnel needs naming (UM, guarantee, bonuses, satellite product, campaign name). The names produced by naming surface in §3.4, §3.6, and §3.7.
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — produces the content for §3.8 (the central artifact). The ring-by-ring format in §3.8 + §5 is the operational realization of chain-of-beliefs's output.
- [proof-elements](core/strategic-frameworks/proof-elements.md) — produces the content for §3.9 (proof inventory). Each proof device sits in the touchpoint and ring it's assigned to, with explicit source pointers.
- [big-idea](core/strategic-frameworks/big-idea.md) — produces the content for §3.7 (Big Idea block including expressions across touchpoints)
- [offer-construction](core/strategic-frameworks/offer-construction.md) — produces the content for §3.6 (the full 7-component offer block)
- [funnel-architecture](core/strategic-frameworks/funnel-architecture.md) — produces the content for §4.1 (funnel map), §4.2 (per-touchpoint specifications), §4.3 (satellite sub-funnels), and §4.4 (branching/segmentation)
- [strategist](skills/strategist.md) — produces this brief through the Phase 1 Discovery workflow
- [CLAUDE](CLAUDE.md) — the orchestrator that invokes the Strategist and routes specialist requests against this brief
- `brands/<brand>/brand.md` — brand-level foundational content; consulted by every specialist in parallel with the brief
- `brands/<brand>/brand-copy-rules.md` — brand-level copy rules and voice guidance; consulted by every specialist
- `brands/<brand>/products.md` — product catalog; §3.6 of the brief draws specific product details from here
- `brands/<brand>/offers.md` — offer configurations; §3.6 of the brief is the funnel-specific offer (which may be a variant or recombination of catalog offers)
- `brands/<brand>/avatars/<segment>.md` — full avatar profiles; §3.5 references the relevant segment(s)
- `brands/<brand>/testimonials.md` — testimonials library; §3.9 and §3.10 point to specific rows
- `brands/<brand>/swipe.md` — swipe library; §3.10 points to specific rows used as structural models
- `brands/<brand>/transcripts/` — transcripts mined for founder anecdotes, case studies, and quotable content; §3.10 points to specific transcripts and specific timestamps
- `brands/<brand>/competitors/` — competitor research; consulted when the chain has competitor-related contradiction work in §3.8
- `brands/<brand>/funnel-briefs/<funnel-slug>-v<N.N>.md` — where this brief is stored. Each version is a separate file; the latest version is referenced from the brand's index.
