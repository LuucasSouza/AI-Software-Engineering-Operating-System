# ADR 0181 — Keep Git Tagging Manual

## Status

Accepted

## Contexto

Tag Git comunica release publico e deve ser irreversivel no processo normal.

## Decisão

Criar tags apenas apos Go/No-Go aprovado manualmente.

## Alternativas consideradas

- Criar tag na Phase 12.
- Criar tag automaticamente se testes passarem.
- Usar tag para release candidate sem aprovacao.

## Consequências

Evita sinalizar release antes da decisao final.

## Documentos relacionados

- `docs/release/v0.1.0-alpha-npm-and-tagging-decision-gate.md`
