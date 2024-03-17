<template>
  <div class="q-cell-position">
    <span class="q-cell-position__index">
      {{ item.index }}
    </span>
    <span class="q-cell-position__value"> {{ item.value }} </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="sass" scoped>
@import './QCellPosition'
</style>
