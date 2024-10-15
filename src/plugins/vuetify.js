import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import fr from '@/i18n/fr';
import en from '@/i18n/en';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#2B7C85',
        secondary: '#87ACA3',
        accent: '#0C1446',
        error: '#b71c1c'
      }
    }
  },
  lang: {
    locales: { fr, en },
    current: 'fr'
  }
});
