# pt126 — docs/resolve-ai Generation

---
title: docs/resolve-ai Generation
phase: 4
status: Draft Implementation Directive
path: docs/resolve-ai
---

## 1. Objetivo

Definir os documentos mínimos que o comando `resolve-ai começar` deve criar.

## 2. Diretório humano

```text
docs/resolve-ai/
├── README.md
├── 00-project-intake.md
└── 09-handoff.md
```

## 3. README.md

Conteúdo mínimo:

```markdown
# Resolve Aí neste projeto

Este diretório guarda os documentos do Resolve Aí para este projeto.

O Resolve Aí ajuda a transformar problema, ideia ou projeto em andamento em um plano organizado para construir software com IA.

## Estado inicial

- Criado por: `resolve-ai começar`
- Próximo passo: `resolve-ai ligar`

## Documentos

- `00-project-intake.md`: entrada inicial do projeto.
- `09-handoff.md`: resumo para continuar o trabalho.
```

## 4. 00-project-intake.md

Template mínimo:

```markdown
# 00 — Project Intake

## Nome do projeto

_Preencher._

## O que este projeto tenta resolver?

_Preencher._

## Quem usa?

_Preencher._

## Estado atual

- [ ] Ideia
- [ ] Projeto novo
- [ ] Projeto em andamento
- [ ] Projeto legado

## Próximo passo recomendado

Rodar diagnóstico guiado com Resolve Aí.
```

## 5. 09-handoff.md

Template mínimo:

```markdown
# 09 — Handoff

## Contexto resumido

_Preencher._

## Decisões conhecidas

_Preencher._

## Riscos conhecidos

_Preencher._

## Próxima ação

_Preencher._
```

## 6. Não sobrescrever

Se arquivos já existirem, o CLI não deve sobrescrever.

Em vez disso, deve mostrar:

```text
Alguns documentos já existem. Mantive tudo como está.
```

## 7. Migração futura

Se existir `docs/ai-seos/`, o CLI deve informar que há documentação legada e sugerir migração futura, mas não executar automaticamente na Phase 4.
