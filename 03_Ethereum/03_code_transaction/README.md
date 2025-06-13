# Send a Signed JSON-RPC Request on Göerli using Alchemy SDK

This project demonstrates how to send a signed transaction to the Ethereum Göerli testnet using the Alchemy SDK. You'll learn how to create, sign, and broadcast a transaction programmatically.

## Prerequisites

- Node.js installed on your computer
- An Alchemy account with API key
- A testnet wallet with some Göerli ETH

## Setup

### 1. Project Initialization

Create a new project directory and initialize it:

```bash
cd Desktop
mkdir sign-tx && cd sign-tx
npm init -y
```

### 2. Install Dependencies

Install the required packages:

```bash
npm install alchemy-sdk dotenv
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
touch .env
```

Add the following environment variables to your `.env` file:

```env
TEST_PRIVATE_KEY=YOUR_TESTNET_ACCOUNT_PRIVATE_KEY
TEST_API_KEY=YOUR_ALCHEMY_API_KEY
```

⚠️ **Security Note**: Never commit your private key to version control. Keep your `.env` file in `.gitignore`.

### 4. Get Test ETH

To send transactions, you'll need some test ETH in your wallet. Get fake Göerli ETH from:
- [Göerli Faucet](https://goerlifaucet.com/)

## Implementation

Create an `index.js` file:

```bash
touch index.js
```

Add the following code to `index.js`:

```javascript
const { Alchemy, Network, Wallet, Utils } = require('alchemy-sdk');
require('dotenv').config();

const { TEST_API_KEY, TEST_PRIVATE_KEY } = process.env;

const settings = {
  apiKey: TEST_API_KEY,
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(settings);

let wallet = new Wallet(TEST_PRIVATE_KEY);

async function main() {
  const nonce = await alchemy.core.getTransactionCount(
    wallet.address,
    'latest'
  );

  let transaction = {
    to: '0x742d35Cc6634C0532925a3b8D4aF04c1c3eF88E3', // Replace with recipient address
    value: Utils.parseEther('0.001'), // 0.001 ETH being sent
    gasLimit: '21000',
    maxPriorityFeePerGas: Utils.parseUnits('5', 'gwei'),
    maxFeePerGas: Utils.parseUnits('20', 'gwei'),
    nonce: nonce,
    type: 2, // EIP-1559 transaction type
    chainId: 5, // Göerli chain ID
  };

  let rawTransaction = await wallet.signTransaction(transaction);
  console.log('Raw tx: ', rawTransaction);

  let tx = await alchemy.core.sendTransaction(rawTransaction);
  console.log(`Transaction sent! View on Etherscan: https://goerli.etherscan.io/tx/${tx.hash}`);
}

main().catch(console.error);
```

## Configuration Options

### Transaction Parameters

- `to`: Recipient Ethereum address
- `value`: Amount of ETH to send (in wei)
- `gasLimit`: Maximum gas units the transaction can consume
- `maxPriorityFeePerGas`: Tip to miners (EIP-1559)
- `maxFeePerGas`: Maximum fee per gas unit (EIP-1559)
- `nonce`: Transaction number for the sender
- `type`: Transaction type (2 for EIP-1559)
- `chainId`: Network identifier (5 for Göerli)

### Gas Fee Estimation

You can get current gas prices dynamically:

```javascript
const feeData = await alchemy.core.getFeeData();
console.log('Current gas prices:', feeData);
```

## Running the Script

Execute the transaction script:

```bash
node index.js
```

If successful, you'll see:
1. The raw signed transaction
2. A link to view your transaction on Göerli Etherscan

## Understanding the Process

1. **Nonce Retrieval**: Gets the next transaction number for your address
2. **Transaction Creation**: Builds a transaction object with all necessary parameters
3. **Signing**: Signs the transaction with your private key
4. **Broadcasting**: Sends the signed transaction to the network

## Troubleshooting

### Common Issues

- **Insufficient funds**: Ensure you have enough Göerli ETH
- **Invalid private key**: Check your private key format (remove '0x' prefix if present)
- **Network issues**: Verify your Alchemy API key and network settings
- **Gas estimation**: Adjust gas fees if transaction fails

### Error Messages

- `insufficient funds for gas * price + value`: Need more ETH
- `nonce too low`: Transaction nonce already used
- `gas limit exceeded`: Increase gas limit

## Security Best Practices

1. Never share your private key
2. Use environment variables for sensitive data
3. Test on testnets before mainnet
4. Verify recipient addresses carefully
5. Double-check transaction amounts

## Next Steps

- Explore contract interactions
- Implement transaction status monitoring
- Add error handling and retry logic
- Learn about different transaction types

## Resources

- [Alchemy SDK Documentation](https://docs.alchemy.com/reference/alchemy-sdk-quickstart)
- [Ethereum JSON-RPC API](https://ethereum.org/en/developers/docs/apis/json-rpc/)
- [EIP-1559 Transaction Types](https://eips.ethereum.org/EIPS/eip-1559)
- [Göerli Testnet Explorer](https://goerli.etherscan.io/)

---

🎉 **Congratulations!** You've successfully sent a signed transaction to the Ethereum testnet programmatically!
