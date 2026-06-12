---
folder: funnel-briefs
brand: <brand-slug>
---

# Funnel briefs — index

> This folder contains all funnel briefs produced for this brand. Each brief is the strategic output of the [strategist](../../../skills/strategist.md) skill at the end of Phase 1 (Discovery).

## File naming

```
<funnel-slug>-v<N.N>.md
```

Examples:
- `dpl-q2-launch-v1.0.md`
- `dpl-q2-launch-v1.1.md` (minor revision)
- `dpl-q2-launch-v2.0.md` (structural revision)
- `evergreen-direct-v1.0.md`

Each version is a separate file. Old versions are retained, never deleted.

## Template reference

The canonical brief structure (14 blocks, numbered 0-13) is defined in [funnel-brief](../../../core/strategic-frameworks/funnel-brief.md). The Strategist produces every brief in that exact format.

## How briefs are produced

Briefs are produced by the [strategist](../../../skills/strategist.md) skill — not manually. The orchestrator ([CLAUDE](../../../CLAUDE.md)) routes the copywriter's request to the Strategist, which runs the Phase 1 Discovery workflow and writes the brief into this folder.

The copywriter never authors a brief from scratch outside the Strategist workflow — doing so would diverge from the canonical structure that specialists expect to consume.

## Status

The brief's status field (Draft / In-Review / Approved / Locked / Live) is documented in the meta header of each individual brief file. See [funnel-brief §7.1](../../../core/strategic-frameworks/funnel-brief.md) for the status lifecycle.

---

## Related

- [brand](../brand.md) — brand foundation
- [offers](../offers.md) — offers each brief channels
- [products](../products.md) — products each brief promotes
