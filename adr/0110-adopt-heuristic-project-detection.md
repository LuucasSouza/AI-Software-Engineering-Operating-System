# ADR 0110 — Adopt Heuristic Project Detection

## Status

Accepted

## Contexto

O MVP não deve chamar IA, APIs externas ou executar análise profunda de código.

## Decisão

Usar heurísticas locais para detectar tipo de projeto, stack e modo recomendado.

## Consequências positivas

- Funciona offline.
- É transparente e testável.

## Consequências negativas

- Pode errar ou ter baixa confiança em projetos incomuns.

## Reversal plan

Adicionar mecanismos avançados de análise em fases futuras, mantendo fallback heurístico.
