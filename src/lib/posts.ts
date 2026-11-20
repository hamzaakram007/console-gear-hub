import {
  affiliateCtaLabel,
  buildAffiliateUrl,
  type AffiliateTarget,
} from "@/lib/affiliate";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type BlogCta = AffiliateTarget & {
  headline: string;
  body: string;
  categorySlug?: string;
  categoryLabel?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  keywords: string[];
  categorySlug: string;
  excerpt: string;
  blocks: BlogBlock[];
  cta: BlogCta;
};

export type BlogPostWithAffiliate = BlogPost & {
  affiliateUrl: string;
  affiliateLabel: string;
};

const posts: BlogPost[] = [
  {
    slug: "ssd-for-large-console-games",
    title: "SSD storage for large console games: what actually matters",
    description:
      "How to size and choose a console SSD for 80–150 GB story installs, day-one patches, and capture overflow on PS5 and Xbox Series—without chasing PC-only marketing numbers.",
    publishedAt: "2026-03-12",
    updatedAt: "2026-03-12",
    readingMinutes: 8,
    keywords: [
      "PS5 SSD",
      "Xbox Series storage",
      "console NVMe",
      "large game install",
      "console storage upgrade",
    ],
    categorySlug: "ssd",
    excerpt:
      "Modern console story games routinely land between 80 and 150 GB before patches. Here is how to pick capacity, interface, and form factor so you stop uninstalling titles every weekend.",
    blocks: [
      {
        type: "p",
        text: "Console libraries used to fit on a single internal drive with room to spare. That era is gone. A single campaign install can rival an entire older-generation collection, and day-one patches often add tens of gigabytes more. If you play a few large titles at once—or keep capture clips alongside them—you will hit the wall quickly.",
      },
      {
        type: "p",
        text: "This guide focuses on what PS5 and Xbox Series actually accept. Marketing charts aimed at PC builders are useful context, not a shopping list. Console expansion has rules: heatsinks, certified cards, and USB externals each solve a different problem.",
      },
      {
        type: "h2",
        text: "Start with capacity, not peak read speed",
      },
      {
        type: "p",
        text: "Most console-qualified NVMe drives clear the official speed floor by a wide margin. The decision that changes your week-to-week experience is usable capacity after the system reserve and after you leave headroom for updates.",
      },
      {
        type: "ul",
        items: [
          "Plan 2 TB as the practical sweet spot for a living library of several large installs plus patches.",
          "1 TB works if you treat the console like a rotating shelf—install, finish, archive—but you will still delete often.",
          "4 TB makes sense for collectors, households sharing one console, or anyone capturing long sessions to the same machine.",
        ],
      },
      {
        type: "p",
        text: "Leave roughly 10–15% free. Consoles and drives both behave better with breathing room, and large patch downloads fail more often when the last few dozen gigabytes are contested.",
      },
      {
        type: "h2",
        text: "PS5 vs Xbox Series: different expansion paths",
      },
      {
        type: "p",
        text: "On PS5, official internal expansion means a heatsinked PCIe Gen4 M.2 in the expansion bay. Bare sticks without adequate cooling are a false economy—you will buy a heatsink anyway, and clearance in the bay matters. Confirm the drive’s published dimensions against Sony’s guidance before you order.",
      },
      {
        type: "p",
        text: "On Xbox Series, the fastest “feels like internal” path is a certified Expansion Card. USB externals remain excellent for archives, media, and older-generation titles, but they are not a substitute for Series-speed storage when you want current-gen load behavior.",
      },
      {
        type: "h2",
        text: "When an external drive is the smarter buy",
      },
      {
        type: "p",
        text: "Not every storage problem needs an internal upgrade. A rugged USB-C portable SSD is often the better first purchase if you mainly need overflow: finished campaigns, media dumps, or a travel library. Externals also let you move the same archive between a PS5 and an Xbox Series without opening either chassis.",
      },
      {
        type: "ol",
        items: [
          "Use internal / Expansion Card storage for the games you are actively playing.",
          "Park completed titles and large media on an external.",
          "Reclaim space before a big patch weekend instead of mid-download.",
        ],
      },
      {
        type: "h2",
        text: "A practical buying checklist",
      },
      {
        type: "ul",
        items: [
          "Confirm console compatibility (PS5 heatsinked M.2, Xbox Expansion Card, or USB external).",
          "Size for your next 12 months of installs, not last year’s library.",
          "Prefer known warranty terms and retailer return windows over obscure “faster on paper” SKUs.",
          "Budget for a heatsink if the listing is a bare NVMe aimed at desktops.",
        ],
      },
      {
        type: "p",
        text: "When you are ready to compare specific picks, use our side-by-side SSD category—best overall, budget, and premium capacity—with clear Amazon price links and affiliate disclosure.",
      },
    ],
    cta: {
      headline: "Compare console SSD picks",
      body: "Three heatsink-ready and portable options sized for large story installs, with Amazon price checks.",
      categorySlug: "ssd",
      categoryLabel: "Open SSD comparisons",
      amazonKeywords: "WD BLACK SN850X 2TB heatsink",
      amazonAsin: "B0B7CKZGN6",
    },
  },
  {
    slug: "headset-for-story-dialogue",
    title: "Choosing a headset for story games and clear dialogue",
    description:
      "How to pick a console headset that keeps voices intelligible, stays comfortable for long campaigns, and connects cleanly on PS5 and Xbox Series without PC-only software.",
    publishedAt: "2026-03-18",
    updatedAt: "2026-03-18",
    readingMinutes: 7,
    keywords: [
      "gaming headset dialogue",
      "PS5 headset",
      "Xbox Series headset",
      "story game audio",
      "console mic chat",
    ],
    categorySlug: "headset",
    excerpt:
      "Bass-forward “gaming” tuning can bury voices. For dialogue-heavy campaigns and party chat, prioritize midrange clarity, comfort, and a connection path your console actually supports.",
    blocks: [
      {
        type: "p",
        text: "Story sessions reward a different headset profile than competitive shooters. You need intelligible voices during cutscenes and exploration, positional cues that do not require exaggerated bass, and enough comfort to finish a three-hour chapter without hot spots on the ears or temples.",
      },
      {
        type: "p",
        text: "Many headsets sold as universal still assume a Windows EQ app. On console night one, that software is irrelevant. Buy for the ports and wireless standards on your PS5 or Xbox Series first, then refine for sound and mic behavior.",
      },
      {
        type: "h2",
        text: "What “dialogue-friendly” actually means",
      },
      {
        type: "ul",
        items: [
          "A clear center image so speech sits forward without harsh sibilance.",
          "Controlled low end—present enough for score and effects, not so inflated that voices swim.",
          "A mic that mutes cleanly (flip-to-mute or a hardware mute) so party chat does not fight cinematic audio.",
        ],
      },
      {
        type: "p",
        text: "If you already own a TV with a strong center channel or a soundbar, a headset still wins for late-night volume and for hearing subtle environmental cues the living-room mix softens. It is not either/or; it is session-dependent.",
      },
      {
        type: "h2",
        text: "Connection paths that work on console",
      },
      {
        type: "ol",
        items: [
          "3.5 mm into the DualSense or Xbox controller—simple, zero dongle drama, great for travel.",
          "Console-licensed 2.4 GHz wireless—lowest hassle for living-room play when the dongle is supported.",
          "Xbox Wireless (for Series) when you want a headset that pairs like a controller.",
          "USB audio only when the console and headset both document console support; do not assume a PC USB headset will expose full controls on console.",
        ],
      },
      {
        type: "p",
        text: "Dual wireless (2.4 GHz plus Bluetooth) is genuinely useful: take a call or queue a podcast without unplugging the game link. Confirm battery claims against real multi-hour sessions; “up to” ratings rarely match dialogue marathons with the mic active.",
      },
      {
        type: "h2",
        text: "Comfort beats feature lists for campaign play",
      },
      {
        type: "p",
        text: "Clamp force, earpad material, and weight matter more than surround badges you cannot configure on console. Prefer replaceable earpads and a headband that does not dig in after two hours. If glasses are part of your setup, test return windows—frame pressure is personal and rarely listed in a spec sheet.",
      },
      {
        type: "h2",
        text: "Quick decision guide",
      },
      {
        type: "ul",
        items: [
          "Mostly solo story nights: prioritize comfort and midrange clarity over RGB or software surround.",
          "Mix of story and party chat: insist on a reliable hardware mute and a stable wireless link.",
          "Shared household console: favor easy pairing and a mic that does not require per-user PC profiles.",
        ],
      },
      {
        type: "p",
        text: "Our headset category ranks overall, budget, and premium picks with console connection notes and Amazon price links.",
      },
    ],
    cta: {
      headline: "Compare dialogue-friendly headsets",
      body: "See overall, budget, and premium console headsets with connection notes and Amazon price checks.",
      categorySlug: "headset",
      categoryLabel: "Open headset comparisons",
      amazonKeywords: "SteelSeries Arctis Nova 7X Wireless Gen 2",
      amazonAsin: "B0FRPH94LH",
    },
  },
  {
    slug: "tv-monitor-for-console",
    title: "TV or monitor for console gaming: a practical buying guide",
    description:
      "HDMI 2.1, VRR, ALLM, size, and living-room brightness—how to choose a display for PS5 and Xbox Series without overpaying for ports or features you will never use.",
    publishedAt: "2026-03-25",
    updatedAt: "2026-03-25",
    readingMinutes: 9,
    keywords: [
      "HDMI 2.1 TV",
      "console gaming monitor",
      "VRR ALLM",
      "PS5 TV",
      "Xbox Series display",
    ],
    categorySlug: "tv-monitor",
    excerpt:
      "The right console display is less about peak marketing brightness and more about HDMI 2.1 bandwidth, VRR/ALLM behavior, and a size that matches your seating distance.",
    blocks: [
      {
        type: "p",
        text: "Consoles push 4K, high frame-rate modes, and variable refresh more often than living-room TVs from a few years ago can handle cleanly. You do not need a broadcast-reference panel. You do need enough HDMI 2.1 bandwidth, stable VRR, and a picture mode that does not fight game content with aggressive processing.",
      },
      {
        type: "h2",
        text: "TV vs monitor: choose for the room, not the forum",
      },
      {
        type: "ul",
        items: [
          "TV: better for shared couches, larger seating distances, and mixed movie nights. Prioritize HDMI 2.1 ports, ALLM, and a credible game mode.",
          "Monitor: better for desk distance, sharper UI text, and higher sustained refresh when you sit close. Confirm console HDMI features—not every “144 Hz” monitor exposes full VRR over HDMI the way consoles need.",
        ],
      },
      {
        type: "p",
        text: "If the console lives under a living-room stand ten feet away, a well-specced TV usually wins. If you sit arms-length from the screen, a monitor can feel more precise—even at a smaller diagonal.",
      },
      {
        type: "h2",
        text: "The features that change console play",
      },
      {
        type: "ol",
        items: [
          "HDMI 2.1 (or equivalent bandwidth) on the port you will actually use—count ports, not just the fine print.",
          "VRR (and console-compatible flavors) to reduce tearing when frame rates flex.",
          "ALLM so the display enters a low-latency mode without a scavenger hunt through menus.",
          "HDR that holds highlight detail without crushing shadows in dim game scenes.",
        ],
      },
      {
        type: "p",
        text: "Ignore “smart” ecosystem wars unless you care about apps on the same panel. For pure console input, picture pipeline and input lag matter more than which voice assistant is baked in.",
      },
      {
        type: "h2",
        text: "Size and seating distance",
      },
      {
        type: "p",
        text: "A 55-inch set at eight to ten feet is a common sweet spot for 4K console play. Jumping to 65 or 77 inches helps immersion when you have the space, but it also reveals soft UI and compression in streaming apps. Monitors in the 27–32 inch range suit desks; go larger only if your desk depth and neck angle still feel natural.",
      },
      {
        type: "h2",
        text: "Settings worth changing on day one",
      },
      {
        type: "ul",
        items: [
          "Enable game mode / ALLM and disable motion smoothing for game inputs.",
          "Match console HDR output to a calibrated or manufacturer game HDR preset—then tweak brightness to your room.",
          "Confirm the HDMI port is the full-bandwidth one; labels on the jack beat assumptions.",
          "Turn off unnecessary RGB lighting on the display if it distracts during story scenes.",
        ],
      },
      {
        type: "p",
        text: "Compare our TV and monitor picks for console HDMI feature sets, with Amazon price links beside each recommendation.",
      },
    ],
    cta: {
      headline: "Compare TVs & monitors for console",
      body: "Side-by-side HDMI, VRR, and size notes for PS5 and Xbox Series setups.",
      categorySlug: "tv-monitor",
      categoryLabel: "Open display comparisons",
      amazonKeywords: "LG C5 55 OLED OLED55C5PUA",
      amazonAsin: "B0DYQF1Q3Z",
    },
  },
  {
    slug: "capture-card-basics",
    title: "Capture card basics for console creators",
    description:
      "Passthrough, latency, 4K60 vs 1080p, USB vs internal, and the checklist for clean PS5 and Xbox Series capture without hurting your play session.",
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-02",
    readingMinutes: 8,
    keywords: [
      "capture card console",
      "PS5 capture card",
      "Xbox Series passthrough",
      "4K60 capture",
      "streaming console",
    ],
    categorySlug: "capture-card",
    excerpt:
      "A capture card should preserve your game feed and give your PC or recorder a clean signal. Start with passthrough quality and latency, then decide whether you need 4K60 or a simpler 1080p workflow.",
    blocks: [
      {
        type: "p",
        text: "Consoles already record short clips internally, but serious highlight editing, long-form uploads, or dual-PC streaming usually needs a capture card. The job is simple on paper: split or bridge HDMI so you keep playing on a TV or monitor while a second device records or encodes.",
      },
      {
        type: "p",
        text: "In practice, most frustration comes from HDCP surprises, weak passthrough, or buying more resolution than your upload and edit pipeline can use. Start with the play experience, then size the capture path.",
      },
      {
        type: "h2",
        text: "Passthrough first, resolution second",
      },
      {
        type: "ul",
        items: [
          "Passthrough should support the resolution and refresh you actually play—ideally with HDR if your display stack uses it.",
          "Added latency should be imperceptible in story and action games; if the feed feels mushy, the card or cable chain is wrong.",
          "Power and USB bandwidth matter: a 4K60 capture path on an underpowered USB controller will drop frames long before the marketing sheet admits it.",
        ],
      },
      {
        type: "h2",
        text: "4K60 vs 1080p: be honest about the workflow",
      },
      {
        type: "p",
        text: "If you edit on a midrange laptop and publish primarily to platforms that recompress aggressively, a rock-solid 1080p60 (or 1440p where supported) capture often looks cleaner in the final file than an unstable 4K pipeline. Choose 4K60 when you archive masters, crop aggressively in post, or deliver to outlets that request higher resolution.",
      },
      {
        type: "h2",
        text: "USB capture vs internal cards",
      },
      {
        type: "ol",
        items: [
          "USB external units win for laptops, travel setups, and sharing one card between machines.",
          "Internal PCIe cards win for dedicated streaming PCs with fewer cable compromises.",
          "Either way, use certified high-speed HDMI cables and avoid daisy-chaining extras you do not need.",
        ],
      },
      {
        type: "h2",
        text: "Console-specific gotchas",
      },
      {
        type: "ul",
        items: [
          "Disable HDCP where your console and capture software require it for clean capture of supported content.",
          "Match HDR settings across console, passthrough display, and capture software so highlights do not clip differently on stream vs TV.",
          "Keep party chat routing intentional—decide whether chat lives in-console, on the capture PC, or both, before you go live.",
        ],
      },
      {
        type: "h2",
        text: "Minimal starter checklist",
      },
      {
        type: "ol",
        items: [
          "Confirm passthrough for your main display mode.",
          "Confirm capture resolution/framerate your PC can encode sustainably.",
          "Test one full session (not a thirty-second preview) before a public stream.",
          "Label cables; future-you will thank present-you when something fails mid-patch.",
        ],
      },
      {
        type: "p",
        text: "Browse our capture card comparisons for passthrough-oriented picks and Amazon price links for each recommendation.",
      },
    ],
    cta: {
      headline: "Compare capture cards",
      body: "Passthrough, latency, and capture-mode notes for console creators—plus Amazon price checks.",
      categorySlug: "capture-card",
      categoryLabel: "Open capture card comparisons",
      amazonKeywords: "Elgato Game Capture 4K S",
      amazonAsin: "B0FFTFYGLV",
    },
  },
  {
    slug: "storage-upgrade-checklist",
    title: "Console storage upgrade checklist",
    description:
      "A step-by-step checklist to upgrade PS5 or Xbox Series storage safely: measure needs, pick internal vs external, install, migrate games, and verify patches before launch weekends.",
    publishedAt: "2026-04-09",
    updatedAt: "2026-04-09",
    readingMinutes: 6,
    keywords: [
      "PS5 storage upgrade",
      "Xbox Series expansion",
      "console SSD checklist",
      "migrate console games",
      "console storage tips",
    ],
    categorySlug: "ssd",
    excerpt:
      "Upgrading console storage is straightforward when you treat it like a short project: measure, buy the right form factor, install carefully, then migrate and verify before a busy play weekend.",
    blocks: [
      {
        type: "p",
        text: "Storage upgrades fail less from bad hardware and more from skipped steps—wrong heatsink clearance, no migration plan, or discovering mid-download that the new volume was never formatted for games. Use this checklist as a single pass from decision to first successful install.",
      },
      {
        type: "h2",
        text: "1. Measure what you actually need",
      },
      {
        type: "ul",
        items: [
          "List the large titles you keep installed at once and note their current sizes including patches.",
          "Add headroom for the next two downloads you already expect.",
          "Decide whether capture clips and media live on the console or elsewhere.",
        ],
      },
      {
        type: "h2",
        text: "2. Pick the correct upgrade type",
      },
      {
        type: "ol",
        items: [
          "PS5 active library → heatsinked M.2 in the expansion bay.",
          "Xbox Series active library → certified Expansion Card for Series-speed play.",
          "Archives / overflow on either platform → USB external SSD or HDD as appropriate.",
        ],
      },
      {
        type: "p",
        text: "Do not buy a desktop NVMe “because it is faster on a chart” unless you have confirmed heatsink compatibility and console support. Returns cost more time than reading one specification page.",
      },
      {
        type: "h2",
        text: "3. Prepare before you open the chassis",
      },
      {
        type: "ul",
        items: [
          "Back up captures and screenshots you care about.",
          "Note which games are digital vs disc so licenses are not a surprise later.",
          "Have a non-conductive surface, the right screwdriver, and the console powered down and unplugged.",
          "For externals, clear a USB port and cable path that will not snag controllers.",
        ],
      },
      {
        type: "h2",
        text: "4. Install, format, then migrate",
      },
      {
        type: "ol",
        items: [
          "Seat the drive or card firmly; do not force angles the manual does not show.",
          "Power on and complete the console’s format / extended storage setup prompts.",
          "Move or reinstall games intentionally—start with one mid-size title as a smoke test.",
          "Launch that title, apply any pending update, and confirm save data still resolves.",
        ],
      },
      {
        type: "h2",
        text: "5. Verify before a busy weekend",
      },
      {
        type: "ul",
        items: [
          "Download one large patch while you are present to watch for failures.",
          "Confirm rest mode download behavior if you rely on it.",
          "Revisit free space after migrations; delete duplicates left on the old volume.",
          "Label the new drive in any system UI that allows custom names so household members know where games live.",
        ],
      },
      {
        type: "p",
        text: "When you want curated hardware options instead of browsing endless SKUs, use our SSD comparisons for best overall, budget, and premium capacity picks.",
      },
    ],
    cta: {
      headline: "Shop storage upgrades with clear picks",
      body: "Best overall, budget, and premium capacity—compared for PS5 and Xbox Series.",
      categorySlug: "ssd",
      categoryLabel: "Open SSD comparisons",
      amazonKeywords: "Crucial T500 2TB heatsink PS5",
      amazonAsin: "B0CK2RKPBL",
    },
  },
];

function withAffiliate(post: BlogPost): BlogPostWithAffiliate {
  return {
    ...post,
    affiliateUrl: buildAffiliateUrl({
      amazonAsin: post.cta.amazonAsin,
      amazonKeywords: post.cta.amazonKeywords,
    }),
    affiliateLabel: affiliateCtaLabel(),
  };
}

/** Server-only: builds tagged Amazon URLs from AMAZON_TAG. */
export function getPosts(): BlogPostWithAffiliate[] {
  return [...posts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map(withAffiliate);
}

export function getPost(slug: string): BlogPostWithAffiliate | undefined {
  const post = posts.find((p) => p.slug === slug);
  return post ? withAffiliate(post) : undefined;
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function formatPostDate(isoDate: string): string {
  const d = new Date(`${isoDate}T12:00:00Z`);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(d);
}
