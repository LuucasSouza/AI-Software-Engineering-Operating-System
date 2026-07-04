# ADR 0105 — Adopt CLI MVP Before Runtime Automation

## Status

Accepted

## Contexto

Resolve Aí já possui framework documental extenso e runtime especificada.

## Problema

Automação ampla antes de validar a experiência básica poderia gerar complexidade prematura.

## Alternativas consideradas

- Implementar automação runtime completa.
- Implementar CLI MVP primeiro.
- Permanecer apenas documental.

## Decisão

Implementar o CLI MVP antes de diagnóstico guiado, hooks, MCP, adapters ou automações avançadas.

## Consequências positivas

- Cria primeiro produto executável.
- Permite feedback real rápido.
- Mantém escopo controlado.

## Consequências negativas

- O MVP ainda não entrega toda a promessa do runtime.

## Reversal plan

Se o MVP não validar valor, retornar ao framework documental e redesenhar fluxo de entrada antes de ampliar automação.
