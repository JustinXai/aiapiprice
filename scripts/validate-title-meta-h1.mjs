import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const BUILD_DIR = path.join(rootDir, 'dist');

const BANNED_WORDS = [
  '最便宜', '保证最低价', '保证稳定', '官方替代', '官方合作',
  '所有模型都可用', '永久免费', '不会扣费', '失败一定不扣费',
  '100% 准确对账', 'AI API Doctor 能发现所有风险', 'LinkAI 保证解决所有扣费异常',
  '视频生成失败一定不收费', '官方合作'
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

function validateTitleMetaH1() {
  console.log('Validating title, meta, and H1...');
  
  const errors = [];
  const warnings = [];
  const htmlFiles = findHTMLFiles(BUILD_DIR);
  
  const seenTitles = new Map();
  const seenMetaDesc = new Map();
  const seenH1 = new Map();
  
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(BUILD_DIR, file);
    
    const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : null;
    
    const metaMatch = content.match(/<meta\s+(?:name="description"\s+)?content="([^"]+)"/i);
    const metaDesc = metaMatch ? metaMatch[1].trim() : null;
    
    const h1Matches = content.match(/<h1[^>]*>([^<]+)<\/h1>/gi);
    const h1s = h1Matches ? h1Matches.map(m => {
      const match = m.match(/<h1[^>]*>([^<]+)<\/h1>/i);
      return match ? match[1].trim() : null;
    }).filter(Boolean) : [];
    
    const h1 = h1s[0] || null;
    const h1Count = h1s.length;
    
    if (!title) {
      errors.push(`${relativePath}: Missing <title>`);
    } else {
      if (seenTitles.has(title)) {
        errors.push(`${relativePath}: Duplicate title "${title}" (also in ${seenTitles.get(title)})`);
      } else {
        seenTitles.set(title, relativePath);
      }
      if (title.length < 10) {
        warnings.push(`${relativePath}: Title too short (${title.length} chars)`);
      }
      if (title.length > 70) {
        warnings.push(`${relativePath}: Title too long (${title.length} chars)`);
      }
    }
    
    if (!metaDesc) {
      errors.push(`${relativePath}: Missing meta description`);
    } else {
      if (seenMetaDesc.has(metaDesc)) {
        errors.push(`${relativePath}: Duplicate meta description (also in ${seenMetaDesc.get(metaDesc)})`);
      } else {
        seenMetaDesc.set(metaDesc, relativePath);
      }
      if (metaDesc.length < 50) {
        warnings.push(`${relativePath}: Meta description too short (${metaDesc.length} chars)`);
      }
      if (metaDesc.length > 160) {
        warnings.push(`${relativePath}: Meta description too long (${metaDesc.length} chars)`);
      }
    }
    
    if (!h1) {
      errors.push(`${relativePath}: Missing <h1>`);
    } else {
      if (seenH1.has(h1)) {
        warnings.push(`${relativePath}: Duplicate H1 "${h1}" (also in ${seenH1.get(h1)})`);
      } else {
        seenH1.set(h1, relativePath);
      }
    }
    
    if (h1Count === 0) {
      errors.push(`${relativePath}: No H1 found`);
    } else if (h1Count > 1) {
      warnings.push(`${relativePath}: Multiple H1s found (${h1Count})`);
    }
    
    for (const word of BANNED_WORDS) {
      if (title && title.includes(word)) {
        errors.push(`${relativePath}: Title contains banned word "${word}"`);
      }
      if (h1 && h1.includes(word)) {
        errors.push(`${relativePath}: H1 contains banned word "${word}"`);
      }
    }
  }
  
  console.log(`  Files checked: ${htmlFiles.length}`);
  console.log(`  Unique titles: ${seenTitles.size}`);
  console.log(`  Unique meta descriptions: ${seenMetaDesc.size}`);
  console.log(`  Unique H1s: ${seenH1.size}`);
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(e => console.log(`  - ${e}`));
  }
  
  if (warnings.length > 0) {
    console.log(`\n⚠️ Warnings (${warnings.length}):`);
    warnings.forEach(w => console.log(`  - ${w}`));
  }
  
  if (errors.length === 0) {
    console.log('\n✅ Title/Meta/H1 validation passed');
    return true;
  }
  
  return false;
}

const passed = validateTitleMetaH1();
process.exit(passed ? 0 : 1);
