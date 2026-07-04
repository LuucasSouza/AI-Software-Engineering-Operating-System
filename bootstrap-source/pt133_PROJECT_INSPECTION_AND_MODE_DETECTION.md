# pt133 — Project Inspection and Mode Detection

```yaml
title: Project Inspection and Mode Detection
phase: 5
status: Draft for execution
scope: CLI diagnostic heuristics
```

## 1. Objetivo

Definir como o comando `resolve-ai diagnosticar` deve inspecionar um projeto e sugerir o modo correto.

O MVP deve usar heurísticas simples, determinísticas e transparentes.

## 2. Tipos de projeto

O CLI deve classificar o projeto em uma das categorias:

```text
novo
em-andamento
legado
indeterminado
```

### 2.1 Projeto novo

Sinais:

- Poucos arquivos.
- Sem `package.json` ou com estrutura mínima.
- Sem `src/`, `app/`, `pages/` ou equivalentes.
- Sem README relevante.

### 2.2 Projeto em andamento

Sinais:

- Tem código fonte.
- Tem dependências.
- Tem README ou documentação parcial.
- Tem estrutura ativa de app.
- Pode ter roadmap, docs ou backlog.

### 2.3 Projeto legado

Sinais:

- Muitas pastas antigas ou dumps.
- Nomes como `legacy/`, `old/`, `backup/`, `deprecated/`.
- Pouca documentação.
- Configurações antigas.
- Mistura de código, backups e artefatos manuais.

### 2.4 Indeterminado

Quando os sinais são insuficientes.

## 3. Modos do Resolve Aí

O CLI deve recomendar um modo principal:

```text
Non-Technical Builder
Vibe Coder
Professional Engineer
Projeto em Andamento — Diagnóstico e Continuação
```

## 4. Heurísticas de recomendação

### 4.1 Non-Technical Builder

Usar quando:

- Projeto não tem código.
- Usuário está começando pela ideia.
- Não há stack detectável.
- README descreve problema em linguagem de negócio, mas não há implementação.

### 4.2 Vibe Coder

Usar quando:

- Projeto tem código, mas pouca documentação.
- Há muitos arquivos sem organização clara.
- Não há testes.
- Não há CI.
- Há sinais de implementação rápida sem governança.

### 4.3 Professional Engineer

Usar quando:

- Projeto tem TypeScript, configs claras, documentação, padrões e estrutura coerente.
- Tem testes ou scripts de qualidade.
- Tem CI ou arquitetura documentada.
- Tem decisões técnicas explícitas.

### 4.4 Projeto em Andamento — Diagnóstico e Continuação

Usar como fluxo quando:

- O projeto já existe.
- Há funcionalidades implementadas.
- O objetivo é continuar com segurança.
- O comando está sendo rodado em repositório real.

Esse fluxo pode combinar com Vibe Coder ou Professional Engineer.

Exemplo:

```text
Fluxo: Projeto em Andamento — Diagnóstico e Continuação
Modo técnico recomendado: Professional Engineer
```

## 5. Detecção de stack

### 5.1 Node/Frontend

Sinais:

- `package.json`
- `vite.config.*`
- `next.config.*`
- `src/`
- `app/`
- `pages/`

Detectar dependências comuns:

- React
- Next.js
- Vite
- Vue
- Svelte
- Tailwind
- TypeScript
- TanStack Query
- Zustand
- Prisma
- Supabase
- Firebase

### 5.2 Backend

Sinais:

- `server/`
- `api/`
- `functions/`
- `routes/`
- `controllers/`
- `prisma/`
- `supabase/`
- `firebase.json`

### 5.3 Deploy/Infra

Sinais:

- `vercel.json`
- `netlify.toml`
- `.github/workflows/`
- `Dockerfile`
- `docker-compose.yml`
- `firebase.json`
- `supabase/`

## 6. Sinais de risco inicial

Detectar sem ler conteúdo sensível:

- Presença de `.env` rastreável no working tree.
- Pastas `backup`, `backups`, `dump`, `exports`.
- CSVs grandes.
- Arquivos com nomes contendo `users`, `clientes`, `auth`, `senha`, `password`, `secret`, `token`.
- Ausência de testes.
- Ausência de CI.
- Ausência de README.

## 7. Saída de detecção

Gerar objeto interno:

```ts
type ProjectDetection = {
  projectType: 'novo' | 'em-andamento' | 'legado' | 'indeterminado'
  recommendedFlow: string
  recommendedMode: string
  stack: string[]
  signals: string[]
  risks: string[]
  confidence: 'baixa' | 'media' | 'alta'
}
```

## 8. Transparência

O CLI deve explicar:

```text
Recomendei Professional Engineer porque encontrei TypeScript, documentação, estrutura clara e scripts de qualidade.
```

Não deve agir como se tivesse certeza absoluta quando a detecção for heurística.
