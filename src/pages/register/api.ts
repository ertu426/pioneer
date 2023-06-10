export default {
  register: (data = {}) => useMyFetch('/auth/register').post(data).json(),
}
