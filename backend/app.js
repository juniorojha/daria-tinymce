/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* importar as configurações do servidor */
const app = require('./config/server');

/* importar as configurações de conexão com banco mongoDB */
const mongoDB = app.config.mongodb;

/* parametrizar a porta de escuta e vincular ao acesso ao banco de dados (pooling mongoDB) */

const expressPort = 5000;

mongoDB.initDb((err, db) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(expressPort, () => {
      console.log(`Server online, listening on port: ${expressPort}`);
    });
  }
});
