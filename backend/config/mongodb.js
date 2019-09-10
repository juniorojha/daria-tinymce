/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const mongodb = require('mongodb');
const { db: mongoDados } = require('../keys');

module.exports = (app) => {
  // eslint-disable-next-line prefer-destructuring
  const MongoClient = mongodb.MongoClient;
  const mongoDbUrl = `mongodb+srv://${mongoDados.user}:${mongoDados.password}@${mongoDados.host}/${mongoDados.database}?retryWrites=true`;

  let _db;

  // Função para iniciar a conexão com o servidor mongoDB
  const initDb = (callback) => {
    if (_db) {
      console.log('Database is already initialized!');
      return callback(null, _db);
    }
    MongoClient.connect(mongoDbUrl,{ useNewUrlParser: true })
      .then((client) => {
        _db = client;
        callback(null, _db);
      })
      .catch((err) => {
        callback(err);
      });
  };

  // Função para obter o cliente mongoDB durante aplicação
  const getDb = () => {
    if (!_db) {
      throw Error('Database not initialzed');
    }
    return _db;
  };




  return {
    initDb,
    getDb
  };
};