import fs from "node:fs";
import path from "node:path";

const MAX_TEXT_BYTES = 100 * 1024;
const IGNORED_DIRS = new Set([
  "node_modules",
  ".git",
  "dist",
  "build",
  "coverage",
  ".next",
  ".vercel",
  ".cache",
  ".turbo"
]);

export function isIgnoredDir(name) {
  return IGNORED_DIRS.has(name);
}

export function isSensitivePath(filePath) {
  const normalized = filePath.toLowerCase().replace(/\\/g, "/");
  const base = path.basename(normalized);
  return (
    base === ".env" ||
    base.startsWith(".env.") ||
    normalized.includes("backup") ||
    normalized.includes("dump") ||
    normalized.includes("exports") ||
    normalized.includes("secret") ||
    normalized.includes("token") ||
    normalized.includes("password") ||
    normalized.includes("senha") ||
    normalized.includes("auth_users") ||
    normalized.endsWith(".csv")
  );
}

export function readSafeTextFile(filePath) {
  if (!fs.existsSync(filePath) || isSensitivePath(filePath)) {
    return null;
  }

  const stat = fs.statSync(filePath);
  if (!stat.isFile() || stat.size > MAX_TEXT_BYTES) {
    return null;
  }

  return fs.readFileSync(filePath, "utf8");
}
