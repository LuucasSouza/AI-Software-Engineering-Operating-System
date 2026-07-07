# pt262 — State Consistency Model

## 1. Problema

O teste pós-Phase17 mostrou que comandos diferentes interpretam o estado de maneiras diferentes.

Exemplo observado:

- A entrevista foi feita.
- O status mostra `Entrevista: feita`.
- Mesmo assim, o diagnóstico/status ainda recomendam `resolve-ai entrevistar`.

Outro exemplo:

- O diagnóstico classifica o projeto como `novo`.
- O modo recomendado é `Non-Technical Builder`.
- O status exibe `Projeto em Andamento — Diagnóstico e Continuação`.

Isso cria perda de confiança. O usuário iniciante não sabe qual mensagem considerar verdadeira.

## 2. Objetivo

Criar uma camada simples de consistência de estado para que todos os comandos usem as mesmas regras de priorização.

## 3. Estado canônico

O arquivo `.resolve-ai/state.json` deve ser tratado como registro de fatos recentes, não como fonte absoluta de estratégia. A estratégia deve ser derivada de um `runtimeContext` normalizado.

### 3.1 Campos relevantes

Verificar e consolidar os seguintes campos:

```ts
type ResolveAiRuntimeState = {
  isActive?: boolean;
  currentMode?: string;
  lastDiagnostic?: DiagnosticState;
  lastInterview?: InterviewState;
  lastPlanning?: PlanningState;
  lastPreparedTask?: PreparedTaskState;
  lastAssistedExecution?: AssistedExecutionState;
  lastValidation?: ValidationState;
  updatedAt?: string;
};
```

Se os nomes reais diferirem, adaptar ao código existente sem migrar desnecessariamente o formato.

## 4. Runtime Context Derivado

Criar ou reforçar uma função central, por exemplo:

```ts
buildRuntimeContext(projectRoot: string): RuntimeContext
```

ou equivalente.

Ela deve derivar:

```ts
type RuntimeContext = {
  isActive: boolean;
  hasInterview: boolean;
  interviewSummary?: string;
  projectKind: 'zero' | 'new' | 'existing' | 'legacy' | 'unknown';
  recommendedProfile: 'Non-Technical Builder' | 'Vibe Coder' | 'Professional Engineer' | 'Unknown';
  flowName: string;
  hasDiagnostic: boolean;
  hasPlanning: boolean;
  hasPreparedTask: boolean;
  hasAssistedExecution: boolean;
  hasValidation: boolean;
  hasGit: boolean;
  hasRealProjectChanges?: boolean;
  hasCriticalRisk: boolean;
  primaryNextAction: NextAction;
};
```

## 5. Regras de precedência

### 5.1 Projeto novo com entrevista feita

Se:

```text
projectKind = new/zero
hasInterview = true
```

Então:

- Não recomendar `entrevistar` como próxima ação obrigatória.
- `diagnosticar` pode mencionar: "Entrevista já registrada".
- `planejar` deve usar a entrevista.
- `status` deve mostrar fluxo: `Projeto do Zero — Entrevista e Planejamento`.

### 5.2 Projeto novo sem entrevista

Se:

```text
projectKind = new/zero
hasInterview = false
```

Então a próxima ação pode ser:

```text
Rode resolve-ai entrevistar para transformar sua ideia em escopo inicial.
```

### 5.3 Projeto existente sem entrevista

Se:

```text
projectKind = existing/legacy
```

Então a entrevista é opcional. O diagnóstico deve continuar sendo o centro do fluxo.

### 5.4 Validação sem Git

Se não houver Git:

- `validar` deve explicar que a comparação é limitada.
- `status` pode indicar Git como melhoria, mas não deve bloquear a próxima ação principal do fluxo de projeto novo se o usuário ainda não executou a tarefa.

Exemplo:

```text
Próxima ação prioritária: use o prompt final no seu agente de IA.
Dica: quando quiser comparar mudanças com precisão, rode git init.
```

Não colocar `git init` como próxima ação prioritária se a tarefa ainda nem foi executada.

## 6. Next Action Engine

Criar ou ajustar uma função central:

```ts
getPrimaryNextAction(context: RuntimeContext): NextAction
```

### 6.1 Shape sugerido

```ts
type NextAction = {
  title: string;
  command?: string;
  explanation: string;
  priority: 'primary' | 'secondary';
  audience: 'beginner' | 'technical' | 'all';
};
```

### 6.2 Ordem de prioridade sugerida

1. Se desligado: ligar.
2. Se projeto novo sem entrevista: entrevistar.
3. Se entrevista feita e sem planejamento: planejar.
4. Se planejamento feito e sem tarefa preparada: preparar.
5. Se tarefa preparada e sem execução assistida: resolver.
6. Se execução assistida feita e tarefa ainda não executada: usar prompt final no agente de IA.
7. Se execução manual/assistida foi registrada: validar.
8. Se validação sem Git mas ainda sem execução real: manter próxima ação da execução, e Git como dica secundária.
9. Se validação com bloqueio real: revisar bloqueio.
10. Se fluxo concluído: revisar status e escolher próxima fatia.

## 7. Atualização do status

O comando `status` deve usar o `primaryNextAction` gerado pelo motor central.

No topo:

```text
Próxima ação prioritária:
<ação principal>

Por quê:
<explicação simples>
```

Abaixo, o status pode listar detalhes por seção, mas sem competir com o topo.

## 8. Atualização do diagnóstico

O diagnóstico deve usar `hasInterview` para não recomendar entrevista duplicada.

Exemplo para projeto novo com entrevista feita:

```text
Entrevista: feita
Ideia registrada: Controle Simples de Gastos

Próximas ações:
1. Criar plano do MVP com base na entrevista
2. Preparar a primeira tarefa pequena
3. Só então usar o prompt final no agente de IA
```

Exemplo para projeto novo sem entrevista:

```text
Próximas ações:
1. Rodar resolve-ai entrevistar
2. Responder as perguntas básicas da ideia
3. Criar plano do MVP
```

## 9. Testes obrigatórios

Criar testes unitários cobrindo:

1. Projeto novo sem entrevista recomenda entrevista.
2. Projeto novo com entrevista não recomenda entrevista.
3. Status em projeto novo mostra fluxo correto.
4. Status em projeto novo com entrevista mostra `Projeto do Zero`.
5. Validação sem Git não toma prioridade indevida antes da execução.
6. Projeto existente continua podendo pular entrevista.
7. `primaryNextAction` é único e coerente.

## 10. Critério de aceite

A frase `Rodar resolve-ai entrevistar` não deve aparecer como próxima ação principal depois que `lastInterview` existir e estiver válida.

A frase `Projeto em Andamento — Diagnóstico e Continuação` não deve aparecer como modo atual quando o último diagnóstico classifica o projeto como novo e Non-Technical Builder.
