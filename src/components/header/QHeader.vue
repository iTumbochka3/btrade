<template>
  <span class="q-header">
    <span class="q-header__menu">
      <QLogo />
      <QMenu :items="menuItems" />
    </span>

    <div class="q-header__button">
      <v-menu>
        <template v-slot:activator="{ props }">
          <QNavigationIcon v-bind="props" />
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in menuItems" :key="i">
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </span>
</template>

<script setup lang="ts">
import { h, ref } from "vue";
import QLogo from "@/assets/QLogo.vue";
// import QTradeIcon from "@/assets/icons/QTradeIcon.vue";
import QDepositIcon from "@/assets/icons/QDepositIcon.vue";
// import QWithdrawIcon from "@/assets/icons/QWithdrawIcon.vue";
import QRatesHistoryIcon from "@/assets/icons/QRatesHistoryIcon.vue";
// import QOperationsHistoryIcon from "@/assets/icons/QOperationsHistoryIcon.vue";
import QProfileIcon from "@/assets/icons/QProfileIcon.vue";
import QNavigationIcon from "@/assets/icons/QNavigationIcon.vue";
import QMenu from "@/UI/QMenu/QMenu.vue";
import { IMenuItem } from "@/UI/QMenu/interfaces";

// FIXME: fix icons (size)
const menuItems = ref<IMenuItem[]>([
  {
    label: "Trade",
    path: "/trade",
    icon: () => h(QDepositIcon),
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
    icon: () => h(QDepositIcon),
  },
  {
    label: "Rates history",
    path: "/rates",
    icon: () => h(QRatesHistoryIcon),
  },
  {
    label: "Operations history",
    path: "/operations",
    icon: () => h(QDepositIcon),
  },
]);
</script>

<style lang="sass" scoped>
@import './QHeader'
</style>
