# Use Resolve Aí in an Existing Project

Use this when you already have a repository and want an AI agent to diagnose, document and plan before changing code.

## Important

Open the project you want to analyze, not the Resolve Aí repository itself.

## Preferred Future Output Path

```text
docs/resolve-ai/
```

During migration, `docs/ai-seos/` may be accepted as a legacy path.

## Prompt

Use `templates/prompts/existing-project-assessment-prompt.md`.

## Expected Output

- Current state assessment.
- Entry mode recommendation.
- Discovery summary.
- Product and architecture gaps.
- Decision and risk log.
- Execution plan.
- Handoff package.
