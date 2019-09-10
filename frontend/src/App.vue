<template>
  <div id="app">
    <transition
      enter-active-class="animated zoomIn faster"
      leave-active-class="animated zoomOut faster"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {},
  created() {
    // Checar se token presente e válido, para direcionar para o laudite
    this.validarToken()
  },
  methods: {
    // Verifcando sempre o token para permitir o acesso à aplicação
    async validarToken() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss">
body {
  // Ocultar scrollbar */
  overflow: auto;
  // Make sure the inner div is not larger than the container so that we have room to scroll.

  // max-height: 100%;
  // Pick an arbitrary margin/padding that should be bigger than the max width
  // of all the scroll bars across the devices you are targeting. padding = -margin
  margin: 0;
  padding: 0;
  max-width: 100%;

  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #434343, #000000); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.44, rgb(122, 153, 217)),
      color-stop(0.72, rgb(73, 125, 189)),
      color-stop(0.86, rgb(28, 58, 148))
    );
  }
}
</style>
