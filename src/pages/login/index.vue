<script setup lang="ts">
import api from './api'

const { t } = useI18n()
const user = useUserStore()
const router = useRouter()

const loginData = reactive({
  username: '',
  password: '',
})

async function handleLogin() {
  const { data } = await api.login(loginData)
  const req = data.value
  if (req.code === '200')
    user.setNewToken(req.data.token)
  router.push({ path: '/' })
}
</script>

<template>
  <div class="login">
    <h1>{{ t("login.title") }}</h1>
    <div class="form">
      <XInput id="username" v-model="loginData.username" type="text">
        {{ t('login.username') }}
      </XInput>
      <XInput id="password" v-model="loginData.password" type="password">
        {{ t('login.password') }}
      </XInput>
      <XButton test="msg" @click="handleLogin">
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

<route lang="yaml" name="login">
meta:
  layout: empty
</route>
