import axios from 'axios'
import subscribe from '$store/subscribe'

const instance = axios.create({
  baseURL: 'https://baby-todo.onrender.com',
  // baseURL: 'https://young-coders-todo-app.herokuapp.com',
  headers: {
    common: {
      authorization: undefined,
      'exclude-socket': undefined,
    },
  },
})

subscribe(
  (state) => state.user.jwt,
  (token) => {
    instance.defaults.headers.common.authorization = `Bearer ${token}`

    if (token) {
      localStorage.setItem('jwt-token', token)
    } else {
      localStorage.removeItem('jwt-token')
    }
  }
)

subscribe(
  (state) => state.user.socketId,
  (socketId) => {
    instance.defaults.headers.common['exclude-socket'] = socketId
  }
)

export default async (method, ...args) => {
  try {
    const response = await instance[method](...args)
    return [undefined, response.data.data || response.data]
  } catch (err) {
    return [err.response?.data?.message || err.message]
  }
}
