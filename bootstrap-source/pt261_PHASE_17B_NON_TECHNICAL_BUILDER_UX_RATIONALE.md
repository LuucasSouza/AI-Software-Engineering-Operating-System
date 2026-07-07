# pt261 — Phase 17B: Non-Technical Builder UX Refinement — Rationale

## 1. Contexto

A Phase 17 introduziu o comando `resolve-ai entrevistar`, seus aliases `entrevista` e `ideia`, e a capacidade de registrar uma ideia inicial em documentos estruturados. O teste limpo pós-Phase17 demonstrou que o comando existe, funciona e melhora significativamente o cenário de projeto do zero.

Mesmo assim, o feedback do teste Non-Technical Builder simulado revelou um novo tipo de problema: o sistema agora capta a ideia, mas alguns comandos ainda não respeitam totalmente o estado resultante da entrevista.

A questão central deixou de ser "a entrevista existe?" e passou a ser:

> Depois que a entrevista existe, todos os comandos se comportam como se soubessem disso?

A resposta atual é: parcialmente.

## 2. Evidências do teste

O teste confirmou pontos fortes importantes:

- `entrevistar` registrou a ideia corretamente.
- `diagnosticar` classificou corretamente o projeto como novo.
- O modo recomendado foi `Non-Technical Builder`.
- `resolver` permaneceu seguro e claro.
- `validar` explicou a ausência de Git em linguagem simples.
- A ferramenta não alterou código, não instalou dependências, não fez commit e não expôs dados sensíveis.

Por outro lado, o teste expôs inconsistências:

- `diagnosticar` recomendou rodar `resolve-ai entrevistar` mesmo depois de a entrevista ter sido feita.
- `status` mostrou `Entrevista: feita` e ao mesmo tempo `Próxima ação do diagnóstico: Rodar resolve-ai entrevistar`.
- `status` exibiu `Modo atual: Projeto em Andamento — Diagnóstico e Continuação` apesar de o diagnóstico indicar projeto novo e Non-Technical Builder.
- `planejar` sugeriu resolver riscos críticos em um projeto novo, vazio e simples.
- `preparar` reconheceu que havia contexto, mas produziu uma tarefa vaga: `Implementar a próxima fatia pequena do escopo preenchido`.
- O vocabulário de risco apareceu misturado entre inglês e português, como `yellow` e `medio`.
- `status` concentrou várias próximas ações concorrentes, em vez de orientar claramente uma única próxima ação.

## 3. Objetivo da Phase 17B

A Phase 17B deve transformar a Phase 17 de "funcional" para "coerente para iniciante".

O foco não é adicionar um grande novo comando. O foco é corrigir a conversa entre os comandos existentes.

### Objetivo principal

Garantir que, depois de uma entrevista em projeto novo, os comandos `diagnosticar`, `planejar`, `preparar`, `resolver`, `validar` e `status` leiam o mesmo estado e apresentem uma jornada coerente.

### Objetivos secundários

1. Reduzir linguagem técnica para o perfil Non-Technical Builder.
2. Eliminar nomes internos de risco em inglês na saída pública.
3. Gerar tarefas concretas a partir do escopo da entrevista.
4. Remover recomendações obsoletas.
5. Melhorar a tela de status para ter uma próxima ação prioritária real.
6. Atualizar o kit `teste/` para cobrir explicitamente `entrevistar`.
7. Recalibrar score e decisão de publicação após os testes.

## 4. Princípios de design

### 4.1 Estado único, orientação única

Se o estado diz que a entrevista foi feita, nenhum comando deve sugerir a entrevista como próxima ação obrigatória.

### 4.2 Projeto novo não é projeto quebrado

Ausência de README, CI, testes, package.json ou Git em uma pasta vazia não deve soar como falha grave para usuário iniciante. Deve soar como contexto esperado de início.

### 4.3 Próxima ação deve ser acionável

Para Non-Technical Builder, a próxima ação deve responder:

> O que eu faço agora?

Não deve ser um conceito abstrato como:

- resolver riscos críticos;
- validar decisões implícitas;
- executar primeira tarefa P1;
- implementar próxima fatia pequena.

Deve ser algo como:

- revisar o plano do MVP;
- preparar a primeira tela;
- criar o formulário de cadastrar gasto;
- colar o prompt final no agente de IA;
- inicializar Git para permitir validação de mudanças.

### 4.4 Segurança sem susto desnecessário

A postura conservadora do Resolve Aí é um diferencial. Porém, para projeto novo simples, o sistema não deve comunicar risco crítico quando não houver risco crítico real.

### 4.5 Português público, inglês interno

Internamente, o código pode continuar usando enums como `green`, `yellow`, `orange`, `red`. Publicamente, a CLI deve exibir `baixo`, `médio`, `alto` e `crítico` ou `verde`, `amarelo`, `laranja`, `vermelho` com explicação simples.

## 5. Critério de sucesso da fase

A Phase 17B será considerada bem-sucedida quando o seguinte fluxo em uma pasta limpa produzir uma jornada coerente:

```bash
node <path>/index.js começar
node <path>/index.js ligar
node <path>/index.js entrevistar
node <path>/index.js diagnosticar
node <path>/index.js planejar
node <path>/index.js preparar
node <path>/index.js resolver
node <path>/index.js validar
node <path>/index.js status
```

Resultado esperado:

- `diagnosticar` reconhece entrevista feita.
- `planejar` usa a ideia registrada.
- `preparar` gera uma tarefa concreta do MVP.
- `resolver` mantém a segurança e usa a mesma tarefa concreta.
- `validar` explica Git sem parecer erro fatal.
- `status` mostra modo correto: Projeto do Zero / Non-Technical Builder.
- `status` mostra uma próxima ação prioritária no topo.
- Nenhuma saída pública usa `yellow` como termo primário.
- Nenhuma saída sugere riscos críticos se não houver risco crítico.

## 6. Não objetivos

Esta fase não deve:

- publicar no npm;
- criar tag Git;
- criar GitHub release;
- transformar o Resolve Aí em gerador automático de código;
- reduzir safety gates;
- implementar telemetria;
- enviar feedback automaticamente;
- criar UI web;
- adicionar dependências externas sem necessidade;
- exigir Git para usar o fluxo de entrevista;
- quebrar compatibilidade com os perfis Vibe Coder e Professional Engineer.

## 7. Score esperado

Score antes da fase: `86/100 — LIMITED GO forte`.

Se a Phase 17B passar nos testes, o score pode subir para algo entre:

```text
88/100 — LIMITED GO muito forte
```

ou, se houver validação humana real adicional:

```text
90/100 — GO controlado para alpha público limitado
```

Sem validação humana real adicional, não declarar `stable`.
