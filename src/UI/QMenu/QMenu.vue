<template>
  <span class="q-menu">
    <div class="q-menu-item" v-for="item in items" :key="item.label">
      <span class="q-menu-item__icon">
        <component :is="item.icon" />
      </span>
      {{ item.label }}
    </div>
  </span>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { IMenuItem } from "./interfaces";

defineProps({
  items: {
    type: Array as PropType<IMenuItem[]>,
    default: () => [],
  },
});
</script>

<style lang="sass" scoped>
@import './QMenu'
</style>
