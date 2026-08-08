import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tooltitan.example";
  const paths = ["", "/reviews", "/compare", "/guides", "/deals", "/blog", "/about", "/contact", "/privacy", "/terms", "/affiliate-disclosure"];
  return paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
