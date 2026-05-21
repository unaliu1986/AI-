import Link from "next/link";
import { useRouter } from "next/router";
import ProgressBar from "./ProgressBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2 font-bold text-zinc-900">
            <span className="text-xl">⚡</span>
            <span className="hidden sm:inline">AI 自动化训练营</span>
          </Link>

          <nav className="flex items-center gap-1 text-sm">
            <NavLink href="/" active={isHome}>首页</NavLink>
            <NavLink href="/prompts" active={router.pathname.startsWith("/prompts")}>Prompt 库</NavLink>
            <NavLink href="/modules" active={router.pathname.startsWith("/modules")}>模块</NavLink>
          </nav>

          <div className="hidden sm:block">
            <ProgressBar />
          </div>
        </div>
      </header>

      {/* 主内容 */}
      <main className="mx-auto max-w-3xl px-6 py-8">{children}</main>

      {/* 底部 */}
      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-400">
        AI 时代个人自动化工程训练营 · 用 AI 写代码，用人审代码
      </footer>
    </div>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`rounded-lg px-3 py-1.5 transition-colors ${
        active
          ? "bg-zinc-100 font-medium text-zinc-900"
          : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700"
      }`}
    >
      {children}
    </Link>
  );
}
