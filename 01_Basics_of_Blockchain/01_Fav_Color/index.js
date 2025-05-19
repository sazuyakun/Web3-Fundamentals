const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    var selectedColor;
    for(let i = 0; i < COLORS.length; i++){
        if(toHex(sha256(utf8ToBytes(COLORS[i]))) === toHex(hash)){
            selectedColor = COLORS[i];
            break;
        }
    }
    return selectedColor;
}


// Example usage

const hash = sha256(utf8ToBytes('asdfghjhgfd'));


console.log(findColor(hash));

