<template>
  <nav class="text-sm font-semibold max-sm:hidden">
    <ul class="flex w-full flex-row items-center gap-8">
      <li>
        <router-link
          to="/"
          class="uppercase transition duration-150 hover:text-[#e4cb86]"
          :class="{ 'text-[#e4cb86]': $route.path === '/' }"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link
          to="/biography"
          class="uppercase transition duration-150 hover:text-[#e4cb86]"
          :class="{ 'text-[#e4cb86]': $route.path === '/biography' }"
        >
          Biography
        </router-link>
      </li>
      <li>
        <router-link
          to="/projects"
          class="uppercase transition duration-150 hover:text-[#e4cb86]"
          :class="{ 'text-[#e4cb86]': $route.path === '/projects' }"
        >
          Projects
        </router-link>
      </li>
    </ul>
  </nav>
  <div class="flex flex-row gap-4 text-3xl max-sm:hidden">
    <a href="https://github.com/affaled" target="_blank">
      <i class="fab fa-github transition duration-150 hover:text-[#e4cb86]"></i>
    </a>
    <a href="https://instagram.com/affaled.dev" target="_blank">
      <i
        class="fab fa-instagram transition duration-150 hover:text-[#e4cb86]"
      ></i>
    </a>
    <a href="https://linkedin.com/in/lucas-affaled" target="_blank">
      <i
        class="fab fa-linkedin transition duration-150 hover:text-[#e4cb86]"
      ></i>
    </a>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
});
</script>
