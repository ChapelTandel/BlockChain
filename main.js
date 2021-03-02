const {BlockChain} = require('./blockchain')
const {Transaction} = require('./Transaction')

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('0bc7e7b0cbf0f8fcadbe3ae1e78e9539bcbe7b4b798f66dd33f5767ea07dab18');
const myWalletAddress = myKey.getPublic('hex');

let justCoin = new BlockChain();

const tx1 =  new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
justCoin.addTransaction(tx1);


console.log('\n starting the miner');
justCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance on xaviers is', justCoin.getBalanceOfAddress(myWalletAddress));

console.log('\nIs the chain valid?', justCoin.isChainValid());