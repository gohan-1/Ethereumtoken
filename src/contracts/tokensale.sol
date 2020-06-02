pragma solidity >=0.4.21 <0.7.0;

import './mytoken.sol';

contract TokenSale{
    address payable admin;
    MyToken public mytokencontract; 
    uint public tokenPrice;
    uint256 public tokenSold;

    event sellToken(address _buyer,uint _amount);

    constructor(MyToken _mytokencontract,uint _tokenPrice) public{
        admin = msg.sender;

        mytokencontract = _mytokencontract;
        tokenPrice=_tokenPrice;

    }
     function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    function  buyToken(uint _numberOfTokens) public payable {


        require(msg.value == mul(_numberOfTokens,tokenPrice),'Invalid price');

        



        require(mytokencontract.balanceOf(address(this)) >= _numberOfTokens,'Not enough tokens available');

        require(mytokencontract.transfer(msg.sender,_numberOfTokens),'Transfer failed');

        tokenSold +=_numberOfTokens;


        emit sellToken(msg.sender,_numberOfTokens);

        

    }

    function endSale() public {
        require(msg.sender==admin);
        require(mytokencontract.transfer(admin,mytokencontract.balanceOf(address(this))));
        selfdestruct(msg.sender);
        //  mytokencontract.transfer(admin,address(this).balance);
            //   admin.transfer(address(this).balance);
    }

}