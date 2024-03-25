<script>
import { defineComponent } from "vue";
import projectsData from "../../public/data/projectsData.js";
export default defineComponent({
  data() {
    return {
      projectsData,
    };
  },
});
</script>

<template>
  <!-- Full Screen Container -->
  <div
    class="absolute top-0 flex h-screen w-screen justify-center overflow-hidden"
  >
    <!-- Image Container -->
    <div class="absolute flex h-full w-full items-center justify-center">
      <!-- Actual Project Image -->
      <div
        class="absolute left-1/2 top-1/2 h-2/4 w-1/6 translate-x-[-32%] translate-y-[-42%] rounded-t-full border-2 bg-transparent"
      ></div>
      <img
        :src="projectsData[0].image"
        :alt="projectsData[0].title + ' image'"
        class="absolute left-1/2 top-1/2 z-10 h-2/4 w-1/6 translate-x-[-14%] translate-y-[-50%] rounded-t-full bg-[#a7141e]"
      />
      <!-- Next Project Image -->
      <div
        class="absolute left-full top-1/2 z-10 flex h-1/3 w-[14.444%] translate-x-[-160%] translate-y-[-50%] items-stretch justify-stretch opacity-75 transition duration-150 hover:scale-105 hover:cursor-pointer hover:opacity-100"
      >
        <div
          class="absolute left-0 top-0 h-full w-full translate-x-[-18%] translate-y-[8%] rounded-l-full rounded-t-full border-2 bg-transparent"
        ></div>
        <img
          :src="projectsData[0].image"
          :alt="projectsData[0].title + ' image'"
          class="z-10 h-full w-full rounded-l-full rounded-t-full bg-[#a7141e]"
        />
      </div>
    </div>
    <!-- Screen Container Cut -->
    <div class="relative my-28 flex w-10/12 flex-row items-end justify-between">
      <!-- Content Container -->
      <div class="flex h-3/4 w-fit flex-col justify-start gap-4">
        <!-- First Text Area -->
        <div classname="text-section-1" class="flex flex-col gap-4">
          <!-- Project Title -->
          <p
            class="relative flex w-min text-nowrap font-serif text-6xl capitalize"
          >
            {{ projectsData[0].title }}
          </p>
          <!-- Project Type and Technologies List -->
          <ul class="flex gap-4 text-xl uppercase">
            <li
              class="font-semibold text-[#a7141e] transition duration-150 hover:scale-105 hover:cursor-pointer"
            >
              {{ projectsData[0].type }}
            </li>
            <li
              class="transition duration-150 hover:scale-105 hover:cursor-pointer"
              v-for="technology in projectsData[0].technologies"
            >
              {{ technology }}
            </li>
          </ul>
        </div>
        <!-- Second Text Area -->
        <div class="ml-36 w-1/4">
          <p class="opacity-75">{{ projectsData[0].description }}</p>
          <!-- Buttons -->
          <div class="mt-4 flex gap-16">
            <button
              class="text-nowrap rounded-xl border-2 border-[#a7141e] bg-transparent px-4 py-2 font-normal uppercase drop-shadow-lg transition duration-150 hover:scale-110"
            >
              {{ $i18n.t("pages.projects.button.run") }}
            </button>
            <button
              class="text-nowrap rounded-xl bg-[#a7141e] px-4 py-2 font-normal uppercase drop-shadow-lg transition duration-150 hover:scale-110"
            >
              {{ $i18n.t("pages.projects.button.code") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
