import { defineStore } from "pinia";
import { ITradeCell } from "../interfaces";
import currencyFormat from "@/utils/currencyFormat";

interface State {
  balance: number;
  contract: number;
  profit: number;
  bet: number;
  positions: ITradeCell[];
}

const useTradeStore = defineStore("trade", {
  state: (): State => ({
    balance: 500,
    // FIXME: money or positions?
    contract: 0,
    profit: 0,
    bet: 10,
    positions: [],
  }),

  getters: {
    getBalance: (state) => currencyFormat(state.balance),
    getContract: (state) => String(state.contract),
    getProfit: (state) => currencyFormat(state.profit),
  },

  actions: {
    setBalance(value: number) {
      this.balance = value;
    },

    setBet(price: number) {
      this.bet = price;
    },

    getPositions() {
      // FIXME: mock
      const result: ITradeCell[] = [];
      for (let i = 0; i <= 36; i++) {
        result.push({
          index: i,
          value: (Math.random() * (6 - 4) + 4).toFixed(5),
          currency: 0,
        });
      }
      this.positions = result;
    },

    selectPosition(idx: number, price?: number) {
      const position = this.positions.find(({ index }) => index === idx);
      if (position) {
        position.active = true;
        position.currency += price ? price : this.bet;
      }
    },

    multiSelectPosition(index: number, selected: boolean) {
      this.positions = this.positions.map((item) => {
        if (index === 1 && item.index >= 1 && item.index <= 12) {
          item.active = selected;
          item.currency = selected ? this.bet / 12 : 0;
        }
        if (index === 2 && item.index >= 13 && item.index <= 24) {
          item.active = selected;
          item.currency = selected ? this.bet / 12 : 0;
        }
        if (index === 3 && item.index >= 25 && item.index <= 36) {
          item.active = selected;
          item.currency = selected ? this.bet / 12 : 0;
        }
        if (index === 4 && item.index % 3 === 1) {
          item.active = selected;
          item.currency = selected ? this.bet / 12 : 0;
        }
        if (index === 5 && item.index % 3 === 2) {
          item.active = selected;
          item.currency = selected ? this.bet / 12 : 0;
        }
        if (index === 6 && item.index > 0 && item.index % 3 === 0) {
          item.active = selected;
          item.currency = selected ? this.bet / 12 : 0;
        }
        return item;
      });
    },

    clearBets() {
      this.positions.forEach((item) => {
        item.active = false;
        item.currency = 0;
      });
    },
  },
});

export default useTradeStore;
