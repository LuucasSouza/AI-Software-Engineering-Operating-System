---
title: Entry Mode Templates
version: 0.1.0
status: Draft
sprint: 5.5
module: Entry Modes Layer
owner: AI-SEOS Maintainers
last_updated: 2026-07-03
---


# Entry Mode Templates

## 1. Objective

This document defines the initial template set required for the Entry Modes Layer.

Sprint 5.5 creates the structural templates. Sprint 6 will expand them into complete reusable template packs.

## 2. Required Template Directories

```text
templates/entry-modes/
templates/intake/
templates/intake/non-technical-builder/
templates/intake/vibe-coder/
templates/intake/professional-engineer/
```

## 3. Template: Mode Selection

Path:

```text
templates/entry-modes/mode-selection-template.md
```

Content:

```markdown
# AI-SEOS Mode Selection

Choose the best mode:

1. Non-Technical Builder
   I am not technical and want help turning a problem into a software solution.

2. Vibe Coder
   I use AI tools to build and want a practical guided plan.

3. Professional Engineer
   I am a developer or technical professional and want complete engineering artifacts.

## Selected Mode

## Reason

## Notes
```

## 4. Template: Non-Technical Builder Intake

Path:

```text
templates/intake/non-technical-builder/builder-interview-template.md
```

Required sections:

- What problem are you trying to solve?
- How do you solve it today?
- Who is involved?
- What information matters?
- What happens step by step?
- What mistakes happen today?
- What would the simplest useful version do?
- What should wait for later?
- Software translation.
- Recommended next step.

## 5. Template: Vibe Coder Intake

Path:

```text
templates/intake/vibe-coder/vibe-coder-build-brief-template.md
```

Required sections:

- Build goal.
- Current skill level.
- Tools available.
- Suggested stack.
- MVP boundary.
- Implementation phases.
- Codex prompts.
- Validation checklist.
- Risks and guardrails.
- Commit plan.

## 6. Template: Professional Engineer Intake

Path:

```text
templates/intake/professional-engineer/technical-intake-template.md
```

Required sections:

- Business context.
- Product context.
- Functional requirements.
- Non-functional requirements.
- Constraints.
- Architecture assumptions.
- Domain model candidates.
- Integration candidates.
- ADR candidates.
- Risk flags.
- Required downstream artifacts.

## 7. Template: Discovery Intake Package

Path:

```text
templates/intake/discovery-intake-package-template.md
```

This is the normalized output of all entry modes.

## 8. Template Quality Rules

All templates must:

- use plain headings;
- include purpose and instructions;
- separate facts, assumptions and unknowns;
- include examples when useful;
- include completion checklist;
- include handoff target.

## 9. Sprint 6 Dependency

Sprint 6 must expand these templates into complete packs with filled examples for each mode.
