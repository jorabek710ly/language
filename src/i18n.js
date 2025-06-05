import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./locales/en.json";
import uzbek from "./locales/uz.json";
import russian from "./locales/ru.json";

const resources = {
    en: {
        translation: english
    },
    uz: {
        translation: uzbek
    },
    ru: {
        translation: russian
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru",
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;