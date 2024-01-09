import { createRouter, createWebHistory } from 'vue-router';

//import Home from '../views/Home.vue';
//import About from '../views/About.vue';
//import Posters from '../views/Poster.vue';

const Home = () => import('../views/Home.vue');

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: () => import('../views/About.vue') },
  { path: "/poster", name: "PosterList", component: () => import('../views/Poster.vue')},
  { path: "/poster/:id", name: "PosterDetails", component: () => import('../views/PosterDetails.vue'), props: true,},
  { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import('../views/NotFound.vue')},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;