const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertAll() {
  const imgDir = path.join(__dirname, 'public', 'images');
  const files = fs.readdirSync(imgDir);

  for (const file of files) {
    if (file.endsWith('.png')) {
      const p = path.join(imgDir, file);
      const outP = path.join(imgDir, file.replace('.png', '.webp'));
      
      console.log(`Converting ${file}...`);
      await sharp(p)
        .webp({ quality: 80 })
        .toFile(outP);
        
      fs.unlinkSync(p); // Delete original PNG
      console.log(`Done and deleted original ${file}`);
    }
  }
}

convertAll().catch(console.error);
