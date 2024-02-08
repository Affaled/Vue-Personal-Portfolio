<script>
import { defineComponent } from "vue";
import Navbar from "./Navbar.vue";
export default defineComponent({
  components: { Navbar },
});
</script>

<template>
  <header
    class="absolute left-0 top-0 z-50 flex h-28 w-full items-center justify-center pt-12"
  >
    <div class="flex h-full w-10/12 items-center justify-between uppercase">
      <div
        class="font-regular flex flex-col items-center text-center font-serif text-4xl"
      >
        {{ $i18n.t("header.title") }}
      </div>
      <div class="flex items-center gap-6 font-light">
        <Navbar />
        <p
          class="flex cursor-pointer items-center gap-1 text-center uppercase hover:scale-105 hover:font-semibold hover:text-[#a7141e]"
        >
          {{ $i18n.locale }} <i class="fas fa-angle-down"></i>
        </p>
      </div>
    </div>
  </header>
</template>
