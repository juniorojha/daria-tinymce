module.exports = (app) => {

  // Spellchecker API routes

  // ---- Test route
  app.route('/testSpellcheckerApi')
    .get(app.api.spellcheckerApi.testSpellcheckerApi);

};
