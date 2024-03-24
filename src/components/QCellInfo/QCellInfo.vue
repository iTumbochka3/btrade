<template>
  <div class="q-cell-info">
    <span class="q-cell-info__title">{{ title }}</span>
    <QButtonHideIcon class="q-cell-info__eye" :class="{ 'q-cell-info__eye_hidden': !hideShow }" />
    <span class="q-cell-info__value" :class="getClassName()">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
import { ECellInfoStatus } from "./constants";
import QButtonHideIcon from "@/assets/button-icons/QButtonHideIcon.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: ECellInfoStatus.ACTIVE,
  },
  hideShow: {
    type: Boolean,
    default: false,
  },
});

// TODO: disabled

const getClassName = () => {
  switch (props.status) {
    case ECellInfoStatus.ACTIVE:
      return "q-cell-info__value_active";
    case ECellInfoStatus.PENDING:
      return "q-cell-info__value_pending";
    case ECellInfoStatus.ERROR:
      return "q-cell-info__value_error";
  }
};
</script>

<style lang="sass" scoped>
@import './QCellInfo'
</style>
