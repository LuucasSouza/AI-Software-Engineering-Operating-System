import fs from "node:fs";
import { resolveAiPaths } from "./paths.js";

function writeIfMissing(filePath: string, content: string): boolean {
  if (fs.existsSync(filePath)) {
    return false;
  }

  fs.writeFileSync(filePath, content, "utf8");
  return true;
}

export function ensureResolveAiDocs(root: string = process.cwd()): { created: string[]; existing: string[] } {
  const paths = resolveAiPaths(root);
  const created: string[] = [];
  const existing: string[] = [];

  if (!fs.existsSync(paths.docsDir)) {
    fs.mkdirSync(paths.docsDir, { recursive: true });
    created.push("docs/resolve-ai/");
  } else {
    existing.push("docs/resolve-ai/");
  }

  const files = [
    {
      path: paths.docsReadmePath,
      label: "docs/resolve-ai/README.md",
      content: `# Resolve Aí neste projeto

Este diretório guarda os documentos do Resolve Aí para este projeto.

O Resolve Aí ajuda a transformar problema, ideia ou projeto em andamento em um plano organizado para construir software com IA.

## Estado inicial

- Criado por: \`resolve-ai começar\`
- Próximo passo: \`resolve-ai ligar\`

## Documentos

- \`00-project-intake.md\`: entrada inicial do projeto.
- \`09-handoff.md\`: resumo para continuar o trabalho.
`
    },
    {
      path: paths.intakePath,
      label: "docs/resolve-ai/00-project-intake.md",
      content: `# 00 — Project Intake

## Nome do projeto

_Preencher._

## O que este projeto tenta resolver?

_Preencher._

## Quem usa?

_Preencher._

## Estado atual

- [ ] Ideia
- [ ] Projeto novo
- [ ] Projeto em andamento
- [ ] Projeto legado

## Próximo passo recomendado

Rodar diagnóstico guiado com Resolve Aí.
`
    },
    {
      path: paths.handoffPath,
      label: "docs/resolve-ai/09-handoff.md",
      content: `# 09 — Handoff

## Contexto resumido

_Preencher._

## Decisões conhecidas

_Preencher._

## Riscos conhecidos

_Preencher._

## Próxima ação

_Preencher._
`
    }
  ];

  for (const file of files) {
    if (writeIfMissing(file.path, file.content)) {
      created.push(file.label);
    } else {
      existing.push(file.label);
    }
  }

  return { created, existing };
}
