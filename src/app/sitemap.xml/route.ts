// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.sidecarsliderbar.com";

  const staticRoutes = [
    "",
    "locations",
    "catering",
    "about",
    "contact",
    "apply",
  ];

  const urls = staticRoutes
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}/${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
