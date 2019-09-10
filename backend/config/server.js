/* importar o módulo do framework express */
const express = require('express');
/* importar o módulo do consign */
const consign = require('consign');

/* iniciar o objeto do express */
const app = express();

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
  .include('./config/mongodb.js')
  .then('./config/middlewares.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app);

/* exportar o objeto app */
module.exports = app;