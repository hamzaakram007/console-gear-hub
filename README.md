# Console Gear Hub

High-level MVP: compare console gear (SSD, headset, TV/monitor, capture card) with three picks per category, side-by-side tables, and affiliate link placeholders + FTC-style disclosure.

**Not affiliated with Sony, Microsoft, Nintendo, or any game publisher.** Brand is original — no Rockstar/GTA trademarks as product marks.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Product catalog: `src/data/products.json`
- Deploy target: Vercel

## Pages

| Route | What it does |
| --- | --- |
| `/` | Landing — brand hero + category list |
| `/category/ssd` | SSD storage picks + comparison table |
| `/category/headset` | Headset picks + table |
| `/category/tv-monitor` | TV/monitor picks + table |
| `/category/capture-card` | Capture card picks + table |

Each category has **best overall / best budget / best premium** (3 products). Buy buttons point at `example.com` affiliate placeholders. Footer includes affiliate disclosure.

## Local dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
```

## Deploy on Vercel

1. Import `hamzaakram007/console-gear-hub` in the Vercel dashboard.
2. Framework preset: Next.js (auto-detected).
3. Deploy — no env vars required for this MVP.

Or CLI:

```bash
npx vercel
```

## Updating products

Edit `src/data/products.json`. Replace placeholder names, specs, prices, and `affiliateUrl` values with real SKUs and tagged affiliate links when programs are approved.

## Legal / content notes

- Console-only framing (PS5 / Xbox Series). No PC mod or unofficial download messaging.
- Affiliate disclosure is always in the site footer.
- Prices marked as placeholders until live retail data is wired.
