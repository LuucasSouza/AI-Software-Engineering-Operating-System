# ADR 0099 — Adopt Modo Liga/Desliga as Runtime Control

## Status

Accepted

## Contexto

Phase 3 definiu Modo Liga/Desliga como controle público de ativação.

## Problema

A CLI precisava de um mecanismo simples para indicar se o Resolve Aí deve acompanhar o projeto ou economizar contexto.

## Alternativas consideradas

- Estado sempre ativo.
- Flags por comando.
- Modo Liga/Desliga persistente.

## Decisão

Implementar `ligar` e `desligar` como comandos que persistem `active` em `.resolve-ai/state.json`.

## Consequências positivas

- Estado claro e retomável.
- Base para economia de tokens futura.
- Comportamento fácil de explicar.

## Consequências negativas

- O MVP ainda não possui hooks ou agentes que reajam automaticamente ao estado.

## Reversal plan

Se necessário, evoluir para estados adicionais sem quebrar `active: true|false`.
