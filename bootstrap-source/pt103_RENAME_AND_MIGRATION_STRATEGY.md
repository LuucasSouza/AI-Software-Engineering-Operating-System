---
title: "Resolve Aí — Rename and Migration Strategy"
version: "0.1.0-alpha"
status: "Draft"
phase: "2.5"
owner: "Principal Maintainer"
---

# Rename and Migration Strategy

## 1. Purpose

This document defines how to migrate the project identity from AI-SEOS to Resolve Aí without breaking the repository, documentation, historical context, or roadmap.

## 2. Migration principle

Do not perform a blind global replace.

AI-SEOS appears in multiple contexts:

1. Historical project origin;
2. technical architecture terminology;
3. file paths;
4. generated documents;
5. examples;
6. public-facing copy;
7. future runtime commands.

Each occurrence must be classified before replacement.

## 3. Naming classification

### Replace now

Replace AI-SEOS with Resolve Aí in:

- README hero section;
- public description;
- getting started docs;
- adoption docs;
- user-facing examples;
- non-technical builder docs;
- vibe coder docs;
- future runtime references.

### Keep with note

Keep AI-SEOS with an explanatory note in:

- historical ADRs;
- sprint reports;
- changelog entries from before the rename;
- bootstrap-source files;
- old phase artifacts.

Suggested note:

```text
AI-SEOS was the original technical name of Resolve Aí.
```

### Rename gradually

Rename gradually in:

- internal docs;
- framework registry;
- architecture docs;
- templates;
- examples;
- protocol docs.

### Do not rename blindly

Do not rename:

- commit history;
- old sprint source files;
- historical ADR titles unless creating successor ADRs;
- any file where the name AI-SEOS is part of documented history.

## 4. Repository rename options

Current repository may remain as-is during transition or eventually become:

```text
resolve-ai
```

Recommended future repository names:

```text
resolve-ai
resolve-ai-framework
resolve-ai-os
```

Preferred:

```text
resolve-ai
```

Because it is simple and matches the future CLI command.

## 5. CLI naming

Recommended future command:

```bash
resolve-ai
```

Examples:

```bash
resolve-ai init
resolve-ai new
resolve-ai diagnose
resolve-ai mode
resolve-ai plan
resolve-ai handoff
resolve-ai doctor
resolve-ai status
```

Portuguese aliases may be considered later, but the first CLI should prioritize stability and compatibility.

## 6. Migration steps

Phase 2.5 must instruct the agent to:

1. Create brand identity docs;
2. Update README with Resolve Aí identity;
3. Add “formerly AI-SEOS” transition note;
4. Update ROADMAP with Phase 2.5 and renumber Phase 3 after it;
5. Update CHANGELOG;
6. Add migration guide;
7. Create ADRs for naming and migration;
8. Prepare future Phase 3 docs to use Resolve Aí and `resolve-ai`.

## 7. Backward compatibility

Existing AI-SEOS documentation remains valid as architectural source material.

Resolve Aí is the public identity.

AI-SEOS is the historical/technical lineage.

## 8. Risks

| Risk | Impact | Mitigation |
|---|---:|---|
| Confusing users with two names | Medium | Use “Resolve Aí, formerly AI-SEOS” during transition |
| Breaking internal references | High | Do not blind-replace paths or historical docs |
| CLI name collision | Medium | Prefer `resolve-ai` over `resolve` |
| Losing technical seriousness | Medium | Keep architecture docs rigorous |
| Sounding too informal | Medium | Pair brand with professional documentation |

## 9. Definition of Done

Migration strategy is ready when:

- the project has a public name;
- technical legacy references are classified;
- README explains the transition;
- roadmap reflects Phase 2.5;
- future runtime docs use `resolve-ai` naming;
- an ADR records the decision.
