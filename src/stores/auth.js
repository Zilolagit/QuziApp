import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    id : 0,
    username : "",
    password : "",
    country : [],
    t_number : ""
  }),
})