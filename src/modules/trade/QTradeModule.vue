<template>
  <div class="q-trade-module">
    <QTradeChart />
    <QTradePanel />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import QTradeChart from "./components/QTradeChart.vue";
import QTradePanel from "./components/QTradePanel.vue";
import useAuthStore from "@/store/auth";

const authStore = useAuthStore();

// FIXME: test
onMounted(() => authStore.login("asdfas3273@sadfasd.ri", "admin"));
</script>

<style lang="sass" scoped>
@import './QTradeModule'
</style>
