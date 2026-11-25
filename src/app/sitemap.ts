import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const { productionUrl } = siteConfig;
  return productionUrl ? [{ url: productionUrl.origin }] : [];
}
