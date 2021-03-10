import i18n from 'i18next';
import EN from './translation/en.json';
import TH from './translation/th.json';
import { initReactI18next } from 'react-i18next';
import { appStore } from 'RootStore';

export const resources = {
  en: { translation: EN },
  th: { translation: TH },
} as const;


export const initI18nConfiguration = () => {
  i18n.use(initReactI18next).init({
    lng: appStore.appLanguage || "en",
    resources,
  });
};
