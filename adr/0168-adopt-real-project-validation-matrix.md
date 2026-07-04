# ADR 0168 — Adopt Real Project Validation Matrix

## Status

Accepted

## Contexto

A CLI precisa funcionar em projetos novos, em andamento e ambigueos.

## Decisão

Adotar matriz de validacao com diretorio vazio, Node, React/Vite, projeto em andamento e legado.

## Alternativas consideradas

- Validar apenas um projeto demo.
- Validar somente repositorios maduros.
- Validar apenas cenarios manuais.

## Consequências

A readiness passa a refletir diversidade minima de contexto.

## Plano de reversão

A matriz pode ser ampliada ou particionada por sistema operacional em fase futura.
