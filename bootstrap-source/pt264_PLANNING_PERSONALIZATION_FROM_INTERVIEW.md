# pt264 — Planning Personalization From Interview

## 1. Problema

A Phase 17 registrou a entrevista corretamente, mas o comando `planejar` ainda pode produzir mensagens genéricas em projeto novo.

Exemplo observado:

```text
Próxima ação sugerida:
Resolver riscos críticos antes de implementar qualquer feature nova.
```

Isso faz sentido em projeto legado com credenciais, backups ou dados sensíveis. Não faz sentido em um app local simples de controle de gastos.

## 2. Objetivo

Fazer `planejar` usar as respostas da entrevista para gerar:

1. Nome do projeto.
2. Objetivo do MVP.
3. Primeiras funcionalidades.
4. Restrições.
5. Próxima ação concreta.
6. Backlog com linguagem simples.

## 3. Fontes de contexto

O planejamento deve ler, nesta ordem:

1. `.resolve-ai/state.json` → `lastInterview` / `ultimaEntrevista`.
2. `docs/resolve-ai/00-project-intake.md`.
3. `docs/resolve-ai/02-discovery.md`.
4. `docs/resolve-ai/03-product-definition.md`.
5. Diagnóstico existente.

## 4. Extração de escopo

Criar ou ajustar uma função como:

```ts
extractProjectScopeFromInterview(projectRoot: string): ProjectScope
```

Shape sugerido:

```ts
type ProjectScope = {
  projectName?: string;
  idea?: string;
  targetUser?: string;
  problem?: string;
  productType?: string;
  mvpFeatures: string[];
  constraints: string[];
  outOfScope: string[];
  preferredStack?: string;
  successCriteria?: string;
  confidence: 'low' | 'medium' | 'high';
};
```

## 5. Heurística para MVP

Para respostas como:

```text
Cadastrar entrada, cadastrar gasto, listar registros, ver saldo do mês e resumo por categoria.
```

O planejamento deve transformar em itens de backlog:

```text
1. Criar estrutura da página inicial.
2. Criar formulário para cadastrar entrada.
3. Criar formulário ou campo para cadastrar gasto.
4. Mostrar lista de registros.
5. Calcular saldo do mês.
6. Mostrar resumo simples por categoria.
7. Salvar dados localmente no navegador, se apropriado.
```

## 6. Linguagem por perfil

### 6.1 Non-Technical Builder

Usar:

- primeira versão;
- tela inicial;
- cadastro de gasto;
- lista;
- resumo;
- próximo passo;
- validação simples.

Evitar:

- sprint;
- P0/P1/P2;
- hardening;
- CI;
- regressão;
- arquitetura;
- delivery;
- stakeholders;
- acceptance criteria.

Se documentos técnicos ainda usarem termos profissionais internamente, incluir uma explicação simples.

### 6.2 Vibe Coder

Pode usar termos intermediários, mas ainda em português claro.

### 6.3 Professional Engineer

Pode manter backlog técnico, critérios de aceite e sprints.

## 7. Próxima ação planejada

A função de planejamento deve evitar `Resolver riscos críticos` quando não houver risco crítico real.

### 7.1 Projeto novo sem risco crítico

Exemplo:

```text
Próxima ação sugerida:
Preparar a primeira tarefa do MVP: criar a tela inicial do Controle Simples de Gastos.
```

### 7.2 Projeto novo com risco sensível declarado

Se a entrevista mencionar dados reais, credenciais, dados bancários, saúde, clientes ou conteúdo sensível:

```text
Próxima ação sugerida:
Definir uma versão de teste sem dados reais antes de implementar.
```

### 7.3 Projeto legado com risco crítico

Manter:

```text
Resolver riscos críticos antes de implementar qualquer feature nova.
```

## 8. Atualização dos documentos 10–14

### 8.1 `10-plano-de-continuacao.md`

Para projeto novo, deve conter:

```md
# Plano inicial — Controle Simples de Gastos

## Ideia registrada
...

## Primeira versão útil
...

## O que fica fora agora
...

## Próximo passo recomendado
...
```

### 8.2 `11-backlog-priorizado.md`

Para Non-Technical Builder, usar categorias simples:

```md
## Fazer primeiro
- Criar a página principal.
- Criar cadastro de entrada e gasto.

## Fazer depois
- Resumo por categoria.
- Melhorar visual.

## Não fazer agora
- Login.
- Banco de dados.
- Integração bancária.
```

### 8.3 `12-proximas-sprints.md`

Para Non-Technical Builder, considerar renomear a seção pública:

```md
# Próximos passos em blocos pequenos
```

Não é necessário renomear o arquivo agora, mas o texto interno deve ser mais acessível.

### 8.4 `13-prompts-de-execucao.md`

Gerar prompts específicos:

```md
## Prompt 1 — Criar primeira tela do controle de gastos

Crie uma página HTML simples...
```

### 8.5 `14-checklist-de-validacao.md`

Checklist concreto:

```md
- [ ] Consigo abrir a página no navegador.
- [ ] Consigo cadastrar uma entrada.
- [ ] Consigo cadastrar um gasto.
- [ ] O saldo do mês aparece corretamente.
- [ ] Não há login, internet ou banco de dados.
```

## 9. Testes obrigatórios

1. Planejar após entrevista de controle de gastos gera plano com o nome do projeto.
2. Planejar após entrevista inclui funcionalidades do MVP.
3. Planejar não recomenda riscos críticos se não houver risco crítico.
4. Planejar para projeto legado com sensíveis ainda prioriza segurança.
5. Planejar para Non-Technical Builder evita P0/P1 no texto público principal.
6. Planejar preserva documentos existentes.
7. Planejar continua idempotente.

## 10. Critério de aceite

No cenário Controle Simples de Gastos, a saída do terminal deve incluir algo próximo de:

```text
Próxima ação sugerida:
Preparar a primeira tarefa do MVP: criar a tela inicial do Controle Simples de Gastos.
```

Não deve incluir:

```text
Resolver riscos críticos antes de implementar qualquer feature nova.
```

salvo se houver risco crítico real detectado.
