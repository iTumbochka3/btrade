<template>
  <div class="q-trade-panel" :class="{ 'q-trade-panel_horizontal': mode === EModeView.HORIZONTAL }">
    <UCellPosition
      class="q-trade-panel__first-position"
      :class="{ 'q-trade-panel__first-position_horizontal': mode === EModeView.HORIZONTAL }"
      :item="store.positions?.[0]"
      @click="store.selectPosition"
    />
    <div
      class="q-trade-panel__positions"
      :class="{ 'q-trade-panel__positions_horizontal': mode === EModeView.HORIZONTAL }"
    >
      <UCellPosition
        v-for="item in store.positions.filter(({ index }) => index > 0)"
        :key="item.index"
        :item="item"
        @click="store.selectPosition"
      />
    </div>

    <UTradeButton v-for="num in 6" :class="getClassName(num)" @click="clickButtonSelect(num)" :key="num" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import UCellPosition from "../ui/UCellPosition/UCellPosition.vue";
import UTradeButton from "../ui/UTradeButton/UTradeButton.vue";
import useTradeStore from "../store";
import { EModeView } from "../constants";

const props = defineProps({
  mode: {
    type: String,
    default: EModeView.VERTICAL,
  },
});

const store = useTradeStore();

const buttonsStatus = reactive([false, false, false, false, false, false]);

const getClassName = (num: number) => {
  let className = `q-trade-panel-button-${num}`;
  if (props.mode === EModeView.HORIZONTAL) className += "_horizontal";
  return className;
};

const clickButtonSelect = (index: number) => {
  buttonsStatus[index - 1] = !buttonsStatus[index - 1];
  store.multiSelectPosition(index, buttonsStatus[index - 1]);
};

onMounted(() => store.getPositions());
</script>

<style lang="sass" scoped>
@import './QTradePanel'
</style>
