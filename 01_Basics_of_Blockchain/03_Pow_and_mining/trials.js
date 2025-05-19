const { sha256 } = require('ethereum-cryptography/sha256');
const { getRandomBytes } = require('ethereum-cryptography/random');

// create a program to check the average number of tries to find a has of random number to have a one leading zero


async function generateRandomNumber() {
  const randomNumber = await getRandomBytes(128);
  return randomNumber;
}

function hashRandomNumber(randomNumber) {
  const hash = sha256(randomNumber);
  return hash;
}

async function findHashWithLeadingZero() {
  let tries = 0;
  while (true) {
      tries++;
      const randomNumber = await generateRandomNumber();
      const hash = hashRandomNumber(randomNumber);
      if (hash[0] == '0') {
          return tries;
      }
  }
}

async function main() {
  const tries = await findHashWithLeadingZero();
  console.log(`Found hash with leading zero after ${tries} tries.`);
}
main();
