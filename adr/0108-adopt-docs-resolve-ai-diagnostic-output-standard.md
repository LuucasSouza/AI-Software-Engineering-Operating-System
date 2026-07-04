# ADR 0108 — Adopt docs/resolve-ai Diagnostic Output Standard

## Status

Accepted

## Contexto

O runtime precisa gerar documentos previsíveis para humanos e agentes.

## Decisão

Documentos de diagnóstico gerados pelo runtime vivem em `docs/resolve-ai/`.

## Consequências positivas

- Padroniza continuidade de trabalho.
- Mantém separação entre estado runtime e documentação humana.

## Consequências negativas

- Pode coexistir com documentação legada até migração explícita.

## Reversal plan

Criar protocolo de migração versionado se o caminho mudar.
