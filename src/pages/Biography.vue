<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-start pb-12 pt-32"
  >
    <h2 class="text-center font-serif text-7xl capitalize">Biography</h2>
    <div>
      <h3 class="text-start font-serif text-3xl">Front-end developer</h3>
      <p class="text-start">{{ BiographyData.professionalInfo[0] }}</p>
      <p class="text-start">{{ BiographyData.professionalInfo[1] }}</p>
      <p class="text-start">{{ BiographyData.professionalInfo[2] }}</p>
    </div>
  </section>
</template>

<script>
import BiographyData from "../data/BiographyData.js";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      BiographyData,
    };
  },
});
</script>
