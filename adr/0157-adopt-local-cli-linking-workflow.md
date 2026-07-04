# ADR 0157 — Adopt Local CLI Linking Workflow

## Status

Accepted

## Contexto

O pacote ainda não deve ser publicado no npm.

## Decisão

Adotar build + `npm link --prefix packages/resolve-ai-cli` como fluxo oficial de uso local.

## Alternativas consideradas

- Publicar npm imediatamente.
- Rodar sempre via `node dist/index.js`.
- Criar instalador próprio.

## Consequências

Usuários alpha conseguem testar `resolve-ai` em projetos externos sem publicação pública.

## Plano de reversão

Substituir por instalação npm quando a publicação for aprovada.
