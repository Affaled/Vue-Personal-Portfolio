<template>
  <header class="absolute flex h-20 w-full justify-center">
    <div class="flex w-11/12 max-w-5xl flex-row items-center justify-between">
      <h1 class="font-serif text-3xl text-[#e4cb86]">
        <router-link to="/">Affaled</router-link>
      </h1>
      <nav class="text-sm font-semibold">
        <ul class="flex w-full flex-row items-center gap-8">
          <li>
            <router-link
              to="/"
              class="uppercase transition duration-150 hover:text-[#e4cb86]"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/biography"
              class="uppercase transition duration-150 hover:text-[#e4cb86]"
              >Biography</router-link
            >
          </li>
          <li>
            <router-link
              to="/projects"
              class="uppercase transition duration-150 hover:text-[#e4cb86]"
              >Projects</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="flex flex-row gap-4 text-3xl">
        <a href="https://github.com/affaled" target="_blank">
          <i
            class="fab fa-github transition duration-150 hover:text-[#e4cb86]"
          ></i>
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
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>
