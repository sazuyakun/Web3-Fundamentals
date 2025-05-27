const SHA256 = require('crypto-js/sha256')

class Block {
    toHash() {
        return SHA256("dan").toString();
    }
}

const block = new Block();
const hash = block.toHash();
console.log(hash);
