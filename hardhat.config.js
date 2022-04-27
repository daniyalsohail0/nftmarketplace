require("@nomiclabs/hardhat-waffle");

const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString()

const projectId = "3dd1230606554295b9f2536275980077"

module.exports = {
  networks: {
    hardhat: {
      chainID: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
