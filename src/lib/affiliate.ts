const DEFAULT_TAG_PLACEHOLDER = "yourtag-20";

/**
 * Amazon Associates tracking ID from env.
 * Set AMAZON_TAG in .env.local / Vercel (e.g. mystore-20).
 */
export function getAmazonTag(): string {
  const tag = process.env.AMAZON_TAG?.trim();
  return tag && tag.length > 0 ? tag : DEFAULT_TAG_PLACEHOLDER;
}

export function isAmazonTagConfigured(): boolean {
  const tag = process.env.AMAZON_TAG?.trim();
  return Boolean(tag && tag.length > 0 && tag !== DEFAULT_TAG_PLACEHOLDER);
}

export type AffiliateTarget = {
  amazonAsin?: string;
  amazonKeywords?: string;
};

/** Build a tagged Amazon product or search URL. */
export function buildAffiliateUrl(target: AffiliateTarget): string {
  const tag = getAmazonTag();
  const asin = target.amazonAsin?.trim();
  if (asin) {
    const url = new URL(`https://www.amazon.com/dp/${encodeURIComponent(asin)}`);
    url.searchParams.set("tag", tag);
    return url.toString();
  }
  const keywords = target.amazonKeywords?.trim() || "console gaming gear";
  const url = new URL("https://www.amazon.com/s");
  url.searchParams.set("k", keywords);
  url.searchParams.set("tag", tag);
  return url.toString();
}

export function affiliateCtaLabel(): string {
  return isAmazonTagConfigured()
    ? "Check price on Amazon"
    : "Check price on Amazon (tag pending)";
}

/**
 * Associates-safe Amazon media CDN product image by ASIN.
 * Pattern used widely by Amazon Associates creatives / image links.
 */
export function amazonProductImageUrl(asin: string, size = 500): string {
  const clean = asin.trim().toUpperCase();
  const dim = Math.min(Math.max(Math.round(size), 200), 1000);
  return `https://m.media-amazon.com/images/P/${encodeURIComponent(clean)}.01._SCLZZZZZZZ_SX${dim}_.jpg`;
}
