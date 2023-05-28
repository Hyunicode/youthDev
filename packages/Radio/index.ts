import { App, Plugin } from 'vue';
import Radio from './src/radio.vue';
import RadioGroup from './src/radio-group.vue';

export const RadioPlugin: Plugin = {
  install(app: App) {
    app.component('y-radio', Radio);
    app.component('y-radio-group', RadioGroup);
  },
};

export { Radio };
