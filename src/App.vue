<!-- eslint-disable -->

<script setup>
import { useLocalStorage } from '@vueuse/core';
import TokenBalance from './components/TokenBalance.vue';
import BankInfo from './components/BankInfo.vue';
import HeroNFTInfo from './components/HeroNFTInfo.vue';
import AccountName from './components/AccountName.vue';
import AccountAddress from './components/AccountAddress.vue';
import LanguageSwitch from './components/LanguageSwitch.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const addAccount = () => {
  accounts.value.push(({ 
    address: "", 
    count: 0, 
    name: "", 
    stakedAmount: 0, 
    rewardDebt: 0, 
    tokenBalance: 0, 
    bankDeposit: 0, 
    bankPendingRewards: 0,
    rewardBalance: 0,
    smeltingStaked: 0,
    smeltingClaimable: 0,
    smeltingRarityInfo: []
  }))
};

const accounts = useLocalStorage('account', () => []);

const removeAccount = (index) => {
  accounts.value.splice(index, 1);
};
</script>

<template>
  <LanguageSwitch />
  
  <div style="position:relative;top:0;left:0" class="header-info">
    <div>{{ t('header.gameLink') }}</div>
    <div>{{ t('header.inviteLink') }}</div>
    <div>{{ t('header.securityReminder') }}</div>
  </div>
  
  <div>
  <div class="title">{{ t('title') }}</div>
  <button @click="addAccount">{{ t('buttons.add') }}</button>
  </div>

  <div class="accounts-container">
    <div v-for="(account, index) in accounts" :key="account.address" class="account-info">
      <div class="account-header">
        <div class="account-inputs">
          <AccountName v-model="account.name" />
          <AccountAddress v-model="account.address" />
        </div>
        <button class="delete-btn" @click="removeAccount(index)">{{ t('buttons.delete') }}</button>
      </div>
      
      <HeroNFTInfo :address="account.address" />
      <TokenBalance :address="account.address" />
      <BankInfo :address="account.address" />
    </div>
  </div>
  <div style="position:fixed;bottom:0">{{ t('footer') }}</div>
</template>

<style>
body {
  background-color: #2c2c2c;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
</style>

<style scoped>
.header-info {
  color: white;
  background: rgba(0,0,0,0.5);
  padding: 10px;
  width: 100%;
}

.title {
  color: white;
  font-size: 1.5em;
  margin: 20px 0;
}

.accounts-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.account-info {
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #555;
  border-radius: 8px;
  background: #2c2c2c;
  color: white;
}

.account-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.account-inputs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.delete-btn {
  background: #ff4444;
  color: white;
  border: none;
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  height: 20px;
  line-height: 16px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-btn:hover {
  background: #cc0000;
}

button {
  background: #00bcd4;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;
  font-weight: bold;
}

button:hover {
  background: #00acc1;
}

/* Common styles for info sections */
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

/* Bank info specific styles */
.bank-info {
  background: #2c2c2c;
  padding: 15px;
  border-radius: 8px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 15px;
}

.info-item {
  background: #383838;
  padding: 12px;
  border-radius: 6px;
}

.info-label {
  color: #00bcd4;
  font-size: 0.9em;
  margin-bottom: 5px;
}

.info-value {
  font-size: 1.1em;
  font-weight: bold;
  color: white;
}

.info-value.highlight {
  color: #4caf50;
}
</style>
