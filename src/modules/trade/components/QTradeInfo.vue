<template>
  <div
    class="q-trade-info"
    :class="[
      {
        'q-trade-info_vertical': mode === EModeView.VERTICAL,
        'q-trade-info_horizontal': mode === EModeView.HORIZONTAL,
      },
    ]"
  >
    <UCellInfo title="Balance" :value="store.getBalance" :hide-show="true" />
    <!-- FIXME: temp -->
    <!-- <UCellInfo title="Bet" :value="String(store.getCurrentBetMoney)" :hide-show="true" /> -->
    <UCellInfo title="Contract" :value="store.getContract" />
    <UCellInfo title="Profit" :value="store.getProfit" />
  </div>
</template>

<script setup lang="ts">
import UCellInfo from "../ui/UCellInfo/UCellInfo.vue";
import useTradeStore from "../store";
import { EModeView } from "../constants";

defineProps({
  mode: {
    type: String,
    default: EModeView.VERTICAL,
  },
});

const store = useTradeStore();
</script>

<style lang="sass" scoped>
@import './QTradeInfo'
</style>
