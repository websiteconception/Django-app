import i18n from "i18next"
import English from "./locales/en"
import Spanish from "./locales/es"
import { AppLocaleResources } from "types/localization"
import { initReactI18next } from "react-i18next"

const resources: AppLocaleResources = {
  en: {
    translation : {
      ...English,
    },
  },
  es: {
    translation: {
      ...Spanish,
    },
  },
}


const configureLocales = (lng: string = "en") => {
  i18n.use(initReactI18next).init({
    resources,
    lng,
    keySeparator:false,
    interpolation: {
      escapeValue: false,
    },
  })
}


export default configureLocales