# ADR 0161 — Adopt Resolve-Ai Remote as Canonical Repository

## Status

Accepted

## Contexto

O GitHub moveu o repositório para `LuucasSouza/Resolve-Ai`.

## Decisão

Adotar `https://github.com/LuucasSouza/Resolve-Ai.git` como remote canônico.

## Alternativas consideradas

- Manter remote antigo.
- Criar novo repositório separado.
- Usar apenas redirecionamento do GitHub.

## Consequências

Documentação, clone e push passam a apontar para o nome público correto.

## Plano de reversão

Atualizar novamente se o repositório for renomeado.
