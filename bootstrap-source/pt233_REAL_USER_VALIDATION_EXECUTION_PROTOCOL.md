# pt233 — Real User Validation Execution Protocol

## 1. Objetivo

Definir como executar, registrar e validar sessões reais de alpha privado com os três perfis oficiais do Resolve Aí.

Esta fase deve gerar evidência, não marketing.

## 2. Princípios da sessão

1. Observar antes de explicar demais.
2. Não defender a ferramenta quando houver confusão.
3. Registrar palavras reais do participante quando possível, sem dados pessoais.
4. Não conduzir o participante para respostas positivas.
5. Não transformar uma sessão incompleta em validação aprovada.
6. Não usar dados sensíveis.
7. Não prometer publicação ou estabilidade.

## 3. Estrutura da sessão

### 3.1 Abertura

Explicar:

- o que é o Resolve Aí;
- que está em alpha privado;
- que a sessão serve para melhorar;
- que bugs/confusões são bem-vindos;
- que nada será publicado com dados pessoais.

### 3.2 Tarefa principal

Cada participante deve tentar responder:

> “O Resolve Aí me ajudou a entender melhor o problema/projeto e o próximo passo?”

### 3.3 Comandos mínimos

Fluxo obrigatório:

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

### 3.4 Observação

Registrar:

- comandos que geraram dúvida;
- textos confusos;
- expectativas erradas;
- documentos úteis;
- documentos ignorados;
- sensação de confiança;
- sensação de excesso;
- medo de mexer no código;
- entendimento de Modo Liga/Desliga.

## 4. Roteiro por perfil

### 4.1 Non-Technical Builder

Perguntas:

- Você entendeu a promessa do Resolve Aí?
- O nome dos comandos fez sentido?
- Algum comando pareceu técnico demais?
- Você confiaria em usar isso com uma ideia sua?
- Os documentos gerados ajudam ou assustam?
- O que deveria ser mais simples?

Critério de sucesso:

- entende a promessa;
- entende que não precisa ser dev;
- entende que `resolver` não faz mágica sozinho;
- enxerga valor no diagnóstico/plano.

### 4.2 Vibe Coder

Perguntas:

- Isso ajudaria a organizar um projeto feito com IA?
- O diagnóstico apontou coisas úteis?
- O plano parece executável?
- O comando preparar ajuda a evitar bagunça?
- O resolver ficou claro como execução assistida?
- O validar parece útil antes de commit?

Critério de sucesso:

- percebe redução de caos;
- entende fluxo incremental;
- vê valor antes de codar;
- não espera autoexecução perigosa.

### 4.3 Professional Engineer

Perguntas:

- Os artefatos são tecnicamente úteis?
- O risco está calibrado?
- A documentação é rastreável?
- Os comandos têm limites seguros?
- Você usaria em um projeto real?
- O que impediria adoção em time?

Critério de sucesso:

- reconhece valor profissional;
- identifica lacunas concretas;
- não considera o projeto superficial;
- aceita o modelo safety-first.

## 5. Classificação de feedback

| Severidade | Definição | Exemplo |
|---|---|---|
| P0 | impede uso ou gera risco grave | comando destrutivo, vazamento, crash geral |
| P1 | bloqueia release público | usuário acha que `resolver` altera código sozinho |
| P2 | atrito relevante | texto confuso, documento longo demais |
| P3 | melhoria | ajuste de copy, exemplo extra |

## 6. Evidência mínima por sessão

Cada relatório deve conter:

- perfil;
- data;
- cenário usado;
- se foi real ou simulado;
- comandos executados;
- resultado observado;
- feedback anonimizado;
- problemas classificados;
- recomendação por perfil;
- score do perfil;
- decisão do moderador.

## 7. Artefatos esperados

Criar/atualizar:

- `docs/alpha-validation/private-alpha/session-non-technical-builder-01.md`
- `docs/alpha-validation/private-alpha/session-vibe-coder-01.md`
- `docs/alpha-validation/private-alpha/session-professional-engineer-01.md`
- `docs/alpha-validation/private-alpha/private-alpha-consolidated-results.md`
- `docs/alpha-validation/private-alpha/private-alpha-profile-scorecard.md`
- `docs/community/private-alpha-feedback-triage.md`
- `docs/community/private-alpha-fix-backlog.md`

## 8. Regras de honestidade

Se uma sessão não aconteceu, registrar:

```text
Sessão não executada. Participante ainda pendente. Nenhum feedback real coletado.
```

Nunca transformar roteiro, template ou plano em “validação real”.
