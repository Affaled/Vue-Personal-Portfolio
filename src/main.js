import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import "https://kit.fontawesome.com/002f302af0.js";
import App from "./App.vue";
import router from "./Routes.js";
import "./style.css";
import { pt } from "./locales/pt.js";
import { en } from "./locales/en.js";

const languages = {
  pt,
  en,
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: languages,
});

createApp(App).use(router).use(i18n).mount("#app");
