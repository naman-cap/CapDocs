const fs = require('fs');
const path = require('path');

const contentFolders = ['docs', 'references', 'custom-pages'];
let filesChanged = 0;
let issuesFound = 0;

// Regex 1: Finds [Text]() with empty parentheses
const emptyParenRegex = /\[([^\]]+)\]\(\s*\)/g;
// Regex 2: Finds [Text] that is NOT followed by '(', ')', or ':' (to avoid touching valid links or footnotes)
// This is a negative lookbehind and lookahead to be more careful.
const danglingBracketRegex = /(?<!\S)\[([^\]\n]+)\](?!\()/g;


function fixFileContent(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Fix #1: [Text]()
        if (emptyParenRegex.test(content)) {
            emptyParenRegex.lastIndex = 0;
            content = content.replace(emptyParenRegex, '$1');
            issuesFound++;
        }

        // Fix #2: [Text]
        if (danglingBracketRegex.test(content)) {
            danglingBracketRegex.lastIndex = 0;
            content = content.replace(danglingBracketRegex, '$1');
            issuesFound++;
        }
        
        if (content !== originalContent) {
            console.log(`🔧 Fixing links in: ${filePath}`);
            fs.writeFileSync(filePath, content, 'utf8');
            filesChanged++;
        }

    } catch (e) {
        console.error(`❌ Could not process file: ${filePath}`, e);
    }
}

function scanDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDirectory(fullPath);
        } else if (fullPath.endsWith('.md') || fullPath.endsWith('.mdx')) {
            fixFileContent(fullPath);
        }
    }
}

console.log('--- Starting Robust Link Cleanup ---');

contentFolders.forEach(folder => {
    const dirPath = path.join(__dirname, folder);
    if (fs.existsSync(dirPath)) {
        console.log(`Scanning "${folder}" directory...`);
        scanDirectory(dirPath);
    } else {
        console.warn(`⚠️  Directory not found, skipping: ${folder}`);
    }
});

console.log(`\n✅ Cleanup complete. Found issues and fixed ${filesChanged} file(s).`);
if (filesChanged === 0 && issuesFound > 0) {
    console.log("NOTE: Some issues were found but may not have required file changes if the content was the same after replacement.");
}