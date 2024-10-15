import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/home/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/Index.vue')
      },
      {
        path: 'projects',
        name: 'Projects',
        component: () => import('@/views/projects/Index.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/contact/Index.vue')
      },
      {
        path: '*',
        redirect: '/'
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'hash',

  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes
});
export default router;
