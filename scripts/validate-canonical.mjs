import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const BUILD_DIR = path.join(rootDir, 'dist');

const SITE_URL = 'https://aiapiprice.com';

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

function validateCanonical() {
  console.log('Validating canonical URLs...');
  
  const errors = [];
  const htmlFiles = findHTMLFiles(BUILD_DIR);
  
  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(BUILD_DIR, file);
    
    const canonicalMatches = content.match(/<link\s+rel="canonical"\s+href="([^"]+)"/gi);
    const canonicals = canonicalMatches ? canonicalMatches.map(m => {
      const match = m.match(/href="([^"]+)"/i);
      return match ? match[1].trim() : null;
    }).filter(Boolean) : [];
    
    if (canonicals.length === 0) {
      errors.push(`${relativePath}: Missing canonical`);
    } else if (canonicals.length > 1) {
      errors.push(`${relativePath}: Multiple canonicals (${canonicals.length})`);
    } else {
      const canonical = canonicals[0];
      if (!canonical.startsWith('http')) {
        errors.push(`${relativePath}: Canonical is not absolute: ${canonical}`);
      }
      if (!canonical.startsWith(SITE_URL)) {
        errors.push(`${relativePath}: Canonical domain mismatch: ${canonical} (expected ${SITE_URL})`);
      }
    }
    
    const jsonLdMatches = content.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi);
    if (jsonLdMatches) {
      for (const jsonLd of jsonLdMatches) {
        try {
          const jsonContent = jsonLd.replace(/<script type="application\/ld\+json">/, '').replace(/<\/script>/, '');
          const data = JSON.parse(jsonContent);
          
          const checkUrls = (obj, path = '') => {
            if (!obj || typeof obj !== 'object') return;
            
            for (const key of ['url', '@id', 'id']) {
              if (obj[key] && typeof obj[key] === 'string') {
                if (!obj[key].startsWith('http') && obj[key].startsWith('/')) {
                  errors.push(`${relativePath}: JSON-LD ${path}${key} is relative: ${obj[key]}`);
                }
              }
            }
            
            if (Array.isArray(obj)) {
              obj.forEach((item, i) => checkUrls(item, `${path}[${i}].`));
            } else if (typeof obj === 'object') {
              Object.keys(obj).forEach(key => checkUrls(obj[key], `${path}${key}.`));
            }
          };
          
          checkUrls(data);
        } catch (e) {
          errors.push(`${relativePath}: JSON-LD parse error: ${e.message}`);
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
  
  console.log('\n✅ Canonical validation passed');
  return true;
}

const passed = validateCanonical();
process.exit(passed ? 0 : 1);
