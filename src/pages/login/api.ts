export default {
  login: (data = {}) => useMyFetch('/auth/login').post(data).json(),
}
