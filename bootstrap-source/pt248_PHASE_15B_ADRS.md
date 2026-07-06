# pt248 — Phase 15B ADRs

## 1. Objetivo

Criar ADRs 0216 a 0225 para registrar as decisões arquiteturais, de produto e governança da Phase 15B.

## ADR 0216 — Adopt validation-blocked state for private alpha

### Context

As fases anteriores continuaram gerando documentação e readiness score, mas nenhuma validação real foi executada.

### Decision

Adotar `VALIDATION BLOCKED` como estado formal quando não houver participantes reais disponíveis.

### Consequences

- Evita inflar maturidade.
- Evita loop documental.
- Torna explícito que a próxima ação é operacional/humana.

## ADR 0217 — Require real participants before public npm GO

### Context

A CLI está tecnicamente pronta para uso local, mas ainda não foi validada por usuários reais.

### Decision

Não permitir decisão GO para npm público sem ao menos um usuário real por perfil.

### Consequences

- Maior confiança no alpha público.
- Menor velocidade de release.
- Mais rigor de produto.

## ADR 0218 — Preserve alpha honesty over release velocity

### Context

Projetos open-source podem perder confiança se publicarem cedo demais.

### Decision

Priorizar honestidade sobre velocidade.

### Consequences

- Readiness pode cair mesmo com melhorias técnicas.
- O release público só avança com evidência.

## ADR 0219 — Treat resolver/executar perception as P1 validation item

### Context

Os comandos `resolver` e `executar` podem parecer execução automática para alguns usuários.

### Decision

Tratar confusão relevante sobre esses comandos como P1 para release público.

### Consequences

- Copy deve ser validada.
- GO público depende de entendimento correto.

## ADR 0220 — Separate technical package readiness from product readiness

### Context

`npm pack --dry-run` pode passar mesmo sem validação humana.

### Decision

Separar readiness técnico de readiness de produto.

### Consequences

- Package pode estar pronto tecnicamente, mas release público continua bloqueado.

## ADR 0221 — Use anonymized participant IDs for alpha validation

### Context

Validação real pode envolver pessoas e projetos reais.

### Decision

Usar IDs anonimizados como `P15B-NTB-01`.

### Consequences

- Menor risco de privacidade.
- Rastreabilidade suficiente.

## ADR 0222 — Restrict evidence capture to sanitized artifacts

### Context

Evidências podem conter dados sensíveis.

### Decision

Só registrar evidências sanitizadas.

### Consequences

- Reduz risco de vazamento.
- Pode limitar detalhes de debug.

## ADR 0223 — Allow only small evidence-based fixes during private alpha

### Context

Feedback pode gerar vontade de expandir escopo.

### Decision

Permitir apenas fixes pequenos de copy, docs, package e UX.

### Consequences

- Mantém foco.
- Evita instabilidade antes da validação.

## ADR 0224 — Avoid infinite documentation-only validation loops

### Context

Fases sem participantes reais podem criar documentação infinita.

### Decision

Se a Phase 15B não tiver participantes, a próxima ação principal deve ser recrutamento manual, não nova fase documental.

### Consequences

- Força contato real com usuários.
- Evita falsa sensação de progresso.

## ADR 0225 — Define next-path branching after Phase 15B

### Context

O próximo passo depende do resultado da validação.

### Decision

Usar ramificação:

- GO → Phase 16 Public Alpha Release Execution
- LIMITED GO com feedback parcial → Phase 16A Targeted Alpha Fixes
- VALIDATION BLOCKED → Manual Action: Recruit Participants
- NO-GO → Phase 16C Critical Blocker Resolution

### Consequences

- Próximo passo fica objetivo.
- Evita ambiguidade.
