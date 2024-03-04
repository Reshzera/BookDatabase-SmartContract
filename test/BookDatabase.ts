import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("BookDatabase", function () {
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const BookDatabaseContract = await ethers.getContractFactory(
      "BookDatabase"
    );
    const bookDatabase = await BookDatabaseContract.deploy();

    return { bookDatabase, owner, otherAccount };
  }
  it("Should count = 0", async function () {
    const { bookDatabase } = await loadFixture(deployFixture);
    const count = await bookDatabase.count();
    expect(count).to.equal(0);
  });

  it("Should add book", async function () {
    const { bookDatabase } = await loadFixture(deployFixture);
    await bookDatabase.addBook({
      title: "The Hobbit",
      year: 1937,
    });
    const count = await bookDatabase.count();
    expect(count).to.equal(1);
  });
  it("Should not add book if not owner", async function () {
    const { bookDatabase, otherAccount } = await loadFixture(deployFixture);
    await expect(
      bookDatabase.connect(otherAccount).addBook({
        title: "The Hobbit",
        year: 1937,
      })
    ).to.be.revertedWith("You don't have permission.");
  });

  it("Should edit book name", async function () {
    const { bookDatabase } = await loadFixture(deployFixture);
    await bookDatabase.addBook({
      title: "The Hobbit",
      year: 1937,
    });
    await bookDatabase.editBook(0, {
      title: "The Hobbit (edited)",
      year: 1937,
    });

    const book = await bookDatabase.books(0);

    expect(book.title).to.equal("The Hobbit (edited)");
  });
  it("Should edit book year", async function () {
    const { bookDatabase } = await loadFixture(deployFixture);
    await bookDatabase.addBook({
      title: "The Hobbit",
      year: 1937,
    });
    await bookDatabase.editBook(0, {
      title: "The Hobbit",
      year: 2023,
    });

    const book = await bookDatabase.books(0);

    expect(book.year).to.equal(2023);
  });

  it("Should not edit book if not owner", async function () {
    const { bookDatabase, otherAccount } = await loadFixture(deployFixture);
    await bookDatabase.addBook({
      title: "The Hobbit",
      year: 1937,
    });

    await expect(
      bookDatabase.connect(otherAccount).editBook(0, {
        title: "The Hobbit (edited)",
        year: 1937,
      })
    ).to.be.revertedWith("You don't have permission.");
  });

  it("Should remove book", async function () {
    const { bookDatabase } = await loadFixture(deployFixture);
    await bookDatabase.addBook({
      title: "The Hobbit",
      year: 1937,
    });
    await bookDatabase.removeBook(0);

    const count = await bookDatabase.count();
    expect(count).to.equal(0);
  });

  it("Should not remove book invalid position", async function () {
    const { bookDatabase } = await loadFixture(deployFixture);
    await bookDatabase.addBook({
      title: "The Hobbit",
      year: 1937,
    });
    bookDatabase.removeBook(1);
    const count = await bookDatabase.count();
    expect(count).to.equal(1);
  });

  it("Should not remove book if not owner", async function () {
    const { bookDatabase, otherAccount } = await loadFixture(deployFixture);
    await bookDatabase.addBook({
      title: "The Hobbit",
      year: 1937,
    });

    await expect(
      bookDatabase.connect(otherAccount).removeBook(0)
    ).to.be.revertedWith("You don't have permission.");
  });
});
