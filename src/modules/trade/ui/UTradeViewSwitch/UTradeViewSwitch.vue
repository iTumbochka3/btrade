<template>
  <div class="u-trade-view-switch" @click="emits('toggle')">
    <span v-if="hideChart" class="u-trade-view-switch__panel">
      <QButtonPanelIcon />
      <QButtonPanelIcon />
      <QButtonPanelIcon />
    </span>
    <QButtonChartIcon v-else />
  </div>
</template>

<script setup lang="ts">
import QButtonChartIcon from "@/assets/button-icons/QButtonChartIcon.vue";
import QButtonPanelIcon from "@/assets/button-icons/QButtonPanelIcon.vue";

defineProps({
  hideChart: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["toggle"]);
</script>

<style lang="sass" scoped>
@import './UTradeViewSwitch.sass'
</style>
