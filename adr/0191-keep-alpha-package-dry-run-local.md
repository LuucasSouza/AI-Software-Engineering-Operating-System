# ADR 0191 — Keep Alpha Package Dry Run Local

## Status

Accepted

## Contexto

`npm pack --dry-run` permite revisar pacote sem publicar.

## Decisão

Executar dry-run local dentro de `packages/resolve-ai-cli` antes de qualquer publicação.

## Consequências

O pacote pode ser auditado sem rede, publicação ou tag.

## Documentos relacionados

- `docs/release/v0.1.0-alpha-npm-publication-checklist.md`
