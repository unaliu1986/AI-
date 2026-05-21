import Link from "next/link";
import { useEffect, useState } from "react";
import { getCurrentDay, getCompletedDays } from "@/lib/progress";
import { DAY_MAP } from "@/lib/moduleMap";

const phases = [
  {
    num: 1,
    days: "Day 1–30",
    title: "AI 协作与基础自动化",
    desc: "建立 AI 协作习惯，掌握文件/API 自动化，培养代码审查与 Debug 能力。",
    color: "bg-blue-50 border-blue-200 text-blue-800",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    num: 2,
    days: "Day 31–60",
    title: "网页自动化与工程化",
    desc: "Playwright 网页自动化，Queue / Retry / Logging 工程化流水线覆盖跨境电商场景。",
    color: "bg-purple-50 border-purple-200 text-purple-800",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    num: 3,
    days: "Day 61–90",
    title: "Agent 协作与业务系统",
    desc: "ComfyUI + AI Agent + 系统集成，交付可运行的个人自动化业务系统。",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    badge: "bg-emerald-100 text-emerald-700",
  },
];

export default function Home() {
  const [currentDay, setCurrentDay] = useState(1);
  const [completedCount, setCompletedCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCurrentDay(getCurrentDay());
    setCompletedCount(getCompletedDays().length);
    setMounted(true);
  }, []);

  const pct = Math.round((completedCount / 90) * 100);

  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          ⚡ AI 时代个人自动化工程训练营
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          不是培养 Python 程序员，而是培养 <strong className="text-zinc-700">AI 增强型自动化系统构建者</strong>
        </p>
      </div>

      {/* 进度 */}
      {mounted && (
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-500">学习进度</p>
              <p className="mt-1 text-2xl font-bold text-zinc-900">
                {completedCount} / 90 <span className="text-base font-normal text-zinc-400">天</span>
              </p>
            </div>
            <Link
              href={`/day/${currentDay}`}
              className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              {currentDay > 1 ? `继续 Day ${currentDay}` : "开始 Day 1"}
            </Link>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-100">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      )}

      {/* 三阶段卡片 */}
      <div className="grid gap-4 sm:grid-cols-3">
        {phases.map((p) => {
          const phaseStart = p.num === 1 ? 1 : p.num === 2 ? 31 : 61;
          const phaseDays = Object.values(DAY_MAP).filter((d) => d.phase === p.num);
          const phaseCompleted = phaseDays.filter((d) => getCompletedDays().includes(d.day)).length;
          const phasePct = Math.round((phaseCompleted / phaseDays.length) * 100);

          return (
            <div key={p.num} className={`rounded-2xl border p-5 ${p.color}`}>
              <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${p.badge}`}>
                Phase {p.num}
              </span>
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm opacity-70">{p.desc}</p>
              <div className="mt-4 text-xs opacity-60">
                {phaseCompleted}/{phaseDays.length} 完成
                {phasePct > 0 && (
                  <span className="ml-2 font-medium">
                    {phasePct}%
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 快捷入口 */}
      <div className="grid gap-3 sm:grid-cols-3">
        <QuickLink href="/prompts" icon="📋" title="Prompt 库" desc="10 套可复制的 AI 提问模板" />
        <QuickLink href="/modules" icon="📚" title="25 个模块" desc="按技能点浏览全部内容" />
        <QuickLink href={`/day/${currentDay}`} icon="📅" title="按天学习" desc="Day 1 → Day 90 逐日推进" />
      </div>

      {/* 学习原则 */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-zinc-800">学习原则</h2>
        <ul className="mt-3 space-y-2 text-sm text-zinc-600">
          <li>🚫 <strong>禁止语法教学</strong> — 只有「今天要把文件夹里的图片自动重命名」</li>
          <li>🤖 <strong>AI 写，人审</strong> — 你的核心能力是提对需求、看懂 diff、发现 AI 胡编</li>
          <li>⏱️ <strong>每天 ≤ 2 小时</strong> — 30 分钟读模块 + 90 分钟做项目 + 验收复盘</li>
          <li>✅ <strong>必须可验收</strong> — 不做完不算学完，勾完清单才解锁下一课</li>
        </ul>
      </div>
    </div>
  );
}

function QuickLink({ href, icon, title, desc }: { href: string; icon: string; title: string; desc: string }) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
    >
      <span className="text-2xl">{icon}</span>
      <h3 className="mt-2 font-medium text-zinc-800">{title}</h3>
      <p className="mt-1 text-xs text-zinc-400">{desc}</p>
    </Link>
  );
}
