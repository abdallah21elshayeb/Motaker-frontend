<template>
  <div class="grid grid-rows-1 place-items-center text-center">
    <div class="w-full p-5 lg:w-5/6 lg:p-10">
      <div class="grid place-items-center text-center">
        <p class="text-secondaryColor text-sm font-bold lg:text-5xl">
          {{ $t('mainPage.courses') }}
        </p>
        <div class="h-2 w-1/4 my-4 bg-thirdColor"></div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-6 m-8">
        <div v-for="category in courses" :key="category.category">
          <div
            class="relative p-2 bg-thirdColor h-full w-full font-semibold text-secondaryColor rounded overflow-hidden transition-all duration-150 ease-in-out group"
          >
            <router-link @click="scrollToTop" :to="'course/' + category.id">
              <span
                class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondaryColor group-hover:h-full"
              ></span>
              <p
                class="relative text-sm lg:text-base lg:font-semibold group-hover:text-thirdColor my-2"
              >
                {{ $t(category.category) }}
              </p>
              <span
                class="absolute top-1/3 left-4 h-20"
                v-html="category.icon"
              ></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  inject: ['courses'],

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
