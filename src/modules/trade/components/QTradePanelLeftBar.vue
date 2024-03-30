<template>
  <div class="q-trade-panel-left-bar">
    <UCellPosition
      class="q-trade-panel-left-bar__upper-buttons"
      :item="store.positions?.[0]"
      @click="store.selectPosition"
    />
    <div class="q-trade-panel-left-bar__left-button-1" @click="clickButtonSelect(0)">
      <QButtonIcon />
    </div>
    <div class="q-trade-panel-left-bar__left-button-2" @click="clickButtonSelect(1)">
      <QButtonIcon />
    </div>
    <div class="q-trade-panel-left-bar__left-button-3" @click="clickButtonSelect(2)">
      <QButtonIcon />
    </div>

    <div class="q-trade-panel-left-bar__trade-buttons">
      <UCellPosition
        v-for="item in store.positions.filter(({ index }) => index > 0)"
        :key="item.index"
        :item="item"
        @click="store.selectPosition"
      />
    </div>

    <span class="q-trade-panel-left-bar__bottom-button-1" @click="clickButtonSelect(3)">
      <QButtonIcon />
    </span>
    <span class="q-trade-panel-left-bar__bottom-button-2" @click="clickButtonSelect(4)">
      <QButtonIcon />
    </span>
    <span class="q-trade-panel-left-bar__bottom-button-3" @click="clickButtonSelect(5)">
      <QButtonIcon />
    </span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import QButtonIcon from "@/assets/button-icons/QButtonIcon.vue";
import UCellPosition from "../ui/UCellPosition/UCellPosition.vue";
import useTradeStore from "../store";

const store = useTradeStore();

const buttonsStatus = reactive([false, false, false, false, false, false]);

const clickButtonSelect = (index: number) => {
  buttonsStatus[index] = !buttonsStatus[index];
  store.multiSelectPosition(index + 1, buttonsStatus[index]);
};

onMounted(() => store.getPositions());
</script>

<style lang="sass" scoped>
@import './QTradePanelLeftBar'
</style>
