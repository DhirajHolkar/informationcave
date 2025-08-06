// scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');

// Create Sanity client
const client = createClient({
  projectId: '16ntz0rf',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-12-01',
});

// Your domain name
const baseUrl = 'https://www.protoncave.com';

async function fetchSlugs() {
  const blogStandardSlugs = await client.fetch(`*[_type == "blogsStandardDetails" && defined(slug.current)]{ "slug": slug.current }`);

  return {
    blogStandard: blogStandardSlugs.map(item => `${baseUrl}/blog-standard-post/${item.slug}`)
  };
}

async function generateSitemap() {
  const slugs = await fetchSlugs();

  const staticPages = [
    `${baseUrl}/`,
    `${baseUrl}/about`,
    `${baseUrl}/blogs`,
    `${baseUrl}/contact`,
    `${baseUrl}/privacy-policy`,
    `${baseUrl}/terma-and-conditions`,

  ];

  const allUrls = [
    ...staticPages,
    ...slugs.blogStandard,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(url => {
    return `<url><loc>${url}</loc></url>`;
  })
  .join('\n')}
</urlset>`;

  const filePath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(filePath, sitemap);
  console.log('✅ Sitemap generated at public/sitemap.xml');
}

generateSitemap().catch(err => {
  console.error('❌ Failed to generate sitemap:', err);
});
