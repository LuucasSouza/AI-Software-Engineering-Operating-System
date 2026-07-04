# pt132 — `resolve-ai diagnosticar` Command Specification

```yaml
title: Resolve Aí Diagnostic Command Specification
phase: 5
status: Draft for execution
command: resolve-ai diagnosticar
aliases:
  - resolve-ai diagnóstico
  - resolve-ai diagnostico
```

## 1. Objetivo do comando

O comando `resolve-ai diagnosticar` executa uma análise local, segura e não destrutiva do projeto atual, criando documentação inicial em `docs/resolve-ai/`.

Ele deve funcionar como o primeiro comando útil para projetos existentes.

## 2. Experiência desejada

```bash
resolve-ai diagnosticar
```

Saída esperada:

```text
🔎 Resolve Aí — Diagnóstico do projeto

Vou analisar este projeto sem alterar o código.

✓ Estrutura do projeto lida
✓ Stack provável detectada
✓ Modo recomendado definido
✓ docs/resolve-ai/ criado
✓ Documentos 00 a 09 gerados

Resumo:
- Tipo: Projeto em andamento
- Modo recomendado: Professional Engineer
- Stack: React + Vite + TypeScript
- Próxima ação: revisar docs/resolve-ai/07-execution-plan.md
```

## 3. Comandos e aliases

Implementar:

```bash
resolve-ai diagnosticar
```

Aceitar também:

```bash
resolve-ai diagnostico
resolve-ai diagnóstico
```

O alias com acento é desejável, mas o sem acento é obrigatório por compatibilidade com terminais.

## 4. Opções do MVP

O MVP deve suportar no máximo opções simples:

```bash
resolve-ai diagnosticar --forcar
resolve-ai diagnosticar --modo profissional
resolve-ai diagnosticar --modo vibe-coder
resolve-ai diagnosticar --modo leigo
```

Se o escopo ficar grande, priorizar sem opções e documentar opções futuras.

## 5. Regras de segurança

O comando deve:

- Não modificar arquivos de código.
- Não deletar arquivos.
- Não instalar dependências.
- Não executar scripts do projeto analisado.
- Não fazer commit.
- Não fazer push.
- Não ler arquivos grandes integralmente.
- Não imprimir segredos no terminal.
- Não copiar conteúdo sensível para documentação.

## 6. Arquivos que pode ler

Leitura permitida:

- `README.md`
- `package.json`
- `tsconfig.json`
- `vite.config.*`
- `next.config.*`
- `astro.config.*`
- `nuxt.config.*`
- `svelte.config.*`
- `supabase/config.toml`
- `firebase.json`
- `vercel.json`
- `netlify.toml`
- `.github/workflows/*` apenas nomes e metadados básicos
- estrutura de diretórios relevantes
- nomes de arquivos em `src/`, `app/`, `pages/`, `components/`, `lib/`, `services/`, `functions/`

## 7. Arquivos que não deve ler integralmente

Evitar leitura integral de:

- `.env`
- `.env.local`
- dumps de banco
- CSVs grandes
- backups
- arquivos em `node_modules/`
- `.git/`
- `dist/`
- `build/`
- `coverage/`
- imagens, vídeos e binários

O comando pode registrar que encontrou arquivos sensíveis, sem copiar conteúdo.

## 8. Saídas obrigatórias

O comando deve gerar:

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

Se os arquivos já existirem, não sobrescrever por padrão.

Com `--forcar`, sobrescrever apenas após criar backup em:

```text
docs/resolve-ai/.backup/<timestamp>/
```

Se o `--forcar` for considerado grande demais para o MVP, documentar como pendência.

## 9. Atualização de estado local

Atualizar `.resolve-ai/state.json` com:

```json
{
  "ultimoComando": "diagnosticar",
  "ultimoDiagnosticoEm": "<ISO_DATE>",
  "modoRecomendado": "Projeto em Andamento — Diagnóstico e Continuação",
  "tipoProjeto": "em-andamento",
  "documentosGerados": [
    "docs/resolve-ai/00-project-intake.md"
  ]
}
```

## 10. Definition of Done

O comando está pronto quando:

- Roda em diretório vazio.
- Roda em projeto Node/Vite simples.
- Roda em projeto com `docs/ai-seos/` legado sem migrar automaticamente.
- Cria `docs/resolve-ai/00` a `09`.
- Não sobrescreve documentos existentes.
- Não altera código.
- Atualiza state local.
- Tem testes automatizados.
- Tem documentação no README do pacote CLI.
