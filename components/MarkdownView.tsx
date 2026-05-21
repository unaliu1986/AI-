import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
}

export default function MarkdownView({ content }: Props) {
  return (
    <div className="prose prose-zinc max-w-none prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:text-zinc-700 prose-li:text-zinc-700 prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-table:block prose-table:overflow-x-auto prose-th:whitespace-nowrap prose-td:whitespace-nowrap">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
