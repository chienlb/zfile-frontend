const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  if (filePath.endsWith('.css')) {
    const newContent = content.replace(/font-size:\s*(\d+)px/g, (match, p1) => {
      changed = true;
      return `font-size: ${parseInt(p1) + 2}px`;
    });
    if (changed) fs.writeFileSync(filePath, newContent);
  } else if (filePath.endsWith('.tsx')) {
    const newContent = content.replace(/text-\[(\d+)px\]/g, (match, p1) => {
      changed = true;
      return `text-[${parseInt(p1) + 2}px]`;
    });
    if (changed) fs.writeFileSync(filePath, newContent);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && !file.startsWith('.')) {
        walkDir(fullPath);
      }
    } else {
      if (fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
        processFile(fullPath);
      }
    }
  }
}

walkDir(__dirname);
console.log('Font sizes increased by 2px');
