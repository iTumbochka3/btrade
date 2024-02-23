<template>
  <div />
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuItems = ref([
  {
    label: "Trade",
    path: "",
    icon: "",
  },
  {
    label: "Profile",
    path: "",
    icon: "",
  },
  {
    label: "Deposit",
    path: "",
    icon: "",
  },
  {
    label: "Withdraw",
    path: "",
    icon: "",
  },
  {
    label: "Rates history",
    path: "",
    icon: "",
  },
  {
    label: "Operations history",
    path: "",
    icon: "",
  },
]);

console.log(menuItems);
</script>

<style lang="sass">
@import './QMenu'
</style>
