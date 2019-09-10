/* eslint-disable no-undef */
export const baseApiUrl = 'http://localhost:5000'

export function showError(e, title, msg) {
  console.dir(e)
  // Se erro backend tipo 'Unauthorized', o token expirou e o usuário está tentando utilizar api protegida
  if (e && e.response && e.response.data === 'Unauthorized') {
    localStorage.removeItem(userKey)
    // definimos variável global para router ($router)
    $router.push({ name: 'home', query: { erroToken: 'token expirado' } })
    return
  }

  if (titulo === 'Cadastro nova máscara') {
    Vue.toasted.global.defaultError({ msg })
  } else if (titulo === 'Cadastro novos items do form nova máscara') {
    // Apenas enviar ao database
  }

  // Outros tipos de erros ainda sem tratamento, apenas informando msg
  if (e && e.response && e.response.data) {
    Vue.toasted.global.defaultError({ msg: e.response.data.message })
  } else if (typeof e === 'string') {
    Vue.toasted.global.defaultError({ msg: e })
  } else if (e && e.message) {
    Vue.toasted.global.defaultError({ msg: e.message })
  } else {
    Vue.toasted.global.defaultError()
  }
}

export default { baseApiUrl, showError }
