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
  <header class="absolute flex h-28 w-full items-center justify-center">
    <div class="flex h-full w-10/12 items-center justify-between">
      <div class="flex flex-col items-center font-serif text-3xl">
        <router-link to="/" class="text-center uppercase hover:text-[#e4cb86]">
          Affaled
        </router-link>
      </div>
      <div class="flex items-center gap-8 text-lg font-light">
        <nav>
          <ul class="flex gap-8">
            <li class="uppercase">
              <router-link to="/" class="hover:text-[#e4cb86]"
                >Home</router-link
              >
            </li>
            <li class="uppercase">
              <router-link to="/projects" class="hover:text-[#e4cb86]"
                >Projects</router-link
              >
            </li>
            <li class="uppercase">
              <router-link to="/biography" class="hover:text-[#e4cb86]"
                >Biography</router-link
              >
            </li>
          </ul>
        </nav>
        <p
          class="flex cursor-pointer items-center gap-1 uppercase hover:text-[#e4cb86]"
        >
          En <i class="fas fa-angle-down"></i>
        </p>
      </div>
    </div>
  </header>
</template>
