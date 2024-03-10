<template>
  <div class="q-profile-page">
    <span class="q-profile-page__title">PROFILE</span>
    <ProfileForm />
  </div>
</template>

<script setup lang="ts">
// FIXME: temp
import ProfileForm from "@/modules/profile-form/ProfileForm.vue";
</script>

<style lang="sass" scoped>
.q-profile-page
  padding: 40px
  width: 100vh
  display: grid
  gap: 50px
  &__title
    text-align: left
    font-size: 28px
</style>
