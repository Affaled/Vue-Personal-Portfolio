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
    class="flex w-full flex-col items-center justify-end gap-4 pb-12 pt-20"
  >
    <div class="flex w-11/12 max-w-5xl flex-col gap-4">
      <p
        class="w-full text-start font-sans text-lg font-semibold capitalize text-[#e4cb86]"
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
      </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from "vue";
import TechnologyIcons from "../components/TechnologyIcons.vue";
export default defineComponent({
  components: { TechnologyIcons },
});
</script>
