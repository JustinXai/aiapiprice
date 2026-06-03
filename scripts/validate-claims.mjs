import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const BUILD_DIR = path.join(rootDir, 'dist');

const BANNED_CLAIMS = [
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

function validateClaims() {
  console.log('Validating no banned claims...');
  
  const errors = [];
  const htmlFiles = findHTMLFiles(BUILD_DIR);
  
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(BUILD_DIR, file);
    
    for (const claim of BANNED_CLAIMS) {
      const regex = new RegExp(claim, 'gi');
      const matches = content.match(regex);
      if (matches) {
        errors.push(`${relativePath}: Contains banned claim "${claim}" (${matches.length} occurrences)`);
      }
    }
  }
  
  console.log(`  Files checked: ${htmlFiles.length}`);
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(e => console.log(`  - ${e}`));
    return false;
  }
  
  console.log('\n✅ Banned claims validation passed');
  return true;
}

const passed = validateClaims();
process.exit(passed ? 0 : 1);
