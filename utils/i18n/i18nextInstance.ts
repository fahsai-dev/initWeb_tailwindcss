import i18n from 'i18next';
import { appStore } from 'RootStore';

export type AppLanguage = "th" | "en";

export const changeLanguage = (locale: AppLanguage) => {
  appStore.setAppLanguage(locale);
  i18n.changeLanguage(locale)
};


