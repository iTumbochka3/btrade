<template>
  <div class="q-input-wrapper">
    <span class="q-input-wrapper__label" name="label">{{ label }}</span>
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
@import './QInputWrapper'
</style>
