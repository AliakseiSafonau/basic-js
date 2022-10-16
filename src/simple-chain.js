const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value) {value = String(value); this.chain.push(`( ${value} )`)} else if (!value) { if (value === undefined){this.chain.push(`( )`)}else {this.chain.push(`( ${String(value)} )`)}}
    return this
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && this.chain[position - 1]) {this.chain.splice(position - 1, 1)} else {this.chain = [];throw new Error ("You can't remove incorrect link!")}
    return this
  },
  reverseChain() {
    let mediate = [];
    for (let i = this.chain.length - 1; i >= 0; i--) {
      mediate.push(this.chain[i]);
    }
    this.chain = mediate;
    return this
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result
  }
};

module.exports = {
  chainMaker
};
