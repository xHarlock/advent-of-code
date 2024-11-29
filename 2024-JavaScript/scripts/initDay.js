const fs = require('fs');
const path = require('path');

// Get day from command-line arguments
const day = process.argv[2];
if (!day || isNaN(day) || day < 1 || day > 25) {
    console.error("Error: Please provide a valid day (1-25).");
    process.exit(1);
}

const dayFolder = path.join(__dirname, `../src/day${String(day).padStart(2, '0')}`);
if (!fs.existsSync(dayFolder)) {
    fs.mkdirSync(dayFolder, { recursive: true });
}

// Create part1.js and part2.js files with a basic template
const template = `// Solution for Day ${day}, Part X\nimport {readInput} from "../utils";\n\nconst input = readInput("${day}")\n\nfunction solve() {\n  // TODO: Your solution here\n}\n\nconsole.log(solve());`;

fs.writeFileSync(path.join(dayFolder, 'part1.js'), template.replace('Part X', 'Part 1'));
fs.writeFileSync(path.join(dayFolder, 'part2.js'), template.replace('Part X', 'Part 2'));

console.log(`Files part1.js and part2.js created in ${dayFolder}`);