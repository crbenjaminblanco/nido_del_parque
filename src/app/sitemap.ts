import type { MetadataRoute } from "next";
import { localeTags, locales } from "@/i18n/config";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [localeTags[l], `${site.url}/${l}`]));
  return locales.map((l) => ({
    url: `${site.url}/${l}`,
    changeFrequency: "monthly",
    priority: l === "es" ? 1 : 0.9,
    alternates: { languages },
  }));
}
