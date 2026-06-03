import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const BUILD_DIR = path.join(rootDir, 'dist');

const SITE_URL = 'https://aiapiprice.com';

const EXPECTED_PAGES = [
  '/',
  '/claude-code-token-cost/',
  '/openrouter-yue/',
  '/shipin-shengcheng-api-jiage/',
  '/deepseek-api-price/',
  '/kimi-api-price/',
  '/qwen-api-price/',
  '/doubao-api-price/',
  '/tongyi-qianwen-api-price/',
  '/claude-api-price/',
  '/gemini-api-price/',
  '/openai-api-usage/',
  '/openai-api-billing/',
  '/api-koufei-yichang/',
  '/request-failed-billing/',
  '/tool-call-koufei/',
  '/streaming-interrupted-billing/',
  '/gpt-image-api-price/',
  '/image-generation-api-price/',
  '/jimeng-api-price/',
  '/keling-api-jiage/',
  '/video-generation-failed-billing/',
  '/small-budget-api-test/'
];

function validateSitemapLLMS() {
  console.log('Validating sitemap and llms.txt coverage...');
  
  const errors = [];
  const sitemapPath = path.join(BUILD_DIR, 'sitemap.xml');
  const llmsPath = path.join(BUILD_DIR, 'llms.txt');
  
  if (!fs.existsSync(sitemapPath)) {
    errors.push('sitemap.xml not found');
  }
  
  if (!fs.existsSync(llmsPath)) {
    errors.push('llms.txt not found');
  }
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(e => console.log(`  - ${e}`));
    return false;
  }
  
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const llmsContent = fs.readFileSync(llmsPath, 'utf8');
  
  const sitemapUrls = sitemapContent.match(/<loc>([^<]+)<\/loc>/gi) || [];
  const sitemapPageCount = sitemapUrls.length;
  
  const llmsUrls = llmsContent.match(/\[https:\/\/aiapiprice\.com[^\]]+\]/gi) || [];
  const llmsPageCount = llmsUrls.length;
  
  console.log(`  Sitemap URLs: ${sitemapPageCount}`);
  console.log(`  LLMS URLs: ${llmsPageCount}`);
  
  const sitemapMissing = [];
  for (const page of EXPECTED_PAGES) {
    const fullUrl = `${SITE_URL}${page}`;
    if (!sitemapContent.includes(fullUrl)) {
      sitemapMissing.push(page);
    }
    if (!llmsContent.includes(fullUrl)) {
      errors.push(`llms.txt missing: ${page}`);
    }
  }
  
  if (sitemapMissing.length > 0) {
    console.log(`\n❌ Sitemap missing pages (${sitemapMissing.length}):`);
    sitemapMissing.forEach(p => console.log(`  - ${p}`));
    errors.push(...sitemapMissing.map(p => `sitemap.xml missing: ${p}`));
  }
  
  const excludedPatterns = [
    '/tools/',
    '/api/',
    '/admin/',
    'rutaapi',
    'aicostplanner',
    'aiapiops'
  ];
  
  for (const pattern of excludedPatterns) {
    if (sitemapContent.includes(pattern)) {
      errors.push(`sitemap.xml contains excluded pattern: ${pattern}`);
    }
  }
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(e => console.log(`  - ${e}`));
    return false;
  }
  
  console.log('\n✅ Sitemap/LLMS validation passed');
  return true;
}

const passed = validateSitemapLLMS();
process.exit(passed ? 0 : 1);
