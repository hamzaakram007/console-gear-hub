"use client";

import Link from "next/link";
import { useState } from "react";
import { navCategories } from "@/lib/products";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-[rgba(247,251,253,0.9)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex min-w-0 flex-col"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl font-bold tracking-tight text-ink transition group-hover:text-gulf sm:text-2xl">
            NeonGulf
          </span>
          <span className="truncate text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-soft">
            Console Gear Hub
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {navCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="rounded-md px-3 py-1.5 text-sm text-muted transition hover:bg-neon-soft hover:text-ink"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/blog"
            className="rounded-md px-3 py-1.5 text-sm text-muted transition hover:bg-neon-soft hover:text-ink"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="rounded-md px-3 py-1.5 text-sm text-muted transition hover:bg-neon-soft hover:text-ink"
          >
            About
          </Link>
          <Link href="/category/ssd" className="btn-buy ml-2 !min-h-9 !px-3.5 !py-1.5 !text-sm">
            Buy on Amazon
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-md border border-edge-strong bg-surface-raised px-3 text-sm font-medium text-ink transition hover:border-gulf lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-edge bg-surface-raised px-4 py-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="grid gap-1">
            <li>
              <Link
                href="/category/ssd"
                className="btn-buy mb-2 w-full"
                onClick={() => setOpen(false)}
              >
                Buy on Amazon
              </Link>
            </li>
            <li>
              <Link
                href="/#categories"
                className="block rounded-md px-3 py-3 text-sm text-muted transition hover:bg-neon-soft hover:text-ink"
                onClick={() => setOpen(false)}
              >
                All categories
              </Link>
            </li>
            {navCategories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="block rounded-md px-3 py-3 text-sm text-muted transition hover:bg-neon-soft hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {cat.name}
                  <span className="mt-0.5 block text-xs text-muted-soft">
                    {cat.tagline}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className="block rounded-md px-3 py-3 text-sm text-muted transition hover:bg-neon-soft hover:text-ink"
                onClick={() => setOpen(false)}
              >
                Blog
                <span className="mt-0.5 block text-xs text-muted-soft">
                  Storage, audio, display, and capture guides
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block rounded-md px-3 py-3 text-sm text-muted transition hover:bg-neon-soft hover:text-ink"
                onClick={() => setOpen(false)}
              >
                About
                <span className="mt-0.5 block text-xs text-muted-soft">
                  How NeonGulf picks and discloses affiliates
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
