# pt244 — Feedback, Fix and Copy Calibration

## 1. Objetivo

A Phase 15B pode aplicar correções pequenas se houver:

1. feedback real de participantes;
2. achado já registrado em fases anteriores;
3. lacuna clara de copy/segurança que não exige validação adicional para ser corrigida.

Ela não deve implementar funcionalidades grandes.

## 2. Áreas permitidas para correção

### 2.1 Copy da CLI

Permitido ajustar textos de:

- `ajuda`
- `status`
- `preparar`
- `resolver`
- `executar`
- `validar`

Objetivo:

- reforçar que nada é executado automaticamente;
- reduzir ambiguidade;
- manter tom brasileiro;
- manter clareza para público não técnico.

### 2.2 Documentação

Permitido atualizar:

- README raiz;
- README da CLI;
- quickstart alpha;
- docs de instalação local;
- docs de known limitations;
- docs de private alpha.

### 2.3 Testes

Se a copy for ajustada, atualizar testes snapshot/textuais se existirem.

### 2.4 Package review

Permitido ajustar `package.json` apenas para:

- metadados;
- files;
- bin;
- scripts;
- descrição;
- keywords;
- engines;
- license.

Não publicar.

## 3. Correções especialmente recomendadas

Mesmo sem feedback real, revisar se os comandos abaixo deixam claro o comportamento seguro:

### `resolve-ai resolver`

Deve comunicar:

- não altera código;
- não executa tarefa sozinho;
- gera pacote de execução assistida;
- usuário/agente externo ainda deve executar com aprovação humana;
- depois deve rodar `resolve-ai validar`.

### `resolve-ai executar`

Como alias de `preparar`, deve comunicar:

- “executar” aqui significa preparar a execução;
- não roda código;
- não modifica o projeto;
- se o usuário esperava execução automática, explicar que o Resolve Aí ainda não faz isso.

### `resolve-ai validar`

Deve comunicar:

- revisa mudanças;
- não executa testes automaticamente;
- não faz commit;
- não faz deploy;
- recomenda próximos passos.

## 4. Linguagem sugerida

### 4.1 Para resolver

```text
Resolve Aí preparou a execução assistida.

Importante: nada foi alterado automaticamente.
Eu gerei um pacote para você ou outro agente executar com cuidado.
Depois da execução, rode: resolve-ai validar.
```

### 4.2 Para executar

```text
Aqui, "executar" não sai fazendo mudanças sozinho.
No Resolve Aí, este comando prepara uma tarefa segura para execução assistida.
Nada foi alterado no código do projeto.
```

### 4.3 Para validar

```text
Vou revisar o que mudou e gerar um relatório de validação.
Não vou fazer commit, deploy nem rodar testes automaticamente nesta fase.
```

## 5. Matriz de decisão para fixes

| Tipo de achado | Pode corrigir na Phase 15B? | Exemplo |
|---|---|---|
| Copy ambígua | Sim | `resolver` parece autoexecução |
| Texto longo demais | Sim | ajuda confusa |
| Erro em README | Sim | comando errado |
| Package files incorreto | Sim | src entrando no tarball |
| Nova funcionalidade | Não | MCP |
| Execução automática | Não | agente aplicando patch sozinho |
| Telemetria | Não | analytics |
| Hook | Não | pre-commit automático |

## 6. Registro obrigatório de fixes

Criar ou atualizar:

```text
docs/community/private-alpha-phase-15b-fixes-applied.md
```

Formato:

| Fix ID | Origem | Severidade | Arquivo | Mudança | Teste |
|---|---|---|---|---|---|

Se nenhum fix for aplicado:

```text
Nenhum fix aplicado. Motivo: sem feedback real suficiente ou sem lacuna técnica/copy clara.
```

## 7. Safety regression check

Depois de qualquer fix, verificar:

- não alterou comportamento read-only;
- não adicionou chamadas externas;
- não adicionou telemetria;
- não criou hooks;
- não executou comandos destrutivos;
- testes continuam passando;
- smoke continua passando;
- package dry-run continua limpo.

## 8. Critério de aceitação

A Phase 15B só deve dizer que a percepção de segurança melhorou se:

- houve feedback real confirmando; ou
- a copy foi objetivamente ajustada para reduzir ambiguidade, mas deve ser marcada como “mitigação documental/copy”, não validação humana.
