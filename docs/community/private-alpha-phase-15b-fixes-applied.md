---
title: "Private Alpha Phase 15B Fixes Applied"
status: "Complete"
version: "0.1.0-alpha.0"
phase: "Phase 15B"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-05"
---

# Private Alpha Phase 15B Fixes Applied

| Fix ID | Origin | Severity | Files | Change | Test |
|---|---|---|---|---|---|
| FIX-15B-001 | P15B-FB-001 | P2 docs | `docs/getting-started/install-local-cli.md`, `docs/getting-started/quickstart-alpha.md`, `packages/resolve-ai-cli/README.md` | Recommend `cd packages/resolve-ai-cli && npm link` on Windows and keep direct `node dist/index.js` alternative | `documentacao recomenda npm link no Windows dentro do pacote` |
| FIX-15B-002 | P15B-FB-004 | P2 UX | `validation-engine.ts`, `validar.ts`, validation docs | Explain missing Git and suggest `git init` or running inside a Git repo | `validar sem Git explica limite de comparacao` |
| FIX-15B-003 | P15B-FB-005 | P2 UX | `status.ts` | Show one prioritized next action: validation > assisted execution > preparation > planning > diagnosis | `status mostra uma proxima acao prioritaria pela etapa mais recente` |
| FIX-15B-004 | P15B-FB-003 | P2 UX | `task-selection-engine.ts` | Read docs 00, 02, and 03 and propose a concrete scoped task when filled | `preparar usa intake preenchido para propor tarefa concreta` |
| FIX-15B-005 | P15B-FB-006 | P2 consistency | `assisted-execution-engine.ts`, `preparar.ts`, `resolver.ts` | Harmonize risk mapping and document rule | `resolver harmoniza risco yellow do preparo como medio` |
| FIX-15B-006 | P15B-FB-007 | P3 polish | `preparar.ts`, `resolver.ts` | Remove leading blank lines from main outputs | `preparar nao inicia output com linha em branco`; `resolver nao inicia output com linha em branco` |

## Safety Check

- No automatic execution added.
- No telemetry added.
- No external API calls added.
- No MCP or hooks added.
- Safety gates were not made more permissive.
