// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BookDatabase {
    struct Book {
        string title;
        uint16 year;
    }
    address private immutable owner;
    uint32 private nextBookId = 0;
    mapping(uint32 => Book) public books;

    constructor() {
        owner = msg.sender;
    }

    function addBook(Book memory book) public restricted {
        books[nextBookId] = book;
        nextBookId++;
    }

    function compareStr(string memory a, string memory b)
        private
        pure
        returns (bool)
    {
        return keccak256(bytes(a)) == keccak256(bytes(b));
    }

    function editBook(uint32 id, Book memory book) public restricted {
        Book memory oldBook = books[id];
        if (
            !compareStr(book.title, oldBook.title) &&
            !compareStr(book.title, "")
        ) books[id].title = book.title;

        if (oldBook.year != book.year && book.year > 0)
            books[id].year = book.year;
    }

    function removeBook(uint32 id) public restricted {
        delete books[id];
    }

    modifier restricted() {
        require(owner == msg.sender, "You don't have permission.");
        _;
    }
}
