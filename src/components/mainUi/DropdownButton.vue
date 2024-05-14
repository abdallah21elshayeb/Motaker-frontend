<template>
  <div class="relative group cursor-pointer">
    <div class="flex items-center justify-center">
      <button
        class="relative menu-hover my-2 py-2 font-medium text-secondaryColor lg:group-hover:text-thirdColor lg:text-xl lg:mx-4"
      >
        {{ $t(title) }}
      </button>
      <span
        :class="{
          ' lg:right-2': $i18n.locale === 'en',
          ' lg:left-2': $i18n.locale === 'ar',
        }"
        class="relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-4 w-4 transition-transform duration-300 transform rotate-0 lg:group-hover:text-thirdColor group-hover:rotate-180"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </span>
    </div>

    <ul
      class="invisible absolute overflow-y-auto max-h-48 lg:max-h-fit z-50 py-1 px-4 text-gray-800 shadow-xl group-hover:visible lg:group-hover:absolute group-hover:relative lg:absolute lg:group-hover:grid lg:group-hover:grid-cols-3 lg:w-screen lg:bg-white lg:max-w-screen-lg lg:overflow-y-hidden"
    >
      <li
        v-for="category in categories"
        :key="category.category"
        class="flex items-center m-2"
      >
        <RouterLink
          :to="{
            name: 'course',
            params: { courseId: category.id, title: category.id },
          }"
          append="false"
          @click="toggleMenu"
          class="text-secondaryColor text-sm m-4 w-fit font-semibold lg:hover:text-thirdColor"
          >{{ $t(category.category) }}
        </RouterLink>
        <svg
          :class="{ 'rotate-180': $i18n.locale === 'ar' }"
          class="w-2 h-2 text-thirdColor"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          />
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['title', 'categories', 'toggleMenu'],
  data() {
    return {
      isMenuOpen: true,
    };
  },
  methods: {
    closeDropdown() {
      this.isMenuOpen = false;
    },
  },
};
</script>
