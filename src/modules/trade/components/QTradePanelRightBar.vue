<template>
  <div class="q-trade-panel-right-bar">
    <div class="q-trade-panel-right-bar__info">
      <QCellInfo title="Balance" :value="store.getBalance" :hide-show="true" />
      <QCellInfo title="Contract" :value="store.getContract" />
      <QCellInfo title="Profit" :value="store.getProfit" />
    </div>
    <div class="q-trade-panel-right-bar__bets">
      <QSecondButton title="CLEAR" />
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
import QSecondButton from "@/UI/QSecondButton/QSecondButton.vue";
import useTradeStore from "../store";

const store = useTradeStore();

const prices = [10, 25, 50, 100, 250, 500, 1000];

const onSelect = (price: number) => store.setBet(price);
</script>

<style lang="sass" scoped>
@import './QTradePanelRightBar'
</style>
