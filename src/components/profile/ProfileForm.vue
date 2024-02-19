<template>
  <AForm class="profile-form" :model="formData">
    <AFormItem name="accountId" label="Account ID">
      <AInput />
    </AFormItem>
    <AFormItem name="userName" label="Username">
      <AInput />
    </AFormItem>
    <AFormItem name="firstName" label="First Name">
      <AInput />
    </AFormItem>
    <AFormItem name="lastName" label="Last Name">
      <AInput />
    </AFormItem>
    <AFormItem name="email" label="Email address">
      <AInput />
    </AFormItem>
    <AFormItem name="phone" label="Phone Number">
      <AInput />
    </AFormItem>
    <AFormItem name="referralLink" label="Referral link">
      <AInput />
    </AFormItem>

    <div class="action">
      <QButton title="SAVE" @click="save" />
      <QSecondButton title="CHANGE PASSWORD" />
    </div>
  </AForm>
</template>

<script setup lang="ts">
import QButton from "../../UI/QButton/QButton.vue";
import QSecondButton from "../../UI/QSecondButton/QSecondButton.vue";
import { Form as AForm, FormItem as AFormItem } from "ant-design-vue";
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
</script>

<style lang="sass">
.ant-form-item .ant-form-item-label >label
  color: #BAC0C7
.action
  display: grid
  gap: 18px
</style>
