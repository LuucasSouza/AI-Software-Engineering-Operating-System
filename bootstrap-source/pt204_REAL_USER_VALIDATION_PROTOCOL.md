# pt204 — Real User Validation Protocol

## 1. Objetivo

Validar o Resolve Aí com pessoas reais antes de public alpha.

A Phase 11 foi simulação local. A Phase 12 precisa separar claramente:

- validação automatizada;
- validação simulada;
- validação com usuário real;
- decisão de release.

## 2. Perfis obrigatórios

### 2.1 Non-Technical Builder

Pessoa que tem uma ideia ou problema, mas não programa profissionalmente.

Critérios de validação:

- entende o que o Resolve Aí faz?
- entende o fluxo `começar → diagnosticar → planejar`?
- consegue interpretar os documentos gerados?
- a linguagem parece brasileira e acessível?
- fica assustada com termos técnicos?

### 2.2 Vibe Coder

Pessoa que usa IA para construir, mas nem sempre tem processo.

Critérios de validação:

- entende o valor de diagnóstico antes de mexer no código?
- aceita rodar `preparar`, `resolver`, `validar`?
- os prompts gerados ajudam a usar Codex/Claude/Copilot?
- sente que o framework reduz bagunça?

### 2.3 Professional Engineer

Dev, arquiteto, tech lead ou pessoa técnica.

Critérios de validação:

- confia no fluxo?
- acha os docs úteis ou verbosos demais?
- percebe safety gates suficientes?
- vê valor em ADRs, riscos, plano e handoff?
- usaria em projeto real?

## 3. Regras de privacidade

Não coletar:

- código proprietário;
- dados sensíveis;
- chaves;
- dumps;
- `.env`;
- arquivos de cliente;
- informação pessoal desnecessária.

Coletar apenas:

- perfil do usuário;
- cenário usado;
- comandos executados;
- confusões observadas;
- feedback textual autorizado;
- bugs percebidos;
- nota de clareza;
- nota de utilidade;
- recomendação do avaliador.

## 4. Roteiro de validação

### 4.1 Preparação

Entregar ao usuário:

```text
Você vai testar uma ferramenta chamada Resolve Aí.
Ela ajuda a organizar uma ideia ou projeto antes de sair mexendo no código.
Não coloque dados sensíveis no teste.
```

### 4.2 Tarefa base

Pedir para o usuário rodar ou acompanhar:

```bash
resolve-ai ajuda
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
```

### 4.3 Perguntas pós-teste

1. O que você acha que o Resolve Aí faz?
2. Em que momento você ficou confuso?
3. Qual comando fez mais sentido?
4. Qual comando pareceu desnecessário?
5. Os textos estão brasileiros e naturais?
6. Você confiaria em usar isso num projeto real?
7. O que você mudaria antes de indicar para alguém?
8. Nota de clareza: 0 a 10.
9. Nota de utilidade: 0 a 10.
10. Recomendação: publicar alpha, adiar ou bloquear?

## 5. Documento de registro

Criar um arquivo por validação em:

```text
docs/alpha-validation/real-users/
```

Nome sugerido:

```text
YYYY-MM-DD-profile-shortname-validation.md
```

Exemplo:

```text
2026-07-04-vibe-coder-user-01-validation.md
```

## 6. Template obrigatório

```md
# Real User Validation — <profile> — <date>

## 1. Metadata

- Profile:
- Scenario:
- Facilitator:
- Date:
- Version/commit tested:
- Environment:
- Sensitive data used: no

## 2. Commands tested

- [ ] ajuda
- [ ] começar
- [ ] ligar
- [ ] diagnosticar
- [ ] planejar
- [ ] preparar
- [ ] resolver
- [ ] validar
- [ ] status

## 3. Observations

## 4. Confusions

## 5. Positive feedback

## 6. Negative feedback

## 7. Bugs found

## 8. Scores

- Clarity: /10
- Utility: /10
- Trust: /10
- Brazilian tone: /10

## 9. Release recommendation

- [ ] Approve public alpha
- [ ] Private alpha only
- [ ] Block release

## 10. Follow-up actions
```

## 7. Critério de aprovação mínima

Para public alpha, recomendado:

- 3 perfis validados, ou
- pelo menos 1 usuário real validado + pendência explícita para ampliar alpha controlada.

Critério ideal:

| Perfil | Mínimo |
|---|---:|
| Non-Technical Builder | 1 pessoa |
| Vibe Coder | 1 pessoa |
| Professional Engineer | 1 pessoa |

## 8. Regra de decisão

Se nenhum usuário real foi validado:

```text
Release público npm deve permanecer bloqueado.
```

Se apenas um usuário real foi validado:

```text
Pode seguir para private alpha ampliada, mas public alpha/npm deve exigir decisão explícita do mantenedor.
```

Se três perfis foram validados sem P0/P1 bloqueante:

```text
Pode preparar public alpha release execution.
```
