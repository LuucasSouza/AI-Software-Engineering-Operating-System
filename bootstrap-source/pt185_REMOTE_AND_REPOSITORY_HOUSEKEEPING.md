---
title: Remote and Repository Housekeeping
project: Resolve Aí
phase: 10
status: Draft
version: 0.1.0-alpha-prep
---

# Remote and Repository Housekeeping

## 1. Contexto

O GitHub informou que o repositório foi movido para:

```text
https://github.com/LuucasSouza/Resolve-Ai.git
```

Mas o remote local ainda pode estar apontando para o endereço antigo.

## 2. Objetivo

Atualizar o repositório local para apontar para o destino correto e documentar o processo.

## 3. Comandos recomendados

Verificar remote:

```bash
git remote -v
```

Atualizar remote:

```bash
git remote set-url origin https://github.com/LuucasSouza/Resolve-Ai.git
```

Validar:

```bash
git remote -v
git status
git fetch origin
```

## 4. Regras de segurança

- Não forçar push.
- Não reescrever histórico nesta fase.
- Não renomear branches sem necessidade.
- Não mexer em tags existentes sem confirmação.
- Não alterar GitHub settings via automação.

## 5. Atualizações no README

O README deve apontar para o novo repositório.

Verificar referências antigas:

```text
AI-Software-Engineering-Operating-System
```

Elas só devem permanecer quando forem históricas ou técnicas.

## 6. GitHub templates

Garantir que continuam existentes:

```text
.github/ISSUE_TEMPLATE/
.github/PULL_REQUEST_TEMPLATE.md
```

## 7. Repository hygiene

Adicionar ou revisar `.gitignore` para:

```text
.resolve-ai/state.json
.resolve-ai/cache/
.resolve-ai/tmp/
node_modules/
*.log
.DS_Store
.env
.env.*
```

Mas atenção: não ignorar documentação humana gerada em `docs/resolve-ai/` por padrão, pois ela pode ser útil e versionável em projetos reais.

## 8. Checklist

- [ ] `origin` aponta para `Resolve-Ai`.
- [ ] README usa URLs corretas.
- [ ] ROADMAP não aponta para repositório antigo como destino principal.
- [ ] `.gitignore` protege estado local e secrets.
- [ ] Nenhum arquivo sensível foi adicionado.
- [ ] GitHub issue/PR templates continuam presentes.
