#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(packageRoot, "src");
const distDir = path.join(packageRoot, "dist");

function normalizePath(filePath) {
  return filePath.replace(/\\/g, "/");
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function removeTypeBlocks(source) {
  const lines = source.split(/\r?\n/);
  const output = [];
  let skipping = false;
  let braceDepth = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!skipping && /^export\s+interface\s+/.test(trimmed)) {
      skipping = true;
      braceDepth = (line.match(/{/g) ?? []).length - (line.match(/}/g) ?? []).length;
      if (braceDepth <= 0) skipping = false;
      continue;
    }
    if (!skipping && /^export\s+type\s+/.test(trimmed)) {
      if (!trimmed.endsWith(";")) {
        skipping = true;
      }
      continue;
    }
    if (skipping) {
      braceDepth += (line.match(/{/g) ?? []).length - (line.match(/}/g) ?? []).length;
      if (braceDepth <= 0 || trimmed.endsWith(";")) {
        skipping = false;
      }
      continue;
    }
    output.push(line);
  }

  return output.join("\n");
}

function stripTypes(source) {
  let output = source;
  output = output.replace(/^import\s+type\s+.*?;\r?\n/gm, "");
  output = removeTypeBlocks(output);
  output = output.replace(/\s+as\s+[A-Za-z_][A-Za-z0-9_<>,\s\[\]\|]*/g, "");
  output = output.replace(/\b([A-Za-z_][A-Za-z0-9_]*)<[^>\n]+>\(/g, "$1(");

  return output.split(/\r?\n/).map((line) => {
    let next = line;

    if (/^\s*(export\s+)?function\s+/.test(next)) {
      next = next.replace(/function\s+([A-Za-z_][A-Za-z0-9_]*)<[^>]+>\(/, "function $1(");
      next = next.replace(/\((.*)\)/, (_match, params) => {
        const stripped = params
          .split(",")
          .map((param) => param.replace(/:\s*[^=]+(?==)/, "").replace(/:\s*.+$/, ""))
          .join(",");
        return `(${stripped})`;
      });
      next = next.replace(/\)\s*:\s*.+\s*\{/, ") {");
    }

    next = next.replace(/^(\s*(?:const|let|var)\s+[A-Za-z_][A-Za-z0-9_]*)\s*:\s*[^=;]+=/, "$1 =");
    next = next.replace(/^(\s*(?:const|let|var)\s+[A-Za-z_][A-Za-z0-9_]*)\s*:\s*[^=;]+;/, "$1;");
    return next;
  }).join("\n");
}

function buildFile(filePath) {
  const relative = path.relative(srcDir, filePath);
  const target = path.join(distDir, relative).replace(/\.ts$/, ".js");
  const source = fs.readFileSync(filePath, "utf8");
  const output = stripTypes(source);
  ensureDir(path.dirname(target));
  fs.writeFileSync(target, output, "utf8");
  return normalizePath(path.relative(packageRoot, target));
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".ts")) {
      files.push(fullPath);
    }
  }
  return files;
}

if (!fs.existsSync(srcDir)) {
  throw new Error(`Diretório src não encontrado: ${srcDir}`);
}

fs.rmSync(distDir, { recursive: true, force: true });
ensureDir(distDir);

const built = walk(srcDir).map(buildFile);
console.log(`Build concluído: ${built.length} arquivo(s) gerado(s) em dist/.`);
