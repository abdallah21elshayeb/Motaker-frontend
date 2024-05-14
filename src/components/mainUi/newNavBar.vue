<template>
  <main-nav-bar />
  <nav class="sticky top-0 bg-white w-full z-20 shadow-md">
    <div class="flex flex-wrap items-center justify-between mx-auto w-full p-2">
      <RouterLink to="/" class="flex h-16 mx-6 justify-center items-center">
        <img src="/logo.png" class="h-10 w-14 lg:h-14 lg:w-20" alt="logo" />
      </RouterLink>
      <div class="flex z-30 md:order-2">
        <button
          @click="toggleSidebar"
          class="text-secondaryColor focus:outline-none lg:hidden"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        v-if="isSidebarOpen"
        @click="toggleSidebar"
        class="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-40"
      ></div>
      <div :class="sidebarClasses" ref="sidebar">
        <!-- Close Button -->
        <button
          @click="toggleSidebar"
          class="absolute top-0 right-0 mt-4 mr-4 text-white focus:outline-none lg:hidden"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul
          class="flex flex-col items-center gap-2 text-secondaryColor lg:w-full md:p-0 font-medium md:flex-col lg:flex-row lg:space-x-8"
        >
        <li class="lg:hidden">
            <router-link
              to="/"
              @click="toggleSidebar"
              class="block py-2 px-3"
              aria-current="page"
              >{{ $t('nav.home') }}
            </router-link>
          </li>
          <li class="lg:hidden">
            <router-link
              to="/about"
              @click="toggleSidebar"
              class="block py-2 px-3"
              >{{ $t('nav.about') }}
            </router-link>
          </li>
          <li class="lg:hidden">
            <router-link
              to="/contact"
              @click="toggleSidebar"
              class="block py-2 px-3"
              >{{ $t('nav.contact') }}
            </router-link>
          </li>
          <li>
            <RouterLink
              to="/courses"
              @click="toggleSidebar"
              class="block py-4 lg:text-xl md:hover:bg-transparent md:hover:text-thirdColor md:p-0"
              aria-current="page"
            >
              {{ $t('subNav.finder') }}
            </RouterLink>
          </li>
          <li>
            <dropdown-button
              :toggle-menu="toggleSidebar"
              title="subNav.subjects"
              :categories="courses"
            ></dropdown-button>
          </li>
          <li>
            <RouterLink
              to="#"
              @click="toggleSidebar"
              class="block py-4 lg:text-xl md:hover:bg-transparent lg:hover:text-thirdColor md:p-0"
              aria-current="page"
            >
              {{ $t('subNav.certificate') }}</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="#"
              @click="toggleSidebar"
              class="block py-4 lg:text-xl md:hover:bg-transparent lg:hover:text-thirdColor md:p-0"
              aria-current="page"
            >
              {{ $t('subNav.formats') }}
            </RouterLink>
          </li>
          <li
            class="block lg:text-xl md:hover:bg-transparent lg:hover:text-thirdColor md:p-0"
          >
            <language-dropdown class="z-20" />
          </li>
          <!-- <li class="block md:p-0">
            <login-button />
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import MainNavBar from './MainNavBar.vue';
import LanguageDropdown from './languageDropdown.vue';
import DropdownButton from './DropdownButton.vue';
// import LoginButton from './LoginButton.vue';
export default {
  components: {
    MainNavBar,
    DropdownButton,
    LanguageDropdown,
    // LoginButton,
  },
  inject: ['courses'],
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  computed: {
    sidebarClasses() {
      return {
        'bg-thirdColor text-secondaryColor w-64 py-6 fixed inset-y-0 left-0 transform transition duration-300 ease-in-out z-50':
          this.isSidebarOpen,
        'hidden lg:flex': !this.isSidebarOpen,
      };
    },
  },

  methods: {
    toggleSidebar() {
      if (window.innerWidth <= 768) {
        this.isSidebarOpen = !this.isSidebarOpen;
      }
    },
  },
};
</script>
