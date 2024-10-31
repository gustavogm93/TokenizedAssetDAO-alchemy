# AssetToken - Asset Tokenization Project

This project is a Solidity smart contract for asset tokenization, representing company shares (e.g., Apple shares) with metadata functionality, voting, and market value calculation. The project allows the issuance of tokens representing financial assets and includes governance functions for token holders.

## Features

- **Asset Tokenization**: Minting and burning of tokens to represent financial assets.
- **Company Metadata**: Includes information about the company and asset value.
- **Market Value Calculation**: Calculates total asset value based on the current price.
- **Voting**: Token holders can vote on key asset-related proposals.

## Prerequisites

1. **Node.js** and **npm**: Ensure Node.js and npm are installed.
2. **Ganache** or access to the **Sepolia** test network via an [Alchemy](https://alchemy.com/) account for testing on a blockchain network.
3. **Truffle**: Install Truffle for smart contract deployment and testing.

### Install Dependencies

Run the following command in the project root:

```bash
npm i
```

### Setup

Configure .env file:
```
MNEMONIC="your mnemonic phrase here"
ALCHEMY_API_KEY="your Alchemy API key"
```
Configure truffle-config.js

Ensure that the development network is configured for Ganache and change network for dev usage.

### Deployment
```
truffle migrate --network development # For Ganache
truffle migrate --network sepolia # For Sepolia
```
### Testing
```
truffle test --network development # For local testing
truffle test --network sepolia # For testing on Sepolia
```
