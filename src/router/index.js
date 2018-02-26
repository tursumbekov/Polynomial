import Vue from 'vue';
import Router from 'vue-router';
import Polynomial from '@/components/Polynomial';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'polynomial',
      component: Polynomial,
    },
  ],
});
