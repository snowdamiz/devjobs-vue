import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './styles/reset.css'

Vue.config.productionTip = false

const stores = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export default stores