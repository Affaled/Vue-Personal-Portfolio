<template>
  <div class="flex flex-row gap-2">
    <img
      v-for="(iconName, index) in iconNames"
      :key="index"
      :src="getItemSrc(iconName)"
      class="h-10 w-10"
      :alt="iconName + ' icon'"
    />
  </div>
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
