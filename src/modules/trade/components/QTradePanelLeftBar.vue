<template>
  <div class="q-trade-panel-left-bar">
    <QCellPosition class="q-trade-panel-left-bar__upper-buttons" :item="{ index: 0, value: 0.06886 }" />

    <div class="q-trade-panel-left-bar__left-button-1"><QButtonIcon /></div>
    <div class="q-trade-panel-left-bar__left-button-2"><QButtonIcon /></div>
    <div class="q-trade-panel-left-bar__left-button-3"><QButtonIcon /></div>

    <div class="q-trade-panel-left-bar__trade-buttons">
      <QCellPosition v-for="item in items" :key="item.index" :item="item" />
    </div>

    <span class="q-trade-panel-left-bar__bottom-button-1"><QButtonIcon /></span>
    <span class="q-trade-panel-left-bar__bottom-button-2"><QButtonIcon /></span>
    <span class="q-trade-panel-left-bar__bottom-button-3"><QButtonIcon /></span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ITradePanelItem } from "./interfaces";
import QButtonIcon from "@/assets/button-icons/QButtonIcon.vue";
import QCellPosition from "@/components/QCellPosition/QCellPosition.vue";

const items = ref<ITradePanelItem[]>([]);

// FIXME: mock
onMounted(() => {
  for (let i = 1; i <= 36; i++) {
    items.value.push({
      index: i,
      value: 0.06886,
    });
  }
});
</script>

<style lang="sass" scoped>
@import './QTradePanelLeftBar'
</style>
