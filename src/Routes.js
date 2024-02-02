import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./pages/Home.vue") },
  {
    path: "/projects/:id",
    component: () => import("./pages/Projects.vue"),
  },
  { path: "/biography", component: () => import("./pages/Biography.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
