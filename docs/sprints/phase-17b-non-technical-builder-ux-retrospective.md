---
title: "Phase 17B Non-Technical Builder UX Retrospective"
status: "Complete"
version: "0.1.0-alpha.0"
phase: "Phase 17B"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-07"
---

# Phase 17B Non-Technical Builder UX Retrospective

## What Went Well

- The clean-test feedback loop worked: every inconsistency reported in the post-Phase 17 test mapped to a concrete fix.
- Centralizing derived state in `runtime-context.ts` made the priority rules testable and removed contradictions without rewriting commands.
- The negation-aware sensitive-data check fixed the worst credibility bug (critical risks invented from "Não usar dados reais, senhas...").
- All 87 automated tests pass and the manual clean-folder scenario matches the acceptance criteria exactly.

## What Was Hard

- The build pipeline strips TypeScript with regex-based rules, which constrains code style (single-line signatures, no typed arrow params, no " as " sequences in strings).
- Balancing "one primary next action" against preserving detail sections required reordering the engine to walk the pipeline from the furthest stage reached.
- The recorded Phase 17 score (84/100) and the post-clean-test baseline (86/100) had drifted; this phase documents both explicitly.

## What We Learned

- State consistency is a UX feature: beginners trust the tool only if every command tells the same story.
- Public vocabulary (risk labels, confidence explanations) matters as much as behavior for the Non-Technical Builder profile.
- Fixture-driven scenario tests (Controle Simples de Gastos) catch regressions that unit tests miss.

## What We Would Change Next Time

- Add scenario fixtures for the other pt265 examples (barbearia site, controle de treinos) to harden the slice-title heuristics.
- Consider replacing the regex build with a real TypeScript compiler step before beta.

## Follow-Ups

- Real Non-Technical Builder validation with the updated `teste/` kit.
- Phase 18 (Public Alpha Release Candidate) if validation passes; Phase 17C (Beginner Flow Polish) otherwise.
