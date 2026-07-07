# ADR 0252: Explain Low Confidence Instead of Only Displaying It

## Status

Accepted

## Date

2026-07-07

## Context

`Confiança: baixa` shown without context read like a failure for beginners, both in new-project diagnosis and in validation without Git.

## Decision

Whenever low confidence is displayed, include a short reason and, when relevant, the suggested action: new project → "poucos arquivos para analisar, isso é normal"; validation without Git → "sem Git não consigo comparar mudanças com precisão".

## Consequences

- Reduces anxiety and support questions.
- Output grows slightly, but each extra line carries explanatory value.

## Alternatives Considered

- Hide low confidence: rejected; honesty about heuristic limits is a core product value.
