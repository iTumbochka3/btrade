<template>
  <div
    class="u-cell-bet"
    :class="{ 'u-cell-bet_selected': selected, 'u-cell-bet_disabled': disabled }"
    @click="onClick"
  >
    <span class="u-cell-bet__price">
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
  if (!props.disabled) emits("select");
};
</script>

<style lang="sass" scoped>
@import './UCellBet'
</style>
