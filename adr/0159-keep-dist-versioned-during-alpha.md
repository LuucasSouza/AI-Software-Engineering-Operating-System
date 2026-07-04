# ADR 0159 — Keep dist Versioned During Alpha

## Status

Accepted

## Contexto

O projeto ainda está em alpha local e precisa facilitar execução sem pacote publicado.

## Decisão

Manter `dist/` versionado durante alpha, exigindo que seja gerado por build.

## Alternativas consideradas

- Remover `dist/` do Git.
- Manter `dist/` editado manualmente.
- Publicar pacote imediatamente.

## Consequências

Uso local fica simples, mas releases precisam garantir que `src/` e `dist/` estejam sincronizados.

## Plano de reversão

Remover `dist/` do versionamento após pipeline de publicação confiável.
