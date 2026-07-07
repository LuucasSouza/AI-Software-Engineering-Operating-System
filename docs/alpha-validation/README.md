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

## Phase 13

- `real-users/non-technical-builder-validation-report.md`
- `real-users/vibe-coder-validation-report.md`
- `real-users/professional-engineer-validation-report.md`
- `real-users/consolidated-real-validation-summary.md`
- `phase-13-alpha-feedback-analysis.md`

## Phase 14

- `real-users/phase-14-real-user-validation-plan.md`
- `real-users/phase-14-real-user-validation-matrix.md`
- `real-users/phase-14-non-technical-builder-session.md`
- `real-users/phase-14-vibe-coder-session.md`
- `real-users/phase-14-professional-engineer-session.md`
- `real-users/phase-14-consolidated-findings.md`
- `real-users/profile-score-summary.md`

## Phase 15A

- `private-alpha/participant-recruitment-plan.md`
- `private-alpha/participant-screening-checklist.md`
- `private-alpha/participant-consent-note.md`
- `private-alpha/session-prep-checklist.md`
- `private-alpha/private-alpha-onboarding-guide.md`
- `private-alpha/privacy-and-consent-guidelines.md`
- `private-alpha/safe-project-selection-guide.md`
- `private-alpha/sensitive-data-handling-note.md`
- `private-alpha/session-non-technical-builder-01.md`
- `private-alpha/session-vibe-coder-01.md`
- `private-alpha/session-professional-engineer-01.md`
- `private-alpha/private-alpha-consolidated-results.md`
- `private-alpha/private-alpha-profile-scorecard.md`

## Phase 15B

- `private-alpha/phase-15b/second-round-validation-plan.md`
- `private-alpha/phase-15b/recruitment-tracker.md`
- `private-alpha/phase-15b/moderator-runbook.md`
- `private-alpha/phase-15b/session-p15b-ntb-01.md`
- `private-alpha/phase-15b/session-p15b-vc-01.md`
- `private-alpha/phase-15b/session-p15b-pe-01.md`
- `private-alpha/phase-15b/evidence-register.md`
- `private-alpha/phase-15b/second-round-consolidated-results.md`
- `private-alpha/phase-15b/profile-scorecard.md`

## Phase 16

- `../../teste/`: kit simples e copiavel para validacao alpha manual em projetos reais.
- `../../teste/PROMPT_PARA_IA.md`: prompt pronto para a IA acompanhar o teste.
- `../../teste/feedback.md`: formulario vivo preenchido durante o teste e enviado manualmente pelo participante.

## Phase 17

- `resolve-ai entrevistar` deve ser usado nos próximos testes com projetos do zero.
- Validação agora deve observar se `validar` separa artefatos Resolve Aí de mudanças reais do produto.
- Próximos testes precisam confirmar redução de falsos positivos em design tokens, Next.js e pastas auxiliares.

## Phase 17B

- Fluxo pós-entrevista agora é coerente: diagnóstico reconhece entrevista feita, status mostra Projeto do Zero e uma única próxima ação prioritária.
- Próximos testes devem usar o cenário Controle Simples de Gastos e verificar tarefa concreta do MVP em `preparar`/`resolver`.
- Risco público aparece em português (baixo, médio, alto, crítico) e `Confiança: baixa` vem com explicação.
- Relatório: `../sprints/phase-17b-non-technical-builder-ux-validation-report.md`.

## Proximos passos

Enviar a pasta `teste/` para participantes reais, coletar `teste/feedback.md` manualmente e priorizar Non-Technical Builder usando `resolve-ai entrevistar` e Professional Engineer dedicado.
