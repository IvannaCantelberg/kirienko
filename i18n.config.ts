import en from './lang/en-US.json';
import nl from './lang/nl-NL.json';
import ua from './lang/ua-UA.json';

export default defineI18nConfig(() => ({
 legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    nl,
    ua
  }
}))