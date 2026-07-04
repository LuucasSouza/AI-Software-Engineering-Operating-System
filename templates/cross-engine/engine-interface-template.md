# Engine Interface Template

```yaml
engine: <engine-name>
version: <version>
status: <draft|active|stable|deprecated>
upstream_engines:
  - <engine>
inputs:
  - artifact: <artifact-name>
    required: true
    quality_gate: <gate-name>
outputs:
  - artifact: <artifact-name>
    consumer: <engine-or-agent>
quality_gates:
  - <gate>
failure_modes:
  - <failure-mode>
rollback_or_rework:
  - <rule>
```
