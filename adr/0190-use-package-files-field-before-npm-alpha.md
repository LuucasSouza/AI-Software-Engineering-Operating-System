# ADR 0190 — Use Package files Field Before npm Alpha

## Status

Accepted

## Contexto

O dry-run anterior incluía `src/` e `tests/` no tarball.

## Decisão

Usar `files` no `package.json` do pacote CLI para restringir publicação a `dist` e `README.md`.

## Consequências

O pacote fica menor e com superfície pública mais limpa.

## Documentos relacionados

- `packages/resolve-ai-cli/package.json`
- `docs/release/v0.1.0-alpha-npm-publication-checklist.md`
