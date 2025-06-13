const ethers = require('ethers');
const { Wallet } = ethers;

const private_key = "0xf2f48ee19680706196e2e339e5da3491186e0c4c5030670656b0e0164837257d"
const mnemonic = "plate lawn minor crouch bubble evidence palace fringe bamboo laptop dutch ice"

const wallet1 = new Wallet( private_key );

const wallet2 = Wallet.fromMnemonic( mnemonic );

module.exports = {
    wallet1,
    wallet2,
}
