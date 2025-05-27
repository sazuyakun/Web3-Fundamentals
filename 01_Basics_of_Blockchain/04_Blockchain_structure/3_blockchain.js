// Import the block from 2_block.js

const Block = require('./2_block.js');

class Blockchain {
    constructor() {
        this.chain = [
            new Block("Genesis Block")
        ];
    }
}

const blockchain = new Blockchain();
console.log(blockchain.chain[0].data);
