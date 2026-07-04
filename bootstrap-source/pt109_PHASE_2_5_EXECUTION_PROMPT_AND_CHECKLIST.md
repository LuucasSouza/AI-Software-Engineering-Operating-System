---
title: "Phase 2.5 — Execution Prompt and Checklist"
version: "0.1.0-alpha"
status: "Draft"
phase: "2.5"
owner: "Principal Maintainer"
---

# Phase 2.5 — Execution Prompt and Checklist

## 1. Purpose

This document gives the AI terminal/Codex clear instructions to execute Phase 2.5.

## 2. Execution goals

The agent must:

- make Resolve Aí the public project name;
- update public-facing documentation;
- preserve historical AI-SEOS references where appropriate;
- define the future runtime naming;
- update roadmap and changelog;
- create ADRs;
- prepare Phase 3.

## 3. Required directories

Create or update:

```text
docs/brand/
docs/naming/
docs/product-positioning/
docs/runtime/
docs/sprints/
adr/
```

## 4. Required files

Create or update:

```text
docs/brand/resolve-ai-brand-identity.md
docs/brand/brand-voice-and-communication-guide.md
docs/naming/rename-and-migration-strategy.md
docs/product-positioning/public-positioning.md
docs/runtime/runtime-naming-prep.md
docs/sprints/phase-2-5-handoff.md
docs/sprints/phase-2-5-validation-report.md
docs/sprints/phase-2-5-retrospective.md
```

Update:

```text
README.md
ROADMAP.md
CHANGELOG.md
GOVERNANCE.md
CONTRIBUTING.md
adr/README.md
docs/README.md
docs/architecture/decision-log.md
```

Create ADRs:

```text
adr/0081-adopt-resolve-ai-as-public-project-name.md
adr/0082-keep-ai-seos-as-historical-technical-name.md
adr/0083-adopt-resolve-ai-as-future-cli-name.md
adr/0084-insert-phase-2-5-before-runtime-productization.md
adr/0085-adopt-dual-audience-communication-model.md
adr/0086-adopt-runtime-direction-inspired-by-ease-of-use.md
```

## 5. Required README changes

README must include:

- Resolve Aí as primary name;
- phrase: “Me dá o problema ou a ideia, e eu te ajudo a resolver.”;
- “formerly AI-SEOS” transition note;
- three entry paths;
- new project vs existing project explanation;
- future CLI name `resolve-ai`;
- link to naming/brand docs.

## 6. Required roadmap changes

ROADMAP must include:

```text
Phase 2.5 — Naming, Brand and Product Positioning
```

before:

```text
Phase 3 — Resolve Aí Runtime Productization
```

## 7. Required CHANGELOG changes

CHANGELOG must mention:

- public rename to Resolve Aí;
- AI-SEOS retained as historical technical name;
- Phase 2.5 inserted;
- future CLI naming prepared.

## 8. Validation checklist

- [ ] README uses Resolve Aí as public name.
- [ ] Promise sentence appears near top of README.
- [ ] AI-SEOS is explained as former technical name.
- [ ] ROADMAP includes Phase 2.5.
- [ ] Phase 3 uses Resolve Aí Runtime Productization naming.
- [ ] ADRs 0081–0086 exist.
- [ ] Brand docs exist.
- [ ] Rename strategy exists.
- [ ] Runtime naming prep exists.
- [ ] No blind global rename was performed.
- [ ] Historical docs remain traceable.

## 9. Commit

Commit message:

```text
docs: execute phase 2.5 naming and positioning
```

## 10. Final report

The agent must report:

- files created;
- files updated;
- ADRs created;
- decisions made;
- migration risks;
- validation result;
- commit hash;
- push status;
- next action for Phase 3.
