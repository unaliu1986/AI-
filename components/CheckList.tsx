import { useState, useEffect } from "react";
import { getChecklist, toggleChecklist } from "@/lib/progress";

interface Props {
  /** 唯一 key，如 "D1" */
  storageKey: string;
  /** 验收清单项 */
  items: string[];
}

export default function CheckList({ storageKey, items }: Props) {
  const [checks, setChecks] = useState<boolean[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = getChecklist(storageKey);
    // 确保长度匹配
    const padded = items.map((_, i) => saved[i] || false);
    setChecks(padded);
    setLoaded(true);
  }, [storageKey, items]);

  if (!loaded) return null;

  const allDone = checks.length > 0 && checks.every((v) => v);

  return (
    <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-lg">{allDone ? "🎉" : "✅"}</span>
        <h3 className="font-semibold text-zinc-800">验收清单</h3>
        {allDone && (
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
            全部完成
          </span>
        )}
      </div>

      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i}>
            <label
              className={`flex cursor-pointer items-start gap-3 rounded-lg p-2 transition-colors hover:bg-zinc-50 ${
                checks[i] ? "text-zinc-400 line-through" : "text-zinc-700"
              }`}
            >
              <input
                type="checkbox"
                checked={checks[i] || false}
                onChange={() => {
                  const newChecks = toggleChecklist(storageKey, i);
                  setChecks(newChecks.slice(0, items.length));
                }}
                className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm">{item}</span>
            </label>
          </li>
        ))}
      </ul>

      {allDone && (
        <div className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">
          🎉 恭喜！本课验收通过，下一课已解锁。
        </div>
      )}
    </div>
  );
}
