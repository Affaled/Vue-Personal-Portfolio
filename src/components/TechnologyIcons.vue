<template>
  <img
    v-for="(iconName, index) in iconNames"
    :key="index"
    :src="getItemSrc(iconName)"
    class="h-16 w-16"
    :alt="iconName + ' icon'"
  />
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    iconNames: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getItemSrc(iconName) {
      return `/svg/${iconName}.svg`;
    },
  },
});
</script>
