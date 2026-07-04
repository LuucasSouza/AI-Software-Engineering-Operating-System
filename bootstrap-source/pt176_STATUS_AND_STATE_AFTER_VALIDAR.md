# pt176 — Status and State After `validar`

## Objective
Define how `validar` updates local runtime state and status output.

## State extension
Update `.resolve-ai/state.json` with an `ultimaValidacao` block.

Example:

```json
{
  "ultimaValidacao": {
    "executadaEm": "2026-07-04T12:00:00.000Z",
    "status": "aprovada-com-ressalvas",
    "confianca": "media",
    "mudancasDetectadas": 4,
    "arquivosAlterados": [
      "src/example.ts",
      "README.md"
    ],
    "arquivosSensiveisDetectados": [],
    "riscosRestantes": [
      "Rodar testes manualmente antes de commit"
    ],
    "proximaAcao": "Execute os testes recomendados e revise o checklist antes de commitar."
  }
}
```

## Status output
`resolve-ai status` should include, when available:

```text
Última validação: aprovada-com-ressalvas
Mudanças detectadas: 4 arquivo(s)
Confiança: média
Próxima ação: Execute os testes recomendados e revise o checklist antes de commitar.
```

## Status priority
When multiple states exist, status should show the lifecycle progression:

```text
Diagnóstico → Planejamento → Preparo → Execução Assistida → Validação
```

The latest validation should not hide critical earlier risk signals.

## Validation status mapping

| Status | Meaning | Recommended user action |
|---|---|---|
| pendente | No meaningful changes detected or execution not evident | Execute task or review prepared prompt |
| parcial | Some evidence exists, but validation is incomplete | Review checklist and run tests manually |
| aprovada-com-ressalvas | Work appears aligned, but still needs manual/test confirmation | Run recommended checks before commit |
| bloqueada | Critical risk or sensitive files detected | Stop and address risk before commit |

## Console UX examples

### Success with caveat

```text
✅ Validação gerada.
Status: aprovada com ressalvas.
Próxima ação: rode os testes recomendados antes de commitar.
```

### Blocked

```text
🚨 Validação bloqueada.
Encontrei possível arquivo sensível ou risco crítico.
Não recomendo commit agora.
```

### Low confidence

```text
⚠️ Validação parcial.
Não encontrei evidência suficiente para confirmar que a tarefa foi concluída.
```
