require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe student razor misery unlock gentle light army genre'; 
let testAccounts = [
"0xe1f2fa8645935f6ad67c8ee4e741c7751e268176dd3fa3f9dd76b58994e411f9",
"0x73f935a80daf99ad6ccefec5dde67405c472a6d679c94e32bfa112cd949f8509",
"0xaedadf4ea69a5a3eb40b7a30f8a50c546a1c2f0b1320b7d4b64cd3862d51c417",
"0xfa0129c767d8f18ebe61ae6c4cdb89c95908feacc722d76ed2b071c5b76de407",
"0x58ac3e8eede8b013b6cd5b642ae4ba456c4b9800b296102a8d8c3dcefa12b7cb",
"0xf4f4daf9ac1ab5548217b6c1f72b96b89537dc44fdd6cc0c7f43bddf7be2912f",
"0x9220506175b5064b7fd22d6410a3642db9a39916198e5668d0bf91aa50279a31",
"0x29d78b6b386d876415a8ddcc53da3b1ac4fe4cdae2c2f2d2eeb6c915ba7a821d",
"0xfed4da7d3dd7992c646eba4d80ead7f833b9ef30c9d7402a73a088f935fa1798",
"0x75ffad12427e43913fb50e058faa1bdc79c928d24120b42c0c079393e1c0a6af"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
