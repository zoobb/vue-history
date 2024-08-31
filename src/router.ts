import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import FifthClass from './views/FifthClass.vue';
import TenthClass from './views/TenthClass.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      meta: {
        banner: '/src/assets/history_banner.png',
      },
    }, {
      path: '/fifth_class',
      name: 'fifth_class',
      component: FifthClass,
      meta: {
        banner: '/src/assets/history_banner.png',
      },
    }, {
      path: '/10th_class',
      name: '10th_class',
      component: TenthClass,
      meta: {
        banner: '/src/assets/history_banner.png',
      },
    },
  ],
});

export default router;
