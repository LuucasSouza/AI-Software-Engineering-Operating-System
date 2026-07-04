# pt122 — CLI Package Structure

---
title: Resolve Aí CLI Package Structure
phase: 4
status: Draft Implementation Directive
cli_name: resolve-ai
---

## 1. Objetivo

Criar a estrutura inicial do pacote da CLI do Resolve Aí em `packages/resolve-ai-cli/`.

## 2. Estrutura recomendada

```text
packages/resolve-ai-cli/
├── package.json
├── tsconfig.json
├── README.md
├── src/
│   ├── index.ts
│   ├── cli.ts
│   ├── commands/
│   │   ├── ajuda.ts
│   │   ├── comecar.ts
│   │   ├── ligar.ts
│   │   ├── desligar.ts
│   │   └── status.ts
│   ├── core/
│   │   ├── paths.ts
│   │   ├── project-detector.ts
│   │   ├── local-state.ts
│   │   ├── docs-writer.ts
│   │   └── output.ts
│   └── types/
│       └── runtime.ts
└── tests/
    ├── local-state.test.ts
    ├── project-detector.test.ts
    └── commands.test.ts
```

## 3. Escolha tecnológica

Recomendação: Node.js + TypeScript.

Motivos:

- baixo atrito para usuários de VS Code, Codex e projetos web;
- fácil distribuição futura via npm;
- compatível com execução local em repositórios JS/TS;
- simples para criar CLI MVP;
- reduz complexidade inicial.

## 4. Dependências recomendadas

Preferir dependências mínimas.

Opções:

- `commander` para comandos;
- `picocolors` para mensagens coloridas leves;
- `vitest` para testes;
- `tsx` para execução em desenvolvimento;
- `typescript` para build.

Evitar no MVP:

- frameworks CLI pesados;
- banco local;
- telemetry;
- prompts interativos complexos;
- dependência de APIs externas.

## 5. package.json esperado

O pacote deve expor o binário:

```json
{
  "name": "resolve-ai-cli",
  "version": "0.1.0-alpha.0",
  "type": "module",
  "bin": {
    "resolve-ai": "dist/index.js"
  }
}
```

## 6. Execução local

A implementação deve permitir testar com:

```bash
npm install
npm run build
node packages/resolve-ai-cli/dist/index.js ajuda
```

ou, em desenvolvimento:

```bash
npm run dev --workspace packages/resolve-ai-cli -- ajuda
```

## 7. Regras de segurança

A CLI não deve:

- apagar arquivos do usuário;
- alterar código-fonte do projeto;
- commitar automaticamente;
- instalar dependências no projeto-alvo;
- enviar dados para serviços externos;
- ler arquivos sensíveis além do necessário para detecção básica.
