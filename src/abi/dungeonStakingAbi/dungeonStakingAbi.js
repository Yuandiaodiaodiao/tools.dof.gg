//@eslint-disable
export const dungeonStakingAbi =[ {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
},
    {
        anonymous: !1,
            inputs: [
                {
                    indexed: !0,
                    internalType: "address",
                    name: "admin",
                    type: "address"
                }
            ],
                name: "AdminAdded",
                    type: "event"
},
{
    anonymous: !1,
        inputs: [
            {
                indexed: !0,
                internalType: "address",
                name: "admin",
                type: "address"
            }
        ],
            name: "AdminRemoved",
                type: "event"
},
{
    anonymous: !1,
        inputs: [
            {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address"
            },
            {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
            name: "Deposit",
                type: "event"
},
{
    anonymous: !1,
        inputs: [
            {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address"
            },
            {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
            name: "Harvest",
                type: "event"
},
{
    anonymous: !1,
        inputs: [
            {
                indexed: !1,
                internalType: "uint8",
                name: "version",
                type: "uint8"
            }
        ],
            name: "Initialized",
                type: "event"
},
{
    anonymous: !1,
        inputs: [
            {
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
            name: "OwnershipTransferred",
                type: "event"
},
{
    anonymous: !1,
        inputs: [
            {
                indexed: !1,
                internalType: "uint256",
                name: "lessThan12h",
                type: "uint256"
            },
            {
                indexed: !1,
                internalType: "uint256",
                name: "_12hTo24h",
                type: "uint256"
            },
            {
                indexed: !1,
                internalType: "uint256",
                name: "_24hTo36h",
                type: "uint256"
            }
        ],
            name: "PenaltiesUpdated",
                type: "event"
},
{
    anonymous: !1,
        inputs: [
            {
                indexed: !0,
                internalType: "address",
                name: "admin",
                type: "address"
            },
            {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
            name: "RewardDeposit",
                type: "event"
},
{
    anonymous: !1,
        inputs: [
            {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address"
            },
            {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
            name: "RewardWithdrawn",
                type: "event"
},
{
    anonymous: !1,
        inputs: [
            {
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address"
            },
            {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
            name: "Withdraw",
                type: "event"
},
{
    inputs: [],
        name: "accRewardPerShare",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
                stateMutability: "view",
                    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "_admin",
            type: "address"
        }
    ],
        name: "addAdmin",
            outputs: [],
                stateMutability: "nonpayable",
                    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "",
            type: "address"
        }
    ],
        name: "admins",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }
            ],
                stateMutability: "view",
                    type: "function"
},
{
    inputs: [
        {
            internalType: "uint256",
            name: "_amount",
            type: "uint256"
        }
    ],
        name: "deposit",
            outputs: [],
                stateMutability: "nonpayable",
                    type: "function"
},
{
    inputs: [
        {
            internalType: "uint256",
            name: "_amount",
            type: "uint256"
        }
    ],
        name: "depositReward",
            outputs: [],
                stateMutability: "nonpayable",
                    type: "function"
},
{
    inputs: [],
        name: "harvest",
            outputs: [],
                stateMutability: "nonpayable",
                    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "_stakingToken",
            type: "address"
        },
        {
            internalType: "address",
            name: "_rewardToken",
            type: "address"
        }
    ],
        name: "initialize",
            outputs: [],
                stateMutability: "nonpayable",
                    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "",
            type: "address"
        }
    ],
        name: "lastDepositTime",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
                stateMutability: "view",
                    type: "function"
},
{
    inputs: [],
        name: "owner",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }
            ],
                stateMutability: "view",
                    type: "function"
},
{
    inputs: [],
        name: "penalty12hTo24h",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
                stateMutability: "view",
                    type: "function"
},
{
    inputs: [],
        name: "penalty24hTo36h",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
                stateMutability: "view",
                    type: "function"
},
{
    inputs: [],
        name: "penaltyLessThan12h",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
                stateMutability: "view",
                    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "_user",
            type: "address"
        }
    ],
        name: "pendingReward",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
                stateMutability: "view",
                    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "_admin",
            type: "address"
        }
    ],
        name: "removeAdmin",
            outputs: [],
                stateMutability: "nonpayable",
                    type: "function"
},
{
    inputs: [],
        name: "renounceOwnership",
            outputs: [],
                stateMutability: "nonpayable",
                    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "",
            type: "address"
        }
    ],
        name: "rewardBalances",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
                stateMutability: "view",
                    type: "function"
},
{
    inputs: [],
        name: "rewardToken",
            outputs: [
                {
                    internalType: "contract IERC20",
                    name: "",
                    type: "address"
                }
            ],
                stateMutability: "view",
                    type: "function"
},
{
    inputs: [
        {
            internalType: "uint256",
            name: "_lessThan12h",
            type: "uint256"
        },
        {
            internalType: "uint256",
            name: "_12hTo24h",
            type: "uint256"
        },
        {
            internalType: "uint256",
            name: "_24hTo36h",
            type: "uint256"
        }
    ],
        name: "setPenalties",
            outputs: [],
                stateMutability: "nonpayable",
                    type: "function"
},
{
    inputs: [],
        name: "stakingToken",
            outputs: [
                {
                    internalType: "contract IERC20",
                    name: "",
                    type: "address"
                }
            ],
                stateMutability: "view",
                    type: "function"
},
{
    inputs: [],
        name: "totalStaked",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }
            ],
                stateMutability: "view",
                    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "newOwner",
            type: "address"
        }
    ],
        name: "transferOwnership",
            outputs: [],
                stateMutability: "nonpayable",
                    type: "function"
},
{
    inputs: [
        {
            internalType: "address",
            name: "",
            type: "address"
        }
    ],
        name: "userInfo",
            outputs: [
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                },
                {
                    internalType: "uint256",
                    name: "rewardDebt",
                    type: "uint256"
                }
            ],
                stateMutability: "view",
                    type: "function"
},
{
    inputs: [],
        name: "version",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string"
                }
            ],
                stateMutability: "pure",
                    type: "function"
},
{
    inputs: [
        {
            internalType: "uint256",
            name: "_amount",
            type: "uint256"
        }
    ],
        name: "withdraw",
            outputs: [],
                stateMutability: "nonpayable",
                    type: "function"
},
{
    inputs: [],
        name: "withdrawReward",
            outputs: [],
                stateMutability: "nonpayable",
                    type: "function"
}]

export const dungeonStakingAbiCa="0x231F0e10E095D7f78D29C9a8Aa76991A013c1E72";