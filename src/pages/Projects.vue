<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  data() {
    return {
      projectsData: [],
      selectedProject: 0,
    };
  },
  created() {
    axios.get("/data/projectsData.json").then((response) => {
      this.projectsData = response.data;
      console.log(this.projectsData);
    });
  },
});
</script>

<template>
  <div
    class="absolute top-0 flex h-screen w-screen justify-center overflow-hidden"
  >
    <div class="relative flex w-10/12 flex-row items-end justify-between py-28">
      <div class="flex h-3/4 w-fit flex-col justify-start gap-4">
        <div class="flex flex-col gap-4">
          <p class="font-serif text-6xl capitalize">
            {{ projectsData[selectedProject].name }}
          </p>
          <ul class="flex gap-4 text-xl uppercase">
            <li
              v-for="(technology, index) in projectsData[selectedProject]
                .technologies"
              :key="index"
            >
              {{ technology }}
            </li>
          </ul>
        </div>
        <div class="ml-36 w-1/3">
          <p class="opacity-75">
            {{ projectsData[selectedProject].description }}
          </p>
          <div class="mt-4 flex gap-16">
            <button
              class="text-nowrap rounded-xl border-2 border-[#a7141e] bg-transparent px-4 py-2 font-normal uppercase drop-shadow-lg transition duration-150 hover:scale-110"
            >
              Run project
            </button>
            <button
              class="text-nowrap rounded-xl bg-[#a7141e] px-4 py-2 font-normal uppercase drop-shadow-lg transition duration-150 hover:scale-110"
            >
              View project
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
