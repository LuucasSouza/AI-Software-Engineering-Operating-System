# pt202 — Alpha Blocker Fix Plan

## 1. Objetivo

Corrigir os achados P1 e P2 da Phase 11 antes de qualquer decisão de public alpha.

## 2. Achados vindos da Phase 11

| Severidade | Achado | Impacto | Ação na Phase 12 |
|---|---|---|---|
| P1 | Validação com usuários reais pendente | Não há evidência humana externa | Criar protocolo e registrar validações reais ou marcar bloqueio |
| P1 | Stack Node/Vite/React não aparece nos cenários simulados | Diagnóstico perde credibilidade | Corrigir heurísticas e testes |
| P2 | `resolver` fala como se `validar` fosse futuro | UX desatualizada | Atualizar copy |
| P2 | Hardening crítico agressivo em cenários simples | Pode assustar usuário iniciante | Calibrar scoring e linguagem |

## 3. Correção P1 — Stack detection

### 3.1 Problema provável

O diagnóstico pode estar inspecionando arquivos certos, mas não exibindo stack no resumo, ou pode estar procurando sinais insuficientes.

### 3.2 Regras mínimas de detecção

O CLI deve detectar pelo menos:

| Stack | Sinais locais |
|---|---|
| Node.js | `package.json`, `node_modules`, scripts npm, `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock` |
| TypeScript | `tsconfig.json`, dependência `typescript`, arquivos `.ts` ou `.tsx` |
| React | dependência `react`, `react-dom`, arquivos `.jsx` ou `.tsx`, `src/App.*` |
| Vite | dependência `vite`, `vite.config.*`, scripts contendo `vite` |
| Next.js | dependência `next`, `next.config.*`, diretório `app/` ou `pages/` com Next |
| Testes | `vitest`, `jest`, `playwright`, `cypress`, `*.test.*`, `*.spec.*` |

### 3.3 Resultado esperado

Em projeto fake com `package.json` contendo:

```json
{
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "typescript": "latest"
  }
}
```

O diagnóstico deve listar algo como:

```text
Stack provável: Node.js, TypeScript, Vite, React
```

### 3.4 Testes obrigatórios

Adicionar ou ajustar testes para:

- Node fake detecta Node.js.
- Vite/React fake detecta Node.js, Vite e React.
- TypeScript fake detecta TypeScript.
- Status após diagnóstico exibe stack detectada.
- Documentos 00–09 registram stack provável.

## 4. Correção P2 — Copy do resolver

### 4.1 Problema

O comando `resolve-ai resolver` ainda fala como se `resolve-ai validar` fosse uma fase futura, mas `validar` já existe.

### 4.2 Copy esperada

Trocar mensagens futuras por mensagens atuais:

```text
Depois que o agente executar a tarefa, rode:
resolve-ai validar
```

Não usar:

```text
Em uma fase futura, rode validar...
```

### 4.3 Testes obrigatórios

Adicionar teste de snapshot textual simples ou assert de string para garantir que a mensagem não contenha:

- `futuro`
- `fase futura`
- `ainda não existe`

quando se referir a `validar`.

## 5. Correção P2 — Hardening agressivo

### 5.1 Problema

Cenários simples podem receber alerta de hardening crítico por ausência de testes/CI/security docs, mesmo quando são diretórios vazios ou projetos novos.

### 5.2 Regra nova

A severidade deve considerar o tipo do projeto:

| Tipo de projeto | Ausência de testes | Ausência de CI | Arquivo sensível | Dados reais versionados |
|---|---:|---:|---:|---:|
| novo | P3/P2 | P3/P2 | P1 | P0/P1 |
| em andamento | P2 | P2 | P1 | P0/P1 |
| legado | P2/P1 | P2/P1 | P1 | P0/P1 |
| indeterminado | P2 | P2 | P1 | P0/P1 |

### 5.3 Linguagem recomendada

Para usuário brasileiro iniciante, evitar alarmismo:

```text
Ainda não encontrei testes ou CI. Para um projeto novo isso é normal, mas vale entrar no plano antes de crescer.
```

Em vez de:

```text
Risco crítico: projeto sem testes e sem CI.
```

### 5.4 Testes obrigatórios

- Diretório vazio não deve gerar hardening crítico por ausência de testes.
- Projeto novo sem testes deve recomendar melhoria, não bloqueio.
- Projeto existente com arquivos sensíveis deve gerar bloqueio crítico.
- Projeto com dados reais aparentes por nome deve destacar risco alto sem copiar conteúdo.

## 6. Correção P1 — Validação com usuários reais

### 6.1 Perfis mínimos

A Phase 12 deve criar artefatos para registrar validação com:

1. Non-Technical Builder.
2. Vibe Coder.
3. Professional Engineer.

### 6.2 Regra de honestidade

Se não houver usuários reais disponíveis durante a execução da Phase 12, registrar como pendência bloqueante para public alpha.

Não inventar validação.

## 7. Definition of Done

A Phase 12 só conclui corretamente se:

- P1 de stack detection foi corrigido ou documentado como bloqueio.
- P2 de copy do resolver foi corrigido.
- P2 de hardening foi calibrado.
- Validação real foi registrada ou marcada como blocker.
- Scorecard foi recalculado.
- Release recommendation foi formalizada.
