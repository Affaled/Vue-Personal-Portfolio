import { createI18n } from "vue-i18n";
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

export default i18n;
