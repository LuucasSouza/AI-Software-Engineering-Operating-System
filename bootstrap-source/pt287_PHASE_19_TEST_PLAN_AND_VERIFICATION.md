# pt287 — Phase 19 Test Plan and Verification

## Testes antes de publicar

Na raiz:

```bash
git status --short
git log -1 --oneline
npm run build --prefix packages/resolve-ai-cli
npm test --prefix packages/resolve-ai-cli
npm run smoke --prefix packages/resolve-ai-cli
git diff --check
```

No pacote:

```bash
cd packages/resolve-ai-cli
npm pack --dry-run
npm whoami
npm ping
npm view resolve-ai name version dist-tags --json
```

## Verificações do tarball

O dry-run deve confirmar que o pacote contém apenas o necessário.

Não pode conter:

```text
.resolve-ai/
docs/resolve-ai/
feedback/
.env
*.pem
*.key
backups/
```

## Testes após publicar

Em pasta temporária fora do repo:

```bash
npm view resolve-ai@0.1.0-alpha.0 version --json
npm dist-tag ls resolve-ai
npm install -g resolve-ai@alpha
resolve-ai ajuda
resolve-ai começar
resolve-ai ligar
resolve-ai entrevistar
```

Também testar com npx:

```bash
npx resolve-ai@alpha ajuda
```

## Teste mínimo do fluxo

Em pasta temporária:

```bash
mkdir resolve-ai-alpha-smoke
cd resolve-ai-alpha-smoke
resolve-ai começar
resolve-ai ligar
resolve-ai entrevistar
resolve-ai diagnosticar
resolve-ai planejar
resolve-ai preparar
resolve-ai resolver
resolve-ai validar
resolve-ai status
```

Se `entrevistar` entrar em modo interativo, testar com respostas simples ou stdin.

## Verificações de documentação

- README aponta para `@alpha`.
- Known limitations permanecem visíveis.
- Release notes não prometem stable.
- GitHub Release está marcada como pre-release.
- Maintainer approval gate está aprovado.
- Rollback plan existe.

## Resultado esperado

```text
All tests passed
npm alpha published
git tag pushed
GitHub pre-release created
docs updated
```
