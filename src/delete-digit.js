const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newStr = `${n}`
  let max = 0;
  for (let i = 0; i < newStr.length; i++) {
    const sub = newStr.substring(0, i) + newStr.slice(i + 1);
    if (max < parseInt(sub)) {
      max = parseInt(sub);
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
