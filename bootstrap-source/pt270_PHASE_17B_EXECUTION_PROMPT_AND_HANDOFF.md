# pt270 — Phase 17B Execution Prompt and Handoff

## Prompt para Codex

Cole este prompt no Codex a partir da raiz do repositório Resolve-Ai.

```text
Leia integralmente todos os arquivos Markdown numerados de pt261 a pt270 na raiz do projeto.

Use também README.md, ROADMAP.md, CHANGELOG.md, GOVERNANCE.md, CONTRIBUTING.md, packages/resolve-ai-cli/*, docs/release/*, docs/alpha-validation/*, docs/community/*, docs/sprints/phase-17-* e todos os artefatos anteriores como documentos de governança obrigatórios.

Execute agora a Phase 17B — Non-Technical Builder State Consistency and UX Refinement.

Contexto:
A Phase 17 implementou `resolve-ai entrevistar`, mas o teste limpo com Non-Technical Builder simulado mostrou inconsistências:
- diagnosticar/status recomendam entrevista já feita;
- status mostra Projeto em Andamento mesmo quando diagnóstico diz projeto novo;
- planejar recomenda riscos críticos inexistentes em projeto novo simples;
- preparar gera tarefa vaga apesar de haver entrevista;
- risco aparece como yellow/medio;
- status mostra próximas ações concorrentes;
- confiança baixa aparece sem explicação suficiente.

Objetivo:
Corrigir consistência de estado, próxima ação prioritária, personalização do plano a partir da entrevista, tarefa concreta do MVP e linguagem pública para iniciante.

Escopo obrigatório:
1. Preservar pt261 a pt270 em bootstrap-source/.
2. Criar ou reforçar uma camada central de contexto derivado do estado.
3. Criar ou ajustar motor de próxima ação prioritária.
4. Fazer diagnosticar reconhecer entrevista já feita.
5. Fazer diagnosticar não recomendar `resolve-ai entrevistar` quando a entrevista já existir.
6. Fazer diagnosticar comunicar projeto novo como ponto de partida, não como projeto quebrado.
7. Corrigir status para projeto novo mostrar Projeto do Zero / Non-Technical Builder quando aplicável.
8. Fazer status exibir uma única próxima ação prioritária no topo.
9. Fazer status não exibir recomendações contraditórias com a entrevista feita.
10. Fazer planejar usar nome, ideia, MVP, restrições e fora de escopo da entrevista.
11. Fazer planejar não recomendar riscos críticos quando não houver risco crítico real.
12. Fazer preparar gerar tarefa concreta baseada na entrevista.
13. Fazer resolver manter a mesma tarefa concreta preparada.
14. Padronizar risco público em português: baixo, médio, alto, crítico.
15. Remover `yellow`, `green`, `orange`, `red` da saída pública principal da CLI.
16. Explicar `Confiança: baixa` para projeto novo e validação sem Git.
17. Atualizar teste/feedback.md para incluir `resolve-ai entrevistar`.
18. Atualizar teste/COMECE_AQUI.md, teste/COMANDOS.md e teste/PROMPT_PARA_IA.md para explicar que a pasta teste/ é kit, não diretório de execução.
19. Atualizar documentação runtime e getting started quando necessário.
20. Criar ADRs 0246 a 0255.
21. Criar docs/sprints/phase-17b-non-technical-builder-ux-handoff.md.
22. Criar docs/sprints/phase-17b-non-technical-builder-ux-validation-report.md.
23. Criar docs/sprints/phase-17b-non-technical-builder-ux-retrospective.md.
24. Criar docs/release/v0.1.0-alpha-phase-17b-readiness-scorecard.md.
25. Criar docs/release/v0.1.0-alpha-phase-17b-go-no-go-decision.md.
26. Atualizar README.md, ROADMAP.md, CHANGELOG.md, adr/README.md, docs/architecture/decision-log.md, docs/alpha-validation/README.md, docs/community/README.md, docs/release/README.md e docs/sprints/README.md.

Restrições obrigatórias:
- Não publicar no npm.
- Não criar tag Git.
- Não criar GitHub release.
- Não declarar stable.
- Não implementar MCP.
- Não implementar hooks.
- Não adicionar telemetria.
- Não chamar APIs externas.
- Não coletar dados sensíveis.
- Não enviar feedback automaticamente.
- Não gerar código de produto automaticamente.
- Não alterar safety gates para ficarem mais permissivos.
- Não sobrescrever documentos existentes por padrão.
- Não executar comandos destrutivos.
- Não remover suporte aos perfis Vibe Coder e Professional Engineer.

Testes obrigatórios:
- npm run build --prefix packages/resolve-ai-cli
- npm test --prefix packages/resolve-ai-cli
- npm run smoke --prefix packages/resolve-ai-cli
- npm pack --dry-run dentro de packages/resolve-ai-cli
- git diff --check

Testes de cenário obrigatórios:
1. Projeto novo sem entrevista recomenda `resolve-ai entrevistar`.
2. Projeto novo com entrevista não recomenda `resolve-ai entrevistar` novamente.
3. Status pós-entrevista mostra Projeto do Zero e Non-Technical Builder.
4. Planejar pós-entrevista usa o nome Controle Simples de Gastos.
5. Planejar pós-entrevista não recomenda riscos críticos inexistentes.
6. Preparar pós-entrevista gera tarefa concreta do MVP.
7. Resolver mantém a tarefa concreta do preparar.
8. Validar sem Git explica limitação em linguagem simples.
9. Saída pública não mostra `Risco: yellow`.
10. teste/feedback.md inclui seção `resolve-ai entrevistar`.
11. teste/COMECE_AQUI.md explica que comandos não devem rodar dentro de teste/.
12. Projeto legado com risco sensível continua priorizando segurança.
13. Projeto Vibe Coder existente continua funcionando sem entrevista obrigatória.
14. Professional Engineer não perde detalhes técnicos essenciais.

Cenário manual de validação:
Criar uma pasta limpa fora do repo e executar o fluxo Controle Simples de Gastos:
- começar
- ligar
- entrevistar com respostas via stdin
- diagnosticar
- planejar
- preparar
- resolver
- validar
- status

Resultado esperado:
- diagnosticar não pede entrevista de novo;
- planejar fala do Controle Simples de Gastos;
- preparar cria tarefa concreta, como criar primeira tela ou cadastro de gasto;
- status não mostra Projeto em Andamento;
- status tem uma próxima ação prioritária clara;
- risco aparece em português.

Score:
Partir de 86/100 — LIMITED GO forte.
Recalcular honestamente.
Sem validação humana real adicional, não declarar stable.
Se tudo passar, recomendação esperada: 88/100 — LIMITED GO muito forte.

Commit sugerido:
fix: refine non technical builder ux and state consistency

Faça push se o remote estiver configurado.

Ao final, gere relatório contendo:
- arquivos criados;
- arquivos atualizados;
- comandos afetados;
- inconsistências corrigidas;
- testes executados;
- ADRs criadas;
- score anterior e novo;
- decisão GO / LIMITED GO / NO-GO;
- blockers restantes;
- commit realizado;
- status do push;
- próxima ação recomendada.

Não peça confirmação.
Execute.
```

## Handoff da Phase 17B

### Resultado esperado

Após executar esta fase, o Resolve Aí deve se comportar melhor para o cenário:

```text
Tenho uma ideia simples e não sei programar.
```

A jornada deve parecer contínua:

```text
entrevistar → entender → planejar → preparar tarefa concreta → gerar prompt seguro → validar → status claro
```

### O que validar manualmente depois

Repetir o teste Controle Simples de Gastos e preencher novo `teste/feedback.md`.

### Próxima fase provável

Se a Phase 17B passar:

```text
Phase 18 — Public Alpha Release Candidate
```

Se ainda houver problemas fortes de UX:

```text
Phase 17C — Beginner Flow Polish
```
