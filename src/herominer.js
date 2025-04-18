export const heroMinerCa="0x2f59e64454a872686474dCcF20BD5e46929ce66A";
export const heroMinerAbi=[{
    inputs: [{
        internalType: "address",
        name: "_dungeonHeroAddress",
        type: "address"
    }],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }],
    name: "OwnableInvalidOwner",
    type: "error"
}, {
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "OwnableUnauthorizedAccount",
    type: "error"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_number",
        type: "uint256"
    }],
    name: "batchMintDungeonHero",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "dungeonHero",
    outputs: [{
        internalType: "contract DungeonHero",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "maxBatchMint",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "mintDungeonHero",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [],
    name: "mintFee",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_maxBatchMint",
        type: "uint256"
    }],
    name: "setMaxBatchMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "_newFee",
        type: "uint256"
    }],
    name: "setMintFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
    }],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}];