<template>
  <v-snackbar :absolute="true" multi-line v-model="store.show" :timeout="store.timeout">
    {{ store.getMessage }}
  </v-snackbar>
</template>

<script setup lang="ts">
import useMessageStore from "@/store/message";

const store = useMessageStore();
</script>
