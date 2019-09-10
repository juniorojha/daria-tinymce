import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
// import VueProgressBar from 'vue-progressbar';/

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Necessário para reload se houver o bug "chunk failed"
router.onError(error => {
  console.log('HANDLER GLOBAL ERRO')
  console.dir(error)
  if (/loading chunk \d* failed./i.test(error.message)) {
    // window.location.reload()
  }
})

// Definindo como variábel global, sendo acessada em qualquer lugar da aplicação por $router
global.$router = router

export default router
