<script setup>
import { getHeroNFTInfo } from '../web3info.js';
import { ref, watch } from 'vue';

const props = defineProps({
  address: {
    type: String,
    required: true
  }
});

const heroNFTInfo = ref({});

const updateHeroNFTInfo = async () => {
  if (props.address) {
    try {
      const info = await getHeroNFTInfo(props.address);
      heroNFTInfo.value = info;
    } catch (error) {
      console.error('Error fetching hero NFT info:', error);
      heroNFTInfo.value = {};
    }
  }
};

// Watch for address changes
watch(() => props.address, () => {
  updateHeroNFTInfo();
}, { immediate: true });
</script>

<template>
  <div class="hero-nft-info" v-if="Object.keys(heroNFTInfo).length > 0">
    <div class="info-item">
      <span class="info-label">英雄数量: </span>
      <span class="info-value">{{ heroNFTInfo.totalHeroes }}</span>
    </div>
  </div>
</template>

<style scoped>
.hero-nft-info {
  margin: 10px 0;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.info-label {
  color: #00bcd4;
  font-size: 0.9em;
}

.info-value {
  font-weight: bold;
  color: white;
}
</style> 