import { ethers } from "hardhat";

async function main() {
  const bookDatabase = await ethers.deployContract("BookDatabase");

  await bookDatabase.waitForDeployment();

  const contractAddress = await bookDatabase.getAddress();

  console.log("BookDatabase deployed to:", contractAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
