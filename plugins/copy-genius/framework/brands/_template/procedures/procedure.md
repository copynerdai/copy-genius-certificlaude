---
procedure: <procedure-slug>
procedure_name: "<Display Name>"
brand: <brand-slug>
status: <draft | active | archived>
cadence: <weekly | monthly | per-launch | on-demand | ad-hoc | other>
---

# PROCEDURE — <Procedure Name>

> Operational procedure used recurrently for this brand. Copy Genius executes it consistently every time it's invoked.
> The template is modular: essential sections are always filled, optional sections only when relevant.

---

## Context

- **What it is**: [1-2 lines describing the procedure's purpose]
- **Who's involved**: [client, frontman, team members, channels]
- **Cadence**: <cadence>
- **Channels**: [where the output is published / delivered — YouTube, email list, newsletter, social platforms, etc.]

---

## Input

> What the user/client provides to trigger this procedure. Be specific about the format.

[e.g., "raw transcript of the podcast episode (auto-generated, may contain typos)" / "a brief paragraph + product to launch" / "a URL + tone requested"]

---

## Outputs to produce

> List of deliverables this procedure produces. Each gets its own detailed sub-section below.

1. <Deliverable name>
2. <Deliverable name>
3. <Deliverable name>

---

## Deliverable rules

### Deliverable 1 — <Name>

> Detailed rules for this output: structure, length, tone, do/don't, format-specific requirements.

- **Structure**: [section layout, what blocks appear and in what order]
- **Length**: [target word count, time, or size]
- **Tone**: [register, voice qualities]
- **Specific rules**:
  - [Rule — concrete and verifiable]
  - [Rule]
  - [Rule]
- **Examples** (optional): [before/after sample or concrete demonstration]

### Deliverable 2 — <Name>

(same structure as above)

### Deliverable 3 — <Name>

(same structure as above)

---

## Source-of-truth files (optional)

> Files this procedure reads from or writes to during execution. Use absolute paths. Leave the section empty or remove if not applicable.

- `<absolute-path>` — [what it contains / role in this procedure]
- `<absolute-path>` — [...]

---

## Infrastructure (optional)

> External systems involved: Drive folders, CMS, automation tools, ad platforms. Include IDs and references — never plaintext secrets. Leave empty or remove if not applicable.

| Resource | ID / Path | Purpose |
|---|---|---|
| <Resource name> | <ID or path> | <how it's used in this procedure> |

---

## Fixed elements (optional — verbatim, never modify)

> Content that must appear verbatim in every output: CTAs, signatures, link blocks, disclaimers. Paste exactly as it should appear in the final deliverable. Copy Genius never paraphrases these.

**<Element name>** (e.g., "Standard CTA block"):

```
[Paste fixed content verbatim here]
```

**<Element name>**:

```
[Paste fixed content verbatim here]
```

---

## Formatting rules (optional)

> Final output formatting specifics. Use when the deliverable has technical formatting requirements (Google Doc structure, email HTML, PDF layout, etc.). Leave empty or remove if not applicable.

- [Rule — e.g., "H1 on document title", "Yellow highlight on placeholders", "Page break between emails"]
- [Rule]
- [Rule]

---

## Workflow steps

> The ordered procedure Copy Genius executes when invoked. Each step is concrete and verifiable. Numbered for sequence — never reorder unless updating the procedure.

1. [Step — concrete action]
2. [Step]
3. [Step]
4. [Step]
5. [Step]

---

## Hard rules (inviolable)

> Rules that must NEVER be broken. The procedure is considered failed if any of these is violated. Explain WHY behind each rule when possible — the reason helps judge edge cases.

- **NEVER** [action X] — [reason]
- **NEVER** [action Y] — [reason]
- **ALWAYS** [action Z] — [reason]

---

## Update log (optional)

> Track when and why the procedure has evolved over time. Useful when the procedure changes due to client feedback or workflow refinement.

- **YYYY-MM-DD**: [change made — reason / triggered by which feedback]
- **YYYY-MM-DD**: [change made]

---

## Related

- [brand](../brand.md) — brand foundation
