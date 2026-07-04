# pt179 — Phase 9 Execution Prompt

Copy this prompt into Codex to execute Phase 9.

```text
Leia integralmente todos os arquivos Markdown numerados de pt171 a pt180 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, packages/resolve-ai-cli/*, docs/runtime/*, docs/sprints/phase-8-* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 9 — Resolve Aí Guided Review and Validation.

Objetivo:
Implementar o comando `resolve-ai validar`, que revisa a execução assistida, detecta mudanças locais com segurança, gera documentos 25 a 29, atualiza o estado local e recomenda próximos passos antes de commit/deploy, sem alterar código do produto analisado.

Escopo obrigatório:
1. Implementar comando `resolve-ai validar`.
2. Implementar aliases:
   - `resolve-ai valida`
   - `resolve-ai revisar`
3. Ler `.resolve-ai/state.json` quando existir.
4. Ler documentos em `docs/resolve-ai/` quando existirem.
5. Respeitar o Modo Liga/Desliga.
6. Detectar mudanças locais usando inspeção segura e Git metadata quando disponível.
7. Detectar sinais de arquivos sensíveis por nome/caminho sem copiar conteúdo.
8. Gerar, sem sobrescrever por padrão:
   - docs/resolve-ai/25-relatorio-de-validacao.md
   - docs/resolve-ai/26-mudancas-detectadas.md
   - docs/resolve-ai/27-checklist-pos-execucao.md
   - docs/resolve-ai/28-riscos-pos-execucao.md
   - docs/resolve-ai/29-handoff-pos-validacao.md
9. Atualizar `.resolve-ai/state.json` com `ultimaValidacao`.
10. Atualizar `resolve-ai status` para mostrar resumo da última validação.
11. Criar testes automatizados para o comando.
12. Atualizar README do pacote CLI e README raiz.
13. Criar ADRs 0146 a 0155.
14. Criar docs/sprints/phase-9-handoff.md, phase-9-validation-report.md e phase-9-retrospective.md.
15. Preservar pt171 a pt180 em bootstrap-source/.

Restrições obrigatórias:
- Não implementar MCP.
- Não implementar hooks.
- Não adicionar telemetria.
- Não chamar APIs externas.
- Não alterar código de projetos analisados.
- Não instalar dependências no projeto analisado.
- Não fazer commit no projeto analisado.
- Não fazer deploy.
- Não executar testes automaticamente nesta fase.
- Não sobrescrever documentos existentes por padrão.
- Não copiar conteúdo de arquivos sensíveis.

Testes obrigatórios:
- validar em diretório vazio.
- validar com Resolve Aí desligado.
- validar com execução assistida existente.
- validar com mudanças Git detectáveis.
- validar com arquivo sensível por nome/caminho.
- validar com docs existentes.
- validar sem pacote de execução anterior.
- aliases valida e revisar.
- status após validar.
- todos os testes anteriores devem continuar passando.

Commit:
feat: implement resolve ai validation command

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
