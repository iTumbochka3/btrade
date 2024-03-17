<template>
  <div class="q-trade-panel-right-bar">
    <QCellInfo title="Balance" :value="currencyFormat(balance)" />
    <QCellInfo title="Contract" :value="String(contract)" />
    <QCellInfo title="Profit" :value="currencyFormat(profit)" />
    <div>speed bet</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import QCellInfo from "@/UI/QCellInfo/QCellInfo.vue";
import currencyFormat from "@/utils/currencyFormat";

const balance = ref(500);
const contract = ref(8);
const profit = ref(2500);
</script>

<style lang="sass" scoped>
@import './QTradePanelRightBar'
</style>
