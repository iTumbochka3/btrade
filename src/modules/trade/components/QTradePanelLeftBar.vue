<template>
  <div class="q-trade-panel-left-bar">
    <QCellPosition class="q-trade-panel-left-bar__upper-buttons" :item="positions?.[0]" @click="selectPosition" />
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
      <QCellPosition
        v-for="item in positions.filter(({ index }) => index > 0)"
        :key="item.index"
        :item="item"
        @click="selectPosition"
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
import { PropType, onMounted, reactive } from "vue";
import { ITradeCell } from "../interfaces";
import QButtonIcon from "@/assets/button-icons/QButtonIcon.vue";
import QCellPosition from "@/components/QCellPosition/QCellPosition.vue";
import useTrade from "../hooks/useTrade";
import { ESelectTypeButton } from "../constants";

defineProps({
  positions: {
    type: Array as PropType<ITradeCell[]>,
    default: () => [],
  },
});

const { positions, getPositions, selectPosition, multiselectPosition } = useTrade();

const buttonsStatus = reactive([false, false, false, false, false, false]);

const clickButtonSelect = (index: number) => {
  buttonsStatus[index] = !buttonsStatus[index];
  const type = index > 2 ? ESelectTypeButton.VERTICAL : ESelectTypeButton.HORIZONTAL;
  multiselectPosition(index + 1, type, buttonsStatus[index]);
};

onMounted(() => getPositions());
</script>

<style lang="sass" scoped>
@import './QTradePanelLeftBar'
</style>
../interfaces
