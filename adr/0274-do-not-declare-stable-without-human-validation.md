# ADR 0274 — Do Not Declare Stable Without Human Validation

## Status

Accepted

## Context

Com o pacote publicado, tag criada e release no ar, a percepção externa pode ser de projeto "lançado". Sem uma regra explícita, o score e a linguagem pública tenderiam a subir junto com a visibilidade.

## Decision

Mesmo publicado, o Resolve Aí não pode ser declarado stable, production-ready ou "validado" sem validação humana real registrada. O score máximo pós-publicação é **92/100 — PUBLIC ALPHA PUBLISHED, not stable**. Subir além disso exige sessões reais documentadas de Non-Technical Builder e Professional Engineer dedicado.

## Consequences

### Positive

- Publicação não é confundida com maturidade.
- O gargalo real (validação humana) continua explícito no score.

### Negative

- O projeto permanece formalmente alpha mesmo com usuários públicos.

### Neutral

- O próprio alpha público é o mecanismo esperado para obter a validação que destrava o score.

## Alternatives Considered

- Deixar o score refletir apenas prontidão técnica: rejeitado; repetiria o erro que as fases 13–17B evitaram.

## Follow-up

Recalcular o score após as primeiras sessões reais de feedback público.
