<template>
  <div v-if="loading">
    <mobtaker-loader></mobtaker-loader>
  </div>
  <div v-else>
    <course-registration-component
      :registerPopup="registerPopup"
      :courseName="courseTitle"
      @close-popup="closePopup"
    ></course-registration-component>
    <course-details-component
      :coursesContents="contents"
      @open-popup="openPopup"
      @course-title="receiveData"
    ></course-details-component>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { courseStore } from '../controllers/courseController';
import { registerStore } from '../controllers/registerController';
import MobtakerLoader from '../components/mainUi/MobtakerLoader.vue';
import courseDetailsComponent from '../components/mainComponents/courseDetailsComponent.vue';
import CourseRegistrationComponent from '../components/mainComponents/CourseRegistrationComponent.vue';
export default {
  inject: ['courses'],
  components: {
    MobtakerLoader,
    courseDetailsComponent,
    CourseRegistrationComponent,
  },

  data() {
    return {
      registerPopup: false,
      courseTitle: '',
    };
  },
  computed: {
    ...mapState(courseStore, { loading: 'loading' }),
    contents() {
      let allContents = [];
      this.courses.forEach((course) => {
        allContents = allContents.concat(course.content);
      });
      return allContents;
    },
  },
  methods: {
    openPopup() {
      this.registerPopup = true;
    },
    closePopup() {
      const registerStoreData = registerStore();
      this.registerPopup = false;
      registerStoreData.registerStatus = false;
    },
    receiveData(title) {
      this.courseTitle = title;
    },
  },
};
</script>
