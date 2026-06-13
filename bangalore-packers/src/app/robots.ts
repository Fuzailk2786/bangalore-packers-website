// src/app/robots.ts

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/unauthorized/",
          "/callback-success",
        ],
      },
    ],
    sitemap: "https://www.portavomove.com/sitemap.xml",
  };
}
