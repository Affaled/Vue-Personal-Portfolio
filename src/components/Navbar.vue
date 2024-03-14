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
      this.$router.push({ path: `/projects/${lastProject.path}` });
    },
  },
});
</script>

<template>
  <nav>
    <ul class="flex gap-6">
      <li class="transition duration-150 hover:scale-110">
        <router-link to="/" class="relative text-center">{{
          $i18n.t("header.nav.home")
        }}</router-link>
      </li>
      <li class="transition duration-150 hover:scale-110">
        <router-link @click="goToProject()" to="/" class="relative text-center">
          {{ $i18n.t("header.nav.projects") }}
        </router-link>
      </li>
      <li class="transition duration-150 hover:scale-110">
        <router-link to="/biography" class="relative text-center">{{
          $i18n.t("header.nav.biography")
        }}</router-link>
      </li>
    </ul>
  </nav>
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
