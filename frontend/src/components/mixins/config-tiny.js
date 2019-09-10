/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */

import { mapGetters } from 'vuex'

export const configTiny = {
  data() {
    const self = this
    return {
      content: '',
      options: {
        menubar: false,
        plugins: 'autosave lists table print fullscreen image hr',
        external_plugins: {
          preventdelete: '/js/plugins/preventdelete/preventdelete.js'
        },
        toolbar: [
          'bold italic underline removeformat | fontsizeselect fontselect |',
          'alignleft aligncenter alignright alignjustify bullist numlist outdent indent styleselect |',
          'table image | fullscreen undo redo restoredraft'
        ],
        fontsize_formats: '4pt 8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 20pt 24pt 36pt 48pt',
        table_default_attributes: {
          border: '1'
        },
        indentation: '20pt',
        extended_valid_elements:
          'button[class|color|type|wfd-id],v-btn[color],div[color|id|class],--[*]',
        custom_elements: 'v-btn,button',
        // valid_children: '+body[meta|b],+b[div|span|#text|object],+div[span|meta]',
        protect: [/<div id="laudo">/g, /<div><!-- end="laudo" -->/g],
        height: '100vh',
        language: 'pt_BR',
        language_url: '/languages/pt_BR.js',
        browser_spellcheck: true,
        // resize: 'both',
        statusbar: false,
        content_css: '/css/editor-tiny.css',
        style_formats: [
          {
            title: 'Espaçamento',
            items: [
              { title: '1.0', selector: 'p,li,div', styles: { 'line-height': '1' } },
              { title: '1.2', selector: 'p,li,div', styles: { 'line-height': '1.2' } },
              { title: '1.4', selector: 'p,li,div', styles: { 'line-height': '1.4' } },
              { title: '1.5', selector: 'p,li,div', styles: { 'line-height': '1.5' } },
              { title: '1.6', selector: 'p,li,div', styles: { 'line-height': '1.6' } },
              { title: '1.8', selector: 'p,li,div', styles: { 'line-height': '1.8' } },
              { title: '2.0', selector: 'p,li,div', styles: { 'line-height': '2' } }
            ]
          },
          {
            title: 'Espaço antes',
            items: [
              { title: '0 pt', selector: 'p,li,div', styles: { 'margin-top': '0pt' } },
              { title: '3 pt', selector: 'p,li,div', styles: { 'margin-top': '3pt' } },
              { title: '6 pt', selector: 'p,li,div', styles: { 'margin-top': '6pt' } },
              { title: '9 pt', selector: 'p,li,div', styles: { 'margin-top': '9pt' } },
              { title: '11pt', selector: 'p,li,div', styles: { 'margin-top': '11pt' } }
            ]
          },
          {
            title: 'Espaço depois',
            items: [
              { title: '0 pt', selector: 'p,li,div', styles: { 'margin-bottom': '0pt' } },
              { title: '3 pt', selector: 'p,li,div', styles: { 'margin-bottom': '3pt' } },
              { title: '6 pt', selector: 'p,li,div', styles: { 'margin-bottom': '6pt' } },
              { title: '9 pt', selector: 'p,li,div', styles: { 'margin-bottom': '9pt' } },
              { title: '11pt', selector: 'p,li,div', styles: { 'margin-bottom': '11pt' } }
            ]
          },
          {
            title: 'Badge',
            inline: 'span',
            styles: {
              display: 'inline-block',
              border: '1px solid #2276d2',
              'border-radius': '5px',
              padding: '2px 5px',
              margin: '0 2px',
              color: '#2276d2'
            }
          }
        ],
        setup(editor) {},
        init_instance_callback(editor) {
          // Shortcuts and useful things go here.
          // editor.shortcuts.add("alt+shift+c", "A New Way To Copy", "Copy")
          editor.shortcuts.add('alt+s', 'Show Me My Content', () => {
            // some action
          })

          editor.on('paste', e => {})
        }
      }
    }
  },
  computed: {
    ...mapGetters(['dadosMascaraAtual'])
  },
  created() {
    this.content = '<div id="laudo" class="laudite">Comece um novo laudo!</div>'
  },
  methods: {}
}
