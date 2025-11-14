import type { MetadataRoute } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://detectorai.me"

const pages = [
  "/",
  "/features",
  "/pricing",
  "/dashboard",
  "/privacy",
  "/terms",
  "/security",
  "/careers",
  "/about",
  "/waitlist",
  "/blog",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const isLowChange = new Set(["/privacy", "/terms", "/security"]) // change less frequently

  return pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: isLowChange.has(path) ? "monthly" : "weekly",
    priority: path === "/" ? 1 : isLowChange.has(path) ? 0.5 : 0.8,
  }))
}
