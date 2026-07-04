# ADR 0106 — Adopt diagnosticar as First Useful Runtime Command

## Status

Accepted

## Contexto

Phase 4 entregou uma CLI básica com estado local e Modo Liga/Desliga.

## Decisão

O primeiro comando funcional de valor real do Resolve Aí será `resolve-ai diagnosticar`.

## Consequências positivas

- Projetos existentes ganham entendimento antes de alteração.
- O runtime passa a gerar contexto útil para humanos e agentes.

## Consequências negativas

- O diagnóstico ainda é heurístico e não substitui análise profunda.

## Reversal plan

Se necessário, manter o comando e evoluir o motor de diagnóstico em fases futuras.
