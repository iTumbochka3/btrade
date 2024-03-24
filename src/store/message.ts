import { defineStore } from "pinia";

const useMessageStore = defineStore("message", {
  state: () => ({
    show: false,
    message: "",
    timeout: 3000,
  }),

  getters: {
    getMessage: (state) => state.message,
  },

  actions: {
    setMessage(text: string) {
      this.message = text;
      this.show = true;
    },
  },
});

export default useMessageStore;
