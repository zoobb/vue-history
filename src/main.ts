import { createApp } from 'vue';
import './style.css';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import router from './router';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import App from './App.vue';

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(router);
app.mount('#app');
