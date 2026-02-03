import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fitness900.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#features`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Add more pages as they are created
    // {
    //   url: `${baseUrl}/privacy`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.5,
    // },
    // {
    //   url: `${baseUrl}/terms`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.5,
    // },
  ];
}