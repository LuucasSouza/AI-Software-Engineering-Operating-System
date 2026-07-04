# pt135 — Safe Read-Only Execution Model

```yaml
title: Safe Read-Only Execution Model for Diagnostics
phase: 5
status: Draft for execution
scope: CLI safety
```

## 1. Regra central

O comando `resolve-ai diagnosticar` deve ser seguro por padrão.

Ele pode criar documentação do Resolve Aí, mas não pode alterar o produto analisado.

## 2. O que pode fazer

Permitido:

- Criar `.resolve-ai/` se necessário.
- Criar `docs/resolve-ai/` se necessário.
- Criar documentos `00` a `09`.
- Atualizar `.resolve-ai/state.json`.
- Ler metadados de arquivos seguros.
- Ler `package.json` e configs comuns.
- Listar diretórios.
- Gerar relatório no terminal.

## 3. O que não pode fazer

Proibido:

- Alterar `src/`, `app/`, `pages/`, `components/`, `lib/`, `services/`, `functions/`.
- Remover arquivos.
- Renomear arquivos.
- Instalar dependências.
- Executar scripts do projeto.
- Alterar `.env`.
- Alterar configurações de deploy.
- Fazer commit.
- Fazer push.
- Chamar APIs externas.
- Enviar dados para fora da máquina.

## 4. Arquivos sensíveis

O CLI deve detectar presença de arquivos sensíveis por nome, mas não deve copiar seu conteúdo.

Exemplos:

```text
.env
.env.local
*_auth_users.json
*secret*
*token*
*password*
*senha*
*.csv
backup*/
dump*/
exports*/
```

## 5. Limites de leitura

Definir limite máximo por arquivo lido.

Sugestão MVP:

```text
100 KB por arquivo textual
```

Para arquivos maiores, registrar apenas:

```text
Arquivo grande encontrado, conteúdo não lido integralmente.
```

## 6. Diretórios ignorados

Ignorar sempre:

```text
node_modules/
.git/
dist/
build/
coverage/
.next/
.vercel/
.cache/
.turbo/
.DS_Store
```

## 7. Fail-safe

Se o CLI encontrar erro inesperado:

- Não deve apagar nada.
- Deve reportar erro claro.
- Deve preservar arquivos já criados.
- Deve sugerir rodar `resolve-ai status`.

## 8. Mensagem de segurança

No início do comando:

```text
Vou diagnosticar este projeto sem alterar código, instalar dependências ou fazer commits.
```

## 9. Testes obrigatórios

Criar testes para garantir que:

- Nenhum arquivo de código seja alterado.
- Arquivos existentes em `docs/resolve-ai/` não sejam sobrescritos.
- Diretórios ignorados não sejam varridos profundamente.
- Arquivos sensíveis sejam detectados sem leitura de conteúdo.
