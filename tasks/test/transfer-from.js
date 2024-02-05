require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

let task = require("hardhat/config").task;

module.exports = {
    transferFrom: task("transferFrom", "Erc20 transferFrom testing")
      .setAction(async (taskArgs, hre) => {
        // 1. 找一个 token 合约，用 USDC
        const usdcContractAddress = '0x90Ddc52fE6b98E07C30373C8c61037FBedDabcbB';

        // 2. 把 A 地址的 USDC 授权给 B 地址
        const addressA = '0xC15f02ddbcD8ECe0E6Aee452370b15516D658D0c';
        const addressB = '0x50A7648b04BE66fF749f94FC55Bb0d34dcBDF83B';

        const addressC = '0x9e8ad8877c190ec99CFa11365d947b604c6c4e83';

        // 3. B 地址发起 transferFrom，从 A 地址转 1 USDC 到自己的地址
        const signers = await hre.ethers.getSigners();
        if (signers.length === 0) {
            console.error("Please config your accounts for network %s", hre.network.name);
            process.exit(1);
        }

        const signer = signers[0];
        const abi = (await hre.ethers.getContractFactory("USDC")).interface;
        const contract = new hre.ethers.Contract(usdcContractAddress, abi, signer);
        const tx = await contract.transferFrom(addressA, addressB, 1000000);
        await tx.wait();
        console.log('Tx Hash:', tx.hash);
    })
}