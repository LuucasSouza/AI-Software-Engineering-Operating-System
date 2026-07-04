# ADR 0098 — Adopt Portuguese-First CLI Commands

## Status

Accepted

## Contexto

Resolve Aí é a experiência pública oficial do projeto e prioriza usuários brasileiros.

## Problema

Comandos em inglês criariam distância entre promessa pública e uso real.

## Alternativas consideradas

- Comandos apenas em inglês.
- Comandos bilíngues desde o MVP.
- Comandos públicos em português com alias pontual.

## Decisão

Adotar comandos públicos em português: `ajuda`, `começar`, `comecar`, `ligar`, `desligar` e `status`.

## Consequências positivas

- Mantém coerência com a promessa pública.
- Reduz barreira para usuários não técnicos.
- Preserva tom brasileiro da experiência.

## Consequências negativas

- Usuários internacionais podem precisar de documentação adicional.
- Acentos em terminal exigem alias sem acento.

## Reversal plan

Adicionar aliases em inglês no futuro sem remover os comandos públicos em português.
