const fs = require('fs');
const path = require('path');

/**
 * Reads a file and returns its content as a string.
 * @param {string} day - The day of the challenge (e.g. '01').
 * @returns {string} - The file content.
 */
const readInput = (day) => {
    const filePath = path.join(__dirname, `../day${day.padStart(2, '0')}/input.txt`);
    return fs.readFileSync(filePath, 'utf-8').trim();
};

module.exports = {readInput};
