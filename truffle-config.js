const HDWalletProvider = require('@truffle/hdwallet-provider');
require("dotenv").config({path: "./.env"});

const bscTest = "https://data-seed-prebsc-2-s1.binance.org:8545/";
const bscMain = "https://bsc-dataseed2.binance.org";

const AccountIndex = 0;

module.exports = {
  contracts_build_directory: './client/src/contracts',

  networks: {
    develop: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "1337",       // Any network (default: none)
    },
    development:{
      port:7545,
      host: "127.0.0.1",
      network_id: 5777 
    },
    ganache_local: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545", AccountIndex)
      },
      network_id: 5777
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, bscTest),
      network_id: 97,   // This network is yours, in the cloud. 
      production: true,    // Treats this network as if it was a public net. (default: false)
      networkCheckTimeout: 10000000,
      timeoutBlocks: 200
    },
    bscMainnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, bscMain),
      network_id: 56,   // This network is yours, in the cloud. 
      confirmations: 10,
      networkCheckTimeout: 10000000,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },

  compilers: {
    solc: {
      version: "^0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  }
};