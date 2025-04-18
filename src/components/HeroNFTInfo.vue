<script setup>
import { getHeroNFTInfo } from '../web3info.js';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
  <div class="info-section" v-if="Object.keys(heroNFTInfo).length > 0">
    <h3>{{ t('heroNFT.heroCount') }} {{ heroNFTInfo.totalHeroes }}</h3>
  </div>
</template>

<style scoped>
/* 使用全局样式，这里不需要额外定义 */
</style> 