# ADR 0158 — Adopt Smoke Tests for CLI Usability

## Status

Accepted

## Contexto

Testes automatizados cobrem comportamento, mas não validam o fluxo local como usuário.

## Decisão

Adicionar `npm run smoke --prefix packages/resolve-ai-cli`.

## Alternativas consideradas

- Usar apenas testes unitários.
- Fazer smoke manual.
- Rodar smoke em projeto real.

## Consequências

O fluxo mínimo é validado em diretórios temporários sem poluir o repositório.

## Plano de reversão

Trocar o script por suíte e2e dedicada quando o pacote crescer.
