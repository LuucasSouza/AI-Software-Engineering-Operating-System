# ADR 0114 — Adopt Local State Updates After Diagnostics

## Status

Accepted

## Contexto

O comando `status` precisa resumir a última leitura útil do projeto.

## Decisão

`diagnosticar` atualiza `.resolve-ai/state.json` com resumo do diagnóstico.

## Consequências positivas

- Permite retomada rápida.
- Base para futuros comandos `planejar` e `continuar`.

## Consequências negativas

- O estado local precisa de política clara de versionamento.

## Reversal plan

Versionar schema e migrar campos de estado quando necessário.
