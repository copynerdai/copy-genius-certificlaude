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
| 10 | Funnel map + page registry | §4.1 | `funnel-architecture.md` |
| 11 | Per-surface specs (structure + routing) | §4.2 | `funnel-architecture.md` + chain |
| 12 | Satellite sub-funnels | §4.3 | `funnel-architecture.md` §2.5 |
| 13 | Branching / segmentation | §4.4 | `funnel-architecture.md` §2.3 |

Blocks 0-9 = Part 1 (Strategic foundations).
Blocks 10-13 = Part 2 (Funnel execution).

> **Lean discipline (how to fill every block).** Decisions, not essays — keep each rationale to one line. Fields marked `(opt.)` are omittable. State each fact ONCE: in Part 2, rings/proof are POINTERS to §3.8 / §3.9, never restated. No "consulting summary" recap block — status + open gaps live in the frontmatter and the §3.1 header.

> **Instance header convention (mandatory).** In a compiled brief, every block header is `## §<address> — <NAME>` — the template address from the table above + a localized name. Example: `## §3.6 — OFFERTA`, `## §4.2 — SPECIFICHE PER SUPERFICIE`. This keeps every brief navigable by the SAME §-address the Strategist and specialists use to locate blocks, in any language. Do NOT number blocks sequentially (`## 1.`, `## 2.`) — that breaks the address mapping.

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

### 4.1 Funnel map + page registry

One-glance shape of the funnel: pattern, WHO decided the structure, the pages with their routing, and the flow.

```
FUNNEL MAP

  Funnel pattern:        <pattern from funnel-architecture.md §4, or "custom">
  Archetype:             <archetype from the shared library, if used>
  Awareness level:       <from §3.3>
  Structure decided by:  [client | us]
                         client → the pages + flow below are the CLIENT'S; honor them exactly
                                  (fill sections/copy only, never redesign the structure)
                         us     → design the pages + flow from the archetype + strategy

  ─── Pages (registry + routing) ───
  The single list of pages, and where each leads. Update HERE whenever a page changes.
  "→ Goes to" = destination after the user action.  "Link" = page URL (empty until produced).

  | ID | Page | Type | TP | User action | → Goes to | Link | Status |
  |----|------|------|----|-------------|-----------|------|--------|
  | P1 | <name> | opt-in | TP<n> | <e.g. submit form> | P2 | <url> | <status> |
  | P2 | <name> | thank-you | TP<n> | <action> | <page or external> | <url> | <status> |

  External destinations (not our pages): <e.g. Zoom room · booking calendar · checkout>
  Emails (flow connectors, not pages):   <which email drives to which page>

  ─── Flow diagram ───
    Ad/Email → P1 ─(action)─▶ P2 ─(...)─▶ <external> ─▶ ‹‹handoff››

  ─── Audits (funnel-architecture.md §8) ───
    Orphan rings [PASS|FAIL] · Dead-weight TP [PASS|FAIL] · Emotional discontinuity [PASS|FAIL] · Friction [PASS|WARNING]
    Ship: [ship-as-is | quick-fix-then-ship | restructure-required]

  Source: funnel-architecture.md output
```

### 4.2 Per-surface specification — the writer's block

One self-contained block per surface (page / email / ad / VSL). The specialist writing it reads ONLY this block + Part 1 and has everything needed. Rings are POINTERS to §3.8 — never re-describe chain content here (per §9.2). A surface that is a PAGE also carries its structure + routing; emails/ads omit those fields.

```
SURFACE <ID> — <name>     e.g. "P1 — Opt-in registration"  ·  "TP1 — Pre-launch email"

  Specialist:        <ad | advertorial | lp | vsl-and-video-ad | email | upsell | ...>
  Type:              [opt-in | sales/LP | VSL page | order-form | OTO | thank-you | book-a-call | email | ad]
  Form / length:     <e.g. "static 1080x1080 + 150-char caption" | "90-min VSL" | "page ~1500 words">
  Objective:         <the one job of this surface>
  Awareness:         <entering> → <exiting required>
  Dominant lever:    <the single strongest move that produces the transition — be specific>
  Success signal:    <behavioral threshold, e.g. "CTR > 1.2%" | "opt-in rate">

  Rings installed:   Ring <N> (full) · Ring <M> (partial)  → full detail in §3.8, do NOT restate
  Big Idea here:     "<expression for this surface — from §3.7>"

  ─── Structure (pages only — omit for emails/ads) ───
    Sections in order — each block → Marketing Design component (or custom) · key slots:
      1. <section> ...... `<component>` · {slots}
      2. <section> ...... custom(primitive) · {slots}
    Routing:           <user action> → <destination surface / external>
    Link:              <page URL — empty until produced>
    Special mechanics: <delayed-VSL reveal · self-sort · timer · pop-up · add-to-calendar>
    Image assets:      <real photo from client · vector generated · photoreal via API>

  ─── Piece-level persuasion (persuasion-techniques.md §3) ───
    Camouflage frame:  [None | News | Scientific | Rediscovered | Conspiracy | Personal story] — why: <1 line>
    Continuous:        Intensification [On|Off] · Identification [On|Off]
    Gradualization:    the chain (§3.8) is the sequence; note any non-default ordering only

  ─── Emotional anchors (opt.) ───
    [max 3 · never 2 from the same family · mark only beats needing vividness · else omit the block]
    <beat> → <emotion (intensity)>

  Offer surface:     [None | Mention | Full offer block | OTO-direct] — emphasize: <bonus / scarcity / guarantee>
  Notes:             <surface-specific writing notes; brand voice lives in the wiki>
  Out-of-scope:      <what NOT to install here — prevents ring duplication / over-reach>
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


## 8. Worked example

> A real brief IS the worked example for its own funnel — this template does not carry a long fictional one.
> **Live reference:** the first brief you compile in `brands/<brand>/funnel-briefs/<funnel-slug>-v1.0.md` becomes your own reference for every brief after it. Follow this structure end to end, including the §4.1 page registry + routing.

Minimal shape of a compiled brief (blocks in order, each filled with real content):

    FUNNEL BRIEF — <funnel name>     frontmatter: brand · funnel · slug · status · version · struttura
    §3.2  MASS DESIRE          desire + dominant dimension
    §3.3  AWARENESS            level + beliefs to install
    §3.4  SOPHISTICATION / UM  stage + UMP/UMS + campaign thesis
    §3.5  AVATAR               segment + funnel-relevant facets
    §3.6  OFFER                the 7 components
    §3.7  BIG IDEA             one sentence + per-surface expressions
    §3.8  CHAIN OF BELIEFS     Ring 1..N  (central artifact — most consulted)
    §3.9  PROOF                devices by category, each mapped to rings
    §3.10 REFERENCE POINTERS   which wiki files / rows to pull
    §4.1  FUNNEL MAP           page registry (routing + link) + flow diagram + audits
    §4.2  PER-SURFACE SPECS    one block per page/email/ad (structure · routing · rings → §3.8)
    §4.3  SATELLITES  ·  §4.4  BRANCHING     (only if present)

Fill each block per its format in §3–§4. Keep it lean: decisions, not essays.

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
