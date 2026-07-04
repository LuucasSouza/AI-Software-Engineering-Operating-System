---
title: Phase 11 Execution Prompt
status: Draft
version: 0.1.0-alpha
phase: 11
owner: Resolve Aí Maintainers
---

# Phase 11 Execution Prompt

Use this prompt with Codex to execute Phase 11.

```text
Leia integralmente todos os arquivos Markdown numerados de pt191 a pt200 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, packages/resolve-ai-cli/*, docs/release/*, docs/runtime/*, docs/sprints/phase-10-* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 11 — External Alpha Validation.

Objetivo:
Preparar e executar uma rodada controlada de validação alpha externa/local do Resolve Aí, validando a CLI em cenários representativos, perfis de usuário e projetos reais/simulados antes de publicação npm.

Escopo obrigatório:
1. Criar documentação de alpha validation.
2. Criar protocolo de validação alpha.
3. Criar matriz de cenários por perfil.
4. Criar plano de testes em projetos reais/simulados.
5. Criar templates de feedback e triagem.
6. Criar scorecard de readiness alpha.
7. Criar issue templates de alpha feedback.
8. Criar templates de validation report.
9. Executar, quando possível, validação local com pelo menos três projetos simulados:
   - diretório vazio;
   - Node fake;
   - Vite/React fake.
10. Rodar fluxo CLI local nos cenários simulados:
    começar → ligar → diagnosticar → planejar → preparar → resolver → validar → status.
11. Registrar resultados em docs/alpha-validation/.
12. Calcular readiness score honesto.
13. Criar ADRs 0166 a 0175.
14. Atualizar README.md, ROADMAP.md, CHANGELOG.md, adr/README.md, docs/README.md, docs/release/README.md, docs/community/README.md, docs/sprints/README.md, packages/resolve-ai-cli/README.md.
15. Criar docs/sprints/phase-11-handoff.md, phase-11-validation-report.md e phase-11-retrospective.md.
16. Preservar pt191 a pt200 em bootstrap-source/.

Restrições obrigatórias:
- Não publicar no npm.
- Não criar tag Git.
- Não implementar MCP.
- Não implementar hooks.
- Não adicionar telemetria.
- Não chamar APIs externas.
- Não coletar dados sensíveis reais.
- Não declarar stable.
- Não inflar readiness score.

Testes obrigatórios:
- npm run build --prefix packages/resolve-ai-cli
- npm test --prefix packages/resolve-ai-cli
- npm run smoke --prefix packages/resolve-ai-cli
- Fluxo local em pelo menos três diretórios temporários.
- git diff --check

Commit:
docs: execute phase 11 external alpha validation

Faça push se o remote estiver configurado.

Ao final, gere relatório contendo:
- arquivos criados;
- arquivos atualizados;
- cenários validados;
- score de readiness;
- blockers encontrados;
- ADRs criadas;
- decisões tomadas;
- riscos ou pendências;
- recomendação de release;
- commit realizado;
- status do push;
- próxima ação recomendada.

Não peça confirmação.
Execute.
```

