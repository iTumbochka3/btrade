<template>
  <div class="q-trade-chart">
    <apexchart :width="800" type="candlestick" :options="options" :series="series"></apexchart>
  </div>
</template>

<script setup lang="ts">
const options = {
  chart: {
    id: "vuechart-example",
  },
};
const series = [
  {
    data: [
      [1, [10, 20, 7, 18]],
      [2, [10, 20, 8, 19]],
      [3, [9, 18, 8, 17]],
      [4, [8, 15, 7, 14]],
      [5, [7, 9, 7, 8]],
      [6, [6, 10, 5, 9]],
      [7, [8, 12, 6, 10]],
    ],
  },
];

// FIXME: breakpoints
</script>

<style lang="sass" scoped>
@import './QTradeChart'
</style>
