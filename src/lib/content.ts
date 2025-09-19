// src/lib/content.ts
import fs from "fs/promises";
import path from "path";

const assetsDir = path.join(process.cwd(), "assets");

export async function getCategories() {
  const dirs = await fs.readdir(assetsDir, { withFileTypes: true });
  return dirs.filter(d => d.isDirectory()).map(d => d.name);
}

export async function getFilesInCategory(category: string) {
  const dir = path.join(assetsDir, category);
  const files = await fs.readdir(dir);
  return files.filter(f => f.endsWith(".md"));
}

export async function getFileContent(category: string, slug: string) {
  const filePath = path.join(assetsDir, category, `${slug}.md`);
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch {
    return "# File Not Found";
  }
}
