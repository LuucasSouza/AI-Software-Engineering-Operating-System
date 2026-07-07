# pt268 — Phase 17B Test Plan and Fixtures

## 1. Objetivo

Validar que a Phase 17B corrigiu as inconsistências encontradas no teste Non-Technical Builder pós-Phase17.

## 2. Teste principal: Controle Simples de Gastos

### 2.1 Setup

Criar pasta limpa fora do repositório:

```powershell
mkdir C:\Users\luuca\OneDrive\PROGRAMAÇÃO\teste-zero-resolve-ai-17b
cd C:\Users\luuca\OneDrive\PROGRAMAÇÃO\teste-zero-resolve-ai-17b
```

Copiar apenas o kit `teste/` para dentro, se necessário.

Não copiar o repositório Resolve-Ai para dentro da pasta analisada.

### 2.2 Comando base

```powershell
$ra = "C:\Users\luuca\OneDrive\PROGRAMAÇÃO\Resolve-Ai\packages\resolve-ai-cli\dist\index.js"
```

### 2.3 Fluxo

```powershell
node $ra ajuda
node $ra começar
node $ra ligar
@'
Controle Simples de Gastos
Quero criar um app simples para controlar gastos pessoais.
Para uma pessoa comum que quer entender para onde o dinheiro está indo.
Ajuda a cadastrar entradas e saídas e ver quanto sobrou no mês.
Usuários iniciantes, sem conhecimento técnico.
Um app simples, local, sem login e sem internet.
A primeira versão útil deve permitir cadastrar entrada, cadastrar gasto, listar registros, ver saldo do mês e ver resumo por categoria.
HTML, CSS e JavaScript simples.
Não usar login, banco de dados, backend, integração bancária, internet ou dependências externas.
Não usar dados reais, senhas, tokens, dados bancários ou informações sensíveis.
Abrir um arquivo HTML no navegador e conseguir registrar gastos localmente.
Quero algo simples, seguro e fácil de entender.
Não sei programar.
Pode ser feito em uma página só.
'@ | node $ra entrevistar
node $ra diagnosticar
node $ra planejar
node $ra preparar
node $ra resolver
node $ra validar
node $ra status
```

## 3. Resultados esperados

### 3.1 Ajuda

Deve listar:

```text
entrevistar
entrevista
ideia
```

E fluxo recomendado com `entrevistar`.

### 3.2 Entrevistar

Deve registrar:

```text
Controle Simples de Gastos
```

E sugerir:

```text
resolve-ai planejar
```

### 3.3 Diagnosticar

Deve mostrar:

```text
Tipo de projeto: novo
Modo recomendado: Non-Technical Builder
Entrevista: feita
```

Não deve sugerir `resolve-ai entrevistar` como próxima ação principal.

### 3.4 Planejar

Deve mencionar:

```text
Controle Simples de Gastos
```

ou funcionalidades específicas como:

```text
cadastrar entrada
cadastrar gasto
saldo do mês
resumo por categoria
```

Não deve dizer:

```text
Resolver riscos críticos antes de implementar qualquer feature nova
```

salvo se houver risco crítico real.

### 3.5 Preparar

Deve gerar tarefa concreta, por exemplo:

```text
Criar a primeira tela do Controle Simples de Gastos
```

ou:

```text
Criar cadastro de entrada e gasto
```

Não deve ficar apenas:

```text
Implementar a próxima fatia pequena do escopo preenchido
```

### 3.6 Resolver

Deve manter a mesma tarefa concreta do `preparar`.

Deve dizer:

```text
Eu ainda não mexi no seu código.
Autoexecução: não
```

### 3.7 Validar

Sem Git, deve explicar:

```text
Não encontrei um repositório Git aqui...
```

Mas não deve transformar Git na única ação principal se a execução ainda não aconteceu.

### 3.8 Status

Deve mostrar:

```text
Fluxo atual: Projeto do Zero
Perfil recomendado: Non-Technical Builder
Entrevista: feita
```

Não deve mostrar:

```text
Projeto em Andamento — Diagnóstico e Continuação
Rodar resolve-ai entrevistar
```

quando a entrevista já foi feita.

## 4. Testes automatizados obrigatórios

Adicionar ou atualizar testes para:

1. Ajuda lista `entrevistar`.
2. Entrevistar cria docs e state.
3. Diagnosticar pós-entrevista não recomenda entrevista.
4. Status pós-entrevista não recomenda entrevista.
5. Status usa fluxo `Projeto do Zero` para projeto novo.
6. Planejar pós-entrevista usa nome do projeto.
7. Planejar não recomenda risco crítico sem risco crítico.
8. Preparar pós-entrevista gera tarefa concreta.
9. Resolver mantém tarefa concreta.
10. Saída pública não contém `Risco: yellow`.
11. Validar sem Git explica limitação.
12. Kit `teste/feedback.md` tem seção `entrevistar`.

## 5. Testes de regressão

Garantir que continuam passando:

```powershell
npm run build --prefix packages/resolve-ai-cli
npm test --prefix packages/resolve-ai-cli
npm run smoke --prefix packages/resolve-ai-cli
```

E dentro do pacote:

```powershell
cd packages/resolve-ai-cli
npm pack --dry-run
```

## 6. Testes de perfil

### 6.1 Non-Technical Builder

Projeto vazio + entrevista.

### 6.2 Vibe Coder

Projeto com `package.json` simples e sem entrevista.

### 6.3 Professional Engineer

Projeto com stack real e possíveis riscos.

A Phase 17B não deve simplificar excessivamente os perfis técnicos.

## 7. Critério de aprovação

A fase passa se:

- Todos os testes automatizados passam.
- O fluxo limpo de Controle Simples de Gastos gera tarefa concreta.
- O status não se contradiz.
- O risco público está em português.
- O kit de teste está atualizado.
- O score é recalculado honestamente.

## 8. Score esperado

Antes:

```text
86/100 — LIMITED GO forte
```

Depois, se passar:

```text
88/100 — LIMITED GO muito forte
```

Sem validação humana real, não declarar stable.
