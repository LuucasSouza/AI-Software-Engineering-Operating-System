import fs from "node:fs";
import path from "node:path";

export function detectProjectKind(root = process.cwd()) {
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
