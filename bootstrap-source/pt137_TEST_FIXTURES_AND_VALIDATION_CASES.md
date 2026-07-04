# pt137 — Testing and Validation Cases for Diagnostics

```yaml
title: Phase 5 Testing and Validation Cases
phase: 5
status: Draft for execution
scope: automated and manual CLI tests
```

## 1. Objetivo

Definir os testes obrigatórios para o comando `resolve-ai diagnosticar`.

## 2. Testes automatizados mínimos

Criar testes para:

1. Comando `diagnosticar` em diretório vazio.
2. Comando `diagnosticar` em projeto Node simples.
3. Comando `diagnosticar` em projeto Vite/React fake.
4. Criação de `docs/resolve-ai/00` a `09`.
5. Não sobrescrever arquivos existentes.
6. Atualização de `.resolve-ai/state.json`.
7. Detecção de `package.json`.
8. Detecção de ausência de testes.
9. Detecção de ausência de CI.
10. Detecção de arquivos sensíveis por nome sem copiar conteúdo.
11. Idempotência.
12. Compatibilidade com `docs/ai-seos/` legado sem migração automática.

## 3. Fixtures sugeridas

Criar dentro de testes temporários ou fixtures:

```text
fixtures/empty-project/
fixtures/node-project/
fixtures/vite-react-project/
fixtures/project-with-existing-docs/
fixtures/project-with-sensitive-file-names/
fixtures/project-with-legacy-ai-seos-docs/
```

Se o projeto preferir não versionar fixtures, criar em diretório temporário durante os testes.

## 4. Testes manuais obrigatórios

Executar manualmente:

```bash
node packages/resolve-ai-cli/dist/index.js diagnosticar
node packages/resolve-ai-cli/dist/index.js diagnostico
node packages/resolve-ai-cli/dist/index.js status
```

Verificar:

- Terminal claro.
- Documentos criados.
- Código do projeto não alterado.
- State atualizado.
- Rodar duas vezes não quebra.

## 5. Validação de segurança

Criar projeto temporário com:

```text
.env
backup/users.csv
backups-supabase/_auth_users.json
```

O CLI deve:

- Registrar risco.
- Não copiar conteúdo.
- Não deletar.
- Não imprimir segredo.

## 6. Critérios de aceite

A Phase 5 passa se:

- Todos os testes passam.
- `diagnosticar` funciona localmente.
- `docs/resolve-ai/` é gerado.
- `state.json` é atualizado.
- Não há alteração destrutiva.
- Documentação do CLI foi atualizada.
- README raiz menciona o comando.

## 7. Relatório de validação

Criar:

```text
docs/sprints/phase-5-validation-report.md
```

Com:

- Testes executados.
- Resultados.
- Gaps.
- Pendências.
- Próxima fase recomendada.
