# ADR 0272 — Stop Publication on Package Name Conflict

## Status

Accepted

## Context

Se o nome `resolve-ai` já pertencesse a outra conta no npm, um agente executando a publicação poderia improvisar um renome (por exemplo `resolve-ai-cli`, escopo pessoal), quebrando documentação, ADRs e identidade pública do projeto. O mantenedor proibiu explicitamente renome automático.

## Decision

Se `npm view resolve-ai` indicar que o pacote existe e o mantenedor não tem permissão, ou se a versão `0.1.0-alpha.0` já existir, a publicação **para imediatamente**: sem renome automático, sem troca de versão, sem tag, sem GitHub Release. O blocker é registrado no publication-execution-report e a escolha de novo nome (se necessária) é decisão humana em Phase 19B.

Verificação executada em 2026-07-08: `npm view resolve-ai` retornou **E404 — nome disponível**. Nenhum conflito.

## Consequences

### Positive

- Identidade do pacote permanece decisão humana.
- Evita colisão com pacote de terceiros e confusão de marca.

### Negative

- Um conflito real pausaria o lançamento até decisão do mantenedor.

### Neutral

- A verificação de nome passa a ser gate permanente pré-publish.

## Alternatives Considered

- Renome automático com sufixo: rejeitado pelo mantenedor de forma explícita.
- Escopo `@luucassouza/resolve-ai` como fallback automático: rejeitado; mesma razão.

## Follow-up

Nenhum — o nome estava disponível nesta execução.
