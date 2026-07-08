---
title: "Publication Execution Report — v0.1.0-alpha"
status: "Complete — RELEASED AS PUBLIC ALPHA"
version: "0.1.0-alpha.0"
phase: "Phase 19"
owner: "Resolve Aí Maintainers"
last_updated: "2026-07-08"
---

# Publication Execution Report — v0.1.0-alpha

## Summary

Status:
- [x] Published
- [ ] Blocked
- [ ] Partially published

Decision:
- [x] RELEASED AS PUBLIC ALPHA
- [ ] BLOCKED BEFORE NPM
- [ ] BLOCKED AFTER NPM
- [ ] INCIDENT / ROLLBACK REQUIRED

## Maintainer approval

Gate file: `docs/release/v0.1.0-alpha-rc/maintainer-approval-gate.md`

Status:
- [x] Approved (2026-07-08, Lucas Souza — "Quero apertar o botão"; alpha apenas, nunca stable)
- [ ] Not approved

## Pre-publication checks (2026-07-08)

- [x] git status clean (somente pt281–pt290 novos em `bootstrap-source/`, esperados)
- [x] build passed (exit 0)
- [x] tests passed (87/87)
- [x] smoke passed (exit 0)
- [x] git diff --check passed
- [x] npm pack dry-run passed (37 arquivos, 38.5 kB, shasum `38f3306ef39617f8ed013b811423315e26a0a9f9`)
- [x] no sensitive files in tarball
- [x] npm login confirmed (`npm whoami` → `luutsouza`; primeiro `whoami` falhou com ENEEDAUTH e a execução **parou** até o mantenedor logar)
- [x] npm ping passed (PONG)
- [x] package name checked (`npm view resolve-ai` → E404: disponível; sem conflito, sem renome)
- [x] package version checked (`0.1.0-alpha.0` inexistente no registro)

## npm publication

Command (executado pelo mantenedor no terminal, com autenticação 2FA via navegador):

```bash
npm publish ./packages/resolve-ai-cli --tag alpha
```

Result:

```text
+ resolve-ai@0.1.0-alpha.0
Publicado em https://registry.npmjs.org/ com tag alpha.
Tarball publicado idêntico ao auditado: 37 arquivos, 38.5 kB,
shasum 38f3306ef39617f8ed013b811423315e26a0a9f9.
Aviso do npm: repository.url normalizado para
git+https://github.com/LuucasSouza/Resolve-Ai.git (cosmético; corrigir com
npm pkg fix em fase futura).
```

npm package URL:

```text
https://www.npmjs.com/package/resolve-ai
```

Dist-tags (`npm dist-tag ls resolve-ai`):

```text
alpha: 0.1.0-alpha.0
latest: 0.1.0-alpha.0
```

**Ressalva conhecida — `latest`:** o registro npm exige que todo pacote tenha um dist-tag `latest`; no primeiro publish ele aponta para a única versão existente, mesmo com `--tag alpha`. Não é removível (`npm dist-tag rm` de `latest` não é permitido pelo registro). Consequência: `npm install resolve-ai` sem sufixo instala o alpha. Mitigação: toda a documentação instrui `resolve-ai@alpha`; o `latest` será gerenciado quando houver versão futura. Cenário F do pt286 avaliado: nenhuma correção possível ou necessária além de documentação.

## Post-publication install test

Executado em pastas temporárias fora do repo (2026-07-08):

| Teste | Resultado |
|---|---|
| `npm install -g resolve-ai@alpha` | ✅ exit 0 ("changed 1 package") |
| `resolve-ai ajuda` (global) | ✅ exit 0, 34 linhas, ajuda completa em português |
| `npx resolve-ai@alpha ajuda` | ✅ exit 0 (download do registro + execução) |
| Mini-fluxo `comecar` → `ligar` → `status` em pasta limpa | ✅ exit 0 nos três; status mostra "Resolve Aí está ligado neste projeto" |

## Git tag

Tag: `v0.1.0-alpha` (criada somente após npm publish + install test, conforme ADR-0268)

```bash
git tag -a v0.1.0-alpha -m "v0.1.0-alpha"
git push origin v0.1.0-alpha
```

Result:

```text
* [new tag] v0.1.0-alpha -> v0.1.0-alpha
Confirmado no remoto: refs/tags/v0.1.0-alpha (affbf5bb4db3e6a24c127a04595600bac7a03ec8)
```

## GitHub Release

Release type:
- [x] Pre-release (`isPrerelease: true`, `--latest=false`)
- [ ] Stable release

Comando:

```bash
gh release create v0.1.0-alpha --title "Resolve Aí v0.1.0-alpha" \
  --notes-file docs/release/v0.1.0-alpha-rc/release-notes.md --prerelease --latest=false
```

URL:

```text
https://github.com/LuucasSouza/Resolve-Ai/releases/tag/v0.1.0-alpha
```

## Documentation updates

- [x] README updated (instalação pública alpha)
- [x] CHANGELOG updated
- [x] ROADMAP updated
- [x] release docs updated (decision, distribution, RC README, este report)
- [x] known limitations visible
- [x] rollback plan visible

## Final score

Previous:

```text
90/100 — RELEASE CANDIDATE READY
```

New:

```text
92/100 — PUBLIC ALPHA PUBLISHED, not stable
```

## Final decision

```text
RELEASED AS PUBLIC ALPHA.
npm publish (--tag alpha) + git tag + GitHub pre-release + install tests: todos passaram.
Não é stable. Não é production-ready. Validação humana real continua pendente
e limita o score a 92/100 (ADR-0274).
```

## Log de execução

| Data/hora (UTC) | Comando | Resultado |
|---|---|---|
| 2026-07-08 03:24 | `npm whoami` | ❌ ENEEDAUTH — execução parada |
| 2026-07-08 03:24 | `npm ping` | ✅ PONG 268ms |
| 2026-07-08 03:24 | `npm view resolve-ai` | ✅ E404 — nome disponível |
| 2026-07-08 03:35 | `npm whoami` (após login parcial) | ❌ ENEEDAUTH — parado novamente |
| 2026-07-08 03:37 | `npm publish --tag alpha` (não interativo) | ❌ EOTP — 2FA exigido, parado |
| 2026-07-08 03:38 | `npm whoami` | ✅ luutsouza |
| 2026-07-08 03:39 | `npm publish ./packages/resolve-ai-cli --tag alpha` (mantenedor, 2FA navegador) | ✅ + resolve-ai@0.1.0-alpha.0 |
| 2026-07-08 03:40 | `npm dist-tag ls resolve-ai` | ✅ alpha: 0.1.0-alpha.0 (latest idem — mecânica do npm) |
| 2026-07-08 03:41 | install test global + npx + mini-fluxo | ✅ todos exit 0 |
| 2026-07-08 03:42 | `git tag -a v0.1.0-alpha` + push | ✅ tag no remoto |
| 2026-07-08 03:43 | `gh release create ... --prerelease --latest=false` | ✅ isPrerelease: true |

## Follow-up

- [ ] Collect first public alpha feedback
- [ ] Open Phase 20 backlog
- [ ] Monitor npm/GitHub issues manually
- [ ] `npm pkg fix` (normalização cosmética de repository.url) em fase futura
