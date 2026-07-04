import path from "node:path";

export function resolveAiPaths(root= process.cwd()) {
  const runtimeDir = path.join(root, ".resolve-ai");
  const docsDir = path.join(root, "docs", "resolve-ai");
  const legacyDocsDir = path.join(root, "docs", "ai-seos");

  return {
    root,
    runtimeDir,
    configPath: path.join(runtimeDir, "config.json"),
    statePath: path.join(runtimeDir, "state.json"),
    docsDir,
    docsReadmePath: path.join(docsDir, "README.md"),
    intakePath: path.join(docsDir, "00-project-intake.md"),
    handoffPath: path.join(docsDir, "09-handoff.md"),
    legacyDocsDir
  };
}
