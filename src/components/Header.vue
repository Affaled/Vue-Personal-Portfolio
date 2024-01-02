<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      LanguagesOpen: false,
    };
  },
});
</script>

<template>
  <header
    class="absolute z-50 flex h-28 w-full items-center justify-center pt-12"
  >
    <div
      class="flex h-full w-10/12 items-center justify-between uppercase text-[#a7141e]"
    >
      <div class="flex flex-col items-center font-serif text-4xl">
        <router-link
          to="/"
          class="text-center font-bold transition duration-150 hover:scale-105"
        >
          Affaled
        </router-link>
      </div>
      <div class="flex items-center gap-6 font-semibold">
        <nav>
          <ul class="flex gap-6">
            <li class="transition duration-150 hover:scale-110">
              <router-link to="/" class="text-center">Home</router-link>
            </li>
            <li class="transition duration-150 hover:scale-110">
              <router-link to="/projects" class="text-center"
                >Projects</router-link
              >
            </li>
            <li class="transition duration-150 hover:scale-110">
              <router-link to="/biography" class="text-center"
                >Biography</router-link
              >
            </li>
          </ul>
        </nav>
        <p
          class="flex cursor-pointer items-center gap-1 text-center uppercase transition duration-150 hover:scale-105"
        >
          En <i class="fas fa-angle-down"></i>
        </p>
      </div>
    </div>
  </header>
</template>
