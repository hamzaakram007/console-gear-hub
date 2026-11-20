# Console Gear Hub

Console gear comparison site for **PS5** and **Xbox Series**: SSD storage, headsets, TVs/monitors, and capture cards. Three research-backed picks per category (best overall / budget / premium), side-by-side comparison UX, Amazon Associates links via `AMAZON_TAG`, and a clear FTC affiliate disclosure.

**Live (canonical):** [https://neongulf.com](https://neongulf.com) · also [https://gear.neongulf.com](https://gear.neongulf.com)

**Not affiliated with Sony, Microsoft, Nintendo, Amazon, or any game publisher.**

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Product catalog: `src/data/products.json`
- Blog posts: `src/lib/posts.ts` (affiliate CTAs via `AMAZON_TAG`)
- Affiliate URLs: `src/lib/affiliate.ts` (reads `AMAZON_TAG`)
- Deploy target: Vercel (`team_F6KmHT8xzv90muVN0aGMdgbc`)

## Pages

| Route | What it does |
| --- | --- |
| `/` | Landing — brand hero + category list + blog teaser |
| `/blog` | Editorial guides index |
| `/blog/[slug]` | SEO guides (SSD, headset, display, capture, checklist) |
| `/category/ssd` | SSD storage picks + comparison |
| `/category/headset` | Headset picks + comparison |
| `/category/tv-monitor` | TV/monitor picks + comparison |
| `/category/capture-card` | Capture card picks + comparison |
| `/about` | About NeonGulf / how picks & affiliates work |
| `/privacy` | Privacy policy (Associates-friendly) |
| `/sitemap.xml` | SEO sitemap |
| `/robots.txt` | Crawler rules |

## Local development

```bash
cp .env.example .env.local
# edit AMAZON_TAG=your-associates-id-20
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
```

## Connecting Amazon Associates

1. **Apply** at [Amazon Associates](https://affiliate-program.amazon.com/) and wait for approval.
2. **Copy your tracking ID** (looks like `storename-20`).
3. **Set the environment variable** named exactly `AMAZON_TAG`:

   **Local**

   ```bash
   # .env.local
   AMAZON_TAG=storename-20
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

   **Vercel**

   - Project → Settings → Environment Variables
   - Key: `AMAZON_TAG`
   - Value: your tracking ID (e.g. `storename-20`)
   - Environments: Production, Preview, Development
   - Redeploy so links rebuild with the new tag

4. **How links are built**

   - Each product in `src/data/products.json` has `amazonAsin` and/or `amazonKeywords`.
   - At render time the app builds:
     - `https://www.amazon.com/dp/{ASIN}?tag={AMAZON_TAG}` when an ASIN is present
     - otherwise `https://www.amazon.com/s?k={keywords}&tag={AMAZON_TAG}`
   - If `AMAZON_TAG` is unset, links fall back to `yourtag-20` so local builds still render.

5. **Compliance checklist**

   - Keep the sitewide FTC disclosure (banner + footer) visible.
   - Do not cloak affiliate URLs or hide that links are paid.
   - Verify ASINs and prices on Amazon before publishing recommendations.
   - Follow [Amazon Associates Operating Agreement](https://affiliate-program.amazon.com/help/operating/agreement) rules for trademarks and link formatting.

6. **Optional site URL**

   Set `NEXT_PUBLIC_SITE_URL` to your production origin so Open Graph, canonical URLs, sitemap, and robots stay correct (defaults to `https://neongulf.com`).

## Updating products

Edit `src/data/products.json`:

- `name`, `brand`, `summary`, `bestFor`, `pros`, `cons`, `specs` — editorial copy
- `price` / `priceNote` — typical street estimates (always labeled as such)
- `amazonAsin` — preferred; used for `/dp/` links
- `amazonKeywords` — fallback search query

Do **not** hard-code `tag=` in the JSON; the tag always comes from `AMAZON_TAG`.

## Deploy on Vercel

1. Import `hamzaakram007/console-gear-hub`.
2. Framework: Next.js (auto-detected).
3. Add env vars: `AMAZON_TAG=neongulf-20`, `NEXT_PUBLIC_SITE_URL=https://neongulf.com`.
4. Deploy (or push to `main` for auto-deploy).

Team reference: `team_F6KmHT8xzv90muVN0aGMdgbc`.

## Legal / content notes

- Console-only framing (PS5 / Xbox Series). No PC mod or unofficial download messaging.
- Affiliate disclosure appears in the top banner, inline near CTAs, and a full FTC block in the footer.
- Buy links use `rel="sponsored nofollow"`.
- Catalog ASINs are verified Amazon listing IDs for the named SKUs; always re-check availability before featuring a sale.
