import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import fr from "./lang/fr.json";
import eng from "./lang/eng.json";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     fr: {
       translation: fr
     },
     eng: {
       translation: eng
     }
   }
 });

 i18n.changeLanguage("fr")

export default i18n;