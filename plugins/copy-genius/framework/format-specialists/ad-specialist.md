# ad-specialist

> Full-piece format specialist. Writes paid-advertising copy across paid social (feed and stories), native ad networks, paid search, and display — any single ad unit where copy + visual structure work together to interrupt a scroll, earn the click, and pre-qualify the lead.
>
> Invoked by the orchestrator ([CLAUDE](CLAUDE.md)) when intent recognition matches ad writing. Reads the funnel brief, the brand wiki, the universal writing libraries, and the component specialists relevant to each ad it writes — never reinvents what's documented elsewhere.
>
> **Self-contained file**: this specialist holds the ad-specific knowledge base (anatomy at the ad level, compliance discipline, compositional patterns, image conventions) and the operational workflow. For the craft of individual components (hook opener, headline, bullet points), it references the corresponding component specialists — supplying only the ad-specific execution tuning. The structure of each piece comes from the funnel brief; this file teaches *how* to execute that structure as a paid ad.
>
> **Scope boundary**: this specialist owns **static** ad creatives only — image, carousel, slideshow, native, search, lead form. Spoken video scripts → [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md); this file writes only the PRIMARY TEXT, headline and thumbnail title that accompany a video ad.

---

## 0. Execution path — read this first

> Always read before writing: funnel brief touchpoint block · brand-copy-rules · feedback-rules (brand overrides global).
> **Structure selection (Mode 1 step 5)**: before planning, the orchestrator queries the [swipe-index](swipe/index.md) for matching structures — if a SKELETON (or composition) was chosen, it is the piece plan's structural spine; adapt it to the brief, never the reverse. If none chosen, plan from this file's own models.
> Tier 1 style bans apply while DRAFTING, not only at QA (writing-principles B.1–B.3): zero em-dash, no "Not X. But Y.", no banned phrases.
> Writing invocation: brief → pre-writing reads (§3 inputs + §9 Fase 1, including the §6.3 compliance discipline; cold traffic → complete Appendix A1 first) → §8 format/length selection + §8.5 production mode (single ad vs modular kit) → §9 application protocol → §10 output formats → §12 revision checklist (QA — its Compliance block is the canonical compliance list).
> Reference sections — consult on demand only: Part B taxonomies (§4 principles, §5 anatomy, §6 conventions, §7 models + templates — open the entries the piece needs, not the whole catalog) and Appendix A2 (swipe index of §7).

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
- §7 [Compositional patterns — 8 ad models + 8 ad templates](#7-compositional-patterns--8-ad-models--8-ad-templates)

### Part C — Operational workflow
- §8 [Selecting ad type and length](#8-selecting-ad-type-and-length)
- §9 [Application protocol — ad-specific notes](#9-application-protocol--ad-specific-notes)
- §10 [Output formats](#10-output-formats)

### Part D — Quality control & references
- §11 [Common pitfalls](#11-common-pitfalls)
- §12 [Revision checklist](#12-revision-checklist)
- §13 [Cross-references](#13-cross-references)

### Appendix
- §A1 [Pre-write research checklist (18 points)](#a1-pre-write-research-checklist-18-points)
- §A2 [Swipe library — 8 strategic models + 8 tactical templates](#a2-swipe-library--8-strategic-models--8-tactical-templates)

---

# PART A — Identity & scope

## 1. Purpose

Produce ready-to-deploy ad copy for:

- **Paid social ads** — single-image, carousel, slideshow, and interactive-experience units on feed, stories, and reels surfaces
- **Native ads** — in-feed sponsored content units on native networks (Outbrain, Taboola, and similar editorial placements where the ad camouflages as content)
- **Paid search ads** — text-only or text-plus-image units in search engine result pages
- **Display ads** — banner and rich-media units on display networks
- **Section copy for any of the above** — when the brief specifies a partial scope (e.g., "give me 5 hook variations", "rewrite the button copy", "draft 3 image overlays")

Does NOT produce:

- **Spoken video scripts** → [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md); this file writes only the PRIMARY TEXT, headline and thumbnail title that accompany a video ad
- Hooks in isolation — handled by [hook-specialist](section-specialists/hook-specialist.md), unless none is supplied in the brief and the specialist drafts placeholders
- Headlines in isolation — handled by [headline-specialist](section-specialists/headline-specialist.md), unless none are supplied
- Bullet points — handled by [bullet-point-specialist](section-specialists/bullet-point-specialist.md), unless the brief gives none and the ad includes them
- The funnel brief or strategic decisions — handled by [strategist](skills/strategist.md)
- Landing pages, VSL scripts, advertorials, emails, upsells — handled by their respective specialists
- Visual design, image sourcing, video production — the specialist writes `[DESIGN NOTE:]` directions for the designer/editor, not the assets themselves
- Platform-specific technical setup (campaign objectives, audience configuration, bidding, pixel installation) — those live in the platform's own documentation, not in this copy specialist

The specialist is the **executor**, not the strategist. Strategic decisions (awareness, sophistication, chain of beliefs, Big Idea, offer composition, attack angle, traffic temperature) come from the brief. The specialist translates those decisions into ad units that respect the format's conventions, exploit the visual layer, and survive the host platform's compliance review.

---

## 2. When invoked

The orchestrator routes to ad-specialist when intent recognition (§5 of [CLAUDE](CLAUDE.md)) matches:

- "write the ads", "scrivi le inserzioni", "draft the campaign creatives"
- "give me 5 hook variations for this offer"
- "rewrite this ad", "rifai questa creatività", "make this ad compliant"
- "draft a carousel for [offer]"
- "I need a native ad headline + body for [angle]"

**Video redirect**: requests like "scrivimi uno script per video ad" / "write the video ad script" do NOT route here — spoken video scripts belong to [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md). This file writes only the PRIMARY TEXT, headline and thumbnail title that accompany a video ad.

The orchestrator runs the **Brief readiness check** ([CLAUDE §6](CLAUDE.md)) before invoking. If the brief is Draft / In-Review / missing for this touchpoint, the orchestrator surfaces the gap before calling ad-specialist.

---

## 3. Required inputs

The specialist needs these to start. Missing critical inputs are escalated to the orchestrator.

**From the funnel brief** ([funnel-brief](core/strategic-frameworks/funnel-brief.md) of the specific funnel):

- §3.2 Mass Desire — the dominant desire calibration
- §3.3 Awareness Level — primary calibrator for copy length and angle
- §3.4 Sophistication — calibrates headline approach (claim-based vs mechanism-based vs identity-based)
- §3.5 Avatar reference — voice anchors, blocking beliefs, lived-experience details
- §3.6 Offer — the offer being promoted (free lead magnet, low-ticket front-end, application, etc.)
- §3.7 Big Idea — the angle each ad expresses
- §3.8 Chain of Beliefs — the rings the ad opens or installs (typically Ring 1-2 for cold, Ring 3-4 for warm retargeting)
- §3.9 Proof inventory — testimonials, data, authority cites available for the ad
- §3.10 Reference pointers — which testimonials, transcripts, swipe rows to pull
- §4.2 / §4.3 Touchpoint block for this ad — traffic temperature + format + length target + landing destination
- §4 (touchpoint) Approved hook + headline (if already produced upstream by [hook-specialist](section-specialists/hook-specialist.md) / [headline-specialist](section-specialists/headline-specialist.md))

**From the brand wiki**:

- `brands/<brand>/brand-copy-rules.md` — voice (mandatory)
- `brands/<brand>/swipe.md` — brand-specific ad examples for voice calibration
- `brands/<brand>/offers.md` — the offer being promoted (full composition)
- `brands/<brand>/testimonials.md` — proof rows the brief references
- `brands/<brand>/transcripts/` — selected transcripts for vocabulary and founder anecdotes
- `brands/<brand>/competitors/` — competitor ad libraries that have been swiped

**From the cross-specialist writing libraries** (read once during pre-writing):

- [writing-principles](core/writing/writing-principles.md) — read SECTION A (principles) + SECTION B (anti-AI patterns) post-draft as Fase 3-4 refinement
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — the strategic levers this ad activates (Intensification dominant in Most/Product Aware retargeting, Gradualization dominant in cold Problem Aware)
- Read [emotional-intelligence](core/writing/emotional-intelligence.md): (a) MANDATORY when the brief's touchpoint block names Emotional anchors — read those entries only; (b) if the brief names no anchors and the piece includes emotionally-led moments (problem dramatization, hook, future pacing), consult the relevant entries anyway (max 3 per piece) and flag the missing anchors to the copywriter as a brief gap.

**From the component specialists** (read each one when writing its corresponding ad section — see §5):

- [hook-specialist](section-specialists/hook-specialist.md) — for the first-line hook (§5.1) unless an approved hook is already supplied
- [headline-specialist](section-specialists/headline-specialist.md) — for the headline under the visual (§5.3) unless an approved headline is supplied
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — when the ad body uses bullets (§5.1)

**From the copywriter (the request)**:

- Ad format if not specified in the brief (single image / video / carousel / slideshow / native / search)
- Traffic temperature if not derivable from the touchpoint (cold / warm / hot)
- Language if multi-language brand (Italian / English / both)
- Any constraint (must feature specific testimonial, must reference a specific event, specific platform placement, mobile-first vs desktop-first)
- Any user-provided swipe (takes priority over generic conventions)

---

# PART B — Format expertise

## 4. Core principles

### 4.1 — The Mortal Error: never make the ad about you

The most common failure in ad copy is talking about the brand, the company, the product features, the credentials — when the reader's only question is *"what's in it for me?"*

A weak ad reads: *"Imperfect is offering 50% off every box of vegetables shipped to your home."* It assumes the reader knows the brand, the offer, the value. It tells, it does not sell.

A strong ad reads: *"Every year 20 billion products never leave the farm. Imperfect is changing that"* — then it shows the benefit (less waste, lower price). The reader is given a reason to care before being asked to act.

**Diagnostic question for any ad draft**: *"If I covered the brand name, would this ad still earn the click on its benefit alone?"* If no, the ad is brochure copy in disguise — rewrite from the reader's outcome backwards.

This applies to every format. Native ads that lead with company history. Video ads that open on a logo splash. Carousel ads whose first card is "Welcome to [brand]". All variations of the same Mortal Error.

### 4.2 — Native > advertising-looking

People do not scroll feeds to read ads. They scroll to be entertained, informed, or distracted. An ad that visually announces itself as an ad — red borders, stock-photo overlays, unnatural poses, sales-page typography — gets skipped before the eye even parses the words.

The fix is **native**: build the ad so it looks and reads like a post a person or a publisher would naturally publish in that feed. Photos that look photographed, not produced. Copy that opens like a story, not a pitch. Layouts that match the feed's organic visual grammar.

This principle scales beyond paid social. Native ad networks (Outbrain, Taboola, and similar) are entire ecosystems built on this insight — the ad converts because it reads as editorial, not as promotion. The same logic applies to paid social when long-form copy is needed: the long copy must feel like a personal post or an article, never a flyer.

**Operational rule**: if the visual would look out of place posted organically by the brand in the same feed, redesign it. The first 200 milliseconds of attention decide whether the rest of the ad gets read.

### 4.3 — The image is the headline

In long-form prose (sales letters, advertorials), the headline is the most-read element. In a paid ad — especially on social feeds — that role passes to the **image** (or the first frame of a video).

The visual is what stops the scroll. The reader sees the image first, decides in under a second whether to keep scrolling or pause, and only *then* reads the copy. A weak image kills even brilliant copy: no eyes ever reach the words.

This means image selection is not a design afterthought — it is the single highest-leverage creative decision in the ad. The 15 image rules in §6.2 below are the operational consequence of this principle.

### 4.4 — Think like the platform

Every paid-advertising platform has two layers of rules:

- **Written policies** — what the platform's documentation explicitly forbids (no nudity, no copyright violations, no impossible claims, no shocking imagery, no targeting personal characteristics, no clickbait, etc.). These vary by platform but rhyme across all of them.
- **Unwritten filters** — what the platform's review systems and human moderators reject even when not explicitly prohibited. Pop-ups that block exit. Aggressive countdowns. Direct address that names sensitive personal traits. Implied promises with no documented source. These are the rules that get accounts banned even when the copywriter "followed the policy".

The discipline the specialist applies: **think like the platform, not just like the prospect**. The platform wants a **positive environment** for its users (so they keep returning) and **legal protection** from misleading-claim lawsuits. Every compliance decision in §6.3 derives from these two motivations. When in doubt about whether a phrase will pass review, ask: *"Does this make the platform's user experience more positive, or more negative? Does this expose the platform to legal risk?"* The answer is usually obvious once framed this way.

Compliance is not a constraint that fights the copywriter — it is the table-stakes price of being allowed to scale. Ads that violate policy get rejected; accounts that violate repeatedly get banned. The 10:1 rule applies as a universal heuristic: maintain at minimum 10 approved ads for every 1 rejected. Cross that ratio and the platform starts watching the whole account with suspicion.

### 4.5 — Two readers: the scroller and the reader

Every ad is consumed by two distinct readers at the same time:

- **The scroller** — sees only the image, the first line of copy, the headline under the image, and the button text. Decides in under a second whether to pause. If the scroller's surfaces (image + first line + headline + button) do not earn the pause, the ad fails regardless of how good the rest is.
- **The reader** — has paused, and is now reading the full body copy. Decides whether to click. Needs the body to deliver on what the scroller's surfaces promised.

**Operational rule — the scroller test**: read only the image caption, first line, headline, and button text. If this minimum set does not constitute a complete reason to engage, the ad will fail at the scroll level — fix the surfaces before fixing the body.

### 4.6 — Position the ad as a personal story or case study

The strongest compliance-friendly device on every advertising platform is to frame the ad as a **personal story** or **case study** rather than as a direct promise to the reader.

Instead of:
- *"You will lose 4kg in 2 months"* (likely rejected)

Use:
- *"I lost 4kg in 2 months — here's what I did"* (personal story; defensible as factual)
- *"My client Marco lost 4kg in 2 months following this approach"* (case study; defensible as third-party reportage)

The shift is mechanical: replace second-person promises (*"you will…"*) with first-person testimony (*"I did…"*) or third-person reportage (*"my client X did…"*). The persuasion lands almost identically on the prospect — but the platform sees factual claims, not implied promises.

This is the single most universal compliance device across paid social, native, and paid search. Use it whenever the natural copy reads as a direct promise.

---

## 5. Anatomy & components

The functional blocks of a paid ad. Not all formats use all blocks (search ads have no body image; native ads have no button; video ads have script + thumbnail instead of static body) — the brief specifies which apply. This catalog defines *what each block does at the ad level* and *how to tune it for ad-format execution*.

**Architecture note**: for components whose craft applies across many formats (hook opener, headline, bullets), this specialist delegates the universal craft to the corresponding **component specialist** and supplies only the ad-specific execution tuning. The ad-specialist remains the writer of the whole unit — it does not hand off sections, it reads the component specialist files inline and applies the craft within ad context.

### 5.1 — Body copy (text above / around the visual)

The body is the text the reader sees once the image has stopped the scroll. On feed ads it sits above the image (or below, depending on placement). On native ads it is the article-style block under the headline. On search ads it is the small description below the headline link.

The body has two functional sub-blocks:

**The Hook (first line)**
Apply the craft from [hook-specialist](section-specialists/hook-specialist.md).

Ad-specific tuning:
- This is the single highest-leverage line in the body. It is what the scroller reads after deciding to pause but before committing to read on.
- Must extend the curiosity already opened by the image, not restart it.
- Length: ideally a single short sentence. Long openers get truncated by the platform's "read more" cutoff and lose the hook.
- Voice-led, not generic — *"Hai una di queste sensazioni quando ti alleni?"* beats *"Discover our new training method."* every time.
- Pattern interrupts (questions, surprising statements, in-character dialogue) outperform statements that start with the offer.

**The body (development of the hook)**
After the hook, the body develops the angle. This is where the offer gets articulated, the proof gets surfaced, the future pacing gets installed.

Ad-specific tuning:
- The body is a **vehicle from point A to point B** — from where the prospect is now (the problem framed in the hook) to where they want to be (the outcome the offer enables).
- Length is awareness-driven: short for Most Aware / Product Aware retargeting; long for cold Problem Aware / Solution Aware. See §6.4 (Copy short vs long).
- When long, the body must read **native** (§4.2) — like a personal post or a story, never like a brochure.
- The Mortal Error (§4.1) lurks here: every paragraph must trace back to the reader's outcome, never to the brand's features.
- Bullets (when used): apply the craft from [bullet-point-specialist](section-specialists/bullet-point-specialist.md). Ad-specific tuning: bullets work best as **internal frustration markers** ("burn that runs through the muscles you're training", "pump effect and bulging veins") — voice of the prospect, not voice of the seller.

### 5.2 — Visual (image or video)

The visual is the **scroll-stopper**. On image ads it is a single still. On video ads it is the first frame (often functioning as a video thumbnail). On carousel ads it is the first card. On slideshow ads it is the cover frame the platform shows before autoplay begins.

The ad-specialist does NOT produce the visual asset. It produces:

- A `[DESIGN NOTE:]` specifying what the visual must show, why it must show it (the persuasion function), and any compositional constraints (eye direction, color contrast, recognizable objects, etc.)
- The overlay text (if any) — the words that appear *on* the image
- The image caption (when the format includes one)

See §6.2 for the 15 image rules — the operational catalog of what makes an ad visual work or fail.

### 5.3 — Headline (under or beside the visual)

The headline is the bolded text that appears under (or beside) the image on feed ads, or below the link on search ads. It is one of the surfaces the scroller reads after the image but before the body.

Apply the craft from [headline-specialist](section-specialists/headline-specialist.md).

Ad-specific tuning:
- Length budget: 35-45 characters ideal, 70 characters max on most platforms (longer gets truncated)
- Function: **reiterate the hook** or **state what the reader will get** by clicking
- Awareness-calibrated: Most Aware → offer-driven ("Get 30% off this week"); Product Aware → mechanism-driven ("The 3-step method"); Solution Aware → outcome-driven ("Lose 4kg without dieting"); Problem Aware → identification-driven ("If your back hurts after every round of golf, read this"); Unaware → curiosity-driven, never the product or problem named directly
- Compliance-aware: this is the surface most aggressively scanned by platform review. Avoid spam trigger words (§6.3), absolute promises, and direct address to sensitive personal traits

### 5.4 — CTA button copy

The text that appears on the action button (paid social) or as the action verb (search ads).

Ad-specific tuning:
- Never use the platform's default ("Submit", "Click Here", "Learn More") — those are weak fallbacks
- Use **benefit-loaded or action-specific copy** — *"Get instant access"*, *"Send me the report"*, *"Start the test"*, *"Reserve my spot"*
- Match the action to the offer: a free download gets *"Get the PDF"*; a paid product gets *"Order now"*; a webinar gets *"Reserve my seat"*
- Vary slightly across ads in the same campaign (different benefit framings, same destination)
- Each platform restricts button copy length differently — keep to ~20 characters max for safety

### 5.5 — Description / sub-text under the headline

A small text line that appears under the headline on some formats (paid social feed ads, search ads). Often overlooked, but it is the last surface the scroller reads before deciding to click.

Ad-specific tuning:
- Treat as a **mini-hook continuation** — extend the headline's promise with one more specific or one more benefit
- Never repeat the headline verbatim
- Keep concrete: *"Do it with this free 30-second test"* beats *"Learn how today"*
- Length: one short sentence, ~80-100 characters max

### 5.6 — Format-specific structural blocks

Different ad formats add specific blocks beyond the universal body+visual+headline+button structure. The specialist writes these in addition to the universal blocks:

| Format | Additional blocks |
|---|---|
| **Carousel** | 2-10 cards, each with its own image + headline + (optional) description. The card sequence is itself a narrative — card 1 hooks, cards 2-N develop, last card closes |
| **Video** | Spoken video scripts → [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md); this file writes only the PRIMARY TEXT, headline and thumbnail title that accompany a video ad |
| **Slideshow** | Image sequence + per-image overlay text + (optional) audio script. The platform assembles the video; the specialist supplies the slides and the per-slide text |
| **Native ad** | Title + (optional) sub-title + body article. No CTA button (the entire unit is clickable to the LP). The body is long-form, written as editorial. See [advertorial-specialist](format-specialists/advertorial-specialist.md) for the LP/article-side craft |
| **Search ad** | Headline 1 + Headline 2 + Headline 3 + Description 1 + Description 2 + (optional) site link extensions. Each headline is independently scored — write 3 distinct angles, not 3 variations of the same angle |
| **Lead form ad** | Form fields specification + thank-you screen copy + headline + body. The form replaces the LP; conversion happens in-platform |

### 5.7 — Modular kit architecture (Angle → Hooks → Body Copies → CTAs)

Beyond the single-ad anatomy (§5.1-§5.6), ads can be produced as a **modular kit** — a structured set of interchangeable components organized by Angle, designed to generate many distinct ad variants from a small number of components for high-volume testing.

**The architecture**:

```
ANGLE (the conceptual umbrella / argumentative approach)
├── Hooks         — N distinct opening lines (each a different entry into the same angle)
├── Body Copies   — M distinct independent arguments (each works with ANY hook of the angle)
├── CTAs          — P optional standalone closes (each works with ANY body copy of the angle)
└── Headlines     — 5 button-headline variants per angle (5 different surfaces: Benefit / Curiosity / Urgency / Social Proof / Question)
```

A single angle therefore yields up to **N × M × P** unique ad variants, all converging on the same landing destination.

**The critical rule — components are SEPARATE**:

Never write a Hook + its Body Copy as a locked unit. Write all hooks for an angle first, then all body copies, then (if standalone) all CTAs. Any hook from an angle must pair coherently with any body copy from that same angle, and any CTA (when standalone) with any body.

This forces the writer to produce **genuinely different hooks** (not rewordings of the same idea) and **genuinely independent body copies** (not length variations of the same argument). The discipline is what makes the kit a real testing matrix instead of a stack of near-duplicates.

**Body opening rule — flexible bridge**:

Every body copy must open with a **flexible bridge** — a line or two that flows naturally from any hook of the same angle, not from one specific hook. The bridge sets up the body's argument without depending on a specific hook to make sense. If the body's opening only works with one specific hook, rewrite it until it works with all of them.

**CTA placement — two valid patterns**:

| Pattern | When to use | How to deliver |
|---|---|---|
| **CTA embedded in body** | Single-message ads, short copy, when the close is voice-led and inseparable from the body's tone (e.g., *"…and if that sounds like you, click 'Get the test' below"*) | One CTA per body copy. Treat body+CTA as a unit. |
| **CTA as standalone module** | When the same body needs to be tested with different close framings (urgency vs softness vs curiosity), or when the LP supports multiple landing variants per CTA | P distinct CTA lines per angle. Each CTA is a standalone module — combines with any body copy of the angle |

Default: when the kit is small (1-2 body copies per angle) embed the CTA. When the kit is testing multiple closes against the same body, modularize. The copywriter decides per request — the specialist asks (see §8.5).

**The 5 button-headline rule** — for paid social and search formats that surface a separate button or H1, every angle generates **5 headline variants** covering 5 distinct angles:

1. **Benefit** — names the outcome the reader gets
2. **Curiosity** — opens a loop without resolving it
3. **Urgency** — invokes time / scarcity / immediacy
4. **Social proof** — references the volume / quality of existing adopters
5. **Question** — invites the reader to self-identify

Each variant is its own surface — never rewordings of the same angle. The 5 are tested against each other.

**When the modular kit is appropriate**:

- High-volume testing campaigns (e.g., launching with 10+ variants from day 1)
- Cold-traffic acquisition where the winning angle is unknown
- Performance-marketing setups where statistical testing requires sufficient ad variants
- Briefs that name multiple angles to test in parallel

**When NOT to use the modular kit**:

- Single ad requested (the user wants one finished ad, not a testing matrix)
- Hot-traffic retargeting where one angle is already validated
- Brand-led pieces where the message is locked and variants would dilute it
- When the brief specifies one specific hook + body pairing

The choice between **single ad** and **modular kit** is the first production-mode decision — see §8.5.

---

## 6. Format-specific conventions

These are the conventions that make a paid ad *read like a paid ad in its specific format*, not like a generic creative dump. They live in the visual layer as much as in the copy layer.

### 6.1 — Ad type selection (when the brief leaves it open)

The brief usually specifies the format. When ambiguity exists, the specialist selects based on the criteria below and surfaces the choice to the copywriter.

| Format | Best for | Avoid when |
|---|---|---|
| **Single image** | Quick test, short copy, well-known product, identification-driven hooks | Offer needs heavy explanation; competing imagery dominates the feed |
| **Video** | Spoken video scripts → [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md); this file writes only the PRIMARY TEXT, headline and thumbnail title that accompany a video ad | — |
| **Carousel** | Multiple offers (e-commerce), multi-step argument, before/after sequences (where allowed), step-by-step explanations | Single offer with single message; story-led long-form copy (use single image + long body instead) |
| **Slideshow** | Visual demonstration without video production budget; ad placements that auto-play; multiple still proofs (transformations, reviews, screenshots) | Single-message ads where the auto-playing slideshow distracts from a strong single image |
| **Interactive experience** | Brand awareness, immersive product walk-through, rich-content showcases | Direct response (the format dilutes click-to-conversion) |
| **Lead form ad** | Volume-first lead generation where LP conversion is the bottleneck; mobile-heavy audiences who resist LP loads | Quality-first lead generation (in-platform leads are less qualified than LP-form leads); offers that need extensive education before the form |
| **Native ad** | Cold traffic, sensitive verticals (health, finance, controversial topics), audiences who reject visible advertising | Most Aware retargeting (the editorial frame is wasted on convinced buyers); time-sensitive offers (native production cycles are slower) |
| **Search ad** | High-intent audiences (the user typed the query); branded queries; comparison-shopping queries | Awareness-building; image-driven categories where the absence of visual hurts |

### 6.2 — Image rules (the 15 operational rules)

When the visual is an image (or the first frame of a video), these 15 rules apply. They are the operational consequence of §4.3 (the image is the headline).

1. **High contrast** — the image must stand out from the surrounding feed. Black-and-white photos work well. Red (against the blue-dominant palette of most social feeds) works well. Avoid the feed's own dominant color as the image's dominant color.

2. **Featuring a person** — ideally the brand's frontperson, or someone recognizable to the niche. Faces stop scrolls.

3. **Featuring the product / offer** — if the offer is a book, show the book. If the offer is a report, show the report cover (even a mockup). If the offer is a service, show the outcome of the service. Concrete product imagery converts better than abstract concept imagery.

4. **Overlay technique works** — fuse two elements into a single composition (e.g., a magnified eye with a PDF document superimposed). The visual collision creates pattern interrupt.

5. **Video subtitles are mandatory** — most paid-social video is watched muted. No subtitles = no message delivered. This is non-negotiable.

6. **<20% text in the image** (or in the video thumbnail) — most platforms penalize or restrict distribution of image creatives that exceed ~20% text overlay. Even where the rule is no longer formally enforced, distribution still suffers. Use the platform's overlay-text checker when available.

7. **Coherent with copy and landing destination** — the image, the body copy, and the landing page must visually and semantically rhyme. A reader who clicks an image of a stopwatch and lands on a page about cooking will bounce immediately.

8. **Recognizable objects** — show things the audience is surrounded by daily. An iPhone battery icon for a tech audience. A WordPress editor screen for bloggers. A familiar piece of equipment for a niche craft. Recognition spikes attention.

9. **High resolution** — minimum 1080×1080 for square; 1080×1350 for vertical 4:5; 1080×1920 for 9:16 stories. Always shoot/source at 2x the platform's required resolution so down-scaling preserves crispness.

10. **Show the ideal customer** — for ads selling transformation, the person in the image should look like the prospect's aspirational version of themselves. Right age, right gender (when relevant to the offer), in the post-transformation state.

11. **Photos beat illustrations** — when forced to choose between a photograph and a cartoon/illustration, choose the photograph. The exception is when the brand's voice is illustration-led from the start.

12. **Instantly communicates the offer** — the image alone, without copy, should suggest what is being offered. If a stranger seeing only the image cannot guess the category in 2 seconds, the image is too abstract.

13. **Two visual modes — native vs styled** — *Native* visuals look like an organic post the brand would publish (no overlays, no production artifacts). Use for long-form copy and authority-led ads. *Styled* visuals include overlays, graphics, and design attention. Use for offer-led short copy. Never mix the two registers in the same ad.

14. **If using styled visuals, restrain the embellishments** — overlays, badges, and graphics should reinforce, not crowd. Red borders, blurry edges, and decorative chaos read as low-trust advertising.

15. **Respect the platform's policies** — see §6.3. Some image categories (zoom on body parts, before/after, weight scales, currency stacks, weapons, etc.) get the ad rejected regardless of how good the rest is.

### 6.3 — Compliance — universal rules across paid platforms

Every paid platform has its own policy document, and the specialist's job is not to memorize all of them. The job is to internalize the **universal compliance pattern** that holds across all paid channels — the underlying behavior that keeps an ad approved and an account healthy.

**Hard rules (universal across paid social, native, paid search)**:

| Rule | Why |
|---|---|
| **No nudity, sexual content, or sexualized imagery** | Platform policy; ban-level violation |
| **No content that violates copyright** | One report from a rights-holder triggers account-level action |
| **No shocking, scary, violent, or threatening imagery** | The platform wants a positive user experience |
| **No references to personal characteristics** in the second person — *not* "are you gay?", "are you Christian?", "are you diabetic?", "are you struggling to make rent?". The implied targeting of personal traits is forbidden. Use third-person reportage or first-person testimony instead | Privacy + dignity laws + platform-level rejection |
| **No specific-age targeting in the copy** — *not* "for men aged 30-45" in the copy text (audience targeting in the platform settings is different and allowed) | Same |
| **Respect basic grammar** — no ALL CAPS, no excessive symbols, no obvious spelling/grammar errors | Platforms penalize illiteracy signals |
| **No specific time-bound promises** — *not* "lose 4kg in 2 months". The platform reads this as a non-defensible claim | Avoids platform liability for misleading claims |
| **No exaggerations** — *not* "an extraordinary trick to make money from home". Hyperbolic copy gets flagged | Same |
| **No absurd promises** — *not* "you won't believe what foods can cure your diabetes" | Same |
| **No profane language**, even censored (*"ca**o"*) | Platform tone rules |
| **No zoom on body parts** disconnected from the whole person | Often interpreted as objectifying or as implying personal insecurity targeting |
| **No before/after imagery** for body transformations (most platforms forbid this for health/fitness/beauty verticals) | Same |
| **No imagery that implies the reader is deficient** — *not* a person on a scale, a person measuring their waist, a person looking sadly at their reflection | Same |
| **No network-marketing solicitation copy** | Platform-level category restriction |
| **The landing page must replicate the ad's headline** (or be visibly congruent) | Landing-page mismatch is one of the strongest disapproval signals |
| **No clickbait** — *not* "you'll be amazed when you see this", cropped images that force a click to see the full picture | Platform anti-clickbait filters |
| **The full funnel must be compliant**, not just the ad and the LP. Upsell pages, thank-you pages, anything reachable from the ad must respect the same rules — the platform's reviewers will follow the funnel | Platforms now audit downstream pages after suspicious activity |
| **No autoplay audio** on the landing page | Same |
| **No exit popups or barriers** that prevent the user from closing the page (exit-intent popups that *trigger* on close are generally tolerated; popups that *block* the close action are not) | Same |
| **No countdowns or delayed elements** on the landing page (typical "buy button reveals after X seconds" pattern) | Same |
| **No "play" symbol overlay on still images** to fake video and incentivize the click | Clickbait under another name |

**Spam trigger words to avoid in copy** (universal):
*secret, weird, trick, burn fat, make money, you won't believe, shocking, miracle, guaranteed, free money, no risk, lose weight fast, get rich, exposed.* These do not get filtered by every system equally — but their cumulative presence trains the platform's classifier to flag the ad. Use sparingly or not at all.

**Operational discipline (writing scope)**:
- When in doubt about a phrase, apply §4.6 — convert promises to personal stories or case studies
- When citing specific numbers (statistics, prices, scientific claims), **include a source reference** (a link, a citation, an asterisk explaining how the data was derived). Unsourced specific numbers get rejected
- The canonical pre-delivery enumeration of the compliance rules lives in the **§12 Compliance block** — run that checklist before delivering; this section holds the rationale, not the operational list

**Platform ops notes (for the media buyer — outside this specialist's writing scope)**:
- When an ad is disapproved, **modify and resubmit — do not delete**. Deleting and recreating from scratch raises the account's suspicion score; modifying and re-submitting demonstrates compliance intent
- When responding to a disapproval appeal, write a **detailed and considered response** — not just "this does not violate policy". The reviewer (or the appeal bot) needs to see argued justification, not denial
- Maintain a healthy **approved-to-disapproved ratio** (10:1 minimum). If at the limit, do not push borderline new ads until existing ones are approved
- **Use the platform's business/manager interface** (not the casual "boost post" UI) — the business interface has fewer false-positive flags and a cleaner audit trail
- **Do not engage negativity** in comments — delete and ban hostile commenters, do not argue. Hostile comment threads under an ad signal "low user experience" and degrade the ad's distribution

**Native-ad and paid-search compliance variations**:
- Native networks (Outbrain, Taboola, etc.) often allow more aggressive copy than paid social, but enforce stricter editorial-quality bars (no grammar errors, no obvious sales pages, real article-style content required on the destination)
- Paid search is generally permissive on copy aggressiveness but strict on destination-page quality — slow-loading, intrusive, or "thin-content" landing pages get quality-score penalized, raising the cost-per-click

### 6.4 — Copy short vs copy long (decision rule)

The length of the body copy is decided by two variables: **awareness level** and **product complexity**.

| Awareness | Product complexity | Length |
|---|---|---|
| Most Aware / Product Aware | Simple, well-known category | **Short** — 1-3 lines. The offer + a benefit framing + the CTA |
| Most Aware / Product Aware | Complex or expensive | **Medium** — 4-8 lines. The offer + 2-3 differentiating benefits + proof + CTA |
| Solution Aware | Simple | **Medium** — 4-8 lines. The mechanism named + 2-3 benefits + CTA |
| Solution Aware | Complex | **Long** — 200-500 words. Mechanism education + competition destruction + proof + offer + CTA |
| Problem Aware | Simple | **Medium-Long** — 100-300 words. Problem articulation + mechanism intro + offer + CTA |
| Problem Aware | Complex | **Long** — 300-800 words. Problem articulation + mechanism education + proof + offer + CTA |
| Unaware | Any | **Long** — 500-1500 words. Identification + emergent problem + solution category + offer (mentioned only near the end) |

**Why long copy works on paid ads** (counterintuitive given the platform context):
- **It pre-qualifies the lead**. People who read 800 words of an ad before clicking are far more interested than people who click on a 1-line ad. The cost-per-click is higher; the cost-per-qualified-lead is lower.
- **It increases the platform's relevance score**. Long copy that generates engagement (saves, shares, long-read time) is rewarded with cheaper distribution.
- **It allows compliance maneuvers** — long copy can frame everything as story/case-study, sidestepping the direct-promise restrictions that kill short claim-based ads.

**Long copy must read native** (§4.2) — like a personal post or a long article. If it reads like a sales letter, it gets skipped by readers and (often) rejected by reviewers.

### 6.5 — Three traffic temperatures (audience-driven calibration)

Every paid ad targets one of three audience temperatures, and the copy calibration differs significantly:

**Cold traffic** — the prospect does not know the brand, has not interacted with the funnel, may not have heard of the category.

- Hook must do identification work first ("Are you a [X]?", "If you [Y], read this")
- Body must educate before it sells (Problem Aware and below)
- The ad is one of many touchpoints — assume zero trust transfer
- This is the highest-volume, highest-difficulty segment — most of the brand's media spend should target cold
- Compliance is most strict on cold-traffic ads (the platform's review systems prioritize protecting unfamiliar users)

**Warm traffic** — the prospect has clicked an earlier ad, visited a page, watched part of a video, but has not converted.

- Hook can reference shared context ("Last week you looked at [X]" — when allowed; otherwise more subtle continuity)
- Body can skip Problem Aware framing — they have already crossed that threshold
- Retargeting-specific angles: the unresolved objection, the social-proof booster, the alternative-offer comparison
- Often medium-length copy: enough to install one new belief, not enough to re-educate

**Hot traffic** — the prospect is on the email list, has bought before, is a follower with active engagement.

- Hook can assume the relationship ("Earlier this year you and I talked about [X]…")
- Body can be short — Most Aware copy works; offer + scarcity + CTA
- This segment converts at the highest rate per impression; spend less media here per lead, but the ROI per ad is the highest in the campaign
- The voice can be the brand's most familiar/personal register

### 6.6 — Native vs styled visual register

Two visual registers are available, and mixing them in the same ad destroys both:

**Native register** — the ad looks like an organic post the brand would publish in the same feed without paid promotion. No overlays. No badges. Production-grade photography that mimics organic photography. Long copy in plain text, formatted like a personal post.

Use when: long-form storytelling; founder-authority builds; cold-traffic Problem Aware education; sensitive verticals (health, finance, anything platform-flagged).

**Styled register** — the ad is visibly produced. Image overlays. Headline text on the image. Badge graphics. Layout polish. Short, punchy body copy.

Use when: Most Aware / Product Aware offers; promotional moments (sales, launches, urgency campaigns); e-commerce ads where the product image is the hero; retargeting hot traffic with deal-driven copy.

The error: **mixing registers in the same ad**. A native-style long copy with a heavily styled overlay-text image reads as inauthentic — the prospect's brain registers the inconsistency and disengages.

### 6.7 — Mobile-first formatting

Most paid-ad consumption happens on mobile (commonly ~80% on paid social). Format accordingly:

- Paragraphs: 1-3 lines max in the body. Mobile renders a 3-line desktop paragraph as 6-8 visual lines
- Use line breaks aggressively between paragraphs — white space is breathing room on mobile
- The hook (first line) must complete its sentence within the platform's "see more" truncation point (typically ~125 characters on most paid-social feed ads)
- The button copy must be readable on mobile sizing (avoid >20 characters)
- For carousel ads: the first card must complete its message within the mobile viewport — most users will not swipe past card 1 if card 1 is unclear

### 6.8 — Design directions inside the copy

Inline design notes are part of the ad-specialist's deliverable:

- `[DESIGN NOTE: specific image / visual description]` — describes what the image must show
- `[VIDEO NOTE: first frame / thumbnail description + subtitle treatment]` — for the surfaces accompanying a video ad (the spoken script itself → [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md))
- `[CARD N: image description + headline + body]` — for carousel ads, one per card
- `[CTA BUTTON: "exact button copy"]` — the literal button text
- `[OVERLAY TEXT: "exact overlay copy + position cue"]` — for text-on-image elements
- `[CAPTION: "exact caption text"]` — for image captions when the format includes them

These bracketed instructions tell the designer/editor how to render the copy. The ad-specialist is responsible for them — the visual team should never be left guessing what the copy intended.

---

## 7. Compositional patterns — 8 ad models + 8 ad templates

> **What this section is**: two parallel catalogs of compositional patterns for paid ads. The **8 ad models** (§7.1) are strategic shapes — they define the *angle* the ad takes. The **8 ad templates** (§7.2) are tactical formulas — they define the *structure* the body copy follows. A finished ad combines one model (the angle) with one template (the structure), often. The catalogs are not exhaustive — they are the canonical shapes a paid-ad copywriter should master first.
>
> **How to use**: when the brief specifies an attack angle, scan §7.1 for the model that matches. When the brief specifies a structural pattern, scan §7.2. When the brief leaves both open, propose 2-3 model+template combinations to the copywriter and ask.

### 7.1 — 8 strategic ad models (the angle)

The 8 models below define the *strategic shape* of the ad — what kind of message it delivers and what kind of cognitive frame the reader enters.

**1. Direct**
The ad states the offer plainly, often paired with a discount or a free element. Short body copy. The hook IS the offer. Best for warm/hot traffic on simple products where awareness is high.

*Example*: *"The new 6-layer protein bar. 21g of protein and under 3.5g of sugar. Available in 4 flavors. Snacking without the guilt has a new taste."*

**2. Storytelling**
The body is a story — the founder's discovery, a customer's transformation, an unrelated narrative that bridges into the offer. Long body copy. Works exceptionally well for cold Problem Aware / Solution Aware traffic and for compliance-sensitive verticals (the story frames everything as personal testimony, sidestepping direct-claim restrictions).

*Example* (Sam Ovens, paraphrased): *"Today a journalist asked me: 'do we always have to change ourselves to meet our aspirations? Don't we lose our identity chasing success?' Here is what I told him…"* — then a long meditation that bridges into the offer.

**3. Conversation**
The body is a one-sided dialogue with the reader, simulating a real conversation. Often uses interrogative beats followed by "I bet I'm right, here is why…". Strong empathy creator. Works across awareness levels but particularly for Problem Aware audiences who recognize themselves in the dialogue.

*Example*: *"Hai una di queste sensazioni quando ti alleni? — Bruciore che ti attraversa i muscoli che stai allenando — Effetto pump (muscoli gonfi) — Muscoli che altrettanto velocemente si sgonfiano dopo pochi giorni che non vai in palestra. Se ti ritrovi anche solo in una delle risposte sopra, allora fammi indovinare…"*

**4. Frustrations (in quoted form)**
The body lists the prospect's frustrations as if they were the prospect's own voice — wrapped in quotation marks. This is a compliance-defensible substitute for direct questions about personal characteristics (which most platforms reject).

Instead of:
- *"Is your trainer giving you a workout that does not work?"* (likely rejected — direct question about personal situation)

Use:
- *"'My trainer gave me a workout plan that does not convince me and is not getting me results… I feel confused and do not know what nutrition to follow…'"* (allowed — third-party reportage of someone else's frustration)

The quotation marks change the legal frame entirely while delivering the same persuasion.

**5. Testimonials**
The body is a customer testimonial — written, quoted, or video. Real testimonials work; fabricated testimonials in quoted form are sometimes used in saturated markets where compliance is not the bottleneck, but this carries reputational and legal risk and is left to the copywriter's judgment.

*Example*: *"'I went to the gym and tried to eat clean, but after I discovered my body type I finally started seeing the results I wanted.' — paraphrased customer testimonial."*

**6. Long copy**
Not strictly an "angle" — more a *commitment to depth*. The body is 500+ words, written as a personal post or an article. Filters cold traffic into qualified leads (Cost-per-Lead is higher, Cost-per-Qualified-Lead is lower). Works exceptionally for complex or premium offers, webinar registrations, and high-ticket lead generation. Must read native (§4.2) — if it looks like a sales letter, it dies.

*Example*: a 1200-word ad opening with *"Will 2026 be the year of your best physique? If raising a stunning shape is on your list of new-year resolutions, let me reveal 4 common mistakes that sabotage your progress…"* then developing all 4 mistakes before introducing the offer.

**7. Guru / Authority (endorsement)**
The body borrows authority from a known figure (a celebrity, a recognized expert, a respected publication, a peer-reviewed source). The endorsement is the proof; the offer is the application of that endorsement.

*Example*: *"Arnold Schwarzenegger approves [our method]? Quoted from his book Encyclopedia of Modern Bodybuilding: 'Individuals with different body types often respond very differently to training and what works for one type may not work for another.' Even Arnold confirms the importance of training and nutrition customization by body type to maximize results…"*

**8. Candid / disarming**
The body opens by admitting a weakness or a non-fit ("I am not [Y]. I do not know about [Z]. In any contest you would beat me.") and uses the disarming admission to earn the right to make the offer in the second half. Counter-intuitively powerful — the candor signals trust and reduces hater-reactions.

*Example*: *"Are you a fighter or a martial arts athlete? I am not. I know nothing about jabs, hooks, or low kicks. In any contest you would knock me out in the first 30 seconds. But… if there is one thing I have learned in the last 5 years, it is how to help men improve their physical condition. And these tips happen to be perfect for fighters too."*

### 7.2 — 8 tactical ad templates (the structure)

The 8 templates below define the *structural shape* of the body copy — the sequence of beats. They can be used with any of the 8 models above.

**1. Problem / Solution**
- Opening: name the problem (in the prospect's voice or in third person)
- Middle: agitate briefly — name the consequence of not solving it
- Close: introduce the solution (the offer)
- CTA

*Example*: *"Dogs that jump on people when excited are a big source of stress and embarrassment, but it is not their fault — they just want attention. [Brand]'s training method shows you how to redirect that energy in 10 minutes a day."*

**2. Status**
- Opening: name the *identity* the prospect can become through the offer
- Middle: name what that identity unlocks (specific to the avatar's aspiration)
- Close: the offer as the path to the identity
- CTA: "Become a [X] and (learn/discover/get/understand) [benefit]"

*Example*: *"Want to become a certified copywriter? Acme Academy does not just make you a better writer — it makes you a certified professional copywriter. Become a certified copywriter and learn to generate income on autopilot."*

The ego-status lever is one of the strongest and least understood in advertising. Use when the offer has an aspirational identity attached (certifications, memberships, titles, branded methodologies).

**3. Relevance**
- Opening: anchor to a specific event, season, news cycle, or sub-segment the prospect identifies with
- Middle: the offer as relevant to *this specific moment* or *this specific identity*
- Close: time- or identity-bound call to action

*Examples*:
- *"Summer is here and… it is not too late to get in shape! Whether you are heading to the beach, the pool, or vacation, you still have time! Click 'Learn More' to take the body-type test and find the right plan for you."*
- *"Drive an Audi? Here are some tips to keep it in perfect condition for years."* (vs a generic "Here are some car maintenance tips")
- *"Use Mailchimp?"* (vs a generic "Use email marketing?")

The narrower the relevance, the higher the click-through on the targeted segment. Use when the audience can be sliced into named sub-groups, brands, or temporal contexts.

**4. Tell a story**
- Opening: drop the reader into a scene ("I was walking down the street when…", "'Hi.' 'Hi.' 'How are you?' 'Good.'", "Let me tell you about my friend Anna…")
- Middle: develop the story with concrete sensory detail
- Close: link the story to the prospect ("Sound familiar? If so, here is what we built for people like you…")
- CTA

The opening sentence is the entire game. A weak opening kills the story. The best openings drop the reader mid-action, mid-scene, mid-conversation — they create immediate questions the reader needs answered.

**5. Analogy**
- The entire body is a one-line analogy that explains the offer through a familiar reference
- Often: *"[Offer] is [familiar reference] for [audience]"*
- Best when the offer is hard to explain but vector-aligned with a known category

*Examples*: *"Airbnb for dogs"*, *"Why Mentorbox is Audible on steroids"*, *"The Netflix of personal development"*.

Use when the offer's category is unfamiliar to the prospect but adjacent to a category the prospect already understands. The analogy collapses 30 seconds of explanation into a single second of recognition.

**6. Comparison**
- Opening: name the alternative (a competitor, a status-quo behavior, a different category of spend)
- Middle: contrast the offer against the alternative on a single dimension (more / faster / cheaper / cleaner / safer)
- Close: the offer wins on the named dimension
- CTA

*Examples*:
- *"We give you more of what you want, with customization: more food choices, more meat options, and more flexibility than [Competitor]. Get $80 off your first three boxes."*
- *"What would you choose? We make the easiest decision easy. Sign up now and get $25 off your first box of [Brand]."* (comparing against a takeout dinner that costs $59.94)

Two variants: **competitor-comparison** (riskier — names a rival) and **lifestyle-comparison** (compares against status-quo spending — safer and often more effective).

**7. Novelty**
- Opening: stake a claim of novelty ("a new way to…", "something most people do not know about…")
- Middle: demonstrate the novelty visually or through a counter-intuitive specific
- Close: the offer as the application of the novelty
- CTA

*Examples*:
- *"Did you know there is a lighter that works even underwater? Here is how…"* + demonstration video
- *"Left: $20. Right: $50. Which section is the cheaper one? If you picked the image on the left, you picked wrong. Let us explain why."*

The novelty must be **real**, not manufactured — false novelty triggers the platform's clickbait classifier.

**8. Logic**
- Opening: a verifiable statistic or piece of factual reasoning
- Middle: a question that engages the reader on the implication of the statistic
- Close: the offer as the logical solution
- CTA

*Examples*:
- *"The average adult receives 547 emails per day. What are you doing to stand out in your prospect's inbox? We can help you generate more opens, clicks, and sales using our 7-step formula."*
- *"30 minutes a day. 3.5 hours a week. 15 hours a month. 182 hours a year. The time you save when you use [Brand]'s juices. Get yours now."*
- *"88% of financially successful people read at least 30 minutes per day. More than 50% of [Brand] users finish three books per day."* (implication: become one of them)

When the offer has a quantitative case (time saved, ROI, frequency data, demographic stats), this template is one of the highest-converting structures available — provided the numbers are sourced.

---

# PART C — Operational workflow

## 8. Selecting ad type and length

The brief usually specifies type and length. When ambiguity exists, the ad-specialist makes the selection based on the criteria below — and surfaces the selection to the copywriter for confirmation if the brief was silent.

### 8.1 — By format (covered in §6.1)

See the format-selection table in §6.1. Restated briefly: single image for quick tests / known products / identification hooks; video for complex offers + demonstration; carousel for multi-offer or multi-step argument; native for cold sensitive-vertical traffic; search for high-intent queries; lead form for volume-first lead-gen.

### 8.2 — By body length (covered in §6.4)

See the awareness × complexity table in §6.4. Restated briefly: short for Most/Product Aware on simple categories; medium when education or differentiation is needed; long for Problem Aware / Solution Aware on complex offers; very long for cold lead-gen on premium / webinar / high-ticket offers.

### 8.3 — By model + template combination (covered in §7)

When the brief leaves the compositional pattern open, the ad-specialist proposes 2-3 model+template combinations to the copywriter. Typical combinations (canonical pairing list — A2 points here):

- **Storytelling + Tell a story** — for cold Problem Aware long-form
- **Direct + Status** — for warm Product Aware with aspirational offer
- **Conversation + Problem / Solution** — for cold Problem Aware empathic
- **Long copy + Logic** — for complex offers with quantitative case
- **Candid + Comparison** — for differentiated offers in saturated markets
- **Guru / Authority + Novelty** — when the brand has a famous endorser and a fresh angle
- **Frustrations (quoted) + Testimonials** — compliance-defensible Problem Aware
- **Direct + Relevance** — time-bound segmented offers (seasonal, event-driven)

### 8.4 — By traffic temperature (covered in §6.5)

Cold → long copy, native register, identification-led hooks, Problem Aware framing. Warm → medium copy, mixed register, continuity-led hooks, Solution Aware framing. Hot → short copy, styled register, offer-led hooks, Most Aware framing.

### 8.5 — Production mode: single ad vs modular kit

When the request is to write a **static ad** (or any format where the modular architecture applies — single image, carousel, native, search), the specialist must determine upfront whether the deliverable is a **single finished ad** or a **modular kit** (per §5.7).

**Decision rule**:

- If the brief or the copywriter's request **explicitly specifies the production mode** (e.g., *"write me one ad for [offer]"* or *"give me 3 angles, 5 hooks each, 2 body copies each"*) → proceed in the specified mode without asking.
- If the brief or request is **silent on mode** → before drafting, ask the copywriter:

> *"Vuoi una singola ad finita oppure un kit modulare (Angolo + Hook + Body + CTA staccati per testing in volume)?"*
> *("Single finished ad, or a modular kit — angles + hooks + body copies + CTAs separated for high-volume testing?")*

**If the answer is "single ad"** → produce one complete ad per §5.1-§5.6 and the relevant compositional model+template per §7. No further mode-specific questions needed (proceed with the normal pre-write protocol).

**If the answer is "modular kit"** → ask the structuring questions before drafting:

| Question | Typical answers / guidance |
|---|---|
| **How many angles?** | 1 / 2 / 3 / other. If the copywriter is undecided, propose 2-3 based on the brief (avatar, awareness, attack angle from §3.7 of the brief) and let them confirm |
| **How many hooks per angle?** | 2 / 3 / 5 / other. 3 is the most common baseline; 5+ is for aggressive testing campaigns |
| **How many body copies per angle?** | 1 / 2 / 3 / other. 2 is the most common baseline |
| **How many CTAs per angle, and embedded or standalone?** | Options: *"embedded in each body (1 CTA per body)"* / *"N standalone CTAs that combine with any body"* / *"both — embedded baseline + 1-2 standalone variants for testing close framings"*. Default if unspecified: embedded |
| **Body copy length preference?** | Short (1-3 sentences) / Medium (5-15 lines) / Long (~100-300 words) / **Mix** (recommended) — produces body copies of varying lengths within the same angle for maximum testing variety |
| **Generate the 5 button-headline variants per angle?** | Yes (default for formats that surface a separate button) / No (skip if format does not use a button — e.g., native ads, long-form video) |
| **Image suggestion per angle?** | Yes (default) / No (when designer is handling visuals independently from copy) |

Once the structural answers are in, draft following §5.7 (modular kit architecture) — all hooks first, then all body copies, then standalone CTAs (if any), then 5 button-headline variants per angle, then image suggestions per angle. Output per the modular kit format in §10.

If after asking the copywriter does not have a clear preference between modes or between structural counts, **propose a default kit shape** (typical: 2 angles × 3 hooks × 2 body copies (mixed length) × embedded CTA × 5 button headlines per angle × 1 image suggestion per angle) and let them adjust.

---

## 9. Application protocol — ad-specific notes

The specialist applies the universal **5-phase protocol** defined in [writing-principles §2](core/writing/writing-principles.md). That protocol is the authoritative workflow — read it there, do not re-state it here.

The notes below specify what is **ad-specific** at each phase. Treat them as supplements to the universal protocol, not replacements.

| Phase | Ad-specific notes |
|---|---|
| **Fase 1 — Pre-writing** | 0. Read [feedback-rules](core/feedback-rules.md) (global rules) + `brands/<brand>/brand-copy-rules.md` (brand rules — they override global). These apply to every line you write and are re-verified at QA (writing-principles Fase 4d). Then always read: brief §3-§4 (per §3 of this file), brand `swipe.md` (1-2 ad examples if present), the specific testimonials/transcripts/offers referenced in the brief, competitor ads in `competitors/` if the brief specifies competitor-aware copy. **Always read** the compliance discipline in §6.3 of this file. **Cold traffic → complete Appendix A1 (18-point research checklist) first.** **For long-copy ads** (200+ words): also scan §7.1 for the model fit and §7.2 for the template fit. **Emotional gate**: apply the two-branch rule in §3 — [emotional-intelligence](core/writing/emotional-intelligence.md) is mandatory when the brief names Emotional anchors; when it names none, consult the relevant entries anyway for the emotionally-led moments (max 3 per piece) and flag the brief gap. |
| **Fase 2 — Drafting** | Draft order matters: (1) image direction first — the image decision constrains everything else, (2) hook (first line of body) second — the hook is read before the rest of the body, (3) body second-half, (4) headline (under-image), (5) description sub-text, (6) CTA button. For carousel ads: draft card 1 fully before any other card; the rest cascade from card 1's commitment. If the creative is a video: the spoken script comes from [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) — this file drafts only the primary text, headline, and thumbnail title that accompany it. |
| **Fase 3 — Principles refinement** | Universal pass per [writing-principles SECTION A](core/writing/writing-principles.md). Ad-specific watch-points: Principle 1 (One Thing) often slips when the ad tries to sell two benefits at once — pick one; Principle 2 (Promise→Proof→Implication) often slips when proof is absent (cold-traffic ads especially need proof inline); Principle 6 (Conversational flow) often slips when the body reads like a brochure — re-read as if speaking aloud to a friend over coffee. |
| **Fase 4 — Anti-AI pass** | Universal pass per [writing-principles SECTION B](core/writing/writing-principles.md). Ad-specific hotspots: rigid parallel triads tend to cluster in bullet lists; em-dash overuse tends to cluster in the hook; generic transitions tend to cluster between body paragraphs when Fase 2 did not establish voice-led continuity. |
| **Fase 5 — Compliance + Scroller test + Read-aloud** | Universal read-aloud per [writing-principles §3](core/writing/writing-principles.md). **Then add the ad-specific Compliance check**: re-read the entire ad against §6.3 and §11 of this file. Flag any rule violation. **Then add the Scroller test**: read ONLY the image direction + first line + headline + button copy. If this minimum set does not constitute a complete reason to engage, the ad will fail at the scroll level — fix the surfaces before delivering. |

---

## 10. Output formats

### Structure proposal (when planning before writing)

```
PROPOSED STRUCTURE — Ad for [Offer] in [Funnel]

Ad format: [Single image / Video / Carousel / Slideshow / Native / Search / Lead form]
Traffic temperature: [Cold / Warm / Hot]
Body length: [Short / Medium / Long / Very long] (~[N] words)
Compositional model: [from §7.1]
Compositional template: [from §7.2]
Awareness: [level from brief]
Sophistication: [stage from brief]
Visual register: [Native / Styled]
Reference swipe (brand or external): [name — what is adapted]

SCROLLER SURFACES (the test):
Image direction: [what the image must show]
First line (hook): [draft]
Headline (under image): [draft]
Button copy: [draft]

[Read these alone — do they constitute a complete reason to engage?]

BODY ARCHITECTURE:

Hook: [first line — the curiosity / identification / pattern interrupt]
Body beat 1: [function: problem articulation / mechanism intro / story setup / ...]
Body beat 2: [function]
Body beat 3: [function]
[... continue ...]
Close: [the offer + CTA framing]

COMPONENT CHECKS:
Hook approved upstream by hook-specialist? [Yes / No, drafting placeholder]
Headline approved upstream by headline-specialist? [Yes / No]
Bullets supplied? [Yes / No, count: N]
Proof element referenced: [testimonial row / data point / authority cite]

COMPLIANCE PRE-CHECK:
- No direct address to personal characteristics? [✓]
- No time-bound or specific-outcome promises in headline? [✓]
- No spam trigger words? [✓]
- Image direction respects 15 rules (§6.2)? [✓]
- Body framed as story / case study / educational rather than direct promise? [✓]
- Compliant funnel destination confirmed with copywriter? [✓]
```

### Writing execution (after structure approved)

For each ad variant, output:

```
---
## AD [N]: [Variant name — e.g., "Cold #1 — Story-led"]

[CTA BUTTON: "exact button copy"]

[DESIGN NOTE: specific image / visual description, including eye direction, contrast, recognizable elements, overlay text if any, and any compliance constraints]

BODY COPY:

[hook — the first line]

[body beat 1 — paragraph 1-3 lines]

[body beat 2 — paragraph 1-3 lines]

[body beat 3 — paragraph 1-3 lines]

[... continue ...]

[close — offer framing + CTA-friendly final line]

HEADLINE (under image):
[headline text, ≤ 70 chars]

DESCRIPTION (sub-text):
[1 short sentence, ≤ 100 chars]
---
```

For **carousel ads**, repeat per card:

```
[CARD 1]
[DESIGN NOTE: image for card 1]
[OVERLAY TEXT: "exact overlay copy"]
HEADLINE (card 1): [text]
DESCRIPTION (card 1): [text]

[CARD 2]
[DESIGN NOTE: image for card 2]
[OVERLAY TEXT: "exact overlay copy"]
HEADLINE (card 2): [text]
DESCRIPTION (card 2): [text]

... etc.

PRIMARY TEXT (body above the carousel):
[hook]
[body]
[close + CTA framing]

[CTA BUTTON: "exact button copy"]
```

For **video ads**: spoken video scripts → [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md); this file writes only the PRIMARY TEXT, headline and thumbnail title that accompany a video ad. Output for those accompanying surfaces:

```
THUMBNAIL TITLE (overlay on first frame):
[Text that appears on the still preview frame]

PRIMARY TEXT (body that accompanies the video in feed):
[hook]
[body]
[close + CTA framing]

HEADLINE (under video):
[text]

DESCRIPTION (sub-text):
[text]

[CTA BUTTON: "exact button copy"]
```

For **search ads**, output:

```
HEADLINE 1: [up to 30 chars]
HEADLINE 2: [up to 30 chars]
HEADLINE 3: [up to 30 chars]

DESCRIPTION 1: [up to 90 chars]
DESCRIPTION 2: [up to 90 chars]

DISPLAY URL: [the visible URL — keep keyword-aligned]
FINAL URL: [the actual destination URL]
```

### Modular kit deliverable (when production mode = modular kit, per §8.5)

When the request is a modular kit per §5.7, the output is structured by angle. All components within an angle are interchangeable per the modular rule (any hook + any body copy + any CTA of the same angle = a valid finished ad). Output one block per angle:

```
=== ANGLE 1: [Angle name — the conceptual umbrella]

Awareness target: [level from brief]
Beliefs worked: #[X] through #[Y]
Compositional model: [from §7.1]
Compositional template: [from §7.2]

--- HOOKS ([N] requested) ---

Hook 1: [text — max 2 lines, scroll-stopping, distinct entry into the angle]
Hook 2: [text — genuinely different angle-entry, not a rewording of Hook 1]
Hook 3: [text]
[... up to N ...]

--- BODY COPIES ([M] requested, length: [Short / Medium / Long / Mix]) ---

Body Copy 1: [length tier]
[Opening = flexible bridge that flows from any hook above.
Independent argument. Develops a specific belief or proof beat.
If embedded CTA: ends with a CTA line. If standalone CTA: ends before the close.]

Body Copy 2: [length tier]
[Different argument, different angle-into-same-conclusion.
Same flexible-bridge rule for the opening.]

Body Copy 3: [length tier]
[...]

[... up to M ...]

--- STANDALONE CTAs ([P] requested) — OPTIONAL, omit if embedded mode ---

CTA 1: [text — works with any body copy of this angle]
CTA 2: [text — different close framing: urgency / softness / curiosity / direct]
[... up to P ...]

--- BUTTON HEADLINES (5 per angle) ---

1. [Benefit angle — max 40 chars]
2. [Curiosity angle]
3. [Urgency angle]
4. [Social proof angle]
5. [Question angle]

--- IMAGE SUGGESTION ---

[DESIGN NOTE: 2-3 sentences. Specific to the angle. Obeys §6.2 image rules.
Eye direction, contrast, recognizable elements, overlay text if any, compliance constraints.]

===

=== ANGLE 2: [Angle name]
[Same structure repeated for each angle]
===

[... for all angles ...]
```

**Convergence note** — at the bottom of the kit, state explicitly that all angles converge on the same landing destination:

```
CONVERGENCE: All [N] angles land on the same destination ([URL or LP description]).
Each angle enters the belief chain from a different starting point — together they cover [belief #X through belief #Y]. The LP picks up from belief #[Z].
Total variants generated: [N angles] × [N hooks] × [M body copies] × [P CTAs if standalone, else 1] = [total] testable ad combinations.
```

### Writing sequence within Fase 2

1. Draft the image direction (`[DESIGN NOTE:]`) first — every downstream choice depends on it
2. Draft the hook (first line of body)
3. Draft the body beats in sequence
4. Draft the close + CTA framing
5. Draft the headline (under image)
6. Draft the description (sub-text)
7. Draft the button copy
8. Run Fase 3 (principles refinement), Fase 4 (anti-AI), Fase 5 (compliance + scroller test + read-aloud)

---

# PART D — Quality control & references

## 11. Common pitfalls

Distilled from extensive paid-advertising practice. Watch for these.

### 11.1 — The Mortal Error: ad about the brand instead of the prospect

The single most common failure mode. The ad lists features, mentions the company's mission, parades credentials — and never names the reader's outcome. The fix is in §4.1: cover the brand name and test whether the ad still earns the click on its benefit alone.

**Fix**: rewrite from the prospect's outcome backwards. Every sentence must trace to *what the prospect gets*. Brand mentions earn their place only when they directly increase trust.

### 11.2 — Direct questions about personal characteristics

*"Are you struggling?"*, *"Are you a single parent?"*, *"Are you over 50 and tired?"* — these get rejected by every major paid platform. The implied targeting of personal traits triggers anti-discrimination filters.

**Fix**: convert to third-person reportage (*"My client Marco was struggling…"*) or first-person testimony (*"I was a single parent at 28…"*) or quoted prospect voice (*"'I am tired of being told I am too old…' — heard from a customer last week"*). Full canonical compliance list: §12 Compliance block.

### 11.3 — Time-bound or specific-outcome promises

*"Lose 4kg in 2 months"*, *"Add 5 pull-ups in 30 days"*, *"Double your revenue in 90 days"* — specific outcome+timeframe combinations are read as non-defensible claims and rejected.

**Fix**: drop the timeframe, drop the specificity, or convert to case-study framing. *"Marco lost 4kg using this approach"* (past-tense case study) passes where *"You will lose 4kg in 2 months"* fails. Full canonical compliance list: §12 Compliance block.

### 11.4 — Image that screams "ad"

Stock photos with megaphone-holding businesspeople, red borders, "click here!" arrows, unnatural poses — these communicate "I am paid advertising" before the eye reaches the words.

**Fix**: redesign the image to read native (§4.2). If the image would look out of place posted organically by the brand in the same feed, it is too advertorial.

### 11.5 — Hook that does not extend the image's curiosity

The image stopped the scroll. The reader paused. The first line of body opens with *"At [Brand], we believe…"* — and the reader scrolls away. The hook restarted the loop instead of extending it.

**Fix**: the hook must answer the unstated question the image opened. If the image is a surprising visual collision, the hook explains it. If the image features a person, the hook is in that person's voice or about that person.

### 11.6 — Body that is brochure-grade

The body lists features, repeats the brand's mission, talks about company achievements. It is structurally a sales sheet pasted into a feed.

**Fix**: rewrite as a conversation. Read aloud — does it sound like a person talking, or like an annual report? If the latter, restart from the prospect's perspective.

### 11.7 — Headline that does no persuasion work

*"Click to learn more"*, *"Find out today"*, *"Get started"* — generic headlines that surrender the second-highest-attention surface on the ad.

**Fix**: the headline must either restate the offer's promise OR name what the reader gets by clicking. Specific > generic. Benefit-loaded > feature-loaded.

### 11.8 — Button copy left as platform default

*"Submit"*, *"Click Here"*, *"Learn More"* — the platform's default button copy is the weakest available. Every ad uses these. Yours stands out by not.

**Fix**: button copy that names the action and the result. *"Get the report"*, *"Start the test"*, *"Reserve my spot"*, *"Send me the case study"*. Each ad in the campaign can carry a slightly different button framing.

### 11.9 — Long copy that reads as a sales letter

Long copy in paid ads is powerful — but only when it reads native (like a personal post or an article). Long copy that reads as classic sales-letter formatting (sub-headlines every 200 words, urgency stacks, P.S. lines, bolded promises) gets skipped by readers and (often) flagged by reviewers.

**Fix**: format long copy as prose, with paragraphs not sub-headlines, with personal voice not promotional voice. The reader should feel like they stumbled onto an interesting post, not like they got served a long ad.

### 11.10 — Mixing native and styled visual registers

Long native-style body copy paired with a heavily styled overlay-text image. Or styled short body copy paired with a candid natural photograph. Either combination reads as inconsistent and disengages the reader.

**Fix**: choose one register (§6.6) and execute the entire ad — body, visual, headline treatment — in that register.

### 11.11 — Inflated proof or unsourced specifics

*"Used by over 100,000 customers"* with no source. *"Voted #1 by experts"* with no named experts. *"Studies show…"* with no studies cited. These trigger both reader skepticism and platform skepticism.

**Fix**: every specific number gets a source. Every superlative gets a defensible cite. When the specifics cannot be sourced, drop them and use qualitative phrasing (*"used by professionals around the world"* is defensible; *"used by 100,000 customers"* without proof is not).

### 11.12 — Carousel where card 1 is unclear

Mobile carousel scrollers see card 1, decide in under a second whether to swipe further. If card 1 does not stand alone as a compelling unit, the rest of the carousel never gets seen.

**Fix**: card 1 must function as its own complete mini-ad. The other cards develop card 1's commitment, not introduce new commitments.

### 11.13 — Video without captions

Most paid-social video is consumed muted. No captions = no message delivered to ~80% of viewers.

**Fix**: captions on every video, synced to the spoken script, readable on mobile sizing. The captions are part of the copy deliverable — write them, do not leave them to post-production.

### 11.14 — Compliance pre-check skipped

The ad is brilliant. The hook works. The image stops the scroll. The button is sharp. The ad gets rejected on submission because it contains a banned phrase nobody screened for.

**Fix**: Fase 5 of the protocol includes a compliance pass. Run it. Every ad. No exceptions. The 5 minutes spent on the pass save the 5 days lost when the ad is rejected and the campaign delays.

### 11.15 — Landing page not congruent with the ad

The ad shows a transformation photo. The landing page opens with a brand mission statement. The reader who clicked the ad lands on a page that feels like a different brand, and bounces immediately.

**Fix**: enforce visual + copy congruence between the ad and the LP (§6.3 — the "landing page must replicate the ad's headline" rule). If the brief has multiple ad variants, ensure each variant has a matching LP variant — or the LP is generic enough to receive all variants without dissonance.

### 11.16 — Hook truncated by the "see more" cutoff

The hook is brilliant but it is one sentence too long, and the platform truncates it at "…see more". The reader sees half the hook and scrolls.

**Fix**: the hook must complete its sentence within the platform's truncation point (typically ~125 characters on paid social feed). Test the rendered version on mobile before delivering.

---

## 12. Revision checklist

Run this before delivering. **Ad-specific only** — the universal writing-quality checks (Gulpease, em-dash count, anti-AI patterns, read-aloud) are handled during Fase 3-5 of the protocol per [writing-principles](core/writing/writing-principles.md). This checklist supplements those, it does not restate them.

**Scroller surfaces**
- [ ] Image direction stops the scroll (high contrast, recognizable, on-brand)?
- [ ] First line of body (hook) extends the image's curiosity, not restarts it?
- [ ] Hook completes its sentence within the platform's "see more" cutoff?
- [ ] Headline (under image) reiterates the hook or states what the reader gets?
- [ ] Button copy is specific, benefit-loaded, never the platform default?
- [ ] Reading only image + first line + headline + button — does this constitute a complete reason to engage?

**Body & angle**
- [ ] One thing being sold (not two)?
- [ ] Body traces back to the prospect's outcome, never the brand's features (Mortal Error check)?
- [ ] Native register preserved throughout (no register mixing)?
- [ ] If long copy: reads as a personal post / article, not a sales letter?
- [ ] Strategic model (§7.1) executed consistently?
- [ ] Tactical template (§7.2) structure visible in the beat sequence?

**Compliance** (canonical list — §6.3 holds the rationale; §11.2-11.3 the failure modes; this enumeration is what gets run before delivery)
- [ ] No direct address to personal characteristics?
- [ ] No specific-age targeting in the copy text?
- [ ] No time-bound or specific-outcome promises in headline or hook?
- [ ] No exaggerations, absurd promises, or clickbait framings?
- [ ] No spam trigger words?
- [ ] No profane language, even censored?
- [ ] No banned image categories (zoom on body parts, before/after for health/beauty, deficiency-implying imagery, fake "play" symbol on stills)?
- [ ] No grammar/spelling errors or all-caps?
- [ ] All specific numbers have a source citation?
- [ ] Body framed as story / case study / educational rather than direct second-person promise?
- [ ] Landing page replicates the ad's headline (or is visibly congruent)?
- [ ] No countdowns or delayed elements on the landing page?
- [ ] No autoplay audio on the landing page?
- [ ] No exit popups or barriers that block the user from closing the page?
- [ ] Full funnel (upsells, thank-you pages, everything reachable from the ad) confirmed compliant by the copywriter?

**Format-specific**
- [ ] Single-image: image obeys all 15 rules (§6.2)?
- [ ] Carousel: card 1 stands alone as a complete mini-ad?
- [ ] If the creative is a video: confirm the script came from the VSL specialist ([vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md)) — this file delivered only primary text, headline, thumbnail title?
- [ ] Native: body reads as editorial, not as promotion?
- [ ] Search: 3 headlines are 3 distinct angles, not 3 variations of the same angle?
- [ ] Lead form: thank-you screen copy completes the experience?

**Brand fidelity**
- [ ] Tone and vocabulary match `brands/<brand>/brand-copy-rules.md`?
- [ ] No invented facts (everything from brief or brand wiki)?
- [ ] First person consistent (frontperson speaks as "I" / brand speaks as "we", per brand convention)?
- [ ] No proprietary external jargon exposed to the reader?
- [ ] feedback-rules (global + brand) re-scanned on the final draft — no rule violated

**Design directions**
- [ ] `[DESIGN NOTE:]` present and specific?
- [ ] `[CTA BUTTON:]` present with exact text?
- [ ] `[OVERLAY TEXT:]` / `[CAPTION:]` / `[VIDEO NOTE:]` / `[CARD N:]` present where format requires?

---

## 13. Cross-references

- [CLAUDE](CLAUDE.md) — orchestrator, runs Brief readiness check before invoking this specialist
- [strategist](skills/strategist.md) — produces the funnel brief this specialist consumes
- [funnel-brief](core/strategic-frameworks/funnel-brief.md) — input template
- [writing-principles](core/writing/writing-principles.md) — read SECTION A + B post-draft; §3 read-aloud in Fase 5
- [emotional-intelligence](core/writing/emotional-intelligence.md) — two-branch gate per §3: mandatory when the brief names Emotional anchors; consulted anyway for emotionally-led moments when it doesn't
- [persuasion-techniques](core/strategic-frameworks/persuasion-techniques.md) — strategic levers the ad activates
- [awareness-levels](core/strategic-frameworks/awareness-levels.md) — primary calibrator for copy length, angle, and model+template selection
- [chain-of-beliefs](core/strategic-frameworks/chain-of-beliefs.md) — the rings the ad opens or installs
- [unique-mechanism](core/strategic-frameworks/unique-mechanism.md) — when the ad's angle is mechanism-led
- [proof-elements](core/strategic-frameworks/proof-elements.md) — typology of proof and how to deploy it in a short ad surface
- [naming](core/strategic-frameworks/naming.md) — when the ad names a proprietary methodology or mechanism
- [funnel-architecture](core/strategic-frameworks/funnel-architecture.md) — the ad as a touchpoint in the funnel
- [hook-specialist](section-specialists/hook-specialist.md) — supplies hooks for ad openers
- [headline-specialist](section-specialists/headline-specialist.md) — supplies headlines under the image and overlay headlines
- [bullet-point-specialist](section-specialists/bullet-point-specialist.md) — supplies bullets when the ad body includes them
- [lp-specialist](format-specialists/lp-specialist.md) — sibling full-piece specialist; the LP is the most common ad destination — congruence enforcement is shared between the two
- [advertorial-specialist](format-specialists/advertorial-specialist.md) — when the ad's destination is a native-style advertorial rather than a direct LP
- [email-specialist](format-specialists/email-specialist.md) — sibling specialist; ads often drive lead-gen that feeds email sequences
- [vsl-and-video-ad-specialist](format-specialists/vsl-and-video-ad-specialist.md) — every video ad format (story ad, video ad, short / medium / long VSL) routes here; the static ad-specialist owns image-only and carousel formats
- `brands/<brand>/brand-copy-rules.md` — voice, primary over generic best practice
- `brands/<brand>/swipe.md` — brand-specific ad examples for voice calibration
- `brands/<brand>/offers.md` — full offer composition
- `brands/<brand>/testimonials.md` — proof rows for testimonial-model ads
- `brands/<brand>/transcripts/` — source material for founder anecdotes and customer stories
- `brands/<brand>/competitors/` — competitor ad libraries for swipe-driven inspiration

---

# Appendix

## A1. Pre-write research checklist (18 points)

> **What this appendix is**: an 18-point research checklist to complete *before* drafting a paid ad — especially for cold-traffic ads where prospect understanding is the difference between an ad that converts and an ad that burns budget.
>
> **When to apply**: every cold-traffic ad. Optional but recommended for warm-traffic ads. Skip for hot-traffic ads to the brand's own email list (the brand already knows them).
>
> **Origin**: distilled from canonical direct-response research practice, adapted to the paid-ad context. The 18 points are the minimum input required to produce ad copy with **three-dimensional psychological depth** — copy that touches the prospect's lived experience rather than echoing generic category claims.

### The 18 points

**Niche definition**
1. How would you describe your niche? Who are they, what is their demographic, how do they describe themselves, how do others describe them?

**Current state**
2. What is their current situation?
3. Why is their current situation painful? How do they describe their pain? How do others describe it?

**Desired state**
4. What is their desired situation?
5. Why is the desired situation better than the current one? What are the practical implications? How do they describe the desired state? How would others describe it?

**Blockers**
6. What prevents them from reaching the desired situation on their own?
7. How do they describe what is blocking them? How do they describe the pain and frustration this blockage causes? Use their words.

**False beliefs**
8. What lies are they currently believing?
9. Why do they believe these lies? Not just what they believe — why they believe it. The "why" lets you build empathy at depth.

**Customer pattern**
10. Look at your current customers: what similarities do they share? What traits do they have in common? How would you describe your customers? How do they describe themselves?

**The offer**
11. What is your offer? Describe it succinctly.
12. What outcome does your offer aim to generate? Describe this too.

**Objections**
13. What objections do people typically have to your offer?
14. How do you handle these objections? Write your responses to the most common ones.

**Insider knowledge**
15. What are your niche interested in that other people do not care about? What interests are uniquely theirs?
16. What hot topics could only an insider in your niche know? What do people keep asking your customer service or in forums that are specific to this niche?

**Priorities**
17. What are the 3 most important things for people in your niche?
18. What are the 3 least important things for people in your niche?

### How to use the checklist

- Complete it **before** opening the document where the ad will be written
- For each point, write the answer in **the prospect's own words** when possible — pull from forum threads, customer service tickets, sales-call transcripts
- The output is not an ad — it is the raw material from which the ad will be drafted
- When stuck on a creative beat during drafting, return to the checklist — the answer to "what should the hook be?" or "what should the next paragraph reveal?" is almost always already in the answers

### Sources of the answers

- **Forums** — Reddit, Facebook Groups, Quora, niche-specific forums
- **Customer service transcripts** — the questions customers actually ask
- **Sales call recordings** — the objections that come up live
- **Existing customers** — direct interviews when possible
- **Competitor reviews and testimonials** — what customers of competing offers say about their experience
- **Platform-native audience tools** — when available, the platform's own audience-insight tools surface Page Likes and demographic patterns that suggest psychographic clusters

The deeper the research, the less generic the ad — and the more it sounds like the brand is speaking *to the prospect specifically*, rather than to "people interested in this category".

---

## A2. Swipe library — 8 strategic models + 8 tactical templates

> **What this appendix is**: a quick-reference grid of the 16 compositional patterns covered in §7. Use as a brainstorming starter when the brief leaves the angle and structure open. Each row is fully developed in §7 — this is the index, not the catalog.

### The 8 strategic models (the angle)

| # | Model | Best for | Sample opener |
|---|---|---|---|
| 1 | **Direct** | Warm/hot traffic, simple known products | *"The new 6-layer protein bar. 21g of protein and under 3.5g of sugar…"* |
| 2 | **Storytelling** | Cold Problem/Solution Aware, compliance-sensitive verticals | *"Today a journalist asked me…"* |
| 3 | **Conversation** | Empathic Problem Aware, identification-driven | *"Hai una di queste sensazioni quando ti alleni?"* |
| 4 | **Frustrations (in quoted form)** | Problem Aware where direct questions would be rejected | *"'My trainer gave me a workout that does not convince me…'"* |
| 5 | **Testimonials** | Trust-building, social-proof-driven | *"'I went to the gym and ate clean for years, but after discovering my body type I finally got results…'"* |
| 6 | **Long copy** | Lead qualification, complex offers, webinar/high-ticket | *"Will 2026 be the year of your best physique? Let me reveal 4 mistakes…"* |
| 7 | **Guru / Authority (endorsement)** | Borrowed authority, expert-cite validation | *"Arnold Schwarzenegger approves [method]? Quoted from his book…"* |
| 8 | **Candid / disarming** | Saturated markets, contrarian positioning | *"Are you a fighter? I am not. I know nothing about jabs or hooks…"* |

### The 8 tactical templates (the structure)

| # | Template | Beat sequence | Best fit |
|---|---|---|---|
| 1 | **Problem / Solution** | Problem → agitate → solution → CTA | Problem Aware, simple to medium offers |
| 2 | **Status** | Identity-aspiration → unlocked benefit → offer as path → "Become a X and…" | Aspirational identity offers (certifications, memberships, titles) |
| 3 | **Relevance** | Specific event/segment anchor → offer as relevant now → time/identity CTA | Time-bound + niche-segmented offers |
| 4 | **Tell a story** | Scene drop → development → link to prospect → CTA | Cold Problem Aware, founder-led brands |
| 5 | **Analogy** | "[Offer] is [familiar] for [audience]" | Hard-to-explain offers adjacent to known categories |
| 6 | **Comparison** | Alternative named → contrast on dimension → offer wins → CTA | Differentiated offers in saturated markets |
| 7 | **Novelty** | Novelty claim → demonstration / counter-intuitive specific → offer → CTA | Genuinely new mechanisms or angles |
| 8 | **Logic** | Stat / fact → engaging implication question → offer as logical solution → CTA | Quantitative-case offers (time saved, ROI, frequency) |

### Combining models and templates

The canonical list of natural model+template pairings lives in **§8.3** — consult there. This appendix stays an index of the individual patterns only.

When the brief leaves model+template open, propose 2-3 pairings to the copywriter with brief rationale, and ask which to execute. The pairing is one of the strongest creative choices in the ad — it deserves explicit copywriter input rather than a default.
