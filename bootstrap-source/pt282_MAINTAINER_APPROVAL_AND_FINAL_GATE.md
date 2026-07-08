# pt282 — Maintainer Approval and Final Gate

## Objetivo

Antes de publicar, o mantenedor precisa registrar que decidiu assumir os riscos conhecidos do alpha.

## Arquivo obrigatório

Atualizar:

```text
docs/release/v0.1.0-alpha-rc/maintainer-approval-gate.md
```

## Estado desejado

O arquivo deve declarar claramente:

- O mantenedor revisou o package audit.
- O mantenedor revisou known limitations.
- O mantenedor revisou rollback plan.
- O mantenedor entende que não houve validação humana real suficiente.
- O mantenedor aprova publicação alpha, não stable.
- O mantenedor aprova uso de `npm publish --tag alpha`.
- O mantenedor aprova Git tag `v0.1.0-alpha`.
- O mantenedor aprova GitHub Release como pre-release.

## Não permitir

Não marcar o gate automaticamente sem registrar a decisão do mantenedor.

Como o mantenedor já disse “Quero apertar o botão”, a Phase 19 pode registrar essa decisão textual no arquivo, mas deve manter a classificação alpha.

## Template recomendado

```markdown
# Maintainer Approval Gate — v0.1.0-alpha

Status: APPROVED FOR PUBLIC ALPHA PUBLICATION

Decision date: YYYY-MM-DD
Maintainer: Lucas Souza

I approve publishing Resolve Aí v0.1.0-alpha as a public alpha release.

I understand and accept:
- This is not stable.
- This is not production-ready.
- Non-Technical Builder human validation remains pending.
- Professional Engineer dedicated validation remains limited.
- The package must be published with the `alpha` dist-tag, not `latest`.
- The GitHub release must be marked as pre-release.
- Known limitations must remain visible.
- Rollback plan must remain documented.

Approved action:
- npm publish with alpha dist-tag.
- create git tag v0.1.0-alpha after npm success.
- create GitHub pre-release after tag success.
```
