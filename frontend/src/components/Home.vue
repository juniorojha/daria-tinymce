/* eslint-disable no-undef */ /* eslint-disable no-undef */ /* eslint-disable func-names */
<template>
  <v-layout row justify-start align-start class="blue-grey lighten-5">
    <v-flex xs9 mr-2>
      <tiny-editor
        id="editor-tiny"
        ref="editor"
        v-model="content"
        :init="options"
        @onInit="initFunction"
      />
      <!-- @onSelectionChange="consolog('selection', $event)" -->
      <!-- @onContextMenu="consolog('contexmenu', $event)"
       -->
    </v-flex>
    <v-flex id="editor-lateral">
      <v-btn key="backendTest" color="red" dark @click="backendTest">Test backend</v-btn>
      <v-flex v-if="listUserWords">Some dummy data: {{ listUserWords }}</v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Editor from '@tinymce/tinymce-vue'

// Mixins
import { configTiny } from './mixins/config-tiny'

export default {
  components: {
    'tiny-editor': Editor
  },
  mixins: [configTiny],
  data() {
    return {
      listUserWords: null
    }
  },
  computed: {
    ...mapGetters([])
  },
  mounted() {},
  methods: {
    ...mapActions(['getListNewWordsUser']),
    async backendTest() {
      this.listUserWords = await this.getListNewWordsUser()
    },
    initFunction() {
      // content is declared on mixin
      this.content = 'Welcome to Laudite sandbox'
    }
  }
}
</script>

<style scoped lang="scss">
.paste {
  display: none !important;
  visibility: hidden;
  opacity: 0;
}

.loading-editor-tiny {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#editor-lateral {
  border: 1px solid rgba(9, 84, 169, 0.48);
  border-radius: 1rem;
  height: 100vh;
  max-width: 30vw;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  display: flex;
  flex-flow: column wrap;
  justify-content: start;
  align-items: center;
}

// Box principal do editor
::v-deep .tox.tox-tinymce {
  border: 1px solid rgba(9, 84, 169, 0.48);
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  max-width: 65vw;
}
// Box ao redor do html do editor - editar borda top
::v-deep .tox-edit-area {
  border-top: 2px solid rgba(8, 17, 75, 0.56) !important;
  -webkit-box-shadow: 0px -9px 13px -6px rgba(96, 110, 204, 0.56);
  -moz-box-shadow: 0px -9px 13px -6px rgba(96, 110, 204, 0.56);
  box-shadow: 0px -9px 13px -6px rgba(96, 110, 204, 0.56) !important;
}

// Toolbar geral - para modificar background
::v-deep .tox-editor-container .tox-toolbar {
  background: linear-gradient(to right, #f2f1f3 0%, #eceff1 100%) !important;
  border: 0px;
}

// Box font-size - reduzir  as dimensões
::v-deep .tox-tbtn.tox-tbtn--select.tox-tbtn--bespoke:nth-child(1) {
  width: 4.5em !important;
}

// Box font-family - reduzir  as dimensões
::v-deep .tox-tbtn.tox-tbtn--select.tox-tbtn--bespoke:nth-child(2) {
  width: 6em !important;
}

// Box parágrafo
::v-deep [title='Formatos'].tox-tbtn.tox-tbtn--select.tox-tbtn--bespoke {
  width: 6em !important;
}

// Box dos demais botões
::v-deep .tox-toolbar__group button.tox-tbtn {
  height: 30px;
  width: 28px;
}
</style>
