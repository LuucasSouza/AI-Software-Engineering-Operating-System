# ADR 0156 — Adopt CLI Build Automation

## Status

Accepted

## Contexto

Até a Phase 9, `dist/` foi atualizado manualmente quando `tsc` não estava disponível.

## Decisão

Adotar `npm run build --prefix packages/resolve-ai-cli` como build local obrigatório da CLI.

## Alternativas consideradas

- Continuar editando `dist/` manualmente.
- Exigir `tsc` global.
- Usar script local sem dependência global.

## Consequências

`dist/` passa a ser regenerável a partir de `src/` sem depender de toolchain global.

## Plano de reversão

Substituir o build local por `tsc` ou bundler quando dependências forem formalizadas.
