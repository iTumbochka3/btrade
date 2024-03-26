<template>
  <div
    class="q-cell-bet"
    :class="{ 'q-cell-bet_selected': selected, 'q-cell-bet_disabled': disabled }"
    @click="onClick"
  >
    <span class="q-cell-bet__price">
      {{ price }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  price: {
    type: Number,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["select"]);

const onClick = () => {
  if (props.disabled) emits("select");
};
</script>

<style lang="sass" scoped>
@import './QCellBet'
</style>
