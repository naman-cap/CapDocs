const fs = require('fs');
const path = require('path');

const contentFolders = ['docs', 'references', 'custom-pages'];
let filesChanged = 0;
let imagesConverted = 0;

// This regex finds <Image ... /> tags and captures the attributes string.
const imageComponentRegex = /<Image\s+([^>]*)\/>/g;

function getAttribute(attrs, attrName) {
    const regex = new RegExp(`${attrName}\\s*=\\s*["']([^"']+)["']`);
    const match = attrs.match(regex);
    return match ? match[1] : null;
}

function processFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        content = content.replace(imageComponentRegex, (match, attrs) => {
            const src = getAttribute(attrs, 'src');
            if (!src) {
                console.warn(`  -> Found an <Image> tag without a 'src' in ${filePath}. Skipping.`);
                return match; // Return the original tag if src is missing
            }

            let alt = getAttribute(attrs, 'alt') || getAttribute(attrs, 'title') || '';
            
            // If alt is still empty, create a fallback from the image filename
            if (!alt) {
                try {
                    const url = new URL(src);
                    const filename = path.basename(url.pathname);
                    alt = filename.split('.')[0].replace(/[-_]/g, ' '); // a-file_name.png -> a file name
                } catch (e) {
                    alt = 'Image'; // Fallback for invalid URLs
                }
            }
            
            imagesConverted++;
            // Convert to standard Markdown image syntax
            return `![${alt}](${src})`;
        });

        if (content !== originalContent) {
            console.log(`🖼️  Converted images in: ${filePath}`);
            fs.writeFileSync(filePath, content, 'utf8');
            filesChanged++;
        }
    } catch (e) {
        console.error(`❌ Could not process file: ${filePath}`, e);
    }
}

function scanDirectory(directory) {
    const items = fs.readdirSync(directory);
    for (const item of items) {
        const fullPath = path.join(directory, item);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDirectory(fullPath);
        } else if (fullPath.endsWith('.md') || fullPath.endsWith('.mdx')) {
            processFile(fullPath);
        }
    }
}

console.log('--- Starting Automated Image Component Conversion ---');

contentFolders.forEach(folder => {
    const dirPath = path.join(__dirname, folder);
    if (fs.existsSync(dirPath)) {
        console.log(`Scanning "${folder}" directory...`);
        scanDirectory(dirPath);
    }
});

console.log(`\n✅ Conversion complete. Converted ${imagesConverted} images across ${filesChanged} file(s).`);