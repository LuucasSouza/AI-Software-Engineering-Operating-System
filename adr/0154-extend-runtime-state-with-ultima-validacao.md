# ADR 0154 — Extend Runtime State with `ultimaValidacao`

## Status

Accepted

## Contexto

O runtime já registra diagnóstico, planejamento, preparo e execução assistida.

## Problema

Sem estado de validação, `status` não consegue mostrar o último resultado pós-execução.

## Opções consideradas

- Armazenar apenas nos docs.
- Adicionar `ultimaValidacao`.
- Criar banco local separado.

## Decisão

Adicionar `ultimaValidacao` em `.resolve-ai/state.json`.

## Consequências positivas

- `status` mostra validação resumida.
- Mantém histórico operacional mínimo.
- Evita ler todos os docs para resumo.

## Consequências negativas

- O state cresce com novas fases.

## Critérios de reversão

Revisar se houver modelo de eventos local.

## Relação com outras ADRs

Relaciona-se às ADRs 0132 e 0145.
