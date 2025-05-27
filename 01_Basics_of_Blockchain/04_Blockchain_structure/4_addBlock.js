const Block = require('./2_block.js');

class Blockchain {
    constructor() {
        this.chain = [
            new Block("Genesis Block")
        ];
    }

    addBlock(block){
        this.chain.push(block)
    }
}
