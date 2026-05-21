import { GetStaticProps } from "next";
import { useState } from "react";
import { listPrompts } from "@/lib/content";
import CopyButton from "@/components/CopyButton";

interface Props {
  prompts: { id: string; title: string; content: string }[];
}

export default function PromptsPage({ prompts }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900">📋 Prompt 库</h1>
      <p className="mt-1 text-zinc-500">
        10 套经过验证的 AI 提问模板，复制到 Cursor / GPT / Hermes 直接用
      </p>

      <div className="mt-2 text-sm text-zinc-400">
        💡 用法：复制 → 填 <code className="rounded bg-zinc-100 px-1 text-xs">{`{{变量}}`}</code> → 发送给 AI
      </div>

      <div className="mt-8 space-y-4">
        {prompts.map((p) => {
          const isOpen = expanded === p.id;
          // 提取代码块中的内容用于一键复制
          const codeMatch = p.content.match(/```[\s\S]*?\n([\s\S]*?)```/);
          const copyText = codeMatch ? codeMatch[1].trim() : p.content;

          return (
            <div key={p.id} className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
              <button
                onClick={() => setExpanded(isOpen ? null : p.id)}
                className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-zinc-50"
              >
                <div>
                  <span className="text-xs font-medium text-zinc-400">{p.id}</span>
                  <h3 className="mt-0.5 font-medium text-zinc-800">{p.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      navigator.clipboard.writeText(copyText);
                    }}
                    className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-500 hover:bg-zinc-200"
                    title="一键复制 Prompt"
                  >
                    📋 复制
                  </span>
                  <span className={`text-zinc-400 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-zinc-100 bg-zinc-50 p-4">
                  <pre className="whitespace-pre-wrap text-sm text-zinc-700 leading-relaxed">
                    {copyText}
                  </pre>
                  <div className="mt-3">
                    <CopyButton text={copyText} label="复制此 Prompt" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const promptsMeta = listPrompts();
  const { loadMarkdown } = await import("@/lib/content");

  const prompts = promptsMeta.map((p) => ({
    id: p.id,
    title: p.title,
    content: loadMarkdown(p.file),
  }));

  return { props: { prompts } };
};
