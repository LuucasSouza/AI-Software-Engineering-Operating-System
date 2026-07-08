# pt283 — npm Publication Execution Protocol

## Objetivo

Publicar o pacote CLI do Resolve Aí no npm como alpha.

## Premissas

Package directory:

```bash
packages/resolve-ai-cli
```

Expected package version:

```text
0.1.0-alpha.0
```

Expected public release label:

```text
v0.1.0-alpha
```

Expected dist-tag:

```text
alpha
```

## Fatos importantes

- `npm publish` sem `--tag` publica com `latest` por padrão.
- A publicação alpha deve usar `npm publish --tag alpha`.
- Se o pacote for scoped e público, pode ser necessário `--access public`.
- Se o pacote for unscoped, `--access public` normalmente não é necessário.
- Se o nome `resolve-ai` já existir e o mantenedor não tiver permissão, a publicação deve parar.

## Comandos pré-publicação

Rodar na raiz do repo:

```bash
git status --short
git log -1 --oneline
npm run build --prefix packages/resolve-ai-cli
npm test --prefix packages/resolve-ai-cli
npm run smoke --prefix packages/resolve-ai-cli
git diff --check
```

Rodar dentro do pacote:

```bash
cd packages/resolve-ai-cli
npm pack --dry-run
npm whoami
npm ping
npm view resolve-ai name version dist-tags --json
```

## Interpretação de `npm view`

### Caso 1 — pacote não existe

Se `npm view resolve-ai ...` retornar 404, o nome pode estar disponível.

Prosseguir se o mantenedor estiver logado e autorizado.

### Caso 2 — pacote existe e pertence ao mantenedor

Se o pacote existe e o mantenedor tem permissão, verificar versões e dist-tags.

Não publicar se a versão `0.1.0-alpha.0` já existir.

### Caso 3 — pacote existe e não pertence ao mantenedor

Parar.

Não trocar o nome automaticamente.

Registrar blocker:

```text
npm package name unavailable
```

## Comando de publicação

Dentro de `packages/resolve-ai-cli`:

```bash
npm publish --tag alpha
```

## Verificação pós-publicação

```bash
npm view resolve-ai version dist-tags --json
npm view resolve-ai@0.1.0-alpha.0 version --json
npm dist-tag ls resolve-ai
```

A tag `latest` não deve apontar para esta versão, a menos que o pacote já tivesse uma política anterior conhecida. A tag obrigatória para esta release é `alpha`.

## Instalação de verificação

Em uma pasta temporária fora do repo:

```bash
mkdir resolve-ai-alpha-install-test
cd resolve-ai-alpha-install-test
npm init -y
npm install resolve-ai@alpha
npx resolve-ai ajuda
npx resolve-ai começar
npx resolve-ai ligar
npx resolve-ai entrevistar
```

Se `npx resolve-ai ajuda` falhar, registrar blocker pós-publicação.

## Rollback npm

npm não deve ser tratado como algo totalmente reversível.

Se publicar errado:
- Não tentar apagar sem revisar política.
- Preferir publicar correção patch/prerelease.
- Se necessário, usar `npm deprecate` com mensagem clara.
- Seguir rollback plan da Phase 18.
