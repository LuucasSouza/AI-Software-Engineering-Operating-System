---
title: Phase 10 Execution Prompt
project: Resolve Aí
phase: 10
status: Draft
version: 0.1.0-alpha-prep
---

# Phase 10 Execution Prompt

Use este prompt para executar a Phase 10 no Codex.

```text
Leia integralmente todos os arquivos Markdown numerados de pt181 a pt190 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, packages/resolve-ai-cli/*, docs/runtime/*, docs/sprints/phase-9-* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 10 — Resolve Aí Release Hardening and Local CLI Usability.

Objetivo:
Endurecer a CLI local do Resolve Aí para uso real antes de release alpha, implementando build automation, scripts previsíveis, smoke tests, documentação de instalação local, política de estado/configuração, atualização do remote canônico e checklist de release readiness.

Escopo obrigatório:
1. Revisar e ajustar packages/resolve-ai-cli/package.json.
2. Criar ou revisar packages/resolve-ai-cli/tsconfig.json.
3. Implementar script de build da CLI.
4. Garantir que dist/ seja regenerável a partir de src/.
5. Criar script de smoke test local.
6. Criar documentação de instalação local:
   - docs/getting-started/install-local-cli.md
   - atualizar packages/resolve-ai-cli/README.md
   - atualizar README.md raiz
7. Documentar uso com npm link ou alternativa local equivalente.
8. Atualizar ou criar documentação de release readiness:
   - docs/release/v0.1.0-alpha-cli-readiness.md
9. Atualizar política de .resolve-ai/ e docs/resolve-ai/.
10. Atualizar .gitignore se necessário.
11. Atualizar remote origin para https://github.com/LuucasSouza/Resolve-Ai.git se o ambiente permitir.
12. Criar ADRs 0156 a 0165.
13. Criar docs/sprints/phase-10-handoff.md, phase-10-validation-report.md e phase-10-retrospective.md.
14. Preservar pt181 a pt190 em bootstrap-source/.

Restrições obrigatórias:
- Não implementar novos comandos de produto.
- Não implementar MCP.
- Não implementar hooks.
- Não adicionar telemetria.
- Não chamar APIs externas.
- Não publicar no npm.
- Não criar tag Git automaticamente.
- Não fazer deploy.
- Não reescrever histórico Git.
- Não sobrescrever documentação gerada por usuários.

Testes obrigatórios:
- npm run build --prefix packages/resolve-ai-cli
- npm test --prefix packages/resolve-ai-cli
- npm run smoke --prefix packages/resolve-ai-cli, se implementado
- Validar node packages/resolve-ai-cli/dist/index.js ajuda
- Validar fluxo local mínimo em diretório temporário:
  começar → ligar → diagnosticar → planejar → preparar → resolver → validar → status
- git diff --check

Commit:
chore: harden resolve ai cli local usability

Faça push se o remote estiver configurado.

Ao final, gere relatório contendo:
- arquivos criados;
- arquivos atualizados;
- scripts adicionados;
- testes executados;
- ADRs criadas;
- decisões tomadas;
- riscos ou pendências;
- validação;
- remote atual;
- commit realizado;
- status do push;
- próxima ação recomendada.

Não peça confirmação.
Execute.
```
