const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction){
  mempool.push(transaction);
}

function mineBlock(){
  return;
}

addTransaction({from: 'Alice', to: 'Bob', amount: 10});
console.log(mempool)
