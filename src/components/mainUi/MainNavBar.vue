<template>
  <nav
    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
    class="hidden lg:block lg:h-14 bg-secondaryColor"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2"
    >
      <div class="hidden w-full md:block md:w-auto">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          <li dir="ltr" class="flex">
            <span
              ><svg
                class="w-8 h-8 mt-1 mx-2 text-thirdColor"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                />
              </svg>
            </span>
            <span class="mt-2 text-thirdColor">+966565006630</span>
          </li>
          <li dir="ltr" class="flex">
            <span
              ><svg
                class="w-[30px] h-[32px] mt-1 mx-2 text-thirdColor"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                />
              </svg>
            </span>
            <span class="mt-2 text-thirdColor">info@mobtakerpro.com</span>
          </li>
        </ul>
      </div>
      <div class="hidden w-full md:block md:w-auto">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 px-3 text-thirdColor"
              aria-current="page"
              >{{ $t('nav.home') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="block py-2 px-3 text-thirdColor rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0"
              >{{ $t('nav.about') }}
            </router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              class="block py-2 px-3 text-thirdColor rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0"
              >{{ $t('nav.contact') }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
