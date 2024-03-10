<template>
  <div class="q-trade-panel">
    <span class="q-trade-panel__upper-buttons">
      <QNavigateButtonIcon_1 />
      <QNavigateButtonIcon_2 />
    </span>

    <div class="q-trade-panel__left-button-1"><QButtonIcon /></div>
    <div class="q-trade-panel__left-button-2"><QButtonIcon /></div>
    <div class="q-trade-panel__left-button-3"><QButtonIcon /></div>

    <div class="q-trade-panel__trade-buttons">
      <div class="q-trade-panel__trade-buttons-item" v-for="item in items" :key="item.index">
        <span class="q-trade-panel__trade-buttons-item-index">
          {{ item.index }}
        </span>
        <span class="q-trade-panel__trade-buttons-item-value"> {{ item.value }} </span>
      </div>
    </div>

    <span class="q-trade-panel__bottom-button-1"><QButtonIcon /></span>
    <span class="q-trade-panel__bottom-button-2"><QButtonIcon /></span>
    <span class="q-trade-panel__bottom-button-3"><QButtonIcon /></span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ITradePanelItem } from "./interfaces";
import QButtonIcon from "@/assets/button-icons/QButtonIcon.vue";
import QNavigateButtonIcon_1 from "@/assets/button-icons/QNavigateButtonIcon_1.vue";
import QNavigateButtonIcon_2 from "@/assets/button-icons/QNavigateButtonIcon_2.vue";

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
@import './QTradePanel'
</style>
