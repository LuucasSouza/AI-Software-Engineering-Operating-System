# pt290 — Phase 19 Execution Prompt and Handoff

## Prompt para Codex

Cole este prompt no Codex dentro do repositório Resolve-Ai.

```text
Leia integralmente todos os arquivos Markdown numerados de pt281 a pt290 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, packages/resolve-ai-cli/*, docs/release/v0.1.0-alpha-rc/*, docs/release/*, docs/sprints/phase-18-* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 19 — Publication Execution Gate.

Contexto:
O mantenedor decidiu: "Quero apertar o botão".
A Phase 18 está em RELEASE CANDIDATE READY — 90/100.
A Phase 18.1 já protegeu .resolve-ai/, docs/resolve-ai/, feedback/ e workspaces locais no .gitignore.
Esta fase pode executar publicação real, mas somente como public alpha, nunca stable.

Objetivo:
Publicar Resolve Aí v0.1.0-alpha no npm com dist-tag alpha, criar tag Git v0.1.0-alpha, criar GitHub Release como pre-release e atualizar documentação pós-publicação.

Antes de publicar:
1. Preservar pt281 a pt290 em bootstrap-source/.
2. Atualizar docs/release/v0.1.0-alpha-rc/maintainer-approval-gate.md com aprovação explícita do mantenedor para public alpha.
3. Criar docs/release/v0.1.0-alpha-rc/publication-execution-report.md usando o template da Phase 19.
4. Criar ADRs 0266 a 0275.
5. Atualizar adr/README.md e docs/architecture/decision-log.md.
6. Rodar:
   - git status --short
   - git log -1 --oneline
   - npm run build --prefix packages/resolve-ai-cli
   - npm test --prefix packages/resolve-ai-cli
   - npm run smoke --prefix packages/resolve-ai-cli
   - git diff --check
7. Entrar em packages/resolve-ai-cli e rodar:
   - npm pack --dry-run
   - npm whoami
   - npm ping
   - npm view resolve-ai name version dist-tags --json

Bloqueios:
- Se npm whoami falhar, parar.
- Se npm ping falhar, parar.
- Se npm view indicar que resolve-ai existe e o mantenedor não tem permissão, parar.
- Se a versão 0.1.0-alpha.0 já existir, parar.
- Se npm pack incluir .resolve-ai/, docs/resolve-ai/, feedback/, .env ou segredo, parar.
- Se testes falharem, parar.
- Se working tree tiver alterações inesperadas antes do publish, parar e pedir revisão.

Publicação npm:
Se todos os gates passarem, dentro de packages/resolve-ai-cli execute:

npm publish --tag alpha

Não use npm publish sem --tag.
Não publique como latest.
Não publique stable.
Não altere o nome do pacote automaticamente.

Após npm publish:
1. Rodar:
   - npm view resolve-ai@0.1.0-alpha.0 version --json
   - npm dist-tag ls resolve-ai
2. Criar pasta temporária fora do repo e testar:
   - npm install -g resolve-ai@alpha
   - resolve-ai ajuda
   - npx resolve-ai@alpha ajuda
3. Registrar resultados no publication-execution-report.md.

Git tag:
Somente se npm publish e install test passarem:
1. Criar tag:
   git tag -a v0.1.0-alpha -m "v0.1.0-alpha"
2. Enviar tag:
   git push origin v0.1.0-alpha

GitHub Release:
Somente se tag for enviada:
1. Criar GitHub Release como pre-release usando GitHub CLI se disponível:
   gh release create v0.1.0-alpha --title "Resolve Aí v0.1.0-alpha" --notes-file docs/release/v0.1.0-alpha-rc/release-notes.md --prerelease
2. Se gh não estiver disponível/autenticado, preparar instruções manuais e marcar como pendente no report.
3. Não marcar como stable.
4. Não marcar como latest release se houver opção.

Depois da publicação:
1. Atualizar README.md com instalação pública alpha:
   npm install -g resolve-ai@alpha
   npx resolve-ai@alpha ajuda
2. Atualizar CHANGELOG.md.
3. Atualizar ROADMAP.md.
4. Atualizar docs/release/README.md.
5. Atualizar docs/release/v0.1.0-alpha-rc/npm-publication-decision.md.
6. Atualizar docs/release/v0.1.0-alpha-rc/distribution-checklist.md.
7. Atualizar docs/release/v0.1.0-alpha-rc/publication-execution-report.md.
8. Criar docs/sprints/phase-19-publication-execution-handoff.md.
9. Criar docs/sprints/phase-19-publication-execution-validation-report.md.
10. Criar docs/sprints/phase-19-publication-execution-retrospective.md.
11. Criar docs/release/v0.1.0-alpha-phase-19-readiness-scorecard.md.
12. Criar docs/release/v0.1.0-alpha-phase-19-go-no-go-decision.md.

Commit pós-publicação:
Se npm publish foi bem-sucedido e docs foram atualizados:
- git add arquivos de documentação/ADRs/bootstrap-source
- não adicionar .resolve-ai/ nem docs/resolve-ai/
- git commit -m "chore: publish v0.1.0 alpha"
- git push origin main

Score:
Partir de 90/100 — RELEASE CANDIDATE READY.
Se publicar npm + tag + GitHub pre-release + install tests passarem:
91/100 ou 92/100 — PUBLIC ALPHA PUBLISHED, not stable.
Não passar de 92 sem validação humana real.

Ao final, reporte:
- npm publication status;
- package URL;
- dist-tags;
- install test result;
- git tag status;
- GitHub release status;
- docs updated;
- ADRs created;
- commit pós-publicação;
- push status;
- score final;
- blockers/remanescentes;
- próxima ação recomendada.

Não publique se qualquer gate falhar.
Execute.
```

## Observação

Esta é a primeira fase em que `npm publish` está autorizado, mas apenas sob gates explícitos e com `--tag alpha`.
