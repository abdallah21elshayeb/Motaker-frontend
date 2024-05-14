<template>
  <div class="relative">
    <div class="flex items-center justify-center">
      <button
        href="#"
        @click="toggleVisibility"
        class="relative flex items-center text-secondaryColor"
      >
        <img :src="`/flag_${$i18n.locale}.svg`" alt="flag" class="w-8 h-8" />
        <span
          :class="{
            'ml-2': $i18n.locale === 'en',
            'mr-2': $i18n.locale === 'ar',
          }"
          >{{ $i18n.locale.toUpperCase() }}</span
        >
      </button>
    </div>

    <transition
      name="dropdown-fade"
      :dir="$i18n.locale == 'ar' ? 'ltr' : 'ltr'"
    >
      <ul
        v-if="isVisible"
        ref="dropdown"
        class="relative lg:absolute bottom-0 sm:bottom-auto left-0 lg:bg-white shadow rounded w-48 mt-2 py-1 z-20"
      >
        <li>
          <a
            href="#"
            ref="account"
            @click.prevent="setLocale('en')"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
          >
            <img src="/flag_en.svg" alt="english flag" class="w-8 h-8" />
            <span class="text-black ml-3">English</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            ref="account"
            @click.prevent="setLocale('ar')"
            class="flex items-center px-3 py-3 hover:bg-gray-200"
          >
            <img src="/flag_ar.svg" alt="arabic flag" class="w-8 h-8" />
            <span class="text-black ml-3">العربية</span>
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import Tr from '../../i18n/Translation';
export default {
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    };
  },
  mounted() {
    document.addEventListener('click', this.closeDropdown);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown);
  },
  methods: {
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.isVisible = false;
      }
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    hideDropdown() {
      (this.isVisible = false), (this.focusedIndex = 0);
    },
    async setLocale(locale) {
      const router = this.$router;
      this.$i18n.locale = locale;
      await Tr.switchLanguage(locale);
      try {
        await router.replace({ params: { locale: locale } });
      } catch (e) {
        console.log(e);
        router.push('/');
      }
      this.hideDropdown();
    },
  },
};
</script>
