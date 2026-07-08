---
title: "Maintainer Approval Gate"
status: "APPROVED FOR PUBLIC ALPHA PUBLICATION"
version: "0.1.0-alpha.0"
phase: "Phase 19"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-08"
---

# Maintainer Approval Gate — v0.1.0-alpha

**Status: APPROVED FOR PUBLIC ALPHA PUBLICATION**

Decision date: 2026-07-08
Maintainer: Lucas Souza
Decisão registrada: o mantenedor declarou "Quero apertar o botão" e autorizou a execução da Phase 19 — Publication Execution Gate, exclusivamente como public alpha.

I approve publishing Resolve Aí v0.1.0-alpha as a public alpha release.

I understand and accept:

- This is not stable.
- This is not production-ready.
- Non-Technical Builder human validation remains pending.
- Professional Engineer dedicated validation remains limited.
- The package must be published with the `alpha` dist-tag, not `latest`.
- The GitHub release must be marked as pre-release.
- Known limitations must remain visible.
- Rollback plan must remain documented.

## Entendimento do mantenedor

- [x] Aprovo publicar esta versão como alpha público.
- [x] Entendo que ainda falta validação humana ampla.
- [x] Entendo que esta versão não é stable.

## Autorizações específicas

- [x] Aprovo criar a tag `v0.1.0-alpha` (após sucesso do npm publish).
- [x] Aprovo criar o GitHub Release (como pre-release), usando os artefatos de `docs/release/v0.1.0-alpha-rc/`.
- [x] Aprovo publicar no npm com `npm publish --tag alpha`.

## Pré-leitura obrigatória (concluída na aprovação)

1. `npm-package-audit.md` — pacote auditado: 37 arquivos, 38.5 kB, sem artefatos locais ou sensíveis;
2. `known-limitations.md` — limitações públicas mantidas visíveis;
3. `rollback-plan.md` — deprecar e corrigir para frente; unpublish só para dados sensíveis;
4. `../v0.1.0-alpha-phase-18-go-no-go-decision.md` — RELEASE CANDIDATE READY 90/100.

## Approved actions

- npm publish with alpha dist-tag.
- create git tag v0.1.0-alpha after npm success.
- create GitHub pre-release after tag success.

## Condições que permanecem proibidas

- Publicar como `latest`.
- Declarar stable ou production-ready.
- Renomear o pacote automaticamente se `resolve-ai` estiver indisponível (nesse caso: parar, Phase 19B).
- Adicionar telemetria.

## Registro de aprovação

| Data | Quem | Decisão | Observações |
|---|---|---|---|
| — | — | PENDENTE | Gate criado na Phase 18; nenhuma aprovação registrada. |
| 2026-07-08 | Lucas Souza (mantenedor) | **APROVADO — public alpha** | Decisão textual "Quero apertar o botão" registrada na Phase 19. Alpha apenas; nunca stable; dist-tag `alpha`; pre-release no GitHub. |
