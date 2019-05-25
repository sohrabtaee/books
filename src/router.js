import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
// routes
import Discover from './views/Discover.vue';
import Login from './views/Login.vue';
import Book from './views/Book.vue';
import PageNotFound from './views/PageNotFound.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'discover',
      component: Discover
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/book/:bookId',
      name: 'book',
      component: Book
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
});

// navigation guard
router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    // redirect to home if the user is logged in
    if (store.state.userId) {
      next('/');
    } else {
      next();
    }
  } else {
    // navigate to the route if user is logged in
    if (store.state.userId) {
      next();
    } else {
      // find user id from local storage
      store.dispatch('findUser');
      // navigate to the route if user id is found
      if (store.state.userId) {
        next();
      } else {
        next('/login');
      }
    }
  }
});

export default router;
