<script>
import { defineComponent } from "vue";
import ProjectItems from "../components/ProjectsItems.vue";
export default defineComponent({
  components: {
    ProjectItems,
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
          <p class="font-serif text-6xl capitalize">Project Name</p>
          <ul class="flex gap-4 text-xl uppercase">
            <li>HTML</li>
            <li>CSS</li>
            <li>Angular</li>
          </ul>
        </div>
        <div class="ml-36 w-1/3">
          <p class="opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            fugit numquam quia aliquid natus saepe praesentium quo voluptatibus
            sint beatae nam! Natus iure molestias id aperiam, est similique
            minus quibusdam.
          </p>
          <div class="mt-4 flex gap-16">
            <button
              class="rounded-xl bg-[#a7141e] p-2 font-normal uppercase drop-shadow-lg transition duration-150 hover:scale-110"
            >
              Run project
            </button>
            <button
              class="rounded-xl bg-[#a7141e] p-2 font-normal uppercase drop-shadow-lg transition duration-150 hover:scale-110"
            >
              View project
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
