import { defineStore } from "pinia";
import Auth from "@/api/services/auth";

const useAuthStore = defineStore("auth", {
  state: () => ({}),

  getters: {},

  actions: {
    login(login: string, password: string) {
      Auth.login(login, password);
    },
  },
});

export default useAuthStore;
