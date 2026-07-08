# pt289 — Publication Execution Report Template

Criar:

```text
docs/release/v0.1.0-alpha-rc/publication-execution-report.md
```

## Template

```markdown
# Publication Execution Report — v0.1.0-alpha

## Summary

Status:
- [ ] Published
- [ ] Blocked
- [ ] Partially published

Decision:
- [ ] RELEASED AS PUBLIC ALPHA
- [ ] BLOCKED BEFORE NPM
- [ ] BLOCKED AFTER NPM
- [ ] INCIDENT / ROLLBACK REQUIRED

## Maintainer approval

Gate file:
docs/release/v0.1.0-alpha-rc/maintainer-approval-gate.md

Status:
- [ ] Approved
- [ ] Not approved

## Pre-publication checks

- [ ] git status clean
- [ ] build passed
- [ ] tests passed
- [ ] smoke passed
- [ ] git diff --check passed
- [ ] npm pack dry-run passed
- [ ] no sensitive files in tarball
- [ ] npm login confirmed
- [ ] package name checked
- [ ] package version checked

## npm publication

Command:

```bash
npm publish --tag alpha
```

Result:

```text
<PASTE RESULT>
```

npm package URL:

```text
<URL>
```

Dist-tags:

```text
<PASTE npm dist-tag ls resolve-ai>
```

## Post-publication install test

Commands:

```bash
npm install -g resolve-ai@alpha
resolve-ai ajuda
npx resolve-ai@alpha ajuda
```

Result:

```text
<PASTE RESULT>
```

## Git tag

Tag:

```text
v0.1.0-alpha
```

Command:

```bash
git tag -a v0.1.0-alpha -m "v0.1.0-alpha"
git push origin v0.1.0-alpha
```

Result:

```text
<PASTE RESULT>
```

## GitHub Release

Release type:
- [ ] Pre-release
- [ ] Stable release

URL:

```text
<URL>
```

## Documentation updates

- [ ] README updated
- [ ] CHANGELOG updated
- [ ] ROADMAP updated
- [ ] release docs updated
- [ ] known limitations visible
- [ ] rollback plan visible

## Final score

Previous:

```text
90/100 — RELEASE CANDIDATE READY
```

New:

```text
<NEW SCORE>
```

## Final decision

```text
<FINAL DECISION>
```

## Follow-up

- [ ] Collect first public alpha feedback
- [ ] Open Phase 20 backlog
- [ ] Monitor npm/GitHub issues manually
```
