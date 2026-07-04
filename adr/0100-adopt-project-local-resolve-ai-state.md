# ADR 0100 — Adopt Project Local Resolve Aí State

## Status

Accepted

## Contexto

O Resolve Aí precisa funcionar dentro de projetos reais sem serviço externo.

## Problema

Estado runtime não deve depender de cloud, conta, banco ou telemetria.

## Alternativas consideradas

- Estado remoto.
- Estado embutido em documentação humana.
- Estado local em `.resolve-ai/`.

## Decisão

Adotar `.resolve-ai/config.json` e `.resolve-ai/state.json` como estado local mínimo.

## Consequências positivas

- Funciona offline.
- Não exige APIs externas.
- Mantém separação entre runtime e documentação humana.

## Consequências negativas

- Projetos precisarão decidir política de versionamento desses arquivos.

## Reversal plan

Adicionar adapters de armazenamento futuros mantendo compatibilidade com o formato local.
