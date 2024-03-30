<template>
  <div class="q-trade-info">
    <UCellInfo title="Balance" :value="store.getBalance" :hide-show="true" />
    <UCellInfo title="Contract" :value="store.getContract" />
    <UCellInfo title="Profit" :value="store.getProfit" />
  </div>
</template>

<script setup lang="ts">
import UCellInfo from "../ui/UCellInfo/UCellInfo.vue";
import useTradeStore from "../store";

const store = useTradeStore();
</script>

<style lang="sass" scoped>
@import './QTradeInfo'
</style>
