<template>
  <div class="q-trade-panel">
    <QTradePanelLeftBar />
    <QTradePanelRightBar />
  </div>
</template>

<script setup lang="ts">
import QTradePanelRightBar from "./QTradePanelRightBar.vue";
import QTradePanelLeftBar from "./QTradePanelLeftBar.vue";
</script>

<style lang="sass" scoped>
@import './QTradePanel'
</style>
