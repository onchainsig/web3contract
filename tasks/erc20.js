require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

let task = require("hardhat/config").task;

module.exports = {
    transfer: task("20transfer", "Transfer erc20 tokens")
    .addParam("contract", "The contract")
    .addOptionalParam("account", "The account number, default 0")
    .addPositionalParam("to")
    .addPositionalParam("amount")
    .setAction(async (taskArgs, hre) => {
        const contractAddress = taskArgs.contract;
        const to = taskArgs.to;
        const amount = taskArgs.amount;

        const signers = await hre.ethers.getSigners();
        if (signers.length === 0) {
            console.error("Please config your accounts for network %s", hre.network.name);
            process.exit(1);
        }

        let account = taskArgs.account || '0';
        account = parseInt(account);

        const signer = signers[account];
        const abi = (await hre.ethers.getContractFactory("Gold")).interface;

        const contract = new hre.ethers.Contract(contractAddress, abi, signer);
        const tx = await contract.transfer(to, amount);
        await tx.wait();

        console.log('Tx Hash:', tx.hash);
    }),
    approve: task("20approve", "Approval erc20 tokens")
        .addParam("contract", "The contract")
        .addOptionalParam("account", "The account number, default 0")
        .addPositionalParam("spender")
        .addPositionalParam("value")
        .setAction(async (taskArgs, hre) => {
            const contractAddress = taskArgs.contract;
            const spender = taskArgs.spender;
            const value = taskArgs.value;

            const signers = await hre.ethers.getSigners();
            if (signers.length === 0) {
                console.error("Please config your accounts for network %s", hre.network.name);
                process.exit(1);
            }

            let account = taskArgs.account || '0';
            account = parseInt(account);

            const signer = signers[account];
            console.log("Approve %s can transfer %s from %s on the contract %s", spender, value, signer.address, contractAddress);

            const abi = (await hre.ethers.getContractFactory("USDC")).interface;
            const contract = new hre.ethers.Contract(contractAddress, abi, signer);
            const tx = await contract.approve(spender, value);
            await tx.wait();
            console.log('Tx Hash:', tx.hash);
    }),
    allowance: task("20allowance", "Allowance erc20 tokens")
        .addParam("contract", "The contract")
        .addOptionalParam("account", "The account number, default 0")
        .addPositionalParam("owner")
        .addPositionalParam("spender")
        .setAction(async (taskArgs, hre) => {
            const contractAddress = taskArgs.contract;
            const owner = taskArgs.owner;
            const spender = taskArgs.spender;

            const signers = await hre.ethers.getSigners();
            if (signers.length === 0) {
                console.error("Please config your accounts for network %s", hre.network.name);
                process.exit(1);
            }

            let account = taskArgs.account || '0';
            account = parseInt(account);

            const signer = signers[account];
            const abi = (await hre.ethers.getContractFactory("USDC")).interface;
            const contract = new hre.ethers.Contract(contractAddress, abi, signer);
            const amount = await contract.allowance(owner, spender);
            console.log('Allowance value:', amount);
    }),
}