
const hre = require("hardhat");

async function main() {
    const totalSupply = 420000000;

    const Gold = await hre.ethers.getContractFactory("Gold");
    const gold = await Gold.deploy(totalSupply);

    await gold.waitForDeployment();
    const contractAddress = await gold.getAddress();

    console.log(
        `Gold with total supply ${totalSupply} GLD deployed to ${contractAddress}`
    );
    // we can get a contract address.
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
