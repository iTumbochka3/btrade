<template>
  <div class="u-cell-position" :class="{ 'u-cell-position_active': item.active }" @click="emits('click', item.index)">
    <span v-if="item.active" class="u-cell-position__price" :class="{ 'u-cell-position__price_active': item.active }">
      {{ currencyFormat(item.currency) }}
    </span>
    <span class="u-cell-position__index" :class="{ 'u-cell-position__index_active': item.active }">
      {{ item.index }}
    </span>
    <span class="u-cell-position__value"> {{ item.value }} </span>
  </div>
</template>

<script setup lang="ts">
import { ITradeCell } from "@/modules/trade/interfaces";
import { PropType } from "vue";
import currencyFormat from "@/utils/currencyFormat";

defineProps({
  item: {
    type: Object as PropType<ITradeCell>,
    default: () => ({ index: 0, value: 0 }),
  },
});

const emits = defineEmits(["click"]);

// FIXME: add currency // 2 - ручной ввод (???)
</script>

<style lang="sass" scoped>
@import './UCellPosition'
</style>
