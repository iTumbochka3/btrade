<template>
  <AForm class="profile-form" :model="formData">
    <AFormItem name="accountId">
      <QInputWrapper label="Account ID">
        <AInput class="form-input__input" v-model:value="formData.accountId" />
      </QInputWrapper>
    </AFormItem>
    <AFormItem name="userName">
      <QInputWrapper label="Username">
        <AInput v-model:value="formData.userName" />
      </QInputWrapper>
    </AFormItem>
    <AFormItem name="firstName">
      <QInputWrapper label="First Name">
        <AInput v-model:value="formData.firstName" />
      </QInputWrapper>
    </AFormItem>
    <AFormItem name="lastName">
      <QInputWrapper label="Last Name">
        <AInput v-model:value="formData.lastName" />
      </QInputWrapper>
    </AFormItem>
    <AFormItem name="email">
      <QInputWrapper label="Email address">
        <AInput v-model:value="formData.email" />
      </QInputWrapper>
    </AFormItem>
    <AFormItem name="phone">
      <QInputWrapper label="Phone Number">
        <AInput v-model:value="formData.phone" />
      </QInputWrapper>
    </AFormItem>
    <AFormItem name="referralLink">
      <QInputWrapper label="Referral link">
        <AInput v-model:value="formData.referralLink" />
      </QInputWrapper>
    </AFormItem>

    <div class="action">
      <QButton title="SAVE" @click="save" />
      <QSecondButton title="CHANGE PASSWORD" @click="changePassword" />
    </div>
  </AForm>
</template>

<script setup lang="ts">
import QButton from "../../UI/QButton/QButton.vue";
import QSecondButton from "../../UI/QSecondButton/QSecondButton.vue";
import QInputWrapper from "../../UI/QInputWrapper/QInputWrapper.vue";
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

const changePassword = () => {};
</script>

<style lang="sass">
@import './ProfileForm'
.ant-form-item .ant-form-item-label >label
  color: #BAC0C7
.ant-input
  font-size: 22px
  border-radius: unset
  height: 75px
</style>
