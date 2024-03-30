<template>
  <div class="q-trade-module">
    <Teleport v-if="name === 'md'" to="#header">
      <QTradeInfo />
      <UTradeTimer />
    </Teleport>
    <Teleport v-else-if="mobile" to="#action">
      <QTradeInfo />
      <UTradeTimer />
    </Teleport>

    <QTradeChart />

    <div class="q-trade-panel">
      <QTradePanel />
      <div v-if="name !== 'md'" class="q-trade-panel-right-bar">
        <QTradeInfo v-if="!mobile" />
        <QTradeBets />
      </div>
    </div>

    <Teleport to="#footer">
      <div v-if="mobile">
        <UTradeViewSwitch />
        <QTradeBets v-if="name !== 'md'" />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import QTradeBets from "./components/QTradeBets.vue";
import QTradeChart from "./components/QTradeChart.vue";
import QTradeInfo from "./components/QTradeInfo.vue";
import QTradePanel from "./components/QTradePanel.vue";
import UTradeViewSwitch from "./ui/UTradeViewSwitch/UTradeViewSwitch.vue";
import UTradeTimer from "./ui/UTradeTimer/UTradeTimer.vue";
import { useDisplay } from "vuetify";

const { mobile, name } = useDisplay();
</script>

<style lang="sass" scoped>
@import './QTradeModule'
</style>
