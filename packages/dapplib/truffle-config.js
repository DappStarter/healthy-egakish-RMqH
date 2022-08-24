require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'half climb force trip maple note night umbrella hidden entire sure gaze'; 
let testAccounts = [
"0xb6a28bdef3d6092fde35e1d6dce5cba1da7adb95270f39325ae1855e52331b7e",
"0x94efbf735608f30cdd3cf43a2845a45add92eab061cd700176d653f6262ab2bb",
"0x36b776b7eba2d237a30e3173d9952ec18e445a098a9763fdd2dc412d36ee1499",
"0x4e40406fe5c3bdabe83a244d3521bd78721b804f75c3748c18b838d2758dcd5d",
"0x6effbb301d0cee9fa6c8c67afd9d76524b94dd9c12d9c05f702b4030b0cd0f1c",
"0xe2b77edcd7779af6e3b9eac84c683f8268c0d6f8525a08cfbe3683121e939fee",
"0x881dd91e559e83fe3459842b439df2b688cb57578b25d0172f5abd663d31a83a",
"0xfadc6798b121cfc0735a7f8cc883e751479ae70daafafa4c26684db95fd29571",
"0x72da40ad72c9fc9bb998bc07ea8ef24084572a4516fdc54c3b746121d644d7a1",
"0x0abad834bca5b02b40aa3e4cd6c7e0d1001e43d490903c1e22c92f4e94bd3571"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


