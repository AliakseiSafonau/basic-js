const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {}
  for (let i = 0; i < domains.length; i++) {
    let x = domains[i].split('.');
    let y = '';
    for (let j = x.length - 1; j >= 0; j--) {
      y = y + '.' + x[j];
      if (y in result) {
        result[y] = result[y] + 1;
      }
      else {
        result[y] = 1
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
