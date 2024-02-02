<script>
import { defineComponent } from "vue";
import projectsData from "../../public/data/projectsData.json";
export default defineComponent({
  data() {
    return {
      selectedProject: null,
    };
  },
  methods: {
    goToProject() {
      const lastProject = projectsData[projectsData.length - 1];
      this.$router.push({ path: `/projects/${lastProject.id}` });
    },
  },
});
</script>

<template>
  <header
    class="absolute z-50 flex h-28 w-full items-center justify-center pt-12"
  >
    <div class="flex h-full w-10/12 items-center justify-between uppercase">
      <div
        class="font-regular flex flex-col items-center text-center font-serif text-4xl"
      >
        Affaled
      </div>
      <div class="flex items-center gap-6 font-light">
        <nav>
          <ul class="flex gap-6">
            <li class="transition duration-150 hover:scale-110">
              <router-link to="/" class="relative text-center"
                >Home</router-link
              >
            </li>
            <li class="transition duration-150 hover:scale-110">
              <router-link
                @click="goToProject()"
                to="/"
                class="relative text-center"
              >
                Projects
              </router-link>
            </li>
            <li class="transition duration-150 hover:scale-110">
              <router-link to="/biography" class="relative text-center"
                >Biography</router-link
              >
            </li>
          </ul>
        </nav>
        <p
          class="flex cursor-pointer items-center gap-1 text-center uppercase hover:scale-105 hover:font-semibold hover:text-[#a7141e]"
        >
          En <i class="fas fa-angle-down"></i>
        </p>
      </div>
    </div>
  </header>
</template>

<style scoped>
a::after {
  content: "";
  position: absolute;
  background-color: #a7141e;
  width: 0%;
  height: 2px;
  left: 0;
  bottom: -1px;
  transition: width 0.3s ease-in-out;
}

a:hover::after {
  width: 100%;
}
</style>
