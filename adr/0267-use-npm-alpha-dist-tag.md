# ADR 0267 — Use npm Alpha Dist-Tag

## Status

Accepted

## Context

`npm publish` sem `--tag` publica como `latest`, e o primeiro publish de um pacote define `latest` por padrão. Um alpha não validado não pode ser o que `npm install resolve-ai` entrega.

## Decision

Executar a publicação da Phase 19 exclusivamente com `npm publish --tag alpha`, confirmando depois com `npm dist-tag ls resolve-ai`. Instalação pública documentada como `npm install -g resolve-ai@alpha` / `npx resolve-ai@alpha`.

## Consequences

### Positive

- Usuários só recebem o alpha se optarem explicitamente por ele.

### Negative

- Instruções de instalação exigem o sufixo `@alpha`.

### Neutral

- Nota: no primeiro publish de um pacote, o npm pode ainda apontar `latest` para a única versão existente; se isso ocorrer, ajustar com `npm dist-tag` conforme cenário F do pt286.

## Alternatives Considered

- Publicar como `latest`: rejeitado (ADR-0258).

## Follow-up

Verificar dist-tags imediatamente após o publish e registrar no report.
