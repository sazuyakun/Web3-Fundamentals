// const secp = require("ethereum-cryptography/secp256k1");

// async function recoverKey(message, signature, recoveryBit) {
//   const hash = hashMessage(message);
//   const key = secp.recoverPublicKey(hash, signature, recoveryBit);
//   return key;
// }

// module.exports = recoverKey;



const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./1_hash_the_msg");

PRIVATE_KEY = "0x4c0883a69102937d6231471b5ecb0f8e4e2a1c6f7f3b9c5d8e2f7c8e2f7c8e2";

async function signMessage(msg) {
    const hash = hashMessage(msg);
    const recovery = await secp.sign(hash, PRIVATE_KEY, {
        recovered: true,
    });
    return recovery;
}

async function recoverKey(message, signature, recoveryBit) {
    const hash = hashMessage(message);
    const key = secp.recoverPublicKey(hash, signature, recoveryBit);
    return key;
}
async function main() {
    const message = "Hello, world!";
    const signature = await signMessage(message);
    const recoveryBit = signature.recovery;
    const publicKey = await recoverKey(message, signature, recoveryBit);
    console.log("Public Key:", publicKey.toString("hex"));
}
main()
