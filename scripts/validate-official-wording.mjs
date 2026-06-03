import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const BUILD_DIR = path.join(rootDir, 'dist');

const BANNED_PHRASES = [
  { phrase: '官方合作', reason: '本站不是官方合作站点' },
  { phrase: '官方替代', reason: '不得声称是官方替代' },
  { phrase: 'LinkAI 是 OpenRouter', reason: '不得声称 LinkAI 与特定服务商的关系' },
  { phrase: 'LinkAI 是 Claude', reason: '不得声称 LinkAI 与特定服务商的关系' },
  { phrase: 'LinkAI 是 OpenAI', reason: '不得声称 LinkAI 与特定服务商的关系' },
  { phrase: 'LinkAI 是可灵', reason: '不得声称 LinkAI 与特定服务商的关系' },
  { phrase: 'LinkAI 是即梦', reason: '不得声称 LinkAI 与特定服务商的关系' },
  { phrase: '所有模型都可用', reason: '不得声称所有模型都可用' },
  { phrase: '最低价承诺', reason: '不得承诺最低价' }
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

function validateOfficialWording() {
  console.log('Validating official wording...');
  
  const errors = [];
  const htmlFiles = findHTMLFiles(BUILD_DIR);
  
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(BUILD_DIR, file);
    
    for (const { phrase, reason } of BANNED_PHRASES) {
      if (content.includes(phrase)) {
        errors.push(`${relativePath}: "${phrase}" - ${reason}`);
      }
    }
  }
  
  console.log(`  Files checked: ${htmlFiles.length}`);
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(e => console.log(`  - ${e}`));
    return false;
  }
  
  console.log('\n✅ Official wording validation passed');
  return true;
}

const passed = validateOfficialWording();
process.exit(passed ? 0 : 1);
