const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const index = []
  const result = []
  const sorted = arr.filter(el => el > 0).sort((a, b) => b - a);
  arr.forEach((el, i) => {
    el === - 1 && index.push(i)
  })
  for (let i = 0; i < arr.length; i++) {
    if(index.includes(i)) {
      result.push(-1);
    } else {
      result.push(sorted.pop());
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
