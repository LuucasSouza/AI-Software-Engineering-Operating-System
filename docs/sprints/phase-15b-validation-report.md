---
title: "Phase 15B Validation Report"
status: "Complete"
version: "0.1.0-alpha.0"
phase: "Phase 15B"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-05"
---

# Phase 15B Validation Report

## Bootstrap Source

`pt241` to `pt250` are preserved in `bootstrap-source/`.

## Real Validation

| Profile | Participant | Status |
|---|---|---|
| Non-Technical Builder | P15B-NTB-01 | Pending |
| Vibe Coder | P15B-VC-01 | Executed |
| Professional Engineer | P15B-PE-01 | Partial/light coverage |

## Feedback Consolidated

- End-to-end commands worked in CS2 Clips real project.
- `resolver` was understood as non-automatic.
- Final agent prompt was a high-value artifact.
- Installation, validation, status, task selection, risk consistency, and output polish issues were found and addressed.

## Tests

| Check | Result |
|---|---|
| `npm run build --prefix packages/resolve-ai-cli` | Passed; 30 files generated in `dist/`. |
| `npm test --prefix packages/resolve-ai-cli` | Passed; 64/64 tests. |
| `npm run smoke --prefix packages/resolve-ai-cli` | Passed. |
| `npm pack --dry-run` from `packages/resolve-ai-cli` | Passed; 32 files, 26.9 kB package, 104.0 kB unpacked. |
| Local temp flow `ajuda -> começar -> ligar -> diagnosticar -> planejar -> preparar -> resolver -> validar -> status` | Passed. |
| `git diff --check` | Passed; Windows LF/CRLF normalization warnings only. |

## Fix Verification

- Windows local install docs now recommend `cd packages/resolve-ai-cli` followed by `npm link`.
- `validar` explains no-Git state and suggests `git init` or running inside a Git repository.
- `status` displays one prioritized next action, preferring the most recent workflow stage.
- `preparar` reads filled intake/discovery/product-definition context before falling back to generic scope definition.
- `preparar` and `resolver` use the same risk mapping rule.
- Tests cover no-Git validation, prioritized status action, filled-intake preparation, Windows install copy, and top output whitespace for main outputs.

## Restrictions

- No npm publish.
- No tag.
- No GitHub release.
- No stable claim.
- No telemetry, MCP, hooks, or external APIs.
- No automatic execution added.
