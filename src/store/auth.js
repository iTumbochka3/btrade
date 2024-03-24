// TODO: do!
// import Auth from '@/api/services/main/Auth'
// import router from '@/router'
// import usePermStore from '@/store/modules/permissions'
// import { message } from 'ant-design-vue'
// import Cookies from 'js-cookie'
// import { defineStore } from 'pinia'

// const useAuthStore = defineStore('auth', {
//   state: () => ({
//     access_token: Cookies.get('access_token') || null,
//     refresh_token: Cookies.get('refresh_token') || null,
//     expires_in: Cookies.get('expires_in') || null,
//     auth: Boolean(Cookies.get('auth')) || null,
//     error: null,
//     user: Cookies.get('user') || null,
//   }),
//   getters: {
//     getAccessToken: state => state.access_token,
//     getRefreshToken: state => state.refresh_token,
//     getExpiresIn: state => state.expires_in,
//     isAuthenticated: state => state.auth,
//     getError: state => state.error,
//     getUser: state => JSON.parse(state?.user),
//   },
//   actions: {
//     async onLogin(data) {
//       message.loading({ content: 'Выполняется вход...', key: 'onLogin' })
//       await Auth.login(data)
//         .then(async (res) => {
//           this.setTokens(res)
//           await usePermStore().get()
//           await Auth.getUser().then(({ result: user }) => {
//             this.setAuth(true)
//             this.setUser(user)
//             message.destroy('onLogin')
//             router.push('/')
//           })
//         })
//         .catch(err => message.error({ content: err.message, key: 'onLogin' }))
//     },

//     async onLoginWithToken(inputToken, url) {
//       this.setTokens(inputToken)
//       await usePermStore().get()
//       await Auth.getUser().then(({ result: user }) => {
//         this.setAuth(true)
//         this.setUser(user)
//         router.push(url ?? '/')
//       })
//     },

//     async onRefreshToken() {
//       await Auth.refreshToken().then((auth) => {
//         this.setTokens(auth)
//       })
//     },

//     async onLogout(notRedirect = false) {
//       this.setAuth(false)
//       this.discardToken()
//       usePermStore().discard()
//       if (!notRedirect) {
//         await router.push('/login')
//       }
//     },

//     setTokens({ access_token, refresh_token, expires_in }) {
//       this.access_token = access_token
//       this.refresh_token = refresh_token
//       this.expires_in = expires_in
//       Cookies.set('access_token', access_token)
//       Cookies.set('refresh_token', refresh_token)
//       Cookies.set('expires_in', expires_in)
//     },

//     discardToken() {
//       this.auth = null
//       this.access_token = null
//       this.refresh_token = null
//       this.expires_in = null
//       this.user = null
//       Cookies.remove('access_token')
//       Cookies.remove('refresh_token')
//       Cookies.remove('expires_in')
//       Cookies.remove('auth')
//       Cookies.remove('user')
//     },

//     setAuth(auth) {
//       this.auth = auth
//       Cookies.set('auth', auth)
//     },

//     setUser(data) {
//       this.user = JSON.stringify(data)
//       Cookies.set('user', JSON.stringify(data))
//     },

//     setError(error) {
//       this.error = error
//     },
//   },
// })

// export default useAuthStore
