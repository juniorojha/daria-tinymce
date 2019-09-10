import Vue from 'vue'
import App from './App.vue'
import router from './config/router'
import store from './store/store'

// plugin global vuetify
import './framework/vuetify'

// plugin global editor tiny
import './config/tiny'

// plugin global vue toasted
import './config/msgs'

// plugin jquery
import './config/jquery'

// configuração axios - vue axios
import './config/axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
