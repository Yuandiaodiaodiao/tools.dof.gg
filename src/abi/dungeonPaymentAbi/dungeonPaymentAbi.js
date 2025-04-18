export const dungeonPaymentAbi = [{
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !0,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}, {
    inputs: [{
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "currentSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "getApproved",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "baseURI",
        type: "string"
    }, {
        internalType: "uint256",
        name: "initialMaxSupply",
        type: "uint256"
    }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "operator",
        type: "address"
    }],
    name: "isApprovedForAll",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "maxSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "player",
        type: "address"
    }],
    name: "mint",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "ownerOf",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "operator",
        type: "address"
    }, {
        internalType: "bool",
        name: "approved",
        type: "bool"
    }],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "string",
        name: "baseURI",
        type: "string"
    }],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
    }],
    name: "tokenURI",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    stateMutability: "view",
    type: "function"
}];

export const dungeonPaymentAbiCa = "0x0085B7172BE81D5cbA0dc394b728bDC03324a1D5";

