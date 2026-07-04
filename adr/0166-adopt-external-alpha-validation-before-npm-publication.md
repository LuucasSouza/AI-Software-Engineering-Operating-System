# ADR 0166 — Adopt External Alpha Validation Before npm Publication

## Status

Accepted

## Contexto

Resolve Ai tem CLI local funcional, mas testes automatizados nao provam utilidade para usuarios reais.

## Decisão

Exigir validacao alpha externa ou controlada antes de qualquer publicacao npm.

## Alternativas consideradas

- Publicar imediatamente no npm.
- Continuar apenas com validacao interna.
- Fazer somente release notes.

## Consequências

O release passa a depender de evidencia de uso, clareza e seguranca percebida.

## Plano de reversão

Uma decisao futura pode substituir este gate por processo de release mais maduro.
