---
title: "Resolve Aí — Runtime Naming Preparation"
version: "0.1.0-alpha"
status: "Draft"
phase: "2.5"
owner: "Runtime Architect"
---

# Runtime Naming Preparation

## 1. Purpose

This document prepares the future runtime layer naming before Phase 3 begins.

Phase 3 will turn Resolve Aí into a more operational tool inspired by the ease of use of tools like Context Mode, without copying them.

## 2. Product direction

Resolve Aí should eventually work like this:

```bash
resolve-ai diagnose
```

The user opens a project, runs or asks an AI agent to run Resolve Aí, and the framework starts working inside the project.

## 3. Future CLI name

Recommended command:

```bash
resolve-ai
```

Why not only `resolve`?

- `resolve` is generic;
- it may conflict with existing tools;
- `resolve-ai` is clearer;
- it communicates that the tool is AI-assisted;
- it maps cleanly to package names.

## 4. Future commands

### Project initialization

```bash
resolve-ai init
```

Installs Resolve Aí configuration in the current project.

### New project intake

```bash
resolve-ai new
```

Starts from an idea or problem.

### Existing project diagnosis

```bash
resolve-ai diagnose
```

Analyzes an existing repository and creates project documentation.

### Mode detection

```bash
resolve-ai mode
```

Detects or sets one of:

- Non-Technical Builder;
- Vibe Coder;
- Professional Engineer.

### Project planning

```bash
resolve-ai plan
```

Generates execution plan, backlog, milestones, and handoff.

### Handoff

```bash
resolve-ai handoff
```

Creates a context package for another agent or session.

### Doctor

```bash
resolve-ai doctor
```

Checks installation, configuration, docs, templates, and known gaps.

### Status

```bash
resolve-ai status
```

Shows current mode, project state, pending decisions, risks, and next steps.

## 5. Local project files

Future runtime may create:

```text
.resolve-ai/
  config.yml
  state/
  sessions/
  index/
  cache/

docs/resolve-ai/
  00-project-intake.md
  01-current-state-assessment.md
  02-discovery.md
  03-product-definition.md
  04-architecture-review.md
  05-risk-register.md
  06-decision-log.md
  07-execution-plan.md
  08-backlog.md
  09-handoff.md
```

During migration, existing `docs/ai-seos/` may be supported as legacy path.

## 6. Agent instruction files

Future adapters may generate:

```text
AGENTS.md
CLAUDE.md
GEMINI.md
.github/copilot-instructions.md
.cursor/rules/resolve-ai.mdc
```

These should instruct agents to use Resolve Aí before making code changes.

## 7. MCP naming

Potential MCP tool names:

```text
resolve_ai_detect_project
resolve_ai_detect_mode
resolve_ai_run_intake
resolve_ai_diagnose_project
resolve_ai_create_context_package
resolve_ai_register_decision
resolve_ai_register_risk
resolve_ai_generate_handoff
resolve_ai_validate_readiness
resolve_ai_status
resolve_ai_doctor
```

## 8. Do not copy Context Mode

Phase 3 may be inspired by the usability of Context Mode:

- simple install;
- operational commands;
- project-local state;
- integration with AI agents;
- session continuity;
- low-friction usage.

But Resolve Aí has a different mission:

```text
Context Mode: context optimization.
Resolve Aí: software engineering orchestration.
```

## 9. Definition of Done

Runtime naming prep is complete when:

- `resolve-ai` is documented as preferred future CLI command;
- future project-local paths are defined;
- legacy path compatibility is documented;
- Phase 3 handoff uses Resolve Aí naming;
- no runtime implementation is started prematurely.
