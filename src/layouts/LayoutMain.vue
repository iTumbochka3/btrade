<template>
  <div class="layout-main">
    <QHeader />
    <div class="container" :class="[{ container_mobile: mobile }]">
      <router-view />
    </div>
    <QFooter />
  </div>
</template>

<script setup lang="ts">
import QHeader from "@/components/header/QHeader.vue";
import QFooter from "@/components/footer/QFooter.vue";

import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
</script>

<style lang="sass" scoped>
@import './LayoutMain'
</style>
