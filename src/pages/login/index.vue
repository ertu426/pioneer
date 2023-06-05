<script setup lang="ts">
const { t } = useI18n()

const user = reactive({
  username: '',
  password: '',
})

function login() {
  // TODO: login
}
</script>

<template>
  <div class="login">
    <h1>{{ t("login.title") }}</h1>
    <div class="form">
      <XInput id="username" v-model="user.username" type="text">
        {{ t('login.username') }}
      </XInput>
      <XInput id="password" v-model="user.password" type="password">
        {{ t('login.password') }}
      </XInput>
      <XButton test="msg" @click="login">
        {{ t("login.button") }}
      </XButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  @apply w-full md:w-9/12 lg:w-6/12 xl:w-3/12 min-h-auto flex flex-col justify-center items-center;
  user-select: none;

  h1 {
    @apply text-3xl;
  }

  .form {
    @apply w-full flex flex-col justify-center items-center;
  }
}
</style>

<route lang="yaml">
meta:
  layout: empty
</route>
