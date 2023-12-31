<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    projectNames: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onClick() {
      console.log("click");
    },
  },
});
</script>

<template>
  <img
    v-for="(projectName, index) in projectNames"
    :key="index"
    src="https://picsum.photos/seed/picsum/200/300"
    :alt="projectName + ' project image'"
    class="object-fit h-24 w-96 rounded-sm"
    @click="$router.push({ path: `/projects/${projectName}` })"
  />
</template>
