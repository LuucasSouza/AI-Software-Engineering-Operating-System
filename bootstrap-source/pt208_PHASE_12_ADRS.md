# pt208 — Phase 12 ADRs

## 1. Objetivo

Criar ADRs 0176 a 0185 documentando as decisões da Phase 12.

## 2. ADRs obrigatórias

### ADR 0176 — Require blocker correction before public alpha

Decisão:

Nenhum public alpha deve ser recomendado enquanto P1s conhecidos estiverem sem correção, mitigação ou decisão explícita documentada.

### ADR 0177 — Improve stack detection before npm release

Decisão:

A detecção mínima de Node.js, TypeScript, Vite e React é requisito para alpha público porque esses são cenários comuns e estavam falhando na Phase 11.

### ADR 0178 — Calibrate risk severity by project type

Decisão:

Risco deve considerar projeto novo, em andamento, legado ou indeterminado. Ausência de testes em projeto novo não deve ser tratada como crítica.

### ADR 0179 — Require real user validation evidence

Decisão:

Validação simulada não equivale a validação externa. Release público exige evidência humana ou decisão explícita de alpha controlado.

### ADR 0180 — Keep npm publication manual

Decisão:

A publicação npm deve permanecer manual e separada da Phase 12.

### ADR 0181 — Keep Git tagging manual

Decisão:

Tags de release devem ser criadas apenas após Go/No-Go aprovado pelo mantenedor.

### ADR 0182 — Use public alpha release candidate documents

Decisão:

Criar documentos de release candidate, release notes draft, checklist npm e Go/No-Go antes de publicar.

### ADR 0183 — Keep Portuguese-first public UX

Decisão:

A experiência pública deve continuar em português brasileiro, leve e clara.

### ADR 0184 — Maintain no-telemetry alpha policy

Decisão:

O alpha deve continuar sem telemetria, sem chamadas externas e sem coleta automática.

### ADR 0185 — Separate release prep from release execution

Decisão:

Preparar release e executar release são fases separadas para reduzir risco operacional.

## 3. Template

Cada ADR deve seguir o padrão existente do repositório e incluir:

- Status;
- Context;
- Decision;
- Consequences;
- Alternatives considered;
- Related documents.

## 4. Atualizações obrigatórias

Atualizar:

```text
adr/README.md
docs/architecture/decision-log.md
CHANGELOG.md
ROADMAP.md
```
