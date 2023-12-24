<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-start gap-20 pb-12 pt-32"
  >
    <h2 class="text-center font-serif text-7xl capitalize">Biography</h2>
    <div class="flex w-11/12 max-w-5xl flex-row items-center justify-between">
      <img
        src="../assets/images/photo.jpg"
        alt=""
        class="h-96 w-96 rounded-3xl object-cover"
      />
      <div class="w-1/2 space-y-4">
        <h3 class="text-start font-serif text-4xl capitalize">
          Front-end developer
        </h3>
        <p class="text-start">{{ BiographyData.professionalInfo[0] }}</p>
        <p class="text-start">{{ BiographyData.professionalInfo[1] }}</p>
      </div>
    </div>
    <div class="flex w-11/12 max-w-5xl flex-col items-center justify-between">
      <div class="w-1/2 space-y-4">
        <h3 class="text-start font-serif text-4xl capitalize">
          Getting to know me
        </h3>
        <p class="text-start">{{ BiographyData.personalInfo[0] }}</p>
        <p class="text-start">{{ BiographyData.personalInfo[1] }}</p>
        <p class="text-start">{{ BiographyData.personalInfo[2] }}</p>
      </div>
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
