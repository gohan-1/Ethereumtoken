let  TokenSale = artifacts.require("TokenSale")
let  MyToken = artifacts.require("MyToken")
require('chai')
    .use(require('chai-as-promised'))
    .should()


contract('TokenSale',(accounts)=>{
    let tokenSale ;
    let myToken;
    var admin = accounts[0];
    var buyer = accounts[1];
    var tokenPrice = 1000000000000000; // in wei
    let numberOfTokens
    var tokensAvailable = 750000;
    

    before(async()=>{
        myToken = await MyToken.deployed();

        tokenSale= await TokenSale.deployed();
      
        // postCount = await socialNetwork.postCount();
         
         
    })
    describe("deployment",async ()=>{
        // it(" total token",async()=>{

        //     address = await myToken.address
        //     assert.notEqual(address,0x0)
        //     assert.notEqual(address,null)
        //     assert.notEqual(address,undefined)
        // })
        it("cheking address ",async ()=>{
        
            const value = await tokenSale.address;
          

            assert.notEqual(value,"0X0")

        })
        it("BuyToken ",async ()=>{
            numberOfTokens = 10;

            const transfer = await myToken.transfer(tokenSale.address,tokensAvailable,{from:admin});
            console.log(transfer)
           
            const token = await tokenSale.buyToken(numberOfTokens,{ from: buyer, value: numberOfTokens * tokenPrice });
            
            // console.log(token)
            assert.equal(token.logs.length,1,"total length is 1")
            assert.equal(token.logs[0].args._buyer, buyer, 'logs the account that purchased the tokens');
            assert.equal(token.logs[0].args._amount, numberOfTokens, 'logs the number of tokens purchased');

            const tokenSold= await tokenSale.tokenSold()

            assert.equal(tokenSold,numberOfTokens)

        })
        it("destroy ",async ()=>{
        
            const destroy = await tokenSale.endSale({from:admin});
            const changed = await myToken.balanceOf(admin);
            


            assert.equal(changed.toNumber(),999990)


          

            

        })
        
    })
    
})