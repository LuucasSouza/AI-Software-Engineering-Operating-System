# pt177 — Test Fixtures for `validar`

## Objective
Define test cases for the Phase 9 validation command.

## Required automated tests

### 1. validar in empty directory
Expected:

- command does not crash;
- creates low-confidence validation only if Resolve Aí is active and initialized, or prompts to start;
- does not modify product code.

### 2. validar with Resolve Aí desligado
Expected:

- does not generate docs;
- prints message recommending `resolve-ai ligar`;
- does not update `ultimaValidacao`.

### 3. validar with assisted execution state
Setup:

- run começar;
- run ligar;
- create state with `ultimaExecucaoAssistida`;
- simulate changed file.

Expected:

- generates docs 25 to 29;
- updates state;
- status includes validation.

### 4. validar with Git changes
Setup:

- initialize temporary Git repo;
- create tracked file;
- modify it.

Expected:

- detects changed file path;
- writes changes to `26-mudancas-detectadas.md`.

### 5. validar with sensitive file name
Setup:

- create `.env` or `backups/export.csv`.

Expected:

- marks validation as blocked;
- does not read/copy content;
- warns user.

### 6. validar with docs existing
Expected:

- does not overwrite existing docs by default;
- follows current idempotency convention.

### 7. validar without previous resolver package
Expected:

- produces low-confidence/partial message;
- states no assisted execution package was found.

### 8. validar aliases
Commands:

```bash
resolve-ai valida
resolve-ai revisar
```

Expected:

- same behavior as `validar`.

### 9. status after validar
Expected:

- status displays latest validation summary.

### 10. regression suite
All previous tests must continue passing.

## Manual validation flow

```bash
resolve-ai começar
resolve-ai ligar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
# simulate or perform safe project changes
resolve-ai validar
resolve-ai status
```

## Forbidden test side effects
Tests must not:

- call external APIs;
- install dependencies in fixture projects;
- commit changes;
- push changes;
- deploy;
- use real secrets;
- include real personal data.
