import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const BUILD_DIR = path.join(rootDir, 'dist');

const ALLOWED_CTA_URLS = [
  'https://aiapidoctor.com/',
  'https://api1.link-ai.cc/register'
];

const BANNED_CTA_PATTERNS = [
  /\/tools\//i,
  /#\/register/i,
  /docs\.link-ai\.cc\/tools/i,
  /rutaapi/i,
  /aicostplanner/i,
  /aiapiops/i,
  /sellerfixhub/i,
  /extensionfixes/i
];

function findHTMLFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && item !== 'node_modules') {
      findHTMLFiles(fullPath, files);
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

function validateCTA() {
  console.log('Validating CTA URLs...');
  
  const errors = [];
  const warnings = [];
  const htmlFiles = findHTMLFiles(BUILD_DIR);
  
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(BUILD_DIR, file);
    
    const hrefMatches = content.match(/href="([^"]+)"/gi);
    if (!hrefMatches) continue;
    
    for (const match of hrefMatches) {
      const href = match.match(/href="([^"]+)"/i);
      if (!href) continue;
      const url = href[1];
      
      if (url.startsWith('http')) {
        const isAllowed = ALLOWED_CTA_URLS.some(allowed => url.startsWith(allowed));
        const isBanned = BANNED_CTA_PATTERNS.some(pattern => pattern.test(url));
        
        if (isBanned) {
          errors.push(`${relativePath}: Contains banned CTA URL: ${url}`);
        }
        
        if (url.includes('link-ai') && !url.includes('/register')) {
          warnings.push(`${relativePath}: LinkAI URL without /register: ${url}`);
        }
      }
    }
  }
  
  console.log(`  Files checked: ${htmlFiles.length}`);
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(e => console.log(`  - ${e}`));
  }
  
  if (warnings.length > 0) {
    console.log(`\n⚠️ Warnings (${warnings.length}):`);
    warnings.forEach(w => console.log(`  - ${w}`));
  }
  
  if (errors.length === 0) {
    console.log('\n✅ CTA URL validation passed');
    return true;
  }
  
  return false;
}

const passed = validateCTA();
process.exit(passed ? 0 : 1);
