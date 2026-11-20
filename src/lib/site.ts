/** Canonical production host for Gear Hub (apex = Associates money site). */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://neongulf.com";

export const SITE_NAME = "Console Gear Hub";
export const BRAND_NAME = "NeonGulf";
export const SITE_TAGLINE =
  "Honest console gear comparisons for PS5 and Xbox Series";

export const SITE_DESCRIPTION =
  "Side-by-side console gear comparisons for PS5 and Xbox Series: SSD storage, gaming headsets, TVs & monitors, and capture cards. Best overall, budget, and premium picks with clear Amazon affiliate disclosure.";

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
