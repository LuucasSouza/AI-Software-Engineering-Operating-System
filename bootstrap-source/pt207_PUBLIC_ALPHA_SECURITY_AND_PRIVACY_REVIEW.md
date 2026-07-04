# pt207 — Public Alpha Security and Privacy Review

## 1. Objetivo

Revisar segurança e privacidade antes de qualquer exposição pública do Resolve Aí.

## 2. Princípios obrigatórios

1. Sem telemetria por padrão.
2. Sem chamada externa.
3. Sem coleta de código.
4. Sem leitura profunda de dados sensíveis.
5. Sem publicação automática.
6. Sem commit automático em projeto do usuário.
7. Sem alteração de código do produto pelo CLI.
8. Sem cópia de `.env`, dumps, CSVs reais ou backups.

## 3. Revisão da CLI

Verificar comandos:

| Comando | Pode escrever `.resolve-ai/` | Pode escrever `docs/resolve-ai/` | Pode alterar código do produto | Pode chamar rede |
|---|---:|---:|---:|---:|
| ajuda | não | não | não | não |
| começar | sim | sim | não | não |
| ligar | sim | não | não | não |
| desligar | sim | não | não | não |
| status | não | não | não | não |
| diagnosticar | sim | sim | não | não |
| planejar | sim | sim | não | não |
| preparar | sim | sim | não | não |
| resolver | sim | sim | não | não |
| validar | sim | sim | não | não |

## 4. Arquivos sensíveis

A detecção pode usar nomes/caminhos, mas não conteúdo.

Exemplos de sinais:

```text
.env
.env.local
.env.production
*_secret*
*_credentials*
backup*.sql
*.dump
auth_users.json
service-account.json
private-key.pem
```

## 5. Documentos gerados

Documentos em `docs/resolve-ai/` não devem incluir:

- conteúdo de segredo;
- dados pessoais reais;
- dumps;
- linhas de `.env`;
- tokens;
- chaves;
- CPF, e-mail ou telefone extraídos de arquivos.

Devem incluir apenas:

- achados genéricos;
- nomes de arquivos/caminhos quando seguro;
- recomendações;
- checklists;
- próximos passos.

## 6. Review de package

Antes de npm:

- verificar `files` no package.json;
- garantir que testes, fixtures sensíveis falsas e arquivos temporários não vão para pacote desnecessariamente;
- rodar `npm pack --dry-run`;
- revisar saída.

## 7. Segurança de linguagem

Evitar prometer:

```text
segurança garantida
análise completa
corrige automaticamente
protege seus dados
```

Preferir:

```text
ajuda a identificar sinais de risco
não copia conteúdo sensível por design
não altera seu código automaticamente
```

## 8. Checklist obrigatório

- [ ] CLI não tem fetch/http/https externo operacional.
- [ ] CLI não executa comandos destrutivos.
- [ ] CLI não roda testes automaticamente em projeto do usuário.
- [ ] CLI não commita.
- [ ] CLI não faz deploy.
- [ ] CLI não publica.
- [ ] CLI não lê conteúdo de arquivos sensíveis.
- [ ] Docs explicam limitações.
- [ ] Security policy referencia uso alpha.
- [ ] Known limitations está atualizado.

## 9. Documento obrigatório

Criar:

```text
docs/release/v0.1.0-alpha-security-privacy-review.md
```

Com checklist preenchido e eventuais bloqueios.
