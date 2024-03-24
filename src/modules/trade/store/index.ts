import { defineStore } from "pinia";

const useTradeStore = defineStore("trade", {
  state: () => ({
    balance: 0,
    contract: 0,
    profit: 0,
  }),

  getters: {
    getBalance: (state) => state.balance,
    getContract: (state) => state.contract,
    getProfit: (state) => state.profit,
  },

  actions: {
    setBalance(value: number) {
      this.balance = value;
    },
  },
});

export default useTradeStore;
