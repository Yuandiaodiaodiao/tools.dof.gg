export const abiSmelting = [{
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error"
}, {
    inputs: [{
        internalType: "uint256",
        name: "length",
        type: "uint256"
    }],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
    }],
    name: "ECDSAInvalidSignatureS",
    type: "error"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
    }, {
        indexed: !1,
        internalType: "address",
        name: "newAdmin",
        type: "address"
    }],
    name: "AdminChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "beacon",
        type: "address"
    }],
    name: "BeaconUpgraded",
    type: "event"
}, {
    anonymous: !1,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !1,
        internalType: "uint8",
        name: "version",
        type: "uint8"
    }],
    name: "Initialized",
    type: "event"
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
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "implementation",
        type: "address"
    }],
    name: "Upgraded",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "bytes32",
        name: "uid",
        type: "bytes32"
    }, {
        indexed: !0,
        internalType: "address",
        name: "user",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "WithdrawalClaimed",
    type: "event"
}, {
    inputs: [],
    name: "eip712Domain",
    outputs: [{
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
    }, {
        internalType: "string",
        name: "name",
        type: "string"
    }, {
        internalType: "string",
        name: "version",
        type: "string"
    }, {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
    }, {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
    }, {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
    }, {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "_token",
        type: "address"
    }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "proxiableUUID",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
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
        internalType: "address",
        name: "_signer",
        type: "address"
    }],
    name: "setSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [],
    name: "signer",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [],
    name: "token",
    outputs: [{
        internalType: "contract IToken",
        name: "",
        type: "address"
    }],
    stateMutability: "view",
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
    inputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    name: "uidStatus",
    outputs: [{
        internalType: "enum WithdrawalContract.Status",
        name: "",
        type: "uint8"
    }],
    stateMutability: "view",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newImplementation",
        type: "address"
    }],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "address",
        name: "newImplementation",
        type: "address"
    }, {
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
}, {
    inputs: [{
        internalType: "bytes32",
        name: "uid",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }, {
        internalType: "bytes",
        name: "signature",
        type: "bytes"
    }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}];