---
title: Phase 10 Handoff
project: Resolve Aí
phase: 10
status: Draft
version: 0.1.0-alpha-prep
---

# Phase 10 Handoff

## 1. Nome da fase

Phase 10 — Resolve Aí Release Hardening and Local CLI Usability

## 2. Objetivo

Preparar a CLI `resolve-ai` para uso local real e release alpha responsável.

## 3. Diretórios e arquivos esperados

### CLI

```text
packages/resolve-ai-cli/package.json
packages/resolve-ai-cli/tsconfig.json
packages/resolve-ai-cli/scripts/smoke-test.js
packages/resolve-ai-cli/README.md
```

### Documentação

```text
docs/getting-started/install-local-cli.md
docs/release/v0.1.0-alpha-cli-readiness.md
docs/sprints/phase-10-handoff.md
docs/sprints/phase-10-validation-report.md
docs/sprints/phase-10-retrospective.md
```

### ADRs

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

### Bootstrap source

```text
bootstrap-source/pt181_PHASE_10_RELEASE_HARDENING_RATIONALE.md
...
bootstrap-source/pt190_PHASE_10_HANDOFF.md
```

## 4. Arquivos a atualizar

- README.md
- ROADMAP.md
- CHANGELOG.md
- adr/README.md
- docs/README.md
- docs/sprints/README.md
- docs/release/README.md, se existir
- docs/getting-started/README.md, se existir
- packages/resolve-ai-cli/README.md
- .gitignore

## 5. Quality Gates

- [ ] Build passa.
- [ ] Testes passam.
- [ ] Smoke test passa.
- [ ] README explica instalação local.
- [ ] Remote canônico está correto ou pendência documentada.
- [ ] Sem publicação npm.
- [ ] Sem tag automática.
- [ ] Sem MCP/hooks/telemetria.
- [ ] `.resolve-ai/state.json` ignorado por padrão.
- [ ] `docs/resolve-ai/` explicado como documentação humana.

## 6. Definition of Done

A Phase 10 estará concluída quando um usuário conseguir:

1. clonar o repositório;
2. instalar dependências;
3. buildar a CLI;
4. linkar localmente;
5. rodar `resolve-ai ajuda`;
6. abrir outro projeto;
7. executar o fluxo básico;
8. entender que o Resolve Aí ainda é alpha.

## 7. Próxima fase recomendada

Após a Phase 10, a recomendação é:

```text
Phase 11 — External Alpha Validation
```

Objetivo:

Testar o Resolve Aí em projetos reais com pelo menos três perfis:

1. pessoa não técnica;
2. vibe coder;
3. programador profissional.

Alternativa:

```text
Phase 11 — npm Publication Preparation
```

Mas a recomendação preferencial é validar externamente antes de publicar.
