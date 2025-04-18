<script setup>
import { getBankInfo } from '../web3info.js';
import { ref, watch } from 'vue';

const props = defineProps({
  address: {
    type: String,
    required: true
  }
});

const bankInfo = ref({
  deposit: '0',
  pendingRewards: '0',
  rewardBalance: '0'
});

const updateBankInfo = async () => {
  if (props.address) {
    try {
      const info = await getBankInfo(props.address);
      bankInfo.value = {
        deposit: info?.userInfo?.amount?.toString() || '0',
        pendingRewards: info?.pendingRewards?.toString() || '0',
        rewardBalance: info?.rewardBalance?.toString() || '0'
      };
    } catch (error) {
      console.error('Error fetching bank info:', error);
      bankInfo.value = {
        deposit: '0',
        pendingRewards: '0',
        rewardBalance: '0'
      };
    }
  }
};

// Watch for address changes
watch(() => props.address, () => {
  updateBankInfo();
}, { immediate: true });
</script>

<template>
  <div class="bank-info" v-if="Object.keys(bankInfo).length > 0">
    <div class="info-header">
      <h3>银行信息</h3>
    </div>
    <div class="info-content">
      <div class="info-item">
        <div class="info-label">质押数量</div>
        <div class="info-value">{{ parseFloat(bankInfo.deposit).toFixed(3) }} Coin</div>
      </div>
      <div class="info-item">
        <div class="info-label">待领取奖励</div>
        <div class="info-value highlight">{{ parseFloat(bankInfo.rewardBalance).toFixed(3) }} Coin</div>
      </div>
      <div class="info-item">
        <div class="info-label">待结算奖励</div>
        <div class="info-value highlight">{{ parseFloat(bankInfo.pendingRewards).toFixed(3) }} Coin</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bank-info {
  background: #2c2c2c;
  border-radius: 8px;
  border: 1px solid #555;
  margin: 10px 0;
  overflow: hidden;
}

.info-header {
  background: #383838;
  padding: 10px 15px;
  border-bottom: 1px solid #555;
}

.info-header h3 {
  color: white;
  margin: 0;
  font-size: 1.1em;
}

.info-content {
  padding: 15px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #404040;
}

.info-item:last-child {
  border-bottom: none;
}

.info-label {
  color: #00bcd4;
  font-size: 0.9em;
}

.info-value {
  font-weight: bold;
  color: white;
}

.info-value.highlight {
  color: #4caf50;
}
</style> 