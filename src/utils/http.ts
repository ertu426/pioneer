import { createFetch } from '@vueuse/core'

export const useMyFetch = createFetch({
  baseUrl: import.meta.env.VITE_API_URL, // 基础路由
  options: {
    immediate: true, // 是否在使用 useMyFetch 时自动运行 (推荐手动运行)
    timeout: 30000, // 请求过期时间 // 在请求前修改配置，如：注入 token 值
    async beforeFetch({ options }) {
      // const myToken = await getMyToken()
      // options.headers.Authorization = `Bearer ${myToken}`

      return { options }
    },
    // 在请求后处理数据，如：拦截错误、处理过期
    afterFetch({ data, response }) {
      return { data, response }
    },
    // 请求错误
    onFetchError({ data, error }) {
      console.error(error)
      return { data, error }
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})
