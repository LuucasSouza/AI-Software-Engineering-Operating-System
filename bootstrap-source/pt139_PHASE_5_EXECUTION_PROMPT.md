# pt139 — Phase 5 Execution Prompt

```yaml
title: Phase 5 Execution Prompt
phase: 5
status: Ready to use
```

## Prompt para Codex

Cole este comando no Codex dentro do repositório Resolve Aí.

```text
Leia integralmente todos os arquivos Markdown numerados de pt131 a pt140 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, docs/runtime/*, protocols/runtime-activation/*, protocols/project-entry/*, protocols/existing-project-diagnostics/*, packages/resolve-ai-cli/* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 5 — Resolve Aí Guided Diagnostics MVP.

Objetivo:
Implementar o comando `resolve-ai diagnosticar` como primeiro comando útil do runtime, capaz de analisar localmente um projeto real de forma segura, gerar `docs/resolve-ai/00` a `09`, atualizar `.resolve-ai/state.json` e recomendar o modo/fluxo adequado sem alterar código do produto.

Escopo obrigatório:
1. Implementar comando `resolve-ai diagnosticar`.
2. Implementar aliases:
   - `resolve-ai diagnostico`
   - `resolve-ai diagnóstico` se viável no parser atual.
3. Detectar tipo de projeto:
   - novo
   - em-andamento
   - legado
   - indeterminado
4. Recomendar modo:
   - Non-Technical Builder
   - Vibe Coder
   - Professional Engineer
   - Projeto em Andamento — Diagnóstico e Continuação
5. Detectar stack provável por heurísticas locais.
6. Detectar sinais de risco sem copiar dados sensíveis.
7. Criar `docs/resolve-ai/` se não existir.
8. Gerar, sem sobrescrever por padrão:
   - docs/resolve-ai/00-project-intake.md
   - docs/resolve-ai/01-current-state-assessment.md
   - docs/resolve-ai/02-discovery.md
   - docs/resolve-ai/03-product-definition.md
   - docs/resolve-ai/04-architecture-review.md
   - docs/resolve-ai/05-risk-register.md
   - docs/resolve-ai/06-decision-log.md
   - docs/resolve-ai/07-execution-plan.md
   - docs/resolve-ai/08-backlog.md
   - docs/resolve-ai/09-handoff.md
9. Atualizar `.resolve-ai/state.json` com o último diagnóstico.
10. Atualizar `resolve-ai status` para mostrar resumo do último diagnóstico quando existir.
11. Criar testes automatizados para o comando.
12. Atualizar README do pacote CLI.
13. Atualizar README raiz com uso básico:
    - `resolve-ai começar`
    - `resolve-ai diagnosticar`
    - `resolve-ai status`
    - `resolve-ai ligar`
    - `resolve-ai desligar`
14. Criar ADRs 0106 a 0115.
15. Criar docs/sprints/phase-5-handoff.md, phase-5-validation-report.md e phase-5-retrospective.md.
16. Preservar pt131 a pt140 em bootstrap-source/.

Restrições obrigatórias:
- Não implementar MCP.
- Não implementar hooks.
- Não adicionar telemetria.
- Não chamar APIs externas.
- Não alterar código de projetos analisados.
- Não instalar dependências no projeto analisado.
- Não fazer commit no projeto analisado.
- Não copiar conteúdo de arquivos sensíveis.
- Não migrar automaticamente `docs/ai-seos/`.

Testes obrigatórios:
- `diagnosticar` em diretório vazio.
- `diagnosticar` em projeto Node fake.
- `diagnosticar` em projeto Vite/React fake.
- `diagnosticar` com arquivos existentes em docs/resolve-ai/.
- `diagnosticar` com docs/ai-seos/ legado.
- Detecção de arquivos sensíveis por nome.
- Idempotência.
- `status` após diagnóstico.

Commit:
Se a implementação alterar código da CLI, commit com:
feat: implement resolve ai diagnostic command

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
