<template>
  <!-- <ALayout class="layout-main"> -->
  <!-- <ALayoutHeader> -->
  <QHeader />
  <!-- </ALayoutHeader> -->
  <!-- <ALayoutContent> -->
  <div class="container">
    <router-view />
  </div>
  <!-- </ALayoutContent> -->
  <!-- <ALayoutFooter></ALayoutFooter> -->
  <!-- </ALayout> -->
</template>

<script setup lang="ts">
import QHeader from "@/components/header/QHeader.vue";
</script>

<style lang="sass" scoped>
.layout-main
  background-color: #181D3B
.container
  padding: 20px
</style>
