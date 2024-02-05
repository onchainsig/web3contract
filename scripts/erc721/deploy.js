// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const owner = "0xC15f02ddbcD8ECe0E6Aee452370b15516D658D0c";

  const AngryBirds = await hre.ethers.getContractFactory("AngryBirds");
  const bird = await AngryBirds.deploy();

  await bird.waitForDeployment();
  const contractAddress = await bird.getAddress();

  const signerAddress = await bird.signer.getAddress();

  // bird.signer.address
  
  console.log(`AngryBirds NFT's owner ${signerAddress} deployed to ${contractAddress}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
