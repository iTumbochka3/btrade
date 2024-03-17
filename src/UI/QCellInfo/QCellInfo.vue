<template>
  <div class="q-cell-info">
    <span class="q-cell-info__title">{{ title }}</span>
    <span class="q-cell-info__value">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  //   TODO: color
  color: {
    type: String,
    default: "",
  },
});
</script>

<style lang="sass" scoped>
@import './QCellInfo'
</style>
