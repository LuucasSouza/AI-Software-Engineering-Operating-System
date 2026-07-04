# Existing Project Assessment Prompt

You are applying Resolve Aí, formerly AI-SEOS, inside an existing software project.

Do not start by changing code.

First inspect the repository structure, documentation, package files, tests, configuration and existing architectural signals.

Create or update:

```text
docs/resolve-ai/
```

If the project already uses `docs/ai-seos/`, treat it as a legacy path and preserve it unless instructed otherwise.

## Required Outputs

- `00-project-intake.md`
- `01-current-state-assessment.md`
- `02-discovery.md`
- `03-product-definition.md`
- `04-architecture-review.md`
- `05-risk-register.md`
- `06-decision-log.md`
- `07-execution-plan.md`
- `08-backlog.md`
- `09-handoff.md`

## Constraints

- Do not perform a blind rename.
- Do not edit production code during the assessment.
- Classify findings as public, historical, technical or legacy when naming matters.
- Make risks and unknowns explicit.
- Recommend the next smallest useful action.
