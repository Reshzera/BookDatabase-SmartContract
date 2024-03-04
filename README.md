# BookDatabase Solidity Project

## Project Overview

BookDatabase is a smart contract written in Solidity for use on the Ethereum blockchain. It allows the storage, modification, and deletion of book records in a decentralized manner. The contract is immutable once deployed, with an owner-centric permission system for modifying book records.

## Features

- Add new book records with title and year.
- Edit existing book records.
- Remove book records.
- Count the total number of books in the database.
- Restrict access to book modification to the contract owner.

## Installation

To set up the BookDatabase project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies with `yarn install`.
3. Set up a `.env` file with your custom network URLs and mnemonics.

## Usage

The project can be interacted with using scripts provided in the `package.json` file:

- `yarn compile`: Compiles the smart contract.
- `yarn test`: Runs tests using Hardhat's coverage plugin.
- `yarn start`: Starts a local Hardhat node.
- `yarn deploy:sepolia`: Deploys the contract to the Sepolia testnet.
- `yarn deploy:dev`: Deploys the contract to a local network.

## Smart Contract Methods

- `addBook(Book memory book)`: Adds a new book to the database.
- `editBook(uint32 id, Book memory book)`: Edits an existing book.
- `removeBook(uint32 id)`: Removes a book from the database.
- `count()`: Returns the number of books in the database.

## Requirements

- Node.js
- Yarn
- An Ethereum wallet with a mnemonic for deploying the contract

## Configuration

The `hardhat.config.ts` file contains network configuration for local and Sepolia networks. Make sure to provide the correct environment variables for `SEPOLIA_URL`, `SEPOLIA_MNEMONIC`, and `ETHERSCAN_API_KEY`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, features, or improvements.

## License

This project is open-sourced software licensed under the MIT license.
