import { readFile, writeFile, readdir } from 'fs/promises';
import convert from 'heic-convert';
import { join, parse } from 'path';

const srcDir = '.';
const outDir = './public';

async function main() {
  const files = await readdir(srcDir);
  const heicFiles = files.filter(f => /\.heic$/i.test(f));
  
  // Exclude Jorge Feitosa portrait (already have jpg version)
  const toConvert = heicFiles.filter(f => !f.toLowerCase().includes('jorge feitosa'));
  
  console.log(`Found ${toConvert.length} HEIC files to convert`);
  
  for (const file of toConvert) {
    const { name } = parse(file);
    const outPath = join(outDir, `${name}.jpg`);
    
    try {
      console.log(`Converting: ${file}`);
      const inputBuffer = await readFile(join(srcDir, file));
      const outputBuffer = await convert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.85
      });
      await writeFile(outPath, Buffer.from(outputBuffer));
      console.log(`  -> OK: ${outPath}`);
    } catch (err) {
      console.error(`  -> FAILED: ${file} - ${err.message}`);
    }
  }
  
  console.log('\nDone!');
}

main();
