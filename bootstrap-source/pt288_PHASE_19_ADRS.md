# pt288 — Phase 19 ADRs

Criar ADRs 0266 a 0275.

## ADR 0266 — Publish v0.1.0-alpha after maintainer approval

Decisão:
Publicar Resolve Aí como public alpha após aprovação explícita do mantenedor.

Consequência:
A publicação é pública, mas não stable.

## ADR 0267 — Use npm alpha dist-tag

Decisão:
Usar `npm publish --tag alpha`.

Consequência:
Evita colocar release alpha como `latest`.

## ADR 0268 — Create Git tag only after npm success

Decisão:
A tag `v0.1.0-alpha` só será criada após sucesso do npm publish.

Consequência:
A tag representa artefato publicado.

## ADR 0269 — Mark GitHub Release as pre-release

Decisão:
Criar GitHub Release marcada como pre-release.

Consequência:
Usuários enxergam que não é produção/stable.

## ADR 0270 — Keep known limitations visible after publication

Decisão:
Known limitations continuam no README/release.

Consequência:
Transparência acima de marketing.

## ADR 0271 — Manual feedback remains default

Decisão:
Não adicionar telemetria pós-release.

Consequência:
Feedback via arquivos/manual/GitHub Issues.

## ADR 0272 — Stop publication on package name conflict

Decisão:
Se `resolve-ai` estiver indisponível no npm, parar.

Consequência:
Não renomear automaticamente.

## ADR 0273 — Do not publish from GitHub Actions yet

Decisão:
Publicação manual nesta release.

Consequência:
Menos automação; mais controle.

## ADR 0274 — Do not declare stable without human validation

Decisão:
Mesmo publicado, score acima de 90 só após validação humana real.

Consequência:
Mantém confiança.

## ADR 0275 — Prefer patch alpha over unpublish

Decisão:
Corrigir problemas com patch/deprecate quando possível.

Consequência:
Evita dependência de unpublish como rollback.
