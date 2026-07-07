# pt265 — MVP Slice Task Selection Engine

## 1. Problema

O comando `preparar` evoluiu ao reconhecer que havia contexto preenchido, mas ainda gerou tarefa vaga:

```text
Implementar a próxima fatia pequena do escopo preenchido
```

Para um iniciante, isso ainda exige tradução mental. O Resolve Aí deve fazer essa tradução.

## 2. Objetivo

Transformar o escopo da entrevista em uma primeira tarefa concreta, pequena e segura.

## 3. Definição de fatia pequena

Uma boa primeira fatia deve:

- poder ser entendida em uma frase;
- evitar dependências externas;
- evitar login, banco, deploy e integrações;
- produzir algo visível rapidamente;
- permitir validação manual simples;
- respeitar o que ficou fora do escopo;
- não fingir que criou o app inteiro.

## 4. Motor de seleção de tarefa

Criar ou ajustar uma função:

```ts
selectFirstMvpSlice(scope: ProjectScope, context: RuntimeContext): PreparedTask
```

Shape sugerido:

```ts
type PreparedTask = {
  title: string;
  why: string;
  scope: string[];
  outOfScope: string[];
  acceptanceChecks: string[];
  riskLevel: 'baixo' | 'medio' | 'alto' | 'critico';
  requiresHumanApproval: boolean;
  canAutoExecute: false;
};
```

## 5. Exemplos de transformação

### 5.1 Controle de gastos

Entrada:

```text
Cadastrar entrada, cadastrar gasto, listar registros, ver saldo do mês e resumo por categoria.
```

Tarefa preparada:

```text
Criar a primeira tela do Controle Simples de Gastos
```

Escopo:

```text
- Criar uma página simples.
- Criar formulário para registrar entrada ou gasto.
- Mostrar lista de registros cadastrados.
- Calcular saldo do mês.
- Manter dados somente no navegador ou em memória, conforme decisão do prompt.
```

Fora do escopo:

```text
- Login.
- Banco de dados.
- Integração bancária.
- Internet.
- Deploy.
- Dados reais.
```

Critérios de validação:

```text
- A página abre no navegador.
- Consigo cadastrar uma entrada.
- Consigo cadastrar um gasto.
- A lista aparece.
- O saldo muda corretamente.
```

### 5.2 Site para barbeiro

Tarefa:

```text
Criar a primeira página do site da barbearia
```

Escopo:

```text
- Nome da barbearia.
- Lista de serviços.
- Botão de contato fictício.
- Horário de atendimento.
```

Fora do escopo:

```text
- Pagamento.
- Agenda real.
- Login.
- Banco de dados.
```

### 5.3 Controle de treinos

Tarefa:

```text
Criar tela para registrar um treino simples
```

Escopo:

```text
- Nome do exercício.
- Séries.
- Repetições.
- Lista do treino do dia.
```

Fora do escopo:

```text
- Plano médico.
- Recomendações de saúde.
- Login.
- Sincronização.
```

## 6. Regras de risco

Para projeto novo local simples:

```text
Risco: médio ou baixo
```

Nunca exibir `yellow` como risco primário.

Usar risco alto apenas se houver:

- dados pessoais reais;
- credenciais;
- conteúdo financeiro real com recomendação;
- dados médicos;
- pagamento;
- scraping sensível;
- automação destrutiva;
- arquivos sensíveis detectados.

## 7. Atualização dos documentos 15–19

### 7.1 `15-tarefa-preparada.md`

Deve conter título concreto.

```md
# Tarefa preparada — Criar a primeira tela do Controle Simples de Gastos
```

### 7.2 `16-prompt-de-implementacao.md`

Deve conter prompt pronto e específico.

```md
Crie uma página simples para o projeto Controle Simples de Gastos...
```

### 7.3 `17-plano-de-validacao-da-tarefa.md`

Checklist concreto, não genérico.

### 7.4 `18-riscos-da-execucao.md`

Linguagem simples:

```md
Risco: médio

Por quê:
A tarefa cria uma primeira tela, mas não deve usar dados reais, login, banco de dados ou internet.
```

### 7.5 `19-handoff-de-execucao.md`

Deve ser útil, não vazio.

```md
## Próximo passo
Leia o prompt em `16-prompt-de-implementacao.md` ou rode `resolve-ai resolver` para gerar o pacote final.
```

## 8. Saída pública do `preparar`

### Antes

```text
Tarefa preparada:
Implementar a próxima fatia pequena do escopo preenchido
```

### Depois

```text
Tarefa preparada:
Criar a primeira tela do Controle Simples de Gastos

Por que essa tarefa?
É pequena, dá para validar no navegador e cobre o começo do MVP sem login, banco de dados ou internet.
```

## 9. Saída pública do `resolver`

O `resolver` deve reaproveitar exatamente o mesmo título de tarefa.

Se `preparar` disse:

```text
Criar a primeira tela do Controle Simples de Gastos
```

`resolver` não deve trocar por uma frase genérica.

## 10. Testes obrigatórios

1. `preparar` após entrevista gera título concreto.
2. `resolver` mantém o mesmo título concreto.
3. `preparar` não usa `Implementar próxima fatia pequena` quando há escopo suficiente.
4. Controle de gastos gera tarefa relacionada a gastos.
5. Site para barbeiro gera tarefa relacionada ao site.
6. Controle de treinos gera tarefa relacionada a treino.
7. Restrições de fora do escopo aparecem no prompt.
8. Tarefa continua segura e sem autoexecução.

## 11. Critério de aceite

No teste Controle Simples de Gastos, a saída do `preparar` deve conter o nome do projeto ou uma funcionalidade explícita:

```text
Controle Simples de Gastos
```

ou

```text
cadastrar gasto
```

Não deve ser genérica o suficiente para servir a qualquer projeto.
