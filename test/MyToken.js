let  MyToken = artifacts.require("MyToken")
require('chai')
    .use(require('chai-as-promised'))
    .should()


contract('MyToken',(accounts)=>{
    let myToken ;
    let address
    

    before(async()=>{

        myToken = await MyToken.deployed();
      
        // postCount = await socialNetwork.postCount();
         
         
    })
    describe("deployment",async ()=>{
        // it(" total token",async()=>{

        //     address = await myToken.address
        //     assert.notEqual(address,0x0)
        //     assert.notEqual(address,null)
        //     assert.notEqual(address,undefined)
        // })
        it("vlaue ",async ()=>{
        
            const value = await myToken.totalsupply();

            assert.equal(value.toNumber(),1000000)

        })
        it("intial amount  ",async ()=>{
        
            const maxToken = await myToken.balanceOf(accounts[0]);

            assert.equal(maxToken.toNumber(),1000000)

        })
        it("intial name and symbol  ",async ()=>{
        
            const name = await myToken.name();
            const  symbol= await myToken.symbol()

            assert.equal(name,"MyToken")

            assert.equal(symbol,"blaha")

        })
        // it("trransfer ",async ()=>{
        
            // const transfer = await myToken.transfer.call(accounts[1],250000,{from:accounts[0]});
            // console.log(transfer)
           

        //     assert.equal(transfer,true)

        //     // assert.equal(symbol,"blaha")

        // })
        it("approve ",async ()=>{
        
            const approve = await myToken.approve.call(accounts[1],25000,{from:accounts[0]});
           
           

            assert.equal(approve,true)

            // assert.equal(symbol,"blaha")

        })
        it("transferFrom ",async ()=>{
        
            const atransferFrom = await myToken.transferFrom.call(accounts[0],accounts[1],2500,{from:accounts[2]});
           
           

            assert.equal(atransferFrom,true)

            // assert.equal(symbol,"blaha")

        })


    })
})