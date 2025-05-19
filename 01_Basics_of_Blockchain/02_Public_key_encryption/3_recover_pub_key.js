const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const hash = hashMessage(message);
    const key = secp.recoverPublicKey(hash, signature, recoveryBit);
    return key;
}

module.exports = recoverKey;
