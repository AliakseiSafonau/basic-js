const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (direction) {
    this.direction = direction
    this.obj = {
        'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10,
        'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20,
        'v': 21, 'w': 22, 'x': 23,'y': 24, 'z': 25
    }
    this.revers = {
        0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j', 10: 'k',
        11: 'l', 12: 'm', 13: 'n', 14: 'o', 15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't', 20: 'u',
        21: 'v', 22: 'w', 23: 'x', 24: 'y', 25: 'z'
    }
}
  encrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }
    let counter = 0;
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        if(string[i] === ' ') {
            arr.push(i);
        }
    }

    let str = string.split(' ').join('').toLowerCase();
    let k = '';
    while (k.length !== str.length) {
        k+=key;
        if (k.length > str.length) {
            k = k.slice(0, str.length)
        }
    }
    k = k.toLowerCase();
    let intermediateResult = '';
    for (let j = 0; j < str.length; j++) {
        let x = this.obj[k[j]] + this.obj[str[j]];
        if (x > 25) {x -= 26; }
        if (!x && x !== 0) {
            intermediateResult += str[j]
        } else {
            intermediateResult += this.revers[x]
        }
    }
    intermediateResult = intermediateResult.split('');
    for (let k = 0; k < arr.length; k++) {
        intermediateResult.splice([arr[k]],0,' ');
    }
    intermediateResult = intermediateResult.join('');
    let result = '';
    if (this.direction === false) {
        for (let l = intermediateResult.length - 1; l >= 0; l--) {
            result += intermediateResult[l];
        }
    } else result = intermediateResult;
    return result.toUpperCase();
  }
  decrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }
    let counter = 0;
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        if(string[i] === ' ') {
            arr.push(i);
        }
    }

    let str = string.split(' ').join('').toLowerCase();
    let k = '';
    while (k.length !== str.length) {
        k+=key;
        if (k.length > str.length) {
            k = k.slice(0, str.length)
        }
    }
    k = k.toLowerCase();
    let intermediateResult = '';
    for (let j = 0; j < str.length; j++) {
        let x = this.obj[str[j]] - this.obj[k[j]];
        if (x < 0) {x += 26;}
        if (!x && x!== 0) {
            intermediateResult += str[j]
        } else {
            intermediateResult += this.revers[x]
        }
    }
    intermediateResult = intermediateResult.split('');
    for (let k = 0; k < arr.length; k++) {
        intermediateResult.splice([arr[k]],0,' ');
    }
    intermediateResult = intermediateResult.join('');
    let result = '';
    if (this.direction === false) {
        for (let l = intermediateResult.length - 1; l >= 0; l--) {
            result += intermediateResult[l];
        }
    } else result = intermediateResult;
    return result.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
