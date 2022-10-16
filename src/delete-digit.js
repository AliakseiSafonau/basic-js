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
  let x = String(n);
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    let y = '';
    for (let j = 0; j < x.length; j++) {
      if (j !== i) {
        y = y + x[j];
      }
    }
    if (Number(y) > result) {
      result = Number(y);
    }
  }
  return result;
}

module.exports = {
  deleteDigit
};
