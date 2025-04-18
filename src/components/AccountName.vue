<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <div class="input-group">
    <span>备注: </span>
    <input 
      placeholder="备注" 
      type="text" 
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<style scoped>
.input-group {
  display: flex;
  align-items: center;
  gap: 5px;
}

input {
  background: #404040;
  border: 1px solid #555;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
}
</style> 