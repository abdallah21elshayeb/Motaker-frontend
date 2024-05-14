<template>
  <Transition name="modal">
    <div
      v-if="registerPopup"
      class="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full overflow-hidden bg-black bg-opacity-75"
    >
      <div class="flex w-full h-full justify-center items-center">
        <div class="flex w-full h-full sm:w-1/2 sm:h-1/2 bg-white rounded-md">
          <div class="w-full h-full m-2">
            <div class="flex justify-end mx-1">
              <span @click="closePopup" class="cursor-pointer font-bold"
                >x</span
              >
            </div>
            <div class="mx-4">
              <p class="text-xl font-bold text-secondaryColor">
                {{ $t('mainPage.register') }}
              </p>
              <p class="text-lg font-bold text-thirdColor mt-4">
                {{ courseName }}
              </p>
            </div>
            <div v-if="loading" class="flex w-full justify-center items-center">
              <mobtaker-loader></mobtaker-loader>
            </div>
            <div class="my-8 space-y-8" v-else>
              <div class="space-y-4">
                <div
                  class="w-full flex flex-col sm:flex-row justify-center items-center"
                >
                  <div class="w-full sm:w-1/2 px-2 mb-2 sm:mb-0">
                    <input
                      type="text"
                      :placeholder="$t('registerPage.name')"
                      class="shadow appearance-none border border-secondaryColor rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-thirdColor focus:border-thirdColor mt-1"
                      :class="{ 'border-red-600': isError }"
                      v-model="name"
                    />
                  </div>
                  <div class="w-full sm:w-1/2 px-2">
                    <input
                      type="text"
                      :placeholder="$t('registerPage.email')"
                      class="shadow appearance-none border border-secondaryColor rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-thirdColor focus:border-thirdColor mt-1"
                      :class="{ 'border-red-600': isError }"
                      v-model="email"
                    />
                  </div>
                </div>

                <div class="w-full flex flex-col sm:flex-row justify-center">
                  <div class="w-full sm:w-1/2 px-2 mb-2 sm:mb-0">
                    <input
                      type="text"
                      :placeholder="$t('registerPage.address')"
                      class="shadow appearance-none border border-secondaryColor rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-thirdColor focus:border-thirdColor mt-1"
                      :class="{ 'border-red-600': isError }"
                      v-model="address"
                    />
                  </div>
                  <div class="w-full sm:w-1/2 px-2 mb-2 sm:mb-0">
                    <input
                      type="text"
                      :placeholder="$t('registerPage.city')"
                      class="shadow appearance-none border border-secondaryColor rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-thirdColor focus:border-thirdColor mt-1"
                      :class="{ 'border-red-600': isError }"
                      v-model="city"
                    />
                  </div>
                </div>
                <div class="w-full flex flex-col sm:flex-row justify-center">
                  <div class="w-full sm:w-1/2 px-2 mb-2 sm:mb-0">
                    <input
                      type="text"
                      :placeholder="$t('registerPage.phone')"
                      class="shadow appearance-none border border-secondaryColor rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-thirdColor focus:border-thirdColor mt-1"
                      :class="{ 'border-red-600': isError }"
                      v-model="phone"
                    />
                  </div>
                </div>
              </div>
              <div class="w-full flex justify-center">
                <button
                  type="submit"
                  @click="submitRegister"
                  class="text-white bg-thirdColor hover:bg-secondaryColor font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  {{ $t('mainPage.submit') }}
                </button>
              </div>
            </div>
            <div
              v-if="registerStatus"
              class="w-full border border-green-500 bg-green-200 text-center rounded-md py-2"
            >
              <p>{{ $t('registerPage.successMsg') }}</p>
            </div>
            <div
              v-if="isError"
              class="w-full border border-red-500 bg-red-200 text-center rounded-md py-2"
            >
              <p>{{ $t('registerPage.errorMsg') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { mapState } from 'pinia';
import { registerStore } from '../../controllers/registerController';
import MobtakerLoader from '../mainUi/MobtakerLoader.vue';

export default {
  props: ['registerPopup', 'courseName'],
  components: {
    MobtakerLoader,
  },
  data() {
    return {
      inputStyle:
        'shadow appearance-none border border-secondaryColor rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-thirdColor focus:border-thirdColor mt-1',
      isError: false,
      name: '',
      email: '',
      address: '',
      city: '',
      phone: '',
    };
  },

  computed: {
    ...mapState(registerStore, {
      loading: 'loading',
      registerStatus: 'registerStatus',
    }),
    courseTitleRegister() {
      return this.$props.courseName;
    },
  },

  methods: {
    closePopup() {
      this.$emit('close-popup');
    },
    async submitRegister() {
      const register = {
        courseTitle: this.courseTitleRegister,
        name: this.name,
        email: this.email,
        address: this.address,
        city: this.city,
        phone: this.phone,
      };
      const registerControl = registerStore();
      if (
        this.name === '' ||
        this.email === '' ||
        this.address === '' ||
        this.city === '' ||
        this.phone === ''
      ) {
        this.isError = true;
      } else {
        this.isError = false;
        await registerControl.submitRegister(register).then(() => {
          (this.name = ''),
            (this.email = ''),
            (this.address = ''),
            (this.city = ''),
            (this.phone = '');
        });
      }
    },
  },
};
</script>

<style scoped>
.modal-enter-active {
  animation: modal 0.2s ease-out;
}

.modal-leave-active {
  animation: modal 0.2s ease-in reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.5);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
