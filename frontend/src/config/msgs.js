import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  iconPack: 'fontawesome',
  duration: 4000,
  singleton: true
})

Vue.toasted.register(
  'defaultSuccess',
  payload => (!payload.msg ? 'Operação realidada com sucesso!' : payload.msg),
  { type: 'success', icon: 'check', position: 'bottom-center' }
)

Vue.toasted.register(
  'defaultError',
  payload => (!payload.msg ? 'Oops... Erro inesperado.' : payload.msg),
  {
    type: 'error',
    icon: 'times',
    position: 'top-center',
    fitToScreen: true,
    fullWidth: true
  }
)

// Definindo como variábel global, sendo acessada em qualquer lugar da aplicação por $router
global.$toasted = Vue.toasted
