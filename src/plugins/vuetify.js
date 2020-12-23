import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/lib/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#0B4DC2',
        comple: '#2adffa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#4BA3C7',
        success: '#24CBBC',
        warning: '#FFC107',
        while: '#FFFFFF',
        black: '#292929',
        bg: "#808FAE"
      },
    },
  },
    lang: {
      locales: { es },
      current: 'es',
    },
});
