type Variant = "banner" | "footer" | "inline";

const copy = {
  banner:
    "Affiliate disclosure: We may earn a commission from qualifying purchases through links on this site, at no extra cost to you. Prices shown are typical street estimates—always verify on the retailer page.",
  footer:
    "FTC affiliate disclosure: Console Gear Hub participates in the Amazon Associates Program and similar partner programs. When you click an Amazon link and buy something, we may earn a commission. That never changes the price you pay. Always confirm current price, shipping, returns, and seller details on Amazon before purchasing. Recommendations are independent editorial opinions for PS5 and Xbox Series setups. This site is not sponsored, endorsed, or approved by Amazon, Sony, Microsoft, Nintendo, or any manufacturer.",
  inline:
    "As an Amazon Associate we may earn from qualifying purchases. Buying through our links never changes the price you pay.",
};

export function AffiliateDisclosure({
  variant = "footer",
}: {
  variant?: Variant;
}) {
  if (variant === "banner") {
    return (
      <aside
        className="border-b border-cyan-400/15 bg-[rgba(4,18,28,0.95)] px-4 py-2 text-center text-xs leading-relaxed text-teal-100/70 sm:text-sm"
        aria-label="Affiliate disclosure"
      >
        {copy.banner}
      </aside>
    );
  }

  if (variant === "inline") {
    return (
      <p className="text-xs leading-relaxed text-teal-100/50" role="note">
        {copy.inline}
      </p>
    );
  }

  return (
    <aside
      className="rounded-lg border border-cyan-400/20 bg-cyan-950/35 px-4 py-4 text-sm leading-relaxed text-teal-100/75"
      aria-label="FTC affiliate disclosure"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-cyan-200/80">
        FTC affiliate disclosure
      </p>
      <p className="mt-2">{copy.footer}</p>
    </aside>
  );
}
