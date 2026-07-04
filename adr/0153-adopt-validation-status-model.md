# ADR 0153 — Adopt Validation Status Model

## Status

Accepted

## Contexto

Validação precisa comunicar incerteza com clareza.

## Problema

Status binário aprovado/reprovado seria otimista demais para validação heurística.

## Opções consideradas

- Aprovado/reprovado.
- Modelo de quatro status.
- Sem status estruturado.

## Decisão

Adotar `pendente`, `parcial`, `aprovada-com-ressalvas` e `bloqueada`.

## Consequências positivas

- Expressa incerteza.
- Evita falso aprovado.
- Facilita status e próximos passos.

## Consequências negativas

- Exige educação de usuário sobre cada status.

## Critérios de reversão

Revisar se fases futuras adicionarem evidências automáticas fortes.

## Relação com outras ADRs

Relaciona-se às ADRs 0141 e 0154.
