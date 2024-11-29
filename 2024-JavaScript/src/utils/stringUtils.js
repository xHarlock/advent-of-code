/**
 * Splits a string into an array of lines.
 * @param {string} str - The string to split.
 * @returns {string[]} - Array of lines.
 */
const splitLines = (str) => str.split(/\r?\n/);

module.exports = {splitLines};