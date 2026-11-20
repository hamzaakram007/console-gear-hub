import type { BlogBlock } from "@/lib/posts";

export function BlogArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-teal-100/75">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        if (block.type === "p") {
          return <p key={key}>{block.text}</p>;
        }
        if (block.type === "h2") {
          return (
            <h2
              key={key}
              className="pt-4 font-[family-name:var(--font-display)] text-2xl text-cyan-50"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={key} className="list-disc space-y-2 pl-5 marker:text-cyan-300/60">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <ol
            key={key}
            className="list-decimal space-y-2 pl-5 marker:text-cyan-300/60"
          >
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        );
      })}
    </div>
  );
}
