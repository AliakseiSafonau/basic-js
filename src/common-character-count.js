const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
    if (s1.length >= s2.length) {x = s1; u = s2} else {x = s2; u = s1}
    for (let i = 0; i < u.length; i++) {
        let y = x.indexOf(u[i]);
        if (y>=0) {
            let z = '';
            result++;
            for (let j = 0; j < x.length; j++) {
                if (j !== y) {
                    z = z + x[j];
                }
            }
            x = z;
        }
    }
    return result
}

module.exports = {
  getCommonCharacterCount
};
