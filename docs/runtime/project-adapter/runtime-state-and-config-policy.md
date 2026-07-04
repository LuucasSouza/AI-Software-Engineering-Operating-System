---
title: "Runtime State and Config Policy"
status: "Draft"
version: "0.1.0-alpha"
phase: "Phase 10"
---

# Runtime State and Config Policy

## Princípio

`.resolve-ai/` é runtime local.

`docs/resolve-ai/` é memória documental humana do projeto.

## `.resolve-ai/`

Durante alpha:

- `.resolve-ai/state.json` deve ser tratado como estado local transitório.
- `.resolve-ai/cache/`, `.resolve-ai/tmp/` e `.resolve-ai/session/` devem ser ignorados.
- `.resolve-ai/config.json` pode ser versionado quando não contiver dados locais sensíveis.
- Nenhum comando deve gravar tokens, secrets, dumps ou dados pessoais.

## `docs/resolve-ai/`

Os documentos em `docs/resolve-ai/` podem ser versionados quando o time quiser manter rastreabilidade.

Eles representam:

- intake;
- diagnóstico;
- planejamento;
- preparo;
- execução assistida;
- validação;
- handoff.

## Segurança

O Resolve Aí deve registrar apenas sinais e caminhos quando detectar arquivos sensíveis.

Não copiar conteúdo de:

- `.env`;
- chaves;
- tokens;
- dumps;
- dados pessoais;
- arquivos de backup;
- planilhas sensíveis.

## Gitignore recomendado

```text
.resolve-ai/state.json
.resolve-ai/cache/
.resolve-ai/tmp/
.resolve-ai/session/
.env
.env.*
!.env.example
```

## Responsabilidade do usuário

Antes de commit, revise:

- `git status`;
- `docs/resolve-ai/28-riscos-pos-execucao.md`;
- arquivos sensíveis detectados;
- conteúdo documental que possa expor dados reais.
