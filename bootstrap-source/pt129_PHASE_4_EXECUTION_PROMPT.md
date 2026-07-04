# pt129 — Phase 4 Execution Prompt

---
title: Phase 4 Execution Prompt
phase: 4
status: Codex Execution Prompt
---

## Prompt para Codex

Use este prompt para executar a Phase 4.

```text
Leia integralmente todos os arquivos Markdown numerados de pt121 a pt130 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, docs/runtime/*, protocols/runtime-activation/*, protocols/project-entry/* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 4 — Resolve Aí CLI MVP Implementation.

Objetivo:
Implementar o primeiro MVP real da CLI `resolve-ai`, com comandos em português, Modo Liga/Desliga, estado local `.resolve-ai/` e documentação humana `docs/resolve-ai/`.

Escopo obrigatório:
1. Criar pacote `packages/resolve-ai-cli/`.
2. Implementar comandos:
   - `resolve-ai ajuda`
   - `resolve-ai começar`
   - `resolve-ai comecar` como alias sem acento
   - `resolve-ai ligar`
   - `resolve-ai desligar`
   - `resolve-ai status`
3. Criar `.resolve-ai/config.json` e `.resolve-ai/state.json` no projeto onde o comando for executado.
4. Criar `docs/resolve-ai/README.md`, `00-project-intake.md` e `09-handoff.md` sem sobrescrever arquivos existentes.
5. Implementar estado persistente para Modo Liga/Desliga.
6. Manter comandos idempotentes.
7. Criar testes mínimos.
8. Criar documentação do pacote CLI.
9. Criar ADRs 0097 a 0105.
10. Atualizar README.md, ROADMAP.md, CHANGELOG.md, adr/README.md, docs/README.md, docs/sprints/README.md, templates/README.md, protocols/README.md e frameworks/README.md.
11. Preservar pt121 a pt130 em bootstrap-source/.
12. Criar docs/sprints/phase-4-handoff.md, docs/sprints/phase-4-validation-report.md e docs/sprints/phase-4-retrospective.md.

Restrições obrigatórias:
- Não implementar MCP ainda.
- Não implementar hooks ainda.
- Não adicionar telemetria.
- Não chamar APIs externas.
- Não alterar código de projetos-alvo durante testes.
- Não fazer publicação npm.
- Não fazer substituição global cega de nomes.

Testes obrigatórios:
- Testar `ajuda`.
- Testar `começar` em diretório temporário.
- Testar `status` antes e depois de começar.
- Testar `ligar`.
- Testar `desligar`.
- Testar idempotência.
- Testar existência de `docs/ai-seos/` sem migração automática.

Commit:
Commitar com a mensagem:
docs: execute phase 4 resolve ai cli mvp

Se houver implementação de código, use uma mensagem mais apropriada:
feat: implement resolve ai cli mvp

Faça push se o remote estiver configurado.

Ao final, gere relatório contendo:
- arquivos criados;
- arquivos atualizados;
- comandos implementados;
- testes executados;
- ADRs criadas;
- decisões tomadas;
- riscos ou pendências;
- validação;
- commit realizado;
- status do push;
- próxima ação recomendada.

Não peça confirmação.
Execute.
```
