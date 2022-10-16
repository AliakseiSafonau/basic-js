const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let result;
  let obj = {
    'Dec': 'winter',
    'Jan': 'winter',
    'Feb': 'winter',
    'Mar': 'spring',
    'Apr': 'spring',
    'May': 'spring',
    'Jun': 'summer',
    'Jul': 'summer',
    'Aug': 'summer',
    'Sep': 'autumn',
    'Oct': 'autumn',
    'Nov': 'autumn',
  }
  if (date === undefined) {result = 'Unable to determine the time of year!'} 
  else if (Object.getOwnPropertyNames(date).length === 0 && date instanceof Date) {
    let x = obj[String(date).split(' ')[1]];
    if (x) {
      result = x
    } else throw new Error('Invalid date!');
  } else if (date) {
    throw new Error('Invalid date!')
  } else {
    result = 'Unable to determine the time of year!'
  }
  
  if (result) return result
}

module.exports = {
  getSeason
};
