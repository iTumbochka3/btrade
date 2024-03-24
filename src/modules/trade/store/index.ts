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
    // async set(type, payload) {
    //   await Users.setSettings(type, payload)
    //     .then(() => this.setColumns(type, payload))
    //     .catch((e) => {
    //       message.error(e.message);
    //     });
    // },

    setBalance(value: number) {
      this.balance = value;
    },

    // async get() {
    // try {
    // const data = await Users.getSettings(type);
    // if (data?.result) {
    //   this.setColumns(type, data.result);
    // }
    // } catch (e) {
    // message.error(e.message);
    // }
    // },
  },
});

export default useTradeStore;
