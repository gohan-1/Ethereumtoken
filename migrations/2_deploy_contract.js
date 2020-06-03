const MyToken = artifacts.require("MyToken");
const TokeSale = artifacts.require("TokenSale");

module.exports = function(deployer,accounts ) {
  deployer.deploy(MyToken,1000000).then(()=>{
       // Token price is 0.001 Ether
       var tokenPrice = 1000000000000000;
    return deployer.deploy(TokeSale,MyToken.address,tokenPrice)
  })
};
