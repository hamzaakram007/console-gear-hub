type Variant = "banner" | "footer" | "inline";

const copy = {
  banner:
    "Affiliate disclosure: We may earn a commission from qualifying Amazon purchases through links on this site, at no extra cost to you. Always verify live price, stock, and shipping on Amazon.",
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
        className="border-b border-edge bg-gulf-soft/70 px-4 py-2 text-center text-xs leading-relaxed text-ink/80 sm:text-[0.8125rem]"
        aria-label="Affiliate disclosure"
      >
        {copy.banner}
      </aside>
    );
  }

  if (variant === "inline") {
    return (
      <p className="text-xs leading-relaxed text-muted-soft" role="note">
        {copy.inline}
      </p>
    );
  }

  return (
    <aside
      className="border border-edge bg-surface-raised px-4 py-4 text-sm leading-relaxed text-muted"
      aria-label="FTC affiliate disclosure"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gulf">
        FTC affiliate disclosure
      </p>
      <p className="mt-2">{copy.footer}</p>
    </aside>
  );
}
