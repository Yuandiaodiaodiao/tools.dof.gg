import Web3 from 'web3';
import { abiA, abiBank } from './abi.js';
import { abiSmelting } from './smeltingabi.js';
import { heroMinerAbi, heroMinerCa } from './herominer.js';
import { heroAbi, heroAbiCa } from './heroAbi.js';
import { tokenabi } from './tokenabi.js';

// Base chain configuration
const baseConfig = {
    chainId: 8453,
    name: "Base",
    currency: "ETH",
    explorerUrl: "https://basescan.org",
    rpcUrl: "https://base-rpc.publicnode.com"
};

// Create Web3 instance
const web3 = new Web3(baseConfig.rpcUrl);

// Contract address (you'll need to replace this with your actual contract address)
const contractAddress = '0x3C436Aa573877D9ee8e4B05B01B2c5dA60cf04ca';



// Token contract instance
const tokenContract = new web3.eth.Contract(tokenabi, contractAddress);



// Function to get token balance
export const getTokenBalance = async (address) => {
    try {
        const balance = await tokenContract.methods.balanceOf(address).call();
        return balance;
    } catch (error) {
        console.error('Error fetching token balance:', error);
        throw error;
    }
};

// Function to get bank deposit balance and pending rewards
// dungeonStaking
// 银行 和 英雄打出来奖励的池子
export const getBankInfo = async (address) => {
    try {
        const bankContract = new web3.eth.Contract(abiBank, '0x231F0e10E095D7f78D29C9a8Aa76991A013c1E72');
        
        // Get all user related info
        const [userInfo, pendingReward, lastDeposit, totalStaked, accRewardPerShare, rewardBalance] = await Promise.all([
            bankContract.methods.userInfo(address).call(),
            bankContract.methods.pendingReward(address).call(),
            bankContract.methods.lastDepositTime(address).call(),
            bankContract.methods.totalStaked().call(),
            bankContract.methods.accRewardPerShare().call(),
            bankContract.methods.rewardBalances(address).call()
        ]);

        // Calculate time since last deposit
        const now = Math.floor(Date.now() / 1000);
        const timeSinceDeposit = now - Number(lastDeposit);
        const hoursSinceDeposit = Math.floor(timeSinceDeposit / 3600);
        const minutesSinceDeposit = Math.floor((timeSinceDeposit % 3600) / 60);

        return {
            userInfo: {
                amount: parseFloat(web3.utils.fromWei(userInfo.amount.toString(), 'ether')),
                rewardDebt: parseFloat(web3.utils.fromWei(userInfo.rewardDebt.toString(), 'ether'))
            },
            pendingRewards: parseFloat(web3.utils.fromWei(pendingReward.toString(), 'ether')),
            lastDepositTime: Number(lastDeposit),
            timeSinceDeposit: {
                hours: hoursSinceDeposit,
                minutes: minutesSinceDeposit
            },
            totalStaked: parseFloat(web3.utils.fromWei(totalStaked.toString(), 'ether')),
            accRewardPerShare: parseFloat(web3.utils.fromWei(accRewardPerShare.toString(), 'ether')),
            rewardBalance: parseFloat(web3.utils.fromWei(rewardBalance.toString(), 'ether'))
        };
    } catch (error) {
        console.error('Error fetching bank info:', error);
        return {
            userInfo: {
                amount: 0,
                rewardDebt: 0
            },
            pendingRewards: 0,
            lastDepositTime: 0,
            timeSinceDeposit: {
                hours: 0,
                minutes: 0
            },
            totalStaked: 0,
            accRewardPerShare: 0,
            rewardBalance: 0
        };
    }
};

// withDraw
// Function to get smelting information
export const getSmeltingInfo = async (address) => {
    try {
        const smeltingContract = new web3.eth.Contract(abiSmelting, '0xa4776C3D158143D69479B3f6dBBf68F6d3699292');
        
        // Get withdrawal info for the address
        const [uidStatus, withdrawalAmount] = await Promise.all([
            smeltingContract.methods.uidStatus(address).call(),
            smeltingContract.methods.withdrawalAmount(address).call()
        ]);

        // Convert status to readable format
        const statusMap = {
            '0': 'Pending',
            '1': 'Claimed',
            '2': 'Cancelled'
        };

        return {
            status: statusMap[uidStatus] || 'Unknown',
            amount: web3.utils.fromWei(withdrawalAmount || '0', 'ether'),
            rarityInfo: [] // Keep this empty array to maintain compatibility with UI
        };
    } catch (error) {
        console.error('Error fetching smelting info:', error);
        // Return default values to prevent UI errors
        return {
            status: 'Error',
            amount: '0',
            rarityInfo: []
        };
    }
};

// 墓地吧应该是
// Function to get hero mining information
export const getHeroMiningInfo = async (address) => {
    try {
        const heroMinerContract = new web3.eth.Contract(heroMinerAbi, heroMinerCa);
        
        // Get mint fee and max batch mint info
        const [mintFee, maxBatchMint] = await Promise.all([
            heroMinerContract.methods.mintFee().call(),
            heroMinerContract.methods.maxBatchMint().call()
        ]);

        // Get hero contract address
        const heroContract = await heroMinerContract.methods.dungeonHero().call();

        return {
            mintFee: web3.utils.fromWei(mintFee, 'ether'),
            maxBatchMint: maxBatchMint,
            heroContractAddress: heroContract
        };
    } catch (error) {
        console.error('Error fetching hero mining info:', error);
        return {
            mintFee: '0',
            maxBatchMint: '0',
            heroContractAddress: null
        };
    }
};

// NFT?
// Function to get hero NFT information
export const getHeroNFTInfo = async (address) => {
    try {
        const heroContract = new web3.eth.Contract(heroAbi, heroAbiCa);
        
        // Get balance of NFTs for the address and max supply
        const [balance, maxSupply, currentSupply] = await Promise.all([
            heroContract.methods.balanceOf(address).call(),
            heroContract.methods.maxSupply().call(),
            heroContract.methods.currentSupply().call()
        ]);

        const heroes = [];

        // Get info for each NFT using a different approach
        // Since we don't have tokenOfOwnerByIndex, we'll need to implement a different strategy
        // This is a placeholder implementation - you'll need to adjust based on your contract's actual capabilities
        if (Number(balance) > 0) {
            // Note: This is a simplified approach. You might need to implement a different strategy
            // based on your contract's actual capabilities
            console.log('Hero NFT tracking functionality needs to be implemented based on contract capabilities');
        }

        return {
            totalHeroes: Number(balance),
            maxSupply: Number(maxSupply),
            currentSupply: Number(currentSupply),
            heroes: heroes
        };
    } catch (error) {
        console.error('Error fetching hero NFT info:', error);
        return {
            totalHeroes: 0,
            maxSupply: 0,
            currentSupply: 0,
            heroes: []
        };
    }
};

// Helper function to convert rarity number to name
const getRarityName = (rarity) => {
    const rarityMap = {
        '2': 'Common',
        '3': 'Rare',
        '4': 'Epic',
        '5': 'Legendary'
    };
    return rarityMap[rarity] || 'Unknown';
};

// Helper function to convert class number to name
const getClassName = (classNum) => {
    const classMap = {
        '1': 'Mage',
        '2': 'Warrior',
        '3': 'Hunter'
    };
    return classMap[classNum] || 'Unknown';
};

// Function to get NFT transfers and calculate owned NFTs
export const getNFTTransfers = async (address) => {
    try {
        const heroContract = new web3.eth.Contract(heroAbi, heroAbiCa);
        const fromBlock = 28976225;
        const currentBlock = await web3.eth.getBlockNumber();
        
        // Get all Transfer events
        const events = await heroContract.getPastEvents('Transfer', {
            fromBlock: fromBlock,
            toBlock: currentBlock,
            filter: { to: address }
        });

        // Get all Transfer events where the address is the sender
        const sentEvents = await heroContract.getPastEvents('Transfer', {
            fromBlock: fromBlock,
            toBlock: currentBlock,
            filter: { from: address }
        });

        // Create a map to track token ownership
        const tokenOwnership = new Map();

        // Process received transfers
        events.forEach(event => {
            const tokenId = event.returnValues.tokenId;
            tokenOwnership.set(tokenId, true);
        });

        // Process sent transfers
        sentEvents.forEach(event => {
            const tokenId = event.returnValues.tokenId;
            tokenOwnership.delete(tokenId);
        });

        // Convert Map to array of owned token IDs
        const ownedTokens = Array.from(tokenOwnership.keys());

        // Get detailed info for each owned token
        const ownedNFTs = await Promise.all(
            ownedTokens.map(async (tokenId) => {
                try {
                    const tokenURI = await heroContract.methods.tokenURI(tokenId).call();
                    const owner = await heroContract.methods.ownerOf(tokenId).call();
                    
                    // Only include if still owned by the address
                    if (owner.toLowerCase() === address.toLowerCase()) {
                        return {
                            tokenId: tokenId,
                            tokenURI: tokenURI,
                            owner: owner
                        };
                    }
                    return null;
                } catch (error) {
                    console.error(`Error fetching info for token ${tokenId}:`, error);
                    return null;
                }
            })
        );

        // Filter out null values and return the result
        return ownedNFTs.filter(nft => nft !== null);
    } catch (error) {
        console.error('Error fetching NFT transfers:', error);
        return [];
    }
};

export { web3, baseConfig };
