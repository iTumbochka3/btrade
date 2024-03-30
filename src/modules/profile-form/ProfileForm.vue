<template>
  <AForm class="profile-form" :model="formData">
    <!-- <AFormItem name="accountId"> -->
    <UInputWrapper label="Account ID">
      <AInput class="form-input__input" v-model:value="formData.accountId" />
    </UInputWrapper>
    <!-- </AFormItem> -->
    <!-- <AFormItem name="userName"> -->
    <UInputWrapper label="Username">
      <AInput v-model:value="formData.userName" />
    </UInputWrapper>
    <!-- </AFormItem> -->
    <!-- <AFormItem name="firstName"> -->
    <UInputWrapper label="First Name">
      <AInput v-model:value="formData.firstName" />
    </UInputWrapper>
    <!-- </AFormItem> -->
    <!-- <AFormItem name="lastName"> -->
    <UInputWrapper label="Last Name">
      <AInput v-model:value="formData.lastName" />
    </UInputWrapper>
    <!-- </AFormItem> -->
    <!-- <AFormItem name="email"> -->
    <UInputWrapper label="Email address">
      <AInput v-model:value="formData.email" />
    </UInputWrapper>
    <!-- </AFormItem> -->
    <!-- <AFormItem name="phone"> -->
    <UInputWrapper label="Phone Number">
      <AInput v-model:value="formData.phone" />
    </UInputWrapper>
    <!-- </AFormItem> -->
    <!-- <AFormItem name="referralLink"> -->
    <UInputWrapper label="Referral link">
      <AInput v-model:value="formData.referralLink" />
    </UInputWrapper>
    <!-- </AFormItem> -->

    <div class="profile-form__action">
      <UButton title="SAVE" @click="save" />
      <QSecondButton title="CHANGE PASSWORD" @click="changePassword" />
    </div>
  </AForm>
</template>

<script setup lang="ts">
import UButton from "@/UI/UButton/UButton.vue";
import QSecondButton from "@/UI/QSecondButton/QSecondButton.vue";
import UInputWrapper from "@/UI/UInputWrapper/UInputWrapper.vue";
import { ref } from "vue";

const formData = ref({
  accountId: "",
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  referralLink: "",
});

const save = () => {
  console.log("click");
};

const changePassword = () => {};
</script>

<style lang="sass">
@import './ProfileForm'
</style>
