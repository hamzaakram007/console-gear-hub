import Link from "next/link";
import { categories } from "@/lib/products";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-cyan-400/15 bg-[rgba(4,18,28,0.88)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-[family-name:var(--font-display)] text-xl tracking-tight text-cyan-100 transition group-hover:text-cyan-50 sm:text-2xl">
            Console Gear Hub
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Categories">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="rounded-md px-3 py-1.5 text-sm text-teal-100/75 transition hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              {cat.name}
            </Link>
          ))}
        </nav>
        <Link
          href="/#categories"
          className="rounded-md border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-400/20 md:hidden"
        >
          Browse
        </Link>
      </div>
    </header>
  );
}
