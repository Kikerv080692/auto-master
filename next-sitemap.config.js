

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://auto-master.vercel.app",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: [],

  i18n: {
    locales: ["cz", "ru", "ua"],
    defaultLocale: "cz",
  },

  additionalPaths: async (config) => {
    const staticPaths = [
      "",
      "contact",
      "service",
      "brake",
      "diagnostik",
      "electric",
      "engin",
      "gasSistem",
    ];

    const urls = [];

    for (const locale of config.i18n.locales) {
      for (const path of staticPaths) {
        urls.push({
          loc: `/${locale}${path ? `/${path}` : ""}`,
          changefreq: "daily",
          priority: 0.7,
          lastmod: new Date().toISOString(),
        });
      }
    }

    return urls;
  },
};
