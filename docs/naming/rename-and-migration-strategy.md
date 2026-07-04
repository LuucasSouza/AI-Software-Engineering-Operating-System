---
title: "Resolve Aí Rename and Migration Strategy"
version: "0.1.0-alpha"
status: "Draft"
phase: "2.5"
owner: "Principal Maintainer"
---

# Rename and Migration Strategy

## Purpose

Define how the project migrates from AI-SEOS to Resolve Aí without breaking history, documentation or future runtime naming.

## Principle

Do not perform a blind global replacement.

## Reference Classification

| Classification | Treatment |
|---|---|
| Public | Prefer Resolve Aí. |
| Historical | Keep AI-SEOS with transition note. |
| Technical lineage | Keep AI-SEOS when describing original architecture. |
| Legacy path | Preserve existing paths until explicit migration. |
| Runtime future | Use `resolve-ai`. |

## Replace Now

- README hero and public intro.
- Public positioning and getting-started language.
- Future runtime naming references.

## Keep With Note

- Historical ADRs.
- Sprint reports.
- Changelog entries before Phase 2.5.
- Bootstrap source files.

## Future Names

- Public product/framework: Resolve Aí.
- CLI/package command: `resolve-ai`.
- Future project-local docs path: `docs/resolve-ai/`.
- Legacy accepted path during transition: `docs/ai-seos/`.

## Migration Risks

- Users may be confused by two names.
- Blind rename could break historical traceability.
- Informal name must still be paired with rigorous technical documentation.
