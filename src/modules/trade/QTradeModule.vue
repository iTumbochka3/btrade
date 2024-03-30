<template>
  <div class="q-trade-module">
    <Teleport to="#header">
      <div v-if="name === 'md'">
        <!-- TODO: info -->
      </div>
    </Teleport>
    <QTradeChart />
    <QTradePanel />
    <Teleport to="#footer">
      <div v-if="mobile">
        <!-- TODO: switch -->
        <!-- TODO: bets -->
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import QTradeChart from "./components/QTradeChart.vue";
import QTradePanel from "./components/QTradePanel.vue";
import { useDisplay } from "vuetify";

const { mobile, name } = useDisplay();
</script>

<style lang="sass" scoped>
@import './QTradeModule'
</style>
