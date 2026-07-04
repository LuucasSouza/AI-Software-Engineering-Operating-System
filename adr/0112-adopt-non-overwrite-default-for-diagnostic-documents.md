# ADR 0112 — Adopt Non-Overwrite Default for Diagnostic Documents

## Status

Accepted

## Contexto

Usuários podem editar manualmente documentos em `docs/resolve-ai/`.

## Decisão

O comando `diagnosticar` não sobrescreve documentos existentes por padrão.

## Consequências positivas

- Preserva trabalho humano.
- Mantém idempotência.

## Consequências negativas

- Documentos antigos podem não refletir novo diagnóstico automaticamente.

## Reversal plan

Adicionar `--forcar` com backup explícito em fase futura.
