<template>
  <div class="layout-main">
    <QHeader />
    <div class="container">
      <router-view />
    </div>
    <QFooter />
  </div>
</template>

<script setup lang="ts">
import QHeader from "@/components/header/QHeader.vue";
import QFooter from "@/components/footer/QFooter.vue";
</script>

<style lang="sass" scoped>
@import './LayoutMain'
</style>
