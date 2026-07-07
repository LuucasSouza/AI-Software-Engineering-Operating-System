# pt263 — Diagnostic and Status Next Action Fixes

## 1. Diagnóstico: comportamento esperado

O comando `diagnosticar` deve continuar seguro e conservador, mas precisa distinguir melhor entre:

1. Pasta vazia sem entrevista.
2. Pasta vazia com entrevista feita.
3. Projeto existente.
4. Projeto legado.

## 2. Projeto novo não deve soar quebrado

Hoje, em projeto novo, mensagens como:

```text
README não detectado
CI não detectado
Testes não detectados
```

podem soar como problemas. Para projeto novo, elas devem ser apresentadas como "ainda não criado" ou "normal neste estágio".

### Saída sugerida para projeto novo

```text
Ponto de partida:
- Projeto ainda está no começo.
- README, testes e CI ainda não existem — isso é normal para uma pasta nova.
- Vamos criar primeiro um MVP simples e depois organizar validação.
```

### Saída sugerida para projeto existente

```text
Pontos de atenção:
- README não detectado
- CI não detectado
- Testes não detectados
```

## 3. Diagnóstico com entrevista feita

Se `lastInterview` existir:

```text
Entrevista encontrada:
- Ideia: Controle Simples de Gastos
- Próximo passo: criar plano do MVP
```

Não recomendar entrevista novamente.

### Antes

```text
Próximas ações:
1. Rodar resolve-ai entrevistar
2. Definir MVP
3. Criar plano antes de escrever código
```

### Depois

```text
Próximas ações:
1. Criar plano do MVP com base na entrevista
2. Preparar a primeira tarefa pequena
3. Usar o prompt final no agente de IA somente depois de revisar
```

## 4. Diagnóstico sem entrevista

Se o projeto for novo e não houver entrevista:

```text
Próximas ações:
1. Rodar resolve-ai entrevistar
2. Responder as perguntas básicas da ideia
3. Criar plano do MVP
```

## 5. Status: comportamento esperado

O `status` deve ser a tela de orientação mais confiável do produto.

Para iniciante, ele deve responder:

- Estou ligado ou desligado?
- Que tipo de projeto é este?
- Minha ideia foi registrada?
- Qual é o único próximo passo?
- A ferramenta mexeu no código?

## 6. Layout proposto para status

### 6.1 Topo simplificado

```text
Resolve Aí está ligado neste projeto.

Projeto: Controle Simples de Gastos
Fluxo atual: Projeto do Zero — Entrevista e Planejamento
Perfil recomendado: Non-Technical Builder

Próxima ação prioritária:
Revise o plano do MVP e depois prepare a primeira tarefa.

Comando sugerido:
resolve-ai preparar

Importante:
Eu ainda não mexi no código.
```

### 6.2 Seções de detalhe

Depois do topo, exibir:

```text
Resumo da entrevista:
- Ideia: Controle Simples de Gastos
- Entrevista: feita

Diagnóstico:
- Tipo: projeto novo
- Maturidade: começo do projeto

Planejamento:
- Plano criado: sim
- Próxima tarefa sugerida: Criar primeira tela do controle de gastos

Execução assistida:
- Prompt final criado: sim/não
- Autoexecução: não

Validação:
- Git detectado: não
- Comparação de mudanças: limitada
```

## 7. O que evitar no status

Evitar múltiplas chamadas concorrentes no mesmo nível, como:

```text
Leia doc 16
Leia doc 21
Rode git init
Resolva riscos críticos
Rode entrevistar
```

Essas ações podem existir como detalhes, mas o topo deve ter apenas uma ação principal.

## 8. Regra para Git no status

Git é importante, mas não deve sequestrar o fluxo.

Se não houver Git:

- Mostrar como observação/dica.
- Tornar ação prioritária somente quando o usuário estiver tentando validar mudanças reais.

Exemplo:

```text
Dica para validação futura:
Este projeto ainda não usa Git. Quando quiser comparar mudanças com precisão, rode git init.
```

## 9. Testes obrigatórios

1. Status após `entrevistar` deve mostrar entrevista feita.
2. Status após `diagnosticar` em projeto novo não deve mostrar `Projeto em Andamento`.
3. Status após `planejar` deve ter uma próxima ação principal.
4. Status após `validar` sem Git deve explicar limitação sem contradizer o fluxo.
5. Status nunca deve mostrar `Rodar resolve-ai entrevistar` se `lastInterview` existir.
6. Diagnóstico em projeto novo com entrevista não deve listar README/CI/testes como problemas graves.
7. Diagnóstico em projeto existente deve preservar pontos de atenção técnicos.

## 10. Critério de aceite

No teste Controle Simples de Gastos, o status deve ficar coerente:

```text
Fluxo atual: Projeto do Zero — Entrevista e Planejamento
Entrevista: feita
Tipo de projeto: novo
Perfil recomendado: Non-Technical Builder
Próxima ação prioritária: usar o prompt final no agente de IA ou revisar a tarefa preparada
```

Não deve exibir:

```text
Projeto em Andamento — Diagnóstico e Continuação
Rodar resolve-ai entrevistar
Resolver riscos críticos
```

quando essas mensagens não forem aplicáveis.
