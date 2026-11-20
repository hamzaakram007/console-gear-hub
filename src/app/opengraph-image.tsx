import { ImageResponse } from "next/og";

export const alt = "Console Gear Hub — NeonGulf console gear comparisons";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(145deg, #04121c 0%, #0a2a38 48%, #06303a 100%)",
          color: "#ecfeff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#5eead4",
          }}
        >
          NeonGulf
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1.05,
              color: "#cffafe",
              maxWidth: 980,
            }}
          >
            Console Gear Hub
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              lineHeight: 1.35,
              color: "#99f6e4",
              maxWidth: 900,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Compare SSDs, headsets, TVs & capture cards for PS5 and Xbox
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#67e8f9",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          neongulf.com
        </div>
      </div>
    ),
    { ...size },
  );
}
