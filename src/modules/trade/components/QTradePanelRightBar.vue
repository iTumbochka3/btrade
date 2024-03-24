<template>
  <div class="q-trade-panel-right-bar">
    <div class="q-trade-panel-right-bar__info">
      <QCellInfo title="Balance" :value="currencyFormat(store.getBalance)" :hide-show="true" />
      <QCellInfo title="Contract" :value="String(store.getContract)" />
      <QCellInfo title="Profit" :value="currencyFormat(store.getProfit)" />
    </div>
    <div class="q-trade-panel-right-bar__bets">
      <QCellBet
        v-for="price in prices"
        :key="price"
        :price="price"
        :selected="price === store.bet"
        @select="onSelect(price)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import QCellInfo from "@/components/QCellInfo/QCellInfo.vue";
import QCellBet from "@/components/QCellBet/QCellBet.vue";
import currencyFormat from "@/utils/currencyFormat";
import useTradeStore from "../store";

const store = useTradeStore();

const prices = [10, 25, 50, 100, 250, 500, 1000];

const onSelect = (price: number) => {
  if (price === store.bet) {
    store.setBet(0);
  } else {
    store.setBet(price);
  }
};
</script>

<style lang="sass" scoped>
@import './QTradePanelRightBar'
</style>
