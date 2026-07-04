---
title: "Phase 2.5 — Handoff"
version: "0.1.0-alpha"
status: "Draft"
phase: "2.5"
owner: "Principal Maintainer"
---

# Phase 2.5 — Handoff

## 1. Purpose

This file defines the handoff for executing Phase 2.5 and preparing Phase 3.

## 2. Phase summary

Phase 2.5 formalizes the rename and repositioning of the project:

```text
From: AI-SEOS
To: Resolve Aí
```

Public promise:

> Me dá o problema ou a ideia, e eu te ajudo a resolver.

## 3. Why this phase exists

This phase exists because the project is about to become a runtime/tooling product.

Before creating CLI commands, MCP tools, adapters, local project state, and installation flows, the project needs a public name that is understandable, memorable, and useful for both technical and non-technical users.

## 4. Required implementation

The AI terminal/Codex must:

1. Read pt101–pt110 fully;
2. use existing project governance docs;
3. create brand, naming, positioning, and runtime naming docs;
4. update README, ROADMAP, CHANGELOG and indexes;
5. create ADRs 0081–0086;
6. preserve source files in bootstrap-source;
7. validate using the checklist;
8. commit and push.

## 5. Directories to create

```text
docs/brand/
docs/naming/
docs/product-positioning/
docs/runtime/
```

## 6. Files to create

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

## 7. ADRs to create

```text
0081-adopt-resolve-ai-as-public-project-name.md
0082-keep-ai-seos-as-historical-technical-name.md
0083-adopt-resolve-ai-as-future-cli-name.md
0084-insert-phase-2-5-before-runtime-productization.md
0085-adopt-dual-audience-communication-model.md
0086-adopt-runtime-direction-inspired-by-ease-of-use.md
```

## 8. Files to update

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

## 9. Phase 3 preparation

After Phase 2.5, Phase 3 should be generated as:

```text
Phase 3 — Resolve Aí Runtime Productization
```

Suggested future parts:

```text
pt111_RESOLVE_AI_RUNTIME_VISION.md
pt112_RESOLVE_AI_CLI_ARCHITECTURE.md
pt113_RESOLVE_AI_MCP_SERVER_ARCHITECTURE.md
pt114_RESOLVE_AI_PROJECT_ADAPTER.md
pt115_AGENT_ROUTING_AND_INSTRUCTION_FILES.md
pt116_HOOKS_AND_SESSION_MEMORY.md
pt117_COMMANDS_AND_TOOL_CONTRACTS.md
pt118_INSTALLATION_AND_PLATFORM_ADAPTERS.md
pt119_RUNTIME_SECURITY_AND_PRIVACY.md
pt120_PHASE_3_HANDOFF.md
```

## 10. Definition of Done

Phase 2.5 is complete when:

- Resolve Aí is public name;
- AI-SEOS is documented as former technical name;
- promise sentence is visible;
- README is updated;
- roadmap is updated;
- ADRs are created;
- future CLI command `resolve-ai` is documented;
- Phase 3 is ready to begin under the Resolve Aí identity.
