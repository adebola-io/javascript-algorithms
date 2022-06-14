/**
 * ## Prompt
 * Write a function that reverses a given string.
 * ## Solution
 * - First split the string into an array of its individual characters.
 * - The native array prototype in Javascript has a function for reversing an array.
 * - The reversed array can be joined intp a single string with the use of the `join('')` function.
 * @param {string} input
 */
function reverseString(input) {
  return input.split("").reverse().join("");
}

module.exports = reverseString;
