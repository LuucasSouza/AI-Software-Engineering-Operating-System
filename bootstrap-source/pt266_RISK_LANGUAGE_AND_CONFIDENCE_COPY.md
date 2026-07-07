# pt266 — Risk Language and Confidence Copy

## 1. Problema

O feedback apontou que a mesma tarefa apareceu como:

```text
Risco: yellow
```

em um comando, e:

```text
Risco: medio
```

em outro.

Isso gera confusão, principalmente para Non-Technical Builder.

Também apareceu:

```text
Confiança: baixa
```

sem explicar o que o usuário deve fazer com essa informação.

## 2. Objetivo

Padronizar a linguagem pública de risco e confiança em português simples.

## 3. Vocabulário interno vs público

### 3.1 Interno

O código pode usar:

```text
green, yellow, orange, red
low, medium, high, critical
```

### 3.2 Público

A CLI e documentos para usuário devem exibir:

```text
baixo
médio
alto
crítico
```

ou:

```text
baixo (verde)
médio (amarelo)
alto (laranja)
crítico (vermelho)
```

Para Non-Technical Builder, preferir apenas:

```text
baixo, médio, alto, crítico
```

## 4. Função de formatação pública

Criar ou reforçar:

```ts
formatRiskForUser(risk: RiskLevel, profile?: UserProfile): string
```

Exemplos:

```ts
formatRiskForUser('yellow', 'Non-Technical Builder') // 'médio'
formatRiskForUser('red', 'Non-Technical Builder') // 'crítico'
formatRiskForUser('green', 'Professional Engineer') // 'baixo'
```

## 5. Regra para saída pública

Nenhum comando público deve imprimir diretamente:

```text
green
yellow
orange
red
```

Exceto em documentação técnica interna ou testes, se necessário.

## 6. Explicação de risco

Para cada risco exibido, quando possível incluir uma frase curta.

### 6.1 Risco baixo

```text
Risco: baixo
Por quê: a tarefa é local, pequena e não usa dados reais.
```

### 6.2 Risco médio

```text
Risco: médio
Por quê: a tarefa pode alterar arquivos do projeto, então precisa de revisão humana antes de aplicar.
```

### 6.3 Risco alto

```text
Risco: alto
Por quê: existem dados sensíveis, credenciais, arquivos críticos ou mudanças que podem afetar usuários reais.
```

### 6.4 Risco crítico

```text
Risco: crítico
Por quê: há sinais de segredo, dado real, backup, credencial ou ação perigosa. Não recomendo avançar sem revisão humana.
```

## 7. Confiança

A palavra `Confiança: baixa` pode parecer bronca. Para iniciante, explicar.

### Antes

```text
Confiança: baixa
```

### Depois

```text
Confiança do diagnóstico: baixa
Isso é normal em projeto novo, porque ainda há poucos arquivos para analisar.
```

### Para validação sem Git

```text
Confiança da validação: baixa
Motivo: este projeto ainda não usa Git, então não consigo comparar mudanças com precisão.
```

## 8. Jargões a reduzir para Non-Technical Builder

Evitar como mensagem principal:

- hardening;
- P0/P1/P2;
- sprint;
- CI;
- regressão;
- artefato;
- handoff;
- stack;
- critério de aceite;
- risco crítico sem contexto.

Substituições sugeridas:

| Termo técnico | Alternativa simples |
|---|---|
| hardening | arrumar segurança inicial |
| P0/P1/P2 | fazer agora / fazer depois |
| sprint | próximo bloco de trabalho |
| CI | validação automática |
| regressão | algo que funcionava e parou |
| artefato | arquivo gerado |
| handoff | resumo para continuar |
| stack | tecnologias |
| critério de aceite | como saber se funcionou |

## 9. Documentos internos vs saída pública

Não é obrigatório renomear todos os arquivos agora. Mas a saída pública e os documentos gerados para Non-Technical Builder devem preferir linguagem simples.

## 10. Testes obrigatórios

1. `preparar` não imprime `yellow`.
2. `resolver` não imprime `yellow`.
3. `status` não imprime `yellow` como risco público.
4. `validar` explica `Confiança: baixa` quando não há Git.
5. `diagnosticar` explica confiança baixa em projeto novo.
6. Projeto legado ainda pode exibir risco alto/crítico.
7. Documentos 15–24 para Non-Technical Builder usam português simples.

## 11. Critério de aceite

No teste Controle Simples de Gastos, a saída deve conter:

```text
Risco: médio
```

ou:

```text
Risco: baixo
```

Nunca:

```text
Risco: yellow
```

E `Confiança: baixa` deve vir com uma explicação simples.
