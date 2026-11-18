import Link from "next/link";
import { categories } from "@/lib/products";

export default function Home() {
  return (
    <>
      <section className="hero-wash relative overflow-hidden">
        <div className="noise-overlay absolute inset-0" aria-hidden />
        <div
          className="animate-drift absolute -right-16 top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
          aria-hidden
        />
        <div
          className="animate-drift absolute -left-10 bottom-10 h-48 w-48 rounded-full bg-teal-500/10 blur-3xl"
          style={{ animationDelay: "2s" }}
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-28">
          <p className="animate-fade-up font-[family-name:var(--font-display)] text-4xl text-cyan-100 sm:text-6xl md:text-7xl">
            Console Gear Hub
          </p>
          <h1 className="animate-fade-up-delay mt-5 max-w-2xl text-xl font-medium leading-snug text-teal-50/90 sm:text-2xl">
            Pick the right SSD, headset, display, and capture card for console play.
          </h1>
          <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-base leading-relaxed text-teal-100/60">
            Side-by-side tables, three honest picks per category, and buy links
            with a clear affiliate disclosure. Built for PS5 and Xbox Series —
            not a PC mod shop.
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href="/#categories"
              className="rounded-md border border-cyan-300/45 bg-cyan-400/20 px-5 py-2.5 text-sm font-medium text-cyan-50 transition hover:bg-cyan-400/30"
            >
              Browse categories
            </Link>
            <Link
              href="/category/ssd"
              className="rounded-md border border-teal-300/25 px-5 py-2.5 text-sm font-medium text-teal-100/80 transition hover:border-teal-300/45 hover:text-teal-50"
            >
              Start with SSDs
            </Link>
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-cyan-50 sm:text-4xl">
          Categories
        </h2>
        <p className="mt-2 max-w-2xl text-teal-100/60">
          Four gear lanes. Three picks each. Placeholder prices until affiliate
          APIs are wired.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <li key={cat.slug}>
              <Link
                href={`/category/${cat.slug}`}
                className="group block border-t border-cyan-400/20 pt-5 transition hover:border-cyan-300/45"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="font-[family-name:var(--font-display)] text-2xl text-cyan-100 transition group-hover:text-cyan-50">
                  {cat.name}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-teal-100/55">
                  {cat.tagline}
                </p>
                <span className="mt-4 inline-block text-sm text-cyan-300/80 transition group-hover:text-cyan-200">
                  Compare {cat.products.length} picks →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-cyan-400/10 bg-[rgba(6,26,36,0.6)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-cyan-50">
            How picks work
          </h2>
          <ol className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              {
                t: "Best overall",
                d: "Balanced speed, comfort, or features for most console setups.",
              },
              {
                t: "Best budget",
                d: "Good enough for launch night without stretching the wallet.",
              },
              {
                t: "Best premium",
                d: "Extra headroom when you want the nicer long-term upgrade.",
              },
            ].map((item) => (
              <li key={item.t}>
                <p className="text-sm font-medium uppercase tracking-wider text-teal-200/50">
                  {item.t}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-teal-100/70">
                  {item.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
