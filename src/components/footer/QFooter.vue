<template>
  <div id="footer" />
  <div v-if="!route.meta.hideFooter" class="q-footer">
    <span class="q-footer__menu">About Us</span>
    <span class="q-footer__socials"></span>
    <span class="q-footer__copyright"> © 2016-2023 BTrade Brokerage Company. All rights reserved. </span>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="sass" scoped>
@import './QFooter'
</style>
