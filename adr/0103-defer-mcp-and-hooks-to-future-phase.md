# ADR 0103 — Defer MCP and Hooks to Future Phase

## Status

Accepted

## Contexto

Phase 3 mapeou MCP, hooks e adapters como evolução futura.

## Problema

Implementar integrações avançadas antes do CLI MVP aumentaria complexidade e superfície de risco.

## Alternativas consideradas

- Implementar MCP junto da CLI.
- Implementar hooks automáticos.
- Adiar MCP e hooks.

## Decisão

Adiar MCP e hooks para fases futuras, mantendo a Phase 4 focada na CLI local.

## Consequências positivas

- MVP menor e verificável.
- Sem execução automática oculta.
- Menor risco de interferência em projetos.

## Consequências negativas

- Agentes ainda não consomem estado automaticamente.

## Reversal plan

Introduzir MCP/hooks após validação do CLI MVP e com ADR própria.
