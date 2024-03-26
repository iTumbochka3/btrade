<template>
  <div class="q-cell-position" :class="{ 'q-cell-position_active': item.active }" @click="emits('click', item.index)">
    <span v-if="item.active" class="q-cell-position__price" :class="{ 'q-cell-position__price_active': item.active }">
      {{ item.currency }}
    </span>
    <span class="q-cell-position__index" :class="{ 'q-cell-position__index_active': item.active }">
      {{ item.index }}
    </span>
    <span class="q-cell-position__value"> {{ item.value }} </span>
  </div>
</template>

<script setup lang="ts">
import { ITradeCell } from "@/modules/trade/interfaces";
import { PropType } from "vue";

defineProps({
  item: {
    type: Object as PropType<ITradeCell>,
    default: () => ({ index: 0, value: 0 }),
  },
});

const emits = defineEmits(["click"]);

// FIXME: add currency
// 1 - fast bet
// 2 - ручной ввод (???)
</script>

<style lang="sass" scoped>
@import './QCellPosition'
</style>
