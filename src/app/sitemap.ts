import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { LOCALES } from "@/lib/constants";

const staticPaths = [
  "",
  "/dich-vu",
  "/du-an",
  "/bang-gia",
  "/ve-chung-toi",
  "/lien-he",
  "/bao-gia",
  "/dat-lich",
  "/dich-thuat",
  "/kien-thuc",
  "/impressum",
  "/datenschutz",
  "/agb",
  "/cookie-einstellungen",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const path of staticPaths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
    for (const s of services) {
      entries.push({
        url: `${base}/${locale}/dich-vu/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
    for (const post of blogPosts) {
      entries.push({
        url: `${base}/${locale}/kien-thuc/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
