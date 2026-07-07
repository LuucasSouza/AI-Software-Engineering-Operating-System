# pt269 — Phase 17B ADRs

Este arquivo define as ADRs esperadas para a Phase 17B. Criar os arquivos em `adr/` e atualizar `adr/README.md` e `docs/architecture/decision-log.md`.

## ADR 0246 — Adopt State Consistency Layer for Runtime Commands

### Status
Proposed

### Context
Comandos diferentes interpretavam o estado de forma inconsistente, gerando contradições como entrevista feita e recomendação para entrevistar novamente.

### Decision
Adotar uma camada central de contexto derivado para orientar diagnóstico, planejamento, preparo, execução, validação e status.

### Consequences
- Reduz contradições.
- Facilita testes.
- Exige cuidado para não quebrar fluxos existentes.

## ADR 0247 — Prioritize Single Public Next Action in Status

### Status
Proposed

### Context
O status exibiu várias próximas ações concorrentes, confundindo o usuário iniciante.

### Decision
O status deve exibir uma única próxima ação prioritária no topo, com detalhes secundários abaixo.

### Consequences
- Melhora UX.
- Exige motor de priorização.

## ADR 0248 — Treat New Projects as Starting Points, Not Broken Projects

### Status
Proposed

### Context
Em projeto novo, ausência de README, CI e testes é normal, mas era apresentada como ponto de atenção.

### Decision
Para projeto novo/zero, comunicar ausências como estado inicial esperado, não como problema grave.

### Consequences
- Reduz susto em iniciantes.
- Mantém alertas técnicos para projetos existentes.

## ADR 0249 — Personalize Planning From Interview Scope

### Status
Proposed

### Context
Planejamento pós-entrevista ainda podia ser genérico.

### Decision
O planejamento deve extrair nome, ideia, funcionalidades, restrições e critérios da entrevista para gerar plano e backlog específicos.

### Consequences
- Melhora valor percebido.
- Exige heurística de extração robusta e conservadora.

## ADR 0250 — Generate Concrete MVP Slice for Non-Technical Builder

### Status
Proposed

### Context
`preparar` reconhecia contexto, mas gerava tarefa vaga.

### Decision
Para Non-Technical Builder com entrevista suficiente, gerar uma primeira tarefa concreta do MVP.

### Consequences
- Melhora ação imediata.
- Evita salto para app inteiro.

## ADR 0251 — Use Portuguese Risk Labels in Public CLI Output

### Status
Proposed

### Context
Riscos apareciam como `yellow` em algumas saídas e `medio` em outras.

### Decision
Saídas públicas devem usar `baixo`, `médio`, `alto` e `crítico`. Nomes internos em inglês podem permanecer no código.

### Consequences
- Melhora clareza.
- Exige função de formatação central.

## ADR 0252 — Explain Low Confidence Instead of Only Displaying It

### Status
Proposed

### Context
`Confiança: baixa` sem explicação parecia falha para iniciantes.

### Decision
Sempre que confiança baixa for exibida para Non-Technical Builder, incluir motivo e ação sugerida.

### Consequences
- Reduz ansiedade.
- Aumenta texto de saída, mas com valor explicativo.

## ADR 0253 — Update Test Kit to Include Interview Flow

### Status
Proposed

### Context
O formulário de feedback não incluía explicitamente `entrevistar`, apesar de ser parte central do fluxo atual.

### Decision
Atualizar `teste/` para incluir entrevista no checklist, nos comandos e nos prompts de avaliação.

### Consequences
- Melhora validação futura.
- Evita feedback incompleto.

## ADR 0254 — Keep Git Initialization as Guidance, Not Blocking Step

### Status
Proposed

### Context
Sem Git, validação é limitada. Porém, para usuário iniciante, `git init` como próxima ação prioritária pode interromper o fluxo.

### Decision
Sem Git, explicar limitação e sugerir Git como dica, mas só priorizar Git quando o usuário estiver validando mudanças reais.

### Consequences
- Mantém validação honesta.
- Evita desviar do MVP cedo demais.

## ADR 0255 — Preserve Professional Mode While Simplifying Beginner UX

### Status
Proposed

### Context
Ajustes para Non-Technical Builder não devem empobrecer Professional Engineer.

### Decision
Aplicar simplificação de linguagem por perfil. Manter detalhes técnicos quando o perfil/stack justificar.

### Consequences
- Maior complexidade condicional.
- Melhor adequação a públicos diferentes.
