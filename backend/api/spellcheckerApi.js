module.exports = (app) => {
  const db = app.config.mongodb;

  const testSpellcheckerApi = (req, res) => {

    // const dicCollection = db.getDb().db().collection('dictionary');
    try {
       // Some CRUD operations with mongoDB
       res.status(201).json({ fakeList: [1,2,3,4,5] });
    } catch (err) {

    }
  }

  return {
    testSpellcheckerApi
  };
}