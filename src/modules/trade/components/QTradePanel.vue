<template>
  <div class="q-trade-panel">
    <UCellPosition class="q-trade-panel__first-position" :item="store.positions?.[0]" @click="store.selectPosition" />
    <div class="q-trade-panel__positions">
      <UCellPosition
        v-for="item in store.positions.filter(({ index }) => index > 0)"
        :key="item.index"
        :item="item"
        @click="store.selectPosition"
      />
    </div>

    <UTradeButton v-for="num in 6" :class="`q-trade-panel-button-${num}`" @click="clickButtonSelect(num)" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import UCellPosition from "../ui/UCellPosition/UCellPosition.vue";
import UTradeButton from "../ui/UTradeButton/UTradeButton.vue";
import useTradeStore from "../store";
import { EModeView } from "../constants";

defineProps({
  mode: {
    type: String,
    default: EModeView.VERTICAL,
  },
});

const store = useTradeStore();

const buttonsStatus = reactive([false, false, false, false, false, false]);

const clickButtonSelect = (index: number) => {
  buttonsStatus[index - 1] = !buttonsStatus[index - 1];
  store.multiSelectPosition(index, buttonsStatus[index - 1]);
};

onMounted(() => store.getPositions());
</script>

<style lang="sass" scoped>
@import './QTradePanel'
</style>
