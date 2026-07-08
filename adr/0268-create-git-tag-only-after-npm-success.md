# ADR 0268 — Create Git Tag Only After npm Success

## Status

Accepted

## Context

Uma tag Git de release deve representar um artefato realmente publicado. Criar a tag antes do publish poderia deixar o repositório apontando para uma "release" que nunca aconteceu se o npm falhar.

## Decision

A tag `v0.1.0-alpha` só é criada e enviada (`git tag -a` + `git push origin v0.1.0-alpha`) depois que `npm publish --tag alpha` e o teste de instalação passarem. Se a tag já existir local ou remotamente, parar e verificar — nunca sobrescrever tag pública.

## Consequences

### Positive

- Tag sempre corresponde a artefato publicado e instalável.

### Negative

- Se o npm passar e a tag falhar, há estado intermediário (cenário C do pt286) a resolver manualmente.

### Neutral

- O GitHub Release depende da tag, criando cadeia npm → tag → release.

## Alternatives Considered

- Tag antes do publish: rejeitada; risco de tag órfã.

## Follow-up

Registrar resultado da tag no publication-execution-report.
