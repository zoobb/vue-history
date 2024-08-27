import { createApp } from 'vue';
import './style.css';
import router from './router';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
