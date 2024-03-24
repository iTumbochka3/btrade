import axios from "axios";

const loginConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
};

export const LoginAPIInstance = axios.create(loginConfig);
