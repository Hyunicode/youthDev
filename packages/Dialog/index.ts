import { App, Plugin } from 'vue';
import Dialog from './src/index.vue';

export const DialogPlugin: Plugin = {
  install(app: App) {
    app.component('y-dialog', Dialog);
  },
};

export {
  Dialog,
};
