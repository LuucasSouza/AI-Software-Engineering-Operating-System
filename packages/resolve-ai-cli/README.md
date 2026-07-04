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
- `resolve-ai ligar`
- `resolve-ai desligar`
- `resolve-ai status`

## Uso Local

```bash
node packages/resolve-ai-cli/dist/index.js ajuda
node packages/resolve-ai-cli/dist/index.js começar
node packages/resolve-ai-cli/dist/index.js diagnosticar
node packages/resolve-ai-cli/dist/index.js status
node packages/resolve-ai-cli/dist/index.js ligar
node packages/resolve-ai-cli/dist/index.js desligar
```

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

## Fora de Escopo

- MCP.
- Hooks.
- Telemetria.
- APIs externas.
- Publicação npm.
- Alteração automática de código do projeto-alvo.

## Testes

```bash
npm test --prefix packages/resolve-ai-cli
```
