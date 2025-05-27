const SHA256 = require('crypto-js/sha256')

class Block {
  constructor(data) {
    this.data = data;
  }

  addPreviousHash(previousHash){
    this.previousHash = previousHash;
  }

  toHash() {
    return SHA256(this.data + this.previousHash).toString();
  }
}


// const block = new Block("dan");
// const hash = block.toHash();
// console.log(hash);

module.exports = Block;
