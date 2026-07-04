# pt125 — Local State and Config Schema

---
title: Resolve Aí Local State and Config Schema
phase: 4
status: Draft Implementation Directive
paths:
  - .resolve-ai/config.json
  - .resolve-ai/state.json
---

## 1. Objetivo

Definir os arquivos locais mínimos do runtime.

## 2. Diretório `.resolve-ai/`

Este diretório armazena estado operacional local do Resolve Aí.

Deve ser seguro, simples e versionável de forma consciente.

## 3. `.resolve-ai/config.json`

Exemplo inicial:

```json
{
  "schemaVersion": "0.1.0",
  "projectName": null,
  "publicName": "Resolve Aí",
  "docsPath": "docs/resolve-ai",
  "defaultFlow": "projeto-em-andamento-diagnostico-e-continuacao",
  "language": "pt-BR",
  "createdAt": "ISO_DATE"
}
```

## 4. `.resolve-ai/state.json`

Exemplo inicial:

```json
{
  "schemaVersion": "0.1.0",
  "active": false,
  "currentMode": null,
  "currentFlow": null,
  "lastCommand": "começar",
  "lastUpdatedAt": "ISO_DATE"
}
```

## 5. Regras de compatibilidade

- Sempre incluir `schemaVersion`.
- Nunca assumir que campos existem.
- Se arquivo estiver corrompido, mostrar erro amigável e sugerir backup.
- Não sobrescrever estado sem necessidade.

## 6. .gitignore

Na Phase 4, o Codex deve decidir se `.resolve-ai/` deve ser versionado ou ignorado parcialmente.

Recomendação inicial:

- `.resolve-ai/state.json` pode ser local e ignorado;
- `.resolve-ai/config.json` pode ser versionável se não contiver dados sensíveis;
- no MVP, documentar a decisão em ADR.

Opção segura para MVP:

```gitignore
.resolve-ai/state.json
.resolve-ai/cache/
.resolve-ai/session/
```

## 7. Estado humano vs estado runtime

- `.resolve-ai/` é para runtime.
- `docs/resolve-ai/` é para humanos e agentes.

Essa separação é obrigatória.
