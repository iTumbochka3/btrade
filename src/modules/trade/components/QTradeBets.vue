<template>
  <div
    class="q-trade-bets"
    :class="[
      {
        'q-trade-bets_vertical': mode === EModeView.VERTICAL,
        'q-trade-bets_horizontal': mode === EModeView.HORIZONTAL,
      },
    ]"
  >
    <USecondButton title="CLEAR" @click="store.clearBets" />
    <UCellBet
      v-for="price in prices"
      :key="price"
      :price="price"
      :selected="price === store.bet"
      :disabled="store.balance < price"
      @select="onSelect(price)"
    />
  </div>
</template>

<script setup lang="ts">
import UCellBet from "../ui/UCellBet/UCellBet.vue";
import USecondButton from "@/UI/USecondButton/USecondButton.vue";
import useTradeStore from "../store";
import { EModeView } from "../constants";

defineProps({
  mode: {
    type: String,
    default: EModeView.VERTICAL,
  },
});

const store = useTradeStore();

const prices = [10, 25, 50, 100, 250, 500, 1000];

const onSelect = (price: number) => store.setBet(price);
</script>

<style lang="sass" scoped>
@import './QTradeBets'
</style>
