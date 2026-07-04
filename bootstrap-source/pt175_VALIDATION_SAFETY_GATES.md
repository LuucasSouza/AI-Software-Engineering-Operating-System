# pt175 — Validation Safety Gates

## Objective
Define the safety rules that `resolve-ai validar` must respect.

## Primary rule
Validation must not mutate product code.

The only allowed writes are Resolve Aí documents and Resolve Aí local state.

Allowed writes:

```text
docs/resolve-ai/25-*.md
docs/resolve-ai/26-*.md
docs/resolve-ai/27-*.md
docs/resolve-ai/28-*.md
docs/resolve-ai/29-*.md
.resolve-ai/state.json
```

## Forbidden actions
The command must not:

- edit product source code;
- install packages;
- delete files;
- run migrations;
- run deploy;
- run build automatically;
- run tests automatically in this phase;
- stage files;
- commit files;
- push files;
- reset or clean Git state;
- call external services;
- send telemetry.

## Allowed read-only inspections

```bash
git status --porcelain
git diff --name-only
git diff --stat
```

Filesystem inspection is allowed for file names, paths and safe metadata.

## Sensitive file handling
If sensitive file names are detected, the command must:

1. mark validation as `bloqueada`;
2. avoid reading/copying content;
3. list only paths or redacted path hints;
4. recommend security review;
5. recommend not committing.

Sensitive patterns include:

```text
.env
.env.local
*.pem
*.key
*.p12
secrets/**
backups/**
*_auth_users.json
*.csv
*.xlsx
service-role*
credentials*
```

## Resolve Aí desligado
If Resolve Aí is desligado:

- do not generate validation docs;
- do not update validation state;
- print instruction to run `resolve-ai ligar`.

## Critical risk handling
If previous state includes critical risks, `validar` should not ignore them.

It should include them in `28-riscos-pos-execucao.md` and mark validation as at most `parcial`, unless the risk is clearly addressed by the changes.

Because this phase is heuristic, it should not claim a critical risk was fully resolved unless evidence is strong.

## No false approval
Avoid saying:

```text
Aprovado.
```

Prefer:

```text
Aprovado com ressalvas.
```

until automated checks and human validation are formalized.

## Future phase boundary
Automated test execution belongs to a future phase.

This phase may generate recommended test commands, but must not run them by default.
