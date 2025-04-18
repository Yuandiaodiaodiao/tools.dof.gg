export const paymentAbi =  [{
    inputs: [{
        internalType: "uint256[]",
        name: "_nftIds",
        type: "uint256[]"
    }, {
        internalType: "uint8[]",
        name: "_tierIds",
        type: "uint8[]"
    }, {
        internalType: "string[]",
        name: "_paymentIds",
        type: "string[]"
    }],
    name: "batchPayFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
}, {
    inputs: [{
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]"
    }],
    name: "getLatestPayments",
    outputs: [{
        components: [{
            internalType: "string",
            name: "paymentId",
            type: "string"
        }, {
            internalType: "uint8",
            name: "dungeonId",
            type: "uint8"
        }, {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256"
        }],
        internalType: "struct DungeonPayment.PaymentInfo[]",
        name: "",
        type: "tuple[]"
    }],
    stateMutability: "view",
    type: "function"
}];
export const paymentCa = "0xa2e1BcD6bf717e3BaA1Dc184C5C32FD40271A82e";
