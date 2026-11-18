import Link from "next/link";
import { categories } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-cyan-400/15 bg-[rgba(2,12,20,0.95)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg text-cyan-100">
              Console Gear Hub
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-teal-100/60">
              Independent console accessory comparisons. Not affiliated with Sony,
              Microsoft, Nintendo, or any game publisher.
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-xs font-medium uppercase tracking-wider text-teal-200/50">
              Categories
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 sm:justify-end">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-teal-100/70 transition hover:text-cyan-200"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside
          className="mt-8 rounded-lg border border-amber-400/25 bg-amber-950/30 px-4 py-3 text-sm leading-relaxed text-amber-100/80"
          aria-label="Affiliate disclosure"
        >
          <strong className="font-semibold text-amber-100">Disclosure:</strong>{" "}
          Console Gear Hub may earn a commission when you buy through links on
          this site. Prices and availability are placeholders until affiliate
          programs are connected. We only recommend gear we would use on PS5 or
          Xbox Series consoles. This site is not endorsed by any retailer or
          manufacturer.
        </aside>

        <p className="mt-6 text-xs text-teal-100/40">
          © 2026 Console Gear Hub · Built for console players · Placeholder
          catalog MVP
        </p>
      </div>
    </footer>
  );
}
