import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from, next) => {
      // 获取 user 仓库
      const userStore = useUserStore()
      const isLoggedIn = userStore.isLoggedIn
      const roles = userStore.savedRoles

      const requiresAuth: boolean = to.meta.requiresAuth as boolean
      const allowedRoles: string[] = to.meta.allowedRoles as string[]

      if (requiresAuth) {
        // 需要登录
        if (isLoggedIn) {
          // 已经登录
          if (allowedRoles && !allowedRoles.includes(roles)) {
            // 是管理员
            next()
          }
          else {
            // 不是管理员
            next({ name: 'all' })
          }
        }
        else {
          next({ name: 'login' })
        }
      }
      else {
        // 不需要登录
        next()
      }
    })
  }
}
