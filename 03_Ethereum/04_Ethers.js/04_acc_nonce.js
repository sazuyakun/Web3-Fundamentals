const { Wallet, utils, providers } = require('ethers');
const { ganacheProvider, PRIVATE_KEY } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

// =====================================v : mark that we have connected the wallet to the provider
const wallet = new Wallet(PRIVATE_KEY, provider);

async function sendEther({ value, to }) {
    // A single function handles both signing and the nonce
    return wallet.sendTransaction({value, to});
}

module.exports = sendEther;
