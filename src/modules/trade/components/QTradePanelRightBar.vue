<template>
  <div class="q-trade-panel-right-bar">
    <div class="q-trade-panel-right-bar__info">
      <QCellInfo title="Balance" :value="currencyFormat(balance)" :eye="true" />
      <QCellInfo title="Contract" :value="String(contract)" />
      <QCellInfo title="Profit" :value="currencyFormat(profit)" />
    </div>
    <div class="q-trade-panel-right-bar__bets">
      <QCellBet v-for="price in prices" :key="price" :price="price" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import QCellInfo from "@/components/QCellInfo/QCellInfo.vue";
import QCellBet from "@/components/QCellBet/QCellBet.vue";
import currencyFormat from "@/utils/currencyFormat";

const balance = ref(500);
const contract = ref(8);
const profit = ref(2500);
const prices = [10, 25, 50, 100, 250, 500, 1000];
</script>

<style lang="sass" scoped>
@import './QTradePanelRightBar'
</style>
