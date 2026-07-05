# pt237 — Release Decision Reassessment

## 1. Objetivo

Reavaliar se o Resolve Aí pode avançar para public alpha após a expansão do alpha privado.

A decisão deve ser baseada em evidência, não em vontade de lançar.

## 2. Score anterior

A Phase 14 terminou com:

```text
78/100 — LIMITED GO
```

Motivo principal:

- nenhuma validação real executada;
- três P1s de validação humana pendentes;
- publicação npm/tag/release ainda manual e bloqueada.

## 3. Modelo de pontuação atualizado

| Categoria | Peso |
|---|---:|
| CLI técnica e testes | 20 |
| Package/npm readiness | 15 |
| Segurança e privacidade | 15 |
| UX pública brasileira | 15 |
| Validação por perfil | 25 |
| Documentação/release readiness | 10 |
| Total | 100 |

## 4. Pontuação de validação por perfil

Cada perfil vale até 8,33 pontos:

- Non-Technical Builder: 8,33
- Vibe Coder: 8,33
- Professional Engineer: 8,33

Sem sessão real, o perfil deve pontuar baixo mesmo que haja template pronto.

## 5. Decisão GO

Permitida se:

- pelo menos 1 participante real por perfil;
- sem P0;
- sem P1 de segurança;
- sem P1 de confusão sobre execução automática;
- package dry-run limpo;
- build/test/smoke passam;
- README e quickstart claros;
- readiness >= 85.

## 6. Decisão LIMITED GO

Usar se:

- houve validação parcial;
- ainda falta um perfil;
- há P2s importantes, mas controláveis;
- readiness entre 75 e 84;
- recomendação for expandir private alpha.

## 7. Decisão NO-GO

Obrigatória se:

- P0 aberto;
- P1 de segurança aberto;
- confusão relevante sobre `resolver` executar código automaticamente;
- testes falham;
- package contém arquivos indevidos críticos;
- readiness abaixo de 75.

## 8. Artefatos esperados

Criar/atualizar:

- `docs/release/v0.1.0-alpha-phase-15a-readiness-scorecard.md`
- `docs/release/v0.1.0-alpha-phase-15a-go-no-go-decision.md`
- `docs/release/v0.1.0-alpha-phase-15a-blockers.md`
- `docs/release/v0.1.0-alpha-phase-15a-package-review.md`
- `docs/release/v0.1.0-alpha-phase-15a-release-recommendation.md`

## 9. Caminhos após Phase 15A

### Se GO

Próxima fase:

```text
Phase 16 — Public Alpha Release Execution
```

### Se LIMITED GO

Próxima fase:

```text
Phase 15B — Private Alpha Fixes and Second Validation Round
```

### Se NO-GO

Próxima fase:

```text
Phase 15C — Alpha Blocker Resolution
```

## 10. Regra final

Não publicar só porque o código está pronto. Publicar quando a experiência estiver validada.
