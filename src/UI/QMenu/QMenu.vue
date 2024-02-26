<template>
  <span class="q-menu">
    <div class="q-menu-item" v-for="item in items" :key="item.label" @click="routeTo(item.path)">
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
import { useRouter } from "vue-router";

defineProps({
  items: {
    type: Array as PropType<IMenuItem[]>,
    default: () => [],
  },
});

const router = useRouter();

const routeTo = (path: string) => router.push(path);
</script>

<style lang="sass" scoped>
@import './QMenu'
</style>
