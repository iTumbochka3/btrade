import { defineStore } from "pinia";

const useMessageStore = defineStore("message", {
  state: () => ({
    show: true,
    message: "",
    timeout: 3000,
  }),

  getters: {
    getShow: (state) => state.show,
    getMessage: (state) => state.message,
    getTimeout: (state) => state.timeout,
  },

  actions: {
    setMessage(text: string) {
      this.message = text;
      this.show = true;
    },
  },
});

export default useMessageStore;
