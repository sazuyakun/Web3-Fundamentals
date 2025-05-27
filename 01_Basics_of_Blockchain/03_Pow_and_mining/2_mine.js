const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction)
}

function mine() {
    const block = {
        id: blocks.length
    };

    // add mempool to block (transactions)
    block.transactions = mempool.slice(0, MAX_TRANSACTIONS)

    // remove transactions from mempool
    mempool.splice(0, MAX_TRANSACTIONS);

    // Add a nonce
    block.nonce = 0;

    var hash;

    while (true) {
        // Block string should reflect current nonce
        const blockString = JSON.stringify(block);
        hash = SHA256(blockString);
        const intHash = BigInt(`0x${hash}`);

        if (intHash < TARGET_DIFFICULTY) break;

        block.nonce++;
    }
    block.hash = hash.toString();  // Store as hex string

    blocks.push(block);
}

addTransaction({ from: 'Alice', to: 'Bob', amount: 10 });
addTransaction({ from: 'Bob', to: 'Alice', amount: 5 });

// Show how a small change in the transaction affects the hash and nonce count!

// addTransaction({ from: 'Alic', to: 'Charlie', amount: 2 });
addTransaction({ from: 'Alic', to: 'Charlie', amount: 2 });
mine();
console.log(blocks)
