<script setup lang="ts" name="register">
import api from './api'

const { t } = useI18n()
const user = useUserStore()
const router = useRouter()

const registerData = reactive({
  username: '',
  password: '',
  confirmPassword: '',
})

async function handleRegister() {
  const { data } = await api.register(registerData)
  const req = data.value
  if (req.code === '200')
    user.setNewToken(req.data.token)
  router.push({ path: '/' })
}
</script>

<template>
  <div class="register">
    <h1>{{ t("register.title") }}</h1>
    <div class="form">
      <XInput id="username" v-model="registerData.username" type="text">
        {{ t('register.username') }}
      </XInput>
      <XInput id="password" v-model="registerData.password" type="password">
        {{ t('register.password') }}
      </XInput>
      <XInput id="confirmPassword" v-model="registerData.confirmPassword" type="password">
        {{ t('register.confirm_password') }}
      </XInput>
      <div class="link">
        <RouterLink to="/login">
          {{ t('login.title') }}
        </RouterLink>
        <RouterLink to="/login">
          {{ t('login.title') }}
        </RouterLink>
      </div>
      <XButton test="msg" @click="handleRegister">
        {{ t("register.button") }}
      </XButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.register {
  @apply w-full md:w-9/12 lg:w-6/12 xl:w-3/12 min-h-auto flex flex-col justify-center items-center;
  user-select: none;

  h1 {
    @apply text-3xl;
  }

  .form {
    @apply w-full flex flex-col justify-center items-center;

    .link {
      @apply w-full flex justify-between py-2 text-1;
    }
  }
}
</style>

<route lang="yaml" name="register">
meta:
  layout: empty
</route>
