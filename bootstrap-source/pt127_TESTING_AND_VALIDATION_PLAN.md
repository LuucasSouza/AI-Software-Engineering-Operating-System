# pt127 — Testing and Validation Plan

---
title: Phase 4 CLI MVP Testing and Validation Plan
phase: 4
status: Draft Implementation Directive
---

## 1. Objetivo

Garantir que o MVP da CLI funcione sem quebrar projetos reais.

## 2. Testes mínimos

Criar testes para:

- criação de paths;
- leitura/escrita de config;
- leitura/escrita de state;
- idempotência de `começar`;
- `ligar` em projeto iniciado;
- `desligar` em projeto iniciado;
- `status` em projeto não iniciado;
- `status` em projeto iniciado desligado;
- `status` em projeto iniciado ligado.

## 3. Testes manuais obrigatórios

Criar diretórios temporários para validar:

```text
/tmp/resolve-ai-test-empty
/tmp/resolve-ai-test-existing
/tmp/resolve-ai-test-with-docs-ai-seos
```

## 4. Cenários

### Cenário A — projeto vazio

```bash
resolve-ai status
resolve-ai começar
resolve-ai status
resolve-ai ligar
resolve-ai status
resolve-ai desligar
resolve-ai status
```

### Cenário B — projeto existente

Executar os mesmos comandos em um projeto com `package.json` e README.

### Cenário C — projeto com docs antigos

Se existir `docs/ai-seos/`, a CLI deve avisar que existe documentação legada, sem apagar nada.

## 5. Critérios de aprovação

- nenhum arquivo de código do projeto-alvo é alterado;
- `.resolve-ai/` é criado corretamente;
- `docs/resolve-ai/` é criado corretamente;
- comandos são idempotentes;
- saída é amigável e em português;
- não há stack trace para usuário em erro comum.

## 6. Relatório

Criar:

```text
docs/sprints/phase-4-validation-report.md
```

Com:

- comandos testados;
- resultados;
- problemas encontrados;
- riscos remanescentes;
- recomendação para Phase 5.
