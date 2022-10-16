const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes, separator, addition, additionRepeatTimes, additionSeparator;
  if (options.repeatTimes) {repeatTimes = options.repeatTimes} else repeatTimes = 1;
  if (options.separator) {separator = String(options.separator)} else separator = '+';
  if (options.addition || options.addition === false ||  options.addition === null) {addition = String(options.addition)} else addition = '';
  if (options.additionRepeatTimes) {additionRepeatTimes = options.additionRepeatTimes} else additionRepeatTimes = 0;
  if (options.additionSeparator) {additionSeparator = String(options.additionSeparator)} else additionSeparator = '|';
  str = String(str);
  let counter = 0;
  let result = '';
  for (let i = 0; i < repeatTimes; i++) {
    counter++;
    result += str;
    if (additionRepeatTimes && addition !== '') {
      for (let j = 0; j < additionRepeatTimes; j++) {
        result += addition;
        if (j + 1 !== additionRepeatTimes) {
          result += additionSeparator;
        }
      }
    } else {result += addition;}
    if (i + 1 !== repeatTimes) {
      result += separator
    }
  }
  if(counter === 0) {result += str}
  return result
}

module.exports = {
  repeater
};
