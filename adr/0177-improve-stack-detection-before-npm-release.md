# ADR 0177 — Improve Stack Detection Before npm Release

## Status

Accepted

## Contexto

Node.js, TypeScript, Vite e React sao cenarios comuns e a Phase 11 mostrou baixa confianca na exibicao de stack.

## Decisão

Exigir deteccao minima de Node.js, TypeScript, Vite e React antes de qualquer publicacao npm.

## Alternativas consideradas

- Manter stack detection como best effort sem teste.
- Remover exibicao de stack.
- Adiar stack detection para IA futura.

## Consequências

Diagnostico fica mais confiavel para projetos comuns, mantendo linguagem de "stack provavel".

## Documentos relacionados

- `packages/resolve-ai-cli/src/core/project-inspector.ts`
- `docs/release/v0.1.0-alpha-risk-review.md`
