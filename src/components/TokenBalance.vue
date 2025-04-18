<script setup>
import { getTokenBalance, web3 } from '../web3info.js';
import { ref, watch } from 'vue';

const props = defineProps({
  address: {
    type: String,
    required: true
  }
});

const tokenBalance = ref('0');

const updateBalance = async () => {
  if (props.address) {
    try {
      const balance = await getTokenBalance(props.address);
      tokenBalance.value = balance ? web3.utils.fromWei(balance.toString(), 'ether') : '0';
    } catch (error) {
      console.error('Error fetching token balance:', error);
      tokenBalance.value = '0';
    }
  }
};

// Watch for address changes
watch(() => props.address, () => {
  updateBalance();
}, { immediate: true });
</script>

<template>
  <div class="info-section">
    <h3>Token Balance</h3>
    <span>代币余额: {{ parseFloat(tokenBalance).toFixed(3) || 0 }} Coin</span>
  </div>
</template> 