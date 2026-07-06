# pt246 — NPM Package Final Alpha Review

## 1. Objetivo

A Phase 15B deve revisar novamente o pacote npm simulado, garantindo que o tarball continue pequeno, seguro e coerente com alpha.

## 2. Comando obrigatório

Executar dentro de `packages/resolve-ai-cli`:

```bash
npm pack --dry-run
```

Não usar publicação real.

## 3. Critérios de revisão

Verificar:

- `src/` não entra no pacote, salvo decisão explícita;
- `tests/` não entra no pacote;
- `dist/` entra;
- `README.md` entra;
- `package.json` entra;
- arquivos sensíveis não entram;
- docs internas pesadas não entram;
- tamanho do pacote continua aceitável;
- bin `resolve-ai` aponta para arquivo correto.

## 4. Registro obrigatório

Criar ou atualizar:

```text
docs/release/v0.1.0-alpha-phase-15b-package-review.md
```

Conteúdo:

- comando executado;
- resultado;
- quantidade de arquivos;
- package size;
- unpacked size;
- lista resumida de arquivos;
- riscos;
- recomendação.

## 5. package.json

Revisar, sem publicar:

- `name`
- `version`
- `description`
- `bin`
- `files`
- `scripts`
- `engines`
- `keywords`
- `license`
- `repository`
- `bugs`
- `homepage`

## 6. Versionamento

Manter versão alpha. Exemplo:

```json
"version": "0.1.0-alpha.0"
```

Não alterar versão sem decisão explícita de release.

## 7. Não objetivos

Não executar:

```bash
npm publish
```

Não criar:

```bash
git tag
```

Não criar release GitHub.

## 8. Checklist de package

| Item | Status |
|---|---|
| dist incluído | |
| README incluído | |
| package.json incluído | |
| src excluído | |
| tests excluído | |
| arquivos sensíveis excluídos | |
| bin correto | |
| package size adequado | |
| package dry-run passou | |
| pronto para publicação manual futura | |

## 9. Condição para GO técnico

O package pode receber “technical GO” se:

- dry-run passou;
- tarball sem src/tests;
- sem dados sensíveis;
- bin correto;
- smoke test passou;
- build passou;
- testes passaram.

Mas “technical GO” não equivale a “product GO”.

Product GO depende da validação humana.
