import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: '',
  }),
  getters: {
    isLogin: (state) => !!state.token,
  },
  actions: {
    async login(username: string, password: string) {
      if (username == "admin" && password == "secret") {
        this.token = 'JWT'
        if (import.meta.client) {
          localStorage.setItem("access", this.token);
        }
      } else {
        throw new Error("Invalid credentials");
      }
    },
    logout() {
      this.token = '';
      if (import.meta.client) {
        localStorage.removeItem("access");
      }
    },
    initAuth() {
      if (import.meta.client) {
        const token = localStorage.getItem("access");
        if (token) {
          this.token = token;
        }
      }
    },
  },
});