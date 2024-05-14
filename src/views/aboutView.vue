<template>
  <div class="space-y-16">
    <div dir="ltr" class="relative w-full">
      <div class="w-full bg-black">
        <img
          src="https://media.istockphoto.com/id/1416335096/photo/businessman-hand-holding-smart-phone-with-icon-mobile-phone-mail-telephone-and-address.webp?b=1&s=170667a&w=0&k=20&c=O39_wq7HB2oZHV3pyeZDxFAq0Xb_zNvLKrAIEWDVveY="
          alt="aboutUs"
          class="object-cover h-[400px] w-full"
        />
      </div>
      <div class="absolute top-1/3 mx-8">
        <p class="text-lg font-bold text-thirdColor lg:text-3xl">
          {{ $t('aboutPage.about') }}
        </p>
        <p class="text-sm max-w-xl text-white lg:text-2xl">
          {{ $t('aboutPage.aboutDetails') }}
        </p>
      </div>
    </div>
    <div class="flex justify-center w-full">
      <div
        class="grid grid-cols-1 w-2/3 space-y-4  place-items-center gap-x-8 lg:grid-cols-2"
      >
        <div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D"
              alt="dubai"
            />
          </div>
        </div>
        <div>
          <div class="space-y-4 ">
            <p class="text-lg text-thirdColor font-bold lg:text-3xl">
              {{ $t('aboutPage.ourCompany') }}
            </p>
            <p class="text-sm text-secondaryColor max-w-lg lg:text-2xl">
              {{ $t('aboutPage.ourCompanyDetails') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-secondaryColor mb-40 w-full">
      <div
        class="grid grid-cols-2 lg:grid-cols-4 place-items-center h-80 w-full"
      >
        <div v-for="analytic in analytics" :key="analytic">
          <odometer-numbers
            :icon="analytic.icon"
            :title="analytic.title"
            :targetCount="analytic.number"
          ></odometer-numbers>
        </div>
      </div>
    </div>
    <div class="flex justify-center w-full">
      <div
        class="grid grid-cols-1 w-2/3 space-y-4  place-items-center gap-x-8 lg:grid-cols-2"
      >
        <div>
          <div class="space-y-4 ">
            <p class="text-lg text-thirdColor font-bold lg:text-3xl">
              {{ $t('aboutPage.vision') }}
            </p>
            <p class="text-sm text-secondaryColor max-w-lg lg:text-2xl">
              {{ $t('aboutPage.visionDetails') }}
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://img.freepik.com/premium-photo/image-human-eye-process-scanning-mixed-media_641298-8910.jpg"
              alt="dubai"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center w-full">
      <div class="w-2/3 space-y-6 text-center">
        <p class="text-lg text-thirdColor font-bold lg:text-3xl">
          {{ $t('aboutPage.message') }}
        </p>
        <p class="text-sm text-secondaryColor lg:text-2xl">
          {{ $t('aboutPage.messageDetails') }}
        </p>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import OdometerNumbers from '../components/mainUi/OdometerNumbers.vue';
export default {
  components: {
    OdometerNumbers,
  },
  data() {
    return {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="w-6 lg:w-10 h-6 lg:h-10" viewBox="0 0 256 256" xml:space="preserve">
                <defs>
                </defs>
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                  <path d="M 45 49.519 L 45 49.519 c -7.68 0 -13.964 -6.284 -13.964 -13.964 v -5.008 c 0 -7.68 6.284 -13.964 13.964 -13.964 h 0 c 7.68 0 13.964 6.284 13.964 13.964 v 5.008 C 58.964 43.236 52.68 49.519 45 49.519 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(110,177,225); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 52.863 51.438 c -2.362 1.223 -5.032 1.927 -7.863 1.927 s -5.501 -0.704 -7.863 -1.927 C 26.58 53.014 18.414 62.175 18.414 73.152 v 14.444 c 0 1.322 1.082 2.403 2.403 2.403 h 48.364 c 1.322 0 2.403 -1.082 2.403 -2.403 V 73.152 C 71.586 62.175 63.42 53.014 52.863 51.438 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(110,177,225); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 71.277 34.854 c -2.362 1.223 -5.032 1.927 -7.863 1.927 c -0.004 0 -0.007 0 -0.011 0 c -0.294 4.412 -2.134 8.401 -4.995 11.43 c 10.355 3.681 17.678 13.649 17.678 24.941 v 0.263 h 11.511 c 1.322 0 2.404 -1.082 2.404 -2.404 V 56.568 C 90 45.59 81.834 36.429 71.277 34.854 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(113,212,86); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 63.414 0 c -7.242 0 -13.237 5.589 -13.898 12.667 c 8 2.023 13.947 9.261 13.947 17.881 v 2.385 c 7.657 -0.027 13.914 -6.298 13.914 -13.961 v -5.008 C 77.378 6.284 71.094 0 63.414 0 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(113,212,86); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 13.915 73.152 c 0 -11.292 7.322 -21.261 17.677 -24.941 c -2.861 -3.029 -4.702 -7.019 -4.995 -11.43 c -0.004 0 -0.007 0 -0.011 0 c -2.831 0 -5.5 -0.704 -7.863 -1.927 C 8.166 36.429 0 45.59 0 56.568 v 14.444 c 0 1.322 1.082 2.404 2.404 2.404 h 11.511 V 73.152 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(240,88,47); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 26.536 32.932 v -2.385 c 0 -8.62 5.946 -15.858 13.947 -17.881 C 39.823 5.589 33.828 0 26.586 0 c -7.68 0 -13.964 6.284 -13.964 13.964 v 5.008 C 12.622 26.635 18.879 32.905 26.536 32.932 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(240,88,47); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
                </svg>`,
      analytics: [
        {
          number: 1438,
          title: 'aboutPage.client',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="w-6 lg:w-10 h-6 lg:h-10" viewBox="0 0 256 256" xml:space="preserve">
                <defs>
                </defs>
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                  <path d="M 45 49.519 L 45 49.519 c -7.68 0 -13.964 -6.284 -13.964 -13.964 v -5.008 c 0 -7.68 6.284 -13.964 13.964 -13.964 h 0 c 7.68 0 13.964 6.284 13.964 13.964 v 5.008 C 58.964 43.236 52.68 49.519 45 49.519 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(110,177,225); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 52.863 51.438 c -2.362 1.223 -5.032 1.927 -7.863 1.927 s -5.501 -0.704 -7.863 -1.927 C 26.58 53.014 18.414 62.175 18.414 73.152 v 14.444 c 0 1.322 1.082 2.403 2.403 2.403 h 48.364 c 1.322 0 2.403 -1.082 2.403 -2.403 V 73.152 C 71.586 62.175 63.42 53.014 52.863 51.438 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(110,177,225); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 71.277 34.854 c -2.362 1.223 -5.032 1.927 -7.863 1.927 c -0.004 0 -0.007 0 -0.011 0 c -0.294 4.412 -2.134 8.401 -4.995 11.43 c 10.355 3.681 17.678 13.649 17.678 24.941 v 0.263 h 11.511 c 1.322 0 2.404 -1.082 2.404 -2.404 V 56.568 C 90 45.59 81.834 36.429 71.277 34.854 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(113,212,86); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 63.414 0 c -7.242 0 -13.237 5.589 -13.898 12.667 c 8 2.023 13.947 9.261 13.947 17.881 v 2.385 c 7.657 -0.027 13.914 -6.298 13.914 -13.961 v -5.008 C 77.378 6.284 71.094 0 63.414 0 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(113,212,86); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 13.915 73.152 c 0 -11.292 7.322 -21.261 17.677 -24.941 c -2.861 -3.029 -4.702 -7.019 -4.995 -11.43 c -0.004 0 -0.007 0 -0.011 0 c -2.831 0 -5.5 -0.704 -7.863 -1.927 C 8.166 36.429 0 45.59 0 56.568 v 14.444 c 0 1.322 1.082 2.404 2.404 2.404 h 11.511 V 73.152 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(240,88,47); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 26.536 32.932 v -2.385 c 0 -8.62 5.946 -15.858 13.947 -17.881 C 39.823 5.589 33.828 0 26.586 0 c -7.68 0 -13.964 6.284 -13.964 13.964 v 5.008 C 12.622 26.635 18.879 32.905 26.536 32.932 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(240,88,47); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
                </svg>`,
        },
        {
          number: 7000,
          title: 'aboutPage.training',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="w-6 lg:w-10 h-6 lg:h-10" viewBox="0 0 256 256" xml:space="preserve">
                  <defs>
                  </defs>
                  <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                    <path d="M 45 0 C 20.187 0 0 20.187 0 45 c 0 24.813 20.187 45 45 45 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 z M 66.071 49.5 H 45 c -2.485 0 -4.5 -2.015 -4.5 -4.5 V 23.929 c 0 -2.485 2.015 -4.5 4.5 -4.5 s 4.5 2.015 4.5 4.5 V 40.5 h 16.571 c 2.485 0 4.5 2.015 4.5 4.5 S 68.557 49.5 66.071 49.5 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  </g>
                  </svg>`,
        },
        {
          number: 50,
          title: 'aboutPage.certificate',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="w-6 lg:w-10 h-6 lg:h-10" viewBox="0 0 256 256" xml:space="preserve">
                  <defs>
                  </defs>
                  <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                    <path d="M 86.782 70.74 H 70.817 h -1.99 c 0 4.958 4.019 8.977 8.977 8.977 c 0.337 0 0.668 -0.022 0.995 -0.058 c 0.327 0.036 0.658 0.058 0.995 0.058 c 4.958 0 8.977 -4.019 8.977 -8.977 H 86.782 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(127,198,220); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 79.795 79.717 H 21.196 c -4.958 0 -8.977 -4.019 -8.977 -8.977 V 8.977 l 24.97 -4.489 L 61.84 0 c 4.958 0 8.977 4.019 8.977 8.977 V 70.74 C 70.818 75.698 74.837 79.717 79.795 79.717" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(213,233,240); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 58.389 36.37 H 22.773 c -0.806 0 -1.459 -0.654 -1.459 -1.459 c 0 -0.806 0.653 -1.459 1.459 -1.459 h 35.616 c 0.806 0 1.459 0.654 1.459 1.459 C 59.848 35.717 59.195 36.37 58.389 36.37 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(127,198,220); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 58.389 48.318 H 22.773 c -0.806 0 -1.459 -0.654 -1.459 -1.459 s 0.653 -1.459 1.459 -1.459 h 35.616 c 0.806 0 1.459 0.654 1.459 1.459 S 59.195 48.318 58.389 48.318 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(127,198,220); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 61.84 0 c -4.958 0 -8.977 4.019 -8.977 8.977 H 1.228 C 1.228 4.019 5.247 0 10.205 0 H 61.84" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(127,198,220); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 40.083 71.672 h -6.14 v 8.052 v 9.62 c 0 0.568 0.673 0.866 1.094 0.486 l 4.607 -4.162 c 0.249 -0.225 0.629 -0.225 0.878 0 l 4.607 4.162 c 0.421 0.38 1.094 0.082 1.094 -0.486 v -9.62 v -8.052 H 40.083 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(254,104,64); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <path d="M 30.013 64.418 L 30.013 64.418 c -1.802 -2.462 0.178 -5.892 3.211 -5.562 h 0 c 1.521 0.165 2.973 -0.673 3.591 -2.073 l 0 0 c 1.231 -2.792 5.192 -2.792 6.423 0 l 0 0 c 0.617 1.4 2.07 2.238 3.591 2.073 h 0 c 3.033 -0.33 5.013 3.1 3.211 5.562 l 0 0 c -0.904 1.234 -0.904 2.912 0 4.146 l 0 0 c 1.802 2.462 -0.178 5.892 -3.211 5.562 h 0 c -1.521 -0.165 -2.973 0.673 -3.591 2.073 l 0 0 c -1.231 2.792 -5.192 2.792 -6.423 0 l 0 0 c -0.617 -1.4 -2.07 -2.238 -3.591 -2.073 h 0 c -3.033 0.33 -5.013 -3.1 -3.211 -5.562 l 0 0 C 30.916 67.33 30.916 65.652 30.013 64.418 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(248,156,23); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                    <circle cx="40.028999999999996" cy="66.249" r="5.629" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(247,198,132); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                    <path d="M 58.389 24.643 H 22.773 c -0.806 0 -1.459 -0.654 -1.459 -1.459 c 0 -0.806 0.653 -1.459 1.459 -1.459 h 35.616 c 0.806 0 1.459 0.654 1.459 1.459 C 59.848 23.989 59.195 24.643 58.389 24.643 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(127,198,220); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  </g>
                  </svg>`,
        },
        {
          number: 400,
          title: 'aboutPage.program',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="w-6 lg:w-10 h-6 lg:h-10" viewBox="0 0 256 256" xml:space="preserve">
                <defs>
                </defs>
                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                  <path d="M 68.316 5.333 h 16.666 c 2.152 0 3.897 1.745 3.897 3.897 v 47.771 H 1.066 V 9.23 c 0 -2.152 1.745 -3.897 3.897 -3.897 H 68.316 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(179,218,254); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <rect x="34.48" y="67.55" rx="0" ry="0" width="21.1" height="11.51" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(238,240,245); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) "/>
                  <path d="M 85.037 67.551 H 5.018 c -2.152 0 -3.897 -1.745 -3.897 -3.897 v -6.484 h 87.813 v 6.484 C 88.934 65.806 87.189 67.551 85.037 67.551 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(238,240,245); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 63.106 84.667 H 26.949 v -1.609 c 0 -2.21 1.792 -4.002 4.002 -4.002 h 28.153 c 2.21 0 4.002 1.792 4.002 4.002 V 84.667 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(238,240,245); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 89 58.11 H 1 c -0.552 0 -1 -0.447 -1 -1 V 9.238 c 0 -2.705 2.201 -4.905 4.905 -4.905 h 80.189 C 87.8 4.333 90 6.534 90 9.238 V 57.11 C 90 57.663 89.553 58.11 89 58.11 z M 2 56.11 h 86 V 9.238 c 0 -1.602 -1.304 -2.905 -2.905 -2.905 H 4.905 C 3.303 6.333 2 7.636 2 9.238 V 56.11 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 85.095 68.515 H 4.905 C 2.201 68.515 0 66.313 0 63.608 V 57.11 c 0 -0.553 0.448 -1 1 -1 h 7.315 c 0.552 0 1 0.447 1 1 s -0.448 1 -1 1 H 2 v 5.498 c 0 1.603 1.303 2.906 2.905 2.906 h 80.189 c 1.602 0 2.905 -1.304 2.905 -2.906 V 58.11 H 31.067 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 H 89 c 0.553 0 1 0.447 1 1 v 6.498 C 90 66.313 87.8 68.515 85.095 68.515 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 55.572 80.044 H 34.427 c -0.552 0 -1 -0.447 -1 -1 V 67.515 c 0 -0.553 0.448 -1 1 -1 h 21.145 c 0.553 0 1 0.447 1 1 v 11.529 C 56.572 79.597 56.125 80.044 55.572 80.044 z M 35.427 78.044 h 19.145 v -9.529 H 35.427 V 78.044 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 48.319 63.313 H 41.68 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 6.639 c 0.553 0 1 0.447 1 1 S 48.872 63.313 48.319 63.313 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 63.117 85.667 H 26.883 c -0.552 0 -1 -0.447 -1 -1 v -1.612 c 0 -2.763 2.248 -5.011 5.01 -5.011 h 28.213 c 2.763 0 5.011 2.248 5.011 5.011 v 1.612 C 64.117 85.22 63.67 85.667 63.117 85.667 z M 27.883 83.667 h 34.234 v -0.612 c 0 -1.66 -1.351 -3.011 -3.011 -3.011 H 30.894 c -1.66 0 -3.01 1.351 -3.01 3.011 V 83.667 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 34.088 52.079 l 9.077 -7.506 l -3.357 -3.888 l -7.854 5.511 l -0.563 -1.498 c -0.389 -1.034 -1.344 -1.747 -2.446 -1.825 l -1.933 -0.137 c -1.316 -0.222 -2.272 -1.278 -2.272 -2.511 l -0.02 -0.881 h -7.62 l -0.021 0.881 c 0 1.233 -0.956 2.289 -2.272 2.511 l -3.4 0.573 c -1.791 0.302 -3.092 1.74 -3.092 3.418 v 5.353 H 34.088 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(63,110,144); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 39.808 40.684 l 1.613 -0.981 c 0.907 -0.552 2.081 -0.356 2.76 0.46 l 0.334 0.402 c 0.729 0.877 0.643 2.171 -0.196 2.944 l -1.154 1.064 L 39.808 40.684 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(236,190,155); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 27.67 29.794 c 0 0 -0.268 4.168 -0.268 4.168 c -0.265 3.165 -2.35 5.886 -5.337 6.966 l 0 0 c -0.373 0.135 -0.764 0.202 -1.155 0.202 c -0.391 0 -0.782 -0.067 -1.155 -0.202 l 0 0 c -2.987 -1.079 -5.072 -3.801 -5.337 -6.966 l -0.252 -4.168 v -4.791 h 13.701 L 27.67 29.794 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(236,190,155); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 27.013 42.735 l -6.103 6.243 l -6.103 -6.243 c 1.539 -0.308 2.249 -1.496 2.293 -3.392 h 7.62 C 24.827 41.181 25.543 42.364 27.013 42.735 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(236,190,155); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 27.67 29.794 c 2.982 -4.439 1.629 -7.464 -3.173 -9.364 c 0.105 -0.439 0.709 -0.877 1.664 -1.316 c -3.949 -1.484 -8.645 -1.144 -10.794 2.325 c -2.943 0.992 -3.845 4.287 -1.201 8.354 c 0.295 -4.979 3.527 -4.574 7.429 -2.941 c 1.973 0.755 3.686 0.677 5.301 0.426 C 27.779 27.114 27.735 28.684 27.67 29.794 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(249,208,112); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 8.315 53.079 c -0.552 0 -1 -0.447 -1 -1 v -5.354 c 0 -2.168 1.651 -4.021 3.926 -4.404 l 3.4 -0.573 c 0.833 -0.14 1.438 -0.782 1.438 -1.525 l 0.021 -0.904 c 0.013 -0.552 0.478 -0.994 1.023 -0.976 c 0.552 0.013 0.989 0.471 0.976 1.023 l -0.021 0.88 c 0 1.699 -1.306 3.17 -3.106 3.474 l -3.4 0.573 c -1.309 0.22 -2.258 1.243 -2.258 2.431 v 5.354 C 9.315 52.632 8.867 53.079 8.315 53.079 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 34.795 52.494 c -0.288 0 -0.573 -0.124 -0.771 -0.362 c -0.352 -0.426 -0.292 -1.057 0.133 -1.408 l 7.583 -6.271 l -2.099 -2.431 l -7.114 4.992 c -0.252 0.18 -0.574 0.23 -0.87 0.137 c -0.295 -0.091 -0.532 -0.313 -0.641 -0.604 l -0.563 -1.499 c -0.25 -0.666 -0.871 -1.128 -1.581 -1.179 l -1.933 -0.137 c -1.896 -0.314 -3.202 -1.786 -3.202 -3.509 l -0.02 -0.857 c -0.013 -0.552 0.425 -1.01 0.977 -1.022 c 0.556 -0.045 1.01 0.424 1.022 0.977 l 0.02 0.88 c 0 0.766 0.605 1.408 1.439 1.548 l 1.837 0.125 c 1.487 0.105 2.787 1.075 3.312 2.47 l 0.109 0.291 l 6.798 -4.77 c 0.42 -0.296 0.996 -0.224 1.331 0.165 l 3.357 3.889 c 0.176 0.204 0.262 0.469 0.24 0.737 c -0.022 0.268 -0.152 0.515 -0.359 0.687 l -8.371 6.921 C 35.246 52.419 35.02 52.494 34.795 52.494 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 27.67 30.794 c -0.106 0 -0.214 -0.017 -0.319 -0.052 c -0.427 -0.144 -0.706 -0.557 -0.679 -1.007 c 0.044 -0.747 0.029 -1.171 -0.001 -1.413 c -1.544 0.211 -3.352 0.26 -5.433 -0.535 c -2.511 -1.051 -4.131 -1.297 -4.983 -0.766 c -0.636 0.396 -1.003 1.35 -1.091 2.832 c -0.025 0.431 -0.325 0.797 -0.742 0.908 s -0.859 -0.06 -1.094 -0.422 c -1.601 -2.464 -2.112 -4.888 -1.438 -6.825 c 0.46 -1.323 1.455 -2.341 2.82 -2.896 c 2.584 -3.773 7.748 -3.963 11.803 -2.439 c 0.378 0.142 0.633 0.497 0.648 0.9 c 0.014 0.403 -0.215 0.776 -0.582 0.944 c -0.1 0.046 -0.19 0.089 -0.273 0.131 c 1.986 1.038 3.233 2.344 3.715 3.895 c 0.569 1.833 0.058 3.954 -1.52 6.303 C 28.311 30.634 27.996 30.794 27.67 30.794 z M 27.08 28.262 c -0.007 0.001 -0.013 0.002 -0.02 0.003 C 27.066 28.265 27.073 28.264 27.08 28.262 z M 21.74 19.281 c -2.234 0 -4.334 0.766 -5.523 2.686 c -0.123 0.198 -0.31 0.347 -0.531 0.421 c -0.955 0.322 -1.615 0.938 -1.909 1.784 c -0.265 0.761 -0.239 1.671 0.063 2.67 c 0.331 -0.656 0.781 -1.159 1.355 -1.517 c 1.9 -1.186 4.623 -0.299 6.785 0.606 c 1.796 0.686 3.351 0.581 4.761 0.36 c 0.451 -0.084 0.908 0.036 1.258 0.345 c 0.027 0.024 0.053 0.048 0.078 0.074 c 0.21 -0.765 0.221 -1.456 0.031 -2.067 c -0.401 -1.291 -1.74 -2.396 -3.981 -3.283 c -0.462 -0.183 -0.72 -0.679 -0.604 -1.163 c 0.059 -0.247 0.172 -0.479 0.344 -0.7 C 23.163 19.357 22.444 19.281 21.74 19.281 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 20.91 42.131 c -0.511 0 -1.015 -0.088 -1.495 -0.262 c -3.345 -1.208 -5.697 -4.279 -5.994 -7.823 l -0.254 -4.191 c -0.034 -0.551 0.386 -1.025 0.938 -1.059 c 0.554 -0.034 1.025 0.386 1.059 0.938 l 0.252 4.168 c 0.23 2.744 2.067 5.142 4.679 6.086 c 0.523 0.189 1.107 0.19 1.63 0 c 2.612 -0.944 4.449 -3.342 4.68 -6.109 l 0.267 -4.149 c 0.036 -0.551 0.526 -0.961 1.062 -0.934 c 0.551 0.036 0.969 0.511 0.934 1.062 L 28.4 34.027 c -0.298 3.563 -2.65 6.634 -5.995 7.842 C 21.924 42.043 21.421 42.131 20.91 42.131 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 20.91 49.979 c -0.269 0 -0.527 -0.108 -0.715 -0.301 l -6.103 -6.243 c -0.386 -0.395 -0.379 -1.028 0.016 -1.415 c 0.396 -0.385 1.029 -0.377 1.414 0.016 l 5.388 5.512 l 5.387 -5.512 c 0.387 -0.394 1.02 -0.401 1.415 -0.016 c 0.395 0.386 0.402 1.02 0.016 1.415 l -6.103 6.243 C 21.437 49.87 21.179 49.979 20.91 49.979 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 43.166 45.573 c -0.019 0 -0.038 0 -0.057 -0.001 c -0.27 -0.016 -0.523 -0.14 -0.7 -0.345 l -3.357 -3.889 c -0.192 -0.223 -0.277 -0.518 -0.231 -0.809 c 0.045 -0.291 0.217 -0.546 0.468 -0.699 l 1.613 -0.981 c 1.32 -0.803 3.061 -0.513 4.048 0.675 l 0.334 0.402 c 1.07 1.287 0.944 3.184 -0.287 4.318 l -1.154 1.064 C 43.658 45.479 43.416 45.573 43.166 45.573 z M 41.337 40.924 l 1.91 2.213 l 0.395 -0.364 c 0.447 -0.412 0.493 -1.102 0.104 -1.569 l -0.334 -0.402 c -0.359 -0.432 -0.992 -0.538 -1.471 -0.245 L 41.337 40.924 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 44.182 41.163 c -0.282 0 -0.563 -0.119 -0.76 -0.35 c -0.359 -0.42 -0.31 -1.051 0.109 -1.41 l 7.246 -6.2 c 0.419 -0.357 1.05 -0.311 1.41 0.109 c 0.359 0.42 0.31 1.051 -0.109 1.41 l -7.246 6.2 C 44.643 41.084 44.412 41.163 44.182 41.163 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 81.124 18.794 H 52.913 c -0.553 0 -1 -0.448 -1 -1 s 0.447 -1 1 -1 h 28.211 c 0.553 0 1 0.448 1 1 S 81.677 18.794 81.124 18.794 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 81.124 26.794 H 52.913 c -0.553 0 -1 -0.448 -1 -1 s 0.447 -1 1 -1 h 28.211 c 0.553 0 1 0.448 1 1 S 81.677 26.794 81.124 26.794 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 81.124 34.794 H 58.913 c -0.553 0 -1 -0.448 -1 -1 s 0.447 -1 1 -1 h 22.211 c 0.553 0 1 0.448 1 1 S 81.677 34.794 81.124 34.794 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                  <path d="M 81.124 42.794 H 52.913 c -0.553 0 -1 -0.448 -1 -1 s 0.447 -1 1 -1 h 28.211 c 0.553 0 1 0.448 1 1 S 81.677 42.794 81.124 42.794 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                </g>
                </svg>`,
        },
      ],
    };
  },
};
</script>
