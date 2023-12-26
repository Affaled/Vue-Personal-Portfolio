p
<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-end gap-4 pb-12 pt-20"
  >
    <h2 class="text-center font-serif text-7xl capitalize">
      Front-end developer
    </h2>
    <p
      class="cursor-pointer text-sm font-semibold uppercase hover:text-[#e4cb86]"
    >
      Scroll down
    </p>
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
      <div class="flex w-full flex-row justify-between">
        <div class="flex w-1/4 flex-row flex-wrap justify-center">
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
        <div class="flex w-1/2 flex-col gap-4">
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
