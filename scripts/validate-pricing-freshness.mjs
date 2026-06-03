import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const BUILD_DIR = path.join(rootDir, 'dist');

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

function validatePricingFreshness() {
  console.log('Validating pricing freshness notice...');
  
  const errors = [];
  const htmlFiles = findHTMLFiles(BUILD_DIR);
  
  const requiredPhrases = [
    '价格和模型可用性可能变化',
    '以官方文档',
    '后台记录为准'
  ];
  
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(BUILD_DIR, file);
    
    const missingPhrases = [];
    for (const phrase of requiredPhrases) {
      if (!content.includes(phrase)) {
        missingPhrases.push(phrase);
      }
    }
    
    if (missingPhrases.length > 0) {
      errors.push(`${relativePath}: Missing pricing freshness phrases: ${missingPhrases.join(', ')}`);
    }
  }
  
  console.log(`  Files checked: ${htmlFiles.length}`);
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(e => console.log(`  - ${e}`));
    return false;
  }
  
  console.log('\n✅ Pricing freshness validation passed');
  return true;
}

const passed = validatePricingFreshness();
process.exit(passed ? 0 : 1);
