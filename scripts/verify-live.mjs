import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const SITE_URL = process.env.SITE_URL || 'https://aiapiprice.com';

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

async function fetchWithTimeout(url, timeout = 10000) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    const response = await fetch(url, { 
      signal: controller.signal,
      headers: { 'User-Agent': 'AI-API-Price-Validator/1.0' }
    });
    
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    return null;
  }
}

async function verifyLive() {
  console.log('Verifying live site...');
  console.log(`Site URL: ${SITE_URL}`);
  
  const results = {
    passed: [],
    failed: [],
    warnings: []
  };
  
  const requiredFiles = [
    '/sitemap.xml',
    '/robots.txt',
    '/llms.txt'
  ];
  
  for (const file of requiredFiles) {
    const url = `${SITE_URL}${file}`;
    const response = await fetchWithTimeout(url);
    
    if (response && response.ok) {
      results.passed.push(`${file}: ${response.status}`);
    } else {
      results.failed.push(`${file}: ${response ? response.status : 'Failed'}`);
    }
  }
  
  for (const page of EXPECTED_PAGES) {
    const url = `${SITE_URL}${page}`;
    const response = await fetchWithTimeout(url);
    
    if (response && response.ok) {
      results.passed.push(`${page}: ${response.status}`);
    } else {
      results.failed.push(`${page}: ${response ? response.status : 'Failed'}`);
    }
  }
  
  console.log(`\nPassed: ${results.passed.length}`);
  console.log(`Failed: ${results.failed.length}`);
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed checks:');
    results.failed.forEach(f => console.log(`  - ${f}`));
  }
  
  if (results.passed.length > 0) {
    console.log('\n✅ Passed checks:');
    results.passed.forEach(p => console.log(`  - ${p}`));
  }
  
  return results.failed.length === 0;
}

verifyLive().then(passed => {
  if (passed) {
    console.log('\n✅ All live checks passed');
    process.exit(0);
  } else {
    console.log('\n❌ Some live checks failed');
    process.exit(1);
  }
}).catch(error => {
  console.error('Error during verification:', error.message);
  process.exit(1);
});
