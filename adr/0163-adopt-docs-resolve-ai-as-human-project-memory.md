# ADR 0163 — Adopt docs/resolve-ai as Human Project Memory

## Status

Accepted

## Contexto

A CLI gera documentação humana em `docs/resolve-ai/`.

## Decisão

Tratar `docs/resolve-ai/` como memória documental versionável quando apropriado.

## Alternativas consideradas

- Ignorar sempre.
- Salvar apenas em `.resolve-ai/`.
- Gerar apenas saída de terminal.

## Consequências

Equipes podem manter rastreabilidade de diagnóstico, planejamento, execução assistida e validação.

## Plano de reversão

Adicionar configuração futura para saída temporária quando necessário.
