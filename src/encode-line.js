const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [];

  for (let s of str) {
    if (arr[arr.length - 1] === s) {
      arr[arr.length - 2] = arr[arr.length - 2] + 1;
    } else {
      arr.push(1);
      arr.push(s);
    }
  }
  return arr.join('').replace(/1/g, '');
}

module.exports = {
  encodeLine
};
