import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const SITE_URL = 'https://aiapiprice.com';
const BUILD_DIR = path.join(rootDir, 'dist');

const pages = [
  { url: '/', lastmod: '2026-06-03', priority: '1.0', changefreq: 'weekly' },
  { url: '/claude-code-token-cost/', lastmod: '2026-06-03', priority: '0.9', changefreq: 'monthly' },
  { url: '/openrouter-yue/', lastmod: '2026-06-03', priority: '0.9', changefreq: 'monthly' },
  { url: '/shipin-shengcheng-api-jiage/', lastmod: '2026-06-03', priority: '0.9', changefreq: 'monthly' },
  { url: '/deepseek-api-price/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/kimi-api-price/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/qwen-api-price/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/doubao-api-price/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/tongyi-qianwen-api-price/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/claude-api-price/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/gemini-api-price/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/openai-api-usage/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/openai-api-billing/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/api-koufei-yichang/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/request-failed-billing/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/tool-call-koufei/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/streaming-interrupted-billing/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/gpt-image-api-price/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/image-generation-api-price/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/jimeng-api-price/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/keling-api-jiage/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/video-generation-failed-billing/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
  { url: '/small-budget-api-test/', lastmod: '2026-06-03', priority: '0.8', changefreq: 'monthly' },
];

function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const page of pages) {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${page.url}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  }
  
  xml += '</urlset>\n';
  
  return xml;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function main() {
  ensureDir(BUILD_DIR);
  
  const sitemap = generateSitemap();
  fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemap, 'utf8');
  
  console.log(`Sitemap generated with ${pages.length} URLs`);
  console.log(`Output: ${path.join(BUILD_DIR, 'sitemap.xml')}`);
}

main();
