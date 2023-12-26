<template>
  <header class="absolute flex h-20 w-full justify-center">
    <div class="flex w-11/12 max-w-5xl flex-row items-center justify-between">
      <h1 class="font-serif text-3xl text-[#e4cb86]">
        <router-link to="/">Affaled</router-link>
      </h1>
      <Navbar />
      <div class="hidden max-sm:block">
        <i
          class="fa-solid fa-bars cursor-pointer rounded-sm bg-[#e4cb86] p-3 text-black"
          @click="openMobileNav"
        />
      </div>
      <MobileNav />
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "./Navbar.vue";
import MobileNav from "./MobileNav.vue";

export default defineComponent({
  components: { Navbar, MobileNav },
  methods: {
    openMobileNav() {
      if (document.getElementById("mobileNav").classList.contains("hidden")) {
        document.getElementById("mobileNav").classList.remove("hidden");
      } else {
        document.getElementById("mobileNav").classList.add("hidden");
      }
    },
  },
});
</script>
