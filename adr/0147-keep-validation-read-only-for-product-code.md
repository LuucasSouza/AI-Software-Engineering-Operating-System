# ADR 0147 — Keep Validation Read-Only for Product Code

## Status

Accepted

## Contexto

Validação deve revisar o projeto sem modificar o produto analisado.

## Problema

Um comando de validação que altera código criaria risco e confundiria revisão com execução.

## Opções consideradas

- Permitir correções automáticas.
- Permitir apenas docs/state do Resolve Aí.
- Bloquear qualquer escrita.

## Decisão

Permitir escrita apenas em `docs/resolve-ai/25` a `29` e `.resolve-ai/state.json`.

## Consequências positivas

- Mantém validação segura.
- Preserva código de produto.
- Facilita auditoria.

## Consequências negativas

- Correções precisam ser feitas manualmente ou por fase futura.

## Critérios de reversão

Revisar após diff preview, sandbox e aprovação explícita.

## Relação com outras ADRs

Relaciona-se às ADRs 0137 e 0143.
