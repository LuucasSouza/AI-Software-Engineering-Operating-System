# pt249 — Phase 15B Execution Prompt

Use este prompt para executar a Phase 15B no Codex.

```text
Leia integralmente todos os arquivos Markdown numerados de pt241 a pt250 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, docs/release/*, docs/alpha-validation/*, docs/community/*, templates/feedback/*, templates/validation/*, packages/resolve-ai-cli/*, docs/sprints/phase-15a-* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 15B — Private Alpha Fixes and Second Validation Round.

Objetivo:
Executar ou registrar uma segunda rodada de alpha privado com usuários reais dos três perfis oficiais, revisar a percepção de segurança dos comandos resolver/executar, aplicar apenas correções pequenas e seguras quando justificadas por feedback real ou lacuna clara, revisar o package dry-run, recalcular readiness score e registrar decisão GO / LIMITED GO / NO-GO / VALIDATION BLOCKED.

Contexto herdado:
- Phase 15A terminou com 77/100 — LIMITED GO.
- Nenhuma validação real foi executada.
- Blocker principal: validação humana real.
- O pacote npm dry-run está tecnicamente limpo.
- A próxima decisão não deve ser inflada sem participantes reais.

Perfis obrigatórios:
1. Non-Technical Builder.
2. Vibe Coder.
3. Professional Engineer.

Escopo obrigatório:
1. Preservar pt241 a pt250 em bootstrap-source/.
2. Criar ou atualizar docs/alpha-validation/private-alpha/phase-15b/.
3. Criar:
   - docs/alpha-validation/private-alpha/phase-15b/second-round-validation-plan.md
   - docs/alpha-validation/private-alpha/phase-15b/recruitment-tracker.md
   - docs/alpha-validation/private-alpha/phase-15b/moderator-runbook.md
   - docs/alpha-validation/private-alpha/phase-15b/session-p15b-ntb-01.md
   - docs/alpha-validation/private-alpha/phase-15b/session-p15b-vc-01.md
   - docs/alpha-validation/private-alpha/phase-15b/session-p15b-pe-01.md
   - docs/alpha-validation/private-alpha/phase-15b/evidence-register.md
   - docs/alpha-validation/private-alpha/phase-15b/second-round-consolidated-results.md
   - docs/alpha-validation/private-alpha/phase-15b/profile-scorecard.md
4. Se houver participantes reais disponíveis, registrar feedback real de forma anonimizada.
5. Se não houver participantes reais disponíveis, registrar explicitamente VALIDATION BLOCKED. Não inventar validação.
6. Criar ou atualizar:
   - docs/community/private-alpha-phase-15b-feedback-triage.md
   - docs/community/private-alpha-phase-15b-fix-backlog.md
   - docs/community/private-alpha-phase-15b-fixes-applied.md
7. Revisar copy dos comandos resolver, executar e validar.
8. Aplicar apenas correções pequenas e justificadas se houver feedback real ou lacuna clara.
9. Se alterar CLI, atualizar src/, regenerar dist/ via build e criar/ajustar testes.
10. Revisar package dry-run dentro de packages/resolve-ai-cli.
11. Criar ou atualizar:
   - docs/release/v0.1.0-alpha-phase-15b-readiness-scorecard.md
   - docs/release/v0.1.0-alpha-phase-15b-go-no-go-decision.md
   - docs/release/v0.1.0-alpha-phase-15b-blockers.md
   - docs/release/v0.1.0-alpha-phase-15b-package-review.md
   - docs/release/v0.1.0-alpha-phase-15b-release-recommendation.md
12. Criar templates:
   - templates/feedback/private-alpha-second-round-feedback.md
   - templates/validation/private-alpha-second-round-session-report.md
   - templates/validation/private-alpha-second-round-moderator-script.md
   - templates/validation/private-alpha-second-round-observation-sheet.md
13. Recalcular readiness score honestamente, partindo de:
   - 77/100 — LIMITED GO
14. Criar ADRs 0216 a 0225.
15. Atualizar índices:
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
16. Criar:
   - docs/sprints/phase-15b-handoff.md
   - docs/sprints/phase-15b-validation-report.md
   - docs/sprints/phase-15b-retrospective.md

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
- Não recomendar nova fase documental como próxima ação principal se não houver participantes reais.

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
- VALIDATION BLOCKED

Regras de decisão:
- Se não houver nenhuma validação real, registrar VALIDATION BLOCKED ou LIMITED GO com blocker explícito; o score não deve subir.
- Se não houver validação real com pelo menos um usuário por perfil, a decisão máxima permitida é LIMITED GO.
- Se houver qualquer P0 aberto, a decisão deve ser NO-GO.
- Se houver P1 de segurança aberto, a decisão deve ser NO-GO.
- Se houver confusão relevante sobre resolver/executar parecer execução automática, a decisão deve ser NO-GO para npm público.
- Se houver validação real completa, sem P0/P1, package dry-run limpo e readiness >= 85, pode decidir GO.
- Não inflar score.

Commit:
docs: execute phase 15b private alpha second round

Faça push se o remote estiver configurado.

Ao final, gere relatório contendo:
- arquivos criados;
- arquivos atualizados;
- validações reais executadas ou pendentes;
- participantes por perfil;
- feedback consolidado;
- correções aplicadas;
- score anterior e novo;
- decisão GO / LIMITED GO / NO-GO / VALIDATION BLOCKED;
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
