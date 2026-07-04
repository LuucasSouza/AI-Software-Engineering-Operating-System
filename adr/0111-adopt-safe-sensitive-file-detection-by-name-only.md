# ADR 0111 — Adopt Safe Sensitive-File Detection by Name Only

## Status

Accepted

## Contexto

Projetos reais podem conter secrets, dumps, CSVs e arquivos sensíveis.

## Decisão

Arquivos sensíveis podem ser detectados por nome/caminho, mas conteúdo não deve ser copiado.

## Consequências positivas

- Reduz risco de vazamento.
- Ainda alerta o usuário sobre problemas importantes.

## Consequências negativas

- Pode gerar falsos positivos.

## Reversal plan

Adicionar classificação mais refinada sem ler conteúdo sensível.
