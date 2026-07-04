# pt134 — `docs/resolve-ai/` Diagnostic Outputs

```yaml
title: Resolve Aí Diagnostic Documentation Outputs
phase: 5
status: Draft for execution
output_dir: docs/resolve-ai/
```

## 1. Objetivo

Padronizar os documentos que o comando `resolve-ai diagnosticar` deve gerar.

Esses documentos são a base humana do Resolve Aí dentro de um projeto real.

## 2. Diretório oficial

Novo padrão público:

```text
docs/resolve-ai/
```

O diretório antigo `docs/ai-seos/` pode existir por legado, mas a Phase 5 não deve migrá-lo automaticamente.

## 3. Arquivos obrigatórios

### 00 — Project Intake

```text
docs/resolve-ai/00-project-intake.md
```

Conteúdo:

- Nome do projeto.
- Caminho analisado.
- Data do diagnóstico.
- Tipo de projeto detectado.
- Modo recomendado.
- Objetivo aparente.
- Público-alvo aparente.
- Incertezas.

### 01 — Current State Assessment

```text
docs/resolve-ai/01-current-state-assessment.md
```

Conteúdo:

- Estrutura detectada.
- Stack provável.
- Módulos/pastas principais.
- Scripts disponíveis.
- Documentação existente.
- Testes detectados.
- CI detectado.
- Pontos fortes.
- Pontos frágeis.

### 02 — Discovery

```text
docs/resolve-ai/02-discovery.md
```

Conteúdo:

- Problema de negócio inferido.
- Usuários prováveis.
- Dores prováveis.
- Hipóteses.
- Métricas de sucesso sugeridas.
- Perguntas abertas.

### 03 — Product Definition

```text
docs/resolve-ai/03-product-definition.md
```

Conteúdo:

- Visão do produto inferida.
- Funcionalidades existentes aparentes.
- Funcionalidades pendentes aparentes.
- MVP atual.
- Próximos incrementos recomendados.
- O que não fazer agora.

### 04 — Architecture Review

```text
docs/resolve-ai/04-architecture-review.md
```

Conteúdo:

- Arquitetura inferida.
- Frontend.
- Backend.
- Banco/dados.
- Autenticação.
- Integrações.
- Deploy.
- Riscos arquiteturais.
- Recomendações.

### 05 — Risk Register

```text
docs/resolve-ai/05-risk-register.md
```

Conteúdo:

- Riscos técnicos.
- Riscos de produto.
- Riscos de segurança.
- Riscos de manutenção.
- Riscos de custo.
- Riscos de escalabilidade.
- Probabilidade.
- Impacto.
- Mitigação.

### 06 — Decision Log

```text
docs/resolve-ai/06-decision-log.md
```

Conteúdo:

- Decisões detectadas.
- Decisões implícitas.
- Decisões que precisam virar ADR.
- Decisões que parecem arriscadas.
- Decisões que devem ser revisadas.

### 07 — Execution Plan

```text
docs/resolve-ai/07-execution-plan.md
```

Conteúdo:

- Plano de continuação.
- Sprints sugeridas.
- Ordem de execução.
- Dependências.
- Riscos por etapa.
- Critérios de aceite.

### 08 — Backlog

```text
docs/resolve-ai/08-backlog.md
```

Conteúdo:

- Épicos.
- Features.
- Tarefas técnicas.
- Bugs aparentes.
- Melhorias.
- Pendências de documentação.
- Priorização inicial.

### 09 — Handoff

```text
docs/resolve-ai/09-handoff.md
```

Conteúdo:

- Resumo para próximo agente.
- Contexto essencial.
- Decisões conhecidas.
- Riscos.
- Pendências.
- Próxima ação recomendada.

## 4. Estilo dos documentos

Cada documento deve conter:

```markdown
---
title: ...
generated_by: Resolve Aí
command: resolve-ai diagnosticar
generated_at: ...
status: draft
---
```

## 5. Princípio de honestidade

Quando o CLI inferir algo, deve dizer:

```text
Inferido por heurística.
```

Quando não souber, deve dizer:

```text
Não identificado no diagnóstico automático.
```

Nunca inventar certeza.

## 6. Não sobrescrever

Por padrão:

- Se arquivo não existe: criar.
- Se arquivo existe: preservar.
- Registrar no terminal que foi preservado.

## 7. Compatibilidade com IA

Os documentos devem ser fáceis de um agente ler depois:

- Seções previsíveis.
- Tabelas simples.
- Checklists.
- Próximas ações claras.
- Sem excesso de texto irrelevante.
