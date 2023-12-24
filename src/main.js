import { createApp } from "vue";
import App from "./App.vue";
import router from "./Routes.js";
import "https://kit.fontawesome.com/002f302af0.js";
import "./style.css";

createApp(App).use(router).mount("#app");
