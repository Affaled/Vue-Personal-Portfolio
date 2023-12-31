<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<template>
  <div class="absolute top-0 flex h-screen w-screen justify-center">
    <div class="relative flex w-10/12 items-end py-28">
      <div class="flex h-3/4 flex-col justify-start gap-12">
        <div class="flex flex-col gap-4">
          <p class="font-serif text-6xl capitalize">Project Name</p>
          <ul class="flex gap-4 text-2xl uppercase">
            <li>HTML</li>
            <li>CSS</li>
            <li>Angular</li>
          </ul>
        </div>
        <div class="ml-36 w-1/3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            fugit numquam quia aliquid natus saepe praesentium quo voluptatibus
            sint beatae nam! Natus iure molestias id aperiam, est similique
            minus quibusdam.
          </p>
          <div class="mt-8 flex gap-16">
            <button
              class="hover: rounded-xl bg-slate-200 p-2 font-normal text-neutral-950 transition duration-150 hover:scale-110 hover:bg-[#e4cb86]"
            >
              Run Project
            </button>
            <button
              class="rounded-xl bg-slate-200 p-2 font-normal text-neutral-950 transition duration-150 hover:scale-110 hover:bg-[#e4cb86]"
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
