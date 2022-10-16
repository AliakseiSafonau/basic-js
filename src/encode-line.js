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
  let arr = str.split('');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    b = arr[i]
    let counter = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++; i++
      } else {break}
    }
    if (counter > 1) {
      result += counter;
    }
    result += b;
  }
  return result
}

module.exports = {
  encodeLine
};
