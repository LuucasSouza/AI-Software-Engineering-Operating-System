---
title: Smoke Tests and CLI Usability
project: Resolve Aí
phase: 10
status: Draft
version: 0.1.0-alpha-prep
---

# Smoke Tests and CLI Usability

## 1. Objetivo

Criar validações rápidas para confirmar que a CLI funciona em cenários reais mínimos.

Testes unitários já existem. Agora precisamos de smoke tests de fluxo.

## 2. Smoke test mínimo

Criar script ou documentação para validar:

```bash
resolve-ai ajuda
resolve-ai status
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai desligar
resolve-ai status
```

Mas a execução automatizada deve ser cuidadosa para não poluir o repositório principal.

## 3. Diretórios temporários

Smoke tests devem rodar em diretórios temporários.

Exemplo conceitual:

```bash
mkdir -p /tmp/resolve-ai-smoke-empty
cd /tmp/resolve-ai-smoke-empty
resolve-ai começar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai status
```

E outro projeto fake:

```bash
mkdir -p /tmp/resolve-ai-smoke-vite
cd /tmp/resolve-ai-smoke-vite
npm init -y
mkdir src
printf '{"scripts":{"dev":"vite"},"dependencies":{"@vitejs/plugin-react":"latest","vite":"latest","react":"latest"}}' > package.json
resolve-ai começar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
```

## 4. Script recomendado

Criar:

```text
packages/resolve-ai-cli/scripts/smoke-test.js
```

Ou equivalente simples.

O script deve:

- criar diretório temporário;
- rodar CLI via `node dist/index.js` ou binário linkado;
- verificar saída básica;
- verificar criação de `.resolve-ai/`;
- verificar criação de `docs/resolve-ai/`;
- limpar diretórios temporários ao final, se seguro;
- nunca rodar no projeto real por engano.

## 5. Validações de usabilidade

A Phase 10 deve revisar mensagens da CLI para garantir que elas sejam:

- brasileiras;
- simples;
- diretas;
- leves;
- não excessivamente técnicas;
- claras quando o Resolve Aí está ligado/desligado;
- honestas sobre limitações.

## 6. UX copy desejada

Exemplo:

```text
Resolve Aí está ligado.
Vou acompanhar este projeto e te ajudar a resolver sem bagunça.
```

```text
Resolve Aí está desligado.
Nada de contexto extra por enquanto. Quando quiser, rode: resolve-ai ligar
```

```text
Diagnóstico criado em docs/resolve-ai/.
Próximo passo sugerido: resolve-ai planejar
```

## 7. Checklist

- [ ] Smoke test para diretório vazio.
- [ ] Smoke test para projeto Node fake.
- [ ] Smoke test para projeto Vite/React fake.
- [ ] Smoke test não altera código de produto.
- [ ] Mensagens estão em português.
- [ ] Comandos principais aparecem no README.
- [ ] `resolve-ai status` mostra próximos passos.

## 8. Definition of Done

A Phase 10 passa se um novo usuário conseguir rodar o CLI localmente, executar o fluxo básico e entender o próximo passo sem ler toda a documentação técnica.
