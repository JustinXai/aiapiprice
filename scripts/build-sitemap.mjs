import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const SITE_URL = 'https://aiapiprice.com';
const BUILD_DIR = path.join(rootDir, 'dist');

/**
 * Sitemap URL config — ordered to match urlConfig slugs for priority/changefreq.
 */
const urlConfig = [
  { slug: '',                              priority: '1.0', changefreq: 'weekly'  },
  { slug: 'ai-video-api-price/',            priority: '0.9', changefreq: 'monthly' },
  { slug: 'video-generation-api-cost/',     priority: '0.9', changefreq: 'monthly' },
  { slug: 'ai-short-drama-api-cost/',      priority: '0.9', changefreq: 'monthly' },
  { slug: 'image-to-video-api-cost/',      priority: '0.8', changefreq: 'monthly' },
  { slug: 'video-generation-timeout/',      priority: '0.8', changefreq: 'monthly' },
  { slug: 'video-generation-webhook/',      priority: '0.8', changefreq: 'monthly' },
  { slug: 'product-image-api-price/',       priority: '0.8', changefreq: 'monthly' },
  { slug: 'product-video-api-cost/',       priority: '0.8', changefreq: 'monthly' },
  { slug: 'ai-agent-token-cost/',          priority: '0.8', changefreq: 'monthly' },
  { slug: 'claude-code-token-cost/',       priority: '0.9', changefreq: 'monthly' },
  { slug: 'openrouter-yue/',               priority: '0.9', changefreq: 'monthly' },
  { slug: 'shipin-shengcheng-api-jiage/', priority: '0.9', changefreq: 'monthly' },
  { slug: 'deepseek-api-price/',           priority: '0.8', changefreq: 'monthly' },
  { slug: 'kimi-api-price/',              priority: '0.8', changefreq: 'monthly' },
  { slug: 'qwen-api-price/',              priority: '0.8', changefreq: 'monthly' },
  { slug: 'doubao-api-price/',            priority: '0.8', changefreq: 'monthly' },
  { slug: 'tongyi-qianwen-api-price/',    priority: '0.8', changefreq: 'monthly' },
  { slug: 'claude-api-price/',            priority: '0.8', changefreq: 'monthly' },
  { slug: 'claude-fable-5-api-jiage/',   priority: '0.9', changefreq: 'monthly' },
  { slug: 'gemini-api-price/',            priority: '0.8', changefreq: 'monthly' },
  { slug: 'openai-api-usage/',            priority: '0.8', changefreq: 'monthly' },
  { slug: 'openai-api-billing/',          priority: '0.8', changefreq: 'monthly' },
  { slug: 'api-koufei-yichang/',          priority: '0.8', changefreq: 'monthly' },
  { slug: 'request-failed-billing/',      priority: '0.8', changefreq: 'monthly' },
  { slug: 'tool-call-koufei/',           priority: '0.8', changefreq: 'monthly' },
  { slug: 'streaming-interrupted-billing/',priority: '0.8', changefreq: 'monthly' },
  { slug: 'gpt-image-api-price/',         priority: '0.8', changefreq: 'monthly' },
  { slug: 'image-generation-api-price/',   priority: '0.8', changefreq: 'monthly' },
  { slug: 'jimeng-api-price/',           priority: '0.8', changefreq: 'monthly' },
  { slug: 'keling-api-jiage/',           priority: '0.8', changefreq: 'monthly' },
  { slug: 'video-generation-failed-billing/', priority: '0.8', changefreq: 'monthly' },
  { slug: 'small-budget-api-test/',       priority: '0.8', changefreq: 'monthly' },
];

/**
 * ISO date string validator — rejects Invalid Date, undefined, null, NaN.
 */
function isValidDateString(value) {
  if (typeof value !== 'string') return null;
  if (!value || value === 'undefined' || value === 'null' || value === 'NaN') return null;
  const d = new Date(value);
  if (isNaN(d.getTime())) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  return value;
}

/**
 * Extract lastmod from a built HTML file.
 * The ArticleLayout renders updatedAt as:
 *   <time datetime="YYYY-MM-DD">YYYY-MM-DD</time>
 * or as a data attribute. We parse the HTML and find the date.
 */
function extractLastmodFromHtml(htmlPath) {
  if (!fs.existsSync(htmlPath)) return null;

  const content = fs.readFileSync(htmlPath, 'utf8');

  // Match <time datetime="2026-06-10"> or data-date="2026-06-10"
  const patterns = [
    /<time[^>]+datetime=["']([\d]{4}-[\d]{2}-[\d]{2})["']/,
    /data-date=["']([\d]{4}-[\d]{2}-[\d]{2})["']/,
    /data-updated-at=["']([\d]{4}-[\d]{2}-[\d]{2})["']/,
    // Match any YYYY-MM-DD appearing near "更新时间" or "updated"
    /更新于?\s*([\d]{4}-[\d]{2}-[\d]{2})/,
    /Updated?\s*([\d]{4}-[\d]{2}-[\d]{2})/i,
  ];

  for (const pattern of patterns) {
    const m = content.match(pattern);
    if (m && isValidDateString(m[1])) {
      return m[1];
    }
  }

  return null;
}

function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const cfg of urlConfig) {
    const url = cfg.slug === '' ? '/' : `/${cfg.slug}`;
    const filePath = cfg.slug === ''
      ? path.join(BUILD_DIR, 'index.html')
      : path.join(BUILD_DIR, cfg.slug, 'index.html');

    const lastmod = extractLastmodFromHtml(filePath);

    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${url}</loc>\n`;
    if (lastmod) {
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
    }
    xml += `    <changefreq>${cfg.changefreq}</changefreq>\n`;
    xml += `    <priority>${cfg.priority}</priority>\n`;
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

  const urlCount = urlConfig.length;
  console.log(`Sitemap generated with ${urlCount} URLs`);
  console.log(`Output: ${path.join(BUILD_DIR, 'sitemap.xml')}`);

  // Safety check: no bad values in output
  const badPatterns = ['Invalid Date', 'undefined', 'null', 'NaN'];
  for (const p of badPatterns) {
    if (sitemap.includes(p)) {
      console.error(`ERROR: "${p}" detected in sitemap XML — check date extraction logic!`);
      process.exit(1);
    }
  }
}

main();
