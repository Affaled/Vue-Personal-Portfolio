<template>
  <img
    v-for="(iconName, index) in iconNames"
    :key="index"
    :src="getItemSrc(iconName)"
    class="h-10 w-10"
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
