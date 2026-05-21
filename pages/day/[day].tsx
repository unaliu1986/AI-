import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { DAY_MAP, DayInfo } from "@/lib/moduleMap";
import { loadMarkdown } from "@/lib/content";
import { isDayUnlocked, isDayCompleted } from "@/lib/progress";
import MarkdownView from "@/components/MarkdownView";
import CheckList from "@/components/CheckList";
import { useEffect, useState } from "react";

interface Props {
  day: number;
  dayInfo: DayInfo;
  content: string;
  checklistItems: string[];
}

export default function DayPage({ day, dayInfo, content, checklistItems }: Props) {
  const router = useRouter();
  const [unlocked, setUnlocked] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setUnlocked(isDayUnlocked(day));
    setCompleted(isDayCompleted(day));
    setMounted(true);
  }, [day]);

  if (router.isFallback) {
    return <div className="py-20 text-center text-zinc-400">加载中...</div>;
  }

  if (!dayInfo) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-zinc-400">Day {day} 暂无内容</p>
        <Link href="/" className="mt-4 inline-block text-sm text-blue-600 hover:underline">
          返回首页
        </Link>
      </div>
    );
  }

  if (mounted && !unlocked) {
    return (
      <div className="py-20 text-center">
        <div className="text-4xl">🔒</div>
        <h2 className="mt-4 text-xl font-semibold text-zinc-400">Day {day} 尚未解锁</h2>
        <p className="mt-2 text-zinc-400">请先完成 Day {day - 1} 的验收清单</p>
        <Link href={`/day/${day - 1}`} className="mt-4 inline-block text-sm text-blue-600 hover:underline">
          ← 回到 Day {day - 1}
        </Link>
      </div>
    );
  }

  const phaseColor =
    dayInfo.phase === 1 ? "bg-blue-50 text-blue-700" :
    dayInfo.phase === 2 ? "bg-purple-50 text-purple-700" :
    "bg-emerald-50 text-emerald-700";

  return (
    <div>
      {/* 面包屑 + 元信息 */}
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
        <Link href="/" className="hover:text-zinc-600">首页</Link>
        <span>/</span>
        <span className="text-zinc-700">Day {day}</span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${phaseColor}`}>
          Phase {dayInfo.phase}
        </span>
        {mounted && completed && (
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
            ✓ 已完成
          </span>
        )}
      </div>

      {/* 标题 */}
      <h1 className="text-2xl font-bold text-zinc-900">
        Day {day} · {dayInfo.title}
      </h1>
      <p className="mt-1 text-zinc-500">{dayInfo.description}</p>

      {/* 关联项目 */}
      {dayInfo.projectId && (
        <div className="mt-3">
          <span className="text-xs text-zinc-400">
            关联项目：{dayInfo.projectId}
          </span>
        </div>
      )}

      {/* 模块内容 */}
      <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <MarkdownView content={content} />
      </div>

      {/* 验收清单 */}
      {checklistItems.length > 0 && (
        <CheckList storageKey={`D${day}`} items={checklistItems} />
      )}

      {/* 底部导航 */}
      <div className="mt-10 flex items-center justify-between border-t border-zinc-200 pt-6">
        {day > 1 ? (
          <Link
            href={`/day/${day - 1}`}
            className="flex items-center gap-1 text-sm font-medium text-zinc-500 hover:text-zinc-700"
          >
            ← Day {day - 1}
          </Link>
        ) : (
          <div />
        )}
        {day < 90 ? (
          <Link
            href={`/day/${day + 1}`}
            className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              completed
                ? "bg-zinc-900 text-white hover:bg-zinc-800"
                : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
            }`}
            onClick={(e) => { if (!completed) e.preventDefault(); }}
          >
            Day {day + 1} →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array.from({ length: 90 }, (_, i) => ({
    params: { day: String(i + 1) },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const day = Number(params?.day);
  const dayInfo = DAY_MAP[day];

  if (!dayInfo) {
    return { props: { day, dayInfo: null, content: "", checklistItems: [] } };
  }

  const content = loadMarkdown(dayInfo.moduleFile);

  // 从模块内容提取验收清单（- [ ] 格式）
  const checklistItems: string[] = [];
  const lines = content.split("\n");
  let inChecklist = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("## 9. 验收标准") || trimmed.startsWith("## 9.")) {
      inChecklist = true;
      continue;
    }
    if (inChecklist && trimmed.startsWith("##")) break;
    if (inChecklist) {
      const match = trimmed.match(/^[-*]\s*\[[ x]\]\s*(.+)/);
      if (match) {
        // 去掉 markdown 链接语法保留文本
        const text = match[1].replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
        checklistItems.push(text);
      }
    }
  }

  return {
    props: {
      day,
      dayInfo,
      content,
      checklistItems,
    },
  };
};
