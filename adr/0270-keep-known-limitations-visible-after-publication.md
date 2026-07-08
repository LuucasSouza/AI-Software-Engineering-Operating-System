# ADR 0270 — Keep Known Limitations Visible After Publication

## Status

Accepted

## Context

Após a publicação, a tentação natural é suavizar limitações para melhorar adoção. Isso violaria a política de honestidade (pt272, ADR-0259, ADR-0263) justamente no momento de maior exposição.

## Decision

As known limitations permanecem visíveis após a publicação em: README do repositório, release notes, GitHub Release e `docs/release/v0.1.0-alpha-rc/known-limitations.md`. Nenhum material público pode omitir que a validação humana real ainda é limitada e que a versão não é stable.

## Consequences

### Positive

- Expectativas corretas; feedback de melhor qualidade; confiança de longo prazo.

### Negative

- Possível adoção inicial menor.

### Neutral

- Limitações só saem da lista com evidência real registrada.

## Alternatives Considered

- Resumir limitações após o release: rejeitado; transparência acima de marketing.

## Follow-up

Revisar a lista após a primeira rodada de feedback público.
