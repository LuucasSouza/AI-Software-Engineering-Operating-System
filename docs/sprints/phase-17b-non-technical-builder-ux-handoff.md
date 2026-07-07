---
title: "Phase 17B Non-Technical Builder UX Handoff"
status: "Complete"
version: "0.1.0-alpha.0"
phase: "Phase 17B"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-07"
---

# Phase 17B Non-Technical Builder UX Handoff

## Result

Phase 17B fixed the state inconsistencies found in the post-Phase 17 clean Non-Technical Builder test. After an interview in a new project, `diagnosticar`, `planejar`, `preparar`, `resolver`, `validar`, and `status` now read the same derived context and present a coherent journey.

## Main Changes

- New state consistency layer: `src/core/runtime-context.ts` (`buildRuntimeContext`, `getPrimaryNextAction`).
- New public risk formatter: `src/core/risk-language.ts` (`baixo`, `médio`, `alto`, `crítico`).
- New interview scope extractor: `src/core/interview-scope.ts` (`extractProjectScopeFromInterview`, negation-aware sensitive-data detection).
- `diagnosticar` recognizes a completed interview, stops recommending `resolve-ai entrevistar`, and presents new projects like starting points ("Ponto de partida") instead of broken projects.
- `status` shows project name, correct flow ("Projeto do Zero — Entrevista e Planejamento"), recommended profile, and a single primary next action with a "why" explanation.
- `planejar` uses interview name, MVP, constraints, and out-of-scope; the false "Resolver riscos críticos" recommendation caused by negated sensitive-data answers was fixed.
- `preparar` generates a concrete MVP slice (e.g. "Criar a primeira tela de \"Controle Simples de Gastos\"") and `resolver` keeps the exact same task title.
- Public risk output standardized in Portuguese; `yellow`/`green`/`orange`/`red` removed from main CLI output.
- `Confiança: baixa` now comes with a plain-language reason (new project; validation without Git).
- Validation without Git no longer hijacks the primary next action before real execution; `git init` became a tip.
- `teste/` kit updated: interview section in feedback, kit-vs-execution-folder warning, `$ra` shortcut, beginner questions.

## Score

88/100 - LIMITED GO (muito forte). Previous baseline: 86/100 (post-Phase 17 clean-test recalibration; the Phase 17 scorecard recorded 84/100).

## Next Action

Repeat the Controle Simples de Gastos test with a real Non-Technical Builder participant and collect `teste/feedback.md`. If it passes, plan Phase 18 — Public Alpha Release Candidate; otherwise run Phase 17C — Beginner Flow Polish.
