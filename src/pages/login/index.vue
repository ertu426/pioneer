<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="login">
    <h1>{{ t("login.title") }}</h1>
    <div class="form">
      <div>
        <input id="username" type="text" placeholder=" ">
        <label for="username">{{ t("login.username") }}</label>
      </div>
      <div>
        <input id="password" type="password" placeholder=" ">
        <label for="password">{{ t("login.password") }}</label>
      </div>
      <button>{{ t("login.button") }}</button>
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

    div {
      @apply w-full flex flex-col justify-center items-center relative my-2 mx-0;

      input {
        @apply text-xl block min-h-auto w-full rounded border-0 bg-transparent px-3 py-1.5 leading-loose outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none active:opacity-0;

        &:focus + label, &:not(:placeholder-shown) + label {
          @apply -translate-y-[0.9rem] scale-80;
        }
      }

      label {
        @apply pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-1.5 leading-loose transition-all duration-200 ease-out motion-reduce:transition-none bg-transparent;
      }
    }

    button {
      @apply w-full inline-block rounded px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal transition duration-150 ease-in-out focus:ring-0 text-white bg-sky focus:bg-sky-600 active:bg-sky-600 active:bg-sky-700 shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)];
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: empty
</route>
