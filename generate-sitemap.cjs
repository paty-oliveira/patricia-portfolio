const fs = require("fs");
const path = require("path");

// Define your site's domain and routes
const DOMAIN = "https://patricia-portfolio.netlify.app";
const ROUTES = [
  {
    path: "/",
    priority: 1.0,
    changefreq: "yearly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/blog",
    priority: 0.8,
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/projects",
    priority: 0.7,
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/work",
    priority: 0.5,
    changefreq: "yearly",
    lastmod: new Date().toISOString().split("T")[0],
  },
];

// Function to generate the sitemap XML
function generateSitemap() {
  const urls = ROUTES.map(
    (route) => `
    <url>
      <loc>${DOMAIN}${route.path}</loc>
      <lastmod>${route.lastmod}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>
  `
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;
}

// Write the sitemap to the public directory
function saveSitemap() {
  const sitemap = generateSitemap();
  const outputPath = path.join(__dirname, "public", "sitemap.xml");

  fs.writeFileSync(outputPath, sitemap);
  console.log(`Sitemap successfully generated at: ${outputPath}`);
}

saveSitemap();
