# pt136 — Diagnostic Report and Recommendation Engine

```yaml
title: Diagnostic Report and Recommendation Engine
phase: 5
status: Draft for execution
scope: local heuristic reporting
```

## 1. Objetivo

Definir o relatório final do comando `resolve-ai diagnosticar` e como recomendações devem ser geradas.

## 2. Saída no terminal

O relatório final deve ser curto e útil.

Formato sugerido:

```text
🔎 Diagnóstico concluído

Tipo de projeto: Projeto em andamento
Modo recomendado: Professional Engineer
Confiança: alta

Stack detectada:
- React
- Vite
- TypeScript
- Supabase

Pontos fortes:
- TypeScript detectado
- README encontrado
- Estrutura de app clara

Pontos de atenção:
- Nenhum teste detectado
- Nenhum CI detectado
- Arquivos sensíveis possíveis encontrados

Próximas ações:
1. Leia docs/resolve-ai/05-risk-register.md
2. Revise docs/resolve-ai/07-execution-plan.md
3. Antes de implementar, valide riscos críticos
```

## 3. Categorias de recomendação

O CLI deve recomendar uma ação principal:

```text
continuar
documentar-primeiro
refatorar-com-cuidado
pausar-para-discovery
corrigir-seguranca-primeiro
```

## 4. Heurísticas

### 4.1 Continuar

Quando:

- Estrutura está clara.
- Stack detectada.
- Poucos riscos críticos.
- Documentação mínima existe.

### 4.2 Documentar primeiro

Quando:

- Há código, mas quase nenhuma documentação.
- README ausente ou vazio.
- Decisões implícitas demais.

### 4.3 Refatorar com cuidado

Quando:

- Muitos sinais de acoplamento.
- Estrutura confusa.
- Pastas de legado misturadas.
- Falta separação de responsabilidades.

### 4.4 Pausar para discovery

Quando:

- Não dá para inferir problema de negócio.
- Projeto parece ser ideia inicial.
- Não há clareza de usuário/produto.

### 4.5 Corrigir segurança primeiro

Quando:

- `.env` detectado.
- Dumps/backups reais detectados.
- Arquivos com nomes de secrets/tokens/senhas detectados.
- CSVs reais com possível dado pessoal detectados.

## 5. Score simples de maturidade

Gerar um score inicial:

```text
Maturidade: 0 a 5
```

Critérios:

- 0: Sem estrutura detectável.
- 1: Projeto inicial.
- 2: Projeto funcional, pouco documentado.
- 3: Projeto em andamento com estrutura razoável.
- 4: Projeto bem estruturado, faltando validações.
- 5: Projeto maduro com docs, testes, CI e segurança básica.

Não inflar score.

## 6. Recomendações nos documentos

A recomendação final deve aparecer em:

- `00-project-intake.md`
- `07-execution-plan.md`
- `09-handoff.md`

## 7. Próximos passos padrão

Para projeto existente:

```text
1. Revisar riscos.
2. Validar decisões implícitas.
3. Criar backlog incremental.
4. Só então implementar.
```

Para projeto novo:

```text
1. Fazer entrevista.
2. Definir MVP.
3. Criar plano.
4. Só então criar código.
```

## 8. Honestidade

O CLI deve ser claro:

```text
Este diagnóstico é heurístico e local. Para análise profunda, use estes documentos como contexto em um agente de IA.
```
