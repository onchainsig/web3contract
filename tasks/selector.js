require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

let task = require("hardhat/config").task;

module.exports = task("selector", "Function selector")
    .addPositionalParam("signature")
    .setAction(async (taskArgs, hre) => {
        const signature = taskArgs.signature;
        const id = hre.ethers.id(signature);

        console.log("event or function signature: %s \nid: %s \nselector: %s", signature, id, id.slice(0, 10))
    });