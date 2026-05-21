import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface ModuleMeta {
  id: string;
  title: string;
  phase: number;
  days: string;
  file: string;
}

/** 读取 .md 文件，返回 frontmatter + 正文 HTML（用 react-markdown 在组件里渲染） */
export function loadMarkdown(filePath: string) {
  const fullPath = path.join(CONTENT_DIR, filePath);
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { content } = matter(raw);
  return content;
}

/** 列出 modules/ 下所有模块基本信息 */
export function listModules(): ModuleMeta[] {
  const phases = ["phase-1", "phase-2", "phase-3"];
  const modules: ModuleMeta[] = [];

  for (const phaseDir of phases) {
    const dir = path.join(CONTENT_DIR, "modules", phaseDir);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
    for (const file of files) {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const title = raw.split("\n")[0]?.replace(/^#\s*/, "").trim() || file;
      const phaseNum = parseInt(phaseDir.split("-")[1]);
      // 从文件内容提取天数
      const daysMatch = raw.match(/\*\*Day\s*(\d+[-–]\d+)\*\*/i) || raw.match(/对应天数.*?(\d+[-–]\d+)/);
      const days = daysMatch ? daysMatch[1] : "";

      modules.push({
        id: file.replace(".md", ""),
        title,
        phase: phaseNum,
        days,
        file: `modules/${phaseDir}/${file}`,
      });
    }
  }

  return modules;
}

/** 列出 prompts/ 下所有 prompt */
export function listPrompts(): { id: string; title: string; file: string }[] {
  const dir = path.join(CONTENT_DIR, "prompts");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "README.md");
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const title = raw.split("\n")[0]?.replace(/^#\s*/, "").trim() || file;
    return { id: file.replace(".md", ""), title, file: `prompts/${file}` };
  });
}

/** 列出 projects/ 下所有项目 */
export function listProjects(): { id: string; title: string; file: string }[] {
  const dir = path.join(CONTENT_DIR, "projects");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "README.md");
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const title = raw.split("\n")[0]?.replace(/^#\s*/, "").trim() || file;
    return { id: file.replace(".md", ""), title, file: `projects/${file}` };
  });
}
