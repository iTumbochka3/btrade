<template>
  <AButton class="q-second-button" :disabled="disabled" @click="emits('click')">{{ title }}</AButton>
</template>

<script setup lang="ts">
import { Button as AButton } from "ant-design-vue";

defineProps({
  disabled: {
    type: Boolean,
    default: () => false,
  },
  title: {
    type: String,
    default: () => "",
  },
});

const emits = defineEmits(["click"]);
</script>

<style lang="sass">
@import './QSecondButton'
</style>
