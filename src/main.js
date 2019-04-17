import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import './assets/style/border.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
