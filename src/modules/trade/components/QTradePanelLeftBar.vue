<template>
  <div class="q-trade-panel-left-bar">
    <span class="q-trade-panel-left-bar__upper-buttons">
      <div class="q-trade-panel-left-bar__trade-buttons-item">
        <span class="q-trade-panel-left-bar__trade-buttons-item-index"> 0 </span>
        <span class="q-trade-panel-left-bar__trade-buttons-item-value"> 0.06886 </span>
      </div>
    </span>

    <div class="q-trade-panel-left-bar__left-button-1"><QButtonIcon /></div>
    <div class="q-trade-panel-left-bar__left-button-2"><QButtonIcon /></div>
    <div class="q-trade-panel-left-bar__left-button-3"><QButtonIcon /></div>

    <div class="q-trade-panel-left-bar__trade-buttons">
      <div class="q-trade-panel-left-bar__trade-buttons-item" v-for="item in items" :key="item.index">
        <span class="q-trade-panel-left-bar__trade-buttons-item-index">
          {{ item.index }}
        </span>
        <span class="q-trade-panel-left-bar__trade-buttons-item-value"> {{ item.value }} </span>
      </div>
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
