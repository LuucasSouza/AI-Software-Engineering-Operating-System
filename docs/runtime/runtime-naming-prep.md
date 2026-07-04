---
title: "Resolve Aí Runtime Naming Preparation"
version: "0.1.0-alpha"
status: "Draft"
phase: "2.5"
owner: "Runtime Architect"
---

# Runtime Naming Preparation

## Future CLI Name

Preferred command:

```bash
resolve-ai
```

## Future Commands

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

## Future Local Project Paths

```text
.resolve-ai/
docs/resolve-ai/
```

During migration, `docs/ai-seos/` may be accepted as a legacy path.

## Agent Instruction Files

Future adapters may generate `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md` and `.cursor/rules/resolve-ai.mdc`.

## Non-Scope

Phase 2.5 does not implement the CLI, MCP server or runtime. It only prepares naming.
