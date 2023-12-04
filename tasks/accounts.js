require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
const constant = require('../constant')

// import { defaultCoin, defaultCoins } from '../constant';

let task = require("hardhat/config").task;

module.exports = {
    accounts: task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
        const accounts = await hre.ethers.getSigners();
      
        for (const account of accounts) {
          console.log(account.address);
        }
      }),
    balance: task("balance", "Prints an account's balance")
      .addParam("account", "The account's address")
      .setAction(async (taskArgs, hre) => {
        const network = hre.network.name;
        const coin = constant.nativeCoins[network] || constant.defaultNativeCoin;
        const balance = await hre.ethers.provider.getBalance(taskArgs.account);
        console.log("Native Coin Balance on", network, ":", hre.ethers.formatEther(balance), coin);
    })
}