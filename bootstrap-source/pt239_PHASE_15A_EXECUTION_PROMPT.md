# pt239 — Phase 15A Execution Prompt

## Prompt canônico

```text
Leia integralmente todos os arquivos Markdown numerados de pt231 a pt240 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, docs/release/*, docs/alpha-validation/*, docs/community/*, templates/feedback/*, templates/validation/*, packages/resolve-ai-cli/*, docs/sprints/phase-14-* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 15A — Private Alpha Expansion and Fixes.

Objetivo:
Executar ou preparar uma rodada real de alpha privado com usuários dos três perfis oficiais do Resolve Aí, coletar feedback anonimizado, aplicar apenas correções pequenas e seguras de UX/docs/CLI se houver evidência, recalcular readiness score e decidir GO / LIMITED GO / NO-GO para o próximo passo, sem publicar npm e sem criar tag.

Perfis obrigatórios:
1. Non-Technical Builder.
2. Vibe Coder.
3. Professional Engineer.

Escopo obrigatório:
1. Preservar pt231 a pt240 em bootstrap-source/.
2. Criar ou atualizar docs/alpha-validation/private-alpha/.
3. Criar:
   - docs/alpha-validation/private-alpha/participant-recruitment-plan.md
   - docs/alpha-validation/private-alpha/participant-screening-checklist.md
   - docs/alpha-validation/private-alpha/participant-consent-note.md
   - docs/alpha-validation/private-alpha/session-prep-checklist.md
   - docs/alpha-validation/private-alpha/private-alpha-onboarding-guide.md
   - docs/alpha-validation/private-alpha/privacy-and-consent-guidelines.md
   - docs/alpha-validation/private-alpha/safe-project-selection-guide.md
   - docs/alpha-validation/private-alpha/sensitive-data-handling-note.md
4. Criar ou atualizar relatórios de sessão:
   - docs/alpha-validation/private-alpha/session-non-technical-builder-01.md
   - docs/alpha-validation/private-alpha/session-vibe-coder-01.md
   - docs/alpha-validation/private-alpha/session-professional-engineer-01.md
5. Se houver participantes reais disponíveis, registrar feedback real de forma anonimizada.
6. Se não houver participantes reais disponíveis, registrar explicitamente como pendente. Não inventar validação.
7. Criar consolidação:
   - docs/alpha-validation/private-alpha/private-alpha-consolidated-results.md
   - docs/alpha-validation/private-alpha/private-alpha-profile-scorecard.md
8. Criar ou atualizar:
   - docs/community/private-alpha-feedback-triage.md
   - docs/community/private-alpha-fix-backlog.md
   - docs/community/private-alpha-fixes-applied.md
9. Aplicar apenas correções pequenas e justificadas se houver feedback real ou lacuna clara das fases anteriores.
10. Se alterar CLI, atualizar src/, regenerar dist/ via build e criar/ajustar testes.
11. Reforçar copy de segurança do comando resolver/executar se necessário.
12. Revisar package dry-run dentro de packages/resolve-ai-cli.
13. Criar ou atualizar docs de release:
   - docs/release/v0.1.0-alpha-phase-15a-readiness-scorecard.md
   - docs/release/v0.1.0-alpha-phase-15a-go-no-go-decision.md
   - docs/release/v0.1.0-alpha-phase-15a-blockers.md
   - docs/release/v0.1.0-alpha-phase-15a-package-review.md
   - docs/release/v0.1.0-alpha-phase-15a-release-recommendation.md
   - docs/release/v0.1.0-alpha-private-alpha-security-review.md
14. Recalcular readiness score honestamente, partindo do score anterior:
   - 78/100 — LIMITED GO
15. Criar ADRs 0206 a 0215.
16. Atualizar índices:
   - README.md
   - ROADMAP.md
   - CHANGELOG.md
   - adr/README.md
   - docs/README.md
   - docs/alpha-validation/README.md
   - docs/community/README.md
   - docs/release/README.md
   - docs/sprints/README.md
   - templates/README.md
   - packages/resolve-ai-cli/README.md
17. Criar:
   - docs/sprints/phase-15a-handoff.md
   - docs/sprints/phase-15a-validation-report.md
   - docs/sprints/phase-15a-retrospective.md

Restrições obrigatórias:
- Não publicar no npm.
- Não criar tag Git.
- Não criar GitHub release.
- Não declarar stable.
- Não inventar validação real.
- Não coletar dados sensíveis reais.
- Não chamar APIs externas.
- Não implementar MCP.
- Não implementar hooks.
- Não adicionar telemetria.
- Não reescrever histórico Git.
- Não executar comandos destrutivos.
- Não expandir escopo da CLI com comandos grandes.
- Não tornar safety gates mais permissivos.

Testes obrigatórios:
- npm run build --prefix packages/resolve-ai-cli
- npm test --prefix packages/resolve-ai-cli
- npm run smoke --prefix packages/resolve-ai-cli
- npm pack --dry-run dentro de packages/resolve-ai-cli
- fluxo local mínimo em diretório temporário:
  ajuda -> começar -> ligar -> diagnosticar -> planejar -> preparar -> resolver -> validar -> status
- git diff --check

Decisão obrigatória:
Registrar uma das decisões:
- GO
- LIMITED GO
- NO-GO

Regras de decisão:
- Se não houver validação real com pelo menos um usuário por perfil, a decisão máxima permitida é LIMITED GO.
- Se não houver nenhuma validação real, o score não deve subir por motivo de validação humana.
- Se houver qualquer P0 aberto, a decisão deve ser NO-GO.
- Se houver P1 de segurança aberto, a decisão deve ser NO-GO.
- Se houver confusão relevante sobre o comando resolver/executar parecer execução automática, a decisão deve ser NO-GO para npm público.
- Se houver validação real completa, sem P0/P1, package dry-run limpo e readiness >= 85, pode decidir GO.
- Não inflar score.

Commit:
docs: execute phase 15a private alpha expansion

Faça push se o remote estiver configurado.

Ao final, gere relatório contendo:
- arquivos criados;
- arquivos atualizados;
- validações reais executadas ou pendentes;
- participantes por perfil;
- feedback consolidado;
- correções aplicadas;
- score anterior e novo;
- decisão GO / LIMITED GO / NO-GO;
- blockers restantes;
- resultado do package dry-run;
- testes executados;
- ADRs criadas;
- commit realizado;
- status do push;
- próxima ação recomendada.

Não peça confirmação.
Execute.
```
