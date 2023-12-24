<template>
  <header class="absolute flex h-20 w-full justify-center">
    <div class="flex w-11/12 max-w-5xl flex-row items-center justify-between">
      <h1 class="font-serif text-3xl text-[#e4cb86]">
        <router-link to="/">Affaled</router-link>
      </h1>
      <nav class="text-sm font-semibold">
        <ul class="flex flex-row gap-8">
          <li class="uppercase hover:text-[#e4cb86]">
            <router-link to="/">Home</router-link>
          </li>
          <li class="uppercase hover:text-[#e4cb86]">
            <router-link to="/biography">Biography</router-link>
          </li>
          <li class="uppercase hover:text-[#e4cb86]">
            <router-link to="/projects">Projects</router-link>
          </li>
        </ul>
      </nav>
      <div class="flex flex-row gap-4 text-3xl">
        <a href="https://github.com/affaled" target="_blank">
          <i class="fab fa-github hover:text-[#e4cb86]"></i>
        </a>
        <a href="https://instagram.com/affaled.dev" target="_blank">
          <i class="fab fa-instagram hover:text-[#e4cb86]"></i>
        </a>
        <a href="https://linkedin.com/in/lucas-affaled" target="_blank">
          <i class="fab fa-linkedin hover:text-[#e4cb86]"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>
