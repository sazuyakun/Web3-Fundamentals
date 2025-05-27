const Block = require('./2_block.js');

class Blockchain {
    constructor() {
        this.chain = [
            new Block("Genesis Block", "0")
        ];
    }

    addBlock(block) {
        // Get the last block in the current chain and get it's hash
        const previousBlock = this.chain[this.chain.length - 1];
        const previousHash = previousBlock.toHash();

        // This is the previous hash for the current block
        block.addPreviousHash(previousHash);

        this.chain.push(block);
    }
}
