import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export async function GET() {
  const { logoPath, width, height } = siteConfig.socialImage;
  const logo = await readFile(join(process.cwd(), "public", logoPath));
  const logoUrl = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "72px 84px",
        backgroundColor: "#202629",
        borderTop: "12px solid #63d5df",
        color: "#ffffff",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 30 }}>
          <div style={{
            width: 64,
            height: 64,
            backgroundImage: `url(${logoUrl})`,
            backgroundSize: "64px 64px",
          }} />
          <span>{siteConfig.brandName}.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -3, lineHeight: 1.08 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 42, color: "#63d5df" }}>{siteConfig.jobTitle}</div>
          <div style={{ fontSize: 28, color: "#e5e7eb", marginTop: 20 }}>
            Selected projects and work experience
          </div>
        </div>
      </div>
    ),
    { width, height },
  );
}
