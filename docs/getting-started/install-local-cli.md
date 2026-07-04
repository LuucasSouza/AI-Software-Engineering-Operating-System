---
title: "Instalação Local da CLI Resolve Aí"
status: "Draft"
version: "0.1.0-alpha"
phase: "Phase 10"
---

# Instalação Local da CLI Resolve Aí

## Objetivo

Usar `resolve-ai` localmente antes de publicação npm.

## Pré-requisitos

- Node.js 20 ou superior.
- Git.
- Terminal com acesso ao repositório.

## Clonar

```bash
git clone https://github.com/LuucasSouza/Resolve-Ai.git
cd Resolve-Ai
```

## Buildar

```bash
npm run build --prefix packages/resolve-ai-cli
```

## Testar no repositório

```bash
node packages/resolve-ai-cli/dist/index.js ajuda
npm test --prefix packages/resolve-ai-cli
npm run smoke --prefix packages/resolve-ai-cli
```

## Linkar localmente

```bash
npm link --prefix packages/resolve-ai-cli
```

Depois valide:

```bash
resolve-ai ajuda
```

## Usar em outro projeto

```bash
cd caminho/do/seu-projeto
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
```

## Remover link local

```bash
npm unlink -g resolve-ai
```

## Troubleshooting

### `resolve-ai` não encontrado

Rode `npm link --prefix packages/resolve-ai-cli` novamente e confira se o diretório global do npm está no `PATH`.

### `dist/index.js` não encontrado

Rode:

```bash
npm run build --prefix packages/resolve-ai-cli
```

### Acentos no Windows

Use aliases sem acento quando necessário:

```bash
resolve-ai comecar
resolve-ai diagnostico
```

## Estado local

`.resolve-ai/` é estado local do runtime. `docs/resolve-ai/` é memória documental do projeto e pode ser versionada quando fizer sentido.

Não salve tokens, secrets ou dados pessoais nesses arquivos.
