import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import store from './store'
import './components'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
