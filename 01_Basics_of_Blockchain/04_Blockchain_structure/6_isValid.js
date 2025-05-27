const Block = require('./Block');

class Blockchain {
    constructor() {
        this.chain = [
            new Block("Genesis Block", "0")
        ];
    }

    addBlock(block) {
        const previousBlock = this.chain[this.chain.length - 1];
        const previousHash = previousBlock.toHash();

        block.addPreviousHash(previousHash);

        this.chain.push(block);
    }

    isValid(){
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(currentBlock.previousHash !== previousBlock.toHash()){
                return false;
            }
        }
        return true;
    }
}
