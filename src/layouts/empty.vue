<template>
  <main class="main">
    <RouterView />
    <TheFooter />
  </main>
</template>

<style scoped lang="scss">
.main {
  @apply w-full h-full text-gray-700 dark:text-gray-200 flex flex-col justify-center items-center;
}
</style>
