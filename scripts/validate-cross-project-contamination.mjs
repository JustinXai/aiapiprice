import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const BUILD_DIR = path.join(rootDir, 'dist');

const CONTAMINATION_PATTERNS = [
  'RutaAPI',
  'AICostPlanner',
  'SellerFixHub',
  'ExtensionFixes',
  'AI API Ops',
  'EUReadySeller',
  'EInvoiceAtlas',
  'aiapiops.com',
  'rutaapi.com',
  'sellerfixhub.com',
  'extensionfixes.com'
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

function validateCrossProject() {
  console.log('Validating cross-project contamination...');
  
  const errors = [];
  const htmlFiles = findHTMLFiles(BUILD_DIR);
  
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(BUILD_DIR, file);
    
    for (const pattern of CONTAMINATION_PATTERNS) {
      if (content.includes(pattern)) {
        errors.push(`${relativePath}: Contains cross-project reference "${pattern}"`);
      }
    }
  }
  
  console.log(`  Files checked: ${htmlFiles.length}`);
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(e => console.log(`  - ${e}`));
    return false;
  }
  
  console.log('\n✅ Cross-project contamination validation passed');
  return true;
}

const passed = validateCrossProject();
process.exit(passed ? 0 : 1);
