import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver'
// import 'tinymce/themes/modern/theme';
// import "/public/skins/ui/oxide/skin.min.css";
// import "/public/skins/ui/oxide/content.min.css";
// import "/public/skins/content/default/content.min.css";
import 'tinymce/plugins/lists'
import 'tinymce/plugins/table'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/print'
import 'tinymce/plugins/autosave'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/image'
// import 'tinymce/plugins/paste';

// import 'tinymce/plugins/pagebreak';

global.$$ = tinymce.dom.DomQuery
