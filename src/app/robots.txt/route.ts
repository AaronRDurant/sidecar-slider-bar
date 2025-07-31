// app/robots.txt/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const content = `
User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/
Disallow: /private/

Sitemap: https://www.sidecarsliderbar.com/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
