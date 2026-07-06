# pt245 — Release Decision and Blocked Path

## 1. Objetivo

Este documento define como a Phase 15B deve decidir o próximo caminho do Resolve Aí.

A decisão deve ser mais precisa que apenas GO / LIMITED GO / NO-GO. Ela pode usar também:

```text
VALIDATION BLOCKED
```

quando não houver participantes reais.

## 2. Estados possíveis

### 2.1 GO

Pode avançar para preparação de publicação pública alpha.

Condições mínimas:

- validação real com pelo menos 1 participante por perfil;
- nenhum P0;
- nenhum P1 de segurança;
- nenhum P1 de confusão sobre `resolver`/`executar`;
- package dry-run limpo;
- build/test/smoke passando;
- readiness >= 85;
- aprovação manual do maintainer.

### 2.2 LIMITED GO

Pode expandir alpha privado ou preparar release restrito, mas não publicar amplamente.

Condições típicas:

- validação parcial;
- sem P0;
- sem P1 de segurança;
- alguns P2/P3;
- readiness entre 75 e 84;
- package tecnicamente adequado;
- ainda faltam evidências humanas.

### 2.3 NO-GO

Não deve publicar nem expandir sem correções.

Condições:

- P0 aberto;
- P1 de segurança;
- P1 de entendimento crítico;
- comando parece destrutivo;
- fluxo principal quebra;
- package contém arquivos indevidos ou sensíveis;
- readiness < 75.

### 2.4 VALIDATION BLOCKED

Usar quando:

- nenhuma validação real foi executada;
- o projeto continua criando documentação, mas não possui participantes;
- não há evidência nova para aumentar readiness;
- próxima ação é fora do repo: recrutar e executar sessões.

Este estado não significa que a CLI está ruim. Significa que o gate de validação humana está bloqueado.

## 3. Regra de score

O score anterior é:

```text
77/100 — LIMITED GO
```

Na Phase 15B:

- sem participantes reais, o score não deve subir por validação;
- se houve apenas documentação nova, o score deve ficar igual ou cair levemente;
- se houve fixes claros de copy/safety, pode subir pouco, mas sem ultrapassar LIMITED GO;
- se houve validação real parcial, pode subir proporcionalmente;
- se houve validação real completa, pode chegar a GO se os demais critérios forem satisfeitos.

## 4. Readiness score sugerido

### 4.1 Sem validação real

Faixa esperada:

```text
76–77/100
Decision: LIMITED GO ou VALIDATION BLOCKED
```

### 4.2 Validação parcial

Faixa esperada:

```text
78–84/100
Decision: LIMITED GO
```

### 4.3 Validação completa bem-sucedida

Faixa possível:

```text
85–90/100
Decision: GO
```

### 4.4 Achados críticos

Faixa possível:

```text
<75/100
Decision: NO-GO
```

## 5. Documentos de release obrigatórios

Criar ou atualizar:

```text
docs/release/v0.1.0-alpha-phase-15b-readiness-scorecard.md
docs/release/v0.1.0-alpha-phase-15b-go-no-go-decision.md
docs/release/v0.1.0-alpha-phase-15b-blockers.md
docs/release/v0.1.0-alpha-phase-15b-package-review.md
docs/release/v0.1.0-alpha-phase-15b-release-recommendation.md
```

## 6. Recomendação de próxima fase

### Se GO

Próxima fase:

```text
Phase 16 — Public Alpha Release Execution
```

Escopo:

- tag;
- release notes;
- npm publish;
- GitHub release;
- comunicação pública.

### Se LIMITED GO com validação parcial

Próxima fase:

```text
Phase 16A — Targeted Alpha Fixes
```

Escopo:

- corrigir achados P1/P2;
- nova sessão pequena;
- revalidar.

### Se VALIDATION BLOCKED

Próxima fase não deve ser mais documentação.

Próxima ação:

```text
Manual Action — Recruit Private Alpha Participants
```

Só depois:

```text
Phase 16B — Real Sessions Execution
```

### Se NO-GO

Próxima fase:

```text
Phase 16C — Critical Blocker Resolution
```

## 7. Regra para evitar publicação prematura

Mesmo com package dry-run limpo, a publicação pública não deve acontecer sem validação humana.

O Resolve Aí pode ser tecnicamente publicável, mas produto público exige evidência de uso.
