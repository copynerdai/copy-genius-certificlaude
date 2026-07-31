# Copy Genius — Index

> Map of the wiki. Use this page to navigate. Start here when you open the vault and don't know where to go next.
>
> **Note**: this file is the **human-facing index**. The orchestrator agent reads [CLAUDE.md](CLAUDE.md) for routing logic and skill registry. The two files complement each other; do not edit them as one.

---

## What this wiki is

A direct response copywriting knowledge base, run by a single orchestrator that reads skill files and executes their workflows inline. It contains the strategic frameworks, writing principles, format specialists, and section specialists used to produce copy across all Copy Genius brands. Every brand has its own folder; brand-specific knowledge lives there and never bleeds into other brands.

---

## Quick start

| Situation | Where to go |
|---|---|
| I want to write a piece of copy (landing, email, ad, VSL, etc.) | Ask the orchestrator directly — say what you want to write and for which brand/funnel. Awareness level and strategy already live in the funnel brief; the system routes from there. |
| I want to understand a strategic concept (awareness, mechanism, chain of beliefs, big idea, etc.) | The files in `core/strategic-frameworks/` — see the "Strategic frameworks" table below |
| I want to understand HOW the copy should READ (voice, style, anti-AI rules) | [core/writing/writing-principles.md](core/writing/writing-principles.md) + [core/writing/emotional-intelligence.md](core/writing/emotional-intelligence.md) |
| I'm setting up a new brand | Ask the orchestrator: *"create a new brand"* → routes to [brand-creation](skills/brand-creation.md) |
| I want to drop a swipe or note I found in the wild | Drop it in the `raw/` folder (parking) → then ingest into the swipe library via [swipe-ingestion](skills/swipe-ingestion.md) or distill into [strategy-notebook.md](strategy-notebook.md) |
| I want to know what skills are available | See "Skills, format specialists, section specialists" below or read the registry in [CLAUDE.md §3](CLAUDE.md) |
| I want to verify the wiki is structurally clean | Ask the orchestrator: *"wiki health check"* → routes to [wiki-health-check](skills/wiki-health-check.md) |
| I want to see what ads my competitors are running | Ask the orchestrator: *"monitora la concorrenza"* (or `/ad-scraping`) → routes to [ad-scraping](skills/ad-scraping.md); the archive it builds lives in `monitoraggio/` |

---

## The four pillars + brands + user workspaces

```
copy-genius/
│
├── KNOWLEDGE          → core/                      ← the static reference layer
├── SKILLS             → skills/                    ← active operations (research, strategy, setup)
├── FORMAT SPECIALISTS → format-specialists/        ← produce complete pieces
├── SECTION SPECIALISTS → section-specialists/      ← produce specific sections
│
├── BRANDS             → brands/<brand-slug>/       ← per-brand instances
│
├── MONITORING         → monitoraggio/              ← competitive-ads archive (written by ad-scraping)
│
└── USER WORKSPACES    → raw/, swipe/,             ← personal collection
                         strategy-notebook.md         (cross-brand, user-owned)
```

The orchestrator ([CLAUDE.md](CLAUDE.md)) routes user intent to the right pillar.

---

## Knowledge base (core/)

The static reference layer. Read by skills, specialists, and the orchestrator on demand.

### Strategic frameworks — the WHAT/WHY

| File | What it covers |
|---|---|
| [mass-desire](core/strategic-frameworks/mass-desire.md) | The dominant desire that powers the campaign |
| [awareness-levels](core/strategic-frameworks/awareness-levels.md) | The 5 levels of prospect awareness (Most/Product/Solution/Problem/Unaware) |
| [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) | The proprietary mechanism that differentiates the offer |
| [naming](core/strategic-frameworks/naming.md) | Naming conventions for mechanisms, bonuses, guarantees, tiers |
| [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) | The catalog of beliefs the copy must install, mapped by awareness |
| [proof-elements](core/strategic-frameworks/proof-elements.md) | Proof typology and stacking rules |
| [big-idea](core/strategic-frameworks/big-idea.md) | Big Idea construction and conditions of use |
| [offer-construction](core/strategic-frameworks/offer-construction.md) | The 7 components of an irresistible offer + critical evaluation |
| [funnel-architecture](core/strategic-frameworks/funnel-architecture.md) | How touchpoints distribute beliefs across a funnel |
| [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) | The strategic levers copy activates |
| [funnel-brief](core/strategic-frameworks/funnel-brief.md) | The template of the central deliverable |

### Writing — the HOW

| File | What it covers |
|---|---|
| [writing-principles](core/writing/writing-principles.md) | 10 outcome-focused qualities + Tier 1 zero-tolerance bans (em-dash, rigid triads, negation-affirmation) + Tier 2 calibrated diagnostics + Gulpease readability |
| [emotional-intelligence](core/writing/emotional-intelligence.md) | The atomic emotion database for granular emotional dimensionalization |

### Global feedback rules

| File | What it covers |
|---|---|
| [feedback-rules](core/feedback-rules.md) | Cross-brand user-driven rules honored on every interaction |

---

## Skills (skills/)

Active operations. Each skill is a workflow file the orchestrator reads and executes inline on intent match.

| Skill | Status | What it does |
|---|---|---|
| [deep-research](skills/deep-research.md) | Active | Market/audience/competitor/psychographic research; produces Unified Research Brief |
| [strategist](skills/strategist.md) | Active | Phase 1 Discovery; produces the funnel brief |
| [brand-creation](skills/brand-creation.md) | Active | Guided new-brand setup (interview + scraping the brand's own materials) |
| [ad-scraping](skills/ad-scraping.md) | Active | Weekly competitive-ads monitoring on the Meta Ad Library (no login). Attiva con `/ad-scraping` o "monitora la concorrenza". Scrive l'archivio `monitoraggio/`. Dipendenze al primo uso: [setup](skills/ad-scraping/setup.md) |
| [wiki-health-check](skills/wiki-health-check.md) | Active | On-demand diagnostic scan (broken links, orphan files, registry consistency, drift, banned phrases). Read-only; never modifies files |
| [swipe-ingestion](skills/swipe-ingestion.md) | Active | Analyzes a proven piece into a swipe entry (CARD + segmented SKELETON + element extraction + index row); copywriter approves before save |
| [document-formatter](skills/document-formatter.md) | Active | Applies the output formatting standard to produced copy; outputs paste-ready Markdown + Google Doc setup checklist |

---

## Format specialists (format-specialists/)

Produce complete pieces. Each consumes knowledge + section specialists to write the finished material.

| Specialist | What it produces |
|---|---|
| [email-specialist](format-specialists/email-specialist.md) | Email sequences and single emails (21 types + 7 archetypes) |
| [lp-specialist](format-specialists/lp-specialist.md) | Landing pages, sales pages, opt-in pages |
| [ad-specialist](format-specialists/ad-specialist.md) | Static paid-ad copy (image, carousel, captions, visual hooks, button/thumbnail headlines) |
| [advertorial-specialist](format-specialists/advertorial-specialist.md) | Long-form native-content advertorials |
| [upsell-specialist](format-specialists/upsell-specialist.md) | Upsell pages, upsell VSL scripts, downsell variants |
| [blog-specialist](format-specialists/blog-specialist.md) | Blog articles, newsletters, guides, white papers |
| [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) | Every spoken-over-video script (story ads, video ads, radio-style, short/medium/long VSL) |
| [infomercial-specialist](format-specialists/infomercial-specialist.md) | Infomercial-style entertainment-led DR videos (companion to vsl-and-video-ad-specialist) |
| [book-specialist](format-specialists/book-specialist.md) | Long-form books (lead-magnet books, authority books, brand autobiographies, editorial manuals) |

---

## Section specialists (section-specialists/)

Produce specific sections. Invoked by format specialists during writing flow, or directly by the orchestrator for standalone variants.

| Specialist | What it produces |
|---|---|
| [headline-specialist](section-specialists/headline-specialist.md) | Headline blocks (pre-headline + H1 + sub) for LP / sales / ad / blog / VSL thumb. 71 patterns in 18 categories + swipe library |
| [hook-specialist](section-specialists/hook-specialist.md) | Hooks for any format (email subject lines, ad openers, VSL openings, advertorial leads) |
| [lead-specialist](section-specialists/lead-specialist.md) | Lead sections — opening narrative bridging hero/headline into the body. 7 strategic lead types + 24 tactical opening angles |
| [marketing-thesis-specialist](section-specialists/marketing-thesis-specialist.md) | Mechanism argumentation section (UMP + UMS). 7 reveal styles + competition destruction |
| [offer-specialist](section-specialists/offer-specialist.md) | Complete offer block (Chiusura Divina + product reveal + price + bonus + guarantee + CTA + P.S. system) |
| [faq-specialist](section-specialists/faq-specialist.md) | FAQ block (14-question baseline + 7 answer patterns by objection type + canonical sequencing) |
| [bullet-point-specialist](section-specialists/bullet-point-specialist.md) | Bullet points (curiosity, tease, page-reference, mystery — formerly "fascinations") |

---

## Brands (brands/)

One folder per brand. Each brand holds its own foundations, avatars, offers, products, swipe, testimonials, funnel briefs. Zero contamination between brands.

Canonical structure:

```
brands/<brand-slug>/
├── brand.md                  ← brand identity, frontman, positioning
├── brand-copy-rules.md       ← voice and style rules (read by writing specialists)
├── products.md               ← product specifications
├── offers.md                 ← offer compositions (price, bonuses, guarantee, urgency)
├── swipe.md                  ← brand-specific swipe library (analyzed)
├── testimonials.md           ← proof inventory
├── avatars/                  ← per-segment avatar files
├── competitors/              ← competitor profiles
├── research/                 ← research documents (populated by deep-research)
├── transcripts/              ← source materials (interviews, podcasts)
├── funnel-briefs/            ← campaign briefs produced by the strategist
└── procedures/               ← brand-specific operational rules
```

Active brands: browse the `brands/` folder — every subfolder except `_template/` is a brand instance.

---

## User workspaces

Personal, cross-brand, user-owned. Not part of the four pillars; they belong to the user, not to a brand or to the system.

| Location | Purpose |
|---|---|
| `raw/` (folder) | Parking area. Drop PDFs, screenshots, URLs, snippets — anything to process later. The orchestrator reads on request and suggests routing. |
| [swipe/index.md](swipe/index.md) | Personal swipe library. Organized by format folders `swipe/<formato>/` (entry + `full-text/`), compiled cross-piece element libraries in `swipe/elements/`, full texts with a language firewall (structure crosses languages, phrasing never); populated via the [swipe-ingestion](skills/swipe-ingestion.md) skill. |
| [strategy-notebook.md](strategy-notebook.md) | Strategy notebook. Raw observations from courses, podcasts, conversations, books — distilled by the orchestrator using the wiki's existing strategic frameworks. |

---

## How the system works (in 30 seconds)

1. **You speak to the orchestrator** in natural language. The orchestrator is the agent that loads [CLAUDE.md](CLAUDE.md) at session start.
2. **It identifies the intent** (write copy, analyze swipe, distill note, research market, set up brand, audit funnel, run health check).
3. **It routes to the right pillar**:
   - Strategic question → reads `core/strategic-frameworks/`
   - Writing piece → loads the right format specialist + relevant section specialists
   - Active operation → invokes the right skill
   - Brand context → loads the brand's files
4. **It produces the deliverable** in the brand's voice (read from `brands/<brand>/brand-copy-rules.md`), applying [writing-principles](core/writing/writing-principles.md) for style and anti-AI compliance.
5. **It hands back** the output for your review.

For the full operational protocol (state awareness, intent recognition, routing logic, handoff protocol, naming conventions), read [CLAUDE.md](CLAUDE.md).

---

## Maintaining this index

When a new specialist, skill, brand, or user workspace is added to the wiki, update this index AND the skill registry in [CLAUDE.md §3](CLAUDE.md). The two files mirror each other; the registry is the source of truth, this index is the human-readable view.

When a specialist goes from Placeholder to Active, update the description here too — the index should match current capabilities, not legacy state.
