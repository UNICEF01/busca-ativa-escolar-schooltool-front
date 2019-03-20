import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
import VueResource from 'vue-resource'
import VueTheMask from 'vue-the-mask'

Vue.use(VueTheMask)
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
