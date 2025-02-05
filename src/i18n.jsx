import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import uz from "./locales/uzbek.json";
import ru from "./locales/russian.json";
import eng from "./locales/english.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    debug: true,
    lng: "uz",
    resources: {
      uz: { translation: uz },
      ru: { translation: ru },
      eng: { translation: eng },
    },

    detaction: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookuplocalStorage: "lenguage",
    },
  });

export default i18n;
