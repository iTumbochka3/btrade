<template>
  <span
    class="q-header"
    :class="[
      {
        'q-header_small': mobile && name !== 'md',
        'q-header_middle': name === 'md',
        'q-header_large': !mobile,
      },
    ]"
  >
    <span
      class="q-header__menu"
      :class="[
        {
          'q-header__menu_small': mobile && name !== 'md',
          'q-header__menu_middle': name === 'md',
          'q-header__menu_large': !mobile,
        },
      ]"
    >
      <QMenu :items="menuItems" :short="mobile" />
    </span>

    <span v-if="name === 'md'" id="header"></span>

    <div
      class="q-header__setting"
      :class="[
        {
          'q-header__setting_small': mobile && name !== 'md',
          'q-header__setting_middle': name === 'md',
          'q-header__setting_large': !mobile,
        },
      ]"
    >
      <QSetting />
    </div>
  </span>
</template>

<script setup lang="ts">
import { h, ref } from "vue";
import { useDisplay } from "vuetify";
import QMenu from "./QMenu/QMenu.vue";
import QSetting from "./QSetting/QSetting.vue";
import { IMenuItem } from "@/UI/QMenu/interfaces";

// import QTradeIcon from "@/assets/icons/QTradeIcon.vue";
import QDepositIcon from "@/assets/icons/QDepositIcon.vue";
// import QWithdrawIcon from "@/assets/icons/QWithdrawIcon.vue";
import QRatesHistoryIcon from "@/assets/icons/QRatesHistoryIcon.vue";
// import QOperationsHistoryIcon from "@/assets/icons/QOperationsHistoryIcon.vue";
import QProfileIcon from "@/assets/icons/QProfileIcon.vue";

const { mobile, name } = useDisplay();

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
