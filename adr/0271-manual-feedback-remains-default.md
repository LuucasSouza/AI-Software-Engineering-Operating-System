# ADR 0271 — Manual Feedback Remains Default After Publication

## Status

Accepted

## Context

Com o pacote público, o volume potencial de usuários cresce e a tentação de adicionar telemetria para "entender o uso" cresce junto. As ADRs 0184, 0227 e 0261 já definem feedback manual e ausência de telemetria.

## Decision

Nenhuma telemetria é adicionada após a publicação. O feedback do alpha público continua manual: GitHub Issues (templates existentes), `teste/feedback.md` enviado pelo participante e comentários diretos, seguindo `docs/release/v0.1.0-alpha-rc/post-release-feedback-plan.md`.

## Consequences

### Positive

- Promessa pública de privacidade mantida no momento em que mais importa.

### Negative

- Visibilidade limitada sobre uso real; dependência de feedback ativo.

### Neutral

- Monitoramento pós-release é manual: npm downloads públicos e GitHub Issues.

## Alternatives Considered

- Telemetria opt-in no primeiro release público: rejeitada; mudaria a promessa pública junto com o lançamento.

## Follow-up

Reavaliar somente em fase futura com ADR própria e consentimento explícito.
