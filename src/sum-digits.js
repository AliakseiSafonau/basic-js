const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = n;
  while (result > 9) {
    result = 0;
    let x = String(n).split('');
    for (let i = 0; i < x.length; i++) {
      result = result + Number(x[i])
    }
    n = result;
  }
  return result
}

module.exports = {
  getSumOfDigits
};
