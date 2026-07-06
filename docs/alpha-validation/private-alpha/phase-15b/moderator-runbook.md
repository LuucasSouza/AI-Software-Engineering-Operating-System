---
title: "Phase 15B Moderator Runbook"
status: "Draft"
version: "0.1.0-alpha.0"
phase: "Phase 15B"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-05"
---

# Phase 15B Moderator Runbook

## Preparation

- Confirm no sensitive data is used.
- Confirm participant profile and anonymized ID.
- Build CLI locally.
- Run `resolve-ai ajuda`.
- Use safe project, sanitized project, or real project with permission.

## Flow

```text
ajuda -> começar -> ligar -> diagnosticar -> planejar -> preparar -> resolver -> validar -> status
```

## Required Questions

- What does Resolve Ai do?
- What does it not do?
- Did `resolver` seem to execute code automatically?
- Did `executar` seem destructive?
- Was `validar` clear?
- Which artifact was most useful?
- What blocked installation or usage?

## Risk Signals

- User thinks `resolver` auto-edits code.
- User thinks `executar` runs implementation automatically.
- User uses credentials or real sensitive data.
- User cannot install or run local CLI.
- User cannot identify the next step from status.

## Closing

Record feedback anonymously, classify severity, and update fix backlog before changing CLI or docs.
