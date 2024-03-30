<template>
  <div class="q-setting">
    <v-menu>
      <template v-slot:activator="{ props }">
        <QNavigationIcon v-bind="props" />
      </template>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import QNavigationIcon from "@/assets/icons/QNavigationIcon.vue";
</script>

<style lang="sass" scoped>
@import './QSetting'
</style>
