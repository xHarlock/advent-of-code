require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const SESSION_KEY = process.env.SESSION_KEY;

if (!SESSION_KEY) {
    console.error("Error: SESSION_KEY is missing. Please add it to your .env file.");
    process.exit(1);
}

async function fetchInput(day) {
    if (!day || isNaN(day) || day < 1 || day > 25) {
        console.error("Error: Please provide a valid day (1-25).");
        process.exit(1);
    }

    const url = `https://adventofcode.com/2024/day/${day}/input`;

    try {
        const response = await axios.get(url, {
            headers: {
                Cookie: `session=${SESSION_KEY}`,
            },
        });

        const input = response.data;
        const outputPath = path.join(__dirname, `../src/day${String(day).padStart(2, '0')}/input.txt`);

        fs.mkdirSync(path.dirname(outputPath), {recursive: true});

        fs.writeFileSync(outputPath, input.trim());
        console.log(`Input for Day ${day} saved to ${outputPath}`);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error("Error: Input not available. Make sure the day is unlocked.");
        } else {
            console.error("Error: Failed to fetch input.", error.message);
        }
    }
}

// Get the day from the command line arguments
const day = process.argv[2];
fetchInput(day);