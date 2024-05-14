<template>
  <div class="">
    <intro-component :scrollToStart="scrollToStart" class=""/>
    <feature-component />
    <courses-component id="courseSection" />
    <free-register-component />
    <partner-component />
  </div>
</template>

<script>
import IntroComponent from '../components/mainComponents/IntroComponent.vue';
import FeatureComponent from '../components/mainComponents/FeatureComponent.vue';
import CoursesComponent from '../components/mainComponents/CoursesComponent.vue';
import FreeRegisterComponent from '../components/mainComponents/FreeRegisterComponent.vue';
import partnerComponent from '../components/mainComponents/partnerComponent.vue';
export default {
  components: {
    IntroComponent,
    FeatureComponent,
    CoursesComponent,
    FreeRegisterComponent,
    partnerComponent,
  },
  data() {
    return {
      show: true
    };
  },

  methods: {
    scrollToStart() {
      const section = document.getElementById('courseSection');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    },
  },
};
</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
