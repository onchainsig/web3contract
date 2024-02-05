
const hre = require("hardhat");

async function main() {
    const totalSupply = 2100000000;

    const USDC = await hre.ethers.getContractFactory("USDC");
    const usdc = await USDC.deploy(totalSupply);

    await usdc.waitForDeployment();
    const contractAddress = await usdc.getAddress();

    console.log(
        `USD Coin with total supply ${totalSupply} USDC deployed to ${contractAddress}`
    );
    // we can get a contract address.
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
