---
title: Runtime State and Config Policy
project: Resolve Aí
phase: 10
status: Draft
version: 0.1.0-alpha-prep
---

# Runtime State and Config Policy

## 1. Contexto

A CLI cria estado local em:

```text
.resolve-ai/
```

E documentação humana em:

```text
docs/resolve-ai/
```

A política precisa ficar clara antes de release alpha.

## 2. Princípio

`.resolve-ai/` é runtime local.

`docs/resolve-ai/` é documentação do projeto.

## 3. O que versionar

Recomendação:

### Não versionar por padrão

```text
.resolve-ai/state.json
.resolve-ai/cache/
.resolve-ai/tmp/
.resolve-ai/session/
```

Motivo:

- pode conter caminhos locais;
- pode conter estado transitório;
- pode variar entre máquinas;
- pode gerar ruído em commits.

### Pode versionar

```text
.resolve-ai/config.json
```

Mas com cautela.

Se `config.json` contiver apenas preferências seguras, pode ser versionado.

Se contiver dados locais/sensíveis, deve ser ignorado.

## 4. Política recomendada para alpha

Durante alpha:

- ignorar `state.json`;
- permitir `config.json`, mas sem secrets;
- documentar que `.resolve-ai/config.json` não deve conter tokens;
- nunca gravar credenciais;
- nunca copiar conteúdo de arquivos sensíveis para estado.

## 5. docs/resolve-ai/

Documentos gerados em `docs/resolve-ai/` podem ser versionados no projeto analisado quando o time quiser manter rastreabilidade.

Porém, a CLI deve evitar copiar dados pessoais ou segredos.

## 6. Segurança

Regras:

- não salvar conteúdo de `.env`;
- não salvar tokens;
- não salvar chaves;
- não salvar dumps;
- não salvar dados pessoais detectados;
- registrar apenas sinais e caminhos, quando necessário;
- avisar usuário sobre risco.

## 7. Checklist

- [ ] `.gitignore` ignora `state.json`.
- [ ] README explica `.resolve-ai/`.
- [ ] README explica `docs/resolve-ai/`.
- [ ] Nenhum comando grava secrets.
- [ ] Config schema está documentado.
- [ ] Estado local é resiliente a arquivo inexistente ou inválido.

## 8. Definition of Done

A Phase 10 deve deixar claro para usuários e contribuidores o que é estado local, o que é documentação versionável e o que nunca deve ser salvo.
