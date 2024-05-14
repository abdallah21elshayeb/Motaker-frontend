<template>
  <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'" class="bg-gray-100">
    <new-nav-bar />
    <div
      class="bg-gray-100 h-screen flex items-center justify-center"
      v-if="loading"
    >
      <mobtaker-loader></mobtaker-loader>
    </div>
    <div v-else>
      <RouterView :key="$route.path" />
      <footer-design />
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import newNavBar from './components/mainUi/newNavBar.vue';
import FooterDesign from './components/mainUi/FooterDesign.vue';
import MobtakerLoader from './components/mainUi/MobtakerLoader.vue';
import { mapState } from 'pinia';
import { courseStore } from './controllers/courseController';
import { computed } from 'vue';

export default {
  components: {
    newNavBar,
    FooterDesign,
    RouterView,
    MobtakerLoader,
  },
  data() {
    return {
      coursesList: [],
    };
  },
  computed: {
    ...mapState(courseStore, { loading: 'loading' }),
    getCoursesList() {
      console.log('Hello from app');
      return this.coursesList;
    },
  },
  methods: {
    async fetchCourses() {
      const coursesStore = courseStore();
      await coursesStore.getCourses();
      this.coursesList = coursesStore.courses;
    },
  },
  created() {
    this.fetchCourses();
  },
  provide() {
    return {
      courses: computed(() => this.coursesList),
    };
  },
};
</script>
