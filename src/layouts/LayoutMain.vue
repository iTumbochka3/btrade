<template>
  <ALayout>
    <ALayoutHeader></ALayoutHeader>
    <ALayoutContent>
      <div class="container">
        <router-view />
      </div>
    </ALayoutContent>
    <ALayoutFooter></ALayoutFooter>
  </ALayout>
</template>

<script setup lang="ts">
import {
  Layout as ALayout,
  LayoutHeader as ALayoutHeader,
  LayoutContent as ALayoutContent,
  LayoutFooter as ALayoutFooter,
} from "ant-design-vue";
</script>

<style lang="sass" scoped>
.container
  background-color: #181D3B
  padding: 20px
</style>
