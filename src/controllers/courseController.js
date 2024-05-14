import { defineStore } from 'pinia';
const BaseURL = 'https://mobtaker-pro.cyclic.app/mobtaker';
export const courseStore = defineStore('course', {
  state: () => ({
    loading: false,
    courses: [],
  }),

  getters: {},

  actions: {
    async getCourses() {
      this.loading = true;
      try {
        const response = await fetch(BaseURL + '/courses', {
          method: 'GET',
        });

        this.courses = await response.json();
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
