import React, { Component } from 'react';
// import logo from '../logo.png';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import Web3 from 'web3'
import MyToken from '../abis/MyToken.json'

import TokenSale from '../abis/TokenSale.json'  


import './App.css';

// import Forms from './form'

import Main from './main'

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.candidateArray = []
  //   this.handleDropdownChange = this.handleDropdownChange.bind(this);

 
  // }
 
  state={
    account:'',
    Deployer:'',
    buyer:''

  }

  async componentWillMount(){
    await this.loadweb3()
    await this.loadBlockchainData()
  }

  async loadweb3(){
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    
          // Request account access if needed
          await window.ethereum.enable();
      
     
  }
  // Legacy dapp browsers...
  else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      // Acccounts always exposed

  }
  // Non-dapp browsers...
  else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
  }
  async loadBlockchainData(){
    let web3= window.web3;

    let accounts= await web3.eth.getAccounts()
    console.log(accounts)
  
      let networkId= await web3.eth.net.getId() 
      console.log("network id"+networkId)
      let networkDatamyToken=MyToken.networks[networkId]
      let networkDataSale=TokenSale.networks[networkId]
      if(networkDatamyToken){
        console.log(networkId)
        let myToken=web3.eth.Contract(MyToken.abi,networkDatamyToken.address)
        console.log(networkDatamyToken.address)
        let tokenSale=web3.eth.Contract(TokenSale.abi,networkDataSale.address)
        console.log(networkDataSale.address)

        const address = await web3.eth.getCoinbase();
        this.setState({
          account:address
          })
          console.log(address)
        // let candidateCount= await elections.methods.candidatesCount().call().abi,networkData.address)
        // console.log(elections)
        // let candidateCount= await elections.methods.candidatesCount().call()
      }
    }
  
  render() {
    let color ="red"
    return (
      <div>
          <Main></Main>

          <form onSubmit={(event) => {
        // event.preventDefault()
        // const content = this.postContent.value
        // this.props.createPost(content)
      }}>
      <div style={{ display: "flex" ,maxWidth:'500px'}}  className="content mr-auto ml-auto" >
        <input
          id="postContent"
          type="text"
          // ref={(input) => { this.postContent = input }}
          className="form-control"
          placeholder="number of tokens"
          required />
 
      <button type="submit"  style={{marginLeft: "auto" ,maxWidth:'150px'}} className="btn btn-primary btn-block">Buy Tokens</button>
      
      </div>

      
       </form>
          <br/>
            <ProgressBar className="content mr-auto ml-auto" style={{ display: "flex" ,maxWidth:'500px'}} animated now={45} />
              <br/>
                <Card style={{ display: "flex" ,maxWidth:'700px'}}  className="content mr-auto ml-auto" >
                <Card.Body>Deployer Acccount</Card.Body>
                <Card.Body>{this.state.account}</Card.Body>
              </Card>
       </div> 
    
     
    );
  
}
}
export default App;
