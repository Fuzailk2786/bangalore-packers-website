import { MetadataRoute } from "next";

export default async function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.portavomove.com";

  const staticRoutes = [
    "",
    "/about-us",
    "/services",
    "/services/domestic-relocation",
    "/services/international-relocation",
    "/services/office-relocation",
    "/services/vehicle-transport",
    "/services/packing-services",
    "/locations",
    "/blog",
    "/contact-us",
    "/request-quote",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === ""? 1.0 : 0.8,
  }));

  // In production, fetch dynamic blog post slugs from your database here
  const dynamicBlogSlugs: string =; 
  const blogPages = dynamicBlogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages,...blogPages];
}
