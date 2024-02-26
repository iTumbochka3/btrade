<template>
  <QMenu :items="menuItems" />
</template>

<script setup lang="ts">
import { h, ref } from "vue";
import QTradeIcon from "@/assets/icons/QTradeIcon.vue";
import QDepositIcon from "@/assets/icons/QDepositIcon.vue";
import QWithdrawIcon from "@/assets/icons/QWithdrawIcon.vue";
import QRatesHistoryIcon from "@/assets/icons/QRatesHistoryIcon.vue";
import QOperationsHistoryIcon from "@/assets/icons/QOperationsHistoryIcon.vue";
import QProfileIcon from "@/assets/icons/QProfileIcon.vue";
import QMenu from "@/UI/QMenu/QMenu.vue";
import { IMenuItem } from "@/UI/QMenu/interfaces";

const menuItems = ref<IMenuItem[]>([
  {
    label: "Trade",
    path: "/trade",
    icon: () => h(QTradeIcon),
  },
  {
    label: "Profile",
    path: "/profile",
    icon: () => h(QProfileIcon),
  },
  {
    label: "Deposit",
    path: "/deposit",
    icon: () => h(QDepositIcon),
  },
  {
    label: "Withdraw",
    path: "/withdraw",
    icon: () => h(QWithdrawIcon),
  },
  {
    label: "Rates history",
    path: "/rates",
    icon: () => h(QRatesHistoryIcon),
  },
  {
    label: "Operations history",
    path: "/operations",
    icon: () => h(QOperationsHistoryIcon),
  },
]);

console.log(menuItems);
</script>
