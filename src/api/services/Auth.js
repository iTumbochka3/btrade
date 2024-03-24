// import { DefaultAPIInstance, LoginAPIInstance } from '@/api'
// import showError, { errorKeycloakCatcher } from '@/utils/showErrors'
// import Cookies from 'js-cookie'

// const Auth = {
//   async login({ username, password }) {
//     const url = '/token'
//     const payload = new URLSearchParams()
//     payload.append('grant_type', 'password')
//     payload.append('client_id', import.meta.env.VITE_APP_API_CLIENT_ID)
//     payload.append('client_secret', import.meta.env.VITE_APP_API_CLIENT_SECRET)
//     payload.append('username', username)
//     payload.append('password', password)

//     try {
//       const { data } = await LoginAPIInstance.post(url, payload)
//       return data
//     }
//     catch (err) {
//       errorKeycloakCatcher(err)
//     }
//   },

//   async refreshToken() {
//     const url = '/token'
//     const payload = new URLSearchParams()
//     payload.append('client_id', import.meta.env.VITE_APP_API_CLIENT_ID)
//     payload.append('client_secret', import.meta.env.VITE_APP_API_CLIENT_SECRET)
//     payload.append('grant_type', 'refresh_token')
//     payload.append('refresh_token', Cookies.get('refresh_token'))

//     try {
//       const { data } = await LoginAPIInstance.post(url, payload)
//       return data
//     }
//     catch (err) {
//       showError(err)
//     }
//   },

//   async getUser() {
//     const url = `${import.meta.env.VITE_APP_API_AUS}/users/me`

//     try {
//       const { data } = await DefaultAPIInstance.get(url)
//       return data
//     }
//     catch (err) {
//       showError(err)
//     }
//   },
// }

// export default Auth
