import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { listModules, loadMarkdown } from "@/lib/content";
import MarkdownView from "@/components/MarkdownView";

interface Props {
  id: string;
  title: string;
  phase: number;
  content: string;
}

export default function ModulePage({ id, title, phase, content }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="py-20 text-center text-zinc-400">加载中...</div>;
  }

  const phaseColor =
    phase === 1 ? "bg-blue-50 text-blue-700" :
    phase === 2 ? "bg-purple-50 text-purple-700" :
    "bg-emerald-50 text-emerald-700";

  return (
    <div>
      <div className="mb-6 flex items-center gap-3 text-sm text-zinc-400">
        <Link href="/modules" className="hover:text-zinc-600">模块库</Link>
        <span>/</span>
        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${phaseColor}`}>
          Phase {phase}
        </span>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <MarkdownView content={content} />
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const modules = listModules();
  const paths = modules.map((m) => ({ params: { slug: m.id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const modules = listModules();
  const mod = modules.find((m) => m.id === slug);

  if (!mod) {
    return { notFound: true };
  }

  const content = loadMarkdown(mod.file);

  return {
    props: {
      id: mod.id,
      title: mod.title,
      phase: mod.phase,
      content,
    },
  };
};
