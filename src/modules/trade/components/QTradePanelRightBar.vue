<template>
  <div class="q-trade-panel-right-bar">
    <div class="q-trade-panel-right-bar__info">
      <QCellInfo title="Balance" :value="currencyFormat(store.getBalance)" :hide-show="true" @click="addBalance" />
      <QCellInfo title="Contract" :value="String(contract)" />
      <QCellInfo title="Profit" :value="currencyFormat(profit)" />
    </div>
    <div class="q-trade-panel-right-bar__bets">
      <QCellBet
        v-for="(price, index) in prices"
        :key="price"
        :price="price"
        :selected="selected[index]"
        @select="onSelect(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import QCellInfo from "@/components/QCellInfo/QCellInfo.vue";
import QCellBet from "@/components/QCellBet/QCellBet.vue";
import currencyFormat from "@/utils/currencyFormat";
import useTradeStore from "../store";
import useMessageStore from "@/store/message";

const store = useTradeStore();
const messageStore = useMessageStore();

const contract = ref(8);
const profit = ref(2500);
const prices = [10, 25, 50, 100, 250, 500, 1000];
const selected = reactive([false, false, false, false, false, false, false]);

const onSelect = (index: number) => {
  selected[index] = !selected[index];
};

const addBalance = () => {
  // FIXME: temp
  store.setBalance(1000);
  messageStore.setMessage("HELLO");
};
</script>

<style lang="sass" scoped>
@import './QTradePanelRightBar'
</style>
