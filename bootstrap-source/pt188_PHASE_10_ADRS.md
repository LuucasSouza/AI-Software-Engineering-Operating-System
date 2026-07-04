---
title: Phase 10 ADRs
project: Resolve Aí
phase: 10
status: Draft
version: 0.1.0-alpha-prep
---

# Phase 10 ADRs

## Objetivo

Criar ADRs para as decisões de hardening de release e usabilidade local.

## ADRs obrigatórias

Criar ADRs 0156 a 0165.

### ADR 0156 — Adopt CLI Build Automation

Decisão: a CLI deve ser compilável por script, sem edição manual de `dist/`.

### ADR 0157 — Adopt Local CLI Linking Workflow

Decisão: antes de publicação npm, o fluxo oficial de teste local será via build + link local.

### ADR 0158 — Adopt Smoke Tests for CLI Usability

Decisão: além de unit tests, a CLI terá smoke tests para validar uso real mínimo.

### ADR 0159 — Keep dist Versioned During Alpha

Decisão: `dist/` pode permanecer versionado temporariamente para facilitar uso local, mas deve ser gerado por build.

### ADR 0160 — Adopt Portuguese-First CLI UX

Decisão: comandos e mensagens públicas continuam em português brasileiro, com tom leve e claro.

### ADR 0161 — Adopt Resolve-Ai Remote as Canonical Repository

Decisão: o remote canônico é `https://github.com/LuucasSouza/Resolve-Ai.git`.

### ADR 0162 — Adopt Runtime State Policy

Decisão: `.resolve-ai/state.json` é estado local e deve ser ignorado por padrão.

### ADR 0163 — Adopt Docs Resolve-Ai as Human Project Memory

Decisão: `docs/resolve-ai/` é memória documental humana do projeto analisado e pode ser versionada quando apropriado.

### ADR 0164 — Defer npm Publication Until External Validation

Decisão: a Phase 10 prepara publicação, mas não publica no npm.

### ADR 0165 — Adopt Alpha Release Readiness Checklist

Decisão: release alpha depende de checklist explícito, não apenas testes passando.

## Padrão de ADR

Cada ADR deve conter:

- Status
- Contexto
- Decisão
- Alternativas consideradas
- Consequências
- Plano de reversão quando aplicável

## Arquivos esperados

```text
adr/0156-adopt-cli-build-automation.md
adr/0157-adopt-local-cli-linking-workflow.md
adr/0158-adopt-smoke-tests-for-cli-usability.md
adr/0159-keep-dist-versioned-during-alpha.md
adr/0160-adopt-portuguese-first-cli-ux.md
adr/0161-adopt-resolve-ai-remote-as-canonical-repository.md
adr/0162-adopt-runtime-state-policy.md
adr/0163-adopt-docs-resolve-ai-as-human-project-memory.md
adr/0164-defer-npm-publication-until-external-validation.md
adr/0165-adopt-alpha-release-readiness-checklist.md
```
