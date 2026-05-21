import { useState, useEffect } from "react";

const NOTES_PREFIX = "training-notes";

function getStorageKey(day: number): string {
  return `${NOTES_PREFIX}-D${day}`;
}

export function getNote(day: number): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(getStorageKey(day)) || "";
}

export function saveNote(day: number, text: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(getStorageKey(day), text);
}

interface Props {
  day: number;
}

export default function NotesEditor({ day }: Props) {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setText(getNote(day));
    setLoaded(true);
  }, [day]);

  if (!loaded) return null;

  const handleSave = () => {
    saveNote(day, text);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  // 自动保存（输入停止 2 秒后）
  const handleChange = (value: string) => {
    setText(value);
    setSaved(false);
    // 清除之前的定时器
    const timer = setTimeout(() => {
      saveNote(day, value);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }, 1500);
    return () => clearTimeout(timer);
  };

  return (
    <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">📝</span>
          <h3 className="font-semibold text-zinc-800">Day {day} 笔记</h3>
          {saved && (
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
              已保存
            </span>
          )}
        </div>
        <span className="text-xs text-zinc-400">
          支持 Markdown · 自动保存
        </span>
      </div>

      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setSaved(false);
        }}
        onBlur={() => saveNote(day, text)}
        placeholder={`Day ${day} 学习笔记...

学到了什么？
遇到了什么坑？
有什么想问的？
对 AI 的新发现？
...`}
        rows={8}
        className="w-full resize-y rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-700 placeholder:text-zinc-300 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
      />

      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-zinc-400">
          💡 学完一天后写 3–5 行总结，90 天后回头看会很有成就感
        </span>
        <button
          onClick={handleSave}
          className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-200 transition-colors"
        >
          💾 手动保存
        </button>
      </div>
    </div>
  );
}
