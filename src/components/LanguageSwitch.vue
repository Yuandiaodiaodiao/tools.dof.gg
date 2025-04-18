<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';

const { locale, t } = useI18n();

const toggleLanguage = () => {
  const newLocale = locale.value === 'zh' ? 'en' : 'zh';
  locale.value = newLocale;
  localStorage.setItem('locale', newLocale);
};

onMounted(() => {
  // Set default language to English if not already set in localStorage
  const savedLocale = localStorage.getItem('locale');
  if (!savedLocale) {
    locale.value = 'en';
    localStorage.setItem('locale', 'en');
  }
});
</script>

<template>
  <div class="language-switch">
    <button 
      @click="locale = 'zh'; localStorage.setItem('locale', 'zh')" 
      :class="{ active: locale === 'zh' }"
    >
      中文
    </button>
    <button 
      @click="locale = 'en'; localStorage.setItem('locale', 'en')" 
      :class="{ active: locale === 'en' }"
    >
      English
    </button>
  </div>
</template>

<style scoped>
.language-switch {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 100;
  display: flex;
  gap: 5px;
}

button {
  background: #383838;
  color: white;
  border: 1px solid #555;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
}

button:hover {
  background: #444;
}

button.active {
  background: #555;
  border-color: #777;
}
</style> 