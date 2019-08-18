import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Http from '@/libs/http'
import event from '../public/js/event';

Vue.config.productionTip = false

Vue.prototype.$Http = Http;
Vue.prototype.$Event = event;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
