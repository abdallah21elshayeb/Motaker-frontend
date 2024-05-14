import { defineStore } from 'pinia';
const BaseURL = 'https://mobtaker-pro.cyclic.app/mobtaker';
export const registerStore = defineStore('register', {
  state: () => ({
    loading: false,
    registerStatus: false,
    freeRegisterStatus: false,
  }),
  getters: {},
  actions: {
    async submitRegister(data) {
      this.loading = true;
      try {
        const response = await fetch(BaseURL + '/register-course', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            courseRegisterTitle: data.courseTitle,
            name: data.name,
            email: data.email,
            address: data.address,
            city: data.city,
            phone: data.phone,
          }),
        });
        await response.json();
        this.loading = false;
        if (response.ok) {
          this.registerStatus = true;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async submitFreeRegister(data) {
      this.loading = true;
      try {
        const response = await fetch(BaseURL + '/free-register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
          }),
        });
        await response.json();
        this.loading = false;
        if (response.ok) {
          this.freeRegisterStatus = true;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
