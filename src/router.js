import { createRouter, createWebHashHistory, RouterView } from 'vue-router';
import Tr from '@/i18n/translation';
import homeView from './views/homeView.vue';
import aboutView from './views/aboutView.vue';
import contactView from './views/contactView.vue';
import courseView from './views/courseView.vue';
import coursesView from './views/coursesView.vue';
const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    
    {
      path: '/:locale?',
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: '',
          name: 'home',
          component: homeView,
        },
        {
          path: 'about',
          name: 'about',
          component: aboutView,
        },
        {
          path: 'contact',
          name: 'contact',
          component: contactView,
        },
        {
          path: 'courses',
          name: 'courses',
          component: coursesView,
        },
        {
          path: 'course/:courseId',
          name: 'course',
          component: courseView,
        },
      ],
    },
  ],
});
router.beforeEach((to, from, next) => {
  let routeTitle = `Mobtaker - ${to.name}`;
  if (to.params.title) {
    routeTitle += ` - ${to.meta.title}`;
  }
  document.title = routeTitle;
  next();
});

export default router;
