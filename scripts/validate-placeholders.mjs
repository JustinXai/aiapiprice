import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const BUILD_DIR = path.join(rootDir, 'dist');

const PLACEHOLDER_PATTERNS = [
  /TODO/i,
  /TBD/i,
  /placeholder/i,
  /lorem\s+ipsum/i,
  /待补充/i,
  /以后写/i,
  /示例内容/i,
  /样例/i,
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

function validatePlaceholders() {
  console.log('Validating no placeholders...');
  
  const errors = [];
  const htmlFiles = findHTMLFiles(BUILD_DIR);
  
  const fullPages = [
    '/index.html',
    '/claude-code-token-cost/index.html',
    '/openrouter-yue/index.html',
    '/shipin-shengcheng-api-jiage/index.html'
  ];
  
  for (const file of htmlFiles) {
    const relativePath = path.relative(BUILD_DIR, file);
    const content = fs.readFileSync(file, 'utf8');
    
    const isFullPage = fullPages.some(fp => file.endsWith(fp));
    const hasScaffoldNotice = content.includes('完整内容正在补充') || content.includes('scaffold-notice');
    
    for (const pattern of PLACEHOLDER_PATTERNS) {
      const matches = content.match(new RegExp(pattern, 'gi'));
      if (matches) {
        if (isFullPage && !hasScaffoldNotice) {
          errors.push(`${relativePath}: Contains placeholder pattern "${pattern.source}" (${matches.length} occurrences)`);
        }
      }
    }
    
    if (isFullPage && hasScaffoldNotice) {
      continue;
    }
    
    if (isFullPage && !hasScaffoldNotice) {
      const unwantedPatterns = [
        /\{\{[^}]+\}\}/,
        /<%=[^%]+%>/,
        /\[\[TODO\]\]/i,
      ];
      
      for (const pattern of unwantedPatterns) {
        if (pattern.test(content)) {
          errors.push(`${relativePath}: Contains template syntax "${pattern.source}"`);
        }
      }
    }
  }
  
  console.log(`  Files checked: ${htmlFiles.length}`);
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(e => console.log(`  - ${e}`));
    return false;
  }
  
  console.log('\n✅ Placeholder validation passed');
  return true;
}

const passed = validatePlaceholders();
process.exit(passed ? 0 : 1);
