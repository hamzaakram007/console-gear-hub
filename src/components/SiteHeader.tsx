"use client";

import Link from "next/link";
import { useState } from "react";
import { navCategories } from "@/lib/products";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cyan-400/15 bg-[rgba(4,18,28,0.92)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex min-w-0 items-baseline gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="truncate font-[family-name:var(--font-display)] text-xl tracking-tight text-cyan-100 transition group-hover:text-cyan-50 sm:text-2xl">
            Console Gear Hub
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="rounded-md px-3 py-1.5 text-sm text-teal-100/75 transition hover:bg-cyan-400/10 hover:text-cyan-100"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/blog"
            className="rounded-md px-3 py-1.5 text-sm text-teal-100/75 transition hover:bg-cyan-400/10 hover:text-cyan-100"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="rounded-md px-3 py-1.5 text-sm text-teal-100/75 transition hover:bg-cyan-400/10 hover:text-cyan-100"
          >
            About
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-400/10 px-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-400/20 lg:hidden"
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
          className="border-t border-cyan-400/10 bg-[rgba(4,18,28,0.98)] px-4 py-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="grid gap-1">
            <li>
              <Link
                href="/#categories"
                className="block rounded-md px-3 py-3 text-sm text-teal-100/80 transition hover:bg-cyan-400/10 hover:text-cyan-100"
                onClick={() => setOpen(false)}
              >
                All categories
              </Link>
            </li>
            {navCategories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="block rounded-md px-3 py-3 text-sm text-teal-100/80 transition hover:bg-cyan-400/10 hover:text-cyan-100"
                  onClick={() => setOpen(false)}
                >
                  {cat.name}
                  <span className="mt-0.5 block text-xs text-teal-100/45">
                    {cat.tagline}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className="block rounded-md px-3 py-3 text-sm text-teal-100/80 transition hover:bg-cyan-400/10 hover:text-cyan-100"
                onClick={() => setOpen(false)}
              >
                Blog
                <span className="mt-0.5 block text-xs text-teal-100/45">
                  Storage, audio, display, and capture guides
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block rounded-md px-3 py-3 text-sm text-teal-100/80 transition hover:bg-cyan-400/10 hover:text-cyan-100"
                onClick={() => setOpen(false)}
              >
                About
                <span className="mt-0.5 block text-xs text-teal-100/45">
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
