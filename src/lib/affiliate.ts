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
