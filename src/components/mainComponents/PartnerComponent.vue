<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="mx-8">
        <p class="text-4xl font-bold text-thirdColor m-4">
          {{ $t('mainPage.partner') }}
        </p>
        <p class="text-xl text-secondaryColor mx-4">
          {{ $t('mainPage.partnerDetails') }}
        </p>
      </div>
      <div class="grid grid-cols-4 p-6 lg:mx-10">
        <img
          v-for="partner in partners"
          :key="partner"
          :src="partner"
          :alt="partner"
          class="p-2 lg:m-6"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Banque_Misr.svg/2560px-Banque_Misr.svg.png',
        'https://ewrqefza7qf.exactdn.com/wp-content/uploads/2023/03/%D8%A7%D9%84%D8%A8%D9%86%D9%83-%D8%A7%D9%84%D8%A3%D9%87%D9%84%D9%89.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/First_Abu_Dhabi_Bank_Logo.svg/1200px-First_Abu_Dhabi_Bank_Logo.svg.png',
        'https://upload.wikimedia.org/wikipedia/ar/d/d6/%D8%A8%D9%86%D9%83_%D8%B9%D9%88%D8%AF%D9%87.png',
        'https://www.giglt.com.eg/en/images/nbk.png',
        'https://www.ezzcsr.com/images/EzzSteel.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Titan.svg/2560px-Titan.svg.png',
        'https://cdn.freebiesupply.com/images/large/2x/nestle-logo-black-and-white.png',
      ],
    };
  },
};
</script>
