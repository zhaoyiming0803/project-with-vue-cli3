import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Http from '@/libs/http'

Vue.config.productionTip = false

Vue.prototype.$Http = Http;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
