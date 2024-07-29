require('dotenv').config();

/**@type import('hardhat/config').HardhatUserConfig */
const config = {
  defaultNetwork: "hardhat",
  networks: {    
    hardhat: {
      forking: {
        url: process.env.PROD_RPC,      
      },
      chainId: 100,
    },    
  },    
};

module.exports = config