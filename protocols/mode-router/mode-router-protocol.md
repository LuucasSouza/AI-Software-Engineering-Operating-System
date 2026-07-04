---
title: "Mode Router Protocol"
version: "0.1.0"
status: "Draft"
owner: "AI-SEOS Maintainers"
last_updated: "2026-07-03"
document_type: "Protocol"
source: "bootstrap-source/pt67_MODE_ROUTER_AND_TRANSLATION_FRAMEWORK.md"
---

# Mode Router Protocol

## Flow

1. Ask for explicit mode selection.
2. If absent, infer from language signals.
3. Record selected mode and confidence.
4. Select mode-specific intake template.
5. Run Builder Intake Protocol.
6. Produce Discovery Intake Package.
7. Handoff to Discovery Engine.

## Confidence

```yaml
mode_confidence: high | medium | low
needs_mode_confirmation: true | false
```

Low confidence requires confirmation before continuing.
