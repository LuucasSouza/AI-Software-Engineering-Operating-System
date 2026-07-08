---
title: "Distribution Checklist"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# Distribution Checklist — v0.1.0-alpha.0

Como o Resolve Aí é distribuído hoje e como será distribuído se a publicação alpha for aprovada. Não afirmar publicação enquanto ela não aconteceu.

## Estado atual (2026-07-08)

**O pacote ESTÁ publicado no npm como public alpha** (`resolve-ai@0.1.0-alpha.0`, dist-tag `alpha`): https://www.npmjs.com/package/resolve-ai

Instalação pública recomendada:

```bash
npm install -g resolve-ai@alpha
resolve-ai ajuda
```

ou sem instalação global:

```bash
npx resolve-ai@alpha ajuda
```

A distribuição local via repositório GitHub continua válida para desenvolvimento.

## Estado anterior (2026-07-07, histórico)

O pacote não estava publicado; a única distribuição suportada era local, via repositório GitHub.

## Distribuição atual (fallback local)

- [x] Clone + build documentados no `README.md` e em `docs/getting-started/install-local-cli.md`;
- [x] `npm link` documentado com caminho confiável para Windows;
- [x] Fallback sem link global documentado:

```bash
node caminho/para/Resolve-Ai/packages/resolve-ai-cli/dist/index.js ajuda
```

- [x] Kit `teste/` disponível para participantes de alpha manual;
- [x] Aliases sem acento documentados para Windows.

## Distribuição executada na Phase 19 (após aprovação do mantenedor)

- [x] `npm publish --tag alpha` executado manualmente pelo mantenedor (2026-07-08);
- [x] Instalação documentada como `npm install -g resolve-ai@alpha` / `npx resolve-ai@alpha`;
- [x] Tag `v0.1.0-alpha` criada e enviada (após sucesso do npm, ADR-0268);
- [x] GitHub Release publicado como pre-release (`--prerelease --latest=false`): https://github.com/LuucasSouza/Resolve-Ai/releases/tag/v0.1.0-alpha
- [x] README atualizado para refletir a publicação real (sem prometer stable);
- [x] Release notes publicadas na release com known limitations visíveis.

## Canais proibidos nesta fase

- Publicação automática via CI/CD (não existe GitHub Action de publicação e não deve existir nesta fase);
- Divulgação como stable/production ready em qualquer canal;
- Qualquer distribuição que inclua telemetria.
