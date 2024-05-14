<template>
  <div
    :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'"
    class="flex items-center justify-center"
  >
    <div class="container">
      <table
        class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5"
      >
        <thead class="text-sm text-thirdColor uppercase bg-secondaryColor">
          <tr
            class="hidden flex-col flex-no wrap lg:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0"
          >
            <th
              v-for="header in tableHeader"
              :key="header"
              scope="col"
              class="px-6 py-3"
            >
              {{ $t(header) }}
            </th>
          </tr>
        </thead>
        <tbody class="flex-1 sm:flex-none">
          <tr
            v-for="(content, index) in displayedContents"
            :key="index"
            class="flex flex-col flex-no wrap border rounded-lg mx-2 border-thirdColor lg:border-none lg:table-row mb-2 md:mb-2 sm:mb-0"
          >
            <th class="px-6 py-4">
              {{ content.category }}
            </th>
            <td class="px-6 py-4 border-t">
              <p class="flex font-bold text-thirdColor lg:hidden">
                {{ $t('courseDetails.courseTitle') }}:
              </p>
              {{ content.title }}
            </td>
            <td class="px-6 py-4 border-t">
              <p class="flex font-bold text-thirdColor lg:hidden">
                {{ $t('courseDetails.courseTitleEn') }}:
              </p>
              {{ content.titleEn }}
            </td>
            <td class="px-6 py-4 border-t">
              <p class="flex font-bold text-thirdColor lg:hidden">
                {{ $t('courseDetails.level') }}:
              </p>
              {{ content.level }}
            </td>
            <td class="px-6 py-4 border-t">
              <p class="flex font-bold text-thirdColor lg:hidden">
                {{ $t('courseDetails.days') }}:
              </p>
              {{ content.days }}
            </td>
            <td class="px-6 py-4 border-t">
              <p class="flex font-bold text-thirdColor lg:hidden">
                {{ $t('courseDetails.date') }}:
              </p>
              {{ content.date }}
            </td>
            <td class="px-6 py-2 border-t">
              <enroll-button
                @pass-data="openPopupWithTitle(content.titleEn)"
              ></enroll-button>
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        class="flex items-center flex-column flex-wrap md:flex-row justify-center py-4"
        aria-label="Table navigation"
      >
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li v-show="currentPage !== 1">
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
              @click="currentPage--"
              >{{ $t('courseDetails.previous') }}</a
            >
          </li>
          <template v-for="page in totalPages">
            <li
              :key="'page_' + page"
              v-if="
                Math.abs(page - currentPage) < 3 ||
                page === 1 ||
                page === totalPages
              "
            >
              <a
                :class="{
                  'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 cursor-pointer bg-thirdColor border border-gray-300':
                    currentPage !== page,
                  'flex items-center justify-center px-3 h-8 leading-tight text-thirdColor bg-secondaryColor border border-gray-300':
                    currentPage === page,
                }"
                @click="currentPage = page"
                >{{ page }}</a
              >
            </li>
            <li
              :key="'ellipsis_' + page"
              v-else-if="Math.abs(page - currentPage) === 3"
            >
              ....
            </li>
          </template>
          <li v-show="currentPage !== totalPages">
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
              @click="currentPage++"
              >{{ $t('courseDetails.next') }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import EnrollButton from '../mainUi/EnrollButton.vue';

export default {
  props: ['coursesContents'],
  components: {
    EnrollButton,
  },
  data() {
    return {
      pageSize: 15,
      currentPage: 1,
      contents: this.coursesContents,
      tableHeader: [
        'courseDetails.category',
        'courseDetails.courseTitle',
        'courseDetails.courseTitleEn',
        'courseDetails.level',
        'courseDetails.days',
        'courseDetails.date',
        'courseDetails.enroll',
      ],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.contents.length / this.pageSize);
    },
    displayedContents() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.contents.slice(start, end);
    },
  },
  methods: {
    openPopup() {
      this.$emit('open-popup');
    },
    openPopupWithTitle(title) {
      this.openPopup();
      this.$emit('course-title', title);
    },
  },
};
</script>

<style scoped>
@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
</style>
