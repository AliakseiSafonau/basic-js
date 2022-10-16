const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let counter = 0;
  let result;
  if (n.length !== 17) {result = false}
  else {
    let arr = n.split('-')
    if (arr.length !== 6) {result = false}
    else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].length !== 2) {result = false; break}
        else {
          let x = /[0-9a-fA-F][0-9a-fA-F]/g.test(arr[i]);
          if (x) {counter++}else{result = false; break}
        }  
      }
      if (counter === 6) (result = true)
    }
  }
  return result
}
module.exports = {
  isMAC48Address
};
