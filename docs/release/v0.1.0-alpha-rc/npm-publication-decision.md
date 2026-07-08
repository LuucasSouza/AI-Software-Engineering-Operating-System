---
title: "npm Publication Decision"
status: "Release Candidate"
version: "0.1.0-alpha.0"
phase: "Phase 18"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-07"
---

# npm Publication Decision — v0.1.0-alpha.0

```text
Decisão atual: PUBLICADO COMO PUBLIC ALPHA
Estado: publicado com dist-tag alpha em 2026-07-08
Motivo: todos os gates técnicos passaram e o mantenedor aprovou explicitamente
        no maintainer-approval-gate.md ("Quero apertar o botão").
Aprovação do mantenedor: APROVADA — 2026-07-08, Lucas Souza
Pacote: https://www.npmjs.com/package/resolve-ai
Comando: npm publish ./packages/resolve-ai-cli --tag alpha
Dist-tags: alpha: 0.1.0-alpha.0 (latest aponta para a mesma versão por
           mecânica do npm no primeiro publish — ver ressalva no
           publication-execution-report.md)
```

## Classificação

Public alpha. **Não é stable. Não é production-ready.** A validação humana real continua pendente e visível nas known limitations (ADR-0274).

## Instalação pública

```bash
npm install -g resolve-ai@alpha
resolve-ai ajuda
```

ou

```bash
npx resolve-ai@alpha ajuda
```

## Registro

| Data | Evento |
|---|---|
| 2026-07-07 | Phase 18 concluída. Dry-run auditado e aprovado. Publicação NÃO executada. Estado: aguardando aprovação do mantenedor. |
| 2026-07-08 | Mantenedor aprovou o gate. Phase 19 executada: `npm publish --tag alpha` bem-sucedido, install tests OK, tag `v0.1.0-alpha` enviada, GitHub pre-release criado. Estado: PUBLICADO COMO PUBLIC ALPHA. |
