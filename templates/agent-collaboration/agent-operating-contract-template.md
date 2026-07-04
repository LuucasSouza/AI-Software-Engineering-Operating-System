# Agent Operating Contract

```yaml
agent: <agent-name>
version: <version>
mission: <mission>
primary_engines:
  - <engine>
inputs:
  - <artifact>
outputs:
  - <artifact>
can_decide:
  - <decision-type>
must_escalate:
  - <condition>
must_not_do:
  - <boundary>
quality_gates:
  - <gate>
handoff_targets:
  - <agent>
```
