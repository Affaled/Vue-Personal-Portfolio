import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Biography from "./pages/Biography.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/biography", component: Biography },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
