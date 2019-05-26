import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// these are the shared styles that are used across the app
import './styles.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
