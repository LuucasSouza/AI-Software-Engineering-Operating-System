# ADR 0152 — Preserve Human Approval Before Commit

## Status

Accepted

## Contexto

O Resolve Aí ainda não faz commit ou deploy.

## Problema

Validar automaticamente como pronto para commit poderia remover a decisão humana.

## Opções consideradas

- Fazer commit automático.
- Aprovar commit automaticamente.
- Recomendar revisão humana antes de commit.

## Decisão

Preservar aprovação humana antes de commit.

## Consequências positivas

- Mantém controle humano.
- Evita automação prematura.
- Reforça segurança do public alpha.

## Consequências negativas

- O usuário precisa executar Git manualmente.

## Critérios de reversão

Revisar após políticas explícitas de commit assistido.

## Relação com outras ADRs

Relaciona-se às ADRs 0138 e 0143.
