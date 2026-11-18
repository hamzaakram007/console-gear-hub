import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { navCategories } from "@/lib/products";

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
              Independent console accessory comparisons for PS5 and Xbox Series.
              Not affiliated with Sony, Microsoft, Nintendo, Amazon, or any game
              publisher.
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-xs font-medium uppercase tracking-wider text-teal-200/50">
              Categories
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
              {navCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="inline-flex min-h-10 items-center text-sm text-teal-100/70 transition hover:text-cyan-200"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <AffiliateDisclosure variant="footer" />
        </div>

        <p className="mt-6 text-xs text-teal-100/40">
          © 2026 Console Gear Hub · Editorial comparisons for console players ·
          Amazon product links use the{" "}
          <code className="text-teal-100/55">AMAZON_TAG</code> environment
          variable
        </p>
      </div>
    </footer>
  );
}
