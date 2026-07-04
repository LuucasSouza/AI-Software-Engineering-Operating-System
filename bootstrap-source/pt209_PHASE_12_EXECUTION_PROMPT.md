# pt209 — Phase 12 Execution Prompt

Copie este prompt para o Codex após colocar os arquivos pt201 a pt210 na raiz do projeto.

```text
Leia integralmente todos os arquivos Markdown numerados de pt201 a pt210 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, packages/resolve-ai-cli/*, docs/release/*, docs/alpha-validation/*, docs/runtime/*, docs/sprints/phase-11-* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 12 — Public Alpha Release Prep and Blocker Resolution.

Objetivo:
Corrigir os P1/P2 identificados na Phase 11, preparar validação real com usuários dos três perfis, recalcular readiness score e criar decisão formal de public alpha/npm sem publicar, sem criar tag e sem declarar stable.

Escopo obrigatório:
1. Corrigir ou melhorar a detecção/exibição de stack para Node.js, TypeScript, Vite e React.
2. Adicionar heurísticas seguras para Firebase, Supabase, Python e monorepo quando simples.
3. Garantir que os documentos 00–09 e o status exibam stack provável quando detectada.
4. Corrigir a copy do comando resolver para não falar como se validar fosse futuro.
5. Calibrar hardening/risk scoring para não tratar diretório vazio ou projeto novo simples como crítico apenas por ausência de testes/CI.
6. Manter arquivos sensíveis como risco alto/crítico sem copiar conteúdo.
7. Criar ou atualizar testes para as correções acima.
8. Criar documentação de validação real em docs/alpha-validation/real-users/.
9. Criar templates e instruções para validar com:
   - Non-Technical Builder;
   - Vibe Coder;
   - Professional Engineer.
10. Se houver validação real disponível nesta execução, registrar de forma honesta.
11. Se não houver validação real disponível, registrar isso como blocker/pendência para public alpha.
12. Criar release candidate docs:
   - docs/release/v0.1.0-alpha-release-candidate.md
   - docs/release/v0.1.0-alpha-release-notes-draft.md
   - docs/release/v0.1.0-alpha-npm-publication-checklist.md
   - docs/release/v0.1.0-alpha-go-no-go-decision.md
   - docs/release/v0.1.0-alpha-risk-review.md
   - docs/release/v0.1.0-alpha-security-privacy-review.md
   - docs/release/v0.1.0-alpha-npm-and-tagging-decision-gate.md
13. Criar getting started público alpha:
   - docs/getting-started/quickstart-alpha.md
   - docs/getting-started/first-project-with-resolve-ai.md
14. Atualizar known limitations, blockers e scorecard da v0.1.0-alpha.
15. Executar npm pack --dry-run no pacote CLI se for seguro e não publicar nada.
16. Criar ADRs 0176 a 0185.
17. Atualizar README.md, ROADMAP.md, CHANGELOG.md, adr/README.md, docs/README.md, docs/release/README.md, docs/getting-started/README.md, docs/community/README.md, docs/sprints/README.md, packages/resolve-ai-cli/README.md.
18. Criar docs/sprints/phase-12-handoff.md, phase-12-validation-report.md e phase-12-retrospective.md.
19. Preservar pt201 a pt210 em bootstrap-source/.

Restrições obrigatórias:
- Não publicar no npm.
- Não criar tag Git.
- Não criar release GitHub.
- Não declarar stable.
- Não implementar MCP.
- Não implementar hooks.
- Não adicionar telemetria.
- Não chamar APIs externas.
- Não coletar dados sensíveis reais.
- Não inventar validação com usuários reais.
- Não inflar readiness score.
- Não executar comandos destrutivos.
- Não reescrever histórico Git.

Testes obrigatórios:
- npm run build --prefix packages/resolve-ai-cli
- npm test --prefix packages/resolve-ai-cli
- npm run smoke --prefix packages/resolve-ai-cli
- npm pack --dry-run --prefix packages/resolve-ai-cli, se compatível com o ambiente
- Validar fluxo local em diretório vazio.
- Validar fluxo local em Node fake e confirmar stack detectada.
- Validar fluxo local em Vite/React fake e confirmar stack detectada.
- Validar que projeto novo sem testes não vira risco crítico por esse motivo isolado.
- Validar que arquivo sensível por nome/caminho segue como risco alto/crítico sem copiar conteúdo.
- Validar copy de resolver mencionando que validar já existe.
- git diff --check

Commit:
chore: prepare public alpha release candidate

Faça push se o remote estiver configurado.

Ao final, gere relatório contendo:
- arquivos criados;
- arquivos atualizados;
- correções P1/P2;
- cenários validados;
- validações reais registradas ou pendentes;
- readiness score anterior e novo;
- blockers restantes;
- resultado do npm pack dry-run, se executado;
- ADRs criadas;
- decisões tomadas;
- recomendação GO / LIMITED GO / NO-GO;
- commit realizado;
- status do push;
- próxima ação recomendada.

Não peça confirmação.
Execute.
```
