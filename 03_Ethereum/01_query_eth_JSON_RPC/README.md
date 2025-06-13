# JSON-RPC Read Requests Activity

## Activity Overview: Querying Ethereum with JSON-RPC

Welcome to the world of Ethereum blockchain querying! This activity will teach you how to interact with the Ethereum blockchain using JSON-RPC requests through Alchemy.

## What is JSON-RPC?

JSON-RPC is a way to send and receive JSON-formatted messages between a client and a server. Here's a sample JSON-RPC request to an Ethereum node:

```json
{
    "jsonrpc":"2.0",
    "method":"eth_getBalance",
    "params":["0x407d73d8a49eeb85d32cf465507dd71d507100c1", "latest"],
    "id":0
}
```

- **JSON**: JavaScript Object Notation
- **RPC**: Remote Procedure Call

## Setting Up Alchemy Account

### Step 1: Create Your Alchemy Account

1. Go to [Alchemy](https://alchemy.com) and sign up for an account
2. Once in the dashboard, select **Create App**
3. Name your app and choose your settings (recommend choosing a testnet for learning!)
4. Select **View Key**
5. Copy either the API KEY or the HTTP URL provided
6. Paste into your local development project

### What Alchemy Provides:

- High-uptime Ethereum node connections
- Analytics for your web3 dApp
- Enhanced APIs, NFT API, and the Alchemy SDK
- Access to multiple networks (mainnet, testnets)

## Quick Test: Command Line JSON-RPC

You can test JSON-RPC directly from your terminal!

### For macOS/Linux:
```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":83}' https://eth-mainnet.alchemyapi.io/v2/gZgOOh1X3cpVWXeVR9EL51zC1vpbggIF
```

### For Windows:
```bash
curl -X POST --data "{\"jsonrpc\":\"2.0\",\"method\":\"eth_blockNumber\",\"params\":[],\"id\":83}" https://eth-mainnet.alchemyapi.io/v2/gZgOOh1X3cpVWXeVR9EL51zC1vpbggIF
```

Expected response:
```json
{
    "jsonrpc": "2.0",
    "id": 83,
    "result": "0xc30ba7"
}
```

## Project Setup Instructions

### 1. Create Project Structure

```bash
mkdir alchemyu-json-activity && cd alchemyu-json-activity
npm init -y
npm install axios
touch index.js
```

### 2. Basic Implementation

Create `index.js` with the following starter code:

```javascript
const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "";

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBlockByNumber",
  params: [
    "0xb443", // block 46147
    true  // retrieve the full transaction object in transactions array
  ]
}).then((response) => {
  console.log(response.data.result);
});
```

### 3. Run Your First Query

```bash
node index
```

You should see the contents of block #46147 printed to your console!

## Exploring Different JSON-RPC Methods

Now that you have a working setup, try different Ethereum JSON-RPC methods:

### Popular Read Methods to Try:

1. **eth_getBalance** - Get account balance
   ```javascript
   method: "eth_getBalance",
   params: ["0x742EbC17370506B4DaEfb8a2A7e89Dc9b4D5b678", "latest"]
   ```

2. **eth_blockNumber** - Get latest block number
   ```javascript
   method: "eth_blockNumber",
   params: []
   ```

3. **eth_getTransactionByHash** - Get transaction details
   ```javascript
   method: "eth_getTransactionByHash",
   params: ["0x...transaction_hash..."]
   ```

4. **eth_getCode** - Get contract code
   ```javascript
   method: "eth_getCode",
   params: ["0x...contract_address...", "latest"]
   ```

5. **eth_call** - Call a contract function
   ```javascript
   method: "eth_call",
   params: [
     {
       "to": "0x...contract_address...",
       "data": "0x...function_selector..."
     },
     "latest"
   ]
   ```

## Exercise: Modify Your Script

1. Change the `method` value to a different JSON-RPC method
2. Update the `params` array according to the method specifications
3. Run your script and observe the results
4. Try multiple different methods to explore the blockchain data

## Key Learning Points

- **Read Queries**: You're making read-only queries to the Ethereum blockchain
- **No Gas Fees**: Read operations are free and don't require transactions
- **Real-time Data**: You're accessing live blockchain data
- **Multiple Networks**: You can query mainnet, testnets, or other EVM-compatible chains

## Next Steps

After mastering these read queries, you'll be ready to:
- Make write transactions to the blockchain
- Deploy smart contracts
- Build full dApps with frontend interfaces
- Explore more advanced Alchemy features

## Resources

- [Ethereum JSON-RPC API Documentation](https://ethereum.org/en/developers/docs/apis/json-rpc/)
- [Alchemy Documentation](https://docs.alchemy.com/)
- [Axios Documentation](https://axios-http.com/docs/intro)

---

**Congratulations!** You're now querying the Ethereum blockchain like a pro! 🎉
