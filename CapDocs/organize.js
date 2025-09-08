const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const targetDir = process.argv[2];
if (!targetDir) {
    console.error("❌ Please provide a target directory. Example: node organize.js docs");
    process.exit(1);
}

const docsPath = path.join(__dirname, targetDir);

function organizeDirectory(directoryPath) {
    console.log(`Processing directory: ${directoryPath}`);
    const orderFilePath = path.join(directoryPath, '_order.yaml');

    if (!fs.existsSync(orderFilePath)) {
        console.log(`  -> No _order.yaml found, skipping ordering.`);
        return;
    }

    try {
        const orderFile = fs.readFileSync(orderFilePath, 'utf8');
        const orderedItems = yaml.load(orderFile) || [];

        orderedItems.forEach((item, index) => {
            const paddedIndex = String(index + 1).padStart(2, '0'); // 01, 02, ...
            const oldPathMd = path.join(directoryPath, `${item}.md`);
            const oldPathDir = path.join(directoryPath, item);
            const newName = `${paddedIndex}-${item}`;
            const newPath = path.join(directoryPath, newName);

            if (fs.existsSync(oldPathDir) && fs.statSync(oldPathDir).isDirectory()) {
                console.log(`  -> Renaming directory: ${item} -> ${newName}`);
                fs.renameSync(oldPathDir, newPath);
                organizeDirectory(newPath); // Recurse into the newly named directory
            } else if (fs.existsSync(oldPathMd)) {
                console.log(`  -> Renaming file: ${item}.md -> ${newName}.md`);
                fs.renameSync(oldPathMd, `${newPath}.md`);
            } else {
                console.warn(`  -> WARNING: Could not find file or directory for item: ${item}`);
            }
        });

        console.log(`  -> Deleting ${orderFilePath}`);
        fs.unlinkSync(orderFilePath);

    } catch (e) {
        console.error(`  -> ERROR processing ${orderFilePath}:`, e);
    }
}

console.log(`Starting file organization process for "${targetDir}"...`);
organizeDirectory(docsPath);
console.log(`\n✅ File organization complete for "${targetDir}".`);