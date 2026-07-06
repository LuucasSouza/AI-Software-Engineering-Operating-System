# pt241 — Phase 15B: Private Alpha Fixes and Second Validation Round Rationale

## 1. Propósito da Phase 15B

A Phase 15B existe porque a Phase 15A confirmou uma situação importante: o Resolve Aí já possui CLI local funcional, documentação de runtime, fluxo completo e pacote npm tecnicamente preparado, mas ainda não possui validação humana real suficiente para justificar publicação pública ampla.

O objetivo desta fase não é criar mais documentação por criar.

O objetivo é transformar o estado atual de `LIMITED GO` em uma decisão mais madura, baseada em evidência real, com uma das seguintes saídas:

1. **GO** — se houver validação real suficiente, sem P0/P1 e com readiness adequado.
2. **LIMITED GO** — se houver validação parcial, achados controláveis ou validação humana incompleta.
3. **NO-GO** — se surgirem P0/P1, confusão grave de UX, risco de segurança, ou se o produto não for compreendido pelos perfis-alvo.
4. **VALIDATION BLOCKED** — se a equipe continuar sem participantes reais disponíveis.

A diferença desta fase para as anteriores é que a Phase 15B deve evitar um ciclo infinito de preparação documental sem validação humana.

## 2. Estado herdado

A Phase 15A terminou com:

- Score: **77/100**
- Decisão: **LIMITED GO**
- Validações reais executadas: **nenhuma**
- Participantes pendentes:
  - PA-NTB-01
  - PA-VC-01
  - PA-PE-01
- P0: nenhum
- P1 de segurança: nenhum observado
- Principal blocker:
  - validação real com usuários dos três perfis
  - confirmação da percepção de segurança dos comandos `resolver` e `executar`
  - aprovação manual para npm/tag/release

## 3. Hipótese da Phase 15B

A hipótese a validar é:

> Usuários reais dos três perfis conseguem entender o propósito do Resolve Aí, instalar/rodar localmente com orientação mínima, executar o fluxo principal, compreender que `resolver` e `executar` não fazem alterações automáticas, e perceber valor suficiente para justificar um alpha público controlado.

## 4. Perfis obrigatórios

A Phase 15B mantém os três perfis oficiais:

### 4.1 Non-Technical Builder

Pessoa que tem ideia/problema, mas não quer lidar com jargão técnico.

Objetivo da validação:

- verificar se a linguagem é clara;
- verificar se a promessa faz sentido;
- verificar se o usuário entende o que o Resolve Aí faz e não faz;
- verificar se a experiência parece útil mesmo quando outra pessoa executa os comandos por ele.

### 4.2 Vibe Coder

Pessoa que usa IA para construir software, mas ainda não tem disciplina forte de arquitetura, risco e validação.

Objetivo da validação:

- verificar se o fluxo ajuda a sair do improviso;
- verificar se os comandos são intuitivos;
- verificar se a documentação gerada orienta a continuação do projeto;
- verificar se `preparar`, `resolver` e `validar` reduzem bagunça.

### 4.3 Professional Engineer

Pessoa técnica, desenvolvedor, arquiteto ou tech lead.

Objetivo da validação:

- verificar se a CLI é previsível;
- verificar se o comportamento read-only é confiável;
- verificar se os docs são úteis e versionáveis;
- verificar se o runtime não invade o projeto;
- verificar se há base para alpha público.

## 5. Critério anti-loop

A Phase 15B deve aplicar a seguinte regra:

> Se não houver participantes reais disponíveis, não criar uma nova fase documental de preparação como próxima recomendação principal. Registrar `VALIDATION BLOCKED` e recomendar ação manual fora do repositório: recrutar participantes, agendar sessões e só depois reabrir a validação.

Isso evita que o projeto continue crescendo em documentação sem contato real com usuários.

## 6. Resultado esperado

Ao final desta fase, o repositório deve conter:

- relatórios de sessão reais ou pendência explícita;
- análise de feedback;
- lista de fixes aplicados ou não aplicados;
- revisão dos comandos sensíveis (`resolver`, `executar`);
- novo readiness score;
- decisão GO / LIMITED GO / NO-GO / VALIDATION BLOCKED;
- recomendação objetiva para a próxima ação.

## 7. Não objetivos

A Phase 15B não deve:

- publicar no npm;
- criar tag Git;
- criar release GitHub;
- implementar MCP;
- implementar hooks;
- adicionar telemetria;
- coletar dados sensíveis;
- inventar validação real;
- alterar safety gates para parecer mais pronto;
- transformar `resolver` em execução automática.

## 8. Postura de produto

O Resolve Aí deve continuar com linguagem brasileira, leve e clara.

A experiência pública deve evitar parecer ferramenta gringa traduzida. O usuário deve sentir que a ferramenta fala com ele de forma natural:

- “Liga o Resolve Aí”
- “Vamos entender o projeto”
- “Bora planejar com calma”
- “Preparei uma tarefa segura”
- “Agora valida antes de sair fazendo”
- “Nada foi alterado automaticamente”

## 9. Decisão de maturidade

A Phase 15B é o ponto em que o projeto deve escolher entre:

- avançar para release público;
- manter alpha privado com participantes reais adicionais;
- parar o avanço de release até conseguir validação humana.

A resposta correta deve ser honesta, mesmo que frustre a vontade de publicar.
