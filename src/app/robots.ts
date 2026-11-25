import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const { productionUrl } = siteConfig;

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: productionUrl ? new URL("/sitemap.xml", productionUrl).href : undefined,
  };
}
