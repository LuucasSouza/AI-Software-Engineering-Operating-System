# Resolve Aí CLI MVP

Primeiro MVP executável da CLI `resolve-ai`.

## Escopo

Esta versão implementa apenas comandos locais e não destrutivos:

- `resolve-ai ajuda`
- `resolve-ai começar`
- `resolve-ai comecar`
- `resolve-ai diagnosticar`
- `resolve-ai diagnostico`
- `resolve-ai diagnóstico`
- `resolve-ai planejar`
- `resolve-ai plano`
- `resolve-ai planejamento`
- `resolve-ai preparar`
- `resolve-ai tarefa`
- `resolve-ai executar`
- `resolve-ai resolver`
- `resolve-ai resolva`
- `resolve-ai fazer`
- `resolve-ai validar`
- `resolve-ai valida`
- `resolve-ai revisar`
- `resolve-ai ligar`
- `resolve-ai desligar`
- `resolve-ai status`

## Uso Local

Build:

```bash
npm run build --prefix packages/resolve-ai-cli
```

Smoke test:

```bash
npm run smoke --prefix packages/resolve-ai-cli
```

Execução direta:

```bash
node packages/resolve-ai-cli/dist/index.js ajuda
node packages/resolve-ai-cli/dist/index.js começar
node packages/resolve-ai-cli/dist/index.js diagnosticar
node packages/resolve-ai-cli/dist/index.js planejar
node packages/resolve-ai-cli/dist/index.js preparar
node packages/resolve-ai-cli/dist/index.js resolver
node packages/resolve-ai-cli/dist/index.js validar
node packages/resolve-ai-cli/dist/index.js status
node packages/resolve-ai-cli/dist/index.js ligar
node packages/resolve-ai-cli/dist/index.js desligar
```

Link local antes de publicação npm:

```bash
npm link --prefix packages/resolve-ai-cli
resolve-ai ajuda
```

## Scripts

```bash
npm run build --prefix packages/resolve-ai-cli
npm test --prefix packages/resolve-ai-cli
npm run smoke --prefix packages/resolve-ai-cli
npm run check --prefix packages/resolve-ai-cli
```

`dist/` permanece versionado durante alpha, mas deve ser regenerado por `npm run build`.

## O Que o Comando `começar` Cria

No diretório atual:

```text
.resolve-ai/config.json
.resolve-ai/state.json
docs/resolve-ai/README.md
docs/resolve-ai/00-project-intake.md
docs/resolve-ai/09-handoff.md
```

Arquivos existentes não são sobrescritos.

## O Que o Comando `diagnosticar` Cria

O comando executa uma análise local e heurística sem alterar código do produto, sem instalar dependências e sem chamar APIs externas.

Ele gera, sem sobrescrever arquivos existentes:

```text
docs/resolve-ai/00-project-intake.md
docs/resolve-ai/01-current-state-assessment.md
docs/resolve-ai/02-discovery.md
docs/resolve-ai/03-product-definition.md
docs/resolve-ai/04-architecture-review.md
docs/resolve-ai/05-risk-register.md
docs/resolve-ai/06-decision-log.md
docs/resolve-ai/07-execution-plan.md
docs/resolve-ai/08-backlog.md
docs/resolve-ai/09-handoff.md
```

Também atualiza `.resolve-ai/state.json` com tipo de projeto, modo recomendado, stack detectada, riscos por nome e próxima ação.

## O Que o Comando `planejar` Cria

O comando transforma diagnóstico e documentos existentes em plano incremental, sem alterar código do produto.

Ele gera, sem sobrescrever arquivos existentes:

```text
docs/resolve-ai/10-plano-de-continuacao.md
docs/resolve-ai/11-backlog-priorizado.md
docs/resolve-ai/12-proximas-sprints.md
docs/resolve-ai/13-prompts-de-execucao.md
docs/resolve-ai/14-checklist-de-validacao.md
```

Também atualiza `.resolve-ai/state.json` com último planejamento, confiança, documentos gerados e próxima ação recomendada.

## O Que o Comando `preparar` Cria

O comando seleciona uma tarefa pequena e segura e gera um pacote de execução. Ele não executa a tarefa.

```text
docs/resolve-ai/15-tarefa-preparada.md
docs/resolve-ai/16-prompt-de-implementacao.md
docs/resolve-ai/17-plano-de-validacao-da-tarefa.md
docs/resolve-ai/18-riscos-da-execucao.md
docs/resolve-ai/19-handoff-de-execucao.md
```

`canAutoExecute` é sempre `false` nesta fase.

## O Que o Comando `resolver` Cria

O comando transforma a tarefa preparada em execução assistida. Ele não altera código, não executa a tarefa, não faz commit e não faz deploy.

Com o Resolve Aí ligado, ele gera, sem sobrescrever arquivos existentes:

```text
docs/resolve-ai/20-execucao-assistida.md
docs/resolve-ai/21-aprovacao-humana.md
docs/resolve-ai/22-prompt-final-para-agente.md
docs/resolve-ai/23-checklist-pos-execucao.md
docs/resolve-ai/24-registro-de-execucao.md
```

Também atualiza `.resolve-ai/state.json` com `ultimaExecucaoAssistida`.

`canAutoExecute` continua sempre `false`.

## O Que o Comando `validar` Cria

O comando revisa a execução assistida com inspeção segura de metadados locais. Ele não altera código, não executa testes automaticamente, não faz commit e não faz deploy.

Com o Resolve Aí ligado, ele gera, sem sobrescrever arquivos existentes:

```text
docs/resolve-ai/25-relatorio-de-validacao.md
docs/resolve-ai/26-mudancas-detectadas.md
docs/resolve-ai/27-checklist-pos-execucao.md
docs/resolve-ai/28-riscos-pos-execucao.md
docs/resolve-ai/29-handoff-pos-validacao.md
```

Também atualiza `.resolve-ai/state.json` com `ultimaValidacao`.

Arquivos sensíveis por nome/caminho bloqueiam a validação e não têm conteúdo copiado.

## Fora de Escopo

- MCP.
- Hooks.
- Telemetria.
- APIs externas.
- Publicação npm.
- Alteração automática de código do projeto-alvo.

## Estado Local e Documentação

`.resolve-ai/` é estado local do runtime. `.resolve-ai/state.json`, cache, tmp e session devem ser ignorados por padrão.

`docs/resolve-ai/` é documentação humana do projeto analisado e pode ser versionada quando o time quiser rastreabilidade.

Nenhum comando deve gravar tokens, secrets, dumps ou dados pessoais.

## Testes

```bash
npm run build --prefix packages/resolve-ai-cli
npm test --prefix packages/resolve-ai-cli
npm run smoke --prefix packages/resolve-ai-cli
```
