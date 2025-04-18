<script setup>
import { getTokenBalance, web3 } from '../web3info.js';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
    <h3>{{ t('tokenBalance.title') }}</h3>
    <span>{{ t('tokenBalance.balance', [parseFloat(tokenBalance).toFixed(3)]) }}</span>
  </div>
</template>

<style scoped>
.info-section {
  margin: 15px 0;
  padding: 15px;
  background: #383838;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  color: white;
}

.info-section h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: white;
  font-size: 1.2em;
}

.info-section span {
  color: white;
}
</style> 