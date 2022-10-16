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
  let counter = 0;
  let arrC = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === -1) {
      arrC.push(j)
    }
  }
  for (let i = 1; i < arr.length; i++) {
    let x = arr[i-1];
    if (arr[i] < arr[i-1]) {
      arr[i-1] = arr[i];
      arr[i] = x;
      counter++
    }
    if (counter > 0 && i === arr.length - 1) {
      i = 0;
      counter = 0;
    }
  }
  for (let c = arrC.length - 1; c >= 0 ; c--) {
    if (arr[arrC[c]] !== -1) {
      arr.splice(0, 1)
      arr.splice(arrC[c], 0, -1)
    }
  }
  return arr
}

module.exports = {
  sortByHeight
};
