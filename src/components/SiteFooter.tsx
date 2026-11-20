import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { navCategories } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-edge bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold text-ink">NeonGulf</p>
            <p className="mt-1 text-sm font-medium text-gulf">Console Gear Hub</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
              Independent console accessory comparisons for PS5 and Xbox Series.
              Not affiliated with Sony, Microsoft, Nintendo, Amazon, or any game
              publisher.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-soft">
              Explore
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              {navCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="inline-flex min-h-10 items-center text-sm text-muted transition hover:text-gulf"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="inline-flex min-h-10 items-center text-sm text-muted transition hover:text-gulf"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-soft">
              Trust
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              <li>
                <Link
                  href="/about"
                  className="inline-flex min-h-10 items-center text-sm text-muted transition hover:text-gulf"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex min-h-10 items-center text-sm text-muted transition hover:text-gulf"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <AffiliateDisclosure variant="footer" />
        </div>

        <p className="mt-6 text-xs text-muted-soft">
          © 2026 NeonGulf · Console Gear Hub · Editorial comparisons for
          console players · Amazon product links may earn us a commission
        </p>
      </div>
    </footer>
  );
}
