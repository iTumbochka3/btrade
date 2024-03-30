<template>
  <div class="q-trade-panel-right-bar">
    <div class="q-trade-panel-right-bar__info">
      <UCellInfo title="Balance" :value="store.getBalance" :hide-show="true" />
      <UCellInfo title="Contract" :value="store.getContract" />
      <UCellInfo title="Profit" :value="store.getProfit" />
    </div>
    <div class="q-trade-panel-right-bar__bets">
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
  </div>
</template>

<script setup lang="ts">
import UCellInfo from "../ui/UCellInfo/UCellInfo.vue";
import UCellBet from "../ui/UCellBet/UCellBet.vue";
import USecondButton from "@/UI/USecondButton/USecondButton.vue";
import useTradeStore from "../store";

const store = useTradeStore();

const prices = [10, 25, 50, 100, 250, 500, 1000];

const onSelect = (price: number) => store.setBet(price);
</script>

<style lang="sass" scoped>
@import './QTradePanelRightBar'
</style>
