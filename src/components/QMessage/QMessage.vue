<template>
  <v-snackbar :absolute="true" multi-line v-model="getShow" :timeout="getTimeout"> {{ getMessage }} </v-snackbar>
</template>
<!-- FIXME: NOT WORKING! -->
<script setup lang="ts">
import useMessageStore from "@/store/modules/message";

const { getShow, getMessage, getTimeout } = useMessageStore();
</script>
