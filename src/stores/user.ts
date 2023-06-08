import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const savedToken = useLocalStorage('token', '')
  const savedRoles = useLocalStorage('roles', '')

  const isLoggedIn = computed(() => savedToken.value !== '')

  function setNewToken(token: string) {
    savedToken.value = token

    savedRoles.value = 'admin'
  }

  return {
    setNewToken,
    savedRoles,
    savedToken,
    isLoggedIn,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
