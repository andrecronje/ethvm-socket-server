const ProviderEngine = require('web3-provider-engine')
const CacheSubprovider = require('web3-provider-engine/subproviders/cache.js')
const FixtureSubprovider = require('web3-provider-engine/subproviders/fixture.js')
const FilterSubprovider = require('web3-provider-engine/subproviders/filters.js')
const VmSubprovider = require('web3-provider-engine/subproviders/vm.js')
const HookedWalletSubprovider = require('web3-provider-engine/subproviders/hooked-wallet.js')
const NonceSubprovider = require('web3-provider-engine/subproviders/nonce-tracker.js')
const RpcSubprovider = require('web3-provider-engine/subproviders/rpc.js')
const createPayload = require("web3-provider-engine/util/create-payload.js")
const ZeroClientProvider = require("./Zeroclient.js")
var abi = require('ethereumjs-abi')
var utils = require('../libs/utils.js')

var tokenAbi = [{ "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "inputs": [], "type": "constructor" }]
var BN = require('bn.js')
// var ethereum_address = require('ethereum-address');



var VmEngine = ZeroClientProvider({
  // supports http and websockets
  // but defaults to infura's mainnet rest api
  //rpcUrl: 'https://mainnet.infura.io',
  rpcUrl: 'https://node.crypto.network',
  //rpcUrl: 'http://35.227.70.36:8545',
  // rpcUrl: 'http://35.225.202.139:9545',  // all synced
  // rpcUrl: 'wss://mainnet.infura.io/ws',
  // rpcUrl: 'ws://localhost:8545/ws',
  //rpcUrl: 'https://api.myetherwallet.com/eth',
})
// VmEngine.addProvider(new CacheSubprovider())
// VmEngine.addProvider(new RpcSubprovider({
//     rpcUrl: 'https://testrpc.metamask.io/',
//   }))

VmEngine.getBalance = function (args: any, a: any) {
  console.log("getbalance====== ==================")
  var payload = createPayload({ jsonrpc: '2.0', method: 'eth_getBalance', params: [args, "latest"], id: 1 })
  console.log(JSON.stringify(payload))
  VmEngine.sendAsync(payload, a);
}


VmEngine.getAccount = function (args: any, a: any) {
   VmEngine.sendAsync(createPayload({ jsonrpc: '2.0', method: 'eth_getKeyValue', params: ['0x2a65aca4d5fc5b5c859090a6c34d164135398226'], id: 1 }), function (err: any, response: any) {
    console.log("response", response)
  })
}

VmEngine.getAllTokens = function(args:any,a:any){
  var argss = ["address", "bool", "bool", "bool", "uint256"]
  console.log("Get Token Balance for : ",args)
  var vals = [args, "true", "true", "true", 0]
  var encoded = utils.encodeCall("getAllBalance", argss, vals)
  var pl = createPayload({ jsonrpc: '2.0', method: 'eth_call', params: [{ to: "0xbe1ecf8e340f13071761e0eef054d9a511e1cb56", data: encoded }, "pending"], id: 1 })
  VmEngine.sendAsync(pl, a);

  // function (err: any, response: any) {
  //   // console.log("eth_call", response)
  //    var tokens = utils.decode(response.result)
  //    console.log(tokens.length)
  //    // tokens.forEach(element => {
  //    //   console.log(element);
  //    // });
  //  });
}











export default VmEngine
