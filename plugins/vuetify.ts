// plugins/vuetify.ts
import {createVuetify, type ThemeDefinition} from 'vuetify';
import {aliases, mdi} from 'vuetify/iconsets/mdi-svg';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const myCustomTheme: ThemeDefinition = {
  colors: {
    primary: '#04ab59',
    light_black: '#1F1F1F91'
  }
};
const icons = {};
export default defineNuxtPlugin(app => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
        myCustomTheme
      }
    },
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        ...icons
      },
      sets: {
        mdi
      }
    }
  });

  app.vueApp.use(vuetify);
});
