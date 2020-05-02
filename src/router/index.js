import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home,
  },
  {
    path: '/about',
    name: 'About',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/details/:id',
    name: 'DestinationDetails',
    props: true,
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "destination-details" */ '../views/DestinationDetails'),
    children: [
      {
        path: ':experienceSlug',
        name: 'ExperienceDetails',
        component: () =>
          // eslint-disable-next-line implicit-arrow-linebreak
          import(/* webpackChunkName: "experience-details" */ '../views/ExperienceDetails'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
