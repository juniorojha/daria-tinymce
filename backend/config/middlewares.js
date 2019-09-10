/* eslint-disable no-unused-vars */
/* importar módulos dos middleware */
const bodyParser = require('body-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
/* importar o módulo nativo do node para manipular paths - uso no express.static abaixo */
const path = require('path');
// módulo para resolver problema de modo history do route em Single Page Aplications
const history = require('connect-history-api-fallback');

module.exports = (app) => {
  /* configurar o middleware history para resolver problema do modo history do vuerouter */
  app.use(history());
  /* configurar o middleware body-parser para aceitar urlencoded e json */
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  /* configurar o middleware cors para a API aceitar CORS */
  app.use(cors());
  /* configurar o middleware express.static - através do camnho virtual /static iremos acessar
    os arquivos estáticos do servior */
  // app.use('/static', app.static(path.join('servidor/static')));
  /* configurar o middleware express-validator */
  app.use(expressValidator());
};
