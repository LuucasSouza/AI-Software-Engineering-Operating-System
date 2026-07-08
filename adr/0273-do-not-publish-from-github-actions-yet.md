# ADR 0273 — Do Not Publish From GitHub Actions Yet

## Status

Accepted

## Context

Automatizar `npm publish` em CI é prática comum, mas exige tokens npm no GitHub, política de gatilhos e proteção contra publicação acidental — infraestrutura que o projeto ainda não tem e que as fases 18/19 proíbem.

## Decision

A publicação do v0.1.0-alpha é manual, executada localmente pelo mantenedor (ou por agente sob sua supervisão direta), com os gates da Phase 19. Nenhum workflow de publicação é criado nesta fase.

## Consequences

### Positive

- Sem token npm armazenado em serviços de terceiros.
- Cada publicação passa pelo gate humano.

### Negative

- Processo de release mais lento e dependente do mantenedor.

### Neutral

- Automação futura exigirá ADR própria com desenho de segurança (provenance, OIDC, environments).

## Alternatives Considered

- Workflow com aprovação manual (environment protection): adiado; complexidade desnecessária para o primeiro alpha.

## Follow-up

Reavaliar automação quando houver cadência regular de releases alpha.
