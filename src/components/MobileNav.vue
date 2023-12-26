<template>
  <div class="absolute right-0 top-20 hidden w-full bg-none" id="mobileNav">
    <div class="flex w-full flex-col items-center bg-none">
      <div class="flex w-11/12 flex-col items-end bg-none">
        <div
          class="flex flex-col gap-8 rounded-sm bg-neutral-800 px-12 py-6 text-sm font-semibold text-slate-200"
        >
          <nav>
            <ul class="flex flex-col gap-4">
              <li>
                <router-link
                  to="/"
                  class="uppercase transition duration-150 hover:text-[#e4cb86]"
                  :class="{ 'text-[#e4cb86]': $route.path === '/' }"
                  >Home</router-link
                >
              </li>
              <li>
                <router-link
                  to="/biography"
                  class="uppercase transition duration-150 hover:text-[#e4cb86]"
                  :class="{ 'text-[#e4cb86]': $route.path === '/biography' }"
                  >Biography</router-link
                >
              </li>
              <li>
                <router-link
                  to="/projects"
                  class="uppercase transition duration-150 hover:text-[#e4cb86]"
                  :class="{ 'text-[#e4cb86]': $route.path === '/projects' }"
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
      </div>
    </div>
  </div>
</template>
