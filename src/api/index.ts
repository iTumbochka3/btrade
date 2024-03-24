// import useAuthStore from "@/store/modules/auth";
// import axios from "axios";
// import Cookies from "js-cookie";

// const registerConfig = {
//   baseURL: `${import.meta.env.API_BASE_URL}`,
//   withCredentials: true,
// };
// export const RegisterAPIInstance = axios.create(registerConfig);

// const loginConfig = {
//   baseURL: import.meta.env.API_BASE_URL_AUTH,
//   withCredentials: true,
// };
// export const LoginAPIInstance = axios.create(loginConfig);
// const recoveryPasswordConfig = {
//   baseURL: `${import.meta.env.API_BASE_URL}`,
// };
// export const RecoveryPasswordAPI = axios.create(recoveryPasswordConfig);

// LoginAPIInstance.interceptors.request.use(
//   (config) => {
//     const updatedConfig = { ...config };

//     updatedConfig.headers.Authorization = `Basic ${import.meta.env.BASIC_AUTH_TOKEN}`;

//     return updatedConfig;
//   },
//   (error) => Promise.reject(error),
// );

// LoginAPIInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response.data.error_description.includes("Invalid refresh token")) {
//       await useAuthStore().onLogout();
//     }

//     return Promise.reject(error);
//   },
// );

// const defaultConfig = {
//   baseURL: `${import.meta.env.API_BASE_URL}`,
//   withCredentials: true,
// };
// export const DefaultAPIInstance = axios.create(defaultConfig);

// let isRefreshing = false;
// const refreshSubscribers: any[] = [];

// function subscribeTokenRefresh(onRefreshed: any) {
//   refreshSubscribers.push(onRefreshed);
// }

// function onRefreshed(token: any) {
//   refreshSubscribers.map((cb) => cb(token));
// }

// DefaultAPIInstance.interceptors.request.use(
//   (config) => {
//     const updatedConfig = { ...config };

//     updatedConfig.headers.Authorization = `Bearer ${Cookies.get("access_token")}` || null;

//     return updatedConfig;
//   },
//   (error) => Promise.reject(error),
// );

// DefaultAPIInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const { status } = error.response;
//     const originalRequest = error.config;
//     if (status === 401 && Boolean(Cookies.get("auth"))) {
//       if (!isRefreshing) {
//         isRefreshing = true;
//         return useAuthStore()
//           .onRefreshToken()
//           .then(() => {
//             isRefreshing = false;
//             onRefreshed(Cookies.get("access_token"));
//             originalRequest.headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
//             return DefaultAPIInstance(originalRequest);
//           })
//           .catch(() => Promise.reject(error));
//       }
//       return new Promise((resolve) => {
//         subscribeTokenRefresh(() => {
//           originalRequest.headers.Authorization = `Bearer ${Cookies.get("access_token")}`;
//           resolve(DefaultAPIInstance(originalRequest));
//         });
//       });
//     }
//     return Promise.reject(error);
//   },
// );
