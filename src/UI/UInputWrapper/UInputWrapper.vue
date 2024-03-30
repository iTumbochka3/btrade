<template>
  <div class="u-input-wrapper">
    <span class="u-input-wrapper__label" name="label">{{ label }}</span>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: () => "",
  },
});
</script>

<style lang="sass">
@import './UInputWrapper'
</style>
