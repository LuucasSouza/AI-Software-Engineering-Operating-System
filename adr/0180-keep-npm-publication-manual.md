# ADR 0180 — Keep npm Publication Manual

## Status

Accepted

## Contexto

Publicar no npm altera expectativa publica e suporte do projeto.

## Decisão

Manter `npm publish` manual e separado da Phase 12.

## Alternativas consideradas

- Publicar automaticamente no fim da fase.
- Criar script de publicacao agora.
- Publicar sem validacao real.

## Consequências

O mantenedor mantem controle explicito sobre quando distribuir o pacote.

## Documentos relacionados

- `docs/release/v0.1.0-alpha-npm-publication-checklist.md`
- `docs/release/v0.1.0-alpha-npm-and-tagging-decision-gate.md`
