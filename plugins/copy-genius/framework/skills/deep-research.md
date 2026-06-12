# Deep Research Skill

> Operational skill. Copy Genius runs a full market research process autonomously. Primary deliverable: a Unified Research Brief.

---

## Table of contents

- [Purpose](#purpose)
- [When to invoke](#when-to-invoke)
- [Required inputs (setup)](#required-inputs-setup)
- [Mode selection](#mode-selection-asked-at-the-start-of-every-activation)
- [Output map](#output-map)
- [Multi-round execution model](#multi-round-execution-model-mode-a-only)
- [MODE A — Full Deep Research](#mode-a--full-deep-research)
  - [PHASE 1 — Product-Market Awareness](#phase-1--product-market-awareness) (ends with its closing gate)
  - [PHASE 2 — Competitor Research](#phase-2--competitor-research) (ends with its closing gate)
  - [PHASE 3 — Psychographic Research](#phase-3--psychographic-research) (sub-phases 3.1-3.5; ends with its closing gate)
  - [PHASE 4 — Unified Research Document](#phase-4--unified-research-document) (ends with its closing gate)
- [MODE B — Quick Intake](#mode-b--quick-intake)
- [END OF CORE SKILL — Approval Gate](#-end-of-core-skill--approval-gate)
- [PHASE 5 (OPTIONAL, GATED) — Brand File Population](#phase-5-optional-gated--brand-file-population)
- [Quality gates — summary](#quality-gates--summary)
- [Client interaction triggers](#client-interaction-triggers)
- [Cross-references](#cross-references)
- [Operational notes](#operational-notes)

---

## Purpose

Run a complete market research process in 4 sequential phases. The output is a single **Unified Research Brief** — the foundation document for all subsequent strategic and copy work.

An optional 5th phase integrates the research findings into the brand's canonical files (`brand.md`, `avatars/<segment>.md`, `offers.md`, `products.md`, `competitors/`) — but only after the client has approved the brief AND explicitly requested population.

---

## When to invoke

Deep Research is a HEAVY process. Copy Genius must NOT auto-run it on light requests. Activation rules are strict.

**Activate (with explicit client confirmation) on:**
- Client explicitly asks for it ("do deep research", "market research", "research the audience", or equivalent direct phrasing)
- Runs AFTER [brand-creation](skills/brand-creation.md) has set up the brand wiki, on the copywriter's request, to populate the research layer. Brand-creation owns the new-brand onboarding; this skill is the follow-up step. Copy Genius offers two modes (see Mode Selection below)
- Client confirms a refresh of an existing brand's research (e.g., > 6 months old)

**Propose, never auto-activate, on:**
- A copy task requires data missing from the brand wiki → Copy Genius flags the gap, recommends targeted research, and waits for client decision
- An existing brand has clear blind spots in the unified brief → suggest a targeted run, don't launch

**Never activate on:**
- Light enrichment requests ("add a quote to the avatar", "tweak this section", "polish that paragraph") — these go through targeted lighter routines, NOT this skill
- Specialist invocations (VSL, landing, email, ads writing) — those just READ the existing brief
- Anything that doesn't clearly map to "I want research done"

**Default behavior on ambiguous requests**: ask the client explicitly. Never launch this skill on assumption.

---

## Required inputs (setup)

Collect from the client before starting.

**Mandatory:**
- Brand name
- Niche / industry
- Main product (or product family)
- Target geography / market (country, language)
- Business type (D2C, coaching, SaaS, training, services, other)
- Funnel type (eCommerce, direct response, lead gen, other)
- Initial demographic hypothesis (who buys — even if rough)

**Optional but valuable:**
- Sales call transcripts (used in Phase 3.5)
- Existing brand materials (website, brochures, current ads)
- Prior research or copywriter intuitions

If any mandatory input is missing, ask before proceeding. Never guess niche or product.

---

## Mode selection (asked at the start of every activation)

Before executing anything, Copy Genius asks the client which mode to run:

> "Two ways to do this research:
>
> **A — Full Deep Research** (~30-60 min, autonomous): I run the complete 4-phase web research process. I do all the work: market awareness, competitors, psychographic, sociological drivers. Output: full unified brief. Recommended when you have little or no prior research material.
>
> **B — Quick Intake** (~10-15 min, interactive): I ask you structured questions about what you already know (avatar, market, competitors, language). You provide what you have. I organize it into the unified brief format and flag any gaps. Recommended when you've already done research, have direct experience with the audience, or simply prefer to feed me your knowledge.
>
> Which one? (Or do you want a hybrid — e.g., your input on the avatar, my deep research on competitors?)"

**Routing logic:**
- Client picks A → proceed to MODE A (Phases 1-4 below)
- Client picks B → proceed to MODE B (Quick Intake)
- Client picks hybrid → run MODE B on the dimensions where they have input, then targeted MODE A on the remaining dimensions
- Client unsure → Copy Genius asks 1-2 clarifying questions ("Do you have a written customer profile or persona document? Sales call transcripts? Recent surveys?") to suggest the right mode

**Important**: Mode B is NOT inferior. It's the right choice when the client already has direct knowledge of the audience. The output (unified-brief.md) is the same artifact in both cases.

---

## Output map

Two levels, gated.

```
LEVEL 1 — Automatic skill output (Phases 1-4)
brands/<brand>/research/
├── market-awareness.md       ← Phase 1 output
├── competitor-research.md    ← Phase 2 output
├── psychographic.md          ← Phase 3 output (unified)
└── unified-brief.md          ← Phase 4 output — PRIMARY DELIVERABLE

▼ GATE 1: client reads and approves unified-brief.md
▼ GATE 2: client explicitly requests "populate the files"
▼

LEVEL 2 — Optional population (Phase 5)
brands/<brand>/
├── brand.md                  ← empty fields integrated from unified-brief
├── products.md               ← empty fields integrated from unified-brief
├── offers.md                 ← empty fields integrated from unified-brief
├── avatars/<segment>.md      ← one per identified segment (canonical avatar template)
└── competitors/<name>.md     ← one per main competitor (canonical competitor template)
```

**Canon note**: the LEVEL 2 files and their formats are owned by `brands/_template/` — Phase 5 maps the unified brief onto those canonical files and defines NO alternative schemas. The core skill (Phases 1-4) never depends on this — it always produces `unified-brief.md` as a self-contained deliverable. The research files themselves (market-awareness, competitor-research, psychographic, unified-brief) live in `brands/<brand>/research/` (canonical folder, seeded by brand-creation with its `README.md`).

---

## Multi-round execution model (Mode A only)

In MODE A, each research phase runs **multiple rounds** with different source pools, instead of relying on a single search pass. This produces broader, cross-validated findings. The rounds use the same analytical prompt but target different signal sources (social, forum, reviews, industry data, etc.). The final synthesis weighs convergences and divergences across rounds.

This applies to Phases 1, 2, and 3.1.

MODE B doesn't use rounds — the client's knowledge IS the source.

---

# MODE A — Full Deep Research

> Autonomous 4-phase web research. Copy Genius executes the phases below without further client input (beyond the setup data). Output: `unified-brief.md`.

---

## PHASE 1 — Product-Market Awareness

### Goal

Determine the dominant awareness level of the target market relative to the product/category. This determines HOW to write copy, how much education is required, and what types of funnels/assets are needed.

### Theoretical foundation

Canonical reference: [awareness-levels](core/strategic-frameworks/awareness-levels.md) — the 5 awareness levels (Schwartz) with the D2C interpretation: "Product Aware" means aware of the CATEGORY, not the specific brand.

### Prompt to execute

```
I need help assessing the Market Awareness level for a product in the [NICHE] sector. The specific product is [PRODUCT].

Conduct in-depth research to determine the current market awareness level for this product in [GEOGRAPHY].

[OPTIONAL: Additional market details: DETAILS]

Use the classic Product/Market Awareness levels (Eugene Schwartz):

1. Unaware: Prospects don't realize they have a problem your product/service can solve.
2. Problem Aware: Prospects recognize they have a problem or need, but aren't aware of solutions.
3. Solution Aware: Prospects know solutions exist for their problem, but aren't aware of your specific solution.
4. Product Aware: Prospects know your solution, product, or service, and are evaluating features/benefits.
5. Most Aware: Prospects are highly aware of your solution, its benefits, and are close to buying.

For this exercise, treat Product Aware and Most Aware as awareness of similar/nearly identical products and the brands offering them — NOT awareness of our specific brand.

Use a variety of signals: social media conversations, articles, blog posts, influencer content, search trends, available sales data on the product category and its growth, and so on.

Additionally:

1. Provide an overview of the estimated TAM (Total Addressable Market) for this product.
2. Provide a rough estimate of the % of TAM in each awareness category.
3. End with a FINAL SELECTION of which Product/Market Awareness stage the majority of the market sits at.
```

### Execution

1. Fill placeholders with setup data:
   - `[NICHE]` → brand niche
   - `[PRODUCT]` → main product
   - `[GEOGRAPHY]` → target market
   - `[DETAILS]` (optional) → any additional context

2. Run 2 rounds with distinct focuses:
   - **Round A — Cultural signals**: WebSearch on social media, influencer content, recent TikTok/Instagram/Twitter trends, relevant hashtags
   - **Round B — Quantitative & industry signals**: WebSearch on industry articles, market reports, public sales data, Google Trends, vertical news

3. Synthesize both rounds, cross-checking cultural sentiment with quantitative data.

4. Write output to `brands/<brand>/research/market-awareness.md`.

### Expected output structure

```markdown
# Market Awareness — <brand>

## Summary
- **Dominant level**: [Problem Aware / Solution Aware / Product Aware / Most Aware]
- **Estimated TAM**: [value]
- **Geography**: [country/market]

## Awareness distribution
| Level | Estimated % of TAM | Characteristics |
|---|---|---|
| Unaware | X% | ... |
| Problem Aware | X% | ... |
| Solution Aware | X% | ... |
| Product Aware | X% | ... |
| Most Aware | X% | ... |

## Cultural signals (Round A)
[observations from social, influencer, trend research]

## Quantitative signals (Round B)
[industry data, trends, market data]

## Operational implications
[e.g., "Dominant Problem Aware → educational copy required, advertorials, long VSL. Simple landing pages won't be enough."]

## Sources cited
[list with URLs]
```

### Closing gate — do not close this phase if:

- ✗ Fewer than 2 rounds executed (Round A cultural + Round B quantitative)
- ✗ No final selection of the dominant awareness level
- ✗ Fewer than 5 sources cited

If any check fails: do NOT close the phase — launch a targeted additional round to fill the gap and inform the client of the failed check and the action taken.

---

## PHASE 2 — Competitor Research

### Goal

Identify direct competitors (D2C, online), understand their funnels, messaging, pricing, what customers love and hate, and recurring patterns in their advertising.

### Prompt to execute

```
I need help researching competitors for a product in the [NICHE] sector. The specific product is [PRODUCT] and we're focused on competitors in [GEOGRAPHY].

Specifically, we're looking for [BRAND TYPE: e.g., D2C brands / coaching programs / training platforms] that sell primarily online through [FUNNEL TYPE: e.g., eCommerce or Direct Response sales funnels].

For each competitor you find, I want to understand:

What demographic do they target?
What are their main customer acquisition funnels?
What is the main messaging in their ads, advertorials, and other advertising assets?
What are examples of their ads or landing pages, if available?
Are there recurring or repetitive hooks/angles/big ideas you see across their assets?
What is their pricing structure?
What do customers love and dislike about them (use reviews, social signals, social media platforms, etc.)?

If available, what is their estimated overall revenue and the revenue of their flagship product(s) most similar to mine?

What are the main promises they make to prospects? Value proposition, language they use when selling their [PRODUCTS/PROGRAMS]? I'm specifically looking for phrases, claims, expressions used. In practice, if I were selling [PRODUCT], I'd want to find phrases, snippets of copy, expressions these competitors repeatedly use that I could also use.

[OPTIONAL: Additional market details: DETAILS]

Proceed now, thanks.
```

### Execution

1. Fill placeholders with setup data (niche, product, geography, brand type, funnel type).

2. Run 3 rounds with distinct focuses:
   - **Round A — Funnel & acquisition mechanics**: WebSearch for known competitors in the sector. Discover landing pages, opt-ins, email sequences, ad campaigns. Use Meta Ad Library, Google Ads Transparency Report when possible.
   - **Round B — Messaging & copy patterns**: WebFetch the main landing pages of competitors identified in Round A. Extract headlines, hooks, recurring claims, big ideas, value-proposition formulas. Analyze public ad creative.
   - **Round C — Customer voice**: WebSearch on reviews (Trustpilot, Google Reviews, Amazon, App Store), forum discussions about competitors, complaints, Reddit posts. What do they love, hate, where do competitors fail?

3. Synthesize all three rounds. Identify the 3-5 most relevant competitors for the client's brand — not an exhaustive list, only those who truly compete for the same prospect.

4. Write output to `brands/<brand>/research/competitor-research.md`.

### Expected output structure

```markdown
# Competitor Research — <brand>

## Summary
- Main competitors identified: [N]
- Dominant market patterns: [e.g., "all sell on urgency/scarcity", "messaging very similar on X"]

## Competitor 1: [Name]
### Snapshot
- Target demographic: ...
- Main funnel: ...
- Pricing: ...

### Messaging & hooks
- Recurring hooks: ...
- Big idea / angle: ...
- Value proposition: "..."

### Sample copy (repeated phrases)
- "[phrase 1]"
- "[phrase 2]"

### Customer feedback
- What they love: ...
- What they hate: ...
- Recurring complaints: ...

### Sources
- [landing URL]
- [reviews URL]
- ...

## Competitor 2: ...

## Cross-market patterns
- [e.g., "All competitors use video testimonials", "Pricing concentrates around $X-Y"]
- [e.g., "Dominant framing is 'X doesn't work, try Y'"]

## Market gaps (opportunities for the client's brand)
- [e.g., "No one communicates the causal mechanism of the problem"]
- [e.g., "Everyone shouts results, no one demonstrates process"]
```

### Closing gate — do not close this phase if:

- ✗ Fewer than 3 competitors identified (max 5)
- ✗ Any competitor lacks messaging + customer feedback + sample copy
- ✗ Cross-market patterns not made explicit
- ✗ No market gap identified

If any check fails: do NOT close the phase — launch a targeted additional round to fill the gap and inform the client of the failed check and the action taken.

---

## PHASE 3 — Psychographic Research

### Goal

Understand the target audience in depth: pain points, beliefs, hopes, dreams, frustrations, the language they use, solutions they've already tried, sociological purchase drivers, and the "corruption" or "conspiracy" stories that resonate in the market.

This is the central phase. It feeds the avatars.

### Sub-phases

```
3.1 — Core psychographic (multi-round)
3.2 — Sociological drivers & Maslow
3.3 — Psychographic unification
3.4 — Descriptive language (optional)
3.5 — Sales call transcripts (optional)
```

---

### 3.1 — Core Psychographic (multi-round)

#### Prompt to execute

```
I'm writing sales copy targeted at [DEMO/MARKET INFO]. I need help with psychographic research. What are their struggles and pain points? What are their beliefs?

Below is a set of questions used as part of a copywriting research framework. This should be a good framework to use during target research. I'd also love it if you could provide 'quotes' from people in this target by looking at social media comments, forums, etc. We want to hear what they say and believe — in their own words.

Here is the list of questions:

**Demographic Deep-dives:**

Who is your customer?
What attitudes do they hold? (Religious, Political, Social, Economic)
What are their hopes and dreams?
What are their victories and defeats?
What external forces do THEY believe have prevented their best life?
What are their prejudices?
Summarize their core beliefs about life, love, and family in 1-3 sentences.

**Other Existing Solutions:**

What is the market already using? (List everything)
How was their experience?
What does the market like about existing solutions?
What does the market dislike about existing solutions?
Are there horror stories about existing solutions?
Does the market believe existing solutions work?
If not, why?

**Curiosities:**

Has anyone tried to solve the market's pain points in the past in a very unique way?
What was the result?
Is there a "conspiracy"-type story behind why old solutions didn't work?
Are there older attempts to solve the problem (pre-1960) that are unique?
What happened? Did they succeed but get forgotten? Or were they a failure? Why?

Examples:
1) Nikola Tesla in the energy sector. The large energy companies didn't want his solutions, he was discredited and humiliated. His inventions and discoveries were thrown into the dustbin of history until today.
2) The US Army tried to cure foot fungus during World War II — the surgeon general was in a desperate race because troops were losing service days. They eventually succeeded using Undecylenic Acid. But today we forget how effective it is.

**Corruption Theme:**

Is there a belief that the market's pain point once didn't exist, or wasn't this severe?
Is there a belief that it was recently aggravated by external forces?
If yes, what are these forces and why are they present?

Examples:
Obesity and diabetes as a result of Dr. Ancel Keys's influence.
This isolated group of people doesn't suffer from any condition/pain point most of us suffer from. In America WE suffer from this pain point. The reason is that we're exposed to these external forces while this isolated group is not.
```

#### Execution

1. Fill placeholder `[DEMO/MARKET INFO]` with the demographic collected at setup, integrated with what emerged from Phase 1 (dominant awareness level).

2. Run 3 rounds with distinct source pools:
   - **Round A — Social media**: WebSearch on Twitter, Instagram, TikTok, public Facebook groups. Recent posts (last 12 months). Extract verbatim quotes.
   - **Round B — Forum & community**: WebSearch on Reddit (relevant subreddits), Quora, vertical forums. Threads with significant engagement. Extract verbatim quotes.
   - **Round C — Review & comments**: WebSearch on YouTube comments (relevant videos), Amazon reviews, Trustpilot, app store reviews. Extract verbatim quotes.

3. For each round, provide complete answers to ALL prompt questions, supported by real quotes from that round's sources.

4. Hold the 3 rounds in working memory for unification in 3.3. Don't save them as separate files.

#### Quality rules per round

- ✅ Every psychographic claim must be backed by at least 1 supporting quote (verbatim, in quotation marks)
- ✅ Every quote must be accompanied by a source (URL or platform + date when available)
- ✅ If a question finds no signal, state so explicitly ("No signal emerged on X — possible gap to investigate")
- ❌ Never fabricate quotes
- ❌ Never paraphrase and present as verbatim

---

### 3.2 — Sociological Drivers & Maslow

This sub-phase covers the sociological drivers of purchase: status needs, belonging, identity, and their mapping to Maslow's hierarchy of needs.

#### Prompt to execute

```
Now I want to dig into the SOCIOLOGICAL and PSYCHOSOCIAL drivers of purchase for the target [DEMO/MARKET INFO] relative to the product [PRODUCT] in the [GEOGRAPHY] market.

I want to understand the deep motivations — not just rational, but status, identity, belonging, and self-actualization — that drive this target to buy. Use Maslow's framework and principles of consumer sociology.

Investigate and provide answers backed by real quotes (social posts, reviews, forums) where possible.

**1. Maslow needs active in the purchase**

Which levels of Maslow's hierarchy are activated in the purchase of this product? For each relevant level, describe:
- Physiological needs (physical health, survival, basic comfort)
- Safety (financial security, mental health, stability, risk reduction)
- Belonging (relationships, friendships, community, social acceptance)
- Esteem (status, recognition, success, self-esteem, prestige)
- Self-actualization (personal growth, expression, purpose, identity)

Indicate which levels are PRIMARY (truly driving the buying decision) and which are SECONDARY (reinforcing but not determining).

**2. Sociological purchase drivers**

- **Status**: Is the product bought to signal belonging to a social group or class? Which group?
- **Identity**: How does this purchase define "who I am" for the buyer? What kind of person do they feel they become after buying?
- **Tribe**: Which group/community does the buyer want to belong to? Which do they want to distance themselves from?
- **Aspiration**: Who do they want to become (future self) by buying this?
- **Conformity vs differentiation**: Do they buy to conform to their group or to stand out from the crowd?

**3. Social and situational triggers**

What social pressures, life events, comparisons, or moments typically trigger the purchase? Examples: new life phase (marriage, job, kids), comparisons with peers, public events, fear of social judgment, opportunities not to miss.

**4. Self-image: before vs after**

How does the buyer see themselves BEFORE the purchase? AFTER? What do others think of them before and after? What internal narrative do they build to justify the purchase to themselves and others?

**5. Language of identity**

What words, labels, self-definitions does this target use to describe who they are (or who they want to be)? What terms would they use to describe themselves positively? Which terms describe who they DON'T want to be?

For each point, back claims with real quotes (verbatim, with source) where possible.
```

#### Execution

1. Fill placeholders with setup data.

2. Run 1 dedicated round (not multi-round — this is a targeted deepening that builds on the 3.1 findings).

3. Preferred sources: Reddit (genuine introspection), vertical forums (target self-descriptions), Quora (deep motivations), YouTube comments on aspirational content in the sector.

4. Hold the output in working memory for unification (3.3).

---

### 3.3 — Psychographic unification

Takes all outputs from 3.1 (3 rounds) and 3.2 (Maslow/sociological) and synthesizes them into a single operational document.

#### Self-prompt for Copy Genius

```
I have conducted psychographic research on a specific target through 3 rounds across different source pools (social media, forums, reviews/comments) plus a dedicated sub-research on sociological and Maslow drivers.

For context, here is the framework I used:

[INCLUDE THE FULL 3.1 PROMPT]

Additionally, I dug separately into Maslow and sociological drivers with this framework:

[INCLUDE THE FULL 3.2 PROMPT]

Now I need to synthesize everything into a unified psychographic document.

The document must:
- Integrate the 3 rounds into a coherent profile (flag where rounds converge and where they diverge)
- Layer in the Maslow/sociological dimension as a cross-cutting view
- Preserve ALL verbatim quotes collected (with sources)
- Identify 1-3 DISTINCT avatar segments if the research reveals different psychographic clusters
- For each segment: demographic + psychographic + Maslow drivers + language
- End with the dominant market patterns

Create the document now.
```

#### Execution

1. Apply this self-prompt internally to the materials gathered in 3.1 and 3.2.

2. Identify segments: research may reveal 1 dominant avatar or 2-3 distinct segments. Detect this by looking at convergences in pain points, demographics, and drivers.

3. Write output to `brands/<brand>/research/psychographic.md` using the structure below.

#### Expected output structure

```markdown
# Psychographic Research — <brand>

## Summary
- Avatar segments identified: [N]
- Dominant market pain points: [short list]
- Primary Maslow drivers: [e.g., Esteem + Safety]

## Identified segments

### Segment 1: [Descriptive name, e.g., "Burned-out entrepreneurs"]
- Demographic profile: ...
- Mental state: ...
- Main pain points: ...
- Representative quotes:
  > "..." — source
  > "..." — source

### Segment 2: [...]

## Psychographic deep-dive (dominant segment)

### Hopes and dreams
[quotes + synthesis]

### External forces perceived as blocking
[quotes + synthesis]

### Solutions already tried
- Solution X: [experience, what they love, what they hate, quotes]
- Solution Y: ...

### Horror stories about existing solutions
[narrative quotes]

### Corruption/conspiracy stories that resonate
[if they emerge from research]

### Historical/forgotten attempts to solve the problem
[if they emerge]

## Sociological & Maslow drivers

### Active Maslow levels
- **Primary**: [e.g., Esteem, Safety] — with explanation
- **Secondary**: [e.g., Belonging] — with explanation

### Status drivers
[how the purchase signals belonging/status]

### Identity: before vs after
- Before: [how they see themselves]
- After: [how they want to see themselves]

### Tribes of belonging and distinction
- Wants to belong to: ...
- Wants to distance from: ...

### Recurring social triggers
[events/pressures that trigger the purchase]

## Market language

### Words/expressions the target uses (verbatim)
- "..." (for the problem)
- "..." (for the desired state)
- "..." (for self-description)

### Language to AVOID (outsider words the target perceives as fake)
[if emerged from research]

## Dominant market patterns
[final synthesis]

## Convergences and divergences across rounds
- Convergences: [where all pools agree]
- Divergences: [where pools differ — interesting for hypotheses]
```

---

### 3.4 — Descriptive Language Follow-up (OPTIONAL)

Run only if:
- Client explicitly requests it
- 3.1 rounds didn't provide sufficiently rich language
- Main pain points need deeper linguistic exploration

#### Prompt to execute

```
Thanks. Now continue the research and leverage social signals (social media, forums, etc.) to provide the following:

1. As many quotes as possible from [DEMO] describing their specific pain points around [SPECIFIC PAIN POINTS]. I want to hear how they think about these specific pain points in their own words.

2. As many quotes as possible from [DEMO] describing the opposite: [DESIRED STATE]. What adjectives and other descriptors do they use?
```

#### Execution

1. Fill placeholders with: target demographic, specific pain points that emerged from research, corresponding desired state.

2. Run 1 targeted round across social + forum + reviews, seeking maximum density of verbatim quotes.

3. Integrate the output into the "Market language" section of the psychographic document (3.3). Don't create a separate file.

---

### 3.5 — Sales Call Transcripts (OPTIONAL)

Run only if the client provides sales call transcripts.

#### Prompt to execute

```
I'm doing deep psychographic research for a marketing campaign in the [NICHE] sector. The product is [PRODUCT] and the target is [DEMO].

I'm attaching transcripts of real sales calls with prospects from our target. These people are among the closest-to-purchase in our market, so their words are extremely valuable.

Analyze these transcripts in depth and provide:

1. **Recurring pain points and frustrations**: Which problems do they mention most often? Use their exact words where possible.

2. **Purchase objections**: What doubts, fears, or resistances do they express? What holds them back from proceeding?

3. **Emotional triggers**: Which moments in conversation reveal strong emotion (frustration, hope, urgency, fear)? What led them to book the call?

4. **Recurring language and phrases**: Which expressions, idioms, specific words do they repeatedly use to describe their problem and desired outcome? I want the exact language I could reuse in copy.

5. **Desired state**: How do they describe their ideal situation? What do they really want, beyond the product itself?

6. **Solutions already tried and why they didn't work**: What have they already attempted? Why are they still searching?

7. **Decisive factors**: What seems to push them closer to a buying decision? Which arguments or promises resonate most?

For each point, include direct quotes from the transcripts where possible, so I have authentic material to use in copy.

Proceed now, thanks.
```

#### Execution

1. Fill placeholders with: niche, product, demographic.

2. Read the transcripts provided (uploaded files or indicated paths).

3. Run the analysis following the prompt.

4. Integrate the output as an additional section in the psychographic document (3.3): "Insights from real sales calls". This is the highest-value section — it comes from real prospects at maximum purchase proximity.

#### Privacy note
Before processing transcripts, Copy Genius reminds the client: "Please anonymize names and sensitive personal data in the transcripts if you haven't already. Can I proceed?"

---

### Closing gate — do not close this phase if:

- ✗ Any section of the 3.1 prompt left uncovered
- ✗ Fewer than 15 total verbatim quotes (with sources)
- ✗ Primary Maslow drivers not explicitly identified
- ✗ Avatar segments not separated (or single-segment not confirmed)
- ✗ Convergences/divergences across rounds not made explicit

If any check fails: do NOT close the phase — launch a targeted additional round to fill the gap and inform the client of the failed check and the action taken.

---

## PHASE 4 — Unified Research Document

### Goal

Take ALL the research from prior phases (Market Awareness, Competitor, Psychographic) and create a SINGLE synthesized, operational document — the "unified research brief" — that will be the foundation for all subsequent copy creation.

### Self-prompt for Copy Genius

```
I'm working on a marketing campaign in the [NICHE] sector. The product is [PRODUCT] and we're focused on customers in [REGION].

So far I've conducted research on Product/Market Awareness Levels, Competitors, and Psychographic Research (including Maslow/sociological drivers, and — if provided — sales call analysis).

All outputs are saved in:
- brands/<brand>/research/market-awareness.md
- brands/<brand>/research/competitor-research.md
- brands/<brand>/research/psychographic.md

I now need to create a single unified research brief containing all the key elements needed to successfully implement this campaign. This will be the document shared with every skill/specialist file read inline (Strategist, VSL/Landing/Email/Ads specialists) as background and context while generating copy and marketing assets — most direct response.

I don't need information on TAM size or specific strategies from the deep research reports. Instead, I need:

1. Demographic Overview of the Target Market
Focus on the people primarily in the dominant awareness segment(s) identified in Phase 1.

2. Psychographic Overview of the Target Market

What are their problems and pain points?

What are their hopes and dreams?
(Specifically, what their ideal future state looks like when the problem is solved. What would it look like? How would they appear and feel? When they dream and imagine this future, what else is true about their life at that point?)

What are their primary sociological drivers and active Maslow levels?

How do they see themselves more broadly, what language should we use when speaking to them, and what language should we avoid?

What are the Main Promises we can make to them, and that they'd want to hear, when it comes to solving their pain points?

3. What will be their biggest objections to our marketing campaigns for our product, and how can we address them?

4. What existing solutions has the market already tried? Why are those existing solutions not sufficiently adequate?

5. Who are the top 3-5 competitors, how do they position themselves, and what market gaps can we exploit?

6. Dominant awareness level: operational implications for copy (length, education required, asset types).

7. Required proof balance: based on the objections, skepticism signals, and failed-solutions history emerging from the research, identify the required proof balance for this market per the proof-elements categories.

Create the document now.
```

### Execution

1. Read all `research/` files produced in Phases 1-3.

2. Apply the self-prompt internally to synthesize.

3. Identify the required proof balance per the [proof-elements](core/strategic-frameworks/proof-elements.md) categories (concrete proof, demonstrations, social proof, authority/credentials, risk inversion, specificity): which categories this market demands most, given its objections and its history of failed solutions. Document the result in section 8 of the brief.

4. Write output to `brands/<brand>/research/unified-brief.md`.

### Expected output structure

```markdown
# Unified Research Brief — <brand>

> Deep research synthesis. Operational foundation for all skill/specialist files read inline.

## Project setup
- Brand: ...
- Niche: ...
- Main product: ...
- Market: ...
- Language: ...

## 1. Market — awareness and segments
- Dominant awareness level: ...
- Operational implications: ...
- Avatar segments identified: ...

## 2. Avatar — unified profile

### Demographic
[synthesis from psychographic.md]

### Psychographic
- Main pain points: ...
- Hopes and dreams: ...
- Ideal future state: ...
- Forces perceived as blocking: ...
- Core beliefs: ...

### Maslow & sociological drivers
- Primary levels: ...
- Status / identity / belonging drivers: ...
- Recurring purchase triggers: ...

### Language
- Words/expressions the target uses: ...
- Language to avoid: ...

### Self-image
- Before purchase: ...
- After: ...

## 3. Main promises (what the target wants to hear)
[list of top promises that resonate with the target]

## 4. Main objections (and how to address them)
- Objection 1: ... → strategy: ...
- Objection 2: ... → strategy: ...

## 5. Existing solutions already tried
- Solution X: dissatisfaction on Y
- Solution Z: ...

## 6. Competitor landscape
- Top 3-5 competitors: ...
- Market patterns: ...
- Exploitable gaps: ...

## 7. Operational implications for copy
- Suggested asset types: ...
- Typical length: ...
- Tone: ...
- Education required: ...
- Potential hooks (to test): ...

## 8. Required proof balance (per proof-elements categories)
- Categories this market demands most: ...
- Why (objections / skepticism / failed-solutions history): ...

## Sources and references
[links to research/ documents used in the synthesis]
```

### Closing gate — do not close this phase if:

- ✗ Any of the 8 sections missing
- ✗ Main promises not distilled (3-5)
- ✗ Top objections lack a handling strategy
- ✗ Operational implications for copy not concrete

If any check fails: do NOT close the phase — launch a targeted additional round to fill the gap and inform the client of the failed check and the action taken.

---

# MODE B — Quick Intake

> Alternative to autonomous web research. Copy Genius runs an interactive structured intake. The client provides what they know; Copy Genius organizes it into the unified brief format and flags any gaps. Output: `unified-brief.md` (the same artifact as Mode A).

## Goal

Produce a `unified-brief.md` populated from the client's existing knowledge rather than from web research. Mark gaps explicitly. Offer to fill gaps via targeted Mode A runs on specific dimensions.

## Execution

Copy Genius runs the intake **one block at a time**. For each block, asks the questions, waits for the client's answers, captures verbatim where useful, and moves on. Doesn't pretend to know what the client hasn't said.

### Block 1 — Market & Awareness
- "Where does the majority of your target market sit on the awareness scale: Unaware / Problem Aware / Solution Aware / Product Aware / Most Aware? What evidence do you have?"
- "Rough market size or scale you're targeting?"
- "Geography and language?"

### Block 2 — Avatar
- "Describe the dominant avatar segment in psychographic terms — not just demographics, but mental state, beliefs, fears, desires."
- "Top 3 pain points they live with?"
- "Ideal future state — what would their life look like with the problem solved?"
- "What forces or things do they blame for being stuck?"
- "One avatar or multiple distinct segments? If multiple, describe each."
- "Any specific quotes from real customers/prospects? Paste anything you have."

### Block 3 — Sociological drivers & Maslow
- "Which Maslow levels are primarily active in the buying decision (safety, belonging, esteem, self-actualization)?"
- "Does this purchase signal status, identity, or tribe belonging? How?"
- "What life events or social triggers typically push them to buy?"
- "How do buyers see themselves before vs after the purchase?"

### Block 4 — Solutions tried
- "What solutions has the market already tried? Why are they unsatisfied?"
- "Any 'horror stories' about competing solutions or generic alternatives?"

### Block 5 — Competitors
- "Top 3-5 direct competitors?"
- "For each: main angle/promise? What do their customers complain about?"
- "Recurring hooks/messages across the category?"

### Block 6 — Objections & promises
- "Top 3 objections you face when selling this product?"
- "What promises do you think resonate most — even ones you're not yet making explicitly?"

### Block 7 — Market language
- "Specific words or expressions the target uses? Things to avoid?"
- "Any inside jokes or community expressions?"

## Output

Copy Genius synthesizes the answers into `brands/<brand>/research/unified-brief.md` using the same structure as the Mode A output. Verbatim quotes from the client are preserved when meaningful — they become copy-grade input.

## Gap flagging

Any block where the client said "I don't know" or gave thin answers is marked in the brief with a `⚠️ Gap` note. At the end, Copy Genius summarizes all gaps and offers targeted deep research:

> "Brief produced from your input. The following sections have gaps:
> - ⚠️ Competitor messaging — no specific data provided
> - ⚠️ Maslow drivers — partially answered
> - ⚠️ Sales call insights — none available
>
> I can run targeted Deep Research on these specific gaps (much faster than the full Mode A — just the missing dimensions). Want me to? Otherwise the brief is ready as-is."

If the client says yes → run targeted Mode A on JUST the gap dimensions (not the full 4 phases).

## Quality threshold

If more than 4 of 7 blocks have substantial gaps, Quick Intake is insufficient. Copy Genius warns:

> "Quick Intake produced an incomplete brief — more than half the strategic dimensions have gaps. Strong recommendation: run Full Deep Research (Mode A) before any copy work, OR run targeted Mode A on the missing dimensions. Want to switch?"

The client can still keep the partial brief and proceed, but the warning is annotated in the research document itself — a `## Caveats` section at the top of `unified-brief.md` listing the gapped dimensions. Copy work on a thin brief will likely underperform.

---

## ⛔ END OF CORE SKILL — Approval Gate

The core skill ends here. The deliverable is `brands/<brand>/research/unified-brief.md`.

**Copy Genius must NOT proceed to brand file population on its own.** It stops and tells the client:

> "Deep research complete. The final document is in `brands/<brand>/research/unified-brief.md`.
>
> Please review it carefully and verify:
> - Are the avatar segments identified accurate?
> - Do the main promises resonate with what you see in the market?
> - Are the mapped objections complete?
> - Do the operational implications look right?
>
> Once approved, let me know. If you want, I can then integrate the findings into the brand-specific files (brand.md, avatars, products, offers, competitors) — but only on your explicit confirmation."

From here:
- If the client asks for corrections → enter brief revision mode (can run targeted additional rounds, integrate missing signals, reformulate). Don't proceed further until the brief is confirmed.
- If the client approves but doesn't request population → the skill ends here.
- If the client approves AND explicitly requests "populate the files" → enter Phase 5.

---

## PHASE 5 (OPTIONAL, GATED) — Brand File Population

> **Canon note — read before using**
>
> The target files and their formats are owned by `brands/_template/` — the canonical brand scaffold. Phase 5 defines NO alternative schemas and inlines NO templates: it maps the content of `unified-brief.md` onto the canonical files (`brand.md`, `avatars/<segment>.md`, `offers.md`, `products.md`, `competitors/<name>.md`), integrating the fields that are still empty. If the canonical templates evolve, this phase follows them automatically.

### Prerequisites to enter Phase 5

✓ `unified-brief.md` exists in `research/`
✓ The client has explicitly confirmed approval of the brief
✓ The client has explicitly requested "populate the files"

If any of the three is missing, do NOT enter Phase 5.

### Step 0: Final confirmation before writing

Even with prerequisites met, before touching disk, Copy Genius shows a summary:

```
Deep research complete. Output:
- 3 avatar segments identified: [...]
- 4 main competitors mapped
- Dominant awareness: Problem Aware
- Primary Maslow drivers: Esteem + Safety

I'm about to populate (canonical files only — empty fields integrated, nothing overwritten):
- brand.md (empty fields)
- avatars/ (3 files, one per segment)
- competitors/ (4 files)
- products.md / offers.md (empty fields, if research adds factual market data)

Proceed, or do you want to review unified-brief.md first?
```

If the client confirms, proceed. If they want a review, stop and wait.

---

### Step 1: Integrate `brand.md`

Target format: the canonical [brand.md template](brands/_template/brand.md) — no alternative schema.

- Fill ONLY fields that are empty or marked `[DA DEFINIRE]` / `[TO BE DEFINED]` — typically: Niche & Market Category (market context) and Positioning (informed by competitor research and market gaps).
- NEVER overwrite content already curated by the copywriter (brand-creation owns brand identity, story, frontman, USP as the brand states it). If a research finding CONTRADICTS an existing field, do not edit — surface the conflict to the client.
- Point the brand's references to the research documents in `research/` where the template links related files.

---

### Step 2: Populate `avatars/<segment>.md`

For each avatar segment identified in `psychographic.md` and confirmed in `unified-brief.md`, create — or integrate, if brand-creation seeded it — `brands/<brand>/avatars/<segment-slug>.md` using the canonical [avatar template](brands/_template/avatars/avatar.md) structure: its YAML frontmatter (`avatar`, `segment_name`, `brand`, `dominant_awareness`) and its sections (Snapshot, Demographics, Current/Desired Situation, Identity, Social Mirror, Core Beliefs, Maslow & Sociological Drivers, Forces Perceived as Blocking, Pains, Desires, Solutions Already Tried, Objections, Market Wording, Triggers, Promises That Resonate, Reference Quotes).

- The research findings map directly onto the template sections; preserve ALL verbatim quotes with sources.
- Market language (tribal vocabulary, words that repel, search queries) goes into the avatar's **Market Wording — How They Talk** section. No separate `wording.md` file exists in the canon — do not create one.
- If a seed avatar exists from brand-creation: integrate around it, never overwrite the seed's verbatim content; remove the "to be completed via deep-research" disclaimer once the psychographic profile is in.

---

### Step 3: Populate `competitors/<name>.md`

For each main competitor identified (3-5 max), create `brands/<brand>/competitors/<competitor-slug>.md` using the canonical [competitor template](brands/_template/competitors/competitor.md) structure (Snapshot, Funnel & Acquisition, Messaging & Positioning, Sample copy, Customer feedback, Strategic strengths/weaknesses, Exploitable gaps, Sources).

---

### Step 4: Integrate `products.md` and `offers.md`

These files are authored by brand-creation; research only integrates empty fields with market-factual findings — e.g., category pricing benchmarks in a product's Notes, market objections relevant to an offer's guarantee / urgency framing. Never restructure, never overwrite. If research contradicts a documented price or claim, surface it — don't edit.

---

### Step 5: Report completion

Summarize in chat what was populated (files created / fields integrated / conflicts surfaced). There is no vault-level log file. Any warning that must persist (gaps, thin dimensions, open conflicts) is annotated in the `## Caveats` section of `unified-brief.md`.

---

## Quality gates — summary

Each research phase ends with its own **"Closing gate — do not close this phase if"** block, enforced before the phase closes:

- Phase 1 — Product-Market Awareness → gate at the end of PHASE 1
- Phase 2 — Competitor Research → gate at the end of PHASE 2
- Phase 3 — Psychographic → gate at the end of PHASE 3 (after sub-phase 3.5)
- Phase 4 — Unified Brief → gate at the end of PHASE 4

---

## Client interaction triggers

During execution, Copy Genius:

- **At the end of each phase**: updates the client with a 2-3 line summary
  > "Phase 1 complete. Dominant market: Problem Aware (60%) + Solution Aware (25%). Implication: educational copy, advertorials, and VSLs needed. Proceeding to Phase 2."

- **If a critical input is missing**: stops and asks
  > "To proceed with Phase 2 I need to know the main funnel type (eCommerce or DR). Which?"

- **If research reveals a strategic surprise**: flags it
  > "30% of the market is already Product Aware — higher than initially assumed. This changes the operational implications. Continue or pause to discuss?"

- **Before final population**: explicit confirmation required (see Phase 5 Step 0)

---

## Cross-references

This skill integrates with:
- [awareness-levels](core/strategic-frameworks/awareness-levels.md) — canonical definition of the 5 levels
- [proof-elements](core/strategic-frameworks/proof-elements.md) — used in Phase 4 to identify required proof balance
- [strategist](skills/strategist.md) — the Phase 1 Discovery skill that consumes the Unified Research Brief produced here as primary input for funnel brief construction
- [CLAUDE](CLAUDE.md) — the orchestrator that invokes this skill when research is needed

---

## Operational notes

- **Expected runtime**: a full deep research takes 30-60 minutes of actual execution (Claude + WebSearch). The client sees progress phase by phase.
- **Refresh**: the research can be re-run on an existing brand (e.g., after 6 months). In that case, Copy Genius preserves the old version in `research/archive/` and produces a new one.
- **Language**: outputs are generated in the brand's language (the `language` field collected at setup). Verbatim quotes remain in their source's original language.
