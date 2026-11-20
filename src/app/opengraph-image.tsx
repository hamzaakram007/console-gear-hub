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
            "linear-gradient(145deg, #d5eaf1 0%, #e9f2f5 48%, #f3f8fa 100%)",
          color: "#0b1c2c",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#0b1c2c",
          }}
        >
          NeonGulf
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#0b1c2c",
              maxWidth: 980,
            }}
          >
            Console Gear Hub
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.35,
              color: "#4a6572",
              maxWidth: 900,
            }}
          >
            Compare SSDs, headsets, TVs & capture cards for PS5 and Xbox
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 24,
            color: "#1a6f8f",
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#00a88a",
              color: "#ffffff",
              padding: "10px 18px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 22,
            }}
          >
            Check price on Amazon
          </div>
          <span>neongulf.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
