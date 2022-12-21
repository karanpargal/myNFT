const { ethers } = require("hardhat");

async function main() {
  const NFTContract = await ethers.getContractFactory("myNFt");

  const deployedContract = await NFTContract.deploy();
  await deployedContract.deployed();

  console.log("Contract Address:", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
