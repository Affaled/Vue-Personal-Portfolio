import { createApp } from "vue";

import App from "./App.vue";
import router from "./Routes.js";
import i18n from "./i18n.js";

import "https://kit.fontawesome.com/002f302af0.js";
import "./style.css";

createApp(App).use(router).use(i18n).mount("#app");
