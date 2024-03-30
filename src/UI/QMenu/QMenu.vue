<template>
  <span class="q-menu">
    <span v-if="short" class="q-menu__short">
      <span class="q-menu-item__icon">
        <component :is="items.find((item) => item.label === route.name)?.icon" />
      </span>
      {{ route.name }}

      <v-menu activator="parent">
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" :value="index">
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </span>

    <span v-else class="q-menu__large">
      <QLogo />
      <span class="q-menu-list">
        <div class="q-menu-item" v-for="item in items" :key="item.label" @click="routeTo(item.path)">
          <span class="q-menu-item__icon">
            <component :is="item.icon" />
          </span>
          {{ item.label }}
        </div>
      </span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { IMenuItem } from "./interfaces";
import { useRoute, useRouter } from "vue-router";
import QLogo from "@/assets/QLogo.vue";

defineProps({
  items: {
    type: Array as PropType<IMenuItem[]>,
    default: () => [],
  },
  short: {
    type: Boolean,
    default: false,
  },
});

const route = useRoute();
const router = useRouter();

const routeTo = (path: string) => router.push(path);
</script>

<style lang="sass" scoped>
@import './QMenu'
</style>
