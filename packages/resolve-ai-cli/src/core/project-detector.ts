import fs from "node:fs";
import path from "node:path";

export type ProjectKind = "novo" | "em-andamento" | "legado" | "indefinido";

export function detectProjectKind(root: string = process.cwd()): ProjectKind {
  const legacyDocs = path.join(root, "docs", "ai-seos");
  if (fs.existsSync(legacyDocs)) {
    return "legado";
  }

  const signals = [
    "package.json",
    "README.md",
    "pyproject.toml",
    "requirements.txt",
    "src",
    "app",
    "pages",
    ".git"
  ];

  const found = signals.some((signal) => fs.existsSync(path.join(root, signal)));

  if (found) {
    return "em-andamento";
  }

  const visibleEntries = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith("."));

  return visibleEntries.length === 0 ? "novo" : "indefinido";
}
