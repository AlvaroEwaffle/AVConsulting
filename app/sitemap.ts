import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-04'),
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date('2026-03-04'),
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date('2026-03-04'),
    },
  ];
}
