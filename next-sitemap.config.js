/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://home.gutricious.com',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: false, // We already created a custom robots.txt
  exclude: ['/api/*', '/_next/*', '/static/*'],
  // Define alternates for multilingual pages
  alternateRefs: [
    {
      href: 'https://home.gutricious.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://home.gutricious.com/de',
      hreflang: 'de',
    },
    {
      href: 'https://home.gutricious.com/fr',
      hreflang: 'fr',
    },
    {
      href: 'https://home.gutricious.com/es',
      hreflang: 'es',
    },
    {
      href: 'https://home.gutricious.com/pt',
      hreflang: 'pt',
    },
    {
      href: 'https://home.gutricious.com/it',
      hreflang: 'it',
    },
    {
      href: 'https://home.gutricious.com/nl',
      hreflang: 'nl',
    },
  ],
  // Create a transform function to handle alternates for each URL
  transform: async (config, path) => {
    // Skip paths that should be excluded from sitemap
    if (path.includes('/api/') || path.includes('/_next/') || path.includes('/static/')) {
      return null;
    }

    // Base configuration
    const sitemapItem = {
      loc: `${config.siteUrl}${path}`,
      changefreq: config.changefreq,
      priority: config.priority,
      alternateRefs: [],
    };

    // Check if the path is a language-specific path
    const locales = ['en', 'de', 'fr', 'es', 'pt', 'it', 'nl'];
    
    // Extract path without locale prefix and then add the correct locale prefix
    let pathWithoutLocale = path;
    let currentLocale = '';
    
    // Find if path starts with a locale
    for (const locale of locales) {
      if (path === `/${locale}` || path.startsWith(`/${locale}/`)) {
        currentLocale = locale;
        pathWithoutLocale = path.substring(locale.length + 1) || '';
        break;
      }
    }

    // Only generate alternates if we identified the current locale
    if (currentLocale) {
      sitemapItem.alternateRefs = locales.map(locale => ({
        href: `${config.siteUrl}/${locale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`,
        hreflang: locale,
      }));
    }

    return sitemapItem;
  },
};

module.exports = config;
