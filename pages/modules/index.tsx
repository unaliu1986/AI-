import { GetStaticProps } from "next";
import Link from "next/link";
import { listModules, ModuleMeta } from "@/lib/content";
import { useState } from "react";

interface Props {
  modules: ModuleMeta[];
}

export default function ModulesPage({ modules }: Props) {
  const [filter, setFilter] = useState<number | null>(null);

  const filtered = filter ? modules.filter((m) => m.phase === filter) : modules;

  const phaseColors: Record<number, string> = {
    1: "bg-blue-50 text-blue-700 border-blue-200",
    2: "bg-purple-50 text-purple-700 border-purple-200",
    3: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900">📚 全部模块</h1>
      <p className="mt-1 text-zinc-500">25 个模块，按 AI 自动化技能进阶排列</p>

      {/* 筛选 */}
      <div className="mt-6 flex gap-2">
        {[
          { label: "全部", phase: null },
          { label: "Phase 1", phase: 1 },
          { label: "Phase 2", phase: 2 },
          { label: "Phase 3", phase: 3 },
        ].map(({ label, phase }) => (
          <button
            key={label}
            onClick={() => setFilter(phase)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              filter === phase
                ? "bg-zinc-900 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 模块列表 */}
      <div className="mt-6 space-y-3">
        {filtered.map((mod) => (
          <Link
            key={mod.id}
            href={`/modules/${mod.id}`}
            className={`block rounded-xl border p-4 transition-colors hover:bg-white ${phaseColors[mod.phase] || "bg-zinc-50"}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-medium opacity-60">
                  Phase {mod.phase} {mod.days && `· ${mod.days}`}
                </span>
                <h3 className="mt-1 font-medium text-zinc-800">{mod.title}</h3>
              </div>
              <span className="text-zinc-400">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const modules = listModules();
  return { props: { modules } };
};
