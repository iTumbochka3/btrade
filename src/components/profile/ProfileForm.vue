<template>
  <AForm class="profile-form" :model="formData">
    <AFormItem label="Account ID" name="">
      <AInput />
    </AFormItem>
    <AFormItem name="" label="Username">
      <AInput />
    </AFormItem>
    <AFormItem name="" label="First Name">
      <AInput />
    </AFormItem>
    <AFormItem name="" label="Last Name">
      <AInput />
    </AFormItem>
    <AFormItem name="" label="Email address">
      <AInput />
    </AFormItem>
    <AFormItem name="" label="Phone Number">
      <AInput />
    </AFormItem>
    <AFormItem name="" label="Referral link">
      <AInput />
    </AFormItem>
    <AButton>SAVE</AButton>
    <AButton>CHANGE PASSWORD</AButton>
  </AForm>
</template>

<script setup lang="ts">
import { Form as AForm, FormItem as AFormItem, Button as AButton } from "ant-design-vue";
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
</script>

<style lang="sass"></style>
