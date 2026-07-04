# ADR 0162 — Adopt Runtime State Policy

## Status

Accepted

## Contexto

`.resolve-ai/` contém estado local criado pela CLI.

## Decisão

Tratar `.resolve-ai/state.json`, cache, tmp e sessão como estado local ignorado por padrão.

## Alternativas consideradas

- Versionar todo `.resolve-ai/`.
- Ignorar todo `.resolve-ai/`.
- Versionar apenas docs.

## Consequências

Reduz ruído e risco de vazar estado local.

## Plano de reversão

Revisar quando schema de configuração estabilizar.
