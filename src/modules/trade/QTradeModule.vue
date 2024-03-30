<template>
  <div
    class="q-trade-module"
    :class="[
      {
        'q-trade-module_small': mobile && name !== 'md',
        'q-trade-module_middle': name === 'md',
        'q-trade-module_large': !mobile,
      },
    ]"
  >
    <Teleport v-if="name === 'md'" to="#header">
      <QTradeInfo />
      <UTradeTimer />
    </Teleport>
    <Teleport v-else-if="mobile" to="#action">
      <QTradeInfo />
      <UTradeTimer />
    </Teleport>

    <QTradeChart :hidden="hideChart && mobile" />

    <div class="q-trade-module-control" :class="[{ hidden: !hideChart && mobile }]">
      <QTradePanel />
      <div v-if="name !== 'md'" class="q-trade-module-control-right-bar">
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
import { computed } from "vue";

const { mobile, name } = useDisplay();

const hideChart = computed(() => {
  return !mobile.value;
});
</script>

<style lang="sass" scoped>
@import './QTradeModule'
</style>
