---
title: "v0.1.0-alpha Release Candidate — Índice"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# v0.1.0-alpha Release Candidate

Este diretório reúne todos os artefatos do release candidate do alpha público do Resolve Aí, preparado na Phase 18.

## Status

**PUBLIC ALPHA PUBLISHED (Phase 19, 2026-07-08) — not stable.**

O mantenedor aprovou o gate e a publicação foi executada: `resolve-ai@0.1.0-alpha.0` no npm (dist-tag `alpha`), tag Git `v0.1.0-alpha` e GitHub pre-release. Esta versão continua **não stable** e **não foi validada por usuários iniciantes reais em escala suficiente** — o alpha público existe para coletar essa validação. Detalhes completos: `publication-execution-report.md`.

## Classificação pública permitida

```text
Public Alpha Candidate
Alpha público para validação
Release Candidate aguardando aprovação do mantenedor
```

## Classificação proibida

```text
Stable
Production ready
Validado por usuários iniciantes reais
Pronto para qualquer projeto
```

## Artefatos

| Documento | Propósito |
|---|---|
| `release-candidate-checklist.md` | Checklist técnico do release candidate. |
| `release-notes.md` | Release notes honestas do alpha. |
| `known-limitations.md` | Limitações conhecidas obrigatórias. |
| `npm-package-audit.md` | Auditoria do `npm pack --dry-run`. |
| `npm-publication-checklist.md` | Checklist para publicação npm futura. |
| `npm-publication-decision.md` | Decisão atual de publicação (NÃO PUBLICADO). |
| `github-release-draft.md` | Draft pronto para copiar/colar no GitHub Release futuro. |
| `git-tag-checklist.md` | Checklist para criação futura da tag. |
| `distribution-checklist.md` | Checklist de distribuição e fallback local. |
| `rollback-plan.md` | Plano de rollback para problemas pós-publicação. |
| `post-release-feedback-plan.md` | Plano de feedback manual pós-release. |
| `maintainer-approval-gate.md` | Gate explícito de aprovação do mantenedor. |

## Regra central

Nenhuma ação de publicação (npm publish, git tag, GitHub Release) pode acontecer antes de todos os checkboxes de `maintainer-approval-gate.md` serem marcados manualmente pelo mantenedor.

## Contexto de validação humana

A Phase 17B terminou com 88/100 — LIMITED GO muito forte, 87/87 testes automatizados passando. Não houve validação humana real adicional entre a Phase 17B e a Phase 18. Este release candidate registra essa lacuna abertamente: Non-Technical Builder segue pendente e Professional Engineer dedicado segue insuficiente.
