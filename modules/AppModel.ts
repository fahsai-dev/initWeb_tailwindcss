import { types } from "mobx-state-tree";
import { AppLanguage } from "utils/i18n";
import storejs from 'store';

export const AppModel = types
  .model({
    appLanguage: types.optional(types.string, 'en'),
  })
  .views((self) => ({
    // 
  }))
  .actions((self) => ({
    initAppLanguage: () => {
      var currentLocalStorage = storejs.get('appLanguage')
      self.appLanguage = currentLocalStorage;
    },
    setAppLanguage: (appLanguage: AppLanguage) => {
      self.appLanguage = appLanguage;
      storejs.set('appLanguage', appLanguage);
    },
  }))

export type IAppModel = typeof AppModel.Type;


