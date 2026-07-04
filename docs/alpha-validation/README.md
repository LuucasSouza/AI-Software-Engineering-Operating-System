---
title: "Alpha Validation"
status: "Draft"
version: "0.1.0-alpha"
phase: "Phase 11"
owner: "Resolve Ai Maintainers"
last_updated: "2026-07-04"
---

# Alpha Validation

## Objetivo

Centralizar a validacao alpha externa/local do Resolve Ai antes de qualquer publicacao npm.

## Escopo

Esta area cobre protocolo de validacao, matriz de cenarios, planos de teste, relatorios simulados, scorecard e recomendacao de release.

## Principios

- Validar valor real antes de distribuicao publica.
- Preservar dados sensiveis e registrar apenas metadados seguros.
- Nao declarar estabilidade antes de evidencia externa suficiente.
- Separar resultado de teste automatizado de entendimento humano.

## Responsabilidades

Maintainers devem executar ou revisar cenarios, registrar achados, classificar severidade e decidir se a publicacao deve prosseguir, ser estendida ou bloqueada.

## Documentos

- `alpha-validation-protocol.md`
- `user-profiles-and-scenarios.md`
- `real-project-test-plan.md`
- `scenarios/`
- `profiles/`
- `reports/`
- `templates/feedback/alpha-feedback-template.md`
- `templates/feedback/alpha-feedback-triage-template.md`

## Proximos passos

Executar validacoes com usuarios reais nos tres perfis e atualizar o scorecard de release.
