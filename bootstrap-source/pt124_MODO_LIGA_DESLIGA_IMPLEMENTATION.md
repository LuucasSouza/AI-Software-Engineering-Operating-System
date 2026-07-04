# pt124 — Modo Liga/Desliga Implementation

---
title: Modo Liga/Desliga Implementation
phase: 4
status: Draft Implementation Directive
commands:
  - ligar
  - desligar
---

## 1. Objetivo

Implementar o Modo Liga/Desliga como primeiro mecanismo de controle do runtime.

O conceito público é simples:

> Ligou, o Resolve Aí acompanha o projeto. Desligou, ele para de interferir e economiza contexto.

## 2. Comando `ligar`

### Uso

```bash
resolve-ai ligar
```

### Comportamento

Se o projeto ainda não foi iniciado, o comando deve orientar:

```text
Resolve Aí ainda não começou neste projeto.
Rode primeiro: resolve-ai começar
```

Se já foi iniciado, deve atualizar `.resolve-ai/state.json`:

```json
{
  "active": true,
  "lastActivatedAt": "ISO_DATE",
  "lastUpdatedAt": "ISO_DATE"
}
```

### Saída pública

```text
Resolve Aí ligado.
Vou acompanhar este projeto, organizar contexto e ajudar a resolver sem bagunça.
```

## 3. Comando `desligar`

### Uso

```bash
resolve-ai desligar
```

### Comportamento

Atualizar `.resolve-ai/state.json`:

```json
{
  "active": false,
  "lastDeactivatedAt": "ISO_DATE",
  "lastUpdatedAt": "ISO_DATE"
}
```

### Saída pública

```text
Resolve Aí desligado.
Vou parar de injetar contexto e economizar tokens. Quando quiser, é só ligar de novo.
```

## 4. Regras

- `ligar` não deve iniciar diagnóstico completo automaticamente no MVP.
- `desligar` não deve apagar `.resolve-ai/`.
- `desligar` não deve apagar `docs/resolve-ai/`.
- Estado deve persistir.
- Comandos devem ser idempotentes.

## 5. Casos esperados

### Ligar duas vezes

Deve responder sem erro:

```text
Resolve Aí já estava ligado.
```

### Desligar duas vezes

Deve responder sem erro:

```text
Resolve Aí já estava desligado.
```

## 6. Token saving

Na Phase 4, economia de token é conceitual e operacional: o estado `active: false` indica para agentes e integrações futuras que o Resolve Aí não deve injetar contexto pesado.

Na Phase 5, esse estado poderá controlar hooks, MCP tools e agent instructions.
