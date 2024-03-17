<template>
  <div class="q-cell-info">
    <span class="q-cell-info__title">{{ title }}</span>
    <QButtonEye class="q-cell-info__eye" :class="{ 'q-cell-info__eye_hidden': !eye }" />
    <span class="q-cell-info__value" :class="getClassName()">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
import { ECellInfoStatus } from "./constants";
import QButtonEye from "@/assets/button-icons/QButtonEye.vue";

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
  eye: {
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
