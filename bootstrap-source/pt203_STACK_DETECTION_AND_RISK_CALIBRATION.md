# pt203 — Stack Detection and Risk Calibration

## 1. Objetivo

Evoluir o diagnóstico do Resolve Aí para reconhecer stacks comuns em projetos brasileiros de forma simples, local e segura.

## 2. Princípios

1. Detecção deve ser heurística, não perfeita.
2. O CLI não deve ler conteúdo sensível para detectar stack.
3. `package.json` pode ser lido porque é metadado técnico esperado.
4. Arquivos de lock podem ser usados como sinal, mas não precisam ser parseados profundamente.
5. A saída deve ser honesta: “stack provável”, não “stack garantida”.
6. A linguagem deve ser clara para não-devs.

## 3. Modelo de stack provável

Adicionar ou revisar uma estrutura equivalente a:

```ts
export type DetectedStackItem = {
  name: string;
  confidence: 'baixa' | 'media' | 'alta';
  evidence: string[];
};
```

A evidência deve usar nomes genéricos e caminhos seguros, por exemplo:

```text
package.json contém dependência vite
vite.config.ts encontrado
src/App.tsx encontrado
```

Não registrar conteúdo de `.env`, dumps, CSVs reais ou backups.

## 4. Heurísticas obrigatórias

### 4.1 Node.js

Sinais:

- `package.json` existe.
- `package-lock.json`, `pnpm-lock.yaml` ou `yarn.lock` existem.
- scripts npm existem.

Resultado:

```text
Node.js — confiança alta
```

### 4.2 TypeScript

Sinais:

- `tsconfig.json` existe.
- dependência `typescript` existe.
- arquivos `.ts` ou `.tsx` existem.

Resultado:

```text
TypeScript — confiança alta ou média
```

### 4.3 Vite

Sinais:

- dependência `vite`.
- `vite.config.ts`, `vite.config.js`, `vite.config.mts`.
- script com `vite`.

Resultado:

```text
Vite — confiança alta
```

### 4.4 React

Sinais:

- dependência `react`.
- dependência `react-dom`.
- arquivos `.jsx` ou `.tsx`.
- `src/App.tsx`, `src/main.tsx`, `src/App.jsx`.

Resultado:

```text
React — confiança alta
```

### 4.5 Next.js

Sinais:

- dependência `next`.
- `next.config.js`, `next.config.mjs`, `next.config.ts`.
- diretório `app/` com arquivos Next.
- diretório `pages/`.

### 4.6 Firebase

Sinais:

- `firebase.json`.
- `.firebaserc`.
- dependência `firebase`.
- dependência `firebase-admin`.
- diretório `functions/`.

### 4.7 Supabase

Sinais:

- diretório `supabase/`.
- dependência `@supabase/supabase-js`.
- `supabase/config.toml`.

### 4.8 Python

Sinais:

- `pyproject.toml`.
- `requirements.txt`.
- `Pipfile`.
- `poetry.lock`.
- arquivos `.py`.

### 4.9 Monorepo

Sinais:

- `packages/`.
- `apps/`.
- `pnpm-workspace.yaml`.
- `turbo.json`.
- `nx.json`.

## 5. Saída pública recomendada

No terminal:

```text
Stack provável encontrada:
- Node.js: alta confiança
- Vite: alta confiança
- React: alta confiança
- TypeScript: média confiança
```

Em docs:

```md
## Stack provável

| Tecnologia | Confiança | Evidências seguras |
|---|---|---|
| Node.js | alta | package.json encontrado |
| Vite | alta | dependência vite; vite.config.ts |
| React | alta | dependência react; src/App.tsx |
```

## 6. Calibração de risco

### 6.1 Problema

Risco não pode ser avaliado igual para um diretório vazio, um MVP novo e um sistema em produção.

### 6.2 Modelo recomendado

```ts
export type RiskSeverity = 'informativo' | 'baixo' | 'medio' | 'alto' | 'critico';
```

### 6.3 Regras de severidade

| Sinal | Projeto novo | Em andamento | Legado |
|---|---:|---:|---:|
| Sem README | baixo | médio | médio |
| Sem testes | baixo/médio | médio | alto |
| Sem CI | baixo | médio | médio/alto |
| Arquivo `.env` versionável | alto | alto | alto |
| Dump de banco | crítico | crítico | crítico |
| CSV com dados reais aparente | alto/crítico | alto/crítico | alto/crítico |
| Credencial por nome de arquivo | crítico | crítico | crítico |

## 7. Mensagens brasileiras e leves

Para risco baixo:

```text
Tá tudo bem por enquanto, mas isso merece entrar no radar.
```

Para risco médio:

```text
Aqui já vale organizar antes que vire dor de cabeça.
```

Para risco alto:

```text
Atenção: isso pode virar problema sério se for para produção.
```

Para risco crítico:

```text
Ponto crítico: antes de seguir, resolva isso para não expor dado, quebrar produção ou gerar prejuízo.
```

## 8. Testes obrigatórios

1. Node fake detecta Node.js.
2. Vite/React fake detecta Node.js, Vite e React.
3. TypeScript fake detecta TypeScript.
4. Supabase fake detecta Supabase.
5. Firebase fake detecta Firebase.
6. Diretório vazio não tem risco crítico por falta de stack.
7. Projeto novo sem testes não é crítico.
8. Projeto existente com `.env` detectado tem risco alto.
9. Projeto com arquivo `backup-database.sql` tem risco crítico.
10. `status` mostra stack após diagnóstico.

## 9. Definition of Done

- Heurísticas corrigidas.
- Saída de terminal clara.
- Documentos 00–09 registram stack provável.
- State registra stack em formato estruturado.
- Testes cobrindo Node e Vite/React passam.
- Score de readiness recalculado após correção.
