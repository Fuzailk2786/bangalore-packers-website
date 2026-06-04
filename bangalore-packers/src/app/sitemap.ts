import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yourdomain.com';
  
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/request-quote',
    '/locations',
    '/services',
    '/services/domestic-relocation',
    '/services/international-relocation',
    '/services/office-relocation',
    '/services/vehicle-transport',
    '/services/packing-services',
    '/blog',
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
