<template>
  <div class="mt-8 space-y-10">
    <div class="">
      <p
        class="text-2xl font-bold  font-mono md:text-xl lg:text-4xl xl:text-7xl  text-secondaryColor text-center"
      >
        {{ $t('mainPage.mobtaker') }}
      </p>
      <p
        class="text-xl mx-2 lg:text-2xl text-center"
        v-html="$t('mainPage.mobtakerSlogan')"
      ></p>
    </div>
    <div class="grid grid-cols-1 w-full h-full">
      <div class="flex w-full">
        <div class="hidden sm:absolute sm:flex lg:left-0 xl:left-10">
          <img src="/student.png" alt="student" class="sm:h-72 lg:h-96" />
        </div>
        <div class="space-y-6 flex justify-center">
          <div
            class="w-full sm:h-96 sm:w-2/3 m-4 flex flex-col sm:flex-row sm:justify-between bg-thirdColor rounded-3xl shadow-custom"
          >
            <div class="sm:w-1/2">
              <p
                class="text-xl font-bold my-6 font-mono md:text-xl lg:text-4xl xl:text-3xl text-secondaryColor text-center"
              >
                {{ $t('mainPage.training') }}
              </p>
              <p
                class="text-sm px-4 md:text-sm lg:text-xl text-black text-center"
              >
                {{ $t('mainPage.trainingIntro') }}
              </p>
            </div>

            <iframe
              class="h-full w-full sm:w-1/2 p-4 rounded-3xl"
              src="https://www.youtube.com/embed/BLRV16XuAYA?si=JUcvUVeAz9HC-osJ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div class="flex w-full">
        <div class="hidden sm:flex sm:absolute sm:right-0 xl:right-20">
          <img src="/consult.png" alt="consult" class="sm:h-72 lg:h-96" />
        </div>
        <div class="space-y-6 flex justify-center">
          <div
            class="w-full sm:h-96 sm:w-2/3 m-4 flex flex-col-reverse justify-center sm:flex-row sm:justify-between bg-thirdColor rounded-3xl shadow-custom"
          >
            <iframe
              class="h-full w-full sm:w-1/2 p-4 rounded-3xl"
              src="https://www.youtube.com/embed/eTNIKvApQsE?si=D2UfSLo4vP8EQ2L5"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div class="sm:w-1/2">
              <p
                class="text-xl font-bold my-6 font-mono md:text-xl lg:text-4xl xl:text-3xl text-secondaryColor text-center"
              >
                {{ $t('mainPage.consultation') }}
              </p>
              <p
                class="text-sm px-4 md:text-sm lg:text-xl text-black text-center"
              >
                {{ $t('mainPage.consultationIntro') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

