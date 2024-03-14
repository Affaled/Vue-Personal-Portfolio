<script>
import { defineComponent } from "vue";
import projectsData from "../../public/data/projectsData.js";
import axios from "axios";
export default defineComponent({});
</script>

<template>
  <div
    class="absolute top-0 flex h-screen w-screen justify-center overflow-hidden"
  >
    <div class="relative flex w-10/12 flex-row items-end justify-between py-28">
      <div
        class="absolute left-1/2 top-1/2 h-2/4 w-1/5 translate-x-[-68%] translate-y-[-42%] rounded-t-full border-2 bg-transparent"
      ></div>
      <div
        class="absolute left-1/2 top-1/2 h-2/4 w-1/5 translate-x-[-50%] translate-y-[-50%] rounded-t-full bg-[#a7141e]"
      ></div>
      <div
        class="absolute left-full top-1/2 flex h-1/3 w-[14.444%] translate-x-[-160%] translate-y-[-50%] items-stretch justify-stretch opacity-75 transition duration-150 hover:scale-105 hover:cursor-pointer hover:opacity-100"
      >
        <div
          class="absolute left-0 top-0 h-full w-full translate-x-[-18%] translate-y-[8%] rounded-l-full rounded-t-full border-2 bg-transparent"
        ></div>
        <div
          class="z-10 h-full w-full rounded-l-full rounded-t-full bg-[#a7141e]"
        ></div>
      </div>
      <div class="flex h-3/4 w-fit flex-col justify-start gap-4">
        <div class="flex flex-col gap-4">
          <p
            class="relative flex w-min text-nowrap font-serif text-6xl capitalize"
          >
            teste
          </p>
          <ul class="flex gap-4 text-xl uppercase">
            <li
              class="font-semibold text-[#a7141e] transition duration-150 hover:scale-105 hover:cursor-pointer"
            >
              Front-End
            </li>
            <li
              class="transition duration-150 hover:scale-105 hover:cursor-pointer"
            >
              teste
            </li>
          </ul>
        </div>
        <div class="ml-36 w-1/4">
          <p class="opacity-75">{{ projectsData[0].description }}</p>
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
