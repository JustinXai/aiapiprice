import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const BUILD_DIR = path.join(rootDir, 'dist');

const PROMPT_RESIDUE = [
  '请先',
  '本轮',
  '输出报告',
  'Let me',
  'Actually',
  'I should',
  'I need to',
  'The task is complete',
  'Waiting for next instruction'
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

function validatePromptResidue() {
  console.log('Validating prompt residue...');
  
  const errors = [];
  const htmlFiles = findHTMLFiles(BUILD_DIR);
  
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(BUILD_DIR, file);
    
    for (const phrase of PROMPT_RESIDUE) {
      const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
      const matches = content.match(regex);
      if (matches) {
        errors.push(`${relativePath}: Contains prompt residue "${phrase}" (${matches.length} occurrences)`);
      }
    }
  }
  
  console.log(`  Files checked: ${htmlFiles.length}`);
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(e => console.log(`  - ${e}`));
    return false;
  }
  
  console.log('\n✅ Prompt residue validation passed');
  return true;
}

const passed = validatePromptResidue();
process.exit(passed ? 0 : 1);
