import 'react-i18next';
import { resources } from '../utils/i18n/i18nConfig';

declare module 'react-i18next' {
  type DefaultResources = typeof resources['en'];
  interface Resources extends DefaultResources { }
}