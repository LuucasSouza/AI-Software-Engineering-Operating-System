# pt243 — Participant Session Artifacts

## 1. Propósito

Este documento define os artefatos de sessão que a Phase 15B deve criar para registrar validação real com participantes do alpha privado.

## 2. Diretório canônico

Criar ou atualizar:

```text
docs/alpha-validation/private-alpha/phase-15b/
```

## 3. Artefatos obrigatórios

### 3.1 Plano da rodada

Arquivo:

```text
docs/alpha-validation/private-alpha/phase-15b/second-round-validation-plan.md
```

Conteúdo mínimo:

- objetivo da rodada;
- perfis;
- critérios de sucesso;
- critérios de rejeição;
- riscos;
- escopo;
- não escopo;
- regra anti-loop;
- versão testada.

### 3.2 Registro de recrutamento

Arquivo:

```text
docs/alpha-validation/private-alpha/phase-15b/recruitment-tracker.md
```

Campos:

| Campo | Descrição |
|---|---|
| Participant ID | ID anonimizado |
| Perfil | NTB / VC / PE |
| Status | convidado / agendado / executado / cancelado / pendente |
| Data | data da sessão se houver |
| Projeto usado | simulado / real sanitizado / não aplicável |
| Consentimento | sim / não / pendente |
| Observações | sem dados sensíveis |

### 3.3 Roteiro do moderador

Arquivo:

```text
docs/alpha-validation/private-alpha/phase-15b/moderator-runbook.md
```

Deve conter:

- preparação;
- comandos a executar;
- perguntas;
- instruções para não ajudar demais;
- sinais de confusão;
- sinais de risco;
- encerramento.

### 3.4 Relatórios por perfil

Arquivos:

```text
docs/alpha-validation/private-alpha/phase-15b/session-p15b-ntb-01.md
docs/alpha-validation/private-alpha/phase-15b/session-p15b-vc-01.md
docs/alpha-validation/private-alpha/phase-15b/session-p15b-pe-01.md
```

Cada relatório deve conter:

- status da sessão;
- participante anonimizado;
- perfil;
- contexto sanitizado;
- comandos executados;
- resultado;
- feedback;
- achados;
- severidades;
- score parcial;
- decisão parcial.

### 3.5 Evidências permitidas

Arquivo:

```text
docs/alpha-validation/private-alpha/phase-15b/evidence-register.md
```

Registrar apenas evidências seguras:

- print textual sanitizado;
- trecho de feedback curto e anonimizado;
- resultado de comando sem dados privados;
- nota observacional do moderador.

Não registrar:

- nomes;
- e-mails;
- caminhos com nomes pessoais;
- repositórios privados;
- tokens;
- `.env`;
- dumps;
- prints com dados sensíveis;
- logs com credenciais.

### 3.6 Consolidação

Arquivo:

```text
docs/alpha-validation/private-alpha/phase-15b/second-round-consolidated-results.md
```

Conteúdo:

- total de participantes;
- sessões executadas;
- sessões pendentes;
- principais achados;
- achados por severidade;
- score por perfil;
- recomendações;
- decisão.

### 3.7 Scorecard por perfil

Arquivo:

```text
docs/alpha-validation/private-alpha/phase-15b/profile-scorecard.md
```

Dimensões:

- entendimento da proposta;
- clareza dos comandos;
- percepção de segurança;
- valor percebido;
- adequação da linguagem;
- confiança para usar;
- fricção de instalação;
- qualidade dos docs gerados.

## 4. Modelo de relatório de sessão

```markdown
# Phase 15B — Session Report: <Participant ID>

## 1. Metadata

- Participant ID:
- Profile:
- Date:
- Session status:
- Moderator:
- Project type:
- CLI version/commit:

## 2. Consent and privacy

- Consent recorded:
- Sensitive data avoided:
- Notes:

## 3. Scenario

## 4. Commands executed

## 5. Observations

## 6. Participant feedback

## 7. Confusion points

## 8. Safety perception

## 9. Command perception

### resolver

### executar

### validar

## 10. Artifacts perception

## 11. Issues found

| ID | Severity | Description | Suggested action |
|---|---|---|---|

## 12. Profile score

| Dimension | Score 1-5 | Notes |
|---|---:|---|

## 13. Session decision

- PASS:
- PASS WITH FIXES:
- FAIL:
- NOT EXECUTED:

## 14. Next action
```

## 5. Resultado sem participantes

Se nenhum participante real for executado, ainda criar os arquivos, mas marcar:

```text
Status: NOT EXECUTED — participant not available
```

E registrar decisão:

```text
VALIDATION BLOCKED
```

em vez de fingir avanço real.

## 6. Critério de qualidade

A qualidade desta fase não é medida pelo número de páginas geradas.

A qualidade é medida por:

- evidência real;
- honestidade;
- clareza dos blockers;
- proteção de dados;
- decisão correta.
