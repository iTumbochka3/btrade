import { ref } from "vue";
import { ITradeCell } from "../interfaces";
import { ESelectTypeButton } from "../constants";

const useTrade = () => {
  const positions = ref<ITradeCell[]>([]);

  const getPositions = () => {
    // FIXME: mock
    const result: ITradeCell[] = [];
    for (let i = 0; i <= 36; i++) {
      result.push({
        index: i,
        value: (Math.random() * (6 - 4) + 4).toFixed(5),
      });
    }
    positions.value = result;
  };

  const selectPosition = (idx: number, price?: number) => {
    const position = positions.value.find(({ index }) => index === idx);
    if (position) {
      position.active = !position.active;
      position.currency = price;
    }
  };

  const multiselectPosition = (index: number, type: ESelectTypeButton, selected: boolean) => {
    if (type === ESelectTypeButton.HORIZONTAL) {
      positions.value = positions.value.map((item) => {
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
      positions.value = positions.value.map((item) => {
        if (index === 1 && item.index % 3 === 1) {
          item.active = selected;
        }
        if (index === 2 && item.index % 3 === 2) {
          item.active = selected;
        }
        if (index === 3 && item.index > 0 && item.index % 3 === 0) {
          item.active = selected;
        }
        return item;
      });
    }
  };

  return {
    positions,
    getPositions,
    selectPosition,
    multiselectPosition,
  };
};

export default useTrade;
