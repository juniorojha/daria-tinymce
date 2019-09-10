import Vue from 'vue'
// import '@fortawesome/fontawesome-free/css/all.css';
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl' // EM ANÁLISE - Migrar para usar sass / scss permitindo encapsular em determinados componentes

Vue.use(Vuetify, {
  iconfont: 'fa'
})
