<template>
  <v-btn class="u-button" :disabled="disabled" @click="emits('click')">{{ title }}</v-btn>
</template>

<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: () => false,
  },
  title: {
    type: String,
    default: () => "",
  },
});

const emits = defineEmits(["click"]);
</script>

<style lang="sass">
@import './UButton'
</style>
