---
title: Build Automation and Package Scripts
project: Resolve Aí
phase: 10
status: Draft
version: 0.1.0-alpha-prep
---

# Build Automation and Package Scripts

## 1. Objetivo

Garantir que a CLI `resolve-ai` possa ser compilada, testada e validada com comandos previsíveis, sem depender de atualização manual do diretório `dist/`.

## 2. Problema atual

O relatório da Phase 9 registrou que `tsc` não estava disponível no PATH da sessão e que os arquivos em `dist/` foram atualizados manualmente.

Isso é aceitável durante prototipagem, mas não é aceitável para release alpha.

A partir desta fase, o pacote deve possuir um fluxo explícito:

```bash
npm install
npm run build --prefix packages/resolve-ai-cli
npm test --prefix packages/resolve-ai-cli
```

Ou equivalente documentado.

## 3. Requisitos de package.json

O pacote `packages/resolve-ai-cli/package.json` deve conter scripts claros.

Sugestão mínima:

```json
{
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "node --test tests/*.test.js",
    "smoke": "node dist/index.js ajuda && node dist/index.js status",
    "check": "npm run build && npm test && npm run smoke"
  }
}
```

A implementação deve respeitar a estrutura real do pacote.

Se os testes forem TypeScript ou JavaScript, ajustar scripts sem quebrar o padrão existente.

## 4. tsconfig

Criar ou revisar:

```text
packages/resolve-ai-cli/tsconfig.json
```

Critérios:

- compilar `src/` para `dist/`;
- preservar módulo compatível com o modo atual da CLI;
- gerar código executável localmente;
- evitar dependências externas desnecessárias;
- falhar em erros TypeScript relevantes;
- não incluir testes no build final, salvo decisão documentada.

## 5. Binário local

Garantir que o `package.json` declare o binário:

```json
{
  "bin": {
    "resolve-ai": "dist/index.js"
  }
}
```

O arquivo `dist/index.js` deve possuir shebang quando necessário:

```bash
#!/usr/bin/env node
```

## 6. Política sobre dist/

Como o projeto ainda pode estar em estágio inicial, `dist/` pode continuar versionado por conveniência, mas isso deve estar documentado.

Decisão recomendada para alpha:

- manter `dist/` versionado temporariamente;
- exigir que `dist/` seja gerado por `npm run build` antes de release;
- evitar edição manual de `dist/`.

## 7. Checklist de build

- [ ] `tsconfig.json` existe.
- [ ] `npm run build --prefix packages/resolve-ai-cli` funciona.
- [ ] `dist/` é regenerável.
- [ ] `npm test --prefix packages/resolve-ai-cli` passa.
- [ ] `npm run smoke --prefix packages/resolve-ai-cli` passa.
- [ ] `npm run check --prefix packages/resolve-ai-cli` passa.
- [ ] README do pacote explica os scripts.

## 8. Definition of Done

A fase só passa se o CLI puder ser reconstruído a partir de `src/` sem edição manual de `dist/`.
