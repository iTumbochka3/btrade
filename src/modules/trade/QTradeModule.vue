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
      <QTradeInfo :mode="EModeView.HORIZONTAL" />
      <UTradeTimer />
    </Teleport>
    <Teleport v-else-if="mobile" to="#action">
      <QTradeInfo :mode="EModeView.HORIZONTAL" />
      <UTradeTimer />
    </Teleport>

    <QTradeChart :hidden="hideChart && mobile" />

    <div class="q-trade-module-control" :class="[{ hidden: !hideChart && mobile }]">
      <QTradePanel :mode="name === 'md' ? EModeView.HORIZONTAL : EModeView.VERTICAL" />
      <div v-if="name !== 'md'" class="q-trade-module-control-right-bar">
        <QTradeInfo v-if="!mobile" :mode="EModeView.VERTICAL" />
        <QTradeBets :mode="EModeView.VERTICAL" />
      </div>
    </div>

    <Teleport to="#footer">
      <div v-if="mobile">
        <UTradeViewSwitch :hide-chart="hideChart" @toggle="toggleView" />
        <QTradeBets v-if="name === 'md'" :mode="EModeView.HORIZONTAL" />
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
import { ref } from "vue";
import { EModeView } from "./constants";

const { mobile, name } = useDisplay();

const hideChart = ref(true);

const toggleView = () => (hideChart.value = !hideChart.value);
</script>

<style lang="sass" scoped>
@import './QTradeModule'
</style>
