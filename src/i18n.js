// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        text:
          "The speedy Hindu bat happily ate thistle and kiwi; the stork played the saxophone behind the straw pen, while the young fox looked disdainfully at the owl, who, calm, rested in the old leafy oak.",
        button: "Translate",
      },
    },
    es: {
      translation: {
        text:
          "El veloz murciélago hindú comía feliz cardillo y kiwi; la cigüeña tocaba el saxofón detrás del palenque de paja, mientras el joven zorro miraba con desdén al búho que, tranquilo, descansaba en la vieja encina frondosa.",
        button: "Traducir",
      },
    },
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
