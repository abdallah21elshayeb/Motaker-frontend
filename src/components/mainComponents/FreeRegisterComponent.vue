<template>
  <div class="w-full py-20 bg-secondaryColor mb-10">
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-2 mx-5">
        <div>
          <div class="grid grid-rows-2 place-content-center">
            <div class="">
              <p class="text-4xl text-thirdColor mb-4 font-semibold">
                {{ $t('mainPage.register') }}
              </p>
              <p class="text-white">
                {{ $t('mainPage.registerDetails') }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex place-content-center">
          <div class="bg-white p-8 w-full lg:w-2/3">
            <p class="text-secondaryColor text-2xl font-semibold">
              {{ $t('mainPage.courseFree') }}
            </p>
            <p class="mb-8">{{ $t('mainPage.courseFreeDetails') }}</p>

            <div class="mx-auto">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  v-model="name"
                  required
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-thirdColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >{{ $t('mainPage.fullName') }}</label
                >
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  v-model="email"
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-thirdColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >{{ $t('mainPage.email') }}</label
                >
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  
                  name="floating_phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  v-model="phone"
                  required
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-thirdColor duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >{{ $t('mainPage.phone') }}</label
                >
              </div>
              <div class="flex place-content-center  w-full">
                <button
                  @click="submitFreeRegister"
                  class="text-white bg-thirdColor hover:bg-secondaryColor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  {{ $t('mainPage.submit') }}
                </button>
              </div>
            </div>
            <div
              v-if="freeRegisterStatus"
              class="w-full border border-green-500 bg-green-200 text-center rounded-md mt-2 py-2"
            >
              <p>{{ $t('registerPage.successMsg') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { registerStore } from '../../controllers/registerController';
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
    };
  },
  computed: {
    ...mapState(registerStore, {
      loading: 'loading',
      freeRegisterStatus: 'freeRegisterStatus',
    }),
  },
  methods: {
    async submitFreeRegister() {
      const register = {
        name: this.name,
        email: this.email,
        phone: this.phone,
      };
      const registerControl = registerStore();
      await registerControl.submitFreeRegister(register).then(() => {
        (this.name = ''), (this.email = ''), (this.phone = '');
      });
    },
  },
};
</script>
