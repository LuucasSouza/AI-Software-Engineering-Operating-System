# pt172 — `resolve-ai validar` Command Specification

## Command

```bash
resolve-ai validar
```

## Aliases

```bash
resolve-ai valida
resolve-ai revisar
```

## Purpose
Review the current project after an assisted execution step and generate a post-execution validation package.

## User-facing promise

```text
Vou revisar o que mudou, comparar com o que foi preparado e te dizer o que ainda precisa conferir antes de seguir.
```

## Command category
Validation / Review / Safety Gate

## Public UX language
The command should use Brazilian Portuguese, with simple and direct copy.

Examples:

```text
🔎 Validando o que mudou no projeto...
```

```text
📌 Encontrei mudanças locais. Vou organizar isso em docs/resolve-ai/.
```

```text
⚠️ Não consegui garantir que a tarefa foi concluída. Revise o checklist antes de commitar.
```

## Inputs
The command may use:

- `.resolve-ai/state.json`
- `.resolve-ai/config.json`
- `docs/resolve-ai/15-tarefa-preparada.md`
- `docs/resolve-ai/16-prompt-de-implementacao.md`
- `docs/resolve-ai/17-plano-de-validacao-da-tarefa.md`
- `docs/resolve-ai/18-riscos-da-execucao.md`
- `docs/resolve-ai/19-handoff-de-execucao.md`
- `docs/resolve-ai/20-execucao-assistida.md`
- `docs/resolve-ai/21-aprovacao-humana.md`
- `docs/resolve-ai/22-prompt-final-para-agente.md`
- `docs/resolve-ai/23-checklist-pos-execucao.md`
- `docs/resolve-ai/24-registro-de-execucao.md`
- Git metadata, if available
- safe file paths and metadata

## Outputs
The command must generate, without overwriting by default:

```text
docs/resolve-ai/25-relatorio-de-validacao.md
docs/resolve-ai/26-mudancas-detectadas.md
docs/resolve-ai/27-checklist-pos-execucao.md
docs/resolve-ai/28-riscos-pos-execucao.md
docs/resolve-ai/29-handoff-pos-validacao.md
```

## State updates
Update `.resolve-ai/state.json` with:

```json
{
  "ultimaValidacao": {
    "executadaEm": "ISO_DATE",
    "status": "pendente|parcial|aprovada-com-ressalvas|bloqueada",
    "mudancasDetectadas": 0,
    "arquivosAlterados": [],
    "riscosRestantes": [],
    "proximaAcao": "string"
  }
}
```

## Status integration
`resolve-ai status` must show:

- whether a validation exists;
- validation status;
- number of detected changed files;
- next recommended action.

## Behavior when Resolve Aí is desligado
If Resolve Aí is desligado, `validar` must not generate docs.

It should print:

```text
Resolve Aí está desligado.
Para validar o projeto, rode: resolve-ai ligar
```

## Behavior without previous execution package
If no `resolver`/assisted execution package exists, the command should still provide a useful low-confidence validation, but clearly state:

```text
Não encontrei uma execução assistida anterior.
Vou fazer uma validação limitada do estado atual.
```

## Git behavior
The command may execute safe read-only Git commands:

```bash
git status --porcelain
git diff --name-only
git diff --stat
```

It must not execute:

```bash
git add
git commit
git push
git reset
git clean
git checkout
git restore
```

## Validation statuses

### bloqueada
Use when:

- critical risks remain;
- sensitive files are detected;
- validation cannot proceed safely;
- execution package is missing and changes are risky.

### parcial
Use when:

- changes exist but cannot be fully matched to the prepared task;
- there is insufficient evidence;
- manual checks are required.

### aprovada-com-ressalvas
Use when:

- changes appear aligned with the prepared task;
- no critical risks are detected;
- manual tests are still recommended.

### pendente
Use when:

- no changes were detected;
- execution appears not to have happened;
- validation docs were created but action remains pending.

## Non-goals
Do not implement:

- automated test execution;
- LLM-based semantic validation;
- MCP integration;
- hooks;
- telemetry;
- auto-commit;
- deployment validation.
