# Resolve Aí CLI MVP

Primeiro MVP executável da CLI `resolve-ai`.

## Escopo

Esta versão implementa apenas comandos locais e não destrutivos:

- `resolve-ai ajuda`
- `resolve-ai começar`
- `resolve-ai comecar`
- `resolve-ai ligar`
- `resolve-ai desligar`
- `resolve-ai status`

## Uso Local

```bash
node packages/resolve-ai-cli/dist/index.js ajuda
node packages/resolve-ai-cli/dist/index.js começar
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
