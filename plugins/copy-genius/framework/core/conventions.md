# Conventions — internal linking & file naming (canonical)

> Full text of the vault's linking and naming conventions. Summarized in CLAUDE.md §13–§14.

---

## Internal linking convention (canonical)

**This is the canonical format for all internal file references across the Copy Genius vault.** Every file in the system — orchestrator, strategic frameworks, writing files, skills (including all Copy Specialists), templates — uses this format when referencing other files of the vault.

### The format

```
[filename-without-extension](relative/path/from/vault-root.md)
```

Always **full path from the vault root**, never relative-to-current-file. This makes the reference univocal regardless of where it sits, fully readable by AI specialists, and natively navigable in Obsidian.

### Examples

- `[mass-desire](core/strategic-frameworks/mass-desire.md)`
- `[strategist](skills/strategist.md)`
- `[CLAUDE](CLAUDE.md)`
- `[feedback-rules](core/feedback-rules.md)`

### When NOT to apply this format

- **Path placeholders with variables** — e.g., `brands/<brand>/brand.md`, `brands/<brand>/avatars/<segment>.md`. These stay in backticks because `<brand>` and `<segment>` are placeholders, not concrete files. Converting them would generate broken links.
- **Inline code formatting** that isn't a path reference (e.g., `[INCOMPLETE]`, `vN.N`, technical tokens) — keep backticks for actual code/inline-code purposes.
- **Tree structures inside code blocks** — file trees in ASCII art rendered inside ``` ``` ``` ``` fenced blocks are not rendered as links by Obsidian and don't need conversion.
- **Directory references** (path that ends without a `.md` file) — link to specific files, not directories. Use prose to describe what a directory contains.

### Exception — links inside `brands/_template/` and `brands/<brand>/`

Files inside a brand folder (template or instance) use **paths relative to the brand folder**, not absolute paths from the vault root. Reason: the `_template/` folder is cloned to `brands/<brand>/` when a new brand is created; relative-to-brand paths survive the clone, absolute-from-vault paths would break.

Pattern inside a brand folder:

- From `brand.md` (root of brand folder) to a sibling file: `[products](products.md)`
- From `brand.md` to a subfolder file: `[avatar](avatars/avatar.md)`
- From a subfolder file (e.g., `avatars/avatar.md`) back to `brand.md`: `[brand](../brand.md)`
- From a subfolder file to another root-level file: `[products](../products.md)`
- To reach a vault-root file from inside a brand folder, climb with `../`: `[strategist](../../skills/strategist.md)` from the root of the brand folder, `../../../` from a subfolder such as `funnel-briefs/` (e.g., `[strategist](../../../skills/strategist.md)`)

This is the only deviation from the vault-root-absolute rule.

### Why this matters

- **AI-readable**: every specialist (current and future) reads the brief + brand wiki via path references. Markdown links carry both semantic label and full path, more info than a bare path in backticks.
- **Obsidian graph populated**: the graph view becomes a meaningful map of the system — clusters of strategic frameworks, writing files, skills, brand instances. Useful for everyone (you, students who install the vault, future maintainers).
- **Zero-setup for students**: anyone who installs the vault sees the system map natively in Obsidian. No plugin required, no settings to change.
- **Forever consistency**: every new file added to the vault — including all future writing specialists in `format-specialists/` — uses this format. The graph stays meaningful as the system grows.

---

## File & folder naming convention (canonical)

**This is the canonical naming format for every file and folder in the Copy Genius vault.** Applies to all current files and every future addition — strategic frameworks, writing files, skills (including all Copy Specialists), brand instances, funnel briefs, satellites.

### The rules

| Element | Rule |
|---|---|
| **Case** | Lowercase only |
| **Word separator** | Single hyphen `-` (kebab-case) |
| **Spaces** | Never. Replace with `-` |
| **Underscores** | Only as folder prefix to mean "not a regular instance" — see exceptions below |
| **Extension** | `.md` for Markdown files; no extension for folders |
| **Singular vs plural** | Singular for concept files (`mass-desire.md`, `brand.md`, `avatar.md`); plural for catalog files / folders (`testimonials.md`, `competitors/`, `procedures/`, `funnel-briefs/`) |
| **Order of words** | Most-significant noun first when natural (`offer-construction.md`, `chain-of-beliefs.md`, `funnel-architecture.md`) |
| **Acronyms** | Spelled out unless universally known (`vsl-and-video-ad-specialist.md` is OK because "VSL" is a domain term; `mvp-launch.md` is OK; obscure acronyms should be expanded) |

### Examples

- ✅ `mass-desire.md`, `chain-of-beliefs.md`, `funnel-brief.md`, `vsl-and-video-ad-specialist.md`, `hook-specialist.md`
- ✅ `dpl-q2-launch-v1.0.md` (brand-specific funnel slug + version)
- ✅ `independent-trainer.md` (avatar segment slug)
- ❌ `MassDesire.md` (uppercase / PascalCase)
- ❌ `mass_desire.md` (underscore)
- ❌ `mass desire.md` (space)
- ❌ `Mass-Desire.md` (capitalization)

### Brand-specific naming

- **Brand slug** — kebab-case, lowercase. Used as folder name in `brands/<brand-slug>/` and in all references (`brand:` field in frontmatter). Examples: `trainerbrand`, `caffe-roma`, `acme-fitness`.
- **Funnel slug** — kebab-case, descriptive. Examples: `dpl-q2-launch`, `evergreen-direct`, `black-friday-2026`, `retargeting-warm`.
- **Funnel brief file** — `<funnel-slug>-v<major>.<minor>.md` (e.g., `dpl-q2-launch-v1.0.md`, `dpl-q2-launch-v1.1.md`, `dpl-q2-launch-v2.0.md`).
- **Avatar segment slug** — kebab-case describing the segment. Examples: `independent-trainer`, `b2b-cto`, `over-50-runner`.
- **Competitor slug** — kebab-case of the competitor's name. Examples: `competitor-x`, `acme-corp`.
- **Testimonial / swipe entries** — use stable IDs inside the catalog file (e.g., row `#7`); no separate files.

### Exceptions — universal conventions retained

These follow widely recognized conventions and are not converted to kebab-case:

- **`CLAUDE.md`** — uppercase, Claude Code / Anthropic convention for the orchestrator file
- **`README.md`** — uppercase, universal convention for "documentation of this folder"
- **`_template/`** — leading underscore is the Obsidian/filesystem convention for "scaffold, not a real instance"; the underscore signals to humans and the system that this is not a brand to be consumed
- **Future similar reserved names** — if a new universal convention emerges (e.g., `CHANGELOG.md`), it is honored as-is

### Why this matters

- **Filesystem-portable** — kebab-case lowercase names work on every OS (macOS / Linux / Windows) without case-sensitivity surprises
- **URL-safe** — when files are referenced in URLs (e.g., GitHub-rendered docs), no encoding issues
- **AI-readable** — consistent naming reduces ambiguity for AI specialists matching paths
- **Predictable** — the copywriter or a student can predict the filename of a concept they want to find ("what's the file about chain of beliefs?" → `chain-of-beliefs.md`)
- **Obsidian-clean** — graph node labels are clean (`chain-of-beliefs`, not `Chain_Of_Beliefs`)

### Application — every future addition

Every file or folder added to the vault from this moment on follows this convention. No exceptions outside the universal-convention list above. Copy Genius applies this format automatically when:

- Creating a new strategic framework or writing file
- Building a new skill or specialist file
- Creating a new brand folder (clone `_template/` → `brands/<brand-slug>/`)
- Producing a new funnel brief
- Adding new avatar segments, competitor profiles, transcripts, procedures, swipe entries

If the copywriter requests a filename that violates the convention, Copy Genius surfaces the convention and proposes a compliant alternative before creating the file.
