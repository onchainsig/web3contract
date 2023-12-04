/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

require('./tasks/selector')
require('./tasks/accounts')
require('./tasks/erc20')
require('./tasks/nft')
require('./tasks/permit2')

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.DEFAULT_PRIVATE_KEY]
    },
    bsctestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: [process.env.DEFAULT_PRIVATE_KEY]
    },
    mumbai: {
      // url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
      url: 'https://polygon-mumbai-bor.publicnode.com',
      accounts: [process.env.DEFAULT_PRIVATE_KEY]
    },
    arbgoerli: {
        url: `https://arbitrum-goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
        accounts: [process.env.DEFAULT_PRIVATE_KEY]
    },
    opgoerli: {
      // url: `https://optimism-goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      url: 'https://optimism-goerli.publicnode.com',
      accounts: [process.env.DEFAULT_PRIVATE_KEY]
    }
  }
};
