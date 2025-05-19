const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./1_hash_the_msg");

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

function signMessage(msg) {
    const hash = hashMessage(msg);
    const recovery = secp256k1.sign(hash, PRIVATE_KEY);
    return recovery;
}

console.log(signMessage("Hello World!"));
