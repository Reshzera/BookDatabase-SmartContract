# BookDatabase Smart Contract

## Overview

The BookDatabase smart contract is a blockchain-based application designed to manage a database of books on the Ethereum network. It allows for the addition, editing, and removal of book records, each identified by a unique ID. This contract is particularly useful for decentralized applications (dApps) that require a persistent and immutable record of books. Written in Solidity, this contract leverages the security and transparency of the Ethereum blockchain.

## Features

- **Immutable Ownership**: The ownership of the contract is assigned at deployment and cannot be changed, ensuring secure management.
- **Book Management**: Books can be added, edited, and removed from the database.
- **Unique Book IDs**: Each book is assigned a unique ID, facilitating easy access and management.

## How It Works

1. **Initialization**: Upon deployment, the contract owner is set to the address that deployed the contract.
2. **Adding Books**: The `addBook` function allows the owner to add books to the database. Each book has a title and a publication year.
3. **Editing Books**: The `editBook` function enables the owner to edit the details of an existing book by its ID.
4. **Removing Books**: Books can be removed from the database using the `removeBook` function.

## Interacting with the Contract

### Prerequisites

- An Ethereum wallet.
- Enough ETH to cover transaction fees.

### Functions

- **addBook(Book memory book)**: Adds a new book to the database. The `Book` struct requires a `title` (string) and `year` (uint16).
- **editBook(uint32 id, Book memory book)**: Edits an existing book's details. The function checks for changes in the title and year; if no changes are detected, or if invalid data is provided, the book remains unchanged.
- **removeBook(uint32 id)**: Removes a book from the database by its ID.

## Security Features

- **Restricted Access**: Functions that modify the database (`addBook`, `editBook`, `removeBook`) are restricted to the contract owner, preventing unauthorized alterations.
- **Input Validation**: The contract validates inputs to ensure that books are only edited with valid information.

## Testing and Deployment

It's recommended to thoroughly test the contract in a testnet environment (e.g., Rinkeby or Ropsten) before deploying it on the main Ethereum network. Testing tools like Truffle or Hardhat can facilitate deployment and interaction with the contract.

## Conclusion

The BookDatabase smart contract offers a decentralized solution for managing a book database on the Ethereum blockchain. It demonstrates the application of smart contracts in managing data with transparency, security, and immutability.
