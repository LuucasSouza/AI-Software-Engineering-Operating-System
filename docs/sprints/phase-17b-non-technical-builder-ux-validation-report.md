---
title: "Phase 17B Non-Technical Builder UX Validation Report"
status: "Complete"
version: "0.1.0-alpha.0"
phase: "Phase 17B"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-07"
---

# Phase 17B Non-Technical Builder UX Validation Report

## Automated Gates

| Gate | Result |
|---|---|
| `npm run build --prefix packages/resolve-ai-cli` | PASS (35 files) |
| `npm test --prefix packages/resolve-ai-cli` | PASS (87/87 tests) |
| `npm run smoke --prefix packages/resolve-ai-cli` | PASS |
| `npm pack --dry-run` (inside package) | PASS (38.5 kB, 37 files) |
| `git diff --check` | PASS |

## Scenario Tests (tests/phase-17b-consistency.test.ts and updated suites)

| # | Scenario | Result |
|---|---|---|
| 1 | New project without interview recommends `resolve-ai entrevistar` | PASS |
| 2 | New project with interview does not recommend the interview again | PASS |
| 3 | Status post-interview shows "Projeto do Zero" and Non-Technical Builder | PASS |
| 4 | `planejar` post-interview uses "Controle Simples de Gastos" | PASS |
| 5 | `planejar` post-interview does not invent critical risks | PASS |
| 6 | `preparar` post-interview generates a concrete MVP task | PASS |
| 7 | `resolver` keeps the same concrete task from `preparar` | PASS |
| 8 | `validar` without Git explains the limitation in plain language | PASS |
| 9 | Public output never shows `Risco: yellow` (nor green/orange/red) | PASS |
| 10 | `teste/feedback.md` includes a `resolve-ai entrevistar` section | PASS |
| 11 | `teste/COMECE_AQUI.md` warns not to run commands inside `teste/` | PASS |
| 12 | Legacy project with sensitive risk still prioritizes security (red/Hardening) | PASS |
| 13 | Existing project keeps working without a mandatory interview | PASS |
| 14 | Professional Engineer keeps essential technical detail | PASS |

## Manual Clean-Folder Scenario (Controle Simples de Gastos)

Executed in a clean folder outside the repository: `começar → ligar → entrevistar (stdin) → diagnosticar → planejar → preparar → resolver → validar → status`.

Observed results:

- `diagnosticar`: "Entrevista: feita", "Ideia registrada: Controle Simples de Gastos", "Ponto de partida" language, low confidence explained, no repeated interview recommendation.
- `planejar`: plan named "Controle Simples de Gastos" with the five MVP features and out-of-scope list; next action "Preparar a primeira tarefa do MVP: criar a primeira tela...".
- `preparar`: task "Criar a primeira tela de \"Controle Simples de Gastos\"", "Risco: médio" with explanation.
- `resolver`: same task title, "Eu ainda não mexi no seu código.", "Autoexecução: não".
- `validar`: "Confiança: baixa" explained by missing Git; next action remains using the final prompt, `git init` demoted to tip.
- `status`: "Fluxo atual: Projeto do Zero — Entrevista e Planejamento", "Perfil recomendado: Non-Technical Builder", one primary next action, all risk labels in Portuguese, no "Projeto em Andamento" contradiction.

## Not Validated

- No new real human participant executed the flow during this phase (simulated/automated validation only).
- Deep semantic validation of generated documents remains out of scope for alpha.

## Conclusion

All Phase 17B acceptance criteria pass. Score recalculated to 88/100 — LIMITED GO (muito forte). Real Non-Technical Builder participation is still the release gate.
