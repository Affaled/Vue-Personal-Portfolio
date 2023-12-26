p
<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-end gap-4 pb-12 pt-20 max-sm:h-[660px] max-sm:min-h-0"
  >
    <h2
      class="text-nowrap text-center font-serif text-6xl capitalize max-md:text-5xl max-sm:text-wrap max-sm:text-6xl"
    >
      Front-end developer
    </h2>
    <p class="text-sm font-semibold uppercase">Scroll down</p>
  </section>
  <section
    class="flex w-full flex-col items-center justify-end gap-4 py-20"
    id="bio"
  >
    <div class="flex w-11/12 max-w-5xl flex-col gap-4">
      <p
        class="mb-8 w-full text-start font-sans text-lg font-semibold capitalize text-[#e4cb86]"
      >
        Biography & Technology
      </p>
      <div
        class="flex w-full flex-row justify-between max-sm:flex-col max-sm:gap-8"
      >
        <div class="flex w-1/4 flex-row flex-wrap justify-center max-sm:w-full">
          <TechnologyIcons
            :iconNames="[
              'git',
              'html',
              'css',
              'scss',
              'tailwind',
              'javascript',
              'angular',
              'vue',
              'reactjs',
              'php',
            ]"
          />
        </div>
        <div class="flex w-[430px] flex-col gap-4 max-sm:w-11/12">
          <p>
            {{ BiographyData.personalInfo[0] }}
          </p>
          <p>
            {{ BiographyData.professionalInfo[1] }}
          </p>
          <router-link
            to="/biography"
            @click.native="scrollToTop"
            class="flex w-max cursor-pointer flex-row items-center gap-4 border-b-2 border-slate-200 text-sm font-semibold uppercase tracking-widest hover:border-[#e4cb86] hover:text-[#e4cb86]"
          >
            <p>Learn More</p>
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from "vue";
import TechnologyIcons from "../components/TechnologyIcons.vue";
import BiographyData from "../data/BiographyData.js";
export default defineComponent({
  components: { TechnologyIcons },
  data() {
    return {
      BiographyData,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
});
</script>
