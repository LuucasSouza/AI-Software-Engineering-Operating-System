---
title: Local Installation and Linking
project: Resolve Aí
phase: 10
status: Draft
version: 0.1.0-alpha-prep
---

# Local Installation and Linking

## 1. Objetivo

Documentar como usar o Resolve Aí localmente antes de publicação npm.

A experiência desejada é simples:

```bash
cd Resolve-Ai
npm install
npm run build --prefix packages/resolve-ai-cli
npm link --prefix packages/resolve-ai-cli
resolve-ai ajuda
```

Depois, em outro projeto:

```bash
cd caminho/do/meu-projeto
resolve-ai começar
resolve-ai diagnosticar
resolve-ai planejar
```

## 2. Público

A documentação deve servir para:

1. mantenedor do Resolve Aí;
2. programador testando a CLI localmente;
3. pessoa que usa Codex/Claude/Cursor no terminal;
4. futuro usuário alpha.

## 3. Instruções canônicas de instalação local

Criar documentação em:

```text
docs/getting-started/install-local-cli.md
packages/resolve-ai-cli/README.md
```

Conteúdo mínimo:

### 3.1 Clonar o repositório

```bash
git clone https://github.com/LuucasSouza/Resolve-Ai.git
cd Resolve-Ai
```

### 3.2 Instalar dependências

```bash
npm install
```

Ou, se o pacote ainda for isolado:

```bash
npm install --prefix packages/resolve-ai-cli
```

### 3.3 Buildar a CLI

```bash
npm run build --prefix packages/resolve-ai-cli
```

### 3.4 Linkar localmente

```bash
npm link --prefix packages/resolve-ai-cli
```

### 3.5 Testar

```bash
resolve-ai ajuda
resolve-ai status
```

### 3.6 Usar em outro projeto

```bash
cd caminho/do/projeto-real
resolve-ai começar
resolve-ai diagnosticar
resolve-ai planejar
```

## 4. Desinstalação local

Documentar como remover o link local:

```bash
npm unlink -g resolve-ai
```

Ou alternativa adequada ao pacote real.

## 5. Troubleshooting

Incluir problemas comuns:

### `resolve-ai` não encontrado

Provável causa: `npm link` não executado ou binário global fora do PATH.

### `Permission denied`

Provável causa: ausência de shebang, permissão de execução ou ambiente Windows/Unix com diferenças.

### `dist/index.js` não encontrado

Rodar build:

```bash
npm run build --prefix packages/resolve-ai-cli
```

### Caracteres acentuados no Windows

Comandos oficiais devem ter aliases sem acento quando aplicável:

```bash
resolve-ai comecar
resolve-ai diagnostico
```

## 6. Não publicar npm nesta fase

A Phase 10 deve preparar publicação, mas não publicar no npm.

Publicação real exige:

- revisão manual;
- nome de pacote disponível;
- versão definida;
- changelog;
- smoke test externo;
- tag Git.
