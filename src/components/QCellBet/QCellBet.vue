<template>
  <div class="q-cell-bet" :class="{ 'q-cell-bet_selected': selected }">
    <span class="q-cell-bet__price">
      {{ price }}
    </span>
  </div>
</template>

<!-- TODO: disabled -->

<script setup lang="ts">
defineProps({
  price: {
    type: Number,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="sass" scoped>
@import './QCellBet'
</style>
