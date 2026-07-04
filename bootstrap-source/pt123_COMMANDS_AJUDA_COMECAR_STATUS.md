# pt123 — Comandos ajuda, começar e status

---
title: Resolve Aí CLI Core Commands
phase: 4
status: Draft Implementation Directive
commands:
  - ajuda
  - começar
  - comecar
  - status
---

## 1. Objetivo

Definir os comandos públicos iniciais do Resolve Aí.

O Resolve Aí deve ser brasileiro, simples e leve. Portanto, os comandos oficiais devem estar em português.

## 2. Comando `ajuda`

### Uso

```bash
resolve-ai ajuda
```

### Saída esperada

```text
Resolve Aí
Me dá o problema ou a ideia, e eu te ajudo a resolver.

Comandos disponíveis:
  resolve-ai começar      Prepara o Resolve Aí neste projeto
  resolve-ai ligar        Liga o Resolve Aí neste projeto
  resolve-ai desligar     Desliga para economizar contexto e tokens
  resolve-ai status       Mostra como o Resolve Aí está neste projeto
  resolve-ai ajuda        Mostra esta ajuda
```

## 3. Comando `começar`

### Uso

```bash
resolve-ai começar
```

Também deve aceitar alias sem acento:

```bash
resolve-ai comecar
```

### Objetivo

Preparar o projeto atual para uso com Resolve Aí.

### Ações obrigatórias

- detectar diretório atual;
- criar `.resolve-ai/` se não existir;
- criar `.resolve-ai/config.json` se não existir;
- criar `.resolve-ai/state.json` se não existir;
- criar `docs/resolve-ai/` se não existir;
- criar `docs/resolve-ai/README.md` se não existir;
- criar documentos iniciais se não existirem:
  - `00-project-intake.md`
  - `09-handoff.md`
- não sobrescrever documentos existentes sem confirmação ou sem backup;
- imprimir próximos passos.

### Saída esperada

```text
Resolve Aí começou neste projeto.

Criei:
  .resolve-ai/
  docs/resolve-ai/

Modo atual: desligado
Próximo passo: rode `resolve-ai ligar` quando quiser que eu acompanhe o projeto.
```

## 4. Comando `status`

### Uso

```bash
resolve-ai status
```

### Objetivo

Mostrar o estado atual do Resolve Aí no projeto.

### Informações mínimas

- se `.resolve-ai/` existe;
- se `docs/resolve-ai/` existe;
- se está ligado ou desligado;
- modo atual, se existir;
- data da última atualização;
- próxima ação sugerida.

### Saída esperada se não iniciado

```text
Resolve Aí ainda não começou neste projeto.

Rode:
  resolve-ai começar
```

### Saída esperada se iniciado e desligado

```text
Resolve Aí está preparado, mas desligado.

Para ligar:
  resolve-ai ligar
```

### Saída esperada se ligado

```text
Resolve Aí está ligado neste projeto.
Modo atual: Projeto em Andamento — Diagnóstico e Continuação
Docs: docs/resolve-ai/
Estado: .resolve-ai/state.json
```
