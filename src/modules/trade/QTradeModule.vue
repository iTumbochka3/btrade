<template>
  <div class="q-trade-module">
    <QTradeChart />
    <QTradePanel />
  </div>
</template>

<script setup lang="ts">
import QTradeChart from "./components/QTradeChart.vue";
import QTradePanel from "./components/QTradePanel.vue";
</script>

<style lang="sass" scoped>
@import './QTradeModule'
</style>
