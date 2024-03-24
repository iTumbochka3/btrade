import { defineStore } from "pinia";
import { ITradeCell } from "../interfaces";
import { ESelectTypeButton } from "../constants";

interface State {
  balance: number;
  contract: number;
  profit: number;
  bet: number;
  positions: ITradeCell[];
  activePositions: ITradeCell[];
}

const useTradeStore = defineStore("trade", {
  state: (): State => ({
    balance: 0,
    contract: 0,
    profit: 0,
    bet: 0,
    positions: [],
    activePositions: [],
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
        });
      }
      this.positions = result;
    },

    selectPosition(idx: number, price?: number) {
      const position = this.positions.find(({ index }) => index === idx);
      if (position) {
        position.active = !position.active;
        position.currency = price;
      }
    },

    multiselectPosition(index: number, type: ESelectTypeButton, selected: boolean) {
      // TODO: add money
      if (type === ESelectTypeButton.HORIZONTAL) {
        this.positions = this.positions.map((item) => {
          if (index === 1 && item.index >= 1 && item.index <= 12) {
            item.active = selected;
          }
          if (index === 2 && item.index >= 13 && item.index <= 24) {
            item.active = selected;
          }
          if (index === 3 && item.index >= 25 && item.index <= 36) {
            item.active = selected;
          }
          return item;
        });
      } else if (type === ESelectTypeButton.VERTICAL) {
        this.positions = this.positions.map((item) => {
          if (index === 4 && item.index % 3 === 1) {
            item.active = selected;
          }
          if (index === 5 && item.index % 3 === 2) {
            item.active = selected;
          }
          if (index === 6 && item.index > 0 && item.index % 3 === 0) {
            item.active = selected;
          }
          return item;
        });
      }
    },
  },
});

export default useTradeStore;
