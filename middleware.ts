import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "tp-link-kasa-hs103",
  "amazon-smart-plug",
  "wemo-mini-smart-plug",
  "kasa-smart-plug-hs105",
  "gosund-smart-plug",
  "meross-smart-plug",
  "wyze-plug",
  "tp-link-kasa-ep25",
  "eve-energy",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://pilateszone.shop")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/reviews/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("wifi", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/zone"],
};
