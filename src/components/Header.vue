<template>
  <header class="flex h-16 w-full justify-center">
    <div class="flex w-11/12 max-w-5xl flex-row items-center justify-between">
      <h1 class="font-serif text-3xl text-[#e4cb86]">Affaled</h1>
      <nav class="text-sm font-semibold">
        <ul class="flex flex-row gap-8">
          <li class="hover:text-[#e4cb86]">
            <router-link to="/">Home</router-link>
          </li>
          <li class="hover:text-[#e4cb86]">
            <router-link to="/biography">Biography</router-link>
          </li>
          <li class="hover:text-[#e4cb86]">
            <router-link to="/projects">Projects</router-link>
          </li>
        </ul>
      </nav>
      <div class="flex flex-row gap-4 text-3xl">
        <a href="https://github.com/affaled" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://instagram.com/affaled.dev" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com/in/lucas-affaled" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>
