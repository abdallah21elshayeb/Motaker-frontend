<template>
  <div class="space-y-16">
    <div class="flex justify-center items-center h-screen">
      <div
        class="flex justify-center h-2/3 w-10/12 p-6 bg-secondaryColor shadow-2xl shadow-slate-900 drop-shadow"
      >
        <div class="h-full text-center">
          <div>
            <p class="text-xl font-bold text-thirdColor lg:text-3xl">
              {{ $t('contactPage.contact') }}
            </p>
          </div>
          <div class="grid grid-cols-1 space-y-6 mt-10 md:grid-cols-3 lg:grid-cols-3">
            <div dir="ltr" class="flex flex-col justify-center">
              <p class="text-xl font-bold text-thirdColor mb-4 lg:text-3xl">
                {{ $t('footer.Tel') }}
              </p>
              <span class="text-sm text-white lg:text-2xl">+966565006630</span>
              <span class="text-sm text-white lg:text-2xl">+971554467651</span>
              <span class="text-sm text-white lg:text-2xl">+201111344430</span>
            </div>
            <div class="flex justify-center">
              <img
                src="/mobtaker.png"
                alt="logo"
                class="w-1/3 md:w-2/3 lg:w-2/3 object-contain"
              />
            </div>
            <div dir="ltr" class="flex flex-col justify-center">
              <p class="text-xl font-bold text-thirdColor mb-4 lg:text-3xl">
                {{ $t('footer.email') }}
              </p>
              <span class="text-sm text-white lg:text-2xl"
                >info@mobtakerpro.com</span
              >
              <span class="text-sm text-white lg:text-2xl"
                >training@mobtakerpro.com</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-80">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57854.331349323664!2d55.17068691404869!3d25.00365948813376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2seg!4v1709863444992!5m2!1sen!2seg"
        class="w-full h-full"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div></div>
  </div>
</template>
