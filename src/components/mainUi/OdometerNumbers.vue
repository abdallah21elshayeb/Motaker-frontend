<template>
  <div ref="counter">
    <div class="flex flex-col justify-center space-y-8">
      <div
        class="flex items-center justify-center relative left-4 lg:left-0 w-10 h-10 lg:w-20 lg:h-20 rotate-45 bg-thirdColor"
      >
        <span class="-rotate-45" v-html="icon"></span>
      </div>
      <div class="flex flex-col justify-center text-center text-white">
        <span dir="ltr" class="text-sm lg:text-2xl font-bold">
          {{ count + '+' }}
        </span>
        <span class="text-xs text-thirdColor lg:text-xl w-16">
          {{ $t(title) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'title', 'targetCount'],
  data() {
    return {
      count: 0,
      intervalId: null,
    };
  },

  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.9,
    });
    this.observer.observe(this.$refs.counter);
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    startCounting() {
      this.intervalId = setInterval(() => {
        if (this.count < this.targetCount) {
          this.count = this.count + 10;
        } else {
          clearInterval(this.intervalId);
        }
      }, 20);
    },
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startCounting();
          this.observer.unobserve(this.$refs.counter);
        }
      });
    },
  },
};
</script>
