import type { MetadataRoute } from 'next';
import { cases } from '@/lib/cases';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.ervandra.dev';
  const lastModified = new Date();
  
  // Main routes with priority
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/cases', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/testimonials', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ].map((route) => ({
    url: base + route.path,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Case study routes
  const caseRoutes = cases.map((c) => ({
    url: `${base}/cases/${c.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...routes, ...caseRoutes];
}