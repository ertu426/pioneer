<script setup lang="ts" name="XInput">
import type { InputProps } from './type'

defineProps<InputProps>()
const emit = defineEmits(['update:modelValue'])

function input(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="input">
    <input :id="id" :value="modelValue" :type="type" placeholder=" " @input="input">
    <label :for="id"><slot /></label>
  </div>
</template>

<style scoped lang="scss">
div {
  @apply w-full flex flex-col justify-center items-center relative my-2 mx-0;

  input {
    @apply text-xl block min-h-auto w-full rounded border-0 bg-transparent px-3 py-1.5 leading-loose outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none active:opacity-0;

    &:focus + label, &:not(:placeholder-shown) + label {
        @apply -translate-y-[0.9rem] scale-80;
    }
  }

  label {
    @apply pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-1.5 leading-loose transition-all duration-200 ease-out motion-reduce:transition-none bg-transparent uppercase;
  }
}
</style>
